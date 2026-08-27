package ru.arenda.shared

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.json.Json

/**
 * Единый клиент каталога для всех трёх платформ: одна логика в commonMain,
 * транспорт выбирает expect/actual-движок (OkHttp / Darwin / Js).
 */
class CatalogApi(
    private val baseUrl: String,
    engine: io.ktor.client.engine.HttpClientEngineFactory<*> = defaultHttpEngine(),
) {
    private val json = Json { ignoreUnknownKeys = true }

    private val client = HttpClient(engine) {
        install(ContentNegotiation) { json(json) }
    }

    suspend fun fetchObjects(): List<RentalObjectDto> =
        client.get("$baseUrl/api/v1/objects").body()

    /** Сырой DivKit-JSON карты каталога — отдаётся движку как есть. */
    suspend fun fetchCatalogLayout(): String =
        client.get("$baseUrl/api/v1/layout/catalog").bodyAsText()
}
