// Нужен только для того, чтобы браузер разрешил «Установить приложение». Ничего не кэширует: код приложения всегда берётся свежим.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()))
self.addEventListener('fetch', () => {})
