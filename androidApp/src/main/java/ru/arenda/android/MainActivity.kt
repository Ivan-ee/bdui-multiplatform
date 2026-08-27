package ru.arenda.android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.compose.ui.platform.ComposeView
import com.yandex.div.compose.DivConfiguration
import com.yandex.div.compose.DivContext
import com.yandex.div.compose.DivView
import com.yandex.div.compose.actions.DivActionData
import com.yandex.div.compose.actions.DivActionHandlingContext
import com.yandex.div.compose.actions.DivExternalActionHandler
import com.yandex.div.data.DivParsingEnvironment
import com.yandex.div.json.ParsingErrorLogger
import com.yandex.div2.DivData
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONObject
import ru.arenda.shared.CatalogApi

/** Базовый URL: эмулятор видит localhost хоста как 10.0.2.2. */
private const val BASE_URL = "http://10.0.2.2:8090"

/**
 * Экраны прототипа. Каждый — серверный DivKit-layout; клиент хранит только
 * «какой экран открыт» и обрабатывает навигационные действия custom://.
 */
private sealed interface Screen {
    data object Catalog : Screen
    data class Object(val id: String) : Screen
    data class Pay(val id: String) : Screen
    data class Paying(val id: String, val months: Int) : Screen
    data object MyPayments : Screen
}

private fun route(url: String): Screen? {
    if (!url.startsWith("custom://")) return null
    val parts = url.removePrefix("custom://").split('/')
    val head = parts.getOrNull(0) ?: return null
    val id = parts.getOrNull(1) ?: ""
    val months = parts.getOrNull(2)?.toIntOrNull() ?: 0
    return when (head) {
        "catalog" -> Screen.Catalog
        "object" -> Screen.Object(id)
        "pay" -> Screen.Pay(id)
        "do_pay" -> if (months > 0) Screen.Paying(id, months) else null
        "my_payments" -> Screen.MyPayments
        else -> null
    }
}

/** Мост из обработчика DivKit в Compose-состояние. */
private class NavBus {
    var onRoute: ((Screen) -> Unit)? = null
}

class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            Surface(modifier = Modifier.fillMaxSize()) {
                AppRoot()
            }
        }
    }
}

@Composable
private fun AppRoot() {
    val catalogApi = remember { CatalogApi(BASE_URL) }
    val navBus = remember { NavBus() }
    var screen by remember { mutableStateOf<Screen>(Screen.Catalog as Screen) }
    var layoutJson by remember { mutableStateOf<String?>(null) }
    var error by remember { mutableStateOf<String?>(null) }

    navBus.onRoute = { screen = it }

    // Оплата-заглушка: POST через shared, затем кабинет.
    LaunchedEffect(screen) {
        val paying = screen as? Screen.Paying ?: return@LaunchedEffect
        runCatching {
            withContext(Dispatchers.IO) { catalogApi.createPayment(paying.id, paying.months) }
        }.onSuccess {
            screen = Screen.MyPayments
        }.onFailure { error = it.message }
    }

    // Загрузка layout текущего экрана.
    LaunchedEffect(screen) {
        val paying = screen as? Screen.Paying
        if (paying != null) return@LaunchedEffect // ждём результат оплаты
        error = null
        runCatching {
            withContext(Dispatchers.IO) {
                when (val s = screen) {
                    Screen.Catalog -> catalogApi.fetchCatalogLayout()
                    is Screen.Object -> catalogApi.fetchObjectLayout(s.id)
                    is Screen.Pay -> catalogApi.fetchPayLayout(s.id)
                    Screen.MyPayments -> catalogApi.fetchMyPaymentsLayout()
                    is Screen.Paying -> error("unreachable")
                }
            }
        }.onSuccess { layoutJson = it }
            .onFailure { error = it.message }
    }

    when {
        error != null -> Text(
            text = "Не удалось загрузить экран: $error\n(BASE_URL = $BASE_URL, сервер запущен?)",
            modifier = Modifier.padding(16.dp),
        )
        layoutJson != null -> AndroidView(
            modifier = Modifier.fillMaxSize(),
            factory = { context ->
                // Обработчик навигации: нестандартная схема custom:// отдаётся приложению.
                val handler = object : DivExternalActionHandler {
                    override fun handle(
                        context: DivActionHandlingContext,
                        action: DivActionData,
                    ) {
                        action.url?.toString()?.let { u -> navBus.onRoute?.invoke(route(u) ?: return) }
                    }
                }
                val configuration = DivConfiguration(actionHandler = handler)
                val divContext = DivContext(baseContext = context, configuration = configuration)
                ComposeView(divContext)
            },
            update = { composeView ->
                composeView.setContent {
                    // Конверт {templates, card}: сначала шаблоны, затем карта.
                    val rootJson = JSONObject(layoutJson!!)
                    val environment = DivParsingEnvironment(ParsingErrorLogger.LOG)
                    rootJson.optJSONObject("templates")?.let(environment::parseTemplates)
                    val data = DivData.CREATOR(environment, rootJson.getJSONObject("card"))
                    DivView(data = data)
                }
            },
        )
        else -> Text(text = "Загрузка…", modifier = Modifier.padding(16.dp))
    }
}
