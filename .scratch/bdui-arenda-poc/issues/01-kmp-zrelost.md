# 01 - Зрелость Kotlin Multiplatform и Compose Multiplatform

Type: research
Status: resolved
Blocked by:

## Question

Насколько в августе 2026 зрел и готов к продакшену стек Kotlin Multiplatform (KMP) для проекта, который должен дать: Android + iOS приложения с нативным UI-слоем, десктоп на Windows/macOS и веб-клиент — из одной кодовой базы?

Конкретно выяснить:

1. Текущий статус KMP (стабильность, целевые платформы, какие таргеты ещё beta/experimental), состояние toolchain'а (Android Studio / Xcode / IntelliJ), свежие релизы Kotlin.
2. Статус Compose Multiplatform: стабильность на каждой платформе (iOS? desktop JVM? web/Wasm?), стоит ли вообще закладывать его в PoC или использовать нативный UI (SwiftUI/Jetpack Compose) поверх shared-логики.
3. Как крупные компании применяют KMP в проде (примеры: Netflix, McDonald's, Forbes, Cash App и др.) — что шарят (логика/DTO/сеть/навигация), что оставляют нативным.
4. Известные боли и ограничения: время сборки iOS из shared-модулей, бинари фреймворков, debugging, кэширование.
5. Рекомендация для нашего PoC: какой UI-слой брать на мобильных (Jetpack Compose + SwiftUI vs Compose Multiplatform везде) при условии, что экраны описывает BDUI (DivKit), то есть рендер-слой тонкий, а общая бизнес-логика и данные живут в commonMain.

Ответ оформить с датами публикаций и ссылками на первоисточники (официальная документация Kotlin/JetBrains, release notes, кейсы компаний). Записать результат под заголовком `## Answer`, выставить `Status: resolved`. Не трогать map.md.

## Answer

*Исследование проведено 27.08.2026 по первоисточникам: kotlinlang.org, blog.jetbrains.com, github.com/JetBrains, netflixtechblog.com, forbes.com, code.cash.app.*

### TL;DR

К августу 2026 стек KMP зрелый и продакшен-класса: ядро Kotlin Multiplatform стабильно с ноября 2023, Compose Multiplatform стабильна на Android/iOS/desktop (iOS — с мая 2025), web-таргет CMP — Beta с сентября 2025. Все крупные кейсы (Netflix, McDonald's, Cash App, Forbes, Google Workspace) применяют модель **«shared logic, native UI»** — и именно она подходит нашему PoC с BDUI/DivKit: шарить бизнес-логику и генерацию BDUI-JSON в `commonMain`, экраны рендерить нативными средствами (DivKit SDK: Jetpack Compose на Android, SwiftUI/UIKit на iOS), CMP-везде не нужен.

---

### 1. Статус KMP, целевые платформы, toolchain, версии

**Стабильность ядра.** Kotlin Multiplatform объявлен Stable и production-ready **8 ноября 2023** (вместе с Kotlin 1.9.20): [blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable](https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable/). Официальная FAQ-формулировка на продуктовой странице (проверено 27.08.2026): *«Kotlin Multiplatform is production-ready for all supported platforms – Android, iOS, desktop, web, and server»* — [kotlinlang.org/multiplatform](https://kotlinlang.org/multiplatform/).

**Версии Kotlin (по [github.com/JetBrains/kotlin/releases](https://github.com/JetBrains/kotlin/releases)):**
| Версия | Дата | Примечание |
|---|---|---|
| 2.2.0 | 23.06.2025 | [релиз-блог](https://blog.jetbrains.com/kotlin/2025/06/kotlin-2-2-0-released/): context parameters (preview), when-guards stable |
| 2.2.20 | сентябрь 2025 | улучшения web/Wasm ([блог](https://blog.jetbrains.com/kotlin/2025/09/kotlin-2-2-20-released/)) |
| 2.3.0 | 16.12.2025 | [релиз-блог](https://blog.jetbrains.com/kotlin/2025/12/kotlin-2-3-0-released/), обновления Multiplatform/Native/JS/Wasm |
| 2.4.0 | 03.06.2026 | анонс на KotlinConf'26 |
| **2.4.10** | **14.07.2026** | **текущий стабильный** |
| 2.4.20-RC2 | 26.08.2026 | incremental compilation для Kotlin/Native включён по умолчанию |

**Целевые платформы.** Матрица поддержки Kotlin/Native ([kotlinlang.org/docs/native-target-support.html](https://kotlinlang.org/docs/native-target-support.html)):
- **Tier 1** (гарантия source/binary compatibility, CI-тесты): `macosArm64`, `iosArm64`, `iosSimulatorArm64`.
- **Tier 2** (best-effort compatibility): `linuxX64`, `linuxArm64`, watchOS (`watchosArm32/64` + симулятор), tvOS (`tvosArm64` + симулятор).
- **Tier 3** («not in active development, use with caution»): `mingwX64` (Windows), `androidNativeArm32/64/X86/X64`, `watchosDeviceArm64`, `iosX64`.
- Устаревшие с Kotlin 2.3.20: `macosX64`, `watchosX64`, `tvosX64` (x86_64 Apple-цели удалены также из CMP 1.11).
- Отдельные таргеты вне Native-матрицы: JVM (desktop/server — стабильны), Android, Kotlin/JS, **Kotlin/Wasm — Beta**.

Вывод для нас: мобильная связка Android+iOS — Tier 1, лучший поддерживаемый сценарий. Десктоп на Windows/macOS корректно строить **через JVM-таргет** (не через экспериментальный `mingwX64`) — см. п.2 про CMP desktop.

**Toolchain (анонсы KotlinConf'26, 20–22 мая 2026, Мюнхен — [official recap](https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/)):**
- **KMP IDE plugin доступен на всех ОС для IntelliJ IDEA и Android Studio**: run configurations, Compose tooling, Swift-интеграции, поддержка AGP 9.0.
- **Swift Export официально переведён в Alpha в Kotlin 2.4** (натуральные вызовы Swift→Kotlin); **SPM import** — подключение зависимостей на Objective-C-совместимый код напрямую из Kotlin.
- **Kotlin Toolchain** (единая точка входа create/build/run/test; Amper — его ядро); **Kotlin Language Server → Alpha**, официальный VS Code extension.
- **Производительность сборки:** «build times are now 25% faster while using less than half the RAM during builds compared to a year ago» (замер JetBrains на кодовой базе Google Docs).

### 2. Статус Compose Multiplatform по платформам

| Платформа | Статус | С какого момента / источник |
|---|---|---|
| Android | Stable | давно, идентичен Jetpack Compose |
| Desktop (JVM: macOS/Windows/Linux) | Stable | давно |
| **iOS** | **Stable** | **6 мая 2025, CMP 1.8.0** — [объявление](https://blog.jetbrains.com/kotlin/2025/05/compose-multiplatform-1-8-0-released-compose-multiplatform-for-ios-is-stable-and-production-ready/) «Compose Multiplatform for iOS Is Stable and Production-Ready» |
| Web (Wasm) | **Beta** | **сентябрь 2025** (recap KotlinConf'26: «web reached Beta status in September 2025»); актуальная FAQ-формулировка: «Compose Multiplatform is stable for Android, iOS, and desktop, while the web target is currently in Beta» |

**Свежие релизы.** Актуальная линейка — **CMP 1.11.x (май 2026)**: [blog.jetbrains.com/kotlin/2026/05/compose-multiplatform-1-11-0/](https://blog.jetbrains.com/kotlin/2026/05/compose-multiplatform-1-11-0/) и [что нового](https://kotlinlang.org/docs/multiplatform/whats-new-compose-111.html); готовится 1.12.0. В 1.11: одновременный рендеринг на iOS включён по умолчанию (opt-in был в 1.8.0); **экспериментальный нативный текстовый ввод на базе UIView** (нативные жесты, selection handles, системное контекстное меню с Autofill/Translate/Search) — пока под `@ExperimentalComposeUiApi`; переработана обработка тачей — скролл в вебе «now feels much closer» к нативному; UI-тестирование v2 API; минимальный iOS поднят до 14.0; требования Kotlin ≥ 2.3.10 для native/web целей.

**Также из KotlinConf'26:** Navigation 3 — «stable for multiplatform use»; появились interop-API для комбинирования нативных компонентов Apple Liquid Glass с Compose UI; экосистема — «more than 3,500 community libraries» на klibs.io.

**Вывод:** закладывать CMP во все слои PoC **не обязательно** (аргументация в п.5), но сама технология безопасна на мобильных/desktop и является приемлемым fallback-вариантом. Для web-клиента CMP остаётся Beta — не основание строить на нём PoC.

### 3. Как крупные компании применяют KMP в проде

Общий паттерн по всем первоисточникам: **шарят** бизнес-логику, domain-слой, сеть, персистентность, DTO; **оставляют нативным** UI (и почти всегда — навигацию и платформенные интеграции).

- **Netflix** — [netflixtechblog.com, 29.10.2020](https://netflixtechblog.com/netflix-android-and-ios-studio-apps-now-powered-by-kotlin-multiplatform-d6d4d8d25d23) (David Henry, Mel Yahya). Studio-приложения Prodicle: ~50% production-кода decoupled от платформы. Шарят: SDK experience-management системы Hendrix (интерпретируемый язык правил конфигурации фич — сервер-дривен подход), сеть на Ktor Multiplatform HttpClient, персистентность на SQLDelight. Интеграция iOS — Universal Framework, дебаг в Xcode через плагин TouchLab xcode-kotlin. Ключевые цитаты: «Our appetite for exploring the latest technologies offered by respective platforms (Android Jetpack Compose, Swift UI, etc) isn't hampered in any way»; целевая архитектура — «thin UI layers with shared business logic». Это ближайший референс нашей BDUI-модели.
- **McDonald's** (команда Umain) — [kotlinlang.org/case-studies](https://kotlinlang.org/case-studies/). Начали с пилота **платёжного функционала**, затем раскат дали «to our entire McDonald's application». Цитата Varsha Singh (PM приложения McDonald's в Umain): «With KMP, we saw fewer crashes and better performance across both platforms after the launch. We transitioned from a separate Android and iOS team to a more unified mobile team». Доклады: KotlinConf 2023 (шаринг бизнес-логики/сети при нативных UI) и **KotlinConf 2025 «Leveraging KMP for navigation in the McDonald's App»** ([страница доклада](https://2025.kotlinconf.com/talks/779451/)) — позже остальных решили шарить и навигацию.
- **Cash App** (Block) — [kotlinlang.org/case-studies/cash-app](https://kotlinlang.org/case-studies/cash-app/), ранее [JetBrains кейс, март 2021](https://blog.jetbrains.com/zh-hans/kotlin/2021/03/cash-app-case-study/); инженерный блог: [code.cash.app/kotlin-multiplatform-summer](https://code.cash.app/kotlin-multiplatform-summer). KMP с **2018 года** (помогал TouchLab, раскат за feature-flag'ом); **заменили проблемный shared-JavaScript-runtime** на Kotlin. Шарят строго бизнес-логику: «We loved the 'shared business, native UI' idea… our teams did not have to give up using their preferred toolchains»; персистентность — SQLDelight, сетевые API — Wire (protobuf), продовые стектрейсы — CrashKiOS. Показательная инфраструктурная деталь: embedding Gradle внутрь iOS-билда оказался дорогим, поэтому общий код вынесли в **отдельный shared-репозиторий**. Масштаб: 30M MAU, 50 мобильных инженеров.
- **Forbes** — [forbes.com/sites/forbes-engineering, 13.11.2023](https://www.forbes.com/sites/forbes-engineering/2023/11/13/forbes-mobile-app-shifts-to-kotlin-multiplatform/) (Caleb King, Director of Engineering). **>80% бизнес-логики** шарится между iOS и Android; выбрали «iOS-first»: **SwiftUI** для интерфейса + Kotlin «for everything else»; iOS-лонч в сентябре 2023. Эффект: одновременный раскат фич на обеих платформах, меньше затрат на разработку; среди отмеченных сложностей — learning curve и меньшая зрелость кроссплатформенных библиотек (на конец 2023).
- **Другие подтверждённые adopter'ы** ([case studies](https://kotlinlang.org/case-studies/) + [KotlinConf'26 recap](https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/)): Google Workspace (эксперимент в Google Docs: «We consider Kotlin Multiplatform validated… We're actually very happy with it» — Jason Parachoniak), PayPal, Booking.com (experimentation library), Sony (флагманское приложение для наушников), Duolingo, X/Twitter, Philips, Quizlet (100M установок, замена shared JS), Bolt, H&M (feature-toggle library), VMware, Autodesk; число top-приложений на KMP «more than doubling» за год. Как исключение «общего UI»: **Bitkey by Block — 95% общего кода, migrated to Compose Multiplatform**.

### 4. Известные боли и ограничения

- **Время сборки iOS.** Главный исторический комплайн: сообщество описывает 20+ минутные билды ([разборoptimизации](https://medium.com/@Treeel/how-i-fixed-my-kmp-ios-build-from-20-minute-builds-to-lightning-fast-c4f0f5c102b0)), release-сборки в CI порядка ~22 минут ([обсуждение r/Kotlin](https://www.reddit.com/r/Kotlin/comments/1iuvj8t/how_much_time_does_it_take_to_build_your_kotlin/)). Типовая причина — сборка лишних слайсов (device+simulator, universal frameworks в dev-цикле): методика сокращения — [touchlab.co/touchlab-build-only-what-you-need](https://touchlab.co/touchlab-build-only-what-you-need). Динамика положительная: incremental compilation Kotlin/Native включается по умолчанию с 2.4.20-RC, а JetBrains отчиталась о −25% времени и <50% RAM за год (KotlinConf'26). Cash App радикально решили проблему организационно — выделенным shared-репозиторием вместо Gradle-in-Xcode.
- **Бинарники фреймворков.** Нативный фреймворк утяжеляет IPA (отчёты о десятках мегабайт, напр. [slack-chats.kotlinlang.org](https://slack-chats.kotlinlang.org/t/29631662/hi-i-saw-one-of-the-messages-about-the-size-of-a-single-page)); помогают флаги `-Xbinary=smallBinary`/optimizations в свежих Kotlin и вырезание debug-символов из dev-артефактов. Свежие фиксы инфраструктуры в ветке 2.4.x: обработка SwiftPM lockfile, задвоение SPM-зависимостей (`dumpXcodebuildArgs`).
- **Debugging.** Раньше — заметная боль; сегодня breakpoints в Xcode работают (lldb-плагин xcode-kotlin, использовался Netflix уже в 2020), в проде стектрейсы чинит CrashKiOS (Cash App), крупный проект сообщает, что трейсы теперь указывают прямо на Kotlin-код ([ProAndroidDev: Scalability Challenges on a Large Project](https://proandroiddev.com/kotlin-multiplatform-scalability-challenges-on-a-large-project-b3140e12da9d)); новый KMP-плагин IDEA/AS добавляет Swift-интеграции. Честный остаток: дебаг и профилирование всё же уступают чисто нативному тулингу ([Guaraná, 2025](https://guarana-technologies.com/blog/kotlin-multiplatform-production)).
- **Кэширование и межмодульность.** Remote Gradle cache для `commonMain`-модулей работает, но Metadata-компиляция и границы K/N incremental долго отставали (JVM IC metadata из предыдущих компиляций принимается только в 2.4.20-Beta2). Также помнить: visionOS не имеет официального таргета; JS/Wasm-стек молодее JVM/Native.

### 5. Рекомендация для нашего PoC (BDUI/DivKit)

**Брать Jetpack Compose (Android) + SwiftUI (iOS) поверх shared-ядра в `commonMain`; Compose Multiplatform как универсальный UI-слой не использовать.**

Аргументы:

1. **Совпадение с индустриальным паттерном.** Все четыре эталонных кейса (Netflix, McDonald's, Cash App, Forbes) + Google Workspace шарят логику и держат нативный UI; Cash App формулируют это как принцип «shared business, native UI». Netflix целевой архитектурой называет буквально «thin UI layers with shared business logic» — это ровно наша схема с BDUI.
2. **BDUI обесценивает главное преимущество CMP.** CMP экономит дублирование UI-кода, но при server-driven UI единственный источник правды об экранах — BDUI-JSON, одинаковый для обеих платформ. Рендер — тонкий слой: DivKit предоставляет официальные нативные рендеры (divkit-android для View/Compose, divkit-ios для UIKit/SwiftUI, плюс divkit-web). Дублировать почти нечего — значит платить цену CMP (Skia поверх Metal, не-нативное поведение текста/скролла/IME/доступности до полного дозревания analog-ов; нативный text input в CMP 1.11 всё ещё opt-in experimental) не за что.
3. **Максимальная зрелость выбранного пути.** Ядро KMP stable с ноября 2023; мобильные таргеты Tier 1; toolchain (Xcode-интеграция, отладка, крэш-репортинг) доказан продом Cash App/Netflix/McDonald's масштаба. Риски остаются только там, куда мы и не пойдём: CMP-web (Beta), mingwX64 (Tier 3).
4. **Открытый путь расширения шараинга без смены парадигмы.** При необходимости шарится следующий слой (как McDonald's через два года после логики добавили шаринг навигации; как у Cash App слой за слоем: persistence → network → features). Если позже понадобится единый десктоп-клиент — JVM/CMP-desktop stable позволяет добавить таргет к тому же `commonMain`, а веб закрыть официальным divkit-web (JS), не дожидаясь stable CMP Wasm.

Конкретно для PoC: `commonMain` содержит domain-логику, репозитории/сеть, state машин экранов и построение BDUI-дерева (JSON для DivKit); Android-приложение — Jetpack Compose shell + DivKit Compose-рендер; iOS — SwiftUI shell + DivKit UIKit-рендер; сборка iOS — через обычный Xcode project с локальным фреймворком (dev — только нужный slice simulator, без universal framework); консистентность структуры JSON — контрактными тестами в `commonTest`.

### Хронология ключевых дат

- 08.11.2023 — KMP объявлен Stable ([JetBrains](https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable/))
- 13.11.2023 — кейс Forbes (>80% shared, SwiftUI UI)
- 06.05.2025 — CMP 1.8.0: iOS stable ([JetBrains](https://blog.jetbrains.com/kotlin/2025/05/compose-multiplatform-1-8-0-released-compose-multiplatform-for-ios-is-stable-and-production-ready/))
- сентябрь 2025 — CMP web (Wasm) переведён в Beta
- 20–22.05.2026 — KotlinConf'26: Swift Export Alpha (Kotlin 2.4), KMP-plugin для всех ОС, Navigation 3 MP stable, −25% времени сборок ([recap](https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/))
- 14.07.2026 — Kotlin 2.4.10, последний стабильный на дату исследования; состояние зафиксировано на 27.08.2026
