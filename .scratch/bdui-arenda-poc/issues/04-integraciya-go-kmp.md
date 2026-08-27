# 04 - Интеграция Go-бэкенда с KMP-клиентами

Type: research
Status: resolved
Blocked by:

## Question

Как организовать обмен данными между Go-бэкендом и пятью клиентами на Kotlin Multiplatform так, чтобы модели данных и сетевой слой писались один раз, а не дублировались?

Конкретно выяснить:

1. Контракт API и кодогенерация: OpenAPI 3 + генератор Kotlin-клиента (OpenAPI Generator и зрелые альтернативы) — реально ли автоматически получить типобезопасный Kotlin-клиент из спецификации Go/OpenAPI; альтернатива — ручные DTO на kotlinx.serialization.
2. Формат сериализации: kotlinx.serialization JSON vs protobuf — что проще скрестить с Go-бэкендом и удержать одну схему правды.
3. Сетевой слой клиента: Ktor client на всех платформах (Android/OkHttp, iOS/Darwin, desktop JVM/CIO, браузер js/wasm) — статус поддержки каждого движка в 2026.
4. Архитектура shared-модуля: паттерны структуры KMP-проекта у крупных компаний (expect/actual vs интерфейсы в common, DI Koin в commonMain, корутины Flow), MVVM/MVI в общем коде (Decompose, MVIKotlin) — но UI приходит через BDUI, значит шарить нужно state/loading/errors, навигацию, auth, кеш.
5. Типовой состав слоя данных: repository pattern над сетью, хранение токенов (multiplatform-settings, обёртки Keychain/EncryptedSharedPreferences), retry/error mapping.

Целевой ответ: конкретная рекомендуемая схема «контракт + генерация + сетевой слой + структура модулей» для этого PoC с обоснованием и ссылками. Записать под `## Answer`, выставить `Status: resolved`. Не трогать map.md.

## Answer

_Исследование выполнено 27.08.2026. Все утверждения сверены с первоисточниками (официальные доки и GitHub-релизы), даты актуальности указаны у каждой ссылки._

### TL;DR — рекомендуемая схема одним абзацем

Go-бэкенд публикует **OpenAPI 3 (JSON) как единственный контракт**; из спеки генерируются **только DTO** (`@Serializable` data classes) через `openapi-generator -g kotlin --library multiplatform --global-property models` с апгрейдом пина kotlinx.serialization в шаблоне; **полный клиент-генерат не используем** — сетевой слой пишется руками поверх **Ktor Client 3.5 + Ktorfit 2.7.5** (декларативные интерфейсы, suspend/Flow). Движки per-platform expect/actual: Android → OkHttp, iOS/macOS → Darwin, desktop JVM → CIO (или Java HttpClient), браузер wasmJs → CIO(wasmJs)/Js. Формат — **kotlinx.serialization JSON** (protobuf отвергнут: формат экспериментальный, schema-first кодогена под KMP нет, а OpenAPI и BDUI-JSON всё равно живут вокруг JSON). Shared-код = Gradle-модули `core:model`, `core:network`, `core:storage`, `feature:*` в commonMain, DI — **Koin 4.2.2**, состояние — sealed `UiState<T>` + `StateFlow` из repositories, опционально **Decompose 3.x** (покрывает все 5 таргетов, включая браузер) для навигации/жизненного цикла экранов-обёрток. Токены — интерфейс `TokenStore` в commonMain на базе russhwolf/multiplatform-settings 1.3.0 (`KeychainSettings` на Apple, DataStore/SharedPreferences на Android, `PreferencesSettings`/Registry на JVM/Windows, cookie/in-memory в вебе).

---

### 1. Контракт API и кодогенерация

#### 1.1 Почему контракт — OpenAPI 3, а источник правды один

Для связки Go↔KMP естественно держать контракт-first workflow: пишется/генерируется OpenAPI-спека, Go-сервер имплементирует её (например, через `oapi-codegen` или серверную специку Ktor — вне нашей задачи), клиенты генерируют из неё типы. Спека OpenAPI — это по определению JSON Schema-ориентированный документ, что делает её «общим языком» и для BDUI-схем (тоже JSON). Альтернатива «одна правда в .proto» разобрана в §1.4.

#### 1.2 Состояние OpenAPI Generator (kotlin) в августе 2026 — живой, но Kotlin-шаблоны устарели

Проверено по официальной документации генератора (страница обновлена 15.08.2026): https://openapi-generator.tech/docs/generators/kotlin/

| Library | Платформа | HTTP | Сериализация |
|---|---|---|---|
| jvm-okhttp4 (default) | JVM | OkHttp 4.2 | Moshi |
| jvm-ktor | JVM | **Ktor 1.6.7** | Gson/Jackson |
| **multiplatform** | KMP | **Ktor 1.6.7** | **kotlinx.serialization 1.2.1** |
| jvm-retrofit2 | JVM | Retrofit 2.6 | на выбор |

Сам проект живой: релиз v7.25.0 от 24.08.2026 («240+ enhancements»), но правки kotlin-генератора точечные (Jackson3/SpringBoot4, фикс дефолтов в jvm-ktor) — мультиплатформенный шаблон так и остался на Ktor 1.6.7 / kotlinx.serialization 1.2.1 (источник: https://github.com/OpenAPITools/openapi-generator/releases). Жалобы сообществу на заброшенность версий в шаблонах давние и не закрыты: https://slack-chats.kotlinlang.org/t/462183/, https://www.reddit.com/r/Kotlin/comments/u7ygql/. Известные баги генерации под kotlinx.serialization: дублирование `@Serializable` (#20501, https://github.com/OpenAPITools/openapi-generator/issues/20501), пустые data class при nullable/object-схемах (#22349), слабая поддержка oneOf/anyOf (`generateOneOfAnyOfWrappers` поддерживается только retrofit2+gson/kotlinx; обсуждение: https://www.reddit.com/r/Kotlin/comments/1h07cos/).

**Вывод:** полностью сгенерированный клиент из коробки брать нельзя. Но **генерация только моделей (DTO)** — рабочий приём: `openapi-generator-cli generate -g kotlin --library multiplatform --global-property models,supporting-files` даёт чистые `@Serializable` data classes без старого HTTP-кода; пины сериализации выносятся в наш build (generated sources компилируются нашим Kotlin 2.x + kotlinx.serialization 1.x). Для PoC этого достаточно и убирает ручное дублирование моделей. Если генератор начнёт ломаться на схеме — фallback: копирование модели руками только там, где генерация капризничает, при сохранении контракта в одном файле спеки.

#### 1.3 Альтернативы кодогенерации: Ktorfit, Kiota, прочие

- **Ktorfit 2.7.5** (релиз 07.06.2026: https://github.com/Foso/Ktorfit/releases) — KSP-процессор «Retrofit для KMP» *поверх нашего же* Ktor Client 3.5.0 (Kotlin 2.2+, таргеты Android/iOS/Js/Jvm/Native/WasmJs описаны в README репозитория: https://github.com/Foso/Ktorfit). Есть конвертеры Flow/Response (`ktorfit-converters-flow`). Это самая живая альтернатива рутоинной писанине endpoint-методов: объявления интерфейсов выглядят как Retrofit, исполняются современным клиентом проекта.
- **Первоклассного OpenAPI→Ktorfit кодогена нет**: есть только давний feature request https://github.com/Foso/Ktorfit/issues/491. Поэтому в PoC endpoint-интерфейсы Ktorfit пишутся руками по спеке (5–20 endpoints — это часы работы, зато ноль магии устаревших шаблонов).
- **Microsoft Kiota отпадает**: в списке поддерживаемых языков Kotlin отсутствует вовсе (README: C#, Dart, Go, Java, PHP, Python, Ruby, TS/JS — https://github.com/microsoft/kiota).
- Практика подтверждена сообществом: треды «OpenAPI generators for KMP» сходятся на комбинации «openapi-generator models-only + рукописный/Ktorfit API-слой» (https://slack-chats.kotlinlang.org/t/16633739/).

#### 1.4 kotlinx.serialization JSON vs protobuf (в связке с Go)

Факты из официальных доков JetBrains (https://kotlinlang.org/docs/serialization.html, проект — официальный: https://github.com/Kotlin/kotlinx.serialization):
> «All serialization format libraries, except for the JSON serialization library (kotlinx-serialization-json), are Experimental. Their APIs might change at any time.»

То есть JSON — стабильный, **protobuf-формат kotlinx.serialization официально Experimental** на август 2026.

Почему для этого PoC берём JSON:
1. **Одна схема правды**: OpenAPI-спека и BDUI-UI-схемы уже JSON; вводить второй язык контракта (.proto) ради формата — двойная бухгалтерия.
2. **Kotlin-сторона protobuf-стека для KMP слаба**: у Google runtime для protobuf — JVM/Android (нативного iOS-таргета нет); `kotlinx.serialization.protobuf` не имеет schema-first protoc-плагина, генерирующего `@Serializable`-классы из .proto (community-проект dogacel/kotlinx-protobuf-gen существует, но нишевый: https://github.com/Dogacel/kotlinx-protobuf-gen); pbandk (Streem) — последний релиз v0.16.0 от 03.09.2024, темп упал (https://api.github.com/repos/streem/pbandk/releases/latest).
3. **Go-сторона** с `encoding/json` тривиальна и отражается в спеке напрямую; gRPC/gateway понадобятся отдельно, если появится реальный стриминг/нагрузочная нужда — тогда разумнее смотреть на Connect RPC-экосистему, а не на ручной бинарь.

Против JSON обычно выдвигают размер/скорость; для арендного CRUD-PoC с BDUI это не узкое место. Митигация будущего перехода: все DTO помечаем `@Serializable`, поля нумеруем осознанно — миграция на `@ProtoNumber` позже сводится к добавлению аннотаций.

### 2. Сетевой слой: Ktor Client engines по платформам (актуально на 24.04.2026, Ktor 3.5.x)

Первичный источник — официальная таблица движков: https://ktor.io/docs/client-engines.html и страница платформ (JVM, Android, Native, JavaScript, WasmJs): https://ktor.io/docs/client-supported-platforms.html.

| Движок | JVM | Android | Native iOS/Apple | JS/wasmJs | Примечание из таблицы доков |
|---|---|---|---|---|---|
| OkHttp | + | + | – | – | HTTP/2 ✓, WebSockets ✓ |
| Java (`java.net.http`) | + | + | – | – | без WSS; HTTP/2 ✓ |
| Apache5, Jetty | + | (+/-) | – | – | |
| Android | – | + | – | – | |
| CIO | + | + | + (ios, macOS, watchOS, tvOS) | + js и **wasmJs** | единственный движок, заявленный на всех целевых платформах; **HTTP/1.x only** |
| Darwin | – | – | + iosX64/Sim/Arm64, macos… | – | NSURLSession; HTTP/2 ✓ |
| Js | – | – | – | + браузер (fetch/WebSockets) и Node | HttpCache без дискового хранилища |
| WinHttp | native mingwX64 | | | | HTTP/1.1 default; именно для Windows-native (не нужен нам, desktop = JVM) |
| curl | watchOS/tvOS/desktop-apps | | | | эксперим./can be unstable |
| MockEngine | тесты всех платформ | | | | для unit-тестов слоя данных |

Рекомендованная раскладка под пять клиентов проекта:
- **androidMain → OkHttp** (зрелость, HTTP/2, перехватчики);
- **ios*Main → Darwin** (нативный NSURLSession, HTTP/2, системные TLS/прокси);
- **jvmMain (Windows/macOS desktop) → CIO** или Java HttpClient: оба достаточно зрелы; CIO закрывает всё под HTTP/1.x-бэкенд за LB, Java HttpClient даёт HTTP/2 из коробки. Для PoC проще один CIO.
- **wasmJsMain (браузер) → CIO(wasmJs)** — единственный полнофункциональный вариант для wasmJs-таргета (Js-движок доступен при компиляции в js).

Практика из dokов: в multiplatform-проекте объявлять engine-зависимости через `expect/actual`-инициализацию клиента — это штатная рекомендация Ktor («use expect and actual keywords to create an HttpClient with the platform-specific engine», https://ktor.io/docs/client-engines.html). Общий клиент конфигурируется в commonMain: ContentNegotiation + kotlinx-json, `install(Auth)` (BearerTokens + refreshTokens lambda), `HttpRequestRetry` (экспоненциальный backoff на идемпотентных методах), `HttpTimeout`, `HttpResponseValidator` с маппингом всех ошибок в sealed `ApiError` (network / timeout / http(code,body) / serialization / server). Поверх этого — тонкие декларативные интерфейсы Ktorfit.

### 3. Архитектура shared-модуля (как делают крупные)

Кейсы: Netflix перевёл внутренние studio-apps на Android/iOS на общую KMP-логику (бизнес-логика/дата шарятся, UI нативные — https://netflixtechblog.com/netflix-android-and-ios-studio-apps-now-powered-by-kotlin-multiplatform-d6d4d8d25d23); McDonald's/Cash App/Duolingo/Bolt/Forbes/Workday собраны на той же модели «шарим data+domain, тонкие нативные оболочки» (обзор с метриками: https://www.kmpship.app/blog/big-companies-kotlin-multiplatform-2025; гайд Workday: https://medium.com/workday-engineering/adopting-kotlin-multiplatform-a-practical-guide-to-unifying-codebases-1b333436061e; каталог: https://kotlinlang.org/case-studies/).

Правила, устойчиво повторяющиеся у крупных:
1. **Модули по слоям и фичам вместо одного монолитного `shared`**: `core:*` переиспользуемо, `feature:*` по доменам; convention-plugins в Gradle для единых настроек таргетов.
2. **Интерфейсы в commonMain вместо expect/actual почти везде**: `expect/actual` оставляем только для того, что физически требует разных зависимостей/символов платформы (движки Ktor, инициализация хранилищ). Business-компоненты — обычные Kotlin-классы/интерфейсы, склеенные DI.
3. **DI в commonMain — Koin**: текущая линия 4.2.2 (релиз 15.06.2026 — maintenance 4.2.x c фиксами CoreResolverV2, tvos-таргеты koin-core-viewmodel, готовые R8-правила и даже доки по Navigation3 typed entryProvider: https://github.com/InsertKoinIO/koin/releases) — de-facto стандарт KMP-DI. Koin-модули объявляются в commonMain, агрегируются в точке входа платформы (`startKoin { … }`).
4. **Состояние**: раз UI приходит по BDUI, шарить нужно ровно то, что перечислено в тикете: state/loading/error как sealed `UiState<T>` + `StateFlow` (корутиновые Flow работают во все стороны; для iOS опционально SKIE от Touchlab превращает suspend/Flow в async/AsyncSequence — можно добавить позже). Для навигации и жизненного цикла экранов-обёрток лучший выбор — **Decompose 3.x** (аркivanov): README прямо заявляет таргеты `android, jvm, ios, watchos, tvos, macos, wasmJs, js` — то есть покрывает и десктоп, и браузерный клиент из коробки; состояние экранов сохраняется через StateKeeper на kotlinx.serialization (https://github.com/arkivanov/Decompose). MVIKotlin того же автора развивается медленнее; MVVM-паттерн «ViewModel/Presenter + StateFlow» достаточен для BDUI-PoC. Официальная альтернатива появилась в январе 2026: Compose Multiplatform 1.10 принёс Navigation 3 на не-Android таргеты (https://blog.jetbrains.com/kotlin/2026/01/compose-multiplatform-1-10-0/) — имеет смысл только если решим рендерить UI в CMP, чего BDUI-подход пока не требует.

Структура для нашего PoC:

```
shared/
  core:model        // @Serializable DTO (сгенерированные из OpenAPI) + domain-типы
  core:network      // expect/actual engine providers, Ktor config, ApiError, retry
  core:storage      // TokenStore interface + impl на multiplatform-settings/DataStore
  core:common       // ui-state sealed types, dispatchers, Result/Either helpers
  feature:catalog   // api: интерфейсы repository/usecase; impl: Ktorfit + repo
  feature:auth      // auth flows, token refresh orchestration
  app:koin          // Koin modules wiring (commonMain)
```

При этом exposing наружу минимальный: каждая фича отдаёт только интерфейсы+Flow, потребители (Android app, iOS framework, JVM app, web shell) собирают их через Koin. Для браузера код шарится через wasmJs/jsTarгет того же shared-модуля.

### 4. Типовой состав слоя данных

- **Repository над сетью**: `interface XRepository { fun observeY(): Flow<UiState<Y>>; suspend fun refresh() }`; repo инкапсулирует Ktorfit-API, кеш in-memory (StateFlow как source of truth для PoC), error-mapping в `UiState.Error`.
- **Ошибка единым sealed-типом** (`ApiError.Network/Timeout/Http(status, body)/Serialization/Server`) — создаётся в `HttpResponseValidator`, поэтому UI-слой BDUI получает предсказуемую таксономию.
- **Auth-токены**: интерфейс `TokenStore` в commonMain (get/set/clear access&refresh + наблюдение Flow). Реализации по таблице [russhwolf/multiplatform-settings](https://github.com/russhwolf/multiplatform-settings) v1.3.0:
  - Apple → `KeychainSettings` (Apple Keychain; модуль помечен experimental, автор просит фидбек — ок для PoC);
  - Android → `SharedPreferencesSettings`/`DataStoreSettings` (DataStore реализует `FlowSettings` сразу, v1.2.0+). Внимание: Jetpack `EncryptedSharedPreferences` **deprecated** начиная с security-crypto 1.1.0-alpha07 и никогда не дошёл до stable (https://developer.android.com/reference/androidx/security/crypto/EncryptedSharedPreferences, миграционный гайд 2026: https://proandroiddev.com/goodbye-encryptedsharedpreferences-a-2026-migration-guide-4b819b4a537a) — поэтому KVault тоже не берём (последний релиз 11.10.2023, завязан на ту самую deprecated-библиотеку: https://api.github.com/repos/liftric/KVault/releases/latest); при требованиях безопасности — собственная обёртка Keystore поверх DataStore;
  - Desktop JVM (Win/macOS) → `PreferencesSettings` (java.util.prefs) / `RegistrySettings` на Windows-mingw — честно отметить, что шифрования нет, секреты защищаются правами пользователя ОС (для PoC приемлемо);
  - Браузер → `StorageSettings` (localStorage, js+wasmJs) для non-sensitive; для самих токенов правильнее **HttpOnly-cookie сессия на Go-стороне либо access-token только в памяти** — персистентных безопасных хранилищ в браузере нет.
- **Обновление токенов**: `install(Auth)` с `BearerTokens` + `refreshTokens {}` — прозрачная ротация 401→refresh→retry,refresh-токены только через TokenStore.
- **Retry**: `HttpRequestRetry` c экспоненциальным backoff (по умолчанию 3 попытки) на GET/idempotent, отключённый на POST оплаты/созданий.

### 5. Итоговый стек для PoC (версии датированы августом 2026)

| Компонент | Выбор | Версия/дата | Источник |
|---|---|---|---|
| Контракт | OpenAPI 3 JSON | — | разделённая спека Go↔клиенты |
| Кодоген DTO | openapi-generator `-g kotlin`, models-only | v7.25.0 (24.08.2026) | github releases (см. §1.2) |
| HTTP | Ktor Client + kotlinx-serialization-json | 3.5.x (доки от 24.04.2026) | ktor.io/docs/client-engines.html |
| Endpoint-слой | Ktorfit | 2.7.5 (07.06.2026, Ktor 3.5.0/Kotlin 2.2+) | Foso/Ktorfit releases |
| DI | Koin | 4.2.2 (15.06.2026) | InsertKoinIO/koin releases |
| Навигация/lifecycle (опц.) | Decompose | 3.x, таргеты вкл. wasmJs/js | arkivanov/Decompose README |
| Хранилище | multiplatform-settings (+coroutines Flow) | 1.3.0 | russhwolf README |

### 6. Три главных риска связки Go↔KMP для этого PoC

1. **Безопасное хранение и стратегия токенов в гетерогенных клиентах** — особенно браузер и desktop JVM: нет ни Keychain, ни EncryptedSharedPreferences (deprecated: developer.android.com, см. §4), localStorage/desktop prefs — plaintext. Митигация: HttpOnly-cookie на Go для web, короткоживущий access в памяти, refresh по ключу ОС где возможно; продумать CORS и SameSite на Go-сервере заранее.
2. **Расхождение типов на стыке OpenAPI ↔ Go ↔ Kotlin**: zero-values в Go (`omitempty`, int64→string в JSON), union/oneOf — исторически слабое место генераторов kotlin (см. #20501/#22349 и Reddit §1.2). Митигация: дисциплина спеки (nullable/required явно, no bare int64 в JSON если важна точность — строкой), CI-джоба диффа спеки и регенерации DTO.
3. **Зрелость wasmJs-ветки экосистемы**: браузерный клиент компилируется в wasmJs (CIO — единственный полноценный движок, docs 24.04.2026), а часть библиотек (Ktorfit README описывает Js, wasmJs поддержка в отдельных артефактах; Ktor-плагины вроде auth/retry на wasmJs проверять на каждом апгрейде). Митигация: earliest smoke-тест всех five target в CI (сборка всех six source sets с первого дня), при проблемах wasmJs fallback на js-таргет с тем же кодом.

— Конец ответа. Статус выставлен: resolved. map.md и остальные файлы не изменялись.
