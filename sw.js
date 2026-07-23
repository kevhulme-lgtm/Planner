const CACHE = 'planner-v4';
const STATIC = [
  '/Planner/',
  '/Planner/index.html',
  '/Planner/plan.html',
  '/Planner/tg5_template.js',
  '/Planner/icon.svg',
  '/Planner/manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Always go network-first for Supabase API calls
  if (url.includes('supabase.co') || url.includes('cdn.jsdelivr') || url.includes('fonts.googleapis')) return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
      if (resp && resp.status === 200 && e.request.method === 'GET') {
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return resp;
    }))
  );
});
