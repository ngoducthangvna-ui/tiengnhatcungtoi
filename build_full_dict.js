const fs = require('fs');

const baseDict = require('./furigana_dict.js');
const combinedMap = new Map();

// Insert baseDict entries
for (const [k, v] of Object.entries(baseDict)) {
  combinedMap.set(k, v);
}

// Harvest from all lesson and quiz files
function harvestRuby(text) {
  if (!text) return;
  const regex = /<ruby>(.*?)<rt>(.*?)<\/rt><\/ruby>/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    const kanji = m[1];
    const reading = m[2];
    const fullTag = `<ruby>${kanji}<rt>${reading}</rt></ruby>`;
    if (!combinedMap.has(kanji)) {
      combinedMap.set(kanji, fullTag);
    }
  }

  const multiRegex = /((?:<ruby>[^<]+<rt>[^<]*<\/rt><\/ruby>)+)/g;
  let mm;
  while ((mm = multiRegex.exec(text)) !== null) {
    const rawTag = mm[1];
    const plainText = rawTag.replace(/<rt>[^<]*<\/rt>/g, '').replace(/<\/?ruby>/g, '');
    if (plainText.length > 1 && !combinedMap.has(plainText)) {
      combinedMap.set(plainText, rawTag);
    }
  }
}

const files = [
  'data/lessons_1_5.js',
  'data/lessons_6_10.js',
  'data/lessons_11_15.js',
  'data/lessons_16_20.js',
  'data/lessons_21_25.js',
  'data/quizzes_1_5.js',
  'data/quizzes_6_10.js',
  'data/quizzes_11_15.js',
  'data/dokkai.js'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    harvestRuby(fs.readFileSync(f, 'utf8'));
  }
});

// Add individual kanji single character fallback dictionary if needed
const singleKanjiFallback = {
  "市": "<ruby>市<rt>し</rt></ruby>",
  "場": "<ruby>場<rt>ば</rt></ruby>",
  "道": "<ruby>道<rt>みち</rt></ruby>",
  "橋": "<ruby>橋<rt>はし</rt></ruby>",
  "角": "<ruby>角<rt>かど</rt></ruby>",
  "手": "<ruby>手<rt>て</rt></ruby>",
  "足": "<ruby>足<rt>あし</rt></ruby>",
  "目": "<ruby>目<rt>め</rt></ruby>",
  "耳": "<ruby>耳<rt>みみ</rt></ruby>",
  "鼻": "<ruby>鼻<rt>はな</rt></ruby>",
  "口": "<ruby>口<rt>くち</rt></ruby>",
  "歯": "<ruby>歯<rt>は</rt></ruby>",
  "頭": "<ruby>頭<rt>あたま</rt></ruby>",
  "顔": "<ruby>顔<rt>かお</rt></ruby>",
  "体": "<ruby>体<rt>からだ</rt></ruby>",
  "首": "<ruby>首<rt>くび</rt></ruby>",
  "喉": "<ruby>喉<rt>のど</rt></ruby>",
  "腹": "<ruby>腹<rt>なか</rt></ruby>",
  "車": "<ruby>車<rt>くるま</rt></ruby>",
  "駅": "<ruby>駅<rt>えき</rt></ruby>",
  "本": "<ruby>本<rt>ほん</rt></ruby>",
  "紙": "<ruby>紙<rt>かみ</rt></ruby>",
  "花": "<ruby>花<rt>はな</rt></ruby>",
  "魚": "<ruby>魚<rt>さかな</rt></ruby>",
  "肉": "<ruby>肉<rt>にく</rt></ruby>",
  "水": "<ruby>水<rt>みず</rt></ruby>",
  "湯": "<ruby>湯<rt>ゆ</rt></ruby>",
  "酒": "<ruby>酒<rt>さけ</rt></ruby>",
  "茶": "<ruby>茶<rt>ちゃ</rt></ruby>",
  "雨": "<ruby>雨<rt>あめ</rt></ruby>",
  "雪": "<ruby>雪<rt>ゆき</rt></ruby>",
  "空": "<ruby>空<rt>そら</rt></ruby>",
  "海": "<ruby>海<rt>うみ</rt></ruby>",
  "山": "<ruby>山<rt>やま</rt></ruby>",
  "川": "<ruby>川<rt>かわ</rt></ruby>",
  "町": "<ruby>町<rt>まち</rt></ruby>",
  "村": "<ruby>村<rt>むら</rt></ruby>",
  "店": "<ruby>店<rt>みせ</rt></ruby>",
  "家": "<ruby>家<rt>いえ</rt></ruby>",
  "門": "<ruby>門<rt>もん</rt></ruby>",
  "戸": "<ruby>戸<rt>と</rt></ruby>",
  "庭": "<ruby>庭<rt>にわ</rt></ruby>",
  "池": "<ruby>池<rt>いけ</rt></ruby>",
  "箱": "<ruby>箱<rt>はこ</rt></ruby>",
  "犬": "<ruby>犬<rt>いぬ</rt></ruby>",
  "猫": "<ruby>猫<rt>ねこ</rt></ruby>",
  "馬": "<ruby>馬<rt>うま</rt></ruby>",
  "牛": "<ruby>牛<rt>うし</rt></ruby>",
  "鳥": "<ruby>鳥<rt>とり</rt></ruby>",
  "魚": "<ruby>魚<rt>さかな</rt></ruby>",
  "虫": "<ruby>虫<rt>むし</rt></ruby>",
  "花": "<ruby>花<rt>はな</rt></ruby>",
  "草": "<ruby>草<rt>くさ</rt></ruby>",
  "木": "<ruby>木<rt>き</rt></ruby>",
  "森": "<ruby>森<rt>もり</rt></ruby>",
  "林": "<ruby>林<rt>はやし</rt></ruby>",
  "音": "<ruby>音<rt>おと</rt></ruby>",
  "声": "<ruby>声<rt>こえ</rt></ruby>",
  "光": "<ruby>光<rt>ひかり</rt></ruby>",
  "風": "<ruby>風<rt>かぜ</rt></ruby>",
  "心": "<ruby>心<rt>こころ</rt></ruby>",
  "力": "<ruby>力<rt>ちから</rt></ruby>",
  "形": "<ruby>形<rt>かたち</rt></ruby>",
  "色": "<ruby>色<rt>いろ</rt></ruby>",
  "事": "<ruby>事<rt>こと</rt></ruby>",
  "物": "<ruby>物<rt>もの</rt></ruby>",
  "服": "<ruby>服<rt>ふく</rt></ruby>",
  "靴": "<ruby>靴<rt>くつ</rt></ruby>",
  "傘": "<ruby>傘<rt>かさ</rt></ruby>",
  "荷": "<ruby>荷<rt>に</rt></ruby>",
  "箱": "<ruby>箱<rt>はこ</rt></ruby>",
  "絵": "<ruby>絵<rt>え</rt></ruby>",
  "歌": "<ruby>歌<rt>うた</rt></ruby>",
  "薬": "<ruby>薬<rt>くすり</rt></ruby>",
  "熱": "<ruby>熱<rt>ねつ</rt></ruby>",
  "痛": "<ruby>痛<rt>いた</rt></ruby>",
  "病": "<ruby>病<rt>びょう</rt></ruby>",
  "院": "<ruby>院<rt>いん</rt></ruby>",
  "医": "<ruby>医<rt>い</rt></ruby>",
  "者": "<ruby>者<rt>しゃ</rt></ruby>",
  "校": "<ruby>校<rt>こう</rt></ruby>",
  "学": "<ruby>学<rt>がく</rt></ruby>",
  "生": "<ruby>生<rt>せい</rt></ruby>",
  "先": "<ruby>先<rt>せん</rt></ruby>",
  "会": "<ruby>会<rt>かい</rt></ruby>",
  "社": "<ruby>社<rt>しゃ</rt></ruby>",
  "員": "<ruby>員<rt>いん</rt></ruby>",
  "銀": "<ruby>銀<rt>ぎん</rt></ruby>",
  "行": "<ruby>行<rt>こう</rt></ruby>",
  "買": "<ruby>買<rt>か</rt></ruby>",
  "売": "<ruby>売<rt>う</rt></ruby>",
  "読": "<ruby>読<rt>よ</rt></ruby>",
  "書": "<ruby>書<rt>か</rt></ruby>",
  "聞": "<ruby>聞<rt>き</rt></ruby>",
  "話": "<ruby>話<rt>はな</rt></ruby>",
  "言": "<ruby>言<rt>い</rt></ruby>",
  "見": "<ruby>見<rt>み</rt></ruby>",
  "食": "<ruby>食<rt>た</rt></ruby>",
  "飲": "<ruby>飲<rt>の</rt></ruby>",
  "起": "<ruby>起<rt>お</rt></ruby>",
  "寝": "<ruby>寝<rt>ね</rt></ruby>",
  "歩": "<ruby>歩<rt>ある</rt></ruby>",
  "走": "<ruby>走<rt>はし</rt></ruby>",
  "泳": "<ruby>泳<rt>およ</rt></ruby>",
  "待": "<ruby>待<rt>ま</rt></ruby>",
  "立": "<ruby>立<rt>た</rt></ruby>",
  "座": "<ruby>座<rt>すわ</rt></ruby>",
  "使": "<ruby>使<rt>つか</rt></ruby>",
  "作": "<ruby>作<rt>つく</rt></ruby>",
  "知": "<ruby>知<rt>し</rt></ruby>",
  "住": "<ruby>住<rt>す</rt></ruby>",
  "持": "<ruby>持<rt>も</rt></ruby>",
  "急": "<ruby>急<rt>いそ</rt></ruby>",
  "開": "<ruby>開<rt>あ</rt></ruby>",
  "閉": "<ruby>閉<rt>し</rt></ruby>",
  "乗": "<ruby>乗<rt>の</rt></ruby>",
  "降": "<ruby>降<rt>お</rt></ruby>",
  "着": "<ruby>着<rt>つ / き</rt></ruby>",
  "脱": "<ruby>脱<rt>ぬ</rt></ruby>",
  "履": "<ruby>履<rt>は</rt></ruby>",
  "洗": "<ruby>洗<rt>あら</rt></ruby>",
  "弾": "<ruby>弾<rt>ひ</rt></ruby>",
  "集": "<ruby>集<rt>あつ</rt></ruby>",
  "捨": "<ruby>捨<rt>す</rt></ruby>",
  "換": "<ruby>換<rt>か</rt></ruby>",
  "変": "<ruby>変<rt>か</rt></ruby>",
  "登": "<ruby>登<rt>のぼ</rt></ruby>",
  "泊": "<ruby>泊<rt>と</rt></ruby>",
  "直": "<ruby>直<rt>なお</rt></ruby>",
  "調": "<ruby>調<rt>しら</rt></ruby>",
  "要": "<ruby>要<rt>い</rt></ruby>",
  "思": "<ruby>思<rt>おも</rt></ruby>",
  "勝": "<ruby>勝<rt>か</rt></ruby>",
  "負": "<ruby>負<rt>ま</rt></ruby>",
  "動": "<ruby>動<rt>うご</rt></ruby>",
  "辞": "<ruby>辞<rt>や</rt></ruby>",
  "切": "<ruby>切<rt>き</rt></ruby>",
  "貸": "<ruby>貸<rt>か</rt></ruby>",
  "借": "<ruby>借<rt>か</rt></ruby>",
  "送": "<ruby>送<rt>おく</rt></ruby>",
  "教": "<ruby>教<rt>おし</rt></ruby>",
  "習": "<ruby>習<rt>なら</rt></ruby>",
  "出": "<ruby>出<rt>で / だ</rt></ruby>",
  "入": "<ruby>入<rt>はい / い</rt></ruby>",
  "考": "<ruby>考<rt>かんが</rt></ruby>",
  "死": "<ruby>死<rt>し</rt></ruby>",
  "生": "<ruby>生<rt>う / い</rt></ruby>",
  "春": "<ruby>春<rt>はる</rt></ruby>",
  "夏": "<ruby>夏<rt>なつ</rt></ruby>",
  "秋": "<ruby>秋<rt>あき</rt></ruby>",
  "冬": "<ruby>冬<rt>ふゆ</rt></ruby>",
  "東": "<ruby>東<rt>ひがし</rt></ruby>",
  "西": "<ruby>西<rt>にし</rt></ruby>",
  "南": "<ruby>南<rt>みなみ</rt></ruby>",
  "北": "<ruby>北<rt>きた</rt></ruby>",
  "右": "<ruby>右<rt>みぎ</rt></ruby>",
  "左": "<ruby>左<rt>ひだり</rt></ruby>",
  "前": "<ruby>前<rt>まえ</rt></ruby>",
  "後": "<ruby>後<rt>うしろ / あと</rt></ruby>",
  "上": "<ruby>上<rt>うえ</rt></ruby>",
  "下": "<ruby>下<rt>した</rt></ruby>",
  "中": "<ruby>中<rt>なか</rt></ruby>",
  "外": "<ruby>外<rt>そと</rt></ruby>",
  "間": "<ruby>間<rt>あいだ</rt></ruby>",
  "高": "<ruby>高<rt>たか</rt></ruby>",
  "安": "<ruby>安<rt>やす</rt></ruby>",
  "新": "<ruby>新<rt>あたら</rt></ruby>",
  "古": "<ruby>古<rt>ふる</rt></ruby>",
  "大": "<ruby>大<rt>おお</rt></ruby>",
  "小": "<ruby>小<rt>ちい</rt></ruby>",
  "多": "<ruby>多<rt>おお</rt></ruby>",
  "少": "<ruby>少<rt>すく / すこ</rt></ruby>",
  "白": "<ruby>白<rt>しろ</rt></ruby>",
  "黒": "<ruby>黒<rt>くろ</rt></ruby>",
  "赤": "<ruby>赤<rt>あか</rt></ruby>",
  "青": "<ruby>青<rt>あお</rt></ruby>",
  "好": "<ruby>好<rt>す</rt></ruby>",
  "嫌": "<ruby>嫌<rt>きら</rt></ruby>",
  "近": "<ruby>近<rt>ちか</rt></ruby>",
  "遠": "<ruby>遠<rt>とお</rt></ruby>",
  "早": "<ruby>早<rt>はや</rt></ruby>",
  "遅": "<ruby>遅<rt>おそ</rt></ruby>",
  "長": "<ruby>長<rt>なが</rt></ruby>",
  "短": "<ruby>短<rt>みじか</rt></ruby>",
  "明": "<ruby>明<rt>あか</rt></ruby>",
  "暗": "<ruby>暗<rt>くら</rt></ruby>",
  "広": "<ruby>広<rt>ひろ</rt></ruby>",
  "狭": "<ruby>狭<rt>せま</rt></ruby>",
  "重": "<ruby>重<rt>おも</rt></ruby>",
  "軽": "<ruby>軽<rt>かる</rt></ruby>",
  "暑": "<ruby>暑<rt>あつ</rt></ruby>",
  "寒": "<ruby>寒<rt>さむ</rt></ruby>",
  "冷": "<ruby>冷<rt>つめ</rt></ruby>",
  "暖": "<ruby>暖<rt>あたた</rt></ruby>",
  "涼": "<ruby>涼<rt>すず</rt></ruby>",
  "難": "<ruby>難<rt>むずか</rt></ruby>",
  "易": "<ruby>易<rt>やさ</rt></ruby>",
  "忙": "<ruby>忙<rt>いそが</rt></ruby>",
  "暇": "<ruby>暇<rt>ひま</rt></ruby>",
  "静": "<ruby>静<rt>しず</rt></ruby>",
  "危": "<ruby>危<rt>あぶ</rt></ruby>",
  "強": "<ruby>強<rt>つよ</rt></ruby>",
  "弱": "<ruby>弱<rt>よわ</rt></ruby>",
  "美": "<ruby>美<rt>うつく</rt></ruby>",
  "若": "<ruby>若<rt>わか</rt></ruby>",
  "甘": "<ruby>甘<rt>あま</rt></ruby>",
  "辛": "<ruby>辛<rt>から</rt></ruby>",
  "苦": "<ruby>苦<rt>にが</rt></ruby>",
  "悪": "<ruby>悪<rt>わる</rt></ruby>",
  "良": "<ruby>良<rt>よ</rt></ruby>",
  "正": "<ruby>正<rt>ただ</rt></ruby>",
  "答": "<ruby>答<rt>こた</rt></ruby>",
  "問": "<ruby>問<rt>と</rt></ruby>",
  "題": "<ruby>題<rt>だい</rt></ruby>",
  "験": "<ruby>験<rt>けん</rt></ruby>",
  "試": "<ruby>試<rt>し</rt></ruby>",
  "合": "<ruby>合<rt>あ</rt></ruby>",
  "勝": "<ruby>勝<rt>か</rt></ruby>",
  "負": "<ruby>負<rt>ま</rt></ruby>",
  "運": "<ruby>運<rt>うん / はこ</rt></ruby>",
  "転": "<ruby>転<rt>てん</rt></ruby>",
  "動": "<ruby>動<rt>どう / うご</rt></ruby>",
  "政": "<ruby>政<rt>せい</rt></ruby>",
  "治": "<ruby>治<rt>じ</rt></ruby>",
  "交": "<ruby>交<rt>こう</rt></ruby>",
  "通": "<ruby>通<rt>つう / とお</rt></ruby>",
  "意": "<ruby>意<rt>い</rt></ruby>",
  "見": "<ruby>見<rt>けん / み</rt></ruby>",
  "味": "<ruby>味<rt>み / あじ</rt></ruby>",
  "話": "<ruby>話<rt>わ / はなし</rt></ruby>",
  "語": "<ruby>語<rt>ご</rt></ruby>",
  "文": "<ruby>文<rt>ぶん</rt></ruby>",
  "字": "<ruby>字<rt>じ</rt></ruby>",
  "漢": "<ruby>漢<rt>かん</rt></ruby>",
  "化": "<ruby>化<rt>か</rt></ruby>",
  "工": "<ruby>工<rt>こう</rt></ruby>",
  "業": "<ruby>業<rt>ぎょう</rt></ruby>",
  "計": "<ruby>計<rt>けい</rt></ruby>",
  "画": "<ruby>画<rt>が / かく</rt></ruby>",
  "洋": "<ruby>洋<rt>よう</rt></ruby>",
  "和": "<ruby>和<rt>わ</rt></ruby>",
  "度": "<ruby>度<rt>ど</rt></ruby>",
  "回": "<ruby>回<rt>かい</rt></ruby>",
  "番": "<ruby>番<rt>ばん</rt></ruby>",
  "号": "<ruby>号<rt>ごう</rt></ruby>",
  "点": "<ruby>点<rt>てん</rt></ruby>",
  "線": "<ruby>線<rt>せん</rt></ruby>",
  "面": "<ruby>面<rt>めん</rt></ruby>",
  "台": "<ruby>台<rt>だい</rt></ruby>",
  "枚": "<ruby>枚<rt>まい</rt></ruby>",
  "冊": "<ruby>冊<rt>さつ</rt></ruby>",
  "歳": "<ruby>歳<rt>さい</rt></ruby>",
  "年": "<ruby>年<rt>ねん / とし</rt></ruby>",
  "月": "<ruby>月<rt>がつ / げつ / つき</rt></ruby>",
  "日": "<ruby>日<rt>にち / ひ / か</rt></ruby>",
  "時": "<ruby>時<rt>じ / とき</rt></ruby>",
  "分": "<ruby>分<rt>ふん / ぶん / わ</rt></ruby>",
  "秒": "<ruby>秒<rt>びょう</rt></ruby>",
  "週": "<ruby>週<rt>しゅう</rt></ruby>",
  "今": "<ruby>今<rt>いま / こん</rt></ruby>",
  "昨": "<ruby>昨<rt>さく / きのう</rt></ruby>",
  "明": "<ruby>明<rt>みょう / あした</rt></ruby>",
  "先": "<ruby>先<rt>せん / さき</rt></ruby>",
  "来": "<ruby>来<rt>らい / く / き</rt></ruby>",
  "去": "<ruby>去<rt>きょ / さ</rt></ruby>",
  "昼": "<ruby>昼<rt>ひる</rt></ruby>",
  "夜": "<ruby>夜<rt>よる / や</rt></ruby>",
  "朝": "<ruby>朝<rt>あさ / ちょう</rt></ruby>",
  "夕": "<ruby>夕<rt>ゆう</rt></ruby>",
  "方": "<ruby>方<rt>かた / ほう</rt></ruby>",
  "何": "<ruby>何<rt>なに / なん</rt></ruby>",
  "誰": "<ruby>誰<rt>だれ</rt></ruby>",
  "父": "<ruby>父<rt>ちち / とう</rt></ruby>",
  "母": "<ruby>母<rt>はは / かあ</rt></ruby>",
  "兄": "<ruby>兄<rt>あに / にい</rt></ruby>",
  "姉": "<ruby>姉<rt>あね / ねえ</rt></ruby>",
  "弟": "<ruby>弟<rt>おとうと</rt></ruby>",
  "妹": "<ruby>妹<rt>いもうと</rt></ruby>",
  "男": "<ruby>男<rt>おとこ / だん</rt></ruby>",
  "女": "<ruby>女<rt>おんな / じょ</rt></ruby>",
  "子": "<ruby>子<rt>こ / し</rt></ruby>",
  "人": "<ruby>人<rt>ひと / じん / にん</rt></ruby>",
  "私": "<ruby>私<rt>わたし</rt></ruby>",
  "友": "<ruby>友<rt>とも</rt></ruby>",
  "達": "<ruby>達<rt>たち</rt></ruby>",
  "親": "<ruby>親<rt>おや / しん</rt></ruby>",
  "切": "<ruby>切<rt>き / せつ</rt></ruby>",
  "元": "<ruby>元<rt>げん / もと</rt></ruby>",
  "気": "<ruby>気<rt>き</rt></ruby>",
  "有": "<ruby>有<rt>ゆう / あ</rt></ruby>",
  "名": "<ruby>名<rt>めい / な</rt></ruby>",
  "便": "<ruby>便<rt>べん / たより</rt></ruby>",
  "利": "<ruby>利<rt>り</rt></ruby>",
  "不": "<ruby>不<rt>ふ</rt></ruby>",
  "同": "<ruby>同<rt>おな / どう</rt></ruby>",
  "様": "<ruby>様<rt>さま / よう</rt></ruby>",
  "変": "<ruby>変<rt>へん / か</rt></ruby>",
  "常": "<ruby>常<rt>じょう / つね</rt></ruby>",
  "特": "<ruby>特<rt>とく</rt></ruby>",
  "別": "<ruby>別<rt>べつ / わか</rt></ruby>",
  "大": "<ruby>大<rt>だい / たい / おお</rt></ruby>",
  "小": "<ruby>小<rt>しょう / ちい</rt></ruby>",
  "高": "<ruby>高<rt>こう / たか</rt></ruby>",
  "低": "<ruby>低<rt>てい / ひく</rt></ruby>",
  "長": "<ruby>長<rt>ちょう / なが</rt></ruby>",
  "短": "<ruby>短<rt>たん / みじか</rt></ruby>",
  "重": "<ruby>重<rt>じゅう / おも</rt></ruby>",
  "軽": "<ruby>軽<rt>けい / かる</rt></ruby>",
  "早": "<ruby>早<rt>そう / はや</rt></ruby>",
  "速": "<ruby>速<rt>そく / はや</rt></ruby>",
  "遅": "<ruby>遅<rt>ち / おそ</rt></ruby>",
  "多": "<ruby>多<rt>た / おお</rt></ruby>",
  "少": "<ruby>少<rt>しょう / すく / すこ</rt></ruby>",
  "近": "<ruby>近<rt>きん / ちか</rt></ruby>",
  "遠": "<ruby>遠<rt>えん / とお</rt></ruby>",
  "新": "<ruby>新<rt>しん / あたら</rt></ruby>",
  "古": "<ruby>古<rt>こ / ふる</rt></ruby>",
  "良": "<ruby>良<rt>りょう / よ</rt></ruby>",
  "悪": "<ruby>悪<rt>あく / わる</rt></ruby>",
  "正": "<ruby>正<rt>せい / ただ</rt></ruby>",
  "直": "<ruby>直<rt>ちょく / なお</rt></ruby>",
  "真": "<ruby>真<rt>しん / ま</rt></ruby>",
  "急": "<ruby>急<rt>きゅう / いそ</rt></ruby>",
  "楽": "<ruby>楽<rt>らく / たの</rt></ruby>",
  "苦": "<ruby>苦<rt>く / くる / にが</rt></ruby>",
  "難": "<ruby>難<rt>なん / むずか</rt></ruby>",
  "易": "<ruby>易<rt>えき / やさ</rt></ruby>",
  "安": "<ruby>安<rt>あん / やす</rt></ruby>",
  "危": "<ruby>危<rt>き / あぶ</rt></ruby>",
  "険": "<ruby>険<rt>けん</rt></ruby>",
  "全": "<ruby>全<rt>ぜん / まった</rt></ruby>",
  "部": "<ruby>部<rt>ぶ</rt></ruby>",
  "屋": "<ruby>屋<rt>や</rt></ruby>",
  "室": "<ruby>室<rt>しつ</rt></ruby>",
  "堂": "<ruby>堂<rt>どう</rt></ruby>",
  "館": "<ruby>館<rt>かん</rt></ruby>",
  "場": "<ruby>場<rt>じょう / ば</rt></ruby>",
  "所": "<ruby>所<rt>しょ / ところ</rt></ruby>",
  "地": "<ruby>地<rt>ち / じ</rt></ruby>",
  "図": "<ruby>図<rt>ず / と</rt></ruby>",
  "海": "<ruby>海<rt>かい / うみ</rt></ruby>",
  "山": "<ruby>山<rt>さん / やま</rt></ruby>",
  "川": "<ruby>川<rt>せん / かわ</rt></ruby>",
  "田": "<ruby>田<rt>でん / た</rt></ruby>",
  "野": "<ruby>野<rt>や / の</rt></ruby>",
  "原": "<ruby>原<rt>げん / はら</rt></ruby>",
  "島": "<ruby>島<rt>とう / しま</rt></ruby>",
  "国": "<ruby>国<rt>こく / くに</rt></ruby>",
  "州": "<ruby>州<rt>しゅう</rt></ruby>",
  "県": "<ruby>県<rt>けん</rt></ruby>",
  "市": "<ruby>市<rt>し / いち</rt></ruby>",
  "区": "<ruby>区<rt>く</rt></ruby>",
  "町": "<ruby>町<rt>ちょう / まち</rt></ruby>",
  "村": "<ruby>村<rt>そん / むら</rt></ruby>",
  "道": "<ruby>道<rt>どう / みち</rt></ruby>",
  "路": "<ruby>路<rt>ろ / じ</rt></ruby>",
  "通": "<ruby>通<rt>つう / とお</rt></ruby>",
  "橋": "<ruby>橋<rt>きょう / はし</rt></ruby>",
  "駅": "<ruby>駅<rt>えき</rt></ruby>",
  "車": "<ruby>車<rt>しゃ / くるま</rt></ruby>",
  "船": "<ruby>船<rt>せん / ふね</rt></ruby>",
  "機": "<ruby>機<rt>き</rt></ruby>",
  "電": "<ruby>電<rt>でん</rt></ruby>",
  "話": "<ruby>話<rt>わ / はなし</rt></ruby>",
  "語": "<ruby>語<rt>ご / かた</rt></ruby>",
  "言": "<ruby>言<rt>げん / い</rt></ruby>",
  "書": "<ruby>書<rt>しょ / か</rt></ruby>",
  "読": "<ruby>読<rt>どく / よ</rt></ruby>",
  "聞": "<ruby>聞<rt>ぶん / き</rt></ruby>",
  "見": "<ruby>見<rt>けん / み</rt></ruby>",
  "食": "<ruby>食<rt>しょく / た</rt></ruby>",
  "飲": "<ruby>飲<rt>いん / の</rt></ruby>",
  "買": "<ruby>買<rt>ばい / か</rt></ruby>",
  "売": "<ruby>売<rt>ばい / う</rt></ruby>",
  "貸": "<ruby>貸<rt>たい / か</rt></ruby>",
  "借": "<ruby>借<rt>しゃく / か</rt></ruby>",
  "送": "<ruby>送<rt>そう / おく</rt></ruby>",
  "返": "<ruby>返<rt>へん / かえ</rt></ruby>",
  "払": "<ruby>払<rt>はら</rt></ruby>",
  "受": "<ruby>受<rt>じゅ / う</rt></ruby>",
  "付": "<ruby>付<rt>つ</rt></ruby>",
  "持": "<ruby>持<rt>じ / も</rt></ruby>",
  "待": "<ruby>待<rt>たい / ま</rt></ruby>",
  "立": "<ruby>立<rt>りつ / た</rt></ruby>",
  "座": "<ruby>座<rt>ざ / すわ</rt></ruby>",
  "休": "<ruby>休<rt>きゅう / やす</rt></ruby>",
  "働": "<ruby>働<rt>どう / はたら</rt></ruby>",
  "仕": "<ruby>仕<rt>し / つか</rt></ruby>",
  "事": "<ruby>事<rt>じ / こと</rt></ruby>",
  "勉": "<ruby>勉<rt>べん</rt></ruby>",
  "強": "<ruby>強<rt>きょう / つよ</rt></ruby>",
  "教": "<ruby>教<rt>きょう / おし</rt></ruby>",
  "習": "<ruby>習<rt>しゅう / なら</rt></ruby>",
  "研": "<ruby>研<rt>けん</rt></ruby>",
  "究": "<ruby>究<rt>きゅう</rt></ruby>",
  "生": "<ruby>生<rt>せい / しょう / う / い</rt></ruby>",
  "死": "<ruby>死<rt>し</rt></ruby>",
  "病": "<ruby>病<rt>びょう / やまい</rt></ruby>",
  "院": "<ruby>院<rt>いん</rt></ruby>",
  "医": "<ruby>医<rt>い</rt></ruby>",
  "者": "<ruby>者<rt>しゃ / もの</rt></ruby>",
  "体": "<ruby>体<rt>たい / からだ</rt></ruby>",
  "頭": "<ruby>頭<rt>とう / あたま</rt></ruby>",
  "顔": "<ruby>顔<rt>がん / かお</rt></ruby>",
  "首": "<ruby>首<rt>しゅ / くび</rt></ruby>",
  "心": "<ruby>心<rt>しん / こころ</rt></ruby>",
  "目": "<ruby>目<rt>もく / め</rt></ruby>",
  "耳": "<ruby>耳<rt>じ / みみ</rt></ruby>",
  "手": "<ruby>手<rt>しゅ / て</rt></ruby>",
  "足": "<ruby>足<rt>そく / あし</rt></ruby>",
  "口": "<ruby>口<rt>こう / くち</rt></ruby>",
  "歯": "<ruby>歯<rt>し / は</rt></ruby>",
  "助": "<ruby>助<rt>たす</rt></ruby>",
  "咲": "<ruby>咲<rt>さ</rt></ruby>",
  "噛": "<ruby>噛<rt>か</rt></ruby>",
  "差": "<ruby>差<rt>さ</rt></ruby>",
  "戻": "<ruby>戻<rt>もど</rt></ruby>",
  "振": "<ruby>振<rt>ふ</rt></ruby>",
  "探": "<ruby>探<rt>さが</rt></ruby>",
  "暮": "<ruby>暮<rt>く</rt></ruby>",
  "濡": "<ruby>濡<rt>ぬ</rt></ruby>",
  "焼": "<ruby>焼<rt>や</rt></ruby>",
  "祝": "<ruby>祝<rt>いわ</rt></ruby>",
  "続": "<ruby>続<rt>つづ</rt></ruby>",
  "込": "<ruby>込<rt>こ</rt></ruby>",
  "逃": "<ruby>逃<rt>に</rt></ruby>",
  "離": "<ruby>離<rt>はな</rt></ruby>",
  "預": "<ruby>預<rt>あず</rt></ruby>",
  "飛": "<ruby>飛<rt>と</rt></ruby>",
  "遣": "<ruby>遣<rt>づか</rt></ruby>",
  "言葉遣": "<ruby>言葉遣<rt>ことばづか</rt></ruby>"
};

for (const [k, v] of Object.entries(singleKanjiFallback)) {
  let cleanV = v;
  if (cleanV.includes('/')) {
    cleanV = cleanV.replace(/<rt>(.*?)<\/rt>/g, (m, p1) => `<rt>${p1.split('/')[0].trim()}</rt>`);
  }
  if (!combinedMap.has(k)) {
    combinedMap.set(k, cleanV);
  }
}

for (const [k, v] of combinedMap.entries()) {
  if (v.includes('/')) {
    const clean = v.replace(/<rt>(.*?)<\/rt>/g, (m, p1) => `<rt>${p1.split('/')[0].trim()}</rt>`);
    combinedMap.set(k, clean);
  }
}

// Remove invalid entries (no kanji in key, or empty rt, or ruby tag wrapping pure kana/latin)
for (const [k, v] of Array.from(combinedMap.entries())) {
  // Key must contain Kanji
  if (!/[\u4e00-\u9faf]/.test(k)) {
    combinedMap.delete(k);
    continue;
  }
  // All rt tags must be non-empty
  const rtMatches = v.match(/<rt>(.*?)<\/rt>/g);
  if (!rtMatches || rtMatches.some(rt => rt === '<rt></rt>' || rt === '<rt> </rt>')) {
    combinedMap.delete(k);
    continue;
  }
  // Check if any ruby tag wraps only non-kanji
  let hasBadRubyTag = false;
  const rubyTagRegex = /<ruby>(.*?)<rt>(.*?)<\/rt><\/ruby>/g;
  let rm;
  while ((rm = rubyTagRegex.exec(v)) !== null) {
    if (!/[\u4e00-\u9faf]/.test(rm[1])) {
      hasBadRubyTag = true;
      break;
    }
  }
  if (hasBadRubyTag) {
    combinedMap.delete(k);
  }
}

// Check coverage against bare_words.json again!
const bareWords = JSON.parse(fs.readFileSync('scripts/bare_words.json', 'utf8'));
let unhandled = [];
bareWords.forEach(w => {
  if (!combinedMap.has(w)) {
    unhandled.push(w);
  }
});

console.log(`Unhandled count: ${unhandled.length}`);
if (unhandled.length > 0) {
  console.log('Unhandled words:', unhandled);
}

// Convert Map to sorted array of [word, ruby] by descending word length
const sortedEntries = Array.from(combinedMap.entries()).sort((a, b) => b[0].length - a[0].length || a[0].localeCompare(b[0]));
fs.writeFileSync('scripts/compiled_ruby_dict.json', JSON.stringify(sortedEntries, null, 2), 'utf8');
console.log(`Compiled ${sortedEntries.length} dictionary entries to scripts/compiled_ruby_dict.json`);
