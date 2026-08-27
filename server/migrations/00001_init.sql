-- PoC schema: User + Object. Payment is out of the vertical slice scope.

-- +goose Up
CREATE TABLE users (
    id          UUID PRIMARY KEY,
    email       TEXT NOT NULL UNIQUE,
    password    TEXT NOT NULL,
    display_name TEXT NOT NULL,
    can_lease   BOOLEAN NOT NULL DEFAULT false,
    can_rent    BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE objects (
    id              UUID PRIMARY KEY,
    owner_id        UUID NOT NULL REFERENCES users(id),
    title           TEXT NOT NULL,
    address         TEXT NOT NULL,
    description     TEXT NOT NULL DEFAULT '',
    price_per_month INTEGER NOT NULL CHECK (price_per_month > 0),
    photos          JSONB NOT NULL DEFAULT '[]',
    status          TEXT NOT NULL DEFAULT 'free' CHECK (status IN ('free', 'occupied')),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_objects_status ON objects(status);
