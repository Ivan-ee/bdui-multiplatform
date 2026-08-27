package main

import (
	"context"
	"errors"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/Ivan-ee/bdui-multiplatform/server/internal/service"
	"github.com/Ivan-ee/bdui-multiplatform/server/internal/storage"
	"github.com/Ivan-ee/bdui-multiplatform/server/internal/transport"
)

func main() {
	logger := slog.New(slog.NewTextHandler(os.Stdout, nil))

	port := getenv("PORT", "8090")
	dsn := getenv("DATABASE_URL", "postgres://arenda:arenda@localhost:5432/arenda?sslmode=disable")

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	pool, err := storage.Connect(ctx, dsn, logger)
	if err != nil {
		logger.Error("postgres unavailable — поднимите docker compose up -d db (см. README)", "err", err)
		os.Exit(1)
	}
	defer pool.Close()
	slog.SetDefault(logger)

	mux := http.NewServeMux()
	transport.Register(mux, service.NewCatalog(pool), logger)

	srv := &http.Server{
		Addr:              ":" + port,
		Handler:           mux,
		ReadHeaderTimeout: 5 * time.Second,
	}

	go func() {
		logger.Info("server listening", "port", port)
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			logger.Error("listen", "err", err)
			os.Exit(1)
		}
	}()

	<-ctx.Done()
	shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := srv.Shutdown(shutdownCtx); err != nil {
		logger.Error("shutdown", "err", err)
	}
}

func getenv(k, def string) string {
	if v := os.Getenv(k); v != "" {
		return v
	}
	return def
}
