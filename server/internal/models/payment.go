package models

import "time"

// Платёж — результат оплаты-заглушки (CONTEXT.md; модель из тикета 07).
type Payment struct {
	ID        string    `json:"id"`
	UserID    string    `json:"user_id"`
	ObjectID  string    `json:"object_id"`
	StartDate time.Time `json:"start_date"`
	Months    int       `json:"months"`
	Amount    int       `json:"amount"`
	Status    string    `json:"status"`

	// Объект — денормализованное имя/адрес для кабинета и чека.
	ObjectTitle   string `json:"object_title,omitempty"`
	ObjectAddress string `json:"object_address,omitempty"`
}
