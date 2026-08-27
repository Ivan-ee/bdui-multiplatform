package ru.arenda.shared.di

import org.koin.dsl.module
import ru.arenda.shared.CatalogApi

/** Koin-модуль commonMain; baseUrl отличается на эмуляторе Android (10.0.2.2). */
fun apiModule(baseUrl: String) = module {
    single { CatalogApi(baseUrl) }
}
