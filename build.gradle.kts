plugins {
    // Стек из тикета «Подтверждение итогового стека»: Kotlin 2.4.x + AGP 9.x.
    kotlin("multiplatform") version "2.4.10" apply false
    kotlin("plugin.serialization") version "2.4.10" apply false
    kotlin("android") version "2.4.10" apply false
    kotlin("plugin.compose") version "2.4.10" apply false
    id("com.android.application") version "9.3.2" apply false
    id("com.android.kotlin.multiplatform.library") version "9.3.2" apply false
}
