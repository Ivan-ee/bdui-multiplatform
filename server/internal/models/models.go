package models

// Объект — единица каталога (см. CONTEXT.md и тикет «Упрощённая модель данных аренды»).
type Object struct {
	ID            string   `json:"id"`
	OwnerID       string   `json:"owner_id"`
	Title         string   `json:"title"`
	Address       string   `json:"address"`
	Description   string   `json:"description"`
	PricePerMonth int      `json:"price_per_month"` // ₽/мес
	Photos        []string `json:"photos"`          // список URL
	Status        string   `json:"status"`          // "free" | "occupied"
}
