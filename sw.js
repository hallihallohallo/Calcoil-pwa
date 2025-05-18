const CACHE_NAME = 'ketogene-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Füge hier weitere Assets ein, die du cachen willst, z.B. CSS, JS
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
