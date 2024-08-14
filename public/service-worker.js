self.addEventListener('install', event => {
  console.log('Service worker installing...');
  // Cache necessary assets
});

self.addEventListener('fetch', event => {
  console.log('Fetching:', event.request.url);
  // Serve assets from cache
});
