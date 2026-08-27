package service

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/Ivan-ee/bdui-multiplatform/server/internal/models"
)

type Catalog struct {
	pool *pgxpool.Pool
}

func NewCatalog(pool *pgxpool.Pool) *Catalog { return &Catalog{pool: pool} }

// ListObjects возвращает только свободные Объекты: занятые скрыты из каталога.
func (c *Catalog) ListObjects(ctx context.Context) ([]models.Object, error) {
	rows, err := c.pool.Query(ctx, `
		SELECT id::text, owner_id::text, title, address, description,
		       price_per_month, photos::text, status
		FROM objects
		WHERE status = 'free'
		ORDER BY created_at`)
	if err != nil {
		return nil, fmt.Errorf("query objects: %w", err)
	}
	defer rows.Close()

	var out []models.Object
	for rows.Next() {
		var o models.Object
		var photosRaw string
		if err := rows.Scan(&o.ID, &o.OwnerID, &o.Title, &o.Address, &o.Description,
			&o.PricePerMonth, &photosRaw, &o.Status); err != nil {
			return nil, fmt.Errorf("scan object: %w", err)
		}
		if err := json.Unmarshal([]byte(photosRaw), &o.Photos); err != nil {
			o.Photos = nil
		}
		out = append(out, o)
	}
	return out, rows.Err()
}
