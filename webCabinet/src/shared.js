// UMD-дистрибуция Kotlin/JS кладёт @JsExport-символы внутрь пакета
// ru.arenda.shared, а не в корень module.exports — разворачиваем.
import * as ns from 'arenda-shared';

const flat = ns.ru?.arenda?.shared ?? ns;

export const createCatalogApi = flat.createCatalogApi;
