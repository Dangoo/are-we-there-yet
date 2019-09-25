self.addEventListener('install', event => {
    console.info('New ServiceWorker installed!');

    event.waitUntil(
        // Remove old cache from prev. ServiceWorker
        caches.delete('offline').then(() => self.skipWaiting())
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open('offline').then(cache => (
            cache.match(event.request).then(response => {
                return response || fetch(event.request).then(response => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            })
        ))
    );
});
