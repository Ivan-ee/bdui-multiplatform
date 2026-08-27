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
}

@OptIn(ExperimentalJsExport::class)
@JsExport
fun createCatalogApi(baseUrl: String): CatalogApiJs = CatalogApiJs(baseUrl)
