package transport

import (
	"encoding/json"
	"errors"
	"log/slog"
	"net/http"

	"github.com/Ivan-ee/bdui-multiplatform/server/internal/service"
)

func Register(mux *http.ServeMux, catalog *service.Catalog, payments *service.Payments, logger *slog.Logger) {
	h := &handlers{catalog: catalog, payments: payments, logger: logger}
	mux.Handle("GET /api/v1/objects", h.cors(h.objects))
	mux.Handle("GET /api/v1/objects/{id}", h.cors(h.object))
	mux.Handle("GET /api/v1/payments", h.cors(h.listPayments))
	mux.Handle("POST /api/v1/payments", h.cors(h.createPayment))
	mux.Handle("GET /api/v1/layout/catalog", h.cors(h.layoutCatalog))
	mux.Handle("GET /api/v1/layout/object/{id}", h.cors(h.layoutObject))
	mux.Handle("GET /api/v1/layout/pay/{id}", h.cors(h.layoutPay))
	mux.Handle("GET /api/v1/layout/my_payments", h.cors(h.layoutMyPayments))
	mux.HandleFunc("GET /healthz", func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("ok"))
	})
}

type handlers struct {
	catalog  *service.Catalog
	payments *service.Payments
	logger   *slog.Logger
}

// cors разрешает веб-кабинету (другой порт localhost) читать API.
// PROTOTYPE: origin=* достаточно для среза.
func (h *handlers) cors(next http.HandlerFunc) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next(w, r)
	})
}

func (h *handlers) objects(w http.ResponseWriter, r *http.Request) {
	objs, err := h.catalog.ListObjects(r.Context())
	if err != nil {
		h.fail(w, "list objects", err)
		return
	}
	writeJSON(w, objs)
}

func (h *handlers) object(w http.ResponseWriter, r *http.Request) {
	o, err := h.catalog.GetObject(r.Context(), r.PathValue("id"))
	if err != nil {
		h.fail(w, "get object", err)
		return
	}
	writeJSON(w, o)
}

func (h *handlers) listPayments(w http.ResponseWriter, r *http.Request) {
	pays, err := h.payments.ListPayments(r.Context())
	if err != nil {
		h.fail(w, "list payments", err)
		return
	}
	writeJSON(w, pays)
}

func (h *handlers) createPayment(w http.ResponseWriter, r *http.Request) {
	var req struct {
		ObjectID string `json:"object_id"`
		Months   int    `json:"months"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, `{"title":"bad request"}`, http.StatusBadRequest)
		return
	}
	pay, err := h.payments.CreatePayment(r.Context(), req.ObjectID, req.Months)
	if errors.Is(err, service.ErrObjectOccupied) {
		http.Error(w, `{"title":"object occupied"}`, http.StatusConflict)
		return
	}
	if err != nil {
		h.fail(w, "create payment", err)
		return
	}
	// Заголовки — строго до WriteHeader, иначе Content-Type потеряется.
	writeJSONStatus(w, http.StatusCreated, pay)
}

func (h *handlers) layoutCatalog(w http.ResponseWriter, r *http.Request) {
	objs, err := h.catalog.ListObjects(r.Context())
	if err != nil {
		h.fail(w, "layout catalog", err)
		return
	}
	writeJSON(w, buildCatalogLayout(objs))
}

func (h *handlers) layoutObject(w http.ResponseWriter, r *http.Request) {
	o, err := h.catalog.GetObject(r.Context(), r.PathValue("id"))
	if err != nil {
		h.fail(w, "layout object", err)
		return
	}
	writeJSON(w, buildObjectLayout(*o))
}

func (h *handlers) layoutPay(w http.ResponseWriter, r *http.Request) {
	o, err := h.catalog.GetObject(r.Context(), r.PathValue("id"))
	if err != nil {
		h.fail(w, "layout pay", err)
		return
	}
	writeJSON(w, buildPayLayout(*o))
}

func (h *handlers) layoutMyPayments(w http.ResponseWriter, r *http.Request) {
	pays, err := h.payments.ListPayments(r.Context())
	if err != nil {
		h.fail(w, "layout my payments", err)
		return
	}
	writeJSON(w, buildMyPaymentsLayout(pays))
}

func (h *handlers) fail(w http.ResponseWriter, msg string, err error) {
	h.logger.Error(msg, "err", err)
	http.Error(w, `{"title":"internal error"}`, http.StatusInternalServerError)
}

func writeJSON(w http.ResponseWriter, v any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	enc := json.NewEncoder(w)
	enc.SetIndent("", "  ")
	_ = enc.Encode(v)
}

func writeJSONStatus(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	writeJSON(w, v)
}
