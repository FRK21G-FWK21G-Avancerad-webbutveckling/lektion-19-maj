self.addEventListener('install', () => {
    self.skipWaiting();
    console.log('Service worker installed', new Date().toLocaleTimeString());
});

self.addEventListener('activate', () => {
    self.skipWaiting();
    console.log('Service worker activated', new Date().toLocaleTimeString());
});