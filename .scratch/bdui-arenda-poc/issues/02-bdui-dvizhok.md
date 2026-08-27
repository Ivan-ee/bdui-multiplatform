# 02 - Выбор BDUI-движка: DivKit и альтернативы

Type: research
Status: resolved
Blocked by:

## Question

Какой движок server-driven UI (BDUI) взять для всех пяти клиентов (Android, iOS, Windows, macOS, веб)? Кандидат по умолчанию — DivKit от Яндекса; проверить, правилен ли выбор, и чем вообще пользуются крупные компании.

Конкретно выяснить:

1. DivKit: актуальное состояние в 2026 (версии, активность репозитория divkit/divkit), официально поддерживаемые платформы (iOS, Android, Web/JavaScript — есть ли JVM/desktop renderer — критически важно для тикета 05!), React/vanilla web SDK статус, лицензия.
2. Возможности DivKit: набор компонентов, expressions/state/actions, кастомизация тем, адаптивность, производительность против нативного UI.
3. Альтернативы и индустрия: внутренние SDUI-решения крупных компаний (Airbnb, DoorDash, Lyft, Shopify, Spotify и др. — доклады/инженерные блоги), открытые конкуренты (живые ли проекты). Сравнение по охвату платформ и зрелости.
4. Паттерны применения SDUI в продакшене: где уместен (динамический контент, A/B), где плохо работает (тяжёлые интерактивные формы, сложные жесты), как компании ограничивают область SDUI.
5. Рекомендация для PoC: остаться на DivKit или иначе; чем рендерить на вебе и мобиле. Десктоп-стратегию отдаём тикету 05, но здесь зафиксировать основание выбора.

Ответ — с ссылками и датами. Записать под `## Answer`, выставить `Status: resolved`. Не трогать map.md.

## Answer

*Исследование выполнено 2026-08-27 по первоисточникам (github.com, divkit.tech, реестры Maven Central/npm, инженерные блоги компаний).*

### 1. Актуальное состояние DivKit в 2026

**Активность — высокая, проект живой.** Репозиторий [divkit/divkit](https://github.com/divkit/divkit): ~2700 звёзд, 5300+ коммитов в `main`, последний push — **2026-08-27** (день проверки, проверено через GitHub API). Релизы выходят еженедельно: 32.53.0 (08.06.2026) … **33.0.0 (26.08.2026)** — см. [Releases](https://github.com/divkit/divkit/releases). Открытых issue всего ~15. iOS-релизы синхронны с ядром ([divkit-ios release 33.0.0 от 26.08.2026](https://github.com/divkit/divkit-ios)). Лицензия подтверждена по файлу LICENSE в репо: **Apache-2.0** («Copyright 2022 YANDEX LLC»).

**Официально поддерживаемые рендеры на 26.08.2026 (релиз 33.0.0):**

| Платформа | Статус | Артефакт |
|---|---|---|
| Android | Полная поддержка, два клиента: классический View-based (`div-*`) и новый Jetpack Compose (`com.yandex.div:compose`, модуль [client/android/compose](https://github.com/divkit/divkit/tree/main/client/android/compose)) | Maven Central, группа `com.yandex.div`, 33.x |
| iOS | Полная поддержка, нативный Swift-клиент | SPM пакеты [divkit-ios](https://github.com/divkit/divkit-ios), 33.0.0 |
| Web | Полная поддержка, vanilla JS с SSR/hydration, 82.8 KB minified+brotli (бейдж в [README web-клиента](https://github.com/divkit/divkit/tree/main/client/web/divkit)) | npm `@divkitframework/divkit` 33.0.0 |
| JVM/desktop (Windows/macOS/Linux) | **НЕ поддерживается. Официального рендера нет** | — |

**Детали по десктопу (критично для тикета 05):**

- В исходниках есть модуль `client/multiplatform` — официальная KMP-обёртка [`com.yandex.divkit.multiplatform:divkit-multiplatform`](https://repo1.maven.org/maven2/com/yandex/divkit/multiplatform/) (релиз 33.0.0), но её таргеты — **только android и ios (iosarm64 / iossimulatorarm64 / iosx64)**; JVM-таргета нет, sample только Android+iOS ([README KMP-модуля](https://raw.githubusercontent.com/divkit/divkit/main/client/multiplatform/README.md), [дока KMP quickstart](https://divkit.tech/docs/en/quickstart/KMP)).
- Поиск issue по слову «desktop» в репозитории даёт **0 результатов**, по «jvm» по всей организации divkit — ничего релевантного (GitHub Search API, 27.08.2026). Заявок на Compose Desktop/JVM сообщество не оформляло.
- Gradle-модули compose-рендера собираются плагином `com.android.library` (не multiplatform), т.е. официальный Compose-клиент затачивался под Android; перенос на desktop — самостоятельная нетривиальная работа.
- Контекст: мейнтейнер DivKit в issue [divkit-ios#2](https://github.com/divkit/divkit-ios/issues/2) (комментарий от 25.07.2025) писал про API для кросс-платформенных Compose-приложений «for both platforms» — имеются в виду только Android+iOS. Issue закрыт 11.02.2026 после расширения API (theming/error/action handling добавлялись по запросу сообщества) — кросс-платформенный Compose-путь активно развивается, но в границах мобильных OS.

**Web SDK:** основной пакет — vanilla `@divkitframework/divkit` (релизится синхронно с ядром, SSR через `/server` + `/client-hydratable`, динамическое переключение тем через `themeVariableName` — [quick-start-web](https://divkit.tech/docs/en/concepts/quick-start-web.md)). React-обёртка `@divkitframework/react` есть в монорепо ([client/web/divkit-react](https://github.com/divkit/divkit/tree/main/client/web/divkit-react), тонкий компонент над vanilla-версией, в репо версия 2.1.0), но на npm последний publish — **2.0.0 от 16.02.2024** (реестр npm, 27.08.2026). Для веба рекомендую vanilla-пакет и при необходимости свою тонкую обёртку.

### 2. Возможности движка

По [официальной документации](https://divkit.tech/docs/en/) (есть русская версия: [divkit.tech/docs/ru](https://divkit.tech/docs/ru/)); полный индекс страниц: [llms.txt](https://divkit.tech/docs/en/llms.txt).

- **Компоненты (schema v2)**: container, text, image, gif-image, video, gallery, grid, pager, tabs, state, select, input, slider, separator, indicator, custom, data + модификаторы: фоны (solid, linear/radial-градиенты, nine-patch), границы, радиусы, тени, blur/filter, transform, focus, tooltips, таймеры, триггеры (div-trigger), visibility-action, transitions/анимации появления и изменения, поддержка доступности ([accessibility](https://divkit.tech/docs/en/concepts/accessibility.md)).
- **Логика**: переменные и глобальные переменные, вычисляемые выражения ([expressions](https://divkit.tech/docs/en/concepts/expressions.md)), встроенные и user-defined функции, Expression DSL, действия (div-action), патчи карточек (patch) — частичные обновления UI без перезагрузки («infinite gallery»), динамические датасеты (item_builder).
- **Дизайн-система**: шаблоны (templates) с наследованием — серверный аналог дизайн-системы ([templates](https://divkit.tech/docs/en/concepts/templates.md)); переиспользование блоков (reuse); кастомизация через extensions для нативных компонентов ([extensions](https://divkit.tech/docs/en/concepts/extensions.md)); кастомные шрифты; светлая/тёмная темы через scheme-зависимые цвета и переменные/триггеры (на вебе — `themeVariableName`); RTL из коробки.
- **Производительность**: элементы реализуются нативно на каждой платформе ([главная](https://divkit.tech/en/)); веб-клиент лёгкий — 82.8 KB minified+brotli; команда оптимизировала рендер — доклад разработчика DivKit Л. Ральникова «Как мы ускоряли свой фреймворк», Yandex BDUI Conf 2024 ([YouTube](https://www.youtube.com/watch?v=VR_q65Tv8OI)); кейс внедрения — Яндекс Маркет, блог [«Как мы строили BDUI» (12.07.2024)](https://dev.go.yandex/blog/how-we-built-bdui-2024-07-12).
- **Кто использует** (по данным сайта, 27.08.2026): Яндекс (Browser, Music, Алиса, Маркет, Realty), внешние — X5 Group, VSK Insurance House, Edadeal, Mobile Ads SDK.

### 3. Индустрия: чем пользуются крупные компании

Практически все крупные мобильные компании используют **внутренние** SDUI-системы (полноценный открытый кроссплатформенный движок кроме DivKit никто не выпустил):

- **Airbnb** — Ghost Platform: единая сервер-driven система (Sections/Screens) для iOS/Android/web, «[A Deep Dive into Airbnb's Server-Driven UI System](https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5)» (июль 2021), обзор [InfoQ (2021)](https://www.infoq.com/news/2021/07/airbnb-server-driven-ui/).
- **DoorDash** — generic server-driven компоненты для ускорения итераций и экспериментов, «[Improving Development Velocity with Generic, Server-Driven UI Components](https://careersatdoordash.com/blog/improving-development-velocity-with-generic-server-driven-ui-components/)»; кейс Dasher FAQ Hub — серверный контент + WebView.
- **Lyft** — переход на SDUI команды Bikes&Scooters («[The Journey to Server Driven UI at Lyft](https://news.ycombinator.com/item?id=35095149)», апрель 2023); Live Activities у Lyft полностью сервер-driven («[Crafting Seamless Journeys with Live Activities](https://eng.lyft.com/crafting-seamless-journeys-with-live-activities-abe82e98546f)»).
- **Shopify** — SDUI-архитектура в приложении Shop («[Implementing Server-Driven UI Architecture on the Shop App](https://shopify.engineering/server-driven-ui-in-shop-app)») для персонализации storefront'ов мерчантов.
- **Spotify** — исторический Hub Framework для iOS заархивирован в 2018 ([spotify/HubFramework](https://github.com/spotify/HubFramework), GitHub: archived=true); подход эволюционировал во внутренний декларативный UI (доклад John Sundell UMT2016).
- **Delivery Hero** — внутренняя SDUI-платформа ([primer](https://deliveryhero.jobs/blog/primer-on-delivery-heros-server-driven-ui-platform/)); **Nubank** — собственный фреймворк ([building.nubank.com](https://building.nubank.com/server-driven-ui-framework-at-nubank/)).
- Сводки/паттерны: [MobileNativeFoundation discussion #47](https://github.com/MobileNativeFoundation/discussions/discussions/47) (стратегии backend-driven UI от инженеров Airbnb/Lyft/Instagram), обзоры [stac.dev](https://stac.dev/blogs/tech-companies-sdui/), [weweb.io, 2026 guide](https://www.weweb.io/blog/server-driven-ui-guide-architecture-examples).

**Живые открытые альтернативы DivKit фактически отсутствуют** (статусы проверены через GitHub API 27.08.2026):

- **Beagle** (Zup IT) — мёртв: официальный репозиторий недоступен (404 на github.com/zupit/beagle), проект свёрнут.
- **Alibaba VirtualView/DinamicX** — репозиторий недоступен (404), проект не развивается.
- **Spotify HubFramework** — archived с 2018.
- **Tencent tmagic-editor** — жив ([Tencent/tmagic-editor](https://github.com/Tencent/tmagic-editor), push 17.08.2026, ~4900 звёзд), но это low-code редактор H5-страниц (генерирует Vue/React код), а не нативный SDUI-рендерер для мобилок.
- **Stac** ([StacDev/stac](https://github.com/StacDev/stac), push 16.08.2026, ~900 звёзд) — активный открытый SDUI-фреймворк, но только для Flutter.
- Остальное — коммерческие платформы (Nativeblocks, Digia, Judo, Pyramid) и Android-only RemoteCompose из AOSP; ни один вендор не даёт собственного нативного рендера под все нужные нам платформы.

Вывод: DivKit — единственный крупный активно развиваемый open-source SDUI-движок с одновременной поддержкой Android + iOS + Web и единым JSON-контрактом схемы.

### 4. Паттерны применения SDUI в продакшене

Из приведённых выше источников устойчивый консенсус:

- **Где SDUI работает хорошо**: контентно-динамические поверхности — ленты/каталоги/карточки офферов, промо-блоки, онбординги, баннеры, FAQ-хабы, A/B-эксперименты и серверная конфигурация UI без релиза приложения (Airbnb Sections, DoorDash эксперименты, Shopify персонализация, Lyft Live Activities).
- **Где плохо работает**: тяжёлые интерактивные формы со сложной валидацией, сложные жесты/canvas/карты/виджеты реального времени, экраны с глубокой интеграцией в платформу и устройством-специфичным UX. Компании решают это гибридом: каркас и навигация остаются нативными, сервер управляет композицией из фиксированного набора типовых «секций»/компонентов; сложные интеракции реализуются как нативные custom-компоненты с подключением через расширения.
- Ограничение области: внедрять «блочно» (embed на уровне view внутри нативных экранов) — так рекомендует и сам DivKit, — а не переписывать всё приложение целиком.

### 5. Рекомендация для PoC

**Остаёмся на DivKit.** Открытые альтернативы либо мертвы (Beagle, VirtualView), либо покрывают одну платформу (Stac → Flutter), либо являются коммерческими SaaS без нативного рендера под весь наш набор платформ. Роли рендеров:

- **Мобильный UI-слой**: Android — Compose-клиент DivKit (`com.yandex.div:compose`; при упоре в беты — fallback на стабильный View-based клиент) или сразу KMP-модуль `com.yandex.divkit.multiplatform`; iOS — нативный Swift SDK 33.x (SPM, [divkit-ios](https://github.com/divkit/divkit-ios)). Единый JSON + templates как серверный контракт дизайн-системы; сложные интеракции — через extensions/custom-компоненты.
- **Веб**: vanilla-пакет `@divkitframework/divkit` 33.x (+ опционально SSR); React-обёртка на npm устарела — писать тонкую свою или использовать vanilla API напрямую.
- **Десктоп**: основание зафиксировано здесь — официальных JVM/desktop-рендеров нет и запросов на них в трекере нет (см. п.1). Кандидатные стратегии для тикета 05: (а) веб-рендер DivKit внутри системного WebView (опора на официально поддерживаемый код), (б) исследование самостоятельного портирования KMP/Compose-рендера на desktop-JVM, (в) десктоп как веб-приложение. Выбор — за тикетом 05.

**Риски DivKit:**

1. Нет desktop/JVM рендера — стратегия десктопа потребует WebView-подхода или собственного порта (детально в тикете 05).
2. Breaking changes схемы в мажорных релизах: в 33.0.0 `div-action.log_id` стал опциональным в схеме, но «actions without log_id are ignored by clients that use pre-33 DivKit version» ([release notes](https://github.com/divkit/divkit/releases/tag/33.0.0)) — фиксировать версию SDK и версионировать схему на бэкенде, тестировать совместимость старых клиентов.
3. Мобильный KMP/Compose путь молод: базовые сценарии работают, но продвинутый API (обработка ошибок/действий, темы) дорос до production-требований только после закрытия issue в феврале 2026 — закладывать время на расширения.
4. React-биндинг на npm не обновлялся с февраля 2024 — веб строить на vanilla-пакете.
5. Bus-factor: один основной вендор-мейнтейнер (Яндекс); issue-трекер малочислен (часть вопросов уходит в Telegram [t.me/divkit_community_en](https://t.me/divkit_community_en)), приоритеты зависят от внутренних нужд Яндекса.
6. Зрелость периферийных возможностей неоднородна (Flutter-обёртка из [docs/quickstart/flutter](https://divkit.tech/docs/en/quickstart/flutter.md), visual editor и пр.) — каждую нужную фичу PoC проверять прототипом до продуктива.
