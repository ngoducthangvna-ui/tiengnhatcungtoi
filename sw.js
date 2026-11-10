/**
 * Minna no Nihongo N5-N4 — Offline-First Service Worker (Stale-While-Revalidate)
 * Adheres strictly to 4-Phase Linear Function Anatomy (Zero Arrowhead Nesting, CC <= 7).
 */
'use strict';

const CACHE_VERSION = 'minna-pwa-v20261111_05';

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

// Phase 3 & 4 Helper: Build Partial Content (206) Response for Range Requests
async function buildRangeResponse(fullResponse, rangeHeader) {
  if (
    !fullResponse ||
    fullResponse.status !== 200 ||
    !rangeHeader ||
    !rangeHeader.startsWith('bytes=') ||
    typeof fullResponse.arrayBuffer !== 'function'
  ) {
    return fullResponse;
  }

  const buf = await fullResponse.clone().arrayBuffer();
  const total = buf.byteLength;
  if (!total) return fullResponse;

  const parts = rangeHeader.replace('bytes=', '').split('-');
  const start = parseInt(parts[0], 10);
  let end = (parts[1] && parts[1].trim() !== '') ? parseInt(parts[1], 10) : total - 1;

  if (isNaN(start) || isNaN(end)) {
    return fullResponse;
  }

  end = Math.min(end, total - 1);

  if (start < 0 || start > end || start >= total) {
    return new Response(null, {
      status: 416,
      headers: {
        'Content-Range': 'bytes */' + total,
        'Accept-Ranges': 'bytes'
      }
    });
  }

  const sliced = buf.slice(start, end + 1);
  const contentType = (fullResponse.headers && fullResponse.headers.get && fullResponse.headers.get('Content-Type')) || 'audio/mpeg';

  return new Response(sliced, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
      'Content-Length': String(end - start + 1)
    }
  });
}

// Phase 4 Helper: Stale-While-Revalidate strategy with Safe Navigation Fallback & Range Support
async function handleStaleWhileRevalidate(rawRequest) {
  const rangeHeader = (rawRequest.headers && typeof rawRequest.headers.get === 'function')
    ? (rawRequest.headers.get('Range') || rawRequest.headers.get('range') || '')
    : '';

  let request = normalizeRequest(rawRequest);
  if (rangeHeader) {
    request = new Request(request.url, {
      method: 'GET',
      mode: request.mode,
      credentials: request.credentials
    });
  }

  const cachedResponse = await caches.match(request, { ignoreSearch: false });
  const networkPromise = fetchAndCache(request, CACHE_VERSION);

  if (cachedResponse) {
    return rangeHeader ? await buildRangeResponse(cachedResponse, rangeHeader) : cachedResponse;
  }

  const freshResponse = await networkPromise;
  if (freshResponse && (freshResponse.status === 200 || freshResponse.type === 'opaque')) {
    return rangeHeader ? await buildRangeResponse(freshResponse, rangeHeader) : freshResponse;
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
