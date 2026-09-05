// Оддий service worker — фақат PWA сифатида ўрнатиш имконини очиш учун.
// Firestore реал вақтли маълумот бўлгани учун кэшлаш қилинмайди (ҳар доим тармоқдан олади).
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", e => {
  // Тармоқдан олиш, кэш йўқ — реал вақтли маълумотлар доим янги бўлиши учун.
  e.respondWith(fetch(e.request).catch(()=> new Response("Офлайн", {status: 503})));
});
