/**
 * Registers the Service Worker in the page, if the API is available.
 */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(function() {
      console.log('Service worker registration successsful.');
    })
    .catch(function() {
      console.log('Service worker registration failed.', err);
    });
}
