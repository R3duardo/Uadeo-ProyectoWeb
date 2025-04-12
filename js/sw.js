const CACHE_NAME = 'carros-v1';
const ASSETS_TO_CACHE = [
  '../img/fordExplorer.jpg',
  '../img/fordLobo.jpg',
  '../img/fordMustang.png',
  '../img/fordRaptor.jpg',
  '../img/fordShelby.jpg',
  '../img/logoFord.svg',
  '../img/logoNissan.svg',
  '../img/logoToyota.svg',
  '../img/nissanGTR.jpg',
  '../img/nissanKicks.jpg',
  '../img/nissanSentra.jpg',
  '../img/nissanVersa.jpeg',
  '../img/nissanZ.jpg',
  '../img/toyotaCamry.jpeg',
  '../img/toyotaCorolla.jpg',
  '../img/toyotaHilux.jpg',
  '../img/toyotaRav4.jpg',
  '../img/toyotaSupra.jpg',
  '../index.html',
  '../html/autos.html',
  '../css/autos.css',
  '../css/index.css',
  '../js/index.js',
  '../js/nav-scroll.js',
  '../js/script.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});