const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener("install", (event) => {
  //   pre-cache transaction data
  event.waitUntil(
    caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/transaction"))
  );

  //   pre-cache static assets
  event.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./icons/icon-192x192.png",
        "./icons/icon-512x512.png",
      ]);
    })
  );
  console.log("Install");
  self.skipWaiting();
});

// activate
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== "static" && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener(fetch, (event) => {
  console.log("Inside the fetch handler:", event);
});
