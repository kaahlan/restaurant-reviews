/**
 * Service Worker
 */
const staticCacheName = "restaruant-reviews-v1";

/**
 * Installs the Service Worker
 */
self.addEventListener('install', event => {
  event.waitUntil( // Waits until all files are cached to install
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll([ // Caches files for offline viewing
        './css/styles.css',
        './data/restaurants.json',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg',
        './index.html',
        './js/dbhelper.js',
        './js/main.js',
        './js/restaurant_info.js',
        './js/sw-reg.js',
        './restaurant.html'
      ]);
    })
  );
});

/**
 * Fetches the content to view offline
 */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

/**
 * Activates the Service Worker
 */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurant-reviews') &&
            cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
