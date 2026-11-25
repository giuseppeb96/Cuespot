// Service worker minimo: serve per poter installare l'app; non salva nulla in cache, così gli aggiornamenti arrivano subito.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
