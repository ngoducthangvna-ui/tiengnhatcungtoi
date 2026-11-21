(function (root) {
  'use strict';

  const ASSET_VERSION = '20261121_19';
  const currentScriptSrc = (typeof document !== 'undefined' && document.currentScript && document.currentScript.src)
    ? document.currentScript.src
    : (typeof location !== 'undefined' ? location.href : '');
  const workerUrl = currentScriptSrc
    ? new URL('study-voice/v1/synth-worker.js', currentScriptSrc)
    : 'src/study-voice/v1/synth-worker.js';
  const manifestUrl = currentScriptSrc
    ? new URL(`../data/study_audio_manifest.json?v=${ASSET_VERSION}`, currentScriptSrc).href
    : `data/study_audio_manifest.json?v=${ASSET_VERSION}`;
  const baseRootUrl = currentScriptSrc
    ? new URL('../', currentScriptSrc).href
    : '';

  const pending = new Map();
  const packBufferCache = new Map(); // LRU cache (max 8 decoded AudioBuffers)
  const MAX_CACHED_PACKS = 8;

  let worker;
  let context;
  let requestId = 0;
  let ready = false;
  let manifestPromise = null;
  let manifestData = undefined; // undefined = not loaded, null = unavailable, object = loaded
  let fuzzyItemsMap = null;

  function normalizeLookupKey(text) {
    if (!text) return '';
    return String(text).trim().replace(/[\s\u3000]+/g, '');
  }

  function normalizeFuzzyKey(text) {
    if (!text) return '';
    return String(text)
      .trim()
      .replace(/[\s\u3000。．.、，,！？?!・…～~「」『』()（）]+/g, '');
  }

  function buildFuzzyIndex(items) {
    const map = new Map();
    for (const [k, v] of Object.entries(items)) {
      const fk = normalizeFuzzyKey(k);
      if (fk && !map.has(fk)) map.set(fk, v);
    }
    return map;
  }

  function loadStudyManifest() {
    if (manifestData !== undefined) return Promise.resolve(manifestData);
    if (manifestPromise) return manifestPromise;
    if (typeof fetch !== 'function') {
      manifestData = null;
      return Promise.resolve(null);
    }
    manifestPromise = fetch(manifestUrl, { cache: 'default' })
      .then(res => (res && res.ok ? res.json() : null))
      .then(data => {
        if (data && Array.isArray(data.packs) && data.items) {
          manifestData = data;
          fuzzyItemsMap = buildFuzzyIndex(data.items);
          ready = true;
        } else {
          manifestData = null;
        }
        return manifestData;
      })
      .catch(() => {
        manifestData = null;
        return null;
      });
    return manifestPromise;
  }

  function lookupSpriteEntry(manifest, text) {
    if (!manifest || !manifest.items) return null;
    const key = normalizeLookupKey(text);
    if (!key) return null;
    if (manifest.items[key]) return manifest.items[key];
    const stripped = key.replace(/[。．.！？?!]+$/, '');
    if (stripped && manifest.items[stripped]) return manifest.items[stripped];
    if (stripped && manifest.items[stripped + '。']) return manifest.items[stripped + '。'];
    if (fuzzyItemsMap) {
      const fk = normalizeFuzzyKey(text);
      if (fk && fuzzyItemsMap.has(fk)) return fuzzyItemsMap.get(fk);
    }
    return null;
  }

  async function loadPackAudioBuffer(ctx, packRelPath) {
    if (packBufferCache.has(packRelPath)) {
      const cached = packBufferCache.get(packRelPath);
      packBufferCache.delete(packRelPath);
      packBufferCache.set(packRelPath, cached);
      return cached;
    }
    const url = baseRootUrl
      ? new URL(`${packRelPath}?v=${ASSET_VERSION}`, baseRootUrl).href
      : `${packRelPath}?v=${ASSET_VERSION}`;
    const res = await fetch(url, { cache: 'default' });
    if (!res || !res.ok) throw new Error(`Không tải được gói âm thanh ${packRelPath}`);
    const arrBuf = await res.arrayBuffer();
    const audioBuf = await ctx.decodeAudioData(arrBuf);

    if (packBufferCache.size >= MAX_CACHED_PACKS) {
      const oldestKey = packBufferCache.keys().next().value;
      packBufferCache.delete(oldestKey);
    }
    packBufferCache.set(packRelPath, audioBuf);
    return audioBuf;
  }

  async function playSpriteEntry(ctx, manifest, entry, { speed, signal, onPlaying }) {
    const [packIdx, startSec, endSec] = entry;
    const packRelPath = manifest.packs[packIdx];
    if (!packRelPath || endSec <= startSec) return false;

    const audioBuf = await loadPackAudioBuffer(ctx, packRelPath);
    signal?.throwIfAborted?.();

    const safeStart = Math.max(0, Math.min(startSec, Math.max(0, audioBuf.duration - 0.05)));
    const safeDur = Math.max(0.08, Math.min(endSec - safeStart + 0.04, audioBuf.duration - safeStart));
    const rate = Math.max(0.5, Math.min(2.0, Number(speed) || 1.0));

    const source = ctx.createBufferSource();
    source.buffer = audioBuf;
    source.playbackRate.value = rate;
    source.connect(ctx.destination);

    await new Promise(resolve => {
      let settled = false;
      const done = () => {
        if (settled) return;
        settled = true;
        signal?.removeEventListener?.('abort', onAbort);
        try { source.disconnect(); } catch (_) {}
        resolve();
      };
      const onAbort = () => {
        try { source.stop(); } catch (_) {}
        done();
      };
      if (signal?.aborted) {
        done();
        return;
      }
      signal?.addEventListener?.('abort', onAbort, { once: true });
      source.onended = done;
      try {
        source.start(0, safeStart, safeDur);
        ready = true;
        onPlaying?.();
      } catch (_) {
        done();
      }
    });
    signal?.throwIfAborted?.();
    return true;
  }

  function resetWorker(error) {
    worker?.terminate();
    worker = null;
    for (const request of pending.values()) request.reject(error);
  }

  function synthesize(text, speed) {
    if (!worker) {
      worker = new Worker(workerUrl, { type: 'module' });
      worker.onmessage = ({ data }) => {
        const request = pending.get(data.id);
        if (!request) return;
        if (data.error) request.reject(new Error(data.error));
        else {
          ready = true;
          request.resolve(data);
        }
      };
      worker.onerror = event => resetWorker(new Error(event.message || 'Không tải được bộ đọc tiếng Nhật.'));
      worker.onmessageerror = () => resetWorker(new Error('Không nhận được âm thanh từ bộ đọc.'));
    }

    const id = ++requestId;
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => resetWorker(new Error('Bộ đọc mất quá nhiều thời gian để phản hồi.')), 90000);
      const settle = (callback) => (value) => {
        clearTimeout(timeout);
        pending.delete(id);
        callback(value);
      };
      pending.set(id, { resolve: settle(resolve), reject: settle(reject) });
      try {
        worker.postMessage({ id, text, speed });
      } catch (error) {
        resetWorker(error);
      }
    });
  }

  function splitText(text) {
    // Open JTalk giới hạn mỗi lần tổng hợp ở 20 giây.
    const sentences = text.match(/[^。！？!?\n]+[。！？!?]*|[。！？!?]+/gu) || [];
    return sentences.flatMap(sentence => {
      const characters = Array.from(sentence.trim());
      const chunks = [];
      while (characters.length > 40) {
        const comma = characters.slice(0, 40).findLastIndex(char => /[、，,；; ]/u.test(char));
        const split = comma >= 16 ? comma + 1 : 40;
        chunks.push(characters.splice(0, split).join(''));
      }
      if (characters.length) chunks.push(characters.join(''));
      return chunks;
    });
  }

  async function play(text, { speed = 1.0, pitch = 1.0, signal, onPlaying } = {}) {
    signal?.throwIfAborted?.();
    const AudioContextType = root.AudioContext || root.webkitAudioContext;
    if (!context || context.state === 'closed') context = new AudioContextType();
    // Mở AudioContext trong thao tác bấm để Safari cho phát sau khi tải/tổng hợp xong.
    await context.resume();

    // Ưu tiên 1: Phát âm thanh Studio mô phỏng CD gốc từ Audio Sprite (audio/study/*.mp3)
    try {
      const manifest = await loadStudyManifest();
      signal?.throwIfAborted?.();
      const entry = lookupSpriteEntry(manifest, text);
      if (entry) {
        const played = await playSpriteEntry(context, manifest, entry, { speed, signal, onPlaying });
        if (played) return;
      }
    } catch (spriteErr) {
      if (signal?.aborted) throw spriteErr;
      // Fallback âm thầm về Open JTalk nếu tệp sprite chưa khả dụng
    }

    // Ưu tiên 2 (Fallback): Open JTalk WASM cho câu tự do ngoài bộ 50 bài
    let started = false;
    for (const chunk of splitText(text)) {
      signal?.throwIfAborted?.();
      const { pcm, sampleRate } = await synthesize(chunk, speed / (pitch || 1.0));
      signal?.throwIfAborted?.();

      const buffer = context.createBuffer(1, pcm.length, sampleRate);
      buffer.copyToChannel(pcm, 0);
      const source = context.createBufferSource();
      source.buffer = buffer;
      source.playbackRate.value = pitch || 1.0;
      source.connect(context.destination);

      await new Promise(resolve => {
        let settled = false;
        const done = () => {
          if (settled) return;
          settled = true;
          signal?.removeEventListener?.('abort', onAbort);
          try { source.disconnect(); } catch (_) {}
          resolve();
        };
        const onAbort = () => {
          try { source.stop(); } catch (_) {}
          done();
        };
        if (signal?.aborted) {
          done();
          return;
        }
        signal?.addEventListener?.('abort', onAbort, { once: true });
        source.onended = done;
        try {
          source.start();
          if (!started) {
            started = true;
            onPlaying?.();
          }
        } catch (_) {
          done();
        }
      });
    }
    signal?.throwIfAborted?.();
    if (!started) throw new Error('Văn bản không có nội dung để đọc.');
  }

  // Preload nhẹ manifest sau khi trang rảnh để lần bấm loa đầu tiên phát tức thì 0ms
  if (typeof window !== 'undefined' && typeof fetch === 'function') {
    setTimeout(() => { loadStudyManifest(); }, 1200);
  }

  root.StudyVoiceEngine = {
    play,
    isReady: () => ready,
    normalizeLookupKey,
    normalizeFuzzyKey,
    loadStudyManifest
  };
})(typeof window !== 'undefined' ? window : globalThis);
