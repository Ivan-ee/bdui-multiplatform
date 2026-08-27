package transport

import (
	"encoding/json"
	"log/slog"
	"net/http"

	"github.com/Ivan-ee/bdui-multiplatform/server/internal/service"
)

func Register(mux *http.ServeMux, catalog *service.Catalog, logger *slog.Logger) {
	h := &handlers{catalog: catalog, logger: logger}
	mux.Handle("GET /api/v1/objects", h.cors(h.objects))
	mux.Handle("GET /api/v1/layout/catalog", h.cors(h.layoutCatalog))
	mux.HandleFunc("GET /healthz", func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("ok"))
	})
}

type handlers struct {
	catalog *service.Catalog
	logger  *slog.Logger
}

// cors разрешает веб-кабинету (другой порт localhost) читать API.
// PROTOTYPE:_ORIGIN=* достаточно для среза.
func (h *handlers) cors(next http.HandlerFunc) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		if r.Method == http.MethodOptions {
			w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next(w, r)
	})
}

func (h *handlers) objects(w http.ResponseWriter, r *http.Request) {
	objs, err := h.catalog.ListObjects(r.Context())
	if err != nil {
		h.logger.Error("list objects", "err", err)
		http.Error(w, `{"title":"internal error"}`, http.StatusInternalServerError)
		return
	}
	writeJSON(w, objs)
}

func (h *handlers) layoutCatalog(w http.ResponseWriter, r *http.Request) {
	objs, err := h.catalog.ListObjects(r.Context())
	if err != nil {
		h.logger.Error("layout catalog", "err", err)
		http.Error(w, `{"title":"internal error"}`, http.StatusInternalServerError)
		return
	}
	writeJSON(w, buildCatalogLayout(objs))
}

func writeJSON(w http.ResponseWriter, v any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	enc := json.NewEncoder(w)
	enc.SetIndent("", "  ")
	_ = enc.Encode(v)
}
