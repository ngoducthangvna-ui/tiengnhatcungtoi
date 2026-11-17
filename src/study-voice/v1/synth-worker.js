import { createOpenJTalkModule } from './openjtalk.js';

const asset = name => new URL(name, import.meta.url).href;
let engine;

function getEngine() {
  if (!engine) {
    engine = (async () => {
      const runtime = await createOpenJTalkModule({ locateFile: () => asset('openjtalk-wasm.wasm') });
      await runtime.configure(asset('dictionary'), asset('nitech.htsvoice'));
      return runtime;
    })().catch(error => {
      engine = null;
      throw error;
    });
  }
  return engine;
}

self.onmessage = async ({ data }) => {
  const { id, text, speed } = data;
  try {
    const runtime = await getEngine();
    const { pcm, sampleRate } = runtime.synthesize(text, JSON.stringify({ speed }));
    if (!pcm.length) throw new Error('Open JTalk không tạo được âm thanh.');
    for (let i = 0; i < pcm.length; i += 1) pcm[i] /= 32768;
    self.postMessage({ id, pcm, sampleRate }, [pcm.buffer]);
  } catch (error) {
    self.postMessage({ id, error: error.message });
  }
};
