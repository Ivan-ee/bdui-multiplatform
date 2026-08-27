plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
    // AGP 9: для KMP-модуля используется этот плагин вместо com.android.library.
    id("com.android.kotlin.multiplatform.library")
}

kotlin {
    androidLibrary {
        namespace = "ru.arenda.shared"
        compileSdk = 36
        minSdk = 26
    }

    iosArm64()
    iosSimulatorArm64()

    js(IR) {
        browser()
        binaries.library()
        compilerOptions {
            moduleName.set("shared")
        }
    }

    sourceSets {
        commonMain.dependencies {
            implementation("io.ktor:ktor-client-core:3.5.2")
            implementation("io.ktor:ktor-client-content-negotiation:3.5.2")
            implementation("io.ktor:ktor-serialization-kotlinx-json:3.5.2")
            implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.9.0")
            implementation("io.insert-koin:koin-core:4.2.2")
        }
        val androidMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-okhttp:3.5.2")
            }
        }
        // Шаблон иерархии не создал iosMain (AGP KMP plugin) — создаём вручную.
        val iosMain by creating {
            dependsOn(commonMain.get())
            dependencies {
                implementation("io.ktor:ktor-client-darwin:3.5.2")
            }
        }
        val iosArm64Main by getting {
            dependsOn(iosMain)
        }
        val iosSimulatorArm64Main by getting {
            dependsOn(iosMain)
        }
        val jsMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-js:3.5.2")
                // Promise и браузерные API вынесены из stdlib в отдельную библиотеку.
                implementation("org.jetbrains.kotlinx:kotlinx-browser:0.5.0")
            }
        }
    }
}
