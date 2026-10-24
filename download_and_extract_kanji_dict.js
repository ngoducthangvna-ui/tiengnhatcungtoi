const fs = require('fs');
const https = require('https');
const path = require('path');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

(async () => {
  console.log('Downloading dictionaries...');
  const [vn1, vn2, en1, en2] = await Promise.all([
    fetchJson('https://raw.githubusercontent.com/trungnt2910/KanjiDictVN/master/out_vn/kanji_bank_1.json'),
    fetchJson('https://raw.githubusercontent.com/trungnt2910/KanjiDictVN/master/out_vn/kanji_bank_2.json'),
    fetchJson('https://raw.githubusercontent.com/trungnt2910/KanjiDictVN/master/out_en/kanji_bank_1.json'),
    fetchJson('https://raw.githubusercontent.com/trungnt2910/KanjiDictVN/master/out_en/kanji_bank_2.json'),
  ]);

  console.log('Downloaded dictionaries:', {
    vn1: vn1.length,
    vn2: vn2.length,
    en1: en1.length,
    en2: en2.length
  });

  const vnMap = new Map();
  [...vn1, ...vn2].forEach(item => {
    // [kanji, han_viet, "", "", meanings_array, stats_object]
    vnMap.set(item[0], {
      hanViet: item[1] || '',
      meaningsVn: item[4] || [],
      stats: item[5] || {}
    });
  });

  const enMap = new Map();
  [...en1, ...en2].forEach(item => {
    // [kanji, on, kun, tag, meanings_en, stats]
    enMap.set(item[0], {
      on: item[1] || '',
      kun: item[2] || '',
      tag: item[3] || '',
      meaningsEn: item[4] || [],
      stats: item[5] || {}
    });
  });

  const uniqueKanji = JSON.parse(fs.readFileSync('scripts/all_unique_kanji.json', 'utf8'));
  console.log('Total target kanji:', uniqueKanji.length);

  const harvested = {};
  let missing = [];

  uniqueKanji.forEach(k => {
    const vn = vnMap.get(k);
    const en = enMap.get(k);
    if (!vn && !en) {
      missing.push(k);
    } else {
      harvested[k] = {
        kanji: k,
        hanViet: (vn && vn.hanViet) ? vn.hanViet.toUpperCase() : '',
        onyomi: en ? en.on : '',
        kunyomi: en ? en.kun : '',
        meaningsVn: vn ? vn.meaningsVn : [],
        meaningsEn: en ? en.meaningsEn : [],
        strokes: (vn && vn.stats && vn.stats.Strokes) ? parseInt(vn.stats.Strokes) : (en && en.stats && en.stats.strokes ? parseInt(en.stats.strokes) : 0),
        radical: (vn && vn.stats && vn.stats.Radical) ? vn.stats.Radical : ''
      };
    }
  });

  console.log('Harvested count:', Object.keys(harvested).length, 'Missing:', missing.length);
  if (missing.length > 0) {
    console.log('Missing kanji:', missing.join(' '));
  }

  fs.writeFileSync('scripts/harvested_kanji_dict.json', JSON.stringify(harvested, null, 2), 'utf8');
  console.log('Saved to scripts/harvested_kanji_dict.json');
})();
