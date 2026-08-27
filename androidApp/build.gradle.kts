plugins {
    // AGP 9: встроенный Kotlin (kotlin-android не нужен), но Compose Compiler
    // Gradle-плагин обязателен с Kotlin 2.0.
    id("com.android.application")
    id("org.jetbrains.kotlin.plugin.compose")
}

android {
    namespace = "ru.arenda.android"
    compileSdk = 36

    defaultConfig {
        applicationId = "ru.arenda.android"
        minSdk = 26
        targetSdk = 36
        versionCode = 1
        versionName = "0.1.0"
    }

    buildFeatures {
        compose = true
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

dependencies {
    implementation(project(":shared"))

    // BOM как у divkit-compose 33.0.0: compose 1.11.x живёт на compileSdk 36,
    // новейший BOM (2026.08) требует SDK 37, которого нет в локальном SDK.
    implementation(platform("androidx.compose:compose-bom:2026.06.01"))
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.foundation:foundation")
    implementation("androidx.compose.material3:material3")
    implementation("androidx.activity:activity-compose:1.13.0")

    // DivKit Compose-клиент: тянет div-core, div-data, coil и пр. сам,
    // но в scope runtime — то, что нужно на этапе компиляции, объявляем явно.
    implementation("com.yandex.div:compose:33.0.0")
    implementation("com.yandex.div:div-core:33.0.0")
    implementation("com.yandex.div:div-data:33.0.0")
}
