/**
 * Minna no Nihongo N5-N4 — Offline-First Service Worker (Stale-While-Revalidate)
 * Adheres strictly to 4-Phase Linear Function Anatomy (Zero Arrowhead Nesting, CC <= 7).
 */
'use strict';

const CACHE_VERSION = 'minna-pwa-v20261111_04';

const CORE_ASSETS = [
  './',
  './style.css',
  './app.js',
  './manifest.json',
  './favicon.svg',
  './icons/favicon-16.svg',
  './icons/favicon-32.svg',
  './icons/icon-192.svg',
  './data/ui_icons.js',
  './data/curriculum_manifest.js',
  './data/reference_hub_data.js',
  './src/storage_engine.js',
  './src/navigation_engine.js',
  './src/conjugation_engine.js',
  './src/notebook_engine.js',
  './src/analytics_streak_engine.js',
  './src/study_worker.js',
  './src/domain_services.js',
  './src/study_tools_engine.js',
  './src/master_suite_style.css'
];

// Phase 2 Normalizer: Chuẩn hóa /index.html về root './' để loại bỏ 308 redirect loops
function normalizeRequest(request) {
  if (!request || !request.url) return request;
  try {
    const url = new URL(request.url);
    if (url.origin === self.location.origin && (url.pathname === '/index.html' || url.pathname.endsWith('/index.html'))) {
      const canonicalUrl = new URL('./' + url.search, self.location.origin);
      return new Request(canonicalUrl.toString(), {
        method: request.method,
        headers: request.headers,
        mode: request.mode === 'navigate' ? 'same-origin' : request.mode,
        credentials: request.credentials,
        redirect: 'follow'
      });
    }
  } catch (_err) {
    // Giữ nguyên request nếu parse URL thất bại
  }
  return request;
}

// Phase 3 Pure Helper: Validate cacheable GET request within same origin
function isCacheableRequest(request) {
  if (!request || request.method !== 'GET') return false;
  try {
    const url = new URL(request.url);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
    return url.origin === self.location.origin;
  } catch (_err) {
    return false;
  }
}

// Phase 4 Helper: Delete outdated caches
async function purgeOutdatedCaches(activeCacheName) {
  const keys = await caches.keys();
  const deletions = keys
    .filter((key) => key !== activeCacheName)
    .map((key) => caches.delete(key));
  return Promise.all(deletions);
}

// Phase 4 Helper: Fetch from network and update cache in background
async function fetchAndCache(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (_err) {
    return null;
  }
}

// Phase 4 Helper: Stale-While-Revalidate strategy with Safe Navigation Fallback
async function handleStaleWhileRevalidate(rawRequest) {
  const request = normalizeRequest(rawRequest);
  const cachedResponse = await caches.match(request, { ignoreSearch: false });
  const networkPromise = fetchAndCache(request, CACHE_VERSION);
  if (cachedResponse) return cachedResponse;
  const freshResponse = await networkPromise;
  if (freshResponse && (freshResponse.status === 200 || freshResponse.type === 'opaque')) {
    return freshResponse;
  }
  if (rawRequest.mode === 'navigate') {
    const fallback = await caches.match('./');
    if (fallback) return fallback;
  }
  return freshResponse || Response.error();
}

self.addEventListener('install', (event) => {
  if (!event) return;
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_ASSETS).catch(() => {}))
  );
});

self.addEventListener('activate', (event) => {
  if (!event) return;
  event.waitUntil(
    purgeOutdatedCaches(CACHE_VERSION).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (!event || !isCacheableRequest(event.request)) return;
  event.respondWith(handleStaleWhileRevalidate(event.request));
});
