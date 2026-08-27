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
import com.yandex.div.compose.DivConfiguration
import com.yandex.div.compose.DivContext
import com.yandex.div.compose.DivView
import com.yandex.div.data.DivParsingEnvironment
import com.yandex.div.json.ParsingErrorLogger
import com.yandex.div2.DivData
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONObject
import ru.arenda.shared.CatalogApi

/**
 * PROTOTYPE вертикального среза: один экран каталога, layout приходит с сервера.
 *
 * BASE_URL: эмулятор Android видит localhost хоста как 10.0.2.2.
 * Для реального устройства укажите IP машины в локальной сети.
 */
private const val BASE_URL = "http://10.0.2.2:8090"

class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            Surface(modifier = Modifier.fillMaxSize()) {
                CatalogScreen()
            }
        }
    }
}

@Composable
private fun CatalogScreen() {
    val catalogApi = remember { CatalogApi(BASE_URL) }
    var layoutJson by remember { mutableStateOf<String?>(null) }
    var error by remember { mutableStateOf<String?>(null) }

    LaunchedEffect(Unit) {
        runCatching {
            withContext(Dispatchers.IO) { catalogApi.fetchCatalogLayout() }
        }.onSuccess { layoutJson = it }
            .onFailure { error = it.message }
    }

    when {
        error != null -> Text(
            text = "Не удалось загрузить каталог: $error\n(BASE_URL = $BASE_URL, сервер запущен?)",
            modifier = Modifier.padding(16.dp),
        )
        layoutJson != null -> AndroidView(
            modifier = Modifier.fillMaxSize(),
            factory = { context ->
                val configuration = DivConfiguration()
                val divContext = DivContext(baseContext = context, configuration = configuration)
                androidx.compose.ui.platform.ComposeView(divContext)
            },
            update = { composeView ->
                composeView.setContent {
                    // Конверт {templates, card}: сначала шаблоны, затем карта.
                    // DivData.fromJson(ParsingEnvironment, JSONObject) — API 33.0.0.
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
