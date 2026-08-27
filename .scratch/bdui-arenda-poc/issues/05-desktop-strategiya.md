# 05 - Стратегия BDUI на десктопе (Windows/macOS)

Type: research
Status: resolved
Blocked by: 02

## Question

Если выбранный BDUI-движок (см. тикет «Выбор BDUI-движка») не имеет официального desktop-рендерера — каким способом запускать единый BDUI-интерфейс на Windows и macOS, сохраняя максимум общего Kotlin-кода?

Исследовать варианты:

1. Официальный/неофициальный JVM-рендерер DivKit (репозиторий divkit/divkit — есть ли jvm/desktop target, community-форки, issues о поддержке Compose Desktop).
2. Вариант WebView: HTML-рендер DivKit JS внутри Compose Desktop (JCEF/CEF) или аналогов — плюсы (единый рендер с вебом) и минусы (ощущение нативности, память, интеграция).
3. Вариант самописного минимального рендера подмножества DivKit-компонентов (каталог, формы) на Compose Desktop — оценка объёма работы, примеры у сообщества.
4. Fallback-стратегия: если ничего жизнеспособного нет — допустим ли на десктопе отдельный UI-слой на Compose Multiplatform без BDUI (общая KMP-логика остаётся общей)? Насколько это ломает главную гипотезу PoC?
5. Примеры desktop-клиентов крупных продуктов на Kotlin/Compose.

Итог: сравнительная таблица вариантов, риск-оценка трудозатрат, рекомендация для PoC (что именно меряем на десктопе, чтобы вывод о гипотезе был честным). Со ссылками и датами. Записать под `## Answer`, выставить `Status: resolved`. Не трогать map.md.

## Answer

*Исследование выполнено 2026-08-27 по первоисточникам (github.com через GitHub API, divkit.tech, crates.io, kotlinlang.org/blog.jetbrains.com, learn.microsoft.com, docs.tauri.app, репозитории библиотек). Контекст: [тикет 02](./02-bdui-dvizhok.md) зафиксировал DivKit 33.0.0 и отсутствие официального desktop-рендера.*

### 1. Перепроверка статуса DivKit на десктопе (август 2026)

- **Релиз 33.0.0 (26.08.2026)**: «DivKit for Compose is no longer in experimental state» — речь **только про Android**; в release notes нет ни одного пункта про JVM/desktop ([release 33.0.0](https://github.com/divkit/divkit/releases/tag/33.0.0), проверено 27.08.2026). Еженедельная частота релизов подтверждена живьём: 32.53.0 (08.06) → 32.61.0 (04.08) → 33.0.0 (26.08) — [Releases](https://github.com/divkit/divkit/releases).
- **KMP-модуль**: официальная дока по-прежнему говорит «for both iOS and Android platforms», ни слова о jvm/js/wasm таргетах ([divkit.tech/docs/en/quickstart/KMP](https://divkit.tech/docs/en/quickstart/KMP), 27.08.2026).
- **Трекер запросов пуст**: поиск issues по «desktop» даёт total_count = 0, по «compose» — 0 релевантных, единственное совпадение по «jvm» — нерелевантный баг про SVG (#124, 21.10.2025). Сообщество не просит desktop-таргет — значит в обозримой дорожной карте его не будет (GitHub Search API, 27.08.2026).
- **Форки/community-проекты с рендером DivKit на Compose Multiplatform** — не найдены: поиск GitHub по «divkit compose» выдаёт один учебный проект студента школы Яндекса ([Gribbirg/todo-list-app](https://github.com/Gribbirg/todo-list-app), 1 звезда).

**Вывод: официальный путь рендера BDUI на Windows/macOS отсутствует, и это стабильный факт, а не временное состояние. Стратегию десктопа строим самостоятельно.**

### 2. Вариант A — WebView (JCEF/KCEF) внутри приложения на Compose Desktop

Суть: Kotlin-хост на Compose Desktop (общая логика через jvmTarget), UI-панель — Chromium-WebView с локально запущенным **официальным web-рендером DivKit** (`@divkitframework/divkit`, 82.8 KB min+brotli).

**Готовые паттерны и библиотеки:**

- [KevinnZou/compose-webview-multiplatform](https://github.com/KevinnZou/compose-webview-multiplatform) (Apache-2.0, 1005 звёзд, последний push 23.12.2025, артефакт `io.github.kevinnzou:compose-webview-multiplatform:2.0.3`) — WebView composable для CMP с desktop-поддержкой: до v1.2.0 JavaFX WebView → c v1.3.0 CEF → с v1.7.0 KCEF/JCEF.
- **JS↔Kotlin мост из коробки** (с v1.8.0+): JS вызывает `window.kmpJsBridge.callNative(methodName, paramsJson, callback)`, Kotlin регистрирует хендлеры `IJsMessageHandler` (handle + callback) или выполняет JS обратно через `evaluateJavaScript`; имя глобального объекта моста настраивается (v1.8.6+) — действий-событий DivKit вполне хватает этому каналу: перехватываем URL-действия/кастомные actions в JS-обёртке и прокидываем в Kotlin.
- Официального WebView в Compose Multiplatform нет — открыт feature request [YouTrack CMP-8105](https://youtrack.jetbrains.com/projects/CMP/issues/CMP-8105/Feature-Request-Official-WebView-Component-for-Compose-Multiplatform); JetBrains сами используют JCEF во всех IDE (внедрение в IntelliJ Platform 2020.1 — [IntelliJ SDK docs](https://plugins.jetbrains.com/docs/intellij/embedded-browser-jcef.html)).
- **JavaFX WebView — отвергнут**: устаревший WebKit, слабый JS-перформанс («not cutting it from a JavaScript performance standpoint» — [java-cef#163](https://github.com/chromiumembedded/java-cef/issues/163)), нет нормальных DevTools (обсуждение в [списках рассылки Apache](https://lists.apache.org/thread/o2oky8vwy7qpnjtpllt21tj26384sbon)); современный DivKit web-бандл под ним гонять рискованно.
- Коммерческая альтернатива со своим Chromium — JxBrowser (есть нативная интеграция с Compose — [blog teamdev](https://teamdev.com/jxbrowser/blog/building-web-view-for-compose/)), но это платная лицензия.

**Ощущения и производительность:** двойной runtime (JVM + Chromium) в одном процессе; пакеты с JCEF тяжелее и требуют отдельного тулинга дистрибуции (community-туториал про упаковку через [Conveyor](https://www.reddit.com/r/Kotlin/comments/11zmpu9/tutorial_deploying_kotlin_desktop_apps_that_embed/), 2023). Известные ограничения desktop-ветки библиотеки: ручная инициализация CEF (README.desktop.md), загрузка внешних ресурсов для локального HTML «coming soon» только Android/iOS, RequestInterceptor тоже без desktop.

**Риск сопровождения:** базовый KCEF-репозиторий [DatL4g/KCEF](https://github.com/DatL4g/KCEF) помечен как archived (GitHub Search API, 27.08.2026) — останется на KCEF-форке самой WebView-библиотеки; desktop — наименее обкатанная её часть (141 открытый issue против 1005 звёзд). Разница движков: здесь CEF бандлится сами знаем какой версии, т.е. фрагментация управляемая, но вес растёт.

### 3. Вариант B — собственный минимальный рендер подмножества схемы DivKit на Compose Multiplatform desktop

**Состав подмножества под PoC-сценарий «каталог → карточка объекта → оплата (заглушка) → личный кабинет»** (по списку компонентов из [docs divkit.tech](https://divkit.tech/docs/en/) и тикета 02): container (vertical/horizontal, gravity, margins/paddings, фон solid+градиент, границы, радиусы), text (+стили/шрифты), image, separator, gallery/grid (lazy-скроллы каталога), tabs, state (переключение контента форм), input/textarea/select/checkbox/switch (формы оплаты и кабинета) + инфраструктура: переменные, вычисляемые выражения (`${...}` интерполяция + функции if/equality/concatenation), действия (set_variable/open_url/custom).

**Экспертная оценка трудозатрат (один разработчик, знающий Compose):**

| Блок | Чел.-дни |
|---|---|
| JSON-парсер подмножества схемы → модели CMP | 1–2 |
| Layout-движок: линейные контейнеры, weights, отступы, lazy-скроллы | 4–6 |
| Text/Image/Separator/«кнопка как контейнер+action» | 2–3 |
| Формы: input/select/checkbox/switch + focus | 2–3 |
| state + переключения | 1–2 |
| Парсер выражений + реактивные привязки к переменным | 5–8 |
| Actions routing (setvar/url/custom/download) + навигация экранов BDUI | 2–3 |
| Tabs/Gallery/Pager упрощённые | 3–4 |
| Полировка визуала (радиусы/фоны/градиенты/границы/тёмная тема) | 2–3 |
| **Итого PoC-качество** | **~22–34** |

Production-качество (templates с наследованием — а мы планировали их серверную дизайн-систему, transitions/анимации, item_builder/patch, RTL, accessibility, video/lottie) — это уже кварталы, плюс вечная синхронизация поведения с четырьмя эталонными рендерами при каждом релизе DivKit.

**Сообщество: попыток порта именно DivKit на CMP не найдено** (см. п.1). Есть SDUI-фреймворки на CMP со своими схемами — они показывают жизнеспособность подхода, но код DivKit-совместимый взять неоткуда: [utsmannn/compose-remote-layout](https://github.com/utsmannn/compose-remote-layout) (168★, push 30.07.2026), [Lennoard/Snappier](https://github.com/Lennoard/Snappier) (22★), [numq/blueprint](https://github.com/numq/blueprint) (2★, июль 2026, единственный с явным desktop-таргетом) — все реализуют собственные JSON-форматы (GitHub Search API, 27.08.2026). Даже Airbnb/DoorDash с командами в сотни инженеров не пишут рендер каждой платформы «с нуля за квартал» — им помогает то, что SDUI-слой у них узкий (секции поверх нативных каркасов), см. [тикет 02, п.4](./02-bdui-dvizhok.md).

**Вывод: непропорционально цене PoC и создаёт вечный второй источник правды по поведению схемы. Отклоняется.**

### 4. Вариант C — десктоп как обёрнутый веб-кабинет (Tauri вокруг того же DivKit web-приложения)

По карте веб-кабинет существует в PoC независимо от десктопа — значит общую логику целить в js/wasmJs придётся в любом случае, и десктоп достаётся почти бесплатно: тот же билд кабинета + тонкая обёртка-окно.

**Зрелость Tauri в 2026:**

- Stable 2.0 — 02.10.2024 ([blog](https://v2.tauri.app/blog/tauri-20/)); линейка 2.x активно поддерживается: `tauri` crate **2.11.5 опубликован 01.07.2026** ([crates.io](https://crates.io/api/v1/crates/tauri)); экосистема плагинов шипит регулярно (релизы plugins-workspace: store 2.4.4, log 2.9.0 и др., 13–18.07.2026 — [releases](https://github.com/tauri-apps/plugins-workspace/releases)).
- Рендер — системный WebView: **WebView2** (evergreen Chromium, предустановлен в Windows) и WKWebView на macOS — для vanilla-JS бандла DivKit этого достаточно.
- **Автообновление** — first-party плагин [Updater](https://v2.tauri.app/plugin/updater/): обязательная подпись обновлений (`tauri signer generate`), static/dynamic JSON-манифесты (S3/GitHub/сервер), endpoints с плейсхолдерами `{{target}}/{{arch}}`; дока обновлена 28.11.2025. Нюансы: потеря приватного ключа = невозможность обновлять установленные копии; на Windows приложение закрывается при установке апдейта (ограничение инсталляторов).
- Трей, глобальные хоткеи, диалоги, fs/http — готовые официальные плагины той же линейки.

**Kotlin shared js/wasmJs совместимость:** Kotlin/JS — стабильно поддерживаемый таргет KMP (interop с npm/JS через external declarations / export-аннотации). Kotlin/Wasm по официальному roadmap JetBrains переведён в Beta вместе с Compose Multiplatform for web ([Present and Future of Kotlin for Web, май 2025](https://blog.jetbrains.com/kotlin/2025/05/present-and-future-kotlin-for-web/)). Для тонкого кабинета над REST достаточно: либо js-target общего модуля (DTO/domain), либо чистый TS-слой поверх тех же контрактов OpenAPI — вопрос архитектуры кабинета, не блокер десктопа.

**Практика индустрии (почему это легитимный мейнстрим, а не костыль):**

- Новый Microsoft Teams переехал с Electron на системный **WebView2** ради −50% памяти и скорости ([Tech Community Microsoft, 2023](https://techcommunity.microsoft.com/blog/microsoftteamsblog/what%E2%80%99s-new-for-security-in-the-new-microsoft-teams/3804261), разбор [tomtalks.blog](https://tomtalks.blog/microsoft-teams-2-0-will-use-half-the-memory-dropping-electron-for-edge-webview2/)) — то есть индустрия движется от «браузера в каждом приложении» к «системному WebView в приложении».
- VS Code, Slack, Discord и др. десятилетие живут на Electron (веб-технологии на десктопе в продакшене у сотен миллионов пользователей).
- Обратный пример — [JetBrains Toolbox: case study переноса ~1 млн пользователей с Electron на Kotlin+Compose Desktop](https://blog.jetbrains.com/kotlin/2021/12/compose-multiplatform-toolbox-case-study/) (дек. 2021; Toolbox 2.0 — авг. 2023): нативный стек Kotlin на десктопе жизнеспособен, когда нужен контроль и лёгкость — но Toolbox это команда JetBrains с полной ставкой на свою платформу.
- Публичных кейсов «BDUI-JSON на нативном desktop-рендере» у крупных продуктов нет вообще — рынок десктопа решает эту задачу веб-технологиями; прямого индустриального референса у варианта B также не существует.

### 5. Fallback (вопрос тикета про отказ от BDUI на десктопе)

Допустим технически: native-CMP слой десктопа + общая KMP-логика. Но это сужает гипотезу PoC с «один UI из одного места» до «одна логика из одного места», а последняя и так проверяется iOS-клиентом почти даром. Десктоп-натив перестал бы быть доказательством BDUI-гипотезы. Учитывая, что вариант C дешевле, чем написание нативного fallback-слоя, **fallback не нужен уже сегодня**.

### 6. Сравнительная таблица

| Критерий | A: JCEF/KCEF в Compose Desktop | B: свой рендер подмножества на CMP | C: Tauri вокруг того же web-кабинета |
|---|---|---|---|
| Трудозатраты до рабочего PoC (Win+macOS) | 3–7 чел.-дней (инициализация CEF, упаковка/Conveyor, мост actions→actions) | ~25–35 чел.-дней + постоянное сопровождение | **1–3 дня** (обёртка + updater) |
| Что рендерит UI | Официальный web-рендер DivKit | Собственный код ≠ эталону | Официальный web-рендер DivKit (тот же билд, что кабинет) |
| «Один UI из одного места» | Да (тот же JSON) | Частично: подмножество + дрейф поведения | **Да, буквально тот же артефакт** |
| Переиспользование общего Kotlin | Прямое (jvmTarget) | Прямое (jvmTarget) | Через js/wasmJs target (нужен кабинету в любом случае) |
| Нативность ощущений | Средне (Chromium в JVM-процессе, тяжёлый пакет) | Высокая (потенциально) | Низкая (= сайт в окне; трей/окна решаемы плагинами Tauri) |
| Главный риск | Desktop-часть WebView-библиотеки наименее обкатана; KCEF архивирован; двойной runtime | Оценки ×2–3; два источника правды навсегда | Ограничение вывода: нативность не тестируется; wasmJs пока Beta (для кабинета хватит js) |
| Автообновление | Своё решение + специфичная упаковка JCEF | Полностью своё | **Готовый signed updater plugin** |
| Вес дистрибутива | Большой (JRE + CEF) | Малый (JRE) | **Малый** (~системный WebView + html/js) |
| Прецедент в индустрии | IntelliJ/JCEF; местами банки | Аналогов DivKit-порта нет | Teams/VS Code/Slack — массово |

### 7. Рекомендация для PoC

**Строим вариант C: десктоп Windows/macOS = Tauri-окно вокруг того же DivKit web-приложения (кабинета), общий Kotlin — через js-target shared-модуля (wasmJs держим на радаре).** Вариант A фиксируем как план Б для продуктовой стадии, если появятся требования глубокой OS-интеграции/нативности в одном Kotlin-процессе (тогда один и тот же web-бандл DivKit просто переносится в JCEF-хост — миграция локализована). Вариант B отклонён.

Что это докажет в тесте гипотезы:
1. Один серверный BDUI-JSON реально покрывает все поверхности сценария (каталог/карточку/формы оплаты/кабинет) сразу на Android+iOS+Windows+macOS+web — пять клиентов, шесть с учётом двух OS десктопа.
2. Скорость изменений UI без релизов клиентов — включая десктоп (правится карточка на сервере → обновляется всё).
3. Общая бизнес-логика KMP работает и на мобильных (jvm/native), и на web-born клиентах (js target) — где именно лежат грабли кросс-таргетности, увидим честно.

Что это честно НЕ докажет (записать в ограничения выводов PoC):
- нативное ощущение и производительность на слабых машинах (Tauri/web — как у сайта);
- глубокая OS-интеграция десктопа (драг-дроп, файловые ассоциации, хоткеи) — в объёме PoC не тест;
- поведение реального нативного desktop-рендера DivKit — такого компонента в экосистеме не существует (п.1), это ограничение выбора DivKit, а не нашего стека.

Метрики успеха для десктопа в PoC: сквозной сценарий проходит на Windows и macOS; человеко-дни на обёртку ≤ 3; клиентский non-shared код оболочки (Rust+JS-glue Tauri) минимален (< несколько сотен LOC); автообновление встаёт штатным updater-плагином без собственного бэкенда дистрибуции.
