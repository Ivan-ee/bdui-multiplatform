# 03 - Лучшие практики Go-бэкенда крупных компаний

Type: research
Status: resolved
Blocked by:

## Question

Как правильно построить в 2026 Go-бэкенд для CRUD+платежи сервиса аренды недвижимости так, как это делают крупные компании, в объёме тестового PoC?

Конкретно выяснить:

1. HTTP-фреймворк/роутер: stdlib net/http (роутинг Go 1.22+: методы + wildcard) vs chi vs echo vs gin vs fiber — что предпочитают в индустрии и почему; рекомендация для PoC.
2. Структура проекта: организация пакетов (cmd/internal/pkg), слои handler/service/repository, чистая архитектура — практики известных Go-команд (Google, Uber Go Style Guide и др.).
3. БД и доступ к данным: PostgreSQL + слой доступа (database/sql + sqlc vs ent vs GORM vs pgx напрямую); миграции (goose / golang-migrate).
4. Аутентификация: JWT (golang-jwt и др.), refresh-токены, CORS для SPA-клиентов на мобиле/вебе.
5. API-дизайн: REST/OpenAPI (oapi-codegen vs swag) против GraphQL/gRPC — что реально используют крупные компании для мультиплатформенных клиентов; валидация, единый формат ошибок.
6. Инструменты качества: конфигурация, логирование (slog/zerolog/zap), Dockerfile, docker-compose с Postgres для локальной разработки.

Рекомендация должна учитывать цель PoC: быстро собрать честный, но простой бэкенд для тренировки связки с четырьмя KMP-клиентами, который не стыдно перетащить в реальный сервис пользователя (его продакшн — тоже Go). Ответ — со ссылками и датами. Записать под `## Answer`, выставить `Status: resolved`. Не трогать map.md.

## Answer

*(research от 27.08.2026; все ссылки проверены в момент написания)*

### Итоговая рекомендация стека (одной строкой)

Go 1.24+, stdlib `net/http` (роутинг Go 1.22+) поверх контракта OpenAPI 3 через oapi-codegen (`std-http-server` + `strict-server`), PostgreSQL 17 + pgx/v5 (`pgxpool`) + sqlc, миграции goose v3, auth на golang-jwt/jwt/v5 с короткими access- и ротируемыми refresh-токенами, логи `log/slog`, ошибки по RFC 9457, конфиг из env, локальная разработка в docker-compose (`postgres:17-alpine` + air), прод-образ — multi-stage Dockerfile в distroless/scratch.

### Сводная таблица

| Компонент | Выбор | Почему именно он |
|---|---|---|
| Toolchain | Go 1.24/1.25 (актуальная стабильная ветка) | новый роутер.ServeMux уже «давно стабилен»; свежие версии нужны для генераторов (oapi-codegen 2026 требует Go 1.24–1.25) |
| HTTP-роутер | stdlib `net/http` + `http.ServeMux` (Go 1.22+) | методы + `{wildcard}` официально в stdlib; ноль зависимостей; честно как в проде. chi — запасной вариант, он тоже `net/http`-совместим |
| Структура | `cmd/server/main.go` (тонкий) + `internal/{transport,service,storage,domain}`; интерфейсы объявляет потребитель | консенсус Uber/Google style guides + golang-standards/project-layout; без преждевременных абстракций |
| Драйвер БД | `github.com/jackc/pgx/v5` (`pgxpool`) | самый быстрый нативный драйвер Postgres (+30–50% к GORM на высоких нагрузках), чистый Go (CGO off) |
| SQL-слой | sqlc (кодогенерация из SQL, compile-time типизация) | «нулевая магия», опыт Cloudflare (99.99% uptime на Go+Postgres+sqlc); легко код-ревьюится и переносится в прод |
| Миграции | pressly/goose v3 (SQL, embed, полная история) | проще и информативнее golang-migrate (тот пишет только последнюю версию + dirty-флаг); работает и как CLI, и как библиотека `goose.Up()` на старте |
| Auth | `golang-jwt/jwt/v5`; access 10–15 мин + refresh-ротация в таблице (хэши), пароли argon2id/bcrypt; CORS — белый список origin'ов | golang-jwt — де-факто стандарт после архивации dgrijalva/jwt-go; практики подтверждены гайдами 2024–2026 |
| API-контракт | spec-first: OpenAPI 3 YAML → oapi-codegen (types+strict server+client); Kotlin-клиенты для KMP — openapi-generator | один контракт на 4 клиента; swag/go-swagger стабильными релизами застряли на OpenAPI 2.0 |
| Валидация / ошибки | ограничения прямо в OpenAPI (+ `go-playground/validator` на сложные правила); единый формат ошибок RFC 9457 `application/problem+json` | стандарт Problem Details заменил RFC 7807 (2023); одинаково парсится всеми четырьмя клиентами |
| Логи | `log/slog` (JSON-handler в облаке, TextHandler локально), request_id в контексте | структурное логирование в stdlib c Go 1.21 — дефолт без обсуждения, пока нет доказанного узкого места |
| Конфигурация | env-переменные 12-factor; `os.Getenv` + маленький parse-хелпер или `caarlos0/env` | viper/koanf — оверкилл для PoC; env одинаково работает локально и в docker/k8s |
| Dev-инфраструктура | `docker-compose.yml`: postgres:17-alpine (+healthcheck `pg_isready`) + приложение; hot-reload через air-verse/air | повторяемый минимум; миграции применяются `goose.Up()` при старте приложения |
| Прод-образ | multi-stage: `golang:*-alpine` build → `gcr.io/distroless/static-debian12` (или `FROM scratch`, CGO_ENABLED=0) | pgx/sqlc/slog не требуют CGO — бинарник статический, образ ~15 МБ |

### 1. HTTP-роутер

- В Go 1.22 `ServeMux` получил официальную поддержку методов и wildcard'ов: `mux.HandleFunc("GET /listings/{id}", h)` ([Go Blog, «Routing Enhancements for Go 1.22»](https://go.dev/blog/routing-enhancements), правила приоритета — самый длинный паттерн: [Eli Bendersky](https://eli.thegreenplace.net/2023/better-http-server-routing-in-go-122/)).
- Итоги сравнений 2023–2026: для базового метод+параметр роутинга stdlib достаточно; [chi](https://github.com/go-chi/chi) выигрывает там, где нужны готовые цепочки middleware, группы роутов и subrouter'ы, оставаясь полностью `net/http`-совместимым ([Calhoun.io](https://www.calhoun.io/go-servemux-vs-chi/), [Alex Edwards](https://www.alexedwards.net/blog/which-go-router-should-i-use), [Encore, «Chi Alternatives for Go Backends in 2026»](https://encore.dev/articles/chi-alternatives)).
- gin/echo — полноценные фреймворки со своим `Context` (самый большой комьюнити у Gin, лучшая «коробка» у Echo), fiber построен на fasthttp и **несовместим** с `net/http` и его экосистемой ([JetBrains, апрель 2026](https://blog.jetbrains.com/go/2026/04/28/popular-golang-web-frameworks/), [Encore: gin-vs-echo-vs-fiber](https://encore.dev/articles/gin-vs-echo-vs-fiber)).
- **Для PoC: stdlib `net/http`.** Middleware (логи, recover, CORS, auth) пишутся как простые обёртки `func(http.Handler) http.Handler` — это ~40 строк и ровно то, что окажется в проде. Если понадобятся группы роутов — миграция на chi тривиальна (тот же `http.Handler`).

### 2. Структура проекта

- Конвенция: тонкие бинари в `cmd/<app>/main.go` (только wiring), вся логика в `internal/` (компилятор запрещает импорт извне модуля), `pkg/` — опционально и часто вообще не нужен ([golang-standards/project-layout](https://github.com/golang-standards/project-layout); важно: это сообщество, а не официальный стандарт Go).
- Слои transport → service → repository, но без карго-культа: интерфейсы объявляются **у потребителя**, не у реализатора (правило из [Uber Go Style Guide](https://github.com/uber-go/guide/blob/master/style.md) и [Google Go Style Guide, Best Practices](https://google.github.io/styleguide/go/best-practices.html): «avoid forcing an interface»); плоские пакеты расширяются по мере роста.
- Прагматичный пример референс: [ThreeDotsLabs/wild-workouts-go-ddd-example](https://github.com/ThreeDotsLabs/wild-workouts-go-ddd-example) (~6.4k звёзд) и статья [«How to implement Clean Architecture in Go»](https://threedots.tech/post/introducing-clean-architecture/) — ports (HTTP) / app (сервисы) / adapters (Postgres-репозитории). Для PoC берём облегчённую версию этого (DDD-lite), не CQRS целиком.
- Транзакции контролирует service-слой (репозиторий получает tx/pgxpool), но в PoC допустимо начать с транзакции внутри одного репозитория.

### 3. БД и доступ к данным

- PostgreSQL через **pgx/v5**: нативный протокол, `pgxpool`, лучшие бенчмарки среди ORM/драйверов ([JetBrains comparison](https://blog.jetbrains.com/go/2023/04/27/comparing-db-packages/), замеры pgx vs GORM +30–50%: [dev.to](https://dev.to/bitsofmandal-yt/you-dont-need-gorm-there-is-a-better-alternative-12j2)).
- Запросы описываем руками в SQL и генерируем типизированный код через **sqlc** (поддерживает цельный pgx/v5-режим). Такой стек (sqlc+pgx+goose) — общепризнанный продакшн-выбор сообщества ([Go Forum](https://forum.golangbridge.org/t/sqlc-pgx-for-production/41515)); публичный кейс Cloudflare — Go+Postgres+sqlc на 99.99% uptime ([Medium-разбор](https://medium.com/@yashbatra11111/go-postgres-with-sqlc-the-zero-orm-stack-cloudflare-uses-for-99-99-uptime-d4beaddbfdf8), [encore.dev обзор Go ORMs](https://encore.dev/articles/go-orms)).
- GORM — rapid prototyping, но рефлексия/скрытые запросы мешают переносимости и ревью; ent хорош для сложных графов связей, но порог входа выше — оба здесь не оправданы.
- **Миграции: goose v3** ([pressly/goose](https://github.com/pressly/goose)): SQL-файлы `-- +goose Up/Down`, полная таблица истории (vs последний номер + dirty-флаг у golang-migrate), поддержка `embed` (`goose.SetBaseFS`) — миграции компилируются в бинарник и накатываются `goose.Up(db, "migrations")` при старте приложения, CLI — только для разработки ([сравнение инструментов](https://dev.to/shrsv/best-database-migration-tools-for-golang-ajf), [r/golang](https://www.reddit.com/r/golang/comments/17whnvc/which_database_migration_tool_atlas_dbmate_goose/), [Neon guide](https://neon.com/guides/golang-db-migrations-postgres)).

### 4. Аутентификация (JWT + refresh)

- Библиотека — **`github.com/golang-jwt/jwt/v5`**: поддерживаемое сообществом продолжение архивированного dgrijalva/jwt-go, актуальные гайды 2025–2026 строятся вокруг неё ([OneUptime, январь 2026](https://oneuptime.com/blog/post/2026-01-07-go-jwt-authentication/view), [WorkOS](https://workos.com/blog/how-to-handle-jwt-in-go)).
- Схема: access-JWT на 10–15 минут (HS256 достаточен для одного сервиса; RS256/EdDSA+`kid` — когда появятся несколько проверяющих сервисов), валидация `exp/iss/aud/sub` обязательна; долгоживущий refresh-токен с ротацией: хэш хранится в таблице `refresh_tokens(user_id, token_hash, expires_at, revoked)` — даёт revoke/logout/logout-all ([Auth0 про refresh-rotation](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)).
- Хранение на клиентах: мобилки (KMP) — Keychain/Keystore; веб-SPA — httpOnly Secure cookie либо BFF; **никогда localStorage** ([Medium: JWT security practices](https://medium.com/@thantheinthwin.dev/securing-apis-with-jwt-oauth-and-go-concepts-integration-best-practices-8e9d44344702)). Пароли — argon2id (предпочтительно) или bcrypt, не SHA-x.
- CORS для четырёх KMP/web-клиентов: явный allow-list origin'ов, методы и заголовок `Authorization`; для мобилок CORS не применяется вовсе, но middleware должен корректно отвечать на preflight OPTIONS. Auth-эндпоинты (`/auth/login`, `/auth/refresh`, `/auth/logout`) выносятся из-под JWT-middleware.

### 5. API-дизайн: REST/OpenAPI spec-first

- Крупные компании держат шаблон: **REST(+OpenAPI) на внешнем крае для браузера и мобилок** (HTTP/1.1 универсален, кэширование, прокси, curl; gRPC в браузере требует gRPC-Web-прокси), **gRPC — между внутренними сервисами**, GraphQL — точечно там, где клиентам нужны произвольные агрегации ([AWS: gRPC vs REST](https://aws.amazon.com/compare/the-difference-between-grpc-and-rest/), [IBM](https://www.ibm.com/think/topics/grpc-vs-rest)). Для одного монолит-PoC выбор однозначен: REST.
- **oapi-codegen**: сначала пишем `openapi.yaml` (OpenAPI 3.0/3.1), потом генерируем модели, strict-server-интерфейсы (`Handler` вида `ListListings(ctx, req) (resp, error)`) и Go-клиента; режимы сервера для std-http/chi/echo/gin/fiber/gorilla/iris; проект активно поддерживается, сборка требует Go 1.24–1.25, документация обновляется до начала 2026 ([GitHub README](https://github.com/oapi-codegen/oapi-codegen), [туториал ldej.nl](https://ldej.nl/post/generating-go-from-openapi-3/)).
- **swag и go-swagger отклонены**: стабильные релизы swag всё ещё генерируют Swagger 2.0 (просьба про OAS 3 висит годами — [issue #1898](https://github.com/swaggo/swag/issues/1898)), go-swagger зафиксирован на OAS 2.0 и в maintenance-режиме ([r/golang обсуждение ландшафта](https://www.reddit.com/r/golang/comments/1gmhz08/confused_by_the_openapi_options_for_go/)).
- Главный бонус для задачи пользователя: из того же `openapi.yaml` openapi-generator собирает **Kotlin-клиент** в общий модуль KMP — четыре клиента едут на одном типизированном контракте ([генерация клиентов из OpenAPI](https://fastapi.tiangolo.com/advanced/generate-clients/), [Stainless: почему генерировать SDK](https://www.stainless.com/blog/build-vs-buy-sdks/)).
- Единый формат ошибок — **RFC 9457 Problem Details** (`application/problem+json`, поля `type/title/status/detail/errors`), пришедший на смену RFC 7807 в 2023; strict-server в oapi-codegen удобно маппит доменные ошибки в нужный статус-код. Тонкую валидацию (кросс-поля) — `go-playground/validator`, базовые ограничения (`minLength`, `format`, enum) пусть живут в спеке.

### 6. Инструменты качества: логирование, конфиг, Docker

- Логи — **`log/slog`** (stdlib с Go 1.21): ключ-значение, уровни, JSON-handler в деплое и TextHandler локально; request_id/http-статус/method/path прокидываются в контекст через middleware ([официальный анонс](https://go.dev/blog/slog), [Dash0 practitioner's guide](https://www.dash0.com/guides/logging-in-go-with-slog)). zap/zerolog быстрее в микробенчмарках, но slog снимает вопрос «стандартности» — переходить стоит только по факту профилировки.
- Конфигурация — env-переменные (12-factor): пароль БД, DSN, JWT-secret, порт, log-level. Для PoC хватит `os.Getenv` + простой struct-loader; опционально `caarlos0/env`.
- Разработка: `docker-compose.yml` c `postgres:17-alpine` (volume, `pg_isready` healthcheck, `depends_on: condition: service_healthy`) и приложением с hot-reload через **air** ([air-verse/air](https://github.com/air-verse/air), пошаговый сетап: [OneUptime](https://oneuptime.com/blog/post/2026-01-07-go-hot-reloading-docker-air/view)).
- Прод-доставка: multi-stage Dockerfile (`CGO_ENABLED=0 go build` → distroless/static или `scratch`), конфиг только через env, healthcheck-endpoint `/healthz`.

### Примечание про «CRUD + платежи»

Модуль платежей в PoC — за интерфейсом сервиса (мок-провайдер): реальные интеграции отличаются только адаптером. Обязательные хардл-требования даже для мини-версии: вебхук-эндпоинт с **верификацией подписи провайдера** и **идемпотентностью** (уникальный индекс на event_id в таблице обработанных событий), смена статуса аренды — в одной транзакции с записью платежа; когда дойдёт до настоящего прода — transactional outbox.

### Главные риски / предостережения

1. **sqlc не умеет динамические запросы.** Поиск объявлений с произвольными фильтрами (город, цена, комнаты...) потребует либо `CASE WHEN`-трюков, либо ручного pgx для списочных эндпоинтов — закладывайте это время сразу.
2. **Дисциплина code-gen.** oapi-codegen/sqlc требуют процесса «поменял спеку/SQL → `go generate ./...` → fix compile errors»; иначе спека расходится с кодом. Настройте это CI-шагом с самого начала.
3. **JWT на четырёх клиентах — это четыре разные политики хранения refresh-токенов** (Keychain/Keystore/httpOnly cookie/BFF) и логика тихого refresh при 401; на вебе решение «токен в localStorage» нарушает базовые требования безопасности и всплывёт на следующем шаге, когда пользователь потащит PoC в прод.
