const fs = require('fs');
const https = require('https');
const path = require('path');

function fetchSvg(hex) {
  return new Promise((resolve) => {
    const url = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`;
    https.get(url, res => {
      if (res.statusCode !== 200) {
        return resolve({ hex, status: res.statusCode, paths: [] });
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Extract paths inside StrokePaths
        const strokePathsMatch = data.match(/<g id="kvg:StrokePaths_[^"]*"[^>]*>([\s\S]*?)<\/g>\s*<g id="kvg:StrokeNumbers/);
        const searchArea = strokePathsMatch ? strokePathsMatch[1] : data;
        const regex = /<path[^>]+d="([^"]+)"/g;
        const paths = [];
        let match;
        while ((match = regex.exec(searchArea)) !== null) {
          paths.push(match[1]);
        }
        resolve({ hex, status: 200, paths });
      });
    }).on('error', err => resolve({ hex, error: err.message, paths: [] }));
  });
}

async function testFetch() {
  const testChars = ['一', '丨', '丶', '丿', '乙', '亅', '二', '人', '口', '日', '月', '木', '水', '火', '言', '金'];
  console.log('Testing batch fetch of', testChars.length, 'characters...');
  for (const c of testChars) {
    const hex = c.codePointAt(0).toString(16).padStart(5, '0');
    const res = await fetchSvg(hex);
    console.log(c, hex, 'status:', res.status, 'paths:', res.paths.length);
  }
}

testFetch();
