import '@divkitframework/divkit/dist/client.css';
// В DivKit 33.x vanilla-клиент экспортирует render (раньше был renderComponent).
import { render } from '@divkitframework/divkit/client';
// arenda-shared — file:-зависимость: Kotlin/JS-дистрибуция модуля `shared`
// (см. shared.js — разворачивает вложенный namespace).
import { createCatalogApi } from './shared.js';

const root = document.getElementById('root');

// baseUrl пустой: /api проксируется Vite на Go-сервер (см. vite.config.js).
const api = createCatalogApi('');

let instance = null;

// Роутер прототипа: каждый экран — серверный layout, клиент только рендерит
// его и обрабатывает действия custom:// (навигация в BDUI, тикет 11).
async function showLayout(load) {
  document.title = 'B1';
  root.textContent = 'Загрузка…';
  try {
    const raw = await load();
    document.title = 'B2 len=' + raw.length;
    const json = JSON.parse(raw);
    document.title = 'B3';
    instance?.$destroy?.();
    document.title = 'B4';
    root.textContent = '';
    instance = render({
      id: 'screen',
      target: root,
      json,
      onCustomAction: (action) => route(action.url),
      onError: (e) => {
        document.title = 'DK: ' + (e?.message || JSON.stringify(e));
        console.error('divkit:', e);
      },
    });
  } catch (e) {
    root.textContent = `Не удалось загрузить экран: ${e.message || e}. Go-сервер запущен (порт 8090)?`;
    console.error(e);
  }
}

function route(url) {
  if (!url || !url.startsWith('custom://')) return false;
  // "custom://object/<id>" → "object/<id>" (учитываем "//" после схемы)
  const [head, id, months] = url.slice('custom://'.length).split('/');
  switch (head) {
    case 'catalog':
      showLayout(() => api.fetchCatalogLayout());
      return true;
    case 'object':
      showLayout(() => api.fetchObjectLayout(id));
      return true;
    case 'pay':
      showLayout(() => api.fetchPayLayout(id));
      return true;
    case 'my_payments':
      showLayout(() => api.fetchMyPaymentsLayout());
      return true;
    case 'do_pay':
      api.createPayment(id, Number(months))
        .then(() => showLayout(() => api.fetchMyPaymentsLayout()))
        .catch((e) => {
          root.textContent = `Оплата не прошла: ${e.message || e}`;
          console.error(e);
        });
      return true;
    default:
      console.warn('неизвестное действие', url);
      return true;
  }
}

// Deep-link для отладки и тестов: /?go=custom://object/<id>
// (устойчиво к двойному кодированию параметра)
let deepLink = new URLSearchParams(location.search).get('go');
if (deepLink && !deepLink.includes('://')) {
  try { deepLink = decodeURIComponent(deepLink); } catch { /* оставляем как есть */ }
}
if (deepLink) {
  route(deepLink);
} else {
  showLayout(() => api.fetchCatalogLayout());
}

// PROTOTYPE-отладка: прямой вызов роутера из консоли/тестов.
window.__probe = (url) => route(url);
