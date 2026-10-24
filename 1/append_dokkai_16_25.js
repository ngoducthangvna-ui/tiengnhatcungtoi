const fs = require('fs');
const path = require('path');

const dokkai16_25 = [
  {
    id: "dokkai-16",
    lessonId: "bai-16",
    title: "Bài Đọc Hiểu - Bài 16 Minna",
    subTitle: "京都への 旅 (Chuyến du lịch Kyoto)",
    description: "Đoạn văn miêu tả chi tiết hành trình khám phá cố đô Kyoto, cách thức di chuyển và trải nghiệm ngắm cảnh chùa chiền ẩm thực.",
    passage: "先週の <ruby>土曜日<rt>どようび</rt></ruby>、わたしは <ruby>友達<rt>ともだち</rt></ruby>の マリアさんと <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。\n<ruby>朝<rt>あさ</rt></ruby> 6<ruby>時<rt>じ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きて、シャワーを <ruby>浴<rt>あ</rt></ruby>びて、<ruby>朝<rt>あさ</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べました。それから <ruby>東京<rt>とうきょう</rt></ruby><ruby>駅<rt>えき</rt></ruby>へ <ruby>行<rt>い</rt></ruby>って、<ruby>新幹線<rt>しんかんせん</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りました。\n\n<ruby>京都<rt>きょうと</rt></ruby><ruby>駅<rt>えき</rt></ruby>に <ruby>着<rt>つ</rt></ruby>いてから、まず <ruby>観光<rt>かんこう</rt></ruby><ruby>案内所<rt>あんないじょ</rt></ruby>で 地図を もらいました。<ruby>京都<rt>きょうと</rt></ruby><ruby>駅<rt>えき</rt></ruby><ruby>前<rt>まえ</rt></ruby>から 市バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>金閣寺<rt>きんかくじ</rt></ruby><ruby>道<rt>みち</rt></ruby>で <ruby>降<rt>お</rt></ruby>りました。\n<ruby>金閣寺<rt>きんかくじ</rt></ruby>は <ruby>金<rt>きん</rt></ruby>色で、とても きれいでした。<ruby>庭<rt>にわ</rt></ruby>は <ruby>緑<rt>みどり</rt></ruby>が <ruby>多<rt>おお</rt></ruby>くて、<ruby>静<rt>しず</rt></ruby>かでした。\n\nそれから <ruby>近<rt>ちか</rt></ruby>くの レストランで <ruby>京都<rt>きょうと</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました。<ruby>料理<rt>りょうり</rt></ruby>は <ruby>安<rt>やす</rt></ruby>くて、とても おいしかったです。<ruby>店<rt>みせ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は <ruby>親切<rt>しんせつ</rt></ruby>で、<ruby>親切<rt>しんせつ</rt></ruby>に <ruby>道<rt>みち</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて くれました。<ruby>京都<rt>きょうと</rt></ruby>は <ruby>古<rt>ふる</rt></ruby>くて、おもしろい <ruby>町<rt>まち</rt></ruby>です。",
    questions: [
      {
        id: "dk16-1",
        question: "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>東京<rt>とうきょう</rt></ruby><ruby>駅<rt>えき</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く まえに、<ruby>何<rt>なに</rt></ruby>を しましたか。",
        options: [
          "シャワーを <ruby>浴<rt>あ</rt></ruby>びて、<ruby>朝<rt>あさ</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べた",
          "地図を <ruby>買<rt>か</rt></ruby>った",
          "<ruby>金閣寺<rt>きんかくじ</rt></ruby>を <ruby>見<rt>み</rt></ruby>た",
          "<ruby>新幹線<rt>しんかんせん</rt></ruby>の <ruby>切符<rt>きっぷ</rt></ruby>を <ruby>買<rt>か</rt></ruby>った"
        ],
        correctIdx: 0,
        explanation: "Trong bài viết:「朝 6時に 起きて、シャワーを 浴びて、朝ごはんを 食べました。それから 東京駅へ 行って...」"
      },
      {
        id: "dk16-2",
        question: "<ruby>京都<rt>きょうと</rt></ruby><ruby>駅<rt>えき</rt></ruby>に <ruby>着<rt>つ</rt></ruby>いてから、まず <ruby>何<rt>なに</rt></ruby>を しましたか。",
        options: [
          "<ruby>観光<rt>かんこう</rt></ruby><ruby>案内所<rt>あんないじょ</rt></ruby>で 地図を もらった",
          "バスに <ruby>乗<rt>の</rt></ruby>った",
          "<ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べた",
          "ホテルに <ruby>行<rt>い</rt></ruby>った"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「京都駅に 着いてから、まず 観光案内所で 地図を もらいました。」"
      },
      {
        id: "dk16-3",
        question: "<ruby>金閣寺<rt>きんかくじ</rt></ruby>へ どうやって <ruby>行<rt>い</rt></ruby>きましたか。",
        options: [
          "<ruby>京都<rt>きょうと</rt></ruby><ruby>駅<rt>えき</rt></ruby><ruby>前<rt>まえ</rt></ruby>から 市バスに <ruby>乗<rt>の</rt></ruby>って <ruby>行<rt>い</rt></ruby>った",
          "<ruby>新幹線<rt>しんかんせん</rt></ruby>で <ruby>行<rt>い</rt></ruby>った",
          "タクシーで <ruby>行<rt>い</rt></ruby>った",
          "<ruby>歩<rt>ある</rt></ruby>いて <ruby>行<rt>い</rt></ruby>った"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「京都駅前から 市バスに 乗って、金閣寺道で 降りました。」"
      },
      {
        id: "dk16-4",
        question: "<ruby>金閣寺<rt>きんかくじ</rt></ruby>の <ruby>庭<rt>にわ</rt></ruby>は どうでしたか。",
        options: [
          "<ruby>緑<rt>みどり</rt></ruby>が <ruby>多<rt>おお</rt></ruby>くて、<ruby>静<rt>しず</rt></ruby>かだった",
          "にぎやかで、<ruby>狭<rt>せま</rt></ruby>かった",
          "<ruby>人<rt>ひと</rt></ruby>が <ruby>少<rt>すく</rt></ruby>なくて、<ruby>暗<rt>くら</rt></ruby>かった",
          "<ruby>新<rt>あたら</rt></ruby>しくて、<ruby>広<rt>ひろ</rt></ruby>かった"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「庭は 緑が 多くて、静かでした。」"
      },
      {
        id: "dk16-5",
        question: "<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        options: [
          "<ruby>京都<rt>きょうと</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>は <ruby>安<rt>やす</rt></ruby>くて おいしかった",
          "レストランの <ruby>料理<rt>りょうり</rt></ruby>は とても <ruby>高<rt>たか</rt></ruby>かった",
          "<ruby>金閣寺<rt>きんかくじ</rt></ruby>は <ruby>白<rt>しろ</rt></ruby>い <ruby>色<rt>いろ</rt></ruby>の <ruby>建物<rt>たてもの</rt></ruby>である",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は 1<ruby>人<rt>ひとり</rt></ruby>で <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>った"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「料理は 安くて、とても おいしかったです。」 Đi cùng bạn Maria."
      }
    ]
  },
  {
    id: "dokkai-17",
    lessonId: "bai-17",
    title: "Bài Đọc Hiểu - Bài 17 Minna",
    subTitle: "病院での ルールと 先生の アドバイス (Lời khuyên của bác sĩ)",
    description: "Bài đọc về trải nghiệm đi khám tại bệnh viện Nhật Bản, các quy định và hướng dẫn uống thuốc.",
    passage: "わたしは <ruby>昨日<rt>きのう</rt></ruby>から <ruby>熱<rt>ねつ</rt></ruby>が あって、<ruby>頭<rt>あたま</rt></ruby>と のどが <ruby>痛<rt>いた</rt></ruby>かったです。それで <ruby>今日<rt>きょう</rt></ruby>の <ruby>午前中<rt>ごぜんちゅう</rt></ruby>に さくら<ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。\n\n<ruby>病院<rt>びょういん</rt></ruby>の <ruby>受付<rt>うけつけ</rt></ruby>で「<ruby>保険証<rt>ほけんしょう</rt></ruby>を <ruby>出<rt>だ</rt></ruby>してください」と <ruby>言<rt>い</rt></ruby>われました。<ruby>保険証<rt>ほけんしょう</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れないで <ruby>持<rt>も</rt></ruby>って <ruby>来<rt>き</rt></ruby>ましたから、すぐに <ruby>出<rt>だ</rt></ruby>す ことが できました。\n\n<ruby>医者<rt>いしゃ</rt></ruby>の <ruby>先生<rt>せんせい</rt></ruby>は「かぜですね。<ruby>薬<rt>くすり</rt></ruby>を <ruby>出<rt>だ</rt></ruby>しますから、1<ruby>日<rt>にち</rt></ruby>に 3<ruby>回<rt>かい</rt></ruby>、ごはんを <ruby>食<rt>た</rt></ruby>べてから <ruby>飲<rt>の</rt></ruby>んでください。<ruby>今日<rt>きょう</rt></ruby>は お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らないで、<ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>てください。<ruby>明日<rt>あした</rt></ruby>は <ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>かなくても いいですよ」と <ruby>言<rt>い</rt></ruby>いました。\nまた、「<ruby>金曜日<rt>きんようび</rt></ruby>までに もう <ruby>一度<rt>いちど</rt></ruby> <ruby>来<rt>き</rt></ruby>てください」と <ruby>言<rt>い</rt></ruby>われました。<ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>んで、<ruby>家<rt>いえ</rt></ruby>で ゆっくり <ruby>休<rt>やす</rt></ruby>みます。",
    questions: [
      {
        id: "dk17-1",
        question: "<ruby>筆者<rt>ひっしゃ</rt></ruby>は どうして <ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きましたか。",
        options: [
          "<ruby>熱<rt>ねつ</rt></ruby>が あって、<ruby>頭<rt>あたま</rt></ruby>と のどが <ruby>痛<rt>いた</rt></ruby>かったから",
          "<ruby>足<rt>あし</rt></ruby>を <ruby>怪我<rt>けが</rt></ruby>したから",
          "<ruby>友達<rt>ともだち</rt></ruby>に <ruby>会<rt>あ</rt></ruby>うため",
          "<ruby>保険証<rt>ほけんしょう</rt></ruby>を <ruby>買<rt>か</rt></ruby>うため"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「熱が あって、頭と のどが 痛かったです。」"
      },
      {
        id: "dk17-2",
        question: "<ruby>受付<rt>うけつけ</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を <ruby>出<rt>だ</rt></ruby>しましたか。",
        options: [
          "<ruby>保険証<rt>ほけんしょう</rt></ruby>",
          "パスポート",
          "お金だけ",
          "<ruby>薬<rt>くすり</rt></ruby>"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「保険証を 出してくださいと言われました... すぐに 出すことが できました。」"
      },
      {
        id: "dk17-3",
        question: "<ruby>薬<rt>くすり</rt></ruby>は いつ <ruby>飲<rt>の</rt></ruby>まなければ なりませんか。",
        options: [
          "1<ruby>日<rt>にち</rt></ruby>に 3<ruby>回<rt>かい</rt></ruby>、ごはんを <ruby>食<rt>た</rt></ruby>べてから",
          "1<ruby>日<rt>にち</rt></ruby>に 1<ruby>回<rt>かい</rt></ruby>、<ruby>寝<rt>ね</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に",
          "ごはんを <ruby>食<rt>た</rt></ruby>べる <ruby>前<rt>まえ</rt></ruby>に 2<ruby>回<rt>かい</rt></ruby>",
          "お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ったあと"
        ],
        correctIdx: 0,
        explanation: "Bác sĩ dặn:「1日に 3回、ごはんを 食べてから 飲んでください。」"
      },
      {
        id: "dk17-4",
        question: "<ruby>医者<rt>いしゃ</rt></ruby>の アドバイスについて、<ruby>正<rt>ただ</rt></ruby>しい ものは どれですか。",
        options: [
          "<ruby>今日<rt>きょう</rt></ruby>は お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らないで、<ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>ること",
          "<ruby>今日<rt>きょう</rt></ruby> お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らなければ ならない",
          "<ruby>明日<rt>あした</rt></ruby> <ruby>必<rt>かなら</rt></ruby>ず <ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>かなければ ならない",
          "<ruby>来週<rt>らいしゅう</rt></ruby>まで <ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>んでは いけない"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「今日はお風呂に入らないで、早く寝てください。」"
      },
      {
        id: "dk17-5",
        question: "<ruby>筆者<rt>ひっしゃ</rt></ruby>は いつまでに もう <ruby>一度<rt>いちど</rt></ruby> <ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>かなければ なりませんか。",
        options: [
          "<ruby>金曜日<rt>きんようび</rt></ruby>までに",
          "<ruby>明日<rt>あした</rt></ruby>までに",
          "<ruby>日曜日<rt>にちようび</rt></ruby>までに",
          "<ruby>来月<rt>らいげつ</rt></ruby>までに"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「金曜日までに もう 一度 来てください」と 言われました."
      }
    ]
  },
  {
    id: "dokkai-18",
    lessonId: "bai-18",
    title: "Bài Đọc Hiểu - Bài 18 Minna",
    subTitle: "私の 趣味と できること (Sở thích và năng lực)",
    description: "Đoạn văn tự giới thiệu về sở thích, các kỹ năng cá nhân và thói quen sinh hoạt hàng ngày.",
    passage: "わたしの <ruby>名前<rt>なまえ</rt></ruby>は ワンです。<ruby>中国<rt>ちゅうごく</rt></ruby>から <ruby>来<rt>き</rt></ruby>ました。<ruby>日本<rt>にほん</rt></ruby>に <ruby>来<rt>き</rt></ruby>てから 1<ruby>年<rt>ねん</rt></ruby>に なります。\n\nわたしの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>ることと、ピアノを <ruby>弾<rt>ひ</rt></ruby>くことです。<ruby>子<rt>こ</rt></ruby>どもの ときから ピアノを <ruby>練習<rt>れんしゅう</rt></ruby>しましたから、<ruby>難<rt>むずか</rt></ruby>しい <ruby>曲<rt>きょく</rt></ruby>も <ruby>弾<rt>ひ</rt></ruby>く ことが できます。\nスポーツも <ruby>好<rt>す</rt></ruby>きです。プールで 50メートル <ruby>泳<rt>およ</rt></ruby>ぐ ことが できます。でも、スキーは できません。まだ <ruby>一度<rt>いちど</rt></ruby>も やった ことが ありませんから、今年の <ruby>冬<rt>ふゆ</rt></ruby> ぜひ スキー場へ <ruby>行<rt>い</rt></ruby>きたいです。\n\nわたしは <ruby>毎晩<rt>まいばん</rt></ruby> <ruby>寝<rt>ね</rt></ruby>る まえに、<ruby>日本語<rt>にほんご</rt></ruby>で <ruby>日記<rt>にっき</rt></ruby>を <ruby>書<rt>か</rt></ruby>いて います。<ruby>始<rt>はじ</rt></ruby>めは なかなか <ruby>漢字<rt>かんじ</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す ことが できませんでしたが、<ruby>最近<rt>さいきん</rt></ruby>は たくさん <ruby>書<rt>か</rt></ruby>けるように なりました。<ruby>将来<rt>しょうらい</rt></ruby>は <ruby>日本<rt>にほん</rt></ruby>の <ruby>会社<rt>かいしゃ</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>きたいです。",
    questions: [
      {
        id: "dk18-1",
        question: "ワンさんの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。",
        options: [
          "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>ることと ピアノを <ruby>弾<rt>ひ</rt></ruby>くこと",
          "スキーと 水泳",
          "<ruby>日記<rt>にっき</rt></ruby>を <ruby>読<rt>よ</rt></ruby>むこと",
          "<ruby>旅行<rt>りょこう</rt></ruby>すること"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「趣味は 写真を 撮ることと、ピアノを 弾くことです。」"
      },
      {
        id: "dk18-2",
        question: "ワンさんが できない スポーツは どれですか。",
        options: [
          "スキー",
          "<ruby>水泳<rt>すいえい</rt></ruby> (泳ぐこと)",
          "ジョギング",
          "サッカー"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「でも、スキーは できません。」"
      },
      {
        id: "dk18-3",
        question: "今年の <ruby>冬<rt>ふゆ</rt></ruby>、ワンさんは <ruby>何<rt>なに</rt></ruby>を したいですか。",
        options: [
          "ぜひ スキー場へ <ruby>行<rt>い</rt></ruby>きたい",
          "<ruby>国<rt>くに</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>りたい",
          "ピアノを <ruby>買<rt>か</rt></ruby>いたい",
          "<ruby>会社<rt>かいしゃ</rt></ruby>を <ruby>辞<rt>や</rt></ruby>めたい"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「今年の 冬 ぜひ スキー場へ 行きたいです。」"
      },
      {
        id: "dk18-4",
        question: "ワンさんは <ruby>毎晩<rt>まいばん</rt></ruby> <ruby>寝<rt>ね</rt></ruby>る まえに、<ruby>何<rt>なに</rt></ruby>を して いますか。",
        options: [
          "<ruby>日本語<rt>にほんご</rt></ruby>で <ruby>日記<rt>にっき</rt></ruby>を <ruby>書<rt>か</rt></ruby>いて いる",
          "ピアノを <ruby>弾<rt>ひ</rt></ruby>いて いる",
          "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>整理<rt>せいり</rt></ruby>して いる",
          "<ruby>中国<rt>ちゅうごく</rt></ruby>の <ruby>家族<rt>かぞく</rt></ruby>に <ruby>電話<rt>でんわ</rt></ruby>して いる"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「毎晩 寝る まえに、日本語で 日記を 書いて います。」"
      },
      {
        id: "dk18-5",
        question: "<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        options: [
          "ワンさんは <ruby>難<rt>むずか</rt></ruby>しい <ruby>曲<rt>きょく</rt></ruby>の ピアノも <ruby>弾<rt>ひ</rt></ruby>く ことが できる",
          "ワンさんは <ruby>泳<rt>およ</rt></ruby>ぐ ことが できない",
          "ワンさんは スキーを <ruby>何回<rt>なんかい</rt></ruby>も した ことが ある",
          "ワンさんは <ruby>漢字<rt>かんじ</rt></ruby>が <ruby>全<rt>まった</rt></ruby>く <ruby>書<rt>か</rt></ruby>けない"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「子どもの ときから ピアノを 練習しましたから、難しい 曲も 弾く ことが できます。」"
      }
    ]
  },
  {
    id: "dokkai-19",
    lessonId: "bai-19",
    title: "Bài Đọc Hiểu - Bài 19 Minna",
    subTitle: "日本での 初めての 体験 (Những trải nghiệm đầu tiên tại Nhật)",
    description: "Bài đọc chia sẻ về trải nghiệm leo núi Phú Sĩ ngắm bình minh và ngâm suối nước nóng Onsen.",
    passage: "わたしは <ruby>去年<rt>きょねん</rt></ruby>の <ruby>夏<rt>なつ</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>りました。<ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>った ことが ありませんでしたから、とても わくわくしました。\n<ruby>夜<rt>よる</rt></ruby>から <ruby>登<rt>のぼ</rt></ruby>り<ruby>始<rt>はじ</rt></ruby>めました。だんだん <ruby>寒<rt>さむ</rt></ruby>く なって、<ruby>体<rt>からだ</rt></ruby>も <ruby>疲<rt>つか</rt></ruby>れましたが、<ruby>山頂<rt>さんちょう</rt></ruby>で <ruby>見<rt>み</rt></ruby>た <ruby>太陽<rt>たいよう</rt></ruby>は とても 美しかったです。\n\nそれから、<ruby>山<rt>やま</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くの <ruby>温泉<rt>おんせん</rt></ruby>旅館に <ruby>泊<rt>と</rt></ruby>まりました。<ruby>温泉<rt>おんせん</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ったり、おいしい 和食を <ruby>食<rt>た</rt></ruby>べたり しました。<ruby>浴衣<rt>ゆかた</rt></ruby>を <ruby>着<rt>き</rt></ruby>て、<ruby>写真<rt>しゃしん</rt></ruby>も たくさん <ruby>撮<rt>と</rt></ruby>りました。\n<ruby>温泉<rt>おんせん</rt></ruby>の おかげで、<ruby>体<rt>からだ</rt></ruby>の <ruby>調子<rt>ちょうし</rt></ruby>が すっかり <ruby>良<rt>よ</rt></ruby>く なりました。\n\n休みの <ruby>日<rt>ひ</rt></ruby>は、<ruby>部屋<rt>へや</rt></ruby>を <ruby>掃除<rt>そうじ</rt></ruby>したり、<ruby>洗濯<rt>せんたく</rt></ruby>したり する ことが <ruby>多<rt>おお</rt></ruby>いですが、ときどき <ruby>遠<rt>とお</rt></ruby>くへ <ruby>出<rt>で</rt></ruby>かけて、<ruby>新<rt>あたら</rt></ruby>しい <ruby>体験<rt>たいけん</rt></ruby>を したいです。",
    questions: [
      {
        id: "dk19-1",
        question: "<ruby>筆者<rt>ひっしゃ</rt></ruby>は いつ <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>りましたか。",
        options: [
          "<ruby>去年<rt>きょねん</rt></ruby>の <ruby>夏<rt>なつ</rt></ruby>",
          "今年の <ruby>春<rt>はる</rt></ruby>",
          "3年まえの <ruby>冬<rt>ふゆ</rt></ruby>",
          "<ruby>先週<rt>せんしゅう</rt></ruby>の <ruby>秋<rt>あき</rt></ruby>"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「去年の 夏、友達と 一緒に 富士山に 登りました。」"
      },
      {
        id: "dk19-2",
        question: "<ruby>山頂<rt>さんちょう</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を <ruby>見<rt>み</rt></ruby>ましたか。",
        options: [
          "とても 美しい <ruby>太陽<rt>たいよう</rt></ruby> (日の出)",
          "<ruby>大<rt>おお</rt></ruby>きい <ruby>月<rt>つき</rt></ruby>",
          "<ruby>雪<rt>ゆき</rt></ruby>の <ruby>景色<rt>けしき</rt></ruby>",
          "<ruby>東京<rt>とうきょう</rt></ruby>タワー"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「山頂で 見た 太陽は とても 美しかったです。」"
      },
      {
        id: "dk19-3",
        question: "<ruby>温泉<rt>おんせん</rt></ruby>旅館で <ruby>何<rt>なに</rt></ruby>を しましたか。",
        options: [
          "<ruby>温泉<rt>おんせん</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ったり 和食を <ruby>食<rt>た</rt></ruby>べたりした",
          "スキーを 練習した",
          "<ruby>仕事<rt>しごと</rt></ruby>の レポートを <ruby>書<rt>か</rt></ruby>いた",
          "部屋の 掃除をした"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「温泉に 入ったり、おいしい 和食を 食べたり しました。」"
      },
      {
        id: "dk19-4",
        question: "<ruby>温泉<rt>おんせん</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ってから、<ruby>体<rt>からだ</rt></ruby>は どう なりましたか。",
        options: [
          "<ruby>体<rt>からだ</rt></ruby>の <ruby>調子<rt>ちょうし</rt></ruby>が すっかり <ruby>良<rt>よ</rt></ruby>く なった",
          "もっと <ruby>疲<rt>つか</rt></ruby>れて <ruby>熱<rt>ねつ</rt></ruby>が <ruby>出<rt>で</rt></ruby>た",
          "<ruby>眠<rt>ねむ</rt></ruby>く ならなかった",
          "<ruby>足<rt>あし</rt></ruby>が <ruby>痛<rt>いた</rt></ruby>く なった"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「温泉の おかげで、体の 調子が すっかり 良く なりました。」"
      },
      {
        id: "dk19-5",
        question: "<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        options: [
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は 富士山に 登るまえ、一度も 富士山に 登った ことが なかった",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は 昼から 富士山に 登り始めた",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は 浴衣が 嫌いである",
          "旅館の 料理は まずかった"
        ],
        correctIdx: 0,
        explanation: "Trong bài viết:「富士山に 登った ことが ありませんでしたから、とても わくわくしました。」 (Chưa từng leo trước đó)."
      }
    ]
  },
  {
    id: "dokkai-20",
    lessonId: "bai-20",
    title: "Bài Đọc Hiểu - Bài 20 Minna",
    subTitle: "友達との 会話と 日本の 生活 (Trò chuyện cùng bạn bè)",
    description: "Đoạn đối thoại thân mật (thể thông thường 普通体) giữa hai người bạn về kế hoạch cuối tuần và ấn tượng sống ở Tokyo.",
    passage: "タナカ：ミラー君、今度の <ruby>日曜日<rt>にちようび</rt></ruby> <ruby>暇<rt>ひま</rt></ruby>？\nミラー：うん、<ruby>特<rt>とく</rt></ruby>に <ruby>予定<rt>よてい</rt></ruby>は ないよ。どうして？\nタナカ：銀座で おもしろい <ruby>写真<rt>しゃしん</rt></ruby>の <ruby>展覧会<rt>てんらんかい</rt></ruby>が あるんだ。よかったら、<ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>行<rt>い</rt></ruby>かない？\nミラー：いいね。ぜひ <ruby>行<rt>い</rt></ruby>きたい。<ruby>何時<rt>なんじ</rt></ruby>に どこで 会う？\nタナカ：10時に 銀座駅の <ruby>改札口<rt>かいさつぐち</rt></ruby>で どう？\nミラー：分かった。あ、その <ruby>後<rt>あと</rt></ruby>で どこかで <ruby>昼<rt>ひる</rt></ruby>ごはん 食べない？\nタナカ：うん、銀座に おいしい ラーメン屋が あるよ。<ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>いけど、すごく 有名なんだ。\nミラー：へえ、楽しみだな。東京は <ruby>物価<rt>ぶっか</rt></ruby>が <ruby>高<rt>たか</rt></ruby>いけど、おいしい <ruby>店<rt>みせ</rt></ruby>が たくさん あるね。\nタナカ：そうだね。じゃ、日曜日 10時に！\nミラー：うん、また 日曜日！",
    questions: [
      {
        id: "dk20-1",
        question: "ミラーさんは 今度の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>用事<rt>ようじ</rt></ruby>が ありますか。",
        options: [
          "いいえ、<ruby>特<rt>とく</rt></ruby>に <ruby>予定<rt>よてい</rt></ruby>は ない (暇である)",
          "はい、<ruby>仕事<rt>しごと</rt></ruby>が ある",
          "はい、<ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く",
          "はい、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しを する"
        ],
        correctIdx: 0,
        explanation: "Miller trả lời:「うん、特に 予定は ないよ (Ừ, tớ chẳng có kế hoạch gì đặc biệt cả).」"
      },
      {
        id: "dk20-2",
        question: "タナカ君は ミラー君を どこに <ruby>誘<rt>さそ</rt></ruby>いましたか。",
        options: [
          "銀座の <ruby>写真<rt>しゃしん</rt></ruby>の <ruby>展覧会<rt>てんらんかい</rt></ruby>",
          "カラオケ大会",
          "サッカーの <ruby>試合<rt>しあい</rt></ruby>",
          "<ruby>映画館<rt>えいがかん</rt></ruby>"
        ],
        correctIdx: 0,
        explanation: "Tanaka rủ:「銀座で おもしろい 写真の 展覧会が あるんだ。よかったら、一緒に 行かない？」"
      },
      {
        id: "dk20-3",
        question: "2<ruby>人<rt>ふたり</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>に どこで 会いますか。",
        options: [
          "10時に 銀座駅の <ruby>改札口<rt>かいさつぐち</rt></ruby>で",
          "11時に ラーメン屋の まえで",
          "9時に ミラー君の アパートで",
          "12時に <ruby>美術館<rt>びじゅつかん</rt></ruby>で"
        ],
        correctIdx: 0,
        explanation: "Tanaka đề nghị:「10時に 銀座駅の 改札口で どう？」và Miller đồng ý."
      },
      {
        id: "dk20-4",
        question: "<ruby>昼<rt>ひる</rt></ruby>ごはんは <ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べる <ruby>予定<rt>よてい</rt></ruby>ですか。",
        options: [
          "有名で <ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>い ラーメン",
          "すし",
          "<ruby>安<rt>やす</rt></ruby>い カレー",
          "ハンバーガー"
        ],
        correctIdx: 0,
        explanation: "Tanaka giới thiệu quán mì:「銀座に おいしい ラーメン屋が あるよ。少し 高いけど、すごく 有名なんだ。」"
      },
      {
        id: "dk20-5",
        question: "この 会話の 言葉遣い (cách dùng từ) について、<ruby>正<rt>ただ</rt></ruby>しい ものは どれですか。",
        options: [
          "<ruby>友達<rt>ともだち</rt></ruby>どうしの <ruby>親<rt>した</rt></ruby>しい <ruby>普通体<rt>ふつうたい</rt></ruby> ( thể thông thường) で 話して いる",
          "とても <ruby>丁寧<rt>ていねい</rt></ruby>な <ruby>敬語<rt>けいご</rt></ruby>で 話して いる",
          "<ruby>先生<rt>せんせい</rt></ruby>と <ruby>学生<rt>がくせい</rt></ruby>の 会話である",
          "<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>面接<rt>めんせつ</rt></ruby>の 会話である"
        ],
        correctIdx: 0,
        explanation: "Cuộc hội thoại dùng thể thân mật (うん、〜ない？、〜だよ、〜けど) giữa hai người bạn thân thiết."
      }
    ]
  },
  {
    id: "dokkai-21",
    lessonId: "bai-21",
    title: "Bài Đọc Hiểu - Bài 21 Minna",
    subTitle: "日本の 交通と 社会についての 意見 (Ý kiến về giao thông Nhật Bản)",
    description: "Bài văn nghị luận ngắn nêu suy nghĩ về hệ thống tàu điện và nếp sống văn minh tại các đô thị Nhật Bản.",
    passage: "わたしは <ruby>日本<rt>にほん</rt></ruby>の <ruby>交通<rt>こうつう</rt></ruby>について、とても <ruby>便利<rt>べんり</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>います。\n<ruby>電車<rt>でんしゃ</rt></ruby>や バスは <ruby>時間<rt>じかん</rt></ruby>どおりに <ruby>来<rt>き</rt></ruby>ますから、<ruby>約束<rt>やくそく</rt></ruby>の <ruby>時間<rt>じかん</rt></ruby>に <ruby>遅<rt>おく</rt></ruby>れません。駅の <ruby>中<rt>なか</rt></ruby>も <ruby>道<rt>みち</rt></ruby>も きれいで、安全です。\n\nしかし、<ruby>朝<rt>あさ</rt></ruby>の ラッシュは <ruby>本当<rt>ほんとう</rt></ruby>に <ruby>大変<rt>たいへん</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>います。<ruby>人<rt>ひと</rt></ruby>が とても <ruby>多<rt>おお</rt></ruby>くて、<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>で <ruby>動<rt>うご</rt></ruby>く ことが できません。\n<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>先輩<rt>せんぱい</rt></ruby>は「<ruby>始<rt>はじ</rt></ruby>めは びっくりしたでしょう？ でも すぐ <ruby>慣<rt>な</rt></ruby>れるよ」と <ruby>言<rt>い</rt></ruby>いました。\n\nまた、日本の サラリーマンは <ruby>真面目<rt>まじめ</rt></ruby>で、よく <ruby>働<rt>はたら</rt></ruby>くと <ruby>思<rt>おも</rt></ruby>います。でも、あまり <ruby>残業<rt>ざんぎょう</rt></ruby>を しないで、もっと <ruby>家族<rt>かぞく</rt></ruby>と <ruby>過<rt>す</rt></ruby>ごす <ruby>時間<rt>じかん</rt></ruby>を <ruby>作<rt>つく</rt></ruby>った ほうが いいと <ruby>思<rt>おも</rt></ruby>います。",
    questions: [
      {
        id: "dk21-1",
        question: "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>日本<rt>にほん</rt></ruby>の <ruby>交通<rt>こうつう</rt></ruby>について どう <ruby>思<rt>おも</rt></ruby>って いますか。",
        options: [
          "とても <ruby>便利<rt>べんり</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>って いる",
          "<ruby>不便<rt>ふべん</rt></ruby>で <ruby>危険<rt>きけん</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>って いる",
          "<ruby>電車<rt>でんしゃ</rt></ruby>が いつも <ruby>遅<rt>おく</rt></ruby>れると <ruby>思<rt>おも</rt></ruby>って いる",
          "<ruby>車<rt>くるま</rt></ruby>の ほうが <ruby>早<rt>はや</rt></ruby>いと <ruby>思<rt>おも</rt></ruby>って いる"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「日本の 交通について、とても 便利だと 思います。」"
      },
      {
        id: "dk21-2",
        question: "どうして <ruby>約束<rt>やくそく</rt></ruby>の <ruby>時間<rt>じかん</rt></ruby>に <ruby>遅<rt>おく</rt></ruby>れませんか。",
        options: [
          "<ruby>電車<rt>でんしゃ</rt></ruby>や バスが <ruby>時間<rt>じかん</rt></ruby>どおりに <ruby>来<rt>く</rt></ruby>るから",
          "<ruby>道<rt>みち</rt></ruby>に <ruby>車<rt>くるま</rt></ruby>が ないから",
          "<ruby>走<rt>はし</rt></ruby>って <ruby>行<rt>い</rt></ruby>くから",
          "<ruby>近<rt>ちか</rt></ruby>くに <ruby>住<rt>す</rt></ruby>んで いるから"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「電車や バスは 時間どおりに 来ますから、約束の 時間に 遅れません。」"
      },
      {
        id: "dk21-3",
        question: "<ruby>朝<rt>あさ</rt></ruby>の ラッシュについて、<ruby>筆者<rt>ひっしゃ</rt></ruby>は どう <ruby>思<rt>おも</rt></ruby>って いますか。",
        options: [
          "<ruby>本当<rt>ほんとう</rt></ruby>に <ruby>大変<rt>たいへん</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>って いる",
          "とても <ruby>楽<rt>たの</rt></ruby>しいと <ruby>思<rt>おも</rt></ruby>って いる",
          "<ruby>人<rt>ひと</rt></ruby>が <ruby>少<rt>すく</rt></ruby>ないと <ruby>思<rt>おも</rt></ruby>って いる",
          "<ruby>涼<rt>すず</rt></ruby>しくて <ruby>気持<rt>きも</rt></ruby>ちいいと <ruby>思<rt>おも</rt></ruby>って いる"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「朝の ラッシュは 本当に 大変だと 思います。人が とても 多くて...」"
      },
      {
        id: "dk21-4",
        question: "<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>先輩<rt>せんぱい</rt></ruby>は <ruby>何<rt>なに</rt></ruby>と <ruby>言<rt>い</rt></ruby>いましたか。",
        options: [
          "「<ruby>始<rt>はじ</rt></ruby>めは びっくりしたでしょう？ でも すぐ <ruby>慣<rt>な</rt></ruby>れるよ」",
          "「電車に 乗るな」",
          "「タクシーで 行きなさい」",
          "「会社を 辞めなさい」"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「会社の 先輩は『始めは びっくりしたでしょう？ でも すぐ 慣れるよ』と 言いました。」"
      },
      {
        id: "dk21-5",
        question: "<ruby>筆者<rt>ひっしゃ</rt></ruby>は 日本の サラリーマンについて どんな <ruby>意見<rt>いけん</rt></ruby>を <ruby>持<rt>も</rt></ruby>って いますか。",
        options: [
          "あまり <ruby>残業<rt>ざんぎょう</rt></ruby>しないで、<ruby>家族<rt>かぞく</rt></ruby>との <ruby>時間<rt>じかん</rt></ruby>を <ruby>作<rt>つく</rt></ruby>った ほうが いい",
          "もっと <ruby>夜<rt>よる</rt></ruby>まで <ruby>残業<rt>ざんぎょう</rt></ruby>すべきだ",
          "<ruby>仕事<rt>しごと</rt></ruby>が <ruby>不真面目<rt>ふまじめ</rt></ruby>である",
          "<ruby>休<rt>やす</rt></ruby>みを <ruby>減<rt>へ</rt></ruby>らすべきだ"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「あまり 残業を しないで、もっと 家族と 過ごす 時間を 作った ほうが いいと 思います。」"
      }
    ]
  },
  {
    id: "dokkai-22",
    lessonId: "bai-22",
    title: "Bài Đọc Hiểu - Bài 22 Minna",
    subTitle: "新しい アパートと 私の 部屋 (Căn hộ mới và căn phòng của tôi)",
    description: "Đoạn văn miêu tả về căn nhà trọ mới thuê, đồ đạc và những người sống xung quanh ứng dụng mệnh đề bổ ngữ danh từ.",
    passage: "わたしは <ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しい アパートへ <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しました。\n[わたしが <ruby>今<rt>いま</rt></ruby> <ruby>住<rt>す</rt></ruby>んで いる] アパートは、<ruby>駅<rt>えき</rt></ruby>から <ruby>歩<rt>ある</rt></ruby>いて 5<ruby>分<rt>ふん</rt></ruby>の ところに あります。<ruby>家賃<rt>やちん</rt></ruby>は <ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>いですが、とても <ruby>便利<rt>べんり</rt></ruby>です。\n\n<ruby>部屋<rt>へや</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に [父が <ruby>買<rt>か</rt></ruby>ってくれた] <ruby>大<rt>おお</rt></ruby>きい <ruby>机<rt>つくえ</rt></ruby>と、[友達が <ruby>描<rt>えが</rt></ruby>いた] きれいな <ruby>絵<rt>え</rt></ruby>が あります。\nまた、この アパートには <ruby>和室<rt>わしつ</rt></ruby>が あります。<ruby>大<rt>おお</rt></ruby>きい <ruby>押<rt>お</rt></ruby>し<ruby>入<rt>い</rt></ruby>れが ありますから、<ruby>昼間<rt>ひるま</rt></ruby>は そこに <ruby>布団<rt>ふとん</rt></ruby>を 入れます。\n\n<ruby>隣<rt>となり</rt></ruby>の <ruby>部屋<rt>へや</rt></ruby>に [いつも メガネを かけて スーツを <ruby>着<rt>き</rt></ruby>て いる] <ruby>親切<rt>しんせつ</rt></ruby>な サラリーマンが <ruby>住<rt>す</rt></ruby>んで います。\n<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>した <ruby>日<rt>ひ</rt></ruby>、わたしに「おめでとうございます」と <ruby>言<rt>い</rt></ruby>って、おいしい お<ruby>菓子<rt>かし</rt></ruby>を くれました。<ruby>本当<rt>ほんとう</rt></ruby>に いい <ruby>所<rt>ところ</rt></ruby>です。",
    questions: [
      {
        id: "dk22-1",
        question: "<ruby>筆者<rt>ひっしゃ</rt></ruby>の アパートは どこに ありますか。",
        options: [
          "<ruby>駅<rt>えき</rt></ruby>から <ruby>歩<rt>ある</rt></ruby>いて 5<ruby>分<rt>ふん</rt></ruby>の ところ",
          "<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>",
          "<ruby>駅<rt>えき</rt></ruby>から バスで 1<ruby>時間<rt>じかん</rt></ruby>の ところ",
          "<ruby>山<rt>やま</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「駅から 歩いて 5分の ところに あります。」"
      },
      {
        id: "dk22-2",
        question: "<ruby>部屋<rt>へや</rt></ruby>に ある <ruby>大<rt>おお</rt></ruby>きい <ruby>机<rt>つくえ</rt></ruby>は だれが くれましたか。",
        options: [
          "<ruby>父<rt>ちち</rt></ruby>",
          "<ruby>友達<rt>ともだち</rt></ruby>",
          "<ruby>隣<rt>となり</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>",
          "<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>社長<rt>しゃちょう</rt></ruby>"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「[父が 買ってくれた] 大きい 机」"
      },
      {
        id: "dk22-3",
        question: "<ruby>昼間<rt>ひるま</rt></ruby> <ruby>布団<rt>ふとん</rt></ruby>を どこに 入れますか。",
        options: [
          "<ruby>押<rt>お</rt></ruby>し<ruby>入<rt>い</rt></ruby>れの <ruby>中<rt>なか</rt></ruby>",
          "ベッドの <ruby>下<rt>した</rt></ruby>",
          "ベランダ",
          "<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「大きい 押し入れが ありますから、昼間は そこに 布団を 入れます。」"
      },
      {
        id: "dk22-4",
        question: "<ruby>隣<rt>となり</rt></ruby>の <ruby>部屋<rt>へや</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は どんな <ruby>人<rt>ひと</rt></ruby>ですか。",
        options: [
          "いつも メガネを かけて スーツを <ruby>着<rt>き</rt></ruby>て いる サラリーマン",
          "帽子を かぶった <ruby>学生<rt>がくせい</rt></ruby>",
          "着物を <ruby>着<rt>き</rt></ruby>た おばあさん",
          "いつも うるさい <ruby>若<rt>わか</rt></ruby>い <ruby>人<rt>ひと</rt></ruby>"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「[いつも メガネを かけて スーツを 着て いる] 親切な サラリーマン」"
      },
      {
        id: "dk22-5",
        question: "<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        options: [
          "<ruby>隣<rt>となり</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は <ruby>筆者<rt>ひっしゃ</rt></ruby>に おいしい お<ruby>菓子<rt>かし</rt></ruby>を くれた",
          "アパートの <ruby>家賃<rt>やちん</rt></ruby>は とても <ruby>安<rt>やす</rt></ruby>い",
          "アパートには <ruby>和室<rt>わしつ</rt></ruby>は ない",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は この アパートが <ruby>嫌<rt>きら</rt></ruby>いである"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「わたしに『おめでとうございます』と言って、おいしい お菓子を くれました。」"
      }
    ]
  },
  {
    id: "dokkai-23",
    lessonId: "bai-23",
    title: "Bài Đọc Hiểu - Bài 23 Minna",
    subTitle: "初めての 一人旅と 道案内 (Chuyến đi một mình và sự chỉ đường)",
    description: "Đoạn văn kể về chuyến đi du lịch Nara, trải nghiệm hỏi đường tại đồn cảnh sát và những chú hươu thân thiện.",
    passage: "先月の 休み、わたしは <ruby>一人<rt>ひとり</rt></ruby>で <ruby>奈良<rt>なら</rt></ruby>へ <ruby>旅行<rt>りょこう</rt></ruby>に <ruby>行<rt>い</rt></ruby>きました。\n<ruby>奈良<rt>なら</rt></ruby><ruby>駅<rt>えき</rt></ruby>に <ruby>着<rt>つ</rt></ruby>いた とき、<ruby>奈良<rt>なら</rt></ruby><ruby>公園<rt>こうえん</rt></ruby>への <ruby>道<rt>みち</rt></ruby>が 分かりませんでした。それで、<ruby>駅前<rt>えきまえ</rt></ruby>の <ruby>交番<rt>こうばん</rt></ruby>で <ruby>警察官<rt>けいさつかん</rt></ruby>に <ruby>聞<rt>き</rt></ruby>きました。\n\n<ruby>警察官<rt>けいさつかん</rt></ruby>は「この <ruby>道<rt>みち</rt></ruby>を まっすぐ <ruby>行<rt>い</rt></ruby>って、2つ<ruby>目<rt>め</rt></ruby>の <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がってください。それから <ruby>大<rt>おお</rt></ruby>きい <ruby>橋<rt>はし</rt></ruby>を <ruby>渡<rt>わた</rt></ruby>ると、<ruby>左側<rt>ひだりがわ</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>が ありますよ」と <ruby>教<rt>おし</rt></ruby>えて くれました。\n\n<ruby>教<rt>おし</rt></ruby>えられた とおりに <ruby>歩<rt>ある</rt></ruby>いて <ruby>行<rt>い</rt></ruby>くと、すぐに <ruby>奈良<rt>なら</rt></ruby><ruby>公園<rt>こうえん</rt></ruby>が 見つかりました。\n<ruby>公園<rt>こうえん</rt></ruby>には たくさんの <ruby>鹿<rt>しか</rt></ruby>が いました。「鹿せんべい」を <ruby>買<rt>か</rt></ruby>って <ruby>渡<rt>わた</rt></ruby>すと、<ruby>鹿<rt>しか</rt></ruby>は <ruby>頭<rt>あたま</rt></ruby>を 下げて、お礼を しました。とても かわいいと <ruby>思<rt>おも</rt></ruby>いました。<ruby>道<rt>みち</rt></ruby>に <ruby>迷<rt>まよ</rt></ruby>った ときは 不安でしたが、とても 楽しい <ruby>一日<rt>いちにち</rt></ruby>でした。",
    questions: [
      {
        id: "dk23-1",
        question: "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>奈良<rt>なら</rt></ruby><ruby>駅<rt>えき</rt></ruby>に <ruby>着<rt>つ</rt></ruby>いた とき、どうして <ruby>交番<rt>こうばん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きましたか。",
        options: [
          "<ruby>奈良<rt>なら</rt></ruby><ruby>公園<rt>こうえん</rt></ruby>への <ruby>道<rt>みち</rt></ruby>が 分からなかったから",
          "<ruby>財布<rt>さいふ</rt></ruby>を なくしたから",
          "<ruby>警察官<rt>けいさつかん</rt></ruby>の <ruby>友達<rt>ともだち</rt></ruby>が いたから",
          "<ruby>切符<rt>きっぷ</rt></ruby>を <ruby>買<rt>か</rt></ruby>うため"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「奈良公園への 道が 分かりませんでした。それで、駅前の 交番で 警察官に 聞きました。」"
      },
      {
        id: "dk23-2",
        question: "<ruby>警察官<rt>けいさつかん</rt></ruby>の <ruby>道案内<rt>みちあんない</rt></ruby>について、<ruby>正<rt>ただ</rt></ruby>しい ものは どれですか。",
        options: [
          "まっすぐ 行って 2つ目の 信号を 右へ 曲がり、橋を 渡ると 左側にある",
          "最初の 信号を 左へ 曲がると すぐある",
          "バスに 30分 乗る",
          "橋を 渡らないで 右へ 曲がる"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「まっすぐ 行って、2つ目の 信号を 右へ 曲がってください。それから 大きい 橋を 渡ると、左側に 公園が ありますよ」"
      },
      {
        id: "dk23-3",
        question: "<ruby>鹿<rt>しか</rt></ruby>に「鹿せんべい」を <ruby>渡<rt>わた</rt></ruby>すと、<ruby>鹿<rt>しか</rt></ruby>は どう しましたか。",
        options: [
          "<ruby>頭<rt>あたま</rt></ruby>を 下げて、お礼を した",
          "<ruby>走<rt>はし</rt></ruby>って 逃げた",
          "<ruby>怒<rt>おこ</rt></ruby>って 噛んだ",
          "<ruby>何<rt>なに</rt></ruby>も しなかった"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「『鹿せんべい』を 買って 渡すと、鹿は 頭を 下げて、お礼を しました。」"
      },
      {
        id: "dk23-4",
        question: "「道に 迷った とき」の「迷う」の 意味は 何ですか。",
        options: [
          "Lạc đường, mất phương hướng",
          "Tìm thấy đường đi",
          "Sửa chữa đường sá",
          "Chạy thật nhanh"
        ],
        correctIdx: 0,
        explanation: "道に 迷います (みちに まよいます) nghĩa là lạc đường."
      },
      {
        id: "dk23-5",
        question: "<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        options: [
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は 1<ruby>人<rt>ひとり</rt></ruby>で <ruby>奈良<rt>なら</rt></ruby>へ <ruby>行<rt>い</rt></ruby>った",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は 家族と 奈良へ 行った",
          "<ruby>奈良<rt>なら</rt></ruby><ruby>公園<rt>こうえん</rt></ruby>に 鹿は 1頭も いなかった",
          "<ruby>警察官<rt>けいさつかん</rt></ruby>は 道を 教えて くれなかった"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「わたしは 一人で 奈良へ 旅行に 行きました。」"
      }
    ]
  },
  {
    id: "dokkai-24",
    lessonId: "bai-24",
    title: "Bài Đọc Hiểu - Bài 24 Minna",
    subTitle: "親切な 人々と 助け合い (Những con người tốt bụng và sự tương trợ)",
    description: "Đoạn văn bày tỏ lòng biết ơn đối với những người hàng xóm và đồng nghiệp đã giúp đỡ mình trong thời gian đầu sang Nhật.",
    passage: "わたしが <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>たばかりの とき、<ruby>日本語<rt>にほんご</rt></ruby>が あまり 分かりませんでした。\nその とき、アパートの <ruby>大家<rt>おおや</rt></ruby>さんは 市役所へ <ruby>連<rt>つ</rt></ruby>れて <ruby>行<rt>い</rt></ruby>って、<ruby>外国人<rt>がいこくじん</rt></ruby><ruby>登録<rt>とうろく</rt></ruby>の <ruby>手続<rt>てつづ</rt></ruby>きを <ruby>手伝<rt>てつだ</rt></ruby>って くれました。\n\nまた、<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>同僚<rt>どうりょう</rt></ruby>の <ruby>佐藤<rt>さとう</rt></ruby>さんは、スーパーでの <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>の しかたや ゴミの 分け方を <ruby>親切<rt>しんせつ</rt></ruby>に <ruby>説明<rt>せつめい</rt></ruby>して くれました。<ruby>佐藤<rt>さとう</rt></ruby>さんの <ruby>奥<rt>おく</rt></ruby>さんも、おいしい 日本料理を <ruby>作<rt>つく</rt></ruby>って、わたしに くれました。\n\nわたしは <ruby>皆<rt>みな</rt></ruby>さんに お礼が したかったですから、<ruby>先週<rt>せんしゅう</rt></ruby> ベトナムの <ruby>春巻<rt>はるま</rt></ruby>きを <ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>って、<ruby>大家<rt>おおや</rt></ruby>さんと <ruby>佐藤<rt>さとう</rt></ruby>さんに あげました。「とても おいしい！」と 言って、たくさん 食べて くれました。<ruby>周<rt>まわ</rt></ruby>りの <ruby>人<rt>ひと</rt></ruby>たちが いつも 助けて くれますから、わたしは 日本での <ruby>生活<rt>せいかつ</rt></ruby>が とても 楽しいです。",
    questions: [
      {
        id: "dk24-1",
        question: "アパートの <ruby>大家<rt>おおや</rt></ruby>さんは <ruby>何<rt>なに</rt></ruby>を して くれましたか。",
        options: [
          "市役所へ 連れて 行って、手続きを 手伝って くれた",
          "お金を 貸して くれた",
          "新しい 車を 買って くれた",
          "日本語を 毎日 教えて くれた"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「アパートの 大家さんは 市役所へ 連れて 行って、外国人登録の 手続きを 手伝って くれました。」"
      },
      {
        id: "dk24-2",
        question: "<ruby>同僚<rt>どうりょう</rt></ruby>の <ruby>佐藤<rt>さとう</rt></ruby>さんは <ruby>何<rt>なに</rt></ruby>を して くれましたか。",
        options: [
          "買い物の しかたや ゴミの 分け方を 説明して くれた",
          "アパートを 探して くれた",
          "飛行機の 切符を 買って くれた",
          "ベトナムへ 案内して くれた"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「スーパーでの 買い物の しかたや ゴミの 分け方を 親切に 説明して くれました。」"
      },
      {
        id: "dk24-3",
        question: "<ruby>筆者<rt>ひっしゃ</rt></ruby>は お礼に <ruby>何<rt>なに</rt></ruby>を しましたか。",
        options: [
          "自分で ベトナムの 春巻きを 作って あげた",
          "高価な 時計を あげた",
          "お金を 払った",
          "手紙だけ 書いた"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「ベトナムの 春巻きを 自分で 作って、大家さんと 佐藤さんに あげました。」"
      },
      {
        id: "dk24-4",
        question: "「大家さんと 佐藤さんに あげました」で「あげました」を <ruby>使<rt>つか</rt></ruby>った <ruby>理由<rt>りゆう</rt></ruby>は 何ですか。",
        options: [
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>が <ruby>他<rt>ほか</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>に プレゼントを 渡したから",
          "他の 人が 筆者に くれたから",
          "筆者が もらったから",
          "特に 意味は ない"
        ],
        correctIdx: 0,
        explanation: "Người nói (tôi) tặng đồ cho người khác thì dùng động từ あげます."
      },
      {
        id: "dk24-5",
        question: "<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        options: [
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は 周りの 人たちに 感謝して 楽しく 暮らして いる",
          "<ruby>大家<rt>おおや</rt></ruby>さんは 春巻きを 食べなかった",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は 日本へ 来たときから 日本語が とても 上手だった",
          "<ruby>佐藤<rt>さとう</rt></ruby>さんの 奥さんは 料理が 下手である"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「周りの 人たちが いつも 助けて くれますから、わたしは 日本での 生活が とても 楽しいです。」"
      }
    ]
  },
  {
    id: "dokkai-25",
    lessonId: "bai-25",
    title: "Bài Đọc Hiểu - Bài 25 Minna",
    subTitle: "将来の 夢と 感謝の 気持ち (Ước mơ tương lai và lời tri ân)",
    description: "Bài phát biểu kết thúc giai đoạn sơ cấp N5, chia sẻ ước mơ nghề nghiệp và những lời dặn dò chia tay xúc động.",
    passage: "きょうで <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>初級<rt>しょきゅう</rt></ruby>コースが <ruby>終<rt>お</rt></ruby>わります。<ruby>半年間<rt>はんとしかん</rt></ruby>、<ruby>本当<rt>ほんとう</rt></ruby>に お世話に なりました。\n\n<ruby>始<rt>はじ</rt></ruby>めは ひらがなも カタカナも 読めませんでしたから、いくら <ruby>勉強<rt>べんきょう</rt></ruby>しても、テストで いい 点が 取れませんでした。でも、先生方が <ruby>優<rt>やさ</rt></ruby>しく 教えて くださったおかげで、だんだん 日本語が 分かるように なりました。\n\nもし JLPT N5に <ruby>合格<rt>ごうかく</rt></ruby>したら、次は N4の <ruby>勉強<rt>べんきょう</rt></ruby>を <ruby>始<rt>はじ</rt></ruby>めたいです。<ruby>仕事<rt>しごと</rt></ruby>が <ruby>忙<rt>いそが</rt></ruby>しくても、<ruby>毎日<rt>まいにち</rt></ruby> 1<ruby>時間<rt>じかん</rt></ruby>は <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>する つもりです。\nそして、<ruby>将来<rt>しょうらい</rt></ruby> チャンスが あったら、日本の IT<ruby>企業<rt>きぎょう</rt></ruby>で 働きたいと <ruby>思<rt>おも</rt></ruby>って います。どんなに <ruby>大変<rt>たいへん</rt></ruby>でも、<ruby>夢<rt>ゆめ</rt></ruby>の ために <ruby>頑張<rt>がんば</rt></ruby>ります。\n\n先生方、クラスメートの 皆さん、本当に ありがとうございました。どうぞ お元気で！",
    questions: [
      {
        id: "dk25-1",
        question: "<ruby>今日<rt>きょう</rt></ruby>で <ruby>何<rt>なに</rt></ruby>が <ruby>終<rt>お</rt></ruby>わりますか。",
        options: [
          "<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>初級<rt>しょきゅう</rt></ruby>コース",
          "<ruby>大学<rt>だいがく</rt></ruby>の 4<ruby>年間<rt>ねんかん</rt></ruby>",
          "IT<ruby>企業<rt>きぎょう</rt></ruby>の <ruby>仕事<rt>しごと</rt></ruby>",
          "日本の <ruby>旅行<rt>りょこう</rt></ruby>"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「きょうで 日本語の 初級コースが 終わります。」"
      },
      {
        id: "dk25-2",
        question: "もし N5に <ruby>合格<rt>ごうかく</rt></ruby>したら、<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>次<rt>つぎ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>を しますか。",
        options: [
          "N4の <ruby>勉強<rt>べんきょう</rt></ruby>を <ruby>始<rt>はじ</rt></ruby>める",
          "<ruby>国<rt>くに</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>る",
          "<ruby>勉強<rt>べんきょう</rt></ruby>を やめる",
          "すぐに <ruby>転職<rt>てんしょく</rt></ruby>する"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「もし JLPT N5に 合格したら、次は N4の 勉強を 始めたいです。」"
      },
      {
        id: "dk25-3",
        question: "<ruby>仕事<rt>しごと</rt></ruby>が <ruby>忙<rt>いそが</rt></ruby>しくても、<ruby>筆者<rt>ひっしゃ</rt></ruby>は どう しますか。",
        options: [
          "<ruby>毎日<rt>まいにち</rt></ruby> 1<ruby>時間<rt>じかん</rt></ruby>は <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>する",
          "<ruby>勉強<rt>べんきょう</rt></ruby>を <ruby>休<rt>やす</rt></ruby>む",
          "<ruby>会社<rt>かいしゃ</rt></ruby>を <ruby>辞<rt>や</rt></ruby>める",
          "<ruby>遊<rt>あそ</rt></ruby>びに <ruby>行<rt>い</rt></ruby>く"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「仕事が 忙しくても、毎日 1時間は 日本語を 勉強する つもりです。」"
      },
      {
        id: "dk25-4",
        question: "<ruby>筆者<rt>ひっしゃ</rt></ruby>の <ruby>将来<rt>しょうらい</rt></ruby>の <ruby>夢<rt>ゆめ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。",
        options: [
          "日本の IT<ruby>企業<rt>きぎょう</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>くこと",
          "<ruby>歌手<rt>かしゅ</rt></ruby>に なること",
          "日本中を ドライブすること",
          "<ruby>学校<rt>がっこう</rt></ruby>の <ruby>先生<rt>せんせい</rt></ruby>に なること"
        ],
        correctIdx: 0,
        explanation: "Trong bài:「将来 チャンスが あったら、日本の IT企業で 働きたいと 思って います。」"
      },
      {
        id: "dk25-5",
        question: "「お世話に なりました」の <ruby>意味<rt>いみ</rt></ruby>は 何ですか。",
        options: [
          "Cảm ơn vì đã luôn quan tâm, dạy bảo và giúp đỡ tôi suốt thời gian qua",
          "Xin lỗi vì đã làm hỏng đồ đạc",
          "Xin chào buổi sáng tốt lành",
          "Chúc mừng năm mới an khang"
        ],
        correctIdx: 0,
        explanation: "お世話になりました là lời chào tạm biệt tri ân cảm ơn vì đã giúp đỡ, chăm sóc mình trong suốt thời gian học tập/làm việc."
      }
    ]
  }
];

// Read existing data/dokkai.js
const dokkaiPath = path.resolve(__dirname, '../data/dokkai.js');
let code = fs.readFileSync(dokkaiPath, 'utf8');

// Load current dokkaiData
eval(code.replace('const dokkaiData', 'global.existingDokkai'));

console.log('Current dokkai length:', global.existingDokkai.length);

// Merge with new dokkai items
const mergedDokkai = [...global.existingDokkai, ...dokkai16_25];
console.log('New dokkai length:', mergedDokkai.length);

// Verify merged array
mergedDokkai.forEach((d, idx) => {
  if (!d.id || !d.lessonId || !d.title || !d.subTitle || !d.passage || !Array.isArray(d.questions) || d.questions.length !== 5) {
    throw new Error(`Invalid dokkai at index ${idx}: ${d.id}`);
  }
});

const newContent = `// Dữ liệu 25 bài đọc hiểu theo giáo trình Minna no Nihongo (Bài 1 - 25)
const dokkaiData = ${JSON.stringify(mergedDokkai, null, 2)};
`;

fs.writeFileSync(dokkaiPath, newContent, 'utf8');
console.log('Successfully updated data/dokkai.js with 25 reading passages!');
