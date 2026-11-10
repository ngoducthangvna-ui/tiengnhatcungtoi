/**
 * Minna no Nihongo N5-N4 — Offline-First Service Worker (Stale-While-Revalidate)
 * Adheres strictly to 4-Phase Linear Function Anatomy (Zero Arrowhead Nesting, CC <= 7).
 */
'use strict';

const CACHE_VERSION = 'minna-pwa-v20261111_03';

const CORE_ASSETS = [
  './',
  './index.html',
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

// Phase 4 Helper: Stale-While-Revalidate strategy
async function handleStaleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request, { ignoreSearch: false });
  const networkPromise = fetchAndCache(request, CACHE_VERSION);
  if (cachedResponse) return cachedResponse;
  const freshResponse = await networkPromise;
  if (freshResponse) return freshResponse;
  return caches.match('./index.html');
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
