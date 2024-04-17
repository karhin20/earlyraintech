// Service Worker
import { precacheAndRoute } from 'workbox-precaching';

// Declare self as a global variable
/* global self */

// Precache and route
precacheAndRoute(self.__WB_MANIFEST);

// Handle fetch events
self.addEventListener('fetch', (event) => {
    const { request } = event;
    event.respondWith(
        caches.match(request).then((response) => {
            return response || fetch(request);
        })
    );
});