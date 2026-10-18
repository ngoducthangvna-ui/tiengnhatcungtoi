const fs = require('fs');

// Master map of single kanji and compounds
const comprehensiveKanjiMap = {
  // Compounds
  "可能形": "<ruby>可能形<rt>かのうけい</rt></ruby>",
  "意向形": "<ruby>意向形<rt>いこうけい</rt></ruby>",
  "命令形": "<ruby>命令形<rt>めいれいけい</rt></ruby>",
  "禁止形": "<ruby>禁止形<rt>きんしけい</rt></ruby>",
  "条件形": "<ruby>条件形<rt>じょうけんけい</rt></ruby>",
  "受身形": "<ruby>受身形<rt>うけみけい</rt></ruby>",
  "使役形": "<ruby>使役形<rt>しえきけい</rt></ruby>",
  "尊敬語": "<ruby>尊敬語<rt>そんけいご</rt></ruby>",
  "謙譲語": "<ruby>謙譲語<rt>けんじょうご</rt></ruby>",
  "丁寧語": "<ruby>丁寧語<rt>ていねいご</rt></ruby>",
  "可能性": "<ruby>可能性<rt>かのうせい</rt></ruby>",
  "管理人": "<ruby>管理人<rt>かんりにん</rt></ruby>",
  "露天風呂": "<ruby>露天風呂<rt>ろてんぶろ</rt></ruby>",
  "富士山": "<ruby>富士山<rt>ふじさん</rt></ruby>",
  "箱根": "<ruby>箱根<rt>はこね</rt></ruby>",
  "温泉": "<ruby>温泉<rt>おんせん</rt></ruby>",
  "防災訓練": "<ruby>防災訓練<rt>ぼうさいくんれん</rt></ruby>",
  "消防署": "<ruby>消防署<rt>しょうぼうしょ</rt></ruby>",
  "消火器": "<ruby>消火器<rt>しょうかき</rt></ruby>",
  "新幹線": "<ruby>新幹線<rt>しんかんせん</rt></ruby>",
  "新大阪": "<ruby>新大阪<rt>しんおおさか</rt></ruby>",
  "改札口": "<ruby>改札口<rt>かいさつぐち</rt></ruby>",
  "改札": "<ruby>改札<rt>かいさつ</rt></ruby>",
  "宇宙飛行士": "<ruby>宇宙飛行士<rt>うちゅうひこうし</rt></ruby>",
  "精神力": "<ruby>精神力<rt>せいしんりょく</rt></ruby>",
  "無重力": "<ruby>無重力<rt>むじゅうりょく</rt></ruby>",
  "お辞儀": "<ruby>お辞儀<rt>おじぎ</rt></ruby>",
  "敬礼": "<ruby>敬礼<rt>けいれい</rt></ruby>",
  "会釈": "<ruby>会釈<rt>えしゃく</rt></ruby>",
  "最敬礼": "<ruby>最敬礼<rt>さいけいれい</rt></ruby>",
  "陶芸家": "<ruby>陶芸家<rt>とうげいか</rt></ruby>",
  "陶芸作家": "<ruby>陶芸作家<rt>とうげいさっか</rt></ruby>",
  "個展": "<ruby>個展<rt>こてん</rt></ruby>",
  "お中元": "<ruby>お中元<rt>おちゅうげん</rt></ruby>",
  "お歳暮": "<ruby>お歳暮<rt>おせいぼ</rt></ruby>",
  "安藤百福": "<ruby>安藤百福<rt>あんどうももふく</rt></ruby>",
  "茶道": "<ruby>茶道<rt>さどう</rt></ruby>",
  "お茶会": "<ruby>お茶会<rt>おちゃかい</rt></ruby>",
  "お茶碗": "<ruby>お茶碗<rt>おちゃわん</rt></ruby>",
  "伝統文化": "<ruby>伝統文化<rt>でんとうぶんか</rt></ruby>",
  "紅葉": "<ruby>紅葉<rt>こうよう</rt></ruby>",
  "花見": "<ruby>花見<rt>はなみ</rt></ruby>",
  "四季": "<ruby>四季<rt>しき</rt></ruby>",
  "標識": "<ruby>標識<rt>ひょうしき</rt></ruby>",
  "安全標識": "<ruby>安全標識<rt>あんぜんひょうしき</rt></ruby>",
  "立入禁止": "<ruby>立入禁止<rt>たちいりきんし</rt></ruby>",
  "火気厳禁": "<ruby>火気厳禁<rt>かきげんきん</rt></ruby>",
  "安全第一": "<ruby>安全第一<rt>あんぜんだいいち</rt></ruby>",
  "指差し確認": "<ruby>指差<rt>ゆびさ</rt></ruby>し<ruby>確認<rt>かくにん</rt></ruby>",
  "弁護士": "<ruby>弁護士<rt>べんごし</rt></ruby>",
  "法律": "<ruby>法律<rt>ほうりつ</rt></ruby>",
  "清掃": "<ruby>清掃<rt>せいそう</rt></ruby>",
  "停電": "<ruby>停電<rt>ていでん</rt></ruby>",
  "自然災害": "<ruby>自然災害<rt>しぜんさいがい</rt></ruby>",
  "懐中電灯": "<ruby>懐中電灯<rt>かいちゅうでんとう</rt></ruby>",
  "筆者": "<ruby>筆者<rt>ひっしゃ</rt></ruby>",
  "意味": "<ruby>意味<rt>いみ</rt></ruby>",
  "理由": "<ruby>理由<rt>りゆう</rt></ruby>",
  "目的": "<ruby>目的<rt>もくてき</rt></ruby>",
  "結果": "<ruby>結果<rt>けっか</rt></ruby>",
  "原因": "<ruby>原因<rt>げんいん</rt></ruby>",
  "計画": "<ruby>計画<rt>けいかく</rt></ruby>",
  "準備": "<ruby>準備<rt>じゅんび</rt></ruby>",
  "習慣": "<ruby>習慣<rt>しゅうかん</rt></ruby>",
  "伝統": "<ruby>伝統<rt>でんとう</rt></ruby>",
  "歴史": "<ruby>歴史<rt>れきし</rt></ruby>",
  "文化": "<ruby>文化<rt>ぶんか</rt></ruby>",
  "社会": "<ruby>社会<rt>しゃかい</rt></ruby>",
  "経済": "<ruby>経済<rt>けいざい</rt></ruby>",
  "健康": "<ruby>健康<rt>けんこう</rt></ruby>",
  "生活": "<ruby>生活<rt>せいかつ</rt></ruby>",
  "経験": "<ruby>経験<rt>けいけん</rt></ruby>",
  "説明": "<ruby>説明<rt>せつめい</rt></ruby>",
  "質問": "<ruby>質問<rt>しつもん</rt></ruby>",
  "宿題": "<ruby>宿題<rt>しゅくだい</rt></ruby>",
  "試験": "<ruby>試験<rt>しけん</rt></ruby>",
  "給料": "<ruby>給料<rt>きゅうりょう</rt></ruby>",
  "残業": "<ruby>残業<rt>ざんぎょう</rt></ruby>",
  "仕事": "<ruby>仕事<rt>しごと</rt></ruby>",
  "会社": "<ruby>会社<rt>かいしゃ</rt></ruby>",
  "学校": "<ruby>学校<rt>がっこう</rt></ruby>",
  "大学": "<ruby>大学<rt>だいがく</rt></ruby>",
  "病院": "<ruby>病院<rt>びょういん</rt></ruby>",
  "銀行": "<ruby>銀行<rt>ぎんこう</rt></ruby>",
  "郵便局": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>",
  "交番": "<ruby>交番<rt>こうばん</rt></ruby>",
  "警察": "<ruby>警察<rt>けいさつ</rt></ruby>",
  "約束": "<ruby>約束<rt>やくそく</rt></ruby>",
  "時間": "<ruby>時間<rt>じかん</rt></ruby>",
  "場所": "<ruby>場所<rt>ばしょ</rt></ruby>",
  "道具": "<ruby>道具<rt>どうぐ</rt></ruby>",
  "機械": "<ruby>機械<rt>きかい</rt></ruby>",
  "電話": "<ruby>電話<rt>でんわ</rt></ruby>",
  "手紙": "<ruby>手紙<rt>てがみ</rt></ruby>",
  "写真": "<ruby>写真<rt>しゃしん</rt></ruby>",
  "部屋": "<ruby>部屋<rt>へや</rt></ruby>",
  "台所": "<ruby>台所<rt>だいどころ</rt></ruby>",
  "食堂": "<ruby>食堂<rt>しょくどう</rt></ruby>",
  "教室": "<ruby>教室<rt>きょうしつ</rt></ruby>",
  "会議室": "<ruby>会議室<rt>かいぎしつ</rt></ruby>",
  "受付": "<ruby>受付<rt>うけつけ</rt></ruby>",
  "階段": "<ruby>階段<rt>かいだん</rt></ruby>",
  "電車": "<ruby>電車<rt>でんしゃ</rt></ruby>",
  "地下鉄": "<ruby>地下鉄<rt>ちかてつ</rt></ruby>",
  "飛行機": "<ruby>飛行機<rt>ひこうき</rt></ruby>",
  "自動車": "<ruby>自動車<rt>じどうしゃ</rt></ruby>",
  "自転車": "<ruby>自転車<rt>じてんしゃ</rt></ruby>",
  "天気": "<ruby>天気<rt>てんき</rt></ruby>",
  "天気予報": "<ruby>天気予報<rt>てんきよほう</rt></ruby>",
  "台風": "<ruby>台風<rt>たいふう</rt></ruby>",
  "地震": "<ruby>地震<rt>じしん</rt></ruby>",
  "火事": "<ruby>火事<rt>かじ</rt></ruby>",
  "事故": "<ruby>事故<rt>じこ</rt></ruby>",
  "交通": "<ruby>交通<rt>こうつう</rt></ruby>",
  "安全": "<ruby>安全<rt>あんぜん</rt></ruby>",
  "危険": "<ruby>危険<rt>きけん</rt></ruby>",
  "複雑": "<ruby>複雑<rt>ふくざつ</rt></ruby>",
  "簡単": "<ruby>簡単<rt>かんたん</rt></ruby>",
  "大変": "<ruby>大変<rt>たいへん</rt></ruby>",
  "親切": "<ruby>親切<rt>しんせつ</rt></ruby>",
  "便利": "<ruby>便利<rt>べんり</rt></ruby>",
  "不便": "<ruby>不便<rt>ふべん</rt></ruby>",
  "有名": "<ruby>有名<rt>ゆうめい</rt></ruby>",
  "大切": "<ruby>大切<rt>たいせつ</rt></ruby>",
  "心配": "<ruby>心配<rt>しんぱい</rt></ruby>",
  "安心": "<ruby>安心<rt>あんしん</rt></ruby>",
  "残念": "<ruby>残念<rt>ざんねん</rt></ruby>",
  "気持ち": "<ruby>気持<rt>きも</rt></ruby>ち",
  "気分": "<ruby>気分<rt>きぶん</rt></ruby>",
  "遠慮": "<ruby>遠慮<rt>えんりょ</rt></ruby>",
  "無理": "<ruby>無理<rt>むり</rt></ruby>",
  "一生懸命": "<ruby>一生懸命<rt>いっしょうけんめい</rt></ruby>",
  "十分": "<ruby>十分<rt>じゅうぶん</rt></ruby>",
  "普通": "<ruby>普通<rt>ふつう</rt></ruby>",
  "特別": "<ruby>特別<rt>とくべつ</rt></ruby>",
  "最近": "<ruby>最近<rt>さいきん</rt></ruby>",
  "将来": "<ruby>将来<rt>しょうらい</rt></ruby>",
  "世界": "<ruby>世界<rt>せかい</rt></ruby>",

  // Single Kanji (On/Kun standard fallback)
  "可": "<ruby>可<rt>か</rt></ruby>",
  "能": "<ruby>能<rt>のう</rt></ruby>",
  "素": "<ruby>素<rt>す</rt></ruby>",
  "盆": "<ruby>盆<rt>ぼん</rt></ruby>",
  "残": "<ruby>残<rt>ざん</rt></ruby>",
  "念": "<ruby>念<rt>ねん</rt></ruby>",
  "身": "<ruby>身<rt>み</rt></ruby>",
  "進": "<ruby>進<rt>すす</rt></ruby>",
  "碗": "<ruby>碗<rt>わん</rt></ruby>",
  "壁": "<ruby>壁<rt>かべ</rt></ruby>",
  "項": "<ruby>項<rt>こう</rt></ruby>",
  "丁": "<ruby>丁<rt>ちょう</rt></ruby>",
  "自": "<ruby>自<rt>じ</rt></ruby>",
  "希": "<ruby>希<rt>き</rt></ruby>",
  "望": "<ruby>望<rt>ぼう</rt></ruby>",
  "式": "<ruby>式<rt>しき</rt></ruby>",
  "園": "<ruby>園<rt>えん</rt></ruby>",
  "向": "<ruby>向<rt>む</rt></ruby>",
  "邪": "<ruby>邪<rt>じゃ</rt></ruby>",
  "停": "<ruby>停<rt>てい</rt></ruby>",
  "星": "<ruby>星<rt>ほし</rt></ruby>",
  "写": "<ruby>写<rt>しゃ</rt></ruby>",
  "量": "<ruby>量<rt>りょう</rt></ruby>",
  "締": "<ruby>締<rt>し</rt></ruby>",
  "操": "<ruby>操<rt>そう</rt></ruby>",
  "識": "<ruby>識<rt>しき</rt></ruby>",
  "剣": "<ruby>剣<rt>けん</rt></ruby>",
  "輸": "<ruby>輸<rt>ゆ</rt></ruby>",
  "叱": "<ruby>叱<rt>しか</rt></ruby>",
  "築": "<ruby>築<rt>ちく</rt></ruby>",
  "科": "<ruby>科<rt>か</rt></ruby>",
  "石": "<ruby>石<rt>いし</rt></ruby>",
  "油": "<ruby>油<rt>ゆ</rt></ruby>",
  "料": "<ruby>料<rt>りょう</rt></ruby>",
  "辺": "<ruby>辺<rt>へん</rt></ruby>",
  "結": "<ruby>結<rt>けつ</rt></ruby>",
  "果": "<ruby>果<rt>か</rt></ruby>",
  "代": "<ruby>代<rt>だい</rt></ruby>",
  "勢": "<ruby>勢<rt>せい</rt></ruby>",
  "震": "<ruby>震<rt>しん</rt></ruby>",
  "久": "<ruby>久<rt>ひさ</rt></ruby>",
  "欠": "<ruby>欠<rt>けつ</rt></ruby>",
  "航": "<ruby>航<rt>こう</rt></ruby>",
  "穿": "<ruby>穿<rt>は</rt></ruby>",
  "裏": "<ruby>裏<rt>うら</rt></ruby>",
  "産": "<ruby>産<rt>さん</rt></ruby>",
  "法": "<ruby>法<rt>ほう</rt></ruby>",
  "幼": "<ruby>幼<rt>よう</rt></ruby>",
  "稚": "<ruby>稚<rt>ち</rt></ruby>",
  "房": "<ruby>房<rt>ぼう</rt></ruby>",
  "温": "<ruby>温<rt>おん</rt></ruby>",
  "孫": "<ruby>孫<rt>まご</rt></ruby>",
  "管": "<ruby>管<rt>かん</rt></ruby>",
  "理": "<ruby>理<rt>り</rt></ruby>",
  "歴": "<ruby>歴<rt>れき</rt></ruby>",
  "史": "<ruby>史<rt>し</rt></ruby>",
  "戦": "<ruby>戦<rt>せん</rt></ruby>",
  "争": "<ruby>争<rt>そう</rt></ruby>",
  "平": "<ruby>平<rt>へい</rt></ruby>",
  "詰": "<ruby>詰<rt>づめ</rt></ruby>",
  "材": "<ruby>材<rt>ざい</rt></ruby>",
  "倍": "<ruby>倍<rt>ばい</rt></ruby>",
  "係": "<ruby>係<rt>かかり</rt></ruby>",
  "悩": "<ruby>悩<rt>なや</rt></ruby>",
  "鳴": "<ruby>鳴<rt>な</rt></ruby>",
  "質": "<ruby>質<rt>しつ</rt></ruby>",
  "注": "<ruby>注<rt>ちゅう</rt></ruby>",
  "射": "<ruby>射<rt>しゃ</rt></ruby>",
  "予": "<ruby>予<rt>よ</rt></ruby>",
  "防": "<ruby>防<rt>ぼう</rt></ruby>",
  "術": "<ruby>術<rt>じゅつ</rt></ruby>",
  "噂": "<ruby>噂<rt>うわさ</rt></ruby>",
  "咳": "<ruby>咳<rt>せき</rt></ruby>",
  "冗": "<ruby>冗<rt>じょう</rt></ruby>",
  "談": "<ruby>談<rt>だん</rt></ruby>",
  "恋": "<ruby>恋<rt>こい</rt></ruby>",
  "婚": "<ruby>婚<rt>こん</rt></ruby>",
  "約": "<ruby>約<rt>やく</rt></ruby>",
  "均": "<ruby>均<rt>きん</rt></ruby>",
  "寿": "<ruby>寿<rt>じゅ</rt></ruby>",
  "命": "<ruby>命<rt>めい</rt></ruby>",
  "比": "<ruby>比<rt>くら</rt></ruby>",
  "博": "<ruby>博<rt>はく</rt></ruby>",
  "士": "<ruby>士<rt>し</rt></ruby>",
  "脳": "<ruby>脳<rt>のう</rt></ruby>",
  "粧": "<ruby>粧<rt>しょう</rt></ruby>",
  "品": "<ruby>品<rt>ひん</rt></ruby>",
  "満": "<ruby>満<rt>まん</rt></ruby>",
  "網": "<ruby>網<rt>あみ</rt></ruby>",
  "載": "<ruby>載<rt>の</rt></ruby>",
  "娘": "<ruby>娘<rt>むすめ</rt></ruby>",
  "用": "<ruby>用<rt>よう</rt></ruby>",
  "経": "<ruby>経<rt>けい</rt></ruby>",
  "賞": "<ruby>賞<rt>しょう</rt></ruby>",
  "尊": "<ruby>尊<rt>そん</rt></ruby>",
  "提": "<ruby>提<rt>てい</rt></ruby>",
  "示": "<ruby>示<rt>じ</rt></ruby>",
  "内": "<ruby>内<rt>ない</rt></ruby>",
  "宅": "<ruby>宅<rt>たく</rt></ruby>",
  "拝": "<ruby>拝<rt>はい</rt></ruby>",
  "淹": "<ruby>淹<rt>い</rt></ruby>",
  "再": "<ruby>再<rt>さい</rt></ruby>",
  "緊": "<ruby>緊<rt>きん</rt></ruby>",
  "張": "<ruby>張<rt>ちょう</rt></ruby>",
  "応": "<ruby>応<rt>おう</rt></ruby>",
  "援": "<ruby>援<rt>えん</rt></ruby>",
  "件": "<ruby>件<rt>けん</rt></ruby>",
  "謙": "<ruby>謙<rt>けん</rt></ruby>",
  "根": "<ruby>根<rt>ね</rt></ruby>",
  "露": "<ruby>露<rt>ろ</rt></ruby>",
  "打": "<ruby>打<rt>う</rt></ruby>",
  "退": "<ruby>退<rt>たい</rt></ruby>",
  "屈": "<ruby>屈<rt>くつ</rt></ruby>",
  "諦": "<ruby>諦<rt>あきら</rt></ruby>",
  "改": "<ruby>改<rt>かい</rt></ruby>",
  "札": "<ruby>札<rt>さつ</rt></ruby>",
  "印": "<ruby>印<rt>しるし</rt></ruby>",
  "充": "<ruby>充<rt>じゅう</rt></ruby>",
  "接": "<ruby>接<rt>せつ</rt></ruby>",
  "客": "<ruby>客<rt>きゃく</rt></ruby>",
  "技": "<ruby>技<rt>ぎ</rt></ruby>",
  "激": "<ruby>激<rt>げき</rt></ruby>",
  "実": "<ruby>実<rt>じつ</rt></ruby>",
  "標": "<ruby>標<rt>ひょう</rt></ruby>",
  "例": "<ruby>例<rt>れい</rt></ruby>",
  "看": "<ruby>看<rt>かん</rt></ruby>",
  "板": "<ruby>板<rt>ばん</rt></ruby>",
  "禁": "<ruby>禁<rt>きん</rt></ruby>",
  "班": "<ruby>班<rt>はん</rt></ruby>",
  "第": "<ruby>第<rt>だい</rt></ruby>",
  "加": "<ruby>加<rt>か</rt></ruby>",
  "縫": "<ruby>縫<rt>ぬ</rt></ruby>",
  "稼": "<ruby>稼<rt>かせ</rt></ruby>",
  "針": "<ruby>針<rt>はり</rt></ruby>",
  "統": "<ruby>統<rt>とう</rt></ruby>",
  "深": "<ruby>深<rt>ふか</rt></ruby>",
  "柔": "<ruby>柔<rt>じゅう</rt></ruby>",
  "蒸": "<ruby>蒸<rt>じょう</rt></ruby>",
  "各": "<ruby>各<rt>かく</rt></ruby>",
  "紅": "<ruby>紅<rt>こう</rt></ruby>",
  "葉": "<ruby>葉<rt>よう</rt></ruby>",
  "潟": "<ruby>潟<rt>がた</rt></ruby>",
  "梅": "<ruby>梅<rt>うめ</rt></ruby>",
  "頂": "<ruby>頂<rt>ちょう</rt></ruby>",
  "魅": "<ruby>魅<rt>み</rt></ruby>",
  "岡": "<ruby>岡<rt>おか</rt></ruby>",
  "児": "<ruby>児<rt>こ</rt></ruby>",
  "幕": "<ruby>幕<rt>まく</rt></ruby>",
  "努": "<ruby>努<rt>ど</rt></ruby>",
  "稿": "<ruby>稿<rt>こう</rt></ruby>",
  "講": "<ruby>講<rt>こう</rt></ruby>",
  "義": "<ruby>義<rt>ぎ</rt></ruby>",
  "視": "<ruby>視<rt>し</rt></ruby>",
  "藤": "<ruby>藤<rt>ふじ</rt></ruby>",
  "福": "<ruby>福<rt>ふく</rt></ruby>",
  "当": "<ruby>当<rt>とう</rt></ruby>",
  "驚": "<ruby>驚<rt>おどろ</rt></ruby>",
  "松": "<ruby>松<rt>まつ</rt></ruby>",
  "之": "<ruby>之<rt>の</rt></ruby>",
  "宗": "<ruby>宗<rt>そう</rt></ruby>",
  "郎": "<ruby>郎<rt>ろう</rt></ruby>",
  "豊": "<ruby>豊<rt>とよ</rt></ruby>",
  "域": "<ruby>域<rt>いき</rt></ruby>",
  "清": "<ruby>清<rt>せい</rt></ruby>",
  "掃": "<ruby>掃<rt>そう</rt></ruby>",
  "活": "<ruby>活<rt>かつ</rt></ruby>",
  "流": "<ruby>流<rt>りゅう</rt></ruby>",
  "介": "<ruby>介<rt>かい</rt></ruby>",
  "護": "<ruby>護<rt>ご</rt></ruby>",
  "非": "<ruby>非<rt>ひ</rt></ruby>",
  "陸": "<ruby>陸<rt>りく</rt></ruby>",
  "懐": "<ruby>懐<rt>かい</rt></ruby>",
  "灯": "<ruby>灯<rt>とう</rt></ruby>",
  "災": "<ruby>災<rt>さい</rt></ruby>",
  "害": "<ruby>害<rt>がい</rt></ruby>",
  "頃": "<ruby>頃<rt>ころ</rt></ruby>",
  "備": "<ruby>備<rt>そな</rt></ruby>",
  "積": "<ruby>積<rt>つ</rt></ruby>",
  "漏": "<ruby>漏<rt>も</rt></ruby>",
  "復": "<ruby>復<rt>ふく</rt></ruby>",
  "旧": "<ruby>旧<rt>きゅう</rt></ruby>",
  "酷": "<ruby>酷<rt>こく</rt></ruby>",
  "訓": "<ruby>訓<rt>くん</rt></ruby>",
  "練": "<ruby>練<rt>れん</rt></ruby>",
  "仲": "<ruby>仲<rt>なか</rt></ruby>",
  "精": "<ruby>精<rt>せい</rt></ruby>",
  "神": "<ruby>神<rt>しん</rt></ruby>",
  "態": "<ruby>態<rt>たい</rt></ruby>",
  "球": "<ruby>球<rt>きゅう</rt></ruby>",
  "挑": "<ruby>挑<rt>ちょう</rt></ruby>",
  "極": "<ruby>極<rt>きょく</rt></ruby>",
  "腕": "<ruby>腕<rt>うで</rt></ruby>",
  "睡": "<ruby>睡<rt>すい</rt></ruby>",
  "定": "<ruby>定<rt>てい</rt></ruby>",
  "惑": "<ruby>惑<rt>わく</rt></ruby>",
  "巨": "<ruby>巨<rt>きょ</rt></ruby>",
  "衛": "<ruby>衛<rt>えい</rt></ruby>",
  "姿": "<ruby>姿<rt>すがた</rt></ruby>",
  "贈": "<ruby>贈<rt>ぞう</rt></ruby>",
  "級": "<ruby>級<rt>きゅう</rt></ruby>",
  "商": "<ruby>商<rt>しょう</rt></ruby>",
  "券": "<ruby>券<rt>けん</rt></ruby>",
  "普": "<ruby>普<rt>ふ</rt></ruby>",
  "段": "<ruby>段<rt>だん</rt></ruby>",
  "廃": "<ruby>廃<rt>はい</rt></ruby>",
  "費": "<ruby>費<rt>ひ</rt></ruby>",
  "判": "<ruby>判<rt>はん</rt></ruby>",
  "現": "<ruby>現<rt>げん</rt></ruby>",
  "慢": "<ruby>慢<rt>まん</rt></ruby>",
  "枕": "<ruby>枕<rt>まくら</rt></ruby>",
  "雲": "<ruby>雲<rt>くも</rt></ruby>",
  "黄": "<ruby>黄<rt>き</rt></ruby>",
  "散": "<ruby>散<rt>ち</rt></ruby>",
  "溶": "<ruby>溶<rt>と</rt></ruby>",
  "虹": "<ruby>虹<rt>にじ</rt></ruby>",
  "焦": "<ruby>焦<rt>こ</rt></ruby>",
  "署": "<ruby>署<rt>しょ</rt></ruby>",
  "慌": "<ruby>慌<rt>あわ</rt></ruby>",
  "煙": "<ruby>煙<rt>けむり</rt></ruby>",
  "覆": "<ruby>覆<rt>おお</rt></ruby>",
  "器": "<ruby>器<rt>き</rt></ruby>",
  "際": "<ruby>際<rt>さい</rt></ruby>",
  "救": "<ruby>救<rt>すく</rt></ruby>",
  "槽": "<ruby>槽<rt>そう</rt></ruby>",
  "支": "<ruby>支<rt>し</rt></ruby>",
  "余": "<ruby>余<rt>よ</rt></ruby>",
  "裕": "<ruby>裕<rt>ゆう</rt></ruby>",
  "授": "<ruby>授<rt>じゅ</rt></ruby>",
  "儀": "<ruby>儀<rt>ぎ</rt></ruby>",
  "釈": "<ruby>釈<rt>しゃく</rt></ruby>",
  "敬": "<ruby>敬<rt>けい</rt></ruby>",
  "種": "<ruby>種<rt>しゅ</rt></ruby>",
  "類": "<ruby>類<rt>るい</rt></ruby>",
  "般": "<ruby>般<rt>はん</rt></ruby>",
  "的": "<ruby>的<rt>てき</rt></ruby>",
  "爽": "<ruby>爽<rt>さわ</rt></ruby>",
  "握": "<ruby>握<rt>にぎ</rt></ruby>",
  "警": "<ruby>警<rt>けい</rt></ruby>",
  "報": "<ruby>報<rt>ほう</rt></ruby>",
  "制": "<ruby>制<rt>せい</rt></ruby>",
  "採": "<ruby>採<rt>さい</rt></ruby>",
  "昇": "<ruby>昇<rt>しょう</rt></ruby>",
  "贅": "<ruby>贅<rt>ぜい</rt></ruby>",
  "沢": "<ruby>沢<rt>たく</rt></ruby>",
  "陶": "<ruby>陶<rt>とう</rt></ruby>",
  "芸": "<ruby>芸<rt>げい</rt></ruby>",
  "訪": "<ruby>訪<rt>おとず</rt></ruby>",
  "展": "<ruby>展<rt>てん</rt></ruby>",
  "演": "<ruby>演<rt>えん</rt></ruby>",
  "司": "<ruby>司<rt>し</rt></ruby>",
  "徴": "<ruby>徴<rt>ちょう</rt></ruby>",
  "診": "<ruby>診<rt>しん</rt></ruby>",
  "察": "<ruby>察<rt>さつ</rt></ruby>",
  "無重力状態": "<ruby>無重力状態<rt>むじゅうりょくじょうたい</rt></ruby>",
  "定刻通り": "<ruby>定刻通<rt>ていこくどお</rt></ruby>り",
  "状": "<ruby>状<rt>じょう</rt></ruby>",
  "刻": "<ruby>刻<rt>こく</rt></ruby>",
  "愚": "<ruby>愚<rt>ぐ</rt></ruby>",
  "痴": "<ruby>痴<rt>ち</rt></ruby>",
  "恋人": "<ruby>恋人<rt>こいびと</rt></ruby>",
  "相手": "<ruby>相手<rt>あいて</rt></ruby>",
  "平均寿命": "<ruby>平均寿命<rt>へいきんじゅみょう</rt></ruby>",
  "化粧品": "<ruby>化粧品<rt>けしょうひん</rt></ruby>",
  "目覚まし時計": "<ruby>目覚<rt>めざ</rt></ruby>まし<ruby>時計<rt>どけい</rt></ruby>",
  "領収書": "<ruby>領収書<rt>りょうしゅうしょ</rt></ruby>",
  "保証書": "<ruby>保証書<rt>ほしょうしょ</rt></ruby>",
  "小学生": "<ruby>小学生<rt>しょうがくせい</rt></ruby>",
  "生徒": "<ruby>生徒<rt>せいと</rt></ruby>",
  "習字": "<ruby>習字<rt>しゅうじ</rt></ruby>",
  "世話": "<ruby>世話<rt>せわ</rt></ruby>",
  "録音": "<ruby>録音<rt>ろくおん</rt></ruby>",
  "旅館": "<ruby>旅館<rt>りょかん</rt></ruby>",
  "奥様": "<ruby>奥様<rt>おくさま</rt></ruby>",
  "経歴": "<ruby>経歴<rt>けいれき</rt></ruby>",
  "医学部": "<ruby>医学部<rt>いがくぶ</rt></ruby>",
  "博物館": "<ruby>博物館<rt>はくぶつかん</rt></ruby>",
  "賞金": "<ruby>賞金<rt>しょうきん</rt></ruby>",
  "感謝": "<ruby>感謝<rt>かんしゃ</rt></ruby>",
  "応援": "<ruby>応援<rt>おうえん</rt></ruby>",
  "緊張": "<ruby>緊張<rt>きんちょう</rt></ruby>",
  "案内": "<ruby>案内<rt>あんない</rt></ruby>",
  "拝見": "<ruby>拝見<rt>はいけん</rt></ruby>"
};

// Merge into full_ruby_dict
const dictPath = 'scripts/full_ruby_dict.json';
const existingDict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));
const map = new Map();

for (const [k, v] of existingDict) {
  map.set(k, v);
}

for (const [k, v] of Object.entries(comprehensiveKanjiMap)) {
  map.set(k, v);
}

const updatedDict = Array.from(map.entries())
  .filter(([k, v]) => /[\u4e00-\u9faf]/.test(k) && v.includes('<ruby>') && !v.includes('<rt></rt>'))
  .sort((a, b) => b[0].length - a[0].length);

fs.writeFileSync(dictPath, JSON.stringify(updatedDict, null, 2), 'utf8');
console.log(`Updated dictionary now has ${updatedDict.length} sorted entries.`);

// Annotation function
function annotateRuby(text) {
  if (!text || typeof text !== 'string') return text;
  
  const tokenMap = new Map();
  let counter = 0;
  
  // Protect existing <ruby>...</ruby>
  let current = text.replace(/<ruby>[\s\S]*?<\/ruby>/g, match => {
    const ph = `§§§RUBY_${counter++}§§§`;
    tokenMap.set(ph, match);
    return ph;
  });
  
  // Match dictionary entries (longest first)
  for (let i = 0; i < updatedDict.length; i++) {
    const word = updatedDict[i][0];
    const rubyTag = updatedDict[i][1];
    if (current.includes(word)) {
      const ph = `§§§RUBY_${counter++}§§§`;
      tokenMap.set(ph, rubyTag);
      current = current.split(word).join(ph);
    }
  }
  
  // Restore all placeholders
  current = current.replace(/§§§RUBY_(\d+)§§§/g, (match) => {
    return tokenMap.get(match) || match;
  });
  
  return current;
}

function findBareKanji(text) {
  if (!text) return [];
  const stripped = text.replace(/<ruby>[\s\S]*?<\/ruby>/g, '');
  return stripped.match(/[\u4e00-\u9faf]/g) || [];
}

// 1. Process all 10 Quiz files (quizzes 1 to 50)
const allQuizFiles = [
  { file: 'data/quizzes_1_5.js', varName: 'quizzes_1_5' },
  { file: 'data/quizzes_6_10.js', varName: 'quizzes_6_10' },
  { file: 'data/quizzes_11_15.js', varName: 'quizzes_11_15' },
  { file: 'data/quizzes_16_20.js', varName: 'quizzes_16_20' },
  { file: 'data/quizzes_21_25.js', varName: 'quizzes_21_25' },
  { file: 'data/quizzes_26_30.js', varName: 'quizzes_26_30' },
  { file: 'data/quizzes_31_35.js', varName: 'quizzes_31_35' },
  { file: 'data/quizzes_36_40.js', varName: 'quizzes_36_40' },
  { file: 'data/quizzes_41_45.js', varName: 'quizzes_41_45' },
  { file: 'data/quizzes_46_50.js', varName: 'quizzes_46_50' }
];

allQuizFiles.forEach(({ file, varName }) => {
  const code = fs.readFileSync(file, 'utf8');
  let qObj;
  eval(code.replace(new RegExp(`const\\s+${varName}\\s*=`), 'qObj ='));

  for (const [quizId, qList] of Object.entries(qObj)) {
    qList.forEach(q => {
      q.question = annotateRuby(q.question);
      q.options = q.options.map(opt => annotateRuby(opt));
    });
  }

  const out = `// Quizzes for ${varName} (100% Annotated Furigana)\nconst ${varName} = ${JSON.stringify(qObj, null, 2)};\n`;
  fs.writeFileSync(file, out, 'utf8');
});

// 2. Process data/dokkai.js
const dokkaiPath = 'data/dokkai.js';
const dContent = fs.readFileSync(dokkaiPath, 'utf8');
let dokkaiList;
eval(dContent.replace('const dokkaiData =', 'dokkaiList ='));

dokkaiList.forEach(d => {
  d.passage = annotateRuby(d.passage);
  d.questions.forEach(q => {
    q.question = annotateRuby(q.question);
    q.options = q.options.map(opt => annotateRuby(opt));
  });
});

const dokkaiOut = `// Dữ liệu 50 bài đọc hiểu theo giáo trình Minna no Nihongo (Bài 1 - 50)\nconst dokkaiData = ${JSON.stringify(dokkaiList, null, 2)};\n`;
fs.writeFileSync(dokkaiPath, dokkaiOut, 'utf8');

// 3. Complete Verification
console.log('=== VERIFICATION OF ALL 50 QUIZZES & 50 DOKKAI ===');
let totalBare = 0;

allQuizFiles.forEach(({ file, varName }) => {
  const code = fs.readFileSync(file, 'utf8');
  let qObj;
  eval(code.replace(new RegExp(`const\\s+${varName}\\s*=`), 'qObj ='));
  let bareQ = 0, bareOpt = 0;

  for (const [quizId, qList] of Object.entries(qObj)) {
    qList.forEach(q => {
      const bQ = findBareKanji(q.question);
      if (bQ.length) bareQ++;
      q.options.forEach(opt => {
        const bO = findBareKanji(opt);
        if (bO.length) bareOpt++;
      });
    });
  }
  totalBare += (bareQ + bareOpt);
  console.log(`${varName}: Questions bare = ${bareQ}, Options bare = ${bareOpt}`);
});

let dokkaiBarePassage = 0, dokkaiBareQ = 0, dokkaiBareOpt = 0;
const dCheck = fs.readFileSync(dokkaiPath, 'utf8');
let dCheckList;
eval(dCheck.replace('const dokkaiData =', 'dCheckList ='));

dCheckList.forEach(d => {
  if (findBareKanji(d.passage).length) dokkaiBarePassage++;
  d.questions.forEach(q => {
    if (findBareKanji(q.question).length) dokkaiBareQ++;
    q.options.forEach(opt => {
      if (findBareKanji(opt).length) dokkaiBareOpt++;
    });
  });
});
totalBare += (dokkaiBarePassage + dokkaiBareQ + dokkaiBareOpt);
console.log(`Dokkai: Passages bare = ${dokkaiBarePassage}, Questions bare = ${dokkaiBareQ}, Options bare = ${dokkaiBareOpt}`);
console.log(`TOTAL BARE KANJI COUNT: ${totalBare}`);
