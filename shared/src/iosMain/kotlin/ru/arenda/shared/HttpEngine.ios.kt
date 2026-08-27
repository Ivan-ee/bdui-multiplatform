package ru.arenda.shared

import io.ktor.client.engine.HttpClientEngineFactory
import io.ktor.client.engine.darwin.Darwin

actual fun defaultHttpEngine(): HttpClientEngineFactory<*> = Darwin
