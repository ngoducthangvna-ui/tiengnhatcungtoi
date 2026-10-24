const https = require('https');

const radicals1 = [
  { char: '一', hex: '04e00' },
  { char: '丨', hex: '04e28' },
  { char: '丶', hex: '04e36' },
  { char: '丿', hex: '04e3f' },
  { char: '乙', hex: '04e59' },
  { char: '亅', hex: '04e85' }
];

function fetchSvg(code) {
  return new Promise((resolve) => {
    https.get('https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/' + code + '.svg', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ code, status: res.statusCode, data }));
    }).on('error', err => resolve({ code, error: err.message }));
  });
}

(async () => {
  for (const r of radicals1) {
    const res = await fetchSvg(r.hex);
    const regex = /d="([^"]+)"/g;
    const paths = [];
    let match;
    while ((match = regex.exec(res.data)) !== null) {
      paths.push(match[1]);
    }
    console.log(r.char, r.hex, 'status:', res.status, 'paths:', paths.length);
    if (paths[0]) {
      console.log('  path 1:', paths[0].slice(0, 50));
    }
  }
})();
