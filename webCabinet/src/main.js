import '@divkitframework/divkit/dist/client.css';
// В DivKit 33.x vanilla-клиент экспортирует render (раньше был renderComponent).
import { render } from '@divkitframework/divkit/client';
// arenda-shared — file:-зависимость: Kotlin/JS-дистрибуция модуля `shared`
// (см. shared.js — разворачивает вложенный namespace).
import { createCatalogApi } from './shared.js';

const root = document.getElementById('root');
root.textContent = 'Загрузка каталога…';

// baseUrl пустой: /api проксируется Vite на Go-сервер (см. vite.config.js).
const api = createCatalogApi('');

try {
  const layout = await api.fetchCatalogLayout();
  root.textContent = '';
  render({
    id: 'catalog-root',
    target: root,
    json: JSON.parse(layout),
    onError: (err) => console.error('divkit:', err),
  });
} catch (e) {
  root.textContent = `Не удалось загрузить каталог: ${e.message || e}. Go-сервер запущен (порт 8090)?`;
  console.error(e);
}
