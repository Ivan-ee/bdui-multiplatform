# 06 - Подтверждение итогового стека

Type: grilling
Status: resolved
Blocked by: 01, 02, 03, 04

## Question

Свести результаты ресерча (тикеты 01–04) в единую рекомендацию стека и получить подтверждение пользователя перед стартом реализации. Формат: дерево решений «каждый слой → выбранный вариант → почему → риски», спорные места показать как развилки пользователю (grilling round).

Уровни для решения:

1. UI-слой мобильных клиентов (нативный рендер + shared-логика) — подтверждение версии из тикета «Зрелость Kotlin Multiplatform».
2. BDUI-движок и охват платформ — подтверждение из тикетов «Выбор BDUI-движка» и «Стратегия BDUI на десктопе».
3. Веб-кабинет: DivKit web SDK + сборка (React/Vite standalone), один Go API.
4. Бэкенд: фреймворк, БД, миграции, auth — подтверждение из тикета «Лучшие практики Go-бэкенда».
5. Контракт и кодогенерация: OpenAPI + Kotlin client или ручные DTO — подтверждение из тикета «Интеграция Go-бэкенда с KMP-клиентами».
6. Структура монорепозитория: сервер, shared-модуль, приложения, веб-кабинет.

Разрешается ТОЛЬКО после закрытия зависимых research-тикетов. Разговор HITL: агент презентует варианты, пользователь выбирает. Итоговое согласие записать под `## Answer` вместе с итоговым деревом стека.

## Answer

Итоговое дерево стека подтверждено пользователем 27.08.2026 в живом обсуждении.

1. **Общая логика**: Kotlin Multiplatform, commonMain (Kotlin 2.4.x).
2. **UI мобильных клиентов**: нативный рендер официальных DivKit SDK — divkit-android (Jetpack Compose клиент) на Android, divkit-ios (Swift SPM SDK) на iOS.
3. **BDUI-движок**: DivKit 33.x, layout JSON отдаёт бэкенд; версии SDK фиксируем, схему layout'ов версионируем (mitigating breaking change 33.0.0).
4. **Веб-кабинет**: DivKit vanilla JS (`@divkitframework/divkit`) + Vite; общая KMP-логика через js-таргет shared-модуля. SEO не нужно, SSR не делаем.
5. **Десктоп Windows/macOS** — выбор пользователя: **WebView внутри Compose Desktop** (JCEF/KCEF + JS↔Kotlin мост kmpJsBridge) вокруг того же DivKit web UI; общий Kotlin идёт через jvmTarget напрямую. Пользователь осознанно отказался от рекомендации Tauri ради честного JVM-приложения; риски малопроверенной среды приняты. Tauri остаётся планом Б при проблемах на срезе.
6. **Бэкенд**: Go stdlib net/http (ServeMux 1.22+), структура `cmd/server` + `internal/{transport,service,storage}`, PostgreSQL 17 + pgx/v5 + sqlc, миграции goose, golang-jwt/v5 (access 10–15 мин + ротация refresh в БД, argon2id), slog, ошибки RFC 9457 problem+json, docker-compose с Postgres для локальной разработки.
7. **Контракт и интеграция**: OpenAPI 3 spec-first → oapi-codegen на сервере (types + strict-server); для Kotlin генерируются только модели (`@Serializable`, openapi-generator models-only), endpoint-слой вручную поверх Ktorfit + Ktor Client 3.5; движки expect/actual: OkHttp (Android), Darwin (iOS), CIO/JavaHttpClient (desktop), Js/CIO (браузер); DI Koin в commonMain; kotlinx.serialization JSON; токены через multiplatform-settings интерфейс TokenStore.
8. **Монорепозиторий**: `server/`, `shared/`, `androidApp/`, `iosApp/`, `desktopApp/`, `webCabinet/`.

Следующий шаг согласован: тикет «Упрощённая модель данных аренды» (07), затем вертикальный срез (08).
