-- PoC payments: результат оплаты-заглушки (см. тикет 07, модель данных).

-- +goose Up
CREATE TABLE payments (
    id          UUID PRIMARY KEY,
    user_id     UUID NOT NULL REFERENCES users(id),
    object_id   UUID NOT NULL REFERENCES objects(id),
    start_date  DATE NOT NULL,
    months      INTEGER NOT NULL CHECK (months IN (1, 3, 6, 12)),
    amount      INTEGER NOT NULL CHECK (amount > 0),
    status      TEXT NOT NULL DEFAULT 'success' CHECK (status IN ('success')),
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_payments_user ON payments(user_id, created_at DESC);
