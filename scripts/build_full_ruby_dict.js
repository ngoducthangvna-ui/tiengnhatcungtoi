const fs = require('fs');

const baseDict = require('./furigana_dict.js');
const combinedMap = new Map();

// 1. Add baseDict
for (const [k, v] of Object.entries(baseDict)) {
  if (k && v && !combinedMap.has(k)) {
    combinedMap.set(k, v);
  }
}

// 2. Harvest from compiled_ruby_dict.json
if (fs.existsSync('scripts/compiled_ruby_dict.json')) {
  const comp = JSON.parse(fs.readFileSync('scripts/compiled_ruby_dict.json', 'utf8'));
  comp.forEach(([k, v]) => {
    if (k && v && !combinedMap.has(k)) {
      combinedMap.set(k, v);
    }
  });
}

// 3. Harvest from all lessons files (data/lessons_*.js)
const dataFiles = fs.readdirSync('data').filter(f => f.startsWith('lessons_') || f.startsWith('quizzes_') || f === 'dokkai.js');

dataFiles.forEach(f => {
  const content = fs.readFileSync('data/' + f, 'utf8');
  // Single ruby: <ruby>漢字<rt>かんじ</rt></ruby>
  const singleRegex = /<ruby>([^<]+)<rt>([^<]+)<\/rt><\/ruby>/g;
  let m;
  while ((m = singleRegex.exec(content)) !== null) {
    const kanji = m[1].trim();
    const reading = m[2].trim();
    if (kanji && reading && !combinedMap.has(kanji)) {
      combinedMap.set(kanji, `<ruby>${kanji}<rt>${reading}</rt></ruby>`);
    }
  }

  // Multi ruby block: (?:<ruby>[^<]+<rt>[^<]*<\/rt><\/ruby>)+
  const multiRegex = /((?:<ruby>[^<]+<rt>[^<]*<\/rt><\/ruby>)+)/g;
  let mm;
  while ((mm = multiRegex.exec(content)) !== null) {
    const rawTag = mm[1];
    const plainText = rawTag.replace(/<rt>[^<]*<\/rt>/g, '').replace(/<\/?ruby>/g, '').trim();
    if (plainText.length > 1 && !combinedMap.has(plainText)) {
      combinedMap.set(plainText, rawTag);
    }
  }
});

// 4. Common single Kanji characters fallback to ensure 0 bare Kanji
const singleFallback = {
  "私": "<ruby>私<rt>わたし</rt></ruby>",
  "人": "<ruby>人<rt>ひと</rt></ruby>",
  "日": "<ruby>日<rt>ひ</rt></ruby>",
  "本": "<ruby>本<rt>ほん</rt></ruby>",
  "語": "<ruby>語<rt>ご</rt></ruby>",
  "何": "<ruby>何<rt>なに</rt></ruby>",
  "時": "<ruby>時<rt>じ</rt></ruby>",
  "分": "<ruby>分<rt>ふん</rt></ruby>",
  "今": "<ruby>今<rt>いま</rt></ruby>",
  "月": "<ruby>月<rt>つき</rt></ruby>",
  "年": "<ruby>年<rt>とし</rt></ruby>",
  "誰": "<ruby>誰<rt>だれ</rt></ruby>",
  "前": "<ruby>前<rt>まえ</rt></ruby>",
  "後": "<ruby>後<rt>あと</rt></ruby>",
  "上": "<ruby>上<rt>うえ</rt></ruby>",
  "下": "<ruby>下<rt>した</rt></ruby>",
  "中": "<ruby>中<rt>なか</rt></ruby>",
  "右": "<ruby>右<rt>みぎ</rt></ruby>",
  "左": "<ruby>左<rt>ひだり</rt></ruby>",
  "外": "<ruby>外<rt>そと</rt></ruby>",
  "間": "<ruby>間<rt>あいだ</rt></ruby>",
  "近": "<ruby>近<rt>ちか</rt></ruby>",
  "遠": "<ruby>遠<rt>とお</rt></ruby>",
  "車": "<ruby>車<rt>くるま</rt></ruby>",
  "駅": "<ruby>駅<rt>えき</rt></ruby>",
  "道": "<ruby>道<rt>みち</rt></ruby>",
  "店": "<ruby>店<rt>みせ</rt></ruby>",
  "町": "<ruby>町<rt>まち</rt></ruby>",
  "国": "<ruby>国<rt>くに</rt></ruby>",
  "家": "<ruby>家<rt>いえ</rt></ruby>",
  "友": "<ruby>友<rt>とも</rt></ruby>",
  "父": "<ruby>父<rt>ちち</rt></ruby>",
  "母": "<ruby>母<rt>はは</rt></ruby>",
  "兄": "<ruby>兄<rt>あに</rt></ruby>",
  "弟": "<ruby>弟<rt>おとうと</rt></ruby>",
  "姉": "<ruby>姉<rt>あね</rt></ruby>",
  "妹": "<ruby>妹<rt>いもうと</rt></ruby>",
  "子": "<ruby>子<rt>こ</rt></ruby>",
  "男": "<ruby>男<rt>おとこ</rt></ruby>",
  "女": "<ruby>女<rt>おんな</rt></ruby>",
  "見": "<ruby>見<rt>み</rt></ruby>",
  "聞": "<ruby>聞<rt>き</rt></ruby>",
  "読": "<ruby>読<rt>よ</rt></ruby>",
  "書": "<ruby>書<rt>か</rt></ruby>",
  "話": "<ruby>話<rt>はな</rt></ruby>",
  "買": "<ruby>買<rt>か</rt></ruby>",
  "食": "<ruby>食<rt>た</rt></ruby>",
  "飲": "<ruby>飲<rt>の</rt></ruby>",
  "行": "<ruby>行<rt>い</rt></ruby>",
  "来": "<ruby>来<rt>き</rt></ruby>",
  "帰": "<ruby>帰<rt>かえ</rt></ruby>",
  "立": "<ruby>立<rt>た</rt></ruby>",
  "座": "<ruby>座<rt>すわ</rt></ruby>",
  "休": "<ruby>休<rt>やす</rt></ruby>",
  "会": "<ruby>会<rt>あ</rt></ruby>",
  "待": "<ruby>待<rt>ま</rt></ruby>",
  "出": "<ruby>出<rt>で</rt></ruby>",
  "入": "<ruby>入<rt>はい</rt></ruby>",
  "大": "<ruby>大<rt>おお</rt></ruby>",
  "小": "<ruby>小<rt>ちい</rt></ruby>",
  "高": "<ruby>高<rt>たか</rt></ruby>",
  "安": "<ruby>安<rt>やす</rt></ruby>",
  "新": "<ruby>新<rt>あたら</rt></ruby>",
  "古": "<ruby>古<rt>ふる</rt></ruby>",
  "長": "<ruby>長<rt>なが</rt></ruby>",
  "短": "<ruby>短<rt>みじか</rt></ruby>",
  "白": "<ruby>白<rt>しろ</rt></ruby>",
  "黒": "<ruby>黒<rt>くろ</rt></ruby>",
  "赤": "<ruby>赤<rt>あか</rt></ruby>",
  "青": "<ruby>青<rt>あお</rt></ruby>",
  "多": "<ruby>多<rt>おお</rt></ruby>",
  "少": "<ruby>少<rt>すく</rt></ruby>",
  "好": "<ruby>好<rt>す</rt></ruby>",
  "嫌": "<ruby>嫌<rt>きら</rt></ruby>",
  "強": "<ruby>強<rt>つよ</rt></ruby>",
  "弱": "<ruby>弱<rt>よわ</rt></ruby>",
  "早": "<ruby>早<rt>はや</rt></ruby>",
  "速": "<ruby>速<rt>はや</rt></ruby>",
  "遅": "<ruby>遅<rt>おそ</rt></ruby>",
  "明": "<ruby>明<rt>あか</rt></ruby>",
  "暗": "<ruby>暗<rt>くら</rt></ruby>",
  "広": "<ruby>広<rt>ひろ</rt></ruby>",
  "狭": "<ruby>狭<rt>せま</rt></ruby>",
  "重": "<ruby>重<rt>おも</rt></ruby>",
  "軽": "<ruby>軽<rt>かる</rt></ruby>",
  "難": "<ruby>難<rt>むずか</rt></ruby>",
  "優": "<ruby>優<rt>やさ</rt></ruby>",
  "静": "<ruby>静<rt>しず</rt></ruby>",
  "切": "<ruby>切<rt>き</rt></ruby>",
  "急": "<ruby>急<rt>いそ</rt></ruby>",
  "持": "<ruby>持<rt>も</rt></ruby>",
  "使": "<ruby>使<rt>つか</rt></ruby>",
  "作": "<ruby>作<rt>つく</rt></ruby>",
  "始": "<ruby>始<rt>はじ</rt></ruby>",
  "終": "<ruby>終<rt>お</rt></ruby>",
  "知": "<ruby>知<rt>し</rt></ruby>",
  "考": "<ruby>考<rt>かんが</rt></ruby>",
  "教": "<ruby>教<rt>おし</rt></ruby>",
  "習": "<ruby>習<rt>なら</rt></ruby>",
  "忘": "<ruby>忘<rt>わす</rt></ruby>",
  "貸": "<ruby>貸<rt>か</rt></ruby>",
  "借": "<ruby>借<rt>か</rt></ruby>",
  "送": "<ruby>送<rt>おく</rt></ruby>",
  "受": "<ruby>受<rt>う</rt></ruby>",
  "取": "<ruby>取<rt>と</rt></ruby>",
  "手": "<ruby>手<rt>て</rt></ruby>",
  "足": "<ruby>足<rt>あし</rt></ruby>",
  "目": "<ruby>目<rt>め</rt></ruby>",
  "口": "<ruby>口<rt>くち</rt></ruby>",
  "耳": "<ruby>耳<rt>みみ</rt></ruby>",
  "頭": "<ruby>頭<rt>あたま</rt></ruby>",
  "心": "<ruby>心<rt>こころ</rt></ruby>",
  "体": "<ruby>体<rt>からだ</rt></ruby>",
  "雨": "<ruby>雨<rt>あめ</rt></ruby>",
  "雪": "<ruby>雪<rt>ゆき</rt></ruby>",
  "風": "<ruby>風<rt>かぜ</rt></ruby>",
  "天": "<ruby>天<rt>てん</rt></ruby>",
  "気": "<ruby>気<rt>き</rt></ruby>",
  "空": "<ruby>空<rt>そら</rt></ruby>",
  "海": "<ruby>海<rt>うみ</rt></ruby>",
  "山": "<ruby>山<rt>やま</rt></ruby>",
  "川": "<ruby>川<rt>かわ</rt></ruby>",
  "花": "<ruby>花<rt>はな</rt></ruby>",
  "木": "<ruby>木<rt>き</rt></ruby>",
  "犬": "<ruby>犬<rt>いぬ</rt></ruby>",
  "猫": "<ruby>猫<rt>ねこ</rt></ruby>",
  "鳥": "<ruby>鳥<rt>とり</rt></ruby>",
  "魚": "<ruby>魚<rt>さかな</rt></ruby>",
  "肉": "<ruby>肉<rt>にく</rt></ruby>",
  "茶": "<ruby>茶<rt>ちゃ</rt></ruby>",
  "水": "<ruby>水<rt>みず</rt></ruby>",
  "火": "<ruby>火<rt>ひ</rt></ruby>",
  "金": "<ruby>金<rt>かね</rt></ruby>",
  "土": "<ruby>土<rt>つち</rt></ruby>",
  "音": "<ruby>音<rt>おと</rt></ruby>",
  "声": "<ruby>声<rt>こえ</rt></ruby>",
  "薬": "<ruby>薬<rt>くすり</rt></ruby>",
  "病": "<ruby>病<rt>びょう</rt></ruby>",
  "院": "<ruby>院<rt>いん</rt></ruby>",
  "校": "<ruby>校<rt>こう</rt></ruby>",
  "学": "<ruby>学<rt>がく</rt></ruby>",
  "生": "<ruby>生<rt>せい</rt></ruby>",
  "先": "<ruby>先<rt>せん</rt></ruby>",
  "社": "<ruby>社<rt>しゃ</rt></ruby>",
  "員": "<ruby>員<rt>いん</rt></ruby>",
  "者": "<ruby>者<rt>もの</rt></ruby>",
  "仕": "<ruby>仕<rt>し</rt></ruby>",
  "事": "<ruby>事<rt>ごと</rt></ruby>",
  "物": "<ruby>物<rt>もの</rt></ruby>",
  "間": "<ruby>間<rt>あいだ</rt></ruby>",
  "世": "<ruby>世<rt>よ</rt></ruby>",
  "界": "<ruby>界<rt>かい</rt></ruby>",
  "文": "<ruby>文<rt>ぶん</rt></ruby>",
  "字": "<ruby>字<rt>じ</rt></ruby>",
  "漢": "<ruby>漢<rt>かん</rt></ruby>",
  "題": "<ruby>題<rt>だい</rt></ruby>",
  "答": "<ruby>答<rt>こた</rt></ruby>",
  "問": "<ruby>問<rt>とい</rt></ruby>",
  "試": "<ruby>試<rt>し</rt></ruby>",
  "験": "<ruby>験<rt>けん</rt></ruby>",
  "度": "<ruby>度<rt>ど</rt></ruby>",
  "回": "<ruby>回<rt>かい</rt></ruby>",
  "番": "<ruby>番<rt>ばん</rt></ruby>",
  "号": "<ruby>号<rt>ごう</rt></ruby>",
  "選": "<ruby>選<rt>えら</rt></ruby>",
  "正": "<ruby>正<rt>ただ</rt></ruby>",
  "違": "<ruby>違<rt>ちが</rt></ruby>",
  "同": "<ruby>同<rt>おな</rt></ruby>",
  "思": "<ruby>思<rt>おも</rt></ruby>",
  "言": "<ruby>言<rt>い</rt></ruby>",
  "名": "<ruby>名<rt>な</rt></ruby>",
  "前": "<ruby>前<rt>まえ</rt></ruby>",
  "歳": "<ruby>歳<rt>さい</rt></ruby>",
  "才": "<ruby>才<rt>さい</rt></ruby>",
  "円": "<ruby>円<rt>えん</rt></ruby>",
  "百": "<ruby>百<rt>ひゃく</rt></ruby>",
  "千": "<ruby>千<rt>せん</rt></ruby>",
  "万": "<ruby>万<rt>まん</rt></ruby>",
  "一": "<ruby>一<rt>いち</rt></ruby>",
  "二": "<ruby>二<rt>に</rt></ruby>",
  "三": "<ruby>三<rt>さん</rt></ruby>",
  "四": "<ruby>四<rt>よん</rt></ruby>",
  "五": "<ruby>五<rt>ご</rt></ruby>",
  "六": "<ruby>六<rt>ろく</rt></ruby>",
  "七": "<ruby>七<rt>なな</rt></ruby>",
  "八": "<ruby>八<rt>はち</rt></ruby>",
  "九": "<ruby>九<rt>きゅう</rt></ruby>",
  "十": "<ruby>十<rt>じゅう</rt></ruby>"
};

for (const [k, v] of Object.entries(singleFallback)) {
  if (!combinedMap.has(k)) {
    combinedMap.set(k, v);
  }
}

// Convert to array and sort by key length descending
const sortedEntries = Array.from(combinedMap.entries())
  .filter(([k, v]) => /[\u4e00-\u9faf]/.test(k) && v.includes('<ruby>') && !v.includes('<rt></rt>'))
  .sort((a, b) => b[0].length - a[0].length);

fs.writeFileSync('scripts/full_ruby_dict.json', JSON.stringify(sortedEntries, null, 2), 'utf8');
console.log(`Generated full_ruby_dict.json with ${sortedEntries.length} entries!`);
