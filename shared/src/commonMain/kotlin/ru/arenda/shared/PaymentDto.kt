package ru.arenda.shared

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

// Платёж — результат оплаты-заглушки (модель из тикета 07).
@OptIn(ExperimentalJsExport::class)
@Serializable
@JsExport
data class PaymentDto(
    val id: String,
    @SerialName("user_id") val userId: String,
    @SerialName("object_id") val objectId: String,
    @SerialName("start_date") val startDate: String,
    val months: Int,
    val amount: Long,
    val status: String,
    @SerialName("object_title") val objectTitle: String = "",
    @SerialName("object_address") val objectAddress: String = "",
)
