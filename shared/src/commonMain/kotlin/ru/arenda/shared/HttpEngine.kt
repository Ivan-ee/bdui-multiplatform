package ru.arenda.shared

expect fun defaultHttpEngine(): io.ktor.client.engine.HttpClientEngineFactory<*>
