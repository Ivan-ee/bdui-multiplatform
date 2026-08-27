package ru.arenda.shared

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.request.get
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.contentType
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
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

    // Layout-экраны приходят готовыми с сервера: клиент только рендерит и
    // обрабатывает действия arenda:// (роутинг — тикет 11).

    suspend fun fetchCatalogLayout(): String =
        client.get("$baseUrl/api/v1/layout/catalog").bodyAsText()

    suspend fun fetchObjectLayout(objectId: String): String =
        client.get("$baseUrl/api/v1/layout/object/$objectId").bodyAsText()

    suspend fun fetchPayLayout(objectId: String): String =
        client.get("$baseUrl/api/v1/layout/pay/$objectId").bodyAsText()

    suspend fun fetchMyPaymentsLayout(): String =
        client.get("$baseUrl/api/v1/layout/my_payments").bodyAsText()

    /** Оплата-заглушка: сервер создаёт Платёж и помечает Объект занятым. */
    suspend fun createPayment(objectId: String, months: Int): PaymentDto =
        client.post("$baseUrl/api/v1/payments") {
            contentType(ContentType.Application.Json)
            setBody(CreatePaymentRequest(objectId, months))
        }.body()
}

@Serializable
private data class CreatePaymentRequest(
    @SerialName("object_id") val objectId: String,
    val months: Int,
)
