package ru.arenda.shared

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

// Зеркало components.schemas.Object из server/api/openapi.yaml.
// PROTOTYPE: генерация openapi-generator (models-only) подключается следом за срезом.
@OptIn(ExperimentalJsExport::class)
@Serializable
@JsExport
data class RentalObjectDto(
    val id: String,
    @SerialName("owner_id") val ownerId: String,
    val title: String,
    val address: String,
    val description: String = "",
    @SerialName("price_per_month") val pricePerMonth: Long,
    val photos: List<String> = emptyList(),
    val status: String = "free",
)
