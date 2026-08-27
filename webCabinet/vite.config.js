import { defineConfig } from 'vite';

// /api проксируется на Go-сервер, чтобы веб-кабинет работал на том же origin
// и shared-модулю не нужен был абсолютный baseUrl.
export default defineConfig({
  // arenda-shared — CJS-дистрибуция Kotlin/JS: без include Vite не пре-бандлит
  // file:-зависимости и браузер падает на require().
  optimizeDeps: {
    include: ['arenda-shared'],
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8090',
        changeOrigin: true,
      },
    },
  },
});
