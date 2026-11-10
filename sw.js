// Service worker: ưu tiên mạng (luôn có bản mới), mất mạng thì dùng bản đã lưu.
// Tăng số phiên bản khi muốn xoá cache cũ.
const CACHE = "english-talk-v6";
const CORE = ["./", "index.html", "style.css", "app.js", "pron.js", "structures.js", "struct-1a.js", "struct-1b.js", "struct-2a.js", "struct-2b.js", "struct-3a.js", "struct-3b.js", "struct-4a.js", "struct-4b.js", "struct-5.js", "structures-index.js", "glossary.js", "glossary-index.js", "phrases.js", "dialogues.js", "audio-index.js",
  "work1.js", "work2.js", "work3.js", "work4.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
