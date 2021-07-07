const FILES_TO_CACHE = [];

const STATIC_CACHE = 'static-cache-v1';
const RUNTIME_CACHE = 'runtime-cache';

self.addEventListener('install', event => {
    event.waitUntil(
        caches
            .open(STATIC_CACHE)
            .then(cache => cache.addAll(FILES_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    const currentCaches = [STATIC_CACHE, RUNTIME_CACHE];
    event.waitUntil(
        caches
            .keys()
            .then(cacheNames => {
                return cacheNames.filter(
                    cacheName => !currentCaches.includes(cacheName)
                );
            })
            .then(cachesToDelete => {
                return Promise.all(
                    cachesToDelete.map(cacheToDelete => {
                        return caches.delete(cacheToDelete);
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (
        event.request.method !== 'GET' ||
        !event.request.url.startsWith(self.location.origin)
    ) {
        event.respondWith(fetch(event.request));
        return;
    }

    //may not need this bit...
    if (event.request.url.includes('/api/images')) {
        event.respondWith(
            caches.open(RUNTIME_CACHE).then(cache => {
                return fetch(event.request)
                    .then(res => {
                        cache.put(event.request, res.clone());
                        return res;
                    })
                    .catch(() => caches.match(event.request))
            })
        );
        return;
    }
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return caches.open(RUNTIME_CACHE).then(cache => {
                    return fetch(event.request).then(res => {
                        return cache.put(event.request, res.clone()).then(() => {
                            return res;
                        })
                    })
                })
            })
    )
})