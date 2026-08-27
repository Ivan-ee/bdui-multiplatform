package ru.arenda.shared

import kotlin.js.Promise
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Точка входа shared-модуля для веб-кабинета: UMD-глобаль `shared`
 * (см. moduleName в build.gradle.kts), методы возвращают Promise.
 */
@OptIn(ExperimentalJsExport::class)
@JsExport
class CatalogApiJs(baseUrl: String) {

    private val api = CatalogApi(baseUrl)

    fun fetchObjects(): Promise<Array<RentalObjectDto>> =
        GlobalScope.promise { api.fetchObjects().toTypedArray() }

    fun fetchCatalogLayout(): Promise<String> =
        GlobalScope.promise { api.fetchCatalogLayout() }

    fun fetchObjectLayout(objectId: String): Promise<String> =
        GlobalScope.promise { api.fetchObjectLayout(objectId) }

    fun fetchPayLayout(objectId: String): Promise<String> =
        GlobalScope.promise { api.fetchPayLayout(objectId) }

    fun fetchMyPaymentsLayout(): Promise<String> =
        GlobalScope.promise { api.fetchMyPaymentsLayout() }

    fun createPayment(objectId: String, months: Int): Promise<PaymentDto> =
        GlobalScope.promise { api.createPayment(objectId, months) }
}

@OptIn(ExperimentalJsExport::class)
@JsExport
fun createCatalogApi(baseUrl: String): CatalogApiJs = CatalogApiJs(baseUrl)
