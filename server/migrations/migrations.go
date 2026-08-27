// Пакет migrations держит SQL-миграции goose вместе с бинарём сервера.
package migrations

import "embed"

//go:embed *.sql
var FS embed.FS
