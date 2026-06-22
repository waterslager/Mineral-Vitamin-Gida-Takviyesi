// Minimal service worker — şimdilik sadece kaydı geçerli kılmak için.
// İleride offline cache eklenmek istenirse buraya genişletilebilir.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {});
