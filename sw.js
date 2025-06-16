self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("restart-edu").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifesto.html",
        "/lectia1.html",
        "/icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
