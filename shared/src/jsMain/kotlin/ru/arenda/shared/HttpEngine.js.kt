package ru.arenda.shared

import io.ktor.client.engine.HttpClientEngineFactory
import io.ktor.client.engine.js.Js

actual fun defaultHttpEngine(): HttpClientEngineFactory<*> = Js
