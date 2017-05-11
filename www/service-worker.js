self.addEventListener('fetch', function(event) {
        console.log("[SW] FETCH CALLED! Now calling caches.match() to look for URL in cache... ");
        event.respondWith(
            // Check the caches.
            caches.match(event.request).then(function(response) {
            // If the response exists, return it; otherwise, fetch it from the network.
            console.log("**** cacheResponse received with status " + response.status);
            return response || fetch(event.request);
        })
    );
});