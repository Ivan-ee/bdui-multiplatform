# Arenda Platform PoC

Тестовое приложение для проверки стека будущего сервиса управления арендой недвижимости:
Go-бэкенд + три клиента (Android, iOS, веб-кабинет) на Kotlin Multiplatform с единым
сервер-драйвен UI (BDUI, движок DivKit). Термины — в [CONTEXT.md](CONTEXT.md).

Текущее состояние: **сквозной сценарий** — каталог → карточка Объекта → оплата-заглушка
(окно аренды пресетами) → кабинет «Мои платежи» работает на всех трёх клиентах из одних
серверных DivKit-layout'ов и одной базы: оплата с любого клиента мгновенно видна в
остальных (объект исчезает из каталога, платёж появляется в кабинете). Скриншоты —
в `docs/slices/`. Осталось из назначения: регистрация, форма сдачи Объекта, кабинет
Арендодателя, KMP-фреймворк на iOS (сейчас URLSession).

## Структура

```
server/        Go 1.26: cmd/server + internal/{transport,service,storage}, миграции goose
server/api/    OpenAPI 3 спека — контракт для кодогенерации клиентов
shared/        Kotlin Multiplatform: модели, CatalogApi (Ktor), Koin-модуль
androidApp/    Jetpack Compose + divkit-compose 33.0.0
iosApp/        SwiftUI + divkit-ios 33.0.0 (SPM); проект генерируется xcodegen
webCabinet/    Vite + DivKit vanilla JS; shared-модуль подключён как file:-зависимость
```

## Запуск

Требования: Go 1.26+, Docker, JDK 21, Node 24+, для Android — Android SDK (SDK 36),
для iOS — Xcode 26 и [xcodegen](https://github.com/yonaskolb/XcodeGen) (`brew install xcodegen`).

1. **Postgres** (из корня репозитория):
   ```bash
   docker compose up -d db
   ```
2. **Go-сервер** (порт 8090; применит миграции и демо-данные сам):
   ```bash
   cd server && go run ./cmd/server
   ```
   Проверка: `curl localhost:8090/api/v1/objects`
3. **Веб-кабинет**:
   ```bash
   cd webCabinet && npm install && npm run dev   # http://localhost:5173
   ```
   `npm run dev` пересобирает Kotlin/JS-дистрибуцию shared-модуля перед стартом.
4. **Android**: `gradle :androidApp:assembleDebug` → APK в `androidApp/build/outputs/apk/debug/`.
   На эмуляторе сервер доступен как `10.0.2.2:8090` (уже прописано в `MainActivity`).
   Для устройства поменяйте `BASE_URL` на IP машины в локальной сети.
5. **iOS**:
   ```bash
   cd iosApp && xcodegen generate   # один раз; повторять после смены project.yml
   open ArendaPoC.xcodeproj         # Xcode сам разрезолвит SPM (DivKit 33.0.0)
   ```
   Симулятор ходит на `localhost:8090` напрямую.

## API и навигация

Экраны (все собираются на сервере из живых данных):

- `GET /api/v1/layout/catalog` — каталог; тап по карточке → `custom://object/{id}`
- `GET /api/v1/layout/object/{id}` — карточка Объекта; «Арендовать» → `custom://pay/{id}`
- `GET /api/v1/layout/pay/{id}` — окно аренды пресетами 1/3/6/12 мес, суммы считает сервер
- `GET /api/v1/layout/my_payments` — кабинет Арендатора («Мои платежи»)

Данные: `GET /api/v1/objects`, `GET /api/v1/objects/{id}`, `POST /api/v1/payments`
(создаёт Платёж, помечает Объект занятым), `GET /api/v1/payments`. Авторизации нет:
Арендатор — seeded-демо-пользователь.

Навигация в BDUI: кнопки несут действия `custom://…` (нестандартная схема — DivKit
отдаёт её приложению на всех трёх клиентах: web `onCustomAction`, Android
`DivExternalActionHandler`, iOS `DivUrlHandler`). Клиент держит только «какой экран
открыт», layout'ы всегда приходят с сервера. Отладка: веб понимает `/?go=custom://…`,
iOS — launch-аргумент `-go custom://…` (см. `simctl launch`).

## Грабли среды и стека (найдены на срезе)

**Среда**

- На машине автора порт **8080 занят другим процессом** — сервер по умолчанию слушает 8090
  (`PORT` переопределяет).
- `ANDROID_HOME` в окружении не выставлен — AGP берёт SDK из `local.properties` (`sdk.dir`,
  не коммитится).
- Штатный `sdkmanager` в машине отстаёт от SDK: `platforms;android-37` не находит
  (SDK XML v4). Поэтому Compose BOM зафиксирован **2026.06.01** (как у divkit-compose 33.0.0):
  compose 1.11 живёт на compileSdk 36, а BOM 2026.08 требует SDK 37.
- Gradle в системе нет (`brew install gradle`); gradle-wrapper в репозиторий ещё не добавлен.
- Незакрытая настройка Xcode: `xcodebuild` без scheme падает — работать после `xcodegen generate`.

**AGP 9 / Kotlin 2.4**

- AGP 9 включает built-in Kotlin: плагин `org.jetbrains.kotlin.android` **не применяется**
  (ошибка «no longer required»). Compose Compiler Gradle-плагин при этом обязателен.
- Для KMP-модуля вместо `com.android.library` нужен **`com.android.kotlin.multiplatform.library`**.
- Дефолтная иерархия KMP **не создаёт `iosMain`** с этим плагином — сорс-сет создан вручную.
- В `js(IR)` `moduleName` задаётся через `compilerOptions`, а не на верхнем уровне.

**Kotlin/JS и веб**

- `Promise` и браузерные API вынесены из stdlib: `kotlin.js.Promise` на месте, а вот
  `js.promise` — из пакета `kotlinx-browser`.
- Дистрибуция `binaries.library()` — это **UMD с вложенным namespace** (`ru.arenda.shared.*`):
  веб разворачивает его шимом `webCabinet/src/shared.js`.
- Vite **не пре-бандлит `file:`-зависимости** без `optimizeDeps.include: ['arenda-shared']` —
  без этого браузер падает на `require`.
- DivKit web 33.0.0: vanilla API — `render()` из `@divkitframework/divkit/client`
  (не `renderComponent`), CSS — `dist/client.css`.

**DivKit 33**

- Карта ходит в конверте **`{templates, card}`** — его ждут web, Android и iOS.
- Поле текста в схеме — **`text`**, не `text_value` (иначе web рендерит пустые строки;
  стиль при этом применяется — легко пропустить).
- Фон контейнера — **`background: [{"type": "solid", "color": "#…"}]`**: без `"type"`
  обе мобильные платформы молча рендерят белое (web тоже игнорирует).
- Навигационные действия — нестандартная схема **`custom://…`**: web отдаёт её в
  `onCustomAction` (иначе пытается открыть как ссылку — таб улетает в about:blank);
  Android/iOS получают её в своих хэндлерах. Парсить аккуратно: `split('/')` даёт
  пустой элемент после `custom:` — отрезайте схему целиком.
- `divkit-compose` тянет `div-core`/`div-data` в scope **runtime**: что нужно на этапе
  компиляции, объявляй явно.
- Парсинг карты на Android 33.0.0: `DivData.CREATOR(environment, cardJson)` после
  `environment.parseTemplates(...)`; API main-ветки демо отличается от maven-артефактов.
- Go: заголовки строго **до** `WriteHeader` — Content-Type, выставленный после, молча
  теряется, и Kotlin/Ktor не может разобрать ответ (201 без Content-Type).

**Осознанные упрощения среза** (всё — кандидаты в отдельные тикеты после среза)

- `sqlc` не подключён: hand-written pgx-запросы; миграции goose зашиты в бинарник.
- `Ktorfit` и `openapi-generator` (models-only) не подключены: DTO руками зеркалят
  `server/api/openapi.yaml`, endpoint-слой — прямые Ktor-запросы.
- На iOS сетевой слой пока `URLSession` — KMP-фреймворк (XCFramework) в срез не вшит;
  у divkit-ios для этого есть готовый продукт `DivKitKMP`.
- Koin-модуль объявлен в `shared`, но `androidApp` создаёт `CatalogApi` напрямую.
