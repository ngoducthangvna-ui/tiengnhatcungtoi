(function (root) {
  'use strict';

  const workerUrl = new URL('study-voice/v1/synth-worker.js', document.currentScript.src);
  const pending = new Map();
  let worker;
  let context;
  let requestId = 0;
  let ready = false;

  function resetWorker(error) {
    worker?.terminate();
    worker = null;
    ready = false;
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

  async function play(text, { speed, pitch, signal, onPlaying }) {
    signal.throwIfAborted();
    const AudioContextType = root.AudioContext || root.webkitAudioContext;
    if (!context || context.state === 'closed') context = new AudioContextType();
    // Mở AudioContext trong thao tác bấm để Safari cho phát sau khi tổng hợp xong.
    await context.resume();

    let started = false;
    for (const chunk of splitText(text)) {
      signal.throwIfAborted();
      const { pcm, sampleRate } = await synthesize(chunk, speed / pitch);
      signal.throwIfAborted();

      const buffer = context.createBuffer(1, pcm.length, sampleRate);
      buffer.copyToChannel(pcm, 0);
      const source = context.createBufferSource();
      source.buffer = buffer;
      source.playbackRate.value = pitch;
      source.connect(context.destination);

      const stop = () => source.stop();
      signal.addEventListener('abort', stop, { once: true });
      try {
        await new Promise(resolve => {
          source.onended = resolve;
          source.start();
          if (!started) {
            started = true;
            onPlaying?.();
          }
        });
      } finally {
        signal.removeEventListener('abort', stop);
        source.disconnect();
      }
    }
    signal.throwIfAborted();
    if (!started) throw new Error('Văn bản không có nội dung để đọc.');
  }

  root.StudyVoiceEngine = { play, isReady: () => ready };
})(window);
