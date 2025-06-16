self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('restart-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifesto.html',
        '/lectia1.html',
        '/lectia2.html',
        '/style.css',
        '/manifest.json',
        '/icon.png'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
