import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('fetch', (event) => {
    const { request } = event;
    event.respondWith(
        caches.match(request).then((response) => {
            return response || fetch(request);
        })
    );
});