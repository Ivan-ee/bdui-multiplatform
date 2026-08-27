package service

import (
	"context"
	"crypto/rand"
	"encoding/json"
	"errors"
	"fmt"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/Ivan-ee/bdui-multiplatform/server/internal/models"
)

// ErrObjectOccupied — Объект уже занят, оплатить нельзя.
var ErrObjectOccupied = errors.New("object occupied")

type Payments struct {
	pool *pgxpool.Pool
}

func NewPayments(pool *pgxpool.Pool) *Payments { return &Payments{pool: pool} }

// GetObject возвращает Объект по идентификатору.
func (c *Catalog) GetObject(ctx context.Context, id string) (*models.Object, error) {
	var o models.Object
	var photosRaw string
	err := c.pool.QueryRow(ctx, `
		SELECT id::text, owner_id::text, title, address, description,
		       price_per_month, photos::text, status
		FROM objects WHERE id = $1`, id).
		Scan(&o.ID, &o.OwnerID, &o.Title, &o.Address, &o.Description,
			&o.PricePerMonth, &photosRaw, &o.Status)
	if errors.Is(err, pgx.ErrNoRows) {
		return nil, fmt.Errorf("object not found")
	}
	if err != nil {
		return nil, err
	}
	if err := json.Unmarshal([]byte(photosRaw), &o.Photos); err != nil {
		o.Photos = nil
	}
	return &o, nil
}

// CreatePayment проводит оплату-заглушку: платёж создаётся сразу со статусом
// «успешно», Объект становится занят и скрывается из каталога.
// Арендатор на срезе — seeded-демо-пользователь (авторизации нет).
func (p *Payments) CreatePayment(ctx context.Context, objectID string, months int) (*models.Payment, error) {
	var o models.Object
	var photosRaw string
	err := p.pool.QueryRow(ctx, `
		SELECT id::text, owner_id::text, title, address, description,
		       price_per_month, photos::text, status
		FROM objects WHERE id = $1`, objectID).
		Scan(&o.ID, &o.OwnerID, &o.Title, &o.Address, &o.Description,
			&o.PricePerMonth, &photosRaw, &o.Status)
	if errors.Is(err, pgx.ErrNoRows) {
		return nil, fmt.Errorf("object not found")
	}
	if err != nil {
		return nil, err
	}
	if o.Status != "free" {
		return nil, ErrObjectOccupied
	}

	pay := &models.Payment{
		ID:            newUUID(),
		UserID:        "",
		ObjectID:      o.ID,
		StartDate:     time.Now(),
		Months:        months,
		Amount:        o.PricePerMonth * months,
		Status:        "success",
		ObjectTitle:   o.Title,
		ObjectAddress: o.Address,
	}

	tx, err := p.pool.Begin(ctx)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	err = tx.QueryRow(ctx, `
		INSERT INTO payments (id, user_id, object_id, start_date, months, amount)
		VALUES ($1, (SELECT id FROM users WHERE can_rent ORDER BY display_name LIMIT 1),
		        $2, CURRENT_DATE, $3, $4)
		RETURNING user_id::text, start_date`,
		pay.ID, pay.ObjectID, pay.Months, pay.Amount).
		Scan(&pay.UserID, &pay.StartDate)
	if err != nil {
		return nil, err
	}
	if _, err := tx.Exec(ctx,
		`UPDATE objects SET status = 'occupied' WHERE id = $1`, pay.ObjectID); err != nil {
		return nil, err
	}
	if err := tx.Commit(ctx); err != nil {
		return nil, err
	}
	return pay, nil
}

type paymentRow = models.Payment

// newUUID — v4 без внешних зависимостей.
func newUUID() string {
	b := make([]byte, 16)
	_, _ = rand.Read(b)
	b[6] = (b[6] & 0x0f) | 0x40
	b[8] = (b[8] & 0x3f) | 0x80
	return fmt.Sprintf("%x-%x-%x-%x-%x", b[0:4], b[4:6], b[6:8], b[8:10], b[10:16])
}

// ListPayments возвращает ленту «Мои платежи» демо-Арендатора.
func (p *Payments) ListPayments(ctx context.Context) ([]models.Payment, error) {
	rows, err := p.pool.Query(ctx, `
		SELECT pay.id::text, pay.user_id::text, pay.object_id::text,
		       pay.start_date, pay.months, pay.amount, pay.status,
		       o.title, o.address
		FROM payments pay
		JOIN objects o ON o.id = pay.object_id
		WHERE pay.user_id = (SELECT id FROM users WHERE can_rent ORDER BY display_name LIMIT 1)
		ORDER BY pay.created_at DESC`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var out []models.Payment
	for rows.Next() {
		var m models.Payment
		if err := rows.Scan(&m.ID, &m.UserID, &m.ObjectID, &m.StartDate, &m.Months,
			&m.Amount, &m.Status, &m.ObjectTitle, &m.ObjectAddress); err != nil {
			return nil, err
		}
		out = append(out, m)
	}
	return out, rows.Err()
}
