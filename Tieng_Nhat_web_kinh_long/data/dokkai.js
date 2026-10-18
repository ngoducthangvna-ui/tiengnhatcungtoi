// Dữ liệu 50 bài đọc hiểu theo giáo trình Minna no Nihongo (Bài 1 - 50)
const dokkaiData = [
  {
    "id": "dokkai-1",
    "lessonId": "bai-1",
    "title": "Bài Đọc Hiểu - Bài 1 Minna",
    "subTitle": "はじめまして (Rất hân hạnh được làm quen)",
    "description": "Đoạn văn tự giới thiệu bản thân: họ tên, quốc tịch, nghề nghiệp, cơ quan trực thuộc và tuổi tác ứng dụng ngữ pháp Bài 1.",
    "passage": "<ruby>初<rt>はじ</rt></ruby>めまして。わたしは マイク・ミラーです。アメリカから <ruby>来<rt>き</rt></ruby>ました。\nわたしは 28<ruby>歳<rt>さい</rt></ruby>です。<ruby>独身<rt>どくしん</rt></ruby>です。\nわたしは IMCの <ruby>社員<rt>しゃいん</rt></ruby>です。IMCは コンピューターの <ruby>会社<rt>かいしゃ</rt></ruby>です。\n\nあの <ruby>方<rt>かた</rt></ruby>は サントスさんです。サントスさんは ブラジル<ruby>人<rt>じん</rt></ruby>です。サントスさんも <ruby>会社員<rt>かいしゃいん</rt></ruby>です。\nあちらの <ruby>方<rt>かた</rt></ruby>は カリナさんです。カリナさんは インドネシア<ruby>人<rt>じん</rt></ruby>です。カリナさんは <ruby>学生<rt>がくせい</rt></ruby>です。<ruby>富士大学<rt>ふじだいがく</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>です。\nわたしたちは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>日本語学校<rt>にほんごがっこう</rt></ruby>で <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>します。どうぞ よろしく お<ruby>願<rt>ねが</rt></ruby>いします。",
    "questions": [
      {
        "id": "dk1-1",
        "question": "ミラーさんは どこの <ruby>国<rt>くに</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>ですか。",
        "options": [
          "アメリカ",
          "ブラジル",
          "インドネシア",
          "<ruby>日本<rt>にほん</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài viết:「わたしは マイク・ミラーです。アメリカから 来ました。」"
      },
      {
        "id": "dk1-2",
        "question": "ミラーさんは <ruby>何歳<rt>なんさい</rt></ruby>ですか。",
        "options": [
          "20<ruby>歳<rt>さい</rt></ruby>",
          "25<ruby>歳<rt>さい</rt></ruby>",
          "28<ruby>歳<rt>さい</rt></ruby>",
          "30<ruby>歳<rt>さい</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài viết:「わたしは 28歳です。」"
      },
      {
        "id": "dk1-3",
        "question": "サントスさんの <ruby>仕事<rt>しごと</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。",
        "options": [
          "<ruby>学生<rt>がくせい</rt></ruby>",
          "<ruby>会社員<rt>かいしゃいん</rt></ruby>",
          "<ruby>医者<rt>いしゃ</rt></ruby>",
          "<ruby>教師<rt>きょうし</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài viết:「サントスさんも 会社員です。」"
      },
      {
        "id": "dk1-4",
        "question": "カリナさんは どこの <ruby>学生<rt>がくせい</rt></ruby>ですか。",
        "options": [
          "IMC",
          "<ruby>さくら大学<rt>さくらだいがく</rt></ruby>",
          "<ruby>富士大学<rt>ふじだいがく</rt></ruby>",
          "<ruby>神戸病院<rt>こうべびょういん</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài viết:「カリナさんは 学生です。富士大学の 学生です。」"
      },
      {
        "id": "dk1-5",
        "question": "<ruby>正<rt>ただ</rt></ruby>しい <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "ミラーさんは <ruby>教師<rt>きょうし</rt></ruby>です。",
          "サントスさんは アメリカ<ruby>人<rt>じん</rt></ruby>です。",
          "カリナさんは <ruby>会社員<rt>かいしゃいん</rt></ruby>です。",
          "ミラーさんは IMCの <ruby>社員<rt>しゃいん</rt></ruby>です。"
        ],
        "correctIdx": 3,
        "explanation": "Trong bài:「わたしは IMCの 社員です。」Các câu khác đều sai thông tin."
      }
    ]
  },
  {
    "id": "dokkai-2",
    "lessonId": "bai-2",
    "title": "Bài Đọc Hiểu - Bài 2 Minna",
    "subTitle": "わたしの 机の 上 (Trên bàn học của tôi)",
    "description": "Đoạn văn miêu tả các đồ dùng học tập, sách báo, xuất xứ và chủ sở hữu trên bàn học ứng dụng ngữ pháp Bài 2.",
    "passage": "これは わたしの <ruby>部屋<rt>へや</rt></ruby>です。ここに <ruby>大<rt>おお</rt></ruby>きい <ruby>机<rt>つくえ</rt></ruby>が あります。\n<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>を <ruby>見<rt>み</rt></ruby>てください。いろいろな <ruby>物<rt>もの</rt></ruby>が あります。\nこれは <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>です。とても <ruby>役<rt>やく</rt></ruby>に <ruby>立<rt>た</rt></ruby>ちます。それは <ruby>英語<rt>えいご</rt></ruby>の <ruby>本<rt>ほん</rt></ruby>です。サントスさんの <ruby>本<rt>ほん</rt></ruby>です。\n\n<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に ペンが 3<ruby>本<rt>ほん</rt></ruby> あります。この <ruby>黒<rt>くろ</rt></ruby>い ペンは わたしのです。その <ruby>赤<rt>あか</rt></ruby>い ペンは <ruby>山田<rt>やまだ</rt></ruby>さんのです。\nあの かばんは だれの かばんですか。あれは カリナさんの かばんです。かばんの <ruby>中<rt>なか</rt></ruby>に カメラと <ruby>鍵<rt>かぎ</rt></ruby>が あります。\nこの <ruby>手帳<rt>てちょう</rt></ruby>は コンピューターの <ruby>雑誌<rt>ざっし</rt></ruby>の おみやげです。とても <ruby>便利<rt>べんり</rt></ruby>です。",
    "questions": [
      {
        "id": "dk2-1",
        "question": "<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>ですか。",
        "options": [
          "<ruby>英語<rt>えいご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>",
          "<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>",
          "フランス<ruby>語<rt>ご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>",
          "<ruby>中国語<rt>ちゅうごくご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「これは 日本語の 辞書です。」"
      },
      {
        "id": "dk2-2",
        "question": "<ruby>英語<rt>えいご</rt></ruby>の <ruby>本<rt>ほん</rt></ruby>は だれのですか。",
        "options": [
          "サントスさんの",
          "ミラーさんの",
          "<ruby>山田<rt>やまだ</rt></ruby>さんの",
          "カリナさんの"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「それは 英語の 本です。サントスさんの 本です。」"
      },
      {
        "id": "dk2-3",
        "question": "<ruby>黒<rt>くろ</rt></ruby>い ペンは だれのですか。",
        "options": [
          "<ruby>山田<rt>やまだ</rt></ruby>さんの",
          "カリナさんの",
          "わたし（<ruby>筆者<rt>ひっしゃ</rt></ruby>）の",
          "サントスさんの"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「この 黒い ペンは わたしのです。」"
      },
      {
        "id": "dk2-4",
        "question": "カリナさんの かばんの <ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
        "options": [
          "<ruby>辞書<rt>じしょ</rt></ruby>と ノート",
          "カメラと <ruby>鍵<rt>かぎ</rt></ruby>",
          "<ruby>本<rt>ほん</rt></ruby>と ペン",
          "<ruby>新聞<rt>しんぶん</rt></ruby>と <ruby>雑誌<rt>ざっし</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「かばんの 中に カメラと 鍵が あります。」"
      },
      {
        "id": "dk2-5",
        "question": "<ruby>手帳<rt>てちょう</rt></ruby>は どうですか。",
        "options": [
          "<ruby>重<rt>おも</rt></ruby>いです",
          "<ruby>便利<rt>べんり</rt></ruby>です",
          "<ruby>古<rt>ふる</rt></ruby>いです",
          "<ruby>高<rt>たか</rt></ruby>かったです"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「この 手帳は コンピューターの 雑誌の おみやげです。とても 便利です。」"
      }
    ]
  },
  {
    "id": "dokkai-3",
    "lessonId": "bai-3",
    "title": "Bài Đọc Hiểu - Bài 3 Minna",
    "subTitle": "デパートの 中 (Trong trung tâm thương mại)",
    "description": "Đoạn văn mua sắm, hỏi vị trí các tầng và giá cả hàng hóa xuất xứ các nước ứng dụng ngữ pháp Bài 3.",
    "passage": "ここは <ruby>東京<rt>とうきょう</rt></ruby>の <ruby>有名<rt>ゆうめい</rt></ruby>な デパートです。とても にぎやかです。\n<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>は <ruby>食料品<rt>しょくりょうひん</rt></ruby>の <ruby>売場<rt>うりば</rt></ruby>です。おいしい お<ruby>菓子<rt>かし</rt></ruby>や ワインが あります。この ワインは フランスの ワインです。1<ruby>本<rt>ほん</rt></ruby> 3,500<ruby>円<rt>えん</rt></ruby>です。\n\n1<ruby>階<rt>かい</rt></ruby>は <ruby>靴<rt>くつ</rt></ruby>と かばんの <ruby>売場<rt>うりば</rt></ruby>です。この <ruby>靴<rt>くつ</rt></ruby>は イタリアの <ruby>靴<rt>くつ</rt></ruby>です。とても きれいですが、ちょっと <ruby>高<rt>たか</rt></ruby>いです。\n2<ruby>階<rt>かい</rt></ruby>は <ruby>紳士服<rt>しんしふく</rt></ruby>と <ruby>婦人服<rt>ふじんふく</rt></ruby>の <ruby>売場<rt>うりば</rt></ruby>です。\nエレベーターは あちらです。エスカレーターは <ruby>受付<rt>うけつけ</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>に あります。\nお<ruby>手<rt>て</rt></ruby><ruby>洗<rt>あら</rt></ruby>いは <ruby>各階<rt>かくかい</rt></ruby>に あります。<ruby>事務所<rt>じむしょ</rt></ruby>は 7<ruby>階<rt>かい</rt></ruby>です。<ruby>電話<rt>でんわ</rt></ruby>は 1<ruby>階<rt>かい</rt></ruby>の ロビーに あります。",
    "questions": [
      {
        "id": "dk3-1",
        "question": "ワインの <ruby>売場<rt>うりば</rt></ruby>は <ruby>何階<rt>なんがい</rt></ruby>ですか。",
        "options": [
          "1<ruby>階<rt>かい</rt></ruby>",
          "2<ruby>階<rt>かい</rt></ruby>",
          "<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>",
          "7<ruby>階<rt>かい</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「地下1階は 食料品の 売場です。おいしい お菓子や ワインが あります。」"
      },
      {
        "id": "dk3-2",
        "question": "フランスの ワインは いくらですか。",
        "options": [
          "1,500<ruby>円<rt>えん</rt></ruby>",
          "2,500<ruby>円<rt>えん</rt></ruby>",
          "3,500<ruby>円<rt>えん</rt></ruby>",
          "5,000<ruby>円<rt>えん</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「1本 3,500円です。」"
      },
      {
        "id": "dk3-3",
        "question": "1<ruby>階<rt>かい</rt></ruby>の <ruby>靴<rt>くつ</rt></ruby>は どこの <ruby>靴<rt>くつ</rt></ruby>ですか。",
        "options": [
          "<ruby>日本<rt>にほん</rt></ruby>の <ruby>靴<rt>くつ</rt></ruby>",
          "イタリアの <ruby>靴<rt>くつ</rt></ruby>",
          "フランスの <ruby>靴<rt>くつ</rt></ruby>",
          "アメリカの <ruby>靴<rt>くつ</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「この 靴は イタリアの 靴です。」"
      },
      {
        "id": "dk3-4",
        "question": "エスカレーターは どこに ありますか。",
        "options": [
          "<ruby>受付<rt>うけつけ</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>",
          "<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>",
          "エレベーターの <ruby>中<rt>なか</rt></ruby>",
          "<ruby>事務所<rt>じむしょ</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「エスカレーターは 受付の 隣に あります。」"
      },
      {
        "id": "dk3-5",
        "question": "<ruby>事務所<rt>じむしょ</rt></ruby>は <ruby>何階<rt>なんがい</rt></ruby>ですか。",
        "options": [
          "1<ruby>階<rt>かい</rt></ruby>",
          "2<ruby>階<rt>かい</rt></ruby>",
          "5<ruby>階<rt>かい</rt></ruby>",
          "7<ruby>階<rt>かい</rt></ruby>"
        ],
        "correctIdx": 3,
        "explanation": "Trong bài:「事務所は 7階です。」"
      }
    ]
  },
  {
    "id": "dokkai-4",
    "lessonId": "bai-4",
    "title": "Bài Đọc Hiểu - Bài 4 Minna",
    "subTitle": "ミラーさんの 毎日の 生活 (Cuộc sống hàng ngày của anh Miller)",
    "description": "Đoạn văn kể về thời gian biểu sinh hoạt, giờ làm việc và học tập trong tuần ứng dụng ngữ pháp Bài 4.",
    "passage": "マイク・ミラーさんは IMCの <ruby>社員<rt>しゃいん</rt></ruby>です。<ruby>毎日<rt>まいにち</rt></ruby> <ruby>忙<rt>いそが</rt></ruby>しいです。\nミラーさんは <ruby>毎朝<rt>まいあさ</rt></ruby> 6<ruby>時半<rt>じはん</rt></ruby>に <ruby>起<rt>お</rt></ruby>きます。<ruby>朝<rt>あさ</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べて、<ruby>新聞<rt>しんぶん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みます。\n<ruby>会社<rt>かいしゃ</rt></ruby>は 9<ruby>時<rt>とき</rt></ruby>から 5<ruby>時<rt>とき</rt></ruby>までです。<ruby>月曜日<rt>げつようび</rt></ruby>から <ruby>金曜日<rt>きんようび</rt></ruby>まで <ruby>働<rt>はたら</rt></ruby>きます。<ruby>昼休<rt>ひるやす</rt></ruby>みは 12<ruby>時<rt>とき</rt></ruby>から 1<ruby>時<rt>とき</rt></ruby>までです。\n\n<ruby>土曜日<rt>どようび</rt></ruby>と <ruby>日曜日<rt>にちようび</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みです。<ruby>土曜日<rt>どようび</rt></ruby>の <ruby>午前<rt>ごぜん</rt></ruby>、<ruby>図書館<rt>としょかん</rt></ruby>で <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>します。<ruby>日曜日<rt>にちようび</rt></ruby>は <ruby>働<rt>はたら</rt></ruby>きません。\n<ruby>毎晩<rt>まいばん</rt></ruby> 11<ruby>時半<rt>じはん</rt></ruby>に <ruby>寝<rt>ね</rt></ruby>ます。きのうは 12<ruby>時<rt>とき</rt></ruby>に <ruby>寝<rt>ね</rt></ruby>ました。<ruby>今朝<rt>けさ</rt></ruby>は 7<ruby>時<rt>とき</rt></ruby>に <ruby>起<rt>お</rt></ruby>きました。",
    "questions": [
      {
        "id": "dk4-1",
        "question": "ミラーさんは <ruby>毎朝<rt>まいあさ</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きますか。",
        "options": [
          "6<ruby>時<rt>とき</rt></ruby>",
          "6<ruby>時半<rt>じはん</rt></ruby>",
          "7<ruby>時<rt>とき</rt></ruby>",
          "7<ruby>時半<rt>じはん</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「ミラーさんは 毎朝 6時半に 起きます。」"
      },
      {
        "id": "dk4-2",
        "question": "<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>昼休<rt>ひるやす</rt></ruby>みは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。",
        "options": [
          "11<ruby>時<rt>とき</rt></ruby>から 12<ruby>時<rt>とき</rt></ruby>まで",
          "12<ruby>時<rt>とき</rt></ruby>から 1<ruby>時<rt>とき</rt></ruby>まで",
          "12<ruby>時半<rt>じはん</rt></ruby>から 1<ruby>時半<rt>じはん</rt></ruby>まで",
          "1<ruby>時<rt>とき</rt></ruby>から 2<ruby>時<rt>とき</rt></ruby>まで"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「昼休みは 12時から 1時までです。」"
      },
      {
        "id": "dk4-3",
        "question": "<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>休<rt>やす</rt></ruby>みは <ruby>何曜日<rt>なんようび</rt></ruby>ですか。",
        "options": [
          "<ruby>金曜日<rt>きんようび</rt></ruby>と <ruby>土曜日<rt>どようび</rt></ruby>",
          "<ruby>土曜日<rt>どようび</rt></ruby>と <ruby>日曜日<rt>にちようび</rt></ruby>",
          "<ruby>日曜日<rt>にちようび</rt></ruby>と <ruby>月曜日<rt>げつようび</rt></ruby>",
          "<ruby>水曜日<rt>すいようび</rt></ruby>だけ"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「土曜日と 日曜日は 休みです。」"
      },
      {
        "id": "dk4-4",
        "question": "<ruby>土曜日<rt>どようび</rt></ruby>の <ruby>午前<rt>ごぜん</rt></ruby>、ミラーさんは <ruby>何<rt>なに</rt></ruby>を しますか。",
        "options": [
          "<ruby>会社<rt>かいしゃ</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>きます",
          "デパートで <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>します",
          "<ruby>図書館<rt>としょかん</rt></ruby>で <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>します",
          "<ruby>部屋<rt>へや</rt></ruby>で <ruby>寝<rt>ね</rt></ruby>ます"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「土曜日の 午前、図書館で 日本語を 勉強します。」"
      },
      {
        "id": "dk4-5",
        "question": "<ruby>今朝<rt>けさ</rt></ruby> ミラーさんは <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きましたか。",
        "options": [
          "6<ruby>時<rt>とき</rt></ruby>",
          "6<ruby>時半<rt>じはん</rt></ruby>",
          "7<ruby>時<rt>とき</rt></ruby>",
          "8<ruby>時<rt>とき</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「今朝は 7時に 起きました。」"
      }
    ]
  },
  {
    "id": "dokkai-5",
    "lessonId": "bai-5",
    "title": "Bài Đọc Hiểu - Bài 5 Minna",
    "subTitle": "京都への 旅行 (Chuyến du lịch Kyoto)",
    "description": "Đoạn văn kể về chuyến đi du lịch Kyoto bằng tàu Shinkansen cùng bạn bè ứng dụng ngữ pháp Bài 5.",
    "passage": "わたしは <ruby>先週<rt>せんしゅう</rt></ruby>の <ruby>土曜日<rt>どようび</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>の サントスさんと <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。\n<ruby>東京駅<rt>とうきょうえき</rt></ruby>から <ruby>京都駅<rt>きょうとえき</rt></ruby>まで <ruby>新幹線<rt>しんかんせん</rt></ruby>で <ruby>行<rt>い</rt></ruby>きました。<ruby>新幹線<rt>しんかんせん</rt></ruby>は とても <ruby>速<rt>はや</rt></ruby>くて <ruby>便利<rt>べんり</rt></ruby>でした。2<ruby>時間<rt>じかん</rt></ruby> 15<ruby>分<rt>わ</rt></ruby> かかりました。\n\n<ruby>京都<rt>きょうと</rt></ruby>で <ruby>金閣寺<rt>きんかくじ</rt></ruby>や <ruby>清水寺<rt>きよみずでら</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<ruby>駅<rt>えき</rt></ruby>から バスで <ruby>行<rt>い</rt></ruby>きました。\n<ruby>京都<rt>きょうと</rt></ruby>の <ruby>桜<rt>さくら</rt></ruby>は とても きれいでした。<ruby>写真<rt>しゃしん</rt></ruby>を たくさん <ruby>撮<rt>と</rt></ruby>りました。\n<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>、<ruby>新幹線<rt>しんかんせん</rt></ruby>で <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>りました。<ruby>来週<rt>らいしゅう</rt></ruby>は <ruby>一人<rt>ひとり</rt></ruby>で <ruby>奈良<rt>なら</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<ruby>奈良<rt>なら</rt></ruby>へは <ruby>近鉄電車<rt>きんてつでんしゃ</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます。",
    "questions": [
      {
        "id": "dk5-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は だれと <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きましたか。",
        "options": [
          "<ruby>一人<rt>ひとり</rt></ruby>で",
          "サントスさんと",
          "<ruby>家族<rt>かぞく</rt></ruby>と",
          "ミラーさんと"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「友達の サントスさんと 京都へ 行きました。」"
      },
      {
        "id": "dk5-2",
        "question": "<ruby>東京<rt>とうきょう</rt></ruby>から <ruby>京都<rt>きょうと</rt></ruby>まで <ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きましたか。",
        "options": [
          "<ruby>飛行機<rt>ひこうき</rt></ruby>",
          "バス",
          "<ruby>新幹線<rt>しんかんせん</rt></ruby>",
          "<ruby>車<rt>くるま</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「東京駅から 京都駅まで 新幹線で 行きました。」"
      },
      {
        "id": "dk5-3",
        "question": "<ruby>新幹線<rt>しんかんせん</rt></ruby>で どのくらい かかりましたか。",
        "options": [
          "1<ruby>時間<rt>じかん</rt></ruby>",
          "2<ruby>時間<rt>じかん</rt></ruby>15<ruby>分<rt>わ</rt></ruby>",
          "3<ruby>時間半<rt>じかんはん</rt></ruby>",
          "4<ruby>時間<rt>じかん</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「2時間 15分 かかりました。」"
      },
      {
        "id": "dk5-4",
        "question": "<ruby>京都<rt>きょうと</rt></ruby>で <ruby>何<rt>なに</rt></ruby>で お<ruby>寺<rt>てら</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きましたか。",
        "options": [
          "タクシー",
          "<ruby>歩<rt>ある</rt></ruby>いて",
          "バス",
          "<ruby>自転車<rt>じてんしゃ</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「駅から バスで 行きました。」"
      },
      {
        "id": "dk5-5",
        "question": "<ruby>来週<rt>らいしゅう</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか。",
        "options": [
          "<ruby>京都<rt>きょうと</rt></ruby>",
          "<ruby>大阪<rt>おおさか</rt></ruby>",
          "<ruby>奈良<rt>なら</rt></ruby>",
          "<ruby>広島<rt>ひろしま</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「来週は 一人で 奈良へ 行きます。」"
      }
    ]
  },
  {
    "id": "dokkai-6",
    "lessonId": "bai-6",
    "title": "Bài Đọc Hiểu - Bài 6 Minna",
    "subTitle": "日曜日と お花見 (Ngày Chủ nhật và ngắm hoa)",
    "description": "Đoạn văn kể về các hoạt động ăn uống, giải trí và lời rủ đi ngắm hoa anh đào ứng dụng ngữ pháp Bài 6.",
    "passage": "きのうは <ruby>日曜日<rt>にちようび</rt></ruby>でした。<ruby>天気<rt>てんき</rt></ruby>は とても <ruby>良<rt>よ</rt></ruby>かったです。\nわたしは <ruby>朝<rt>あさ</rt></ruby> 8<ruby>時<rt>とき</rt></ruby>に <ruby>起<rt>お</rt></ruby>きました。パンと <ruby>卵<rt>たまご</rt></ruby>を <ruby>食<rt>た</rt></ruby>べて、コーヒーを <ruby>飲<rt>の</rt></ruby>みました。\n<ruby>午前<rt>ごぜん</rt></ruby>、<ruby>部屋<rt>へや</rt></ruby>で <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>宿題<rt>しゅくだい</rt></ruby>を しました。それから、テレビで サッカーの <ruby>試合<rt>しあい</rt></ruby>を <ruby>見<rt>み</rt></ruby>ました。\n\n<ruby>昼<rt>ひる</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>の <ruby>山田<rt>やまだ</rt></ruby>さんに <ruby>電話<rt>でんわ</rt></ruby>を かけました。「いっしょに <ruby>公園<rt>こうえん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きませんか。<ruby>桜<rt>さくら</rt></ruby>が きれいですよ。」と<ruby>言<rt>い</rt></ruby>いました。\n<ruby>山田<rt>やまだ</rt></ruby>さんは「いいですね。<ruby>行<rt>い</rt></ruby>きましょう」と <ruby>答<rt>こた</rt></ruby>えました。\nわたしたちは <ruby>公園<rt>こうえん</rt></ruby>で お<ruby>花<rt>はな</rt></ruby><ruby>見<rt>み</rt></ruby>を しました。お<ruby>弁当<rt>べんとう</rt></ruby>を <ruby>食<rt>た</rt></ruby>べて、お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みました。とても <ruby>楽<rt>たの</rt></ruby>しかったです。",
    "questions": [
      {
        "id": "dk6-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>朝<rt>あさ</rt></ruby> <ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。",
        "options": [
          "ご<ruby>飯<rt>はん</rt></ruby>と <ruby>魚<rt>さかな</rt></ruby>",
          "パンと <ruby>卵<rt>たまご</rt></ruby>",
          "サンドイッチ",
          "<ruby>何<rt>なに</rt></ruby>も <ruby>食<rt>た</rt></ruby>べませんでした"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「パンと 卵を 食べて、コーヒーを 飲みました。」"
      },
      {
        "id": "dk6-2",
        "question": "<ruby>午前<rt>ごぜん</rt></ruby>、<ruby>部屋<rt>へや</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を しましたか。",
        "options": [
          "<ruby>掃除<rt>そうじ</rt></ruby>を しました",
          "<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>宿題<rt>しゅくだい</rt></ruby>を しました",
          "<ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みました",
          "<ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>ました"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「部屋で 日本語の 宿題を しました。」"
      },
      {
        "id": "dk6-3",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は だれに <ruby>電話<rt>でんわ</rt></ruby>を かけましたか。",
        "options": [
          "ミラーさん",
          "サントスさん",
          "<ruby>山田<rt>やまだ</rt></ruby>さん",
          "<ruby>先生<rt>せんせい</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「友達の 山田さんに 電話を かけました。」"
      },
      {
        "id": "dk6-4",
        "question": "<ruby>二人<rt>ふたり</rt></ruby>は どこで お<ruby>花<rt>はな</rt></ruby><ruby>見<rt>み</rt></ruby>を しましたか。",
        "options": [
          "お<ruby>寺<rt>てら</rt></ruby>",
          "<ruby>庭<rt>にわ</rt></ruby>",
          "<ruby>公園<rt>こうえん</rt></ruby>",
          "<ruby>山<rt>やま</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「わたしたちは 公園で お花見を しました。」"
      },
      {
        "id": "dk6-5",
        "question": "<ruby>公園<rt>こうえん</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を しましたか。",
        "options": [
          "テニスを しました",
          "サッカーを しました",
          "お<ruby>弁当<rt>べんとう</rt></ruby>を <ruby>食<rt>た</rt></ruby>べて、お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みました",
          "<ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みました"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「お弁当を 食べて、お茶を 飲みました。」"
      }
    ]
  },
  {
    "id": "dokkai-7",
    "lessonId": "bai-7",
    "title": "Bài Đọc Hiểu - Bài 7 Minna",
    "subTitle": "誕生日と プレゼント (Sinh nhật và những món quà)",
    "description": "Đoạn văn kể về ngày sinh nhật, tặng quà cho nhau và gửi thư thiệp mừng ứng dụng ngữ pháp Bài 7.",
    "passage": "きのうは わたしの <ruby>誕生日<rt>たんじょうび</rt></ruby>でした。24<ruby>歳<rt>さい</rt></ruby>に なりました。\n<ruby>会社<rt>かいしゃ</rt></ruby>で <ruby>同僚<rt>どうりょう</rt></ruby>の <ruby>木村<rt>きむら</rt></ruby>さんに きれいな <ruby>花<rt>はな</rt></ruby>を もらいました。とても うれしかったです。\n<ruby>母<rt>はは</rt></ruby>から <ruby>手紙<rt>てがみ</rt></ruby>と お<ruby>金<rt>かね</rt></ruby>をもらいました。<ruby>手紙<rt>てがみ</rt></ruby>は ベトナム<ruby>語<rt>ご</rt></ruby>で <ruby>書<rt>か</rt></ruby>いてありました。\n\n<ruby>夜<rt>よる</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と レストランで <ruby>食<rt>た</rt></ruby><ruby>事<rt>こと</rt></ruby>を しました。スプーンと フォークで おいしい <ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました。\nわたしは <ruby>友達<rt>ともだち</rt></ruby>に「もう <ruby>日本語<rt>にほんご</rt></ruby>の レポートを <ruby>出<rt>で</rt></ruby>しましたか」と <ruby>聞<rt>き</rt></ruby>きました。\n<ruby>友達<rt>ともだち</rt></ruby>は「いいえ、まだです。これから <ruby>書<rt>か</rt></ruby>きます」と <ruby>答<rt>こた</rt></ruby>えました。\nあした、わたしは <ruby>母<rt>はは</rt></ruby>に パソコンで メールを <ruby>送<rt>おく</rt></ruby>ります。",
    "questions": [
      {
        "id": "dk7-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>木村<rt>きむら</rt></ruby>さんに <ruby>何<rt>なに</rt></ruby>を もらいましたか。",
        "options": [
          "きれいな <ruby>花<rt>はな</rt></ruby>",
          "<ruby>時計<rt>とけい</rt></ruby>",
          "<ruby>本<rt>ほん</rt></ruby>",
          "チョコレート"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「木村さんに きれいな 花を もらいました。」"
      },
      {
        "id": "dk7-2",
        "question": "<ruby>母<rt>はは</rt></ruby>の <ruby>手紙<rt>てがみ</rt></ruby>は <ruby>何語<rt>なにご</rt></ruby>で <ruby>書<rt>か</rt></ruby>いてありましたか。",
        "options": [
          "<ruby>日本語<rt>にほんご</rt></ruby>",
          "<ruby>英語<rt>えいご</rt></ruby>",
          "ベトナム<ruby>語<rt>ご</rt></ruby>",
          "フランス<ruby>語<rt>ご</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「手紙は ベトナム語で 書いてありました。」"
      },
      {
        "id": "dk7-3",
        "question": "レストランで <ruby>何<rt>なに</rt></ruby>で <ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。",
        "options": [
          "はし",
          "<ruby>手<rt>て</rt></ruby>",
          "スプーンと フォーク",
          "ナイフだけ"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「スプーンと フォークで おいしい 料理を 食べました。」"
      },
      {
        "id": "dk7-4",
        "question": "<ruby>友達<rt>ともだち</rt></ruby>は もう レポートを <ruby>出<rt>で</rt></ruby>しましたか。",
        "options": [
          "はい、もう <ruby>出<rt>で</rt></ruby>しました",
          "いいえ、まだです",
          "<ruby>出<rt>で</rt></ruby>しませんでした",
          "わかりません"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「いいえ、まだです。これから 書きます」"
      },
      {
        "id": "dk7-5",
        "question": "あした、<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>で メールを <ruby>送<rt>おく</rt></ruby>りますか。",
        "options": [
          "ケータイ",
          "パソコン",
          "ファクス",
          "<ruby>手紙<rt>てがみ</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「母に パソコンで メールを 送ります。」"
      }
    ]
  },
  {
    "id": "dokkai-8",
    "lessonId": "bai-8",
    "title": "Bài Đọc Hiểu - Bài 8 Minna",
    "subTitle": "わたしの 町 (Thị trấn của tôi)",
    "description": "Đoạn văn miêu tả phong cảnh, con người, đồ ăn ngon và thời tiết bằng tính từ い và tính từ な ứng dụng Bài 8.",
    "passage": "わたしが <ruby>住<rt>す</rt></ruby>んで いる <ruby>町<rt>まち</rt></ruby>は <ruby>神戸<rt>こうべ</rt></ruby>です。<ruby>神戸<rt>こうべ</rt></ruby>は <ruby>海<rt>うみ</rt></ruby>と <ruby>山<rt>やま</rt></ruby>が ある きれいな <ruby>町<rt>まち</rt></ruby>です。\nあまり <ruby>大<rt>おお</rt></ruby>きい <ruby>町<rt>まち</rt></ruby>じゃありませんが、とても にぎやかで <ruby>便利<rt>べんり</rt></ruby>です。\n<ruby>神戸<rt>こうべ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は <ruby>親切<rt>しんせつ</rt></ruby>です。そして、<ruby>神戸<rt>こうべ</rt></ruby>の <ruby>牛肉<rt>ぎゅうにく</rt></ruby>は とても <ruby>有名<rt>ゆうめい</rt></ruby>で おいしいです。でも、<ruby>少<rt>すく</rt></ruby>し <ruby>高<rt>たか</rt></ruby>いです。\n\nわたしの アパートは <ruby>静<rt>しず</rt></ruby>かな <ruby>所<rt>ところ</rt></ruby>に あります。<ruby>部屋<rt>へや</rt></ruby>は あまり <ruby>広<rt>ひろ</rt></ruby>くないですが、<ruby>新<rt>あたら</rt></ruby>しいです。\n<ruby>日本<rt>にほん</rt></ruby>の <ruby>夏<rt>なつ</rt></ruby>は とても <ruby>暑<rt>あつ</rt></ruby>いですが、<ruby>秋<rt>あき</rt></ruby>は <ruby>涼<rt>すず</rt></ruby>しくて <ruby>気持<rt>きも</rt></ruby>ちが いいです。わたしは <ruby>神戸<rt>こうべ</rt></ruby>が とても <ruby>好<rt>す</rt></ruby>きです。",
    "questions": [
      {
        "id": "dk8-1",
        "question": "<ruby>神戸<rt>こうべ</rt></ruby>は どんな <ruby>町<rt>まち</rt></ruby>ですか。",
        "options": [
          "<ruby>静<rt>しず</rt></ruby>かで <ruby>古<rt>ふる</rt></ruby>い <ruby>町<rt>まち</rt></ruby>",
          "<ruby>海<rt>うみ</rt></ruby>と <ruby>山<rt>やま</rt></ruby>が ある きれいな <ruby>町<rt>まち</rt></ruby>",
          "<ruby>大<rt>おお</rt></ruby>きくて <ruby>汚<rt>きたな</rt></ruby>い <ruby>町<rt>まち</rt></ruby>",
          "<ruby>雪<rt>ゆき</rt></ruby>が <ruby>多<rt>おお</rt></ruby>い <ruby>寒<rt>さむ</rt></ruby>い <ruby>町<rt>まち</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「神戸は 海と 山が ある きれいな 町です。」"
      },
      {
        "id": "dk8-2",
        "question": "<ruby>神戸<rt>こうべ</rt></ruby>の <ruby>牛肉<rt>ぎゅうにく</rt></ruby>は どうですか。",
        "options": [
          "<ruby>安<rt>やす</rt></ruby>くて おいしい",
          "<ruby>有名<rt>ゆうめい</rt></ruby>で おいしいが、<ruby>少<rt>すく</rt></ruby>し <ruby>高<rt>たか</rt></ruby>い",
          "まずい",
          "あまり <ruby>有名<rt>ゆうめい</rt></ruby>じゃない"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「神戸の 牛肉は とても 有名で おいしいです。でも、少し 高いです。」"
      },
      {
        "id": "dk8-3",
        "question": "アパートの <ruby>部屋<rt>へや</rt></ruby>は どうですか。",
        "options": [
          "<ruby>広<rt>ひろ</rt></ruby>くて <ruby>古<rt>ふる</rt></ruby>い",
          "あまり <ruby>広<rt>ひろ</rt></ruby>くないが、<ruby>新<rt>あたら</rt></ruby>しい",
          "とても <ruby>広<rt>ひろ</rt></ruby>い",
          "<ruby>静<rt>しず</rt></ruby>かじゃない"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「部屋は あまり 広くないですが、新しいです。」"
      },
      {
        "id": "dk8-4",
        "question": "<ruby>日本<rt>にほん</rt></ruby>の <ruby>秋<rt>あき</rt></ruby>は どうですか。",
        "options": [
          "とても <ruby>寒<rt>さむ</rt></ruby>い",
          "とても <ruby>暑<rt>あつ</rt></ruby>い",
          "<ruby>涼<rt>すず</rt></ruby>しくて <ruby>気持<rt>きも</rt></ruby>ちが いい",
          "<ruby>雨<rt>あめ</rt></ruby>が <ruby>多<rt>おお</rt></ruby>い"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「秋は 涼しくて 気持ちが いいです。」"
      },
      {
        "id": "dk8-5",
        "question": "<ruby>正<rt>ただ</rt></ruby>しい <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "<ruby>神戸<rt>こうべ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は <ruby>親切<rt>しんせつ</rt></ruby>じゃありません。",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>の アパートは にぎやかな <ruby>所<rt>ところ</rt></ruby>に あります。",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>神戸<rt>こうべ</rt></ruby>が <ruby>嫌<rt>きら</rt></ruby>いです。",
          "<ruby>神戸<rt>こうべ</rt></ruby>は あまり <ruby>大<rt>おお</rt></ruby>きい <ruby>町<rt>まち</rt></ruby>じゃありません。"
        ],
        "correctIdx": 3,
        "explanation": "Trong bài:「あまり 大きい 町じゃありませんが、とても にぎやかで 便利です。」"
      }
    ]
  },
  {
    "id": "dokkai-9",
    "lessonId": "bai-9",
    "title": "Bài Đọc Hiểu - Bài 9 Minna",
    "subTitle": "趣味と 週末 (Sở thích và những ngày cuối tuần)",
    "description": "Đoạn văn kể về sở thích âm nhạc, thể thao, khả năng tiếng Nhật và lý do từ chối lời mời ứng dụng Bài 9.",
    "passage": "わたしは <ruby>音楽<rt>おんがく</rt></ruby>が <ruby>大好<rt>だいす</rt></ruby>きです。<ruby>特<rt>とく</rt></ruby>に クラシック<ruby>音楽<rt>おんがく</rt></ruby>が <ruby>好<rt>す</rt></ruby>きです。ピアノも <ruby>少<rt>すく</rt></ruby>し できます。\nスポーツも <ruby>好<rt>す</rt></ruby>きです。<ruby>週末<rt>しゅうまつ</rt></ruby>は よく <ruby>友達<rt>ともだち</rt></ruby>と サッカーを します。テニスは あまり <ruby>上手<rt>じょうず</rt></ruby>じゃありません。\n\n<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>勉強<rt>べんきょう</rt></ruby>は どうですか。ひらがなと カタカナは よく <ruby>分<rt>わ</rt></ruby>かりますが、<ruby>漢字<rt>かんじ</rt></ruby>は <ruby>全然<rt>ぜんぜん</rt></ruby> <ruby>分<rt>わ</rt></ruby>かりません。<ruby>漢字<rt>かんじ</rt></ruby>は とても <ruby>難<rt>むずか</rt></ruby>しいです。\nあしたは <ruby>日曜日<rt>にちようび</rt></ruby>ですが、<ruby>友達<rt>ともだち</rt></ruby>と <ruby>遊<rt>あそ</rt></ruby>びません。<ruby>月曜日<rt>げつようび</rt></ruby>に <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>試験<rt>しけん</rt></ruby>が ありますから、うちで <ruby>一生懸命<rt>いっしょうけんめい</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby>します。",
    "questions": [
      {
        "id": "dk9-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は どんな <ruby>音楽<rt>おんがく</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。",
        "options": [
          "ジャズ",
          "クラシック<ruby>音楽<rt>おんがく</rt></ruby>",
          "ロック",
          "ポップス"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「特に クラシック音楽が 好きです。」"
      },
      {
        "id": "dk9-2",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>の テニスは どうですか。",
        "options": [
          "とても <ruby>上手<rt>じょうず</rt></ruby>です",
          "あまり <ruby>上手<rt>じょうず</rt></ruby>じゃありません",
          "<ruby>全然<rt>ぜんぜん</rt></ruby> できません",
          "プロです"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「テニスは あまり 上手じゃありません。」"
      },
      {
        "id": "dk9-3",
        "question": "<ruby>漢字<rt>かんじ</rt></ruby>は どうですか。",
        "options": [
          "よく <ruby>分<rt>わ</rt></ruby>かります",
          "だいたい <ruby>分<rt>わ</rt></ruby>かります",
          "<ruby>全然<rt>ぜんぜん</rt></ruby> <ruby>分<rt>わ</rt></ruby>かりません",
          "<ruby>少<rt>すく</rt></ruby>し <ruby>読<rt>よ</rt></ruby>めます"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「漢字は 全然 分かりません。とても 難しいです。」"
      },
      {
        "id": "dk9-4",
        "question": "どうして あした <ruby>友達<rt>ともだち</rt></ruby>と <ruby>遊<rt>あそ</rt></ruby>びませんか。",
        "options": [
          "<ruby>用事<rt>ようじ</rt></ruby>が ありますから",
          "<ruby>月曜日<rt>げつようび</rt></ruby>に <ruby>試験<rt>しけん</rt></ruby>が ありますから",
          "お<ruby>金<rt>かね</rt></ruby>が ありませんから",
          "<ruby>病気<rt>びょうき</rt></ruby>ですから"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「月曜日に 日本語の 試験が ありますから、うちで 一生懸命 勉強します。」"
      },
      {
        "id": "dk9-5",
        "question": "<ruby>正<rt>ただ</rt></ruby>しい <ruby>文<rt>ぶん</rt></ruby>は どれですか。",
        "options": [
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は ピアノが <ruby>全然<rt>ぜんぜん</rt></ruby> できません。",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は スポーツが <ruby>嫌<rt>きら</rt></ruby>いです。",
          "ひらがなと カタカナは よく <ruby>分<rt>わ</rt></ruby>かります。",
          "あした サッカーの <ruby>試合<rt>しあい</rt></ruby>を します。"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「ひらがなと カタカナは よく 分かります」"
      }
    ]
  },
  {
    "id": "dokkai-10",
    "lessonId": "bai-10",
    "title": "Bài Đọc Hiểu - Bài 10 Minna",
    "subTitle": "わたしの 部屋と ペット (Phòng của tôi và thú cưng)",
    "description": "Đoạn văn miêu tả chi tiết vị trí các đồ vật trong phòng và chú mèo cưng ứng dụng ngữ pháp Bài 10.",
    "passage": "わたしの <ruby>部屋<rt>へや</rt></ruby>は 2<ruby>階<rt>かい</rt></ruby>に あります。<ruby>部屋<rt>へや</rt></ruby>の ドアを <ruby>開<rt>あ</rt></ruby>けると、<ruby>右側<rt>みぎがわ</rt></ruby>に ベッドが あります。\nベッドの <ruby>隣<rt>となり</rt></ruby>に <ruby>机<rt>つくえ</rt></ruby>が あります。<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に パソコンや ノートなどが あります。\n<ruby>机<rt>つくえ</rt></ruby>の <ruby>下<rt>した</rt></ruby>に <ruby>小<rt>ちい</rt></ruby>さい ごみ<ruby>箱<rt>はこ</rt></ruby>が あります。<ruby>本棚<rt>ほんだな</rt></ruby>は <ruby>部屋<rt>へや</rt></ruby>の <ruby>左側<rt>ひだりがわ</rt></ruby>に あります。<ruby>本棚<rt>ほんだな</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>本<rt>ほん</rt></ruby>が たくさん あります。\n\n<ruby>部屋<rt>へや</rt></ruby>の <ruby>窓<rt>まど</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くに <ruby>白<rt>しろ</rt></ruby>い <ruby>猫<rt>ねこ</rt></ruby>が います。<ruby>名前<rt>なまえ</rt></ruby>は シロです。\nシロは いつも ベッドの <ruby>上<rt>うえ</rt></ruby>で <ruby>寝<rt>ね</rt></ruby>て います。<ruby>部屋<rt>へや</rt></ruby>の <ruby>中<rt>なか</rt></ruby>には テレビは ありません。",
    "questions": [
      {
        "id": "dk10-1",
        "question": "ベッドは どこに ありますか。",
        "options": [
          "<ruby>部屋<rt>へや</rt></ruby>の <ruby>左側<rt>ひだりがわ</rt></ruby>",
          "<ruby>部屋<rt>へや</rt></ruby>の <ruby>右側<rt>みぎがわ</rt></ruby>",
          "<ruby>本棚<rt>ほんだな</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>",
          "<ruby>外<rt>そと</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「右側に ベッドが あります。」"
      },
      {
        "id": "dk10-2",
        "question": "<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
        "options": [
          "パソコンや ノートなど",
          "<ruby>猫<rt>ねこ</rt></ruby>",
          "テレビ",
          "<ruby>電話<rt>でんわ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「机の 上に パソコンや ノートなどが あります。」"
      },
      {
        "id": "dk10-3",
        "question": "<ruby>机<rt>つくえ</rt></ruby>の <ruby>下<rt>した</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
        "options": [
          "<ruby>本棚<rt>ほんだな</rt></ruby>",
          "<ruby>小<rt>ちい</rt></ruby>さい ごみ<ruby>箱<rt>はこ</rt></ruby>",
          "<ruby>猫<rt>ねこ</rt></ruby>",
          "<ruby>靴<rt>くつ</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「机の 下に 小さい ごみ箱が あります。」"
      },
      {
        "id": "dk10-4",
        "question": "<ruby>猫<rt>ねこ</rt></ruby>の シロは いつも どこで <ruby>寝<rt>ね</rt></ruby>ますか。",
        "options": [
          "<ruby>机<rt>つくえ</rt></ruby>の <ruby>下<rt>した</rt></ruby>",
          "<ruby>本棚<rt>ほんだな</rt></ruby>の <ruby>中<rt>なか</rt></ruby>",
          "ベッドの <ruby>上<rt>うえ</rt></ruby>",
          "<ruby>窓<rt>まど</rt></ruby>の <ruby>外<rt>そと</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「シロは いつも ベッドの 上で 寝て います。」"
      },
      {
        "id": "dk10-5",
        "question": "<ruby>部屋<rt>へや</rt></ruby>に ない <ruby>物<rt>もの</rt></ruby>は どれですか。",
        "options": [
          "ベッド",
          "<ruby>机<rt>つくえ</rt></ruby>",
          "<ruby>本棚<rt>ほんだな</rt></ruby>",
          "テレビ"
        ],
        "correctIdx": 3,
        "explanation": "Trong bài:「部屋の 中には テレビは ありません。」"
      }
    ]
  },
  {
    "id": "dokkai-11",
    "lessonId": "bai-11",
    "title": "Bài Đọc Hiểu - Bài 11 Minna",
    "subTitle": "家族と 日本での 生活 (Gia đình và cuộc sống tại Nhật)",
    "description": "Đoạn văn giới thiệu các thành viên trong gia đình, thời gian học tập và liên lạc về nước ứng dụng Bài 11.",
    "passage": "わたしは ベトナムから <ruby>来<rt>き</rt></ruby>た <ruby>留学生<rt>りゅうがくせい</rt></ruby>です。<ruby>家族<rt>かぞく</rt></ruby>は <ruby>全部<rt>ぜんぶ</rt></ruby>で 5<ruby>人<rt>ひと</rt></ruby>です。\n<ruby>両親<rt>りょうしん</rt></ruby>と <ruby>兄<rt>あに</rt></ruby>が 1<ruby>人<rt>ひと</rt></ruby>、<ruby>妹<rt>いもうと</rt></ruby>が 1<ruby>人<rt>ひと</rt></ruby> います。<ruby>兄<rt>あに</rt></ruby>は <ruby>会社員<rt>かいしゃいん</rt></ruby>です。<ruby>妹<rt>いもうと</rt></ruby>は <ruby>高校生<rt>こうこうせい</rt></ruby>です。\nわたしは <ruby>日本<rt>にほん</rt></ruby>に <ruby>来<rt>き</rt></ruby>てから、ちょうど 1<ruby>年半<rt>ねんはん</rt></ruby>に なりました。\n\n<ruby>毎日<rt>まいにち</rt></ruby> 4<ruby>時間<rt>じかん</rt></ruby> <ruby>日本語学校<rt>にほんごがっこう</rt></ruby>で <ruby>勉強<rt>べんきょう</rt></ruby>します。<ruby>学校<rt>がっこう</rt></ruby>には <ruby>色<rt>いろ</rt></ruby>々な <ruby>国<rt>くに</rt></ruby>の <ruby>留学生<rt>りゅうがくせい</rt></ruby>が 20<ruby>人<rt>ひと</rt></ruby> います。\nわたしは 1<ruby>週間<rt>しゅうかん</rt></ruby>に 1<ruby>回<rt>かい</rt></ruby>、<ruby>国<rt>くに</rt></ruby>へ <ruby>電話<rt>でんわ</rt></ruby>を かけます。<ruby>母<rt>はは</rt></ruby>と 30<ruby>分<rt>わ</rt></ruby>くらい <ruby>話<rt>はな</rt></ruby>します。\n<ruby>手紙<rt>てがみ</rt></ruby>は あまり <ruby>書<rt>か</rt></ruby>きません。メールを 1か<ruby>月<rt>つき</rt></ruby>に 3<ruby>回<rt>かい</rt></ruby>くらい <ruby>送<rt>おく</rt></ruby>ります。",
    "questions": [
      {
        "id": "dk11-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>の <ruby>家族<rt>かぞく</rt></ruby>は <ruby>全部<rt>ぜんぶ</rt></ruby>で <ruby>何人<rt>なんにん</rt></ruby>ですか。",
        "options": [
          "3<ruby>人<rt>ひと</rt></ruby>",
          "4<ruby>人<rt>ひと</rt></ruby>",
          "5<ruby>人<rt>ひと</rt></ruby>",
          "6<ruby>人<rt>ひと</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「家族は 全部で 5人です。」"
      },
      {
        "id": "dk11-2",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>には <ruby>兄弟<rt>きょうだい</rt></ruby>が <ruby>何人<rt>なんにん</rt></ruby> いますか。",
        "options": [
          "<ruby>兄<rt>あに</rt></ruby>が 1<ruby>人<rt>ひと</rt></ruby>と <ruby>妹<rt>いもうと</rt></ruby>が 1<ruby>人<rt>ひと</rt></ruby>",
          "<ruby>兄<rt>あに</rt></ruby>が 2<ruby>人<rt>ひと</rt></ruby>",
          "<ruby>弟<rt>おとうと</rt></ruby>が 1<ruby>人<rt>ひと</rt></ruby>",
          "<ruby>一人<rt>ひとり</rt></ruby>っ<ruby>子<rt>こ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「両親と 兄が 1人、妹が 1人 います。」"
      },
      {
        "id": "dk11-3",
        "question": "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby><ruby>間<rt>あいだ</rt></ruby> <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しますか。",
        "options": [
          "2<ruby>時間<rt>じかん</rt></ruby>",
          "3<ruby>時間<rt>じかん</rt></ruby>",
          "4<ruby>時間<rt>じかん</rt></ruby>",
          "6<ruby>時間<rt>じかん</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「毎日 4時間 日本語学校で 勉強します。」"
      },
      {
        "id": "dk11-4",
        "question": "<ruby>国<rt>くに</rt></ruby>へ どのくらい <ruby>電話<rt>でんわ</rt></ruby>を かけますか。",
        "options": [
          "1<ruby>日<rt>ひ</rt></ruby>に 1<ruby>回<rt>かい</rt></ruby>",
          "1<ruby>週間<rt>しゅうかん</rt></ruby>に 1<ruby>回<rt>かい</rt></ruby>",
          "1か<ruby>月<rt>つき</rt></ruby>に 1<ruby>回<rt>かい</rt></ruby>",
          "<ruby>全然<rt>ぜんぜん</rt></ruby> かけません"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「わたしは 1週間に 1回、国へ 電話を かけます。」"
      },
      {
        "id": "dk11-5",
        "question": "メールは 1か<ruby>月<rt>つき</rt></ruby>に <ruby>何回<rt>なんかい</rt></ruby> <ruby>送<rt>おく</rt></ruby>りますか。",
        "options": [
          "1<ruby>回<rt>かい</rt></ruby>",
          "2<ruby>回<rt>かい</rt></ruby>",
          "3<ruby>回<rt>かい</rt></ruby>くらい",
          "5<ruby>回<rt>かい</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「メールを 1か月に 3回くらい 送ります。」"
      }
    ]
  },
  {
    "id": "dokkai-12",
    "lessonId": "bai-12",
    "title": "Bài Đọc Hiểu - Bài 12 Minna",
    "subTitle": "北海道と 沖縄の 旅行 (Du lịch Hokkaido và Okinawa)",
    "description": "Đoạn văn so sánh thời tiết, phong cảnh, đồ ăn giữa miền Bắc (Hokkaido) và miền Nam (Okinawa) ứng dụng Bài 12.",
    "passage": "わたしは <ruby>去年<rt>きょねん</rt></ruby> <ruby>北海道<rt>ほっかいどう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<ruby>先月<rt>せんげつ</rt></ruby> <ruby>沖縄<rt>おきなわ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。\n<ruby>北海道<rt>ほっかいどう</rt></ruby>と <ruby>沖縄<rt>おきなわ</rt></ruby>と どちらが <ruby>寒<rt>さむ</rt></ruby>かったですか。<ruby>北海道<rt>ほっかいどう</rt></ruby>の ほうが ずっと <ruby>寒<rt>さむ</rt></ruby>かったです。<ruby>雪<rt>ゆき</rt></ruby>が たくさん <ruby>降<rt>ふ</rt></ruby>りました。\n<ruby>沖縄<rt>おきなわ</rt></ruby>は とても <ruby>暖<rt>あたた</rt></ruby>かかったです。<ruby>海<rt>うみ</rt></ruby>が <ruby>青<rt>あお</rt></ruby>くて、とても きれいでした。\n\n<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>は どちらも おいしかったです。<ruby>北海道<rt>ほっかいどう</rt></ruby>では <ruby>魚<rt>さかな</rt></ruby>や カニが おいしかったです。<ruby>沖縄<rt>おきなわ</rt></ruby>では <ruby>豚肉<rt>ぶたにく</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>が いちばん おいしかったです。\n<ruby>日本<rt>にほん</rt></ruby>の <ruby>季節<rt>きせつ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>で、わたしは <ruby>秋<rt>あき</rt></ruby>が いちばん <ruby>好<rt>す</rt></ruby>きです。<ruby>涼<rt>すず</rt></ruby>しくて、<ruby>果物<rt>くだもの</rt></ruby>が おいしいですから。",
    "questions": [
      {
        "id": "dk12-1",
        "question": "<ruby>北海道<rt>ほっかいどう</rt></ruby>と <ruby>沖縄<rt>おきなわ</rt></ruby>と どちらが <ruby>寒<rt>さむ</rt></ruby>かったですか。",
        "options": [
          "<ruby>沖縄<rt>おきなわ</rt></ruby>の ほうが <ruby>寒<rt>さむ</rt></ruby>かった",
          "<ruby>北海道<rt>ほっかいどう</rt></ruby>の ほうが ずっと <ruby>寒<rt>さむ</rt></ruby>かった",
          "どちらも <ruby>同<rt>おな</rt></ruby>じくらい",
          "どちらも <ruby>暖<rt>あたた</rt></ruby>かかった"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「北海道の ほうが ずっと 寒かったです。」"
      },
      {
        "id": "dk12-2",
        "question": "<ruby>沖縄<rt>おきなわ</rt></ruby>の <ruby>海<rt>うみ</rt></ruby>は どうでしたか。",
        "options": [
          "<ruby>寒<rt>さむ</rt></ruby>かった",
          "<ruby>汚<rt>きたな</rt></ruby>かった",
          "<ruby>青<rt>あお</rt></ruby>くて、とても きれいだった",
          "<ruby>人<rt>ひと</rt></ruby>が <ruby>多<rt>おお</rt></ruby>かった"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「海が 青くて、とても きれいでした。」"
      },
      {
        "id": "dk12-3",
        "question": "<ruby>沖縄<rt>おきなわ</rt></ruby>で いちばん おいしかった <ruby>料理<rt>りょうり</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。",
        "options": [
          "<ruby>魚<rt>さかな</rt></ruby>",
          "カニ",
          "<ruby>豚肉<rt>ぶたにく</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>",
          "ラーメン"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「沖縄では 豚肉の 料理が いちばん おいしかったです。」"
      },
      {
        "id": "dk12-4",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は どの <ruby>季節<rt>きせつ</rt></ruby>が いちばん <ruby>好<rt>す</rt></ruby>きですか。",
        "options": [
          "<ruby>春<rt>はる</rt></ruby>",
          "<ruby>夏<rt>なつ</rt></ruby>",
          "<ruby>秋<rt>あき</rt></ruby>",
          "<ruby>冬<rt>ふゆ</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「日本の 季節の 中で、わたしは 秋が いちばん 好きです。」"
      },
      {
        "id": "dk12-5",
        "question": "どうして その <ruby>季節<rt>きせつ</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。",
        "options": [
          "<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るから",
          "<ruby>涼<rt>すず</rt></ruby>しくて、<ruby>果物<rt>くだもの</rt></ruby>が おいしいから",
          "<ruby>海<rt>うみ</rt></ruby>で <ruby>泳<rt>およ</rt></ruby>げるから",
          "<ruby>休<rt>やす</rt></ruby>みが <ruby>長<rt>なが</rt></ruby>いから"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「涼しくて、果物が おいしいですから。」"
      }
    ]
  },
  {
    "id": "dokkai-13",
    "lessonId": "bai-13",
    "title": "Bài Đọc Hiểu - Bài 13 Minna",
    "subTitle": "夏休みに したい こと (Những điều muốn làm vào kỳ nghỉ hè)",
    "description": "Đoạn văn kể về mong muốn mua sắm, dự định đi chơi và mục đích di chuyển ứng dụng cấu trúc 〜たい, 欲しい, 〜に行く Bài 13.",
    "passage": "もうすぐ <ruby>楽<rt>たの</rt></ruby>しい <ruby>夏休<rt>なつやす</rt></ruby>みです。<ruby>夏休<rt>なつやす</rt></ruby>みは 2<ruby>週間<rt>しゅうかん</rt></ruby> あります。\nわたしは <ruby>今<rt>いま</rt></ruby> <ruby>新<rt>あたら</rt></ruby>しい カメラが <ruby>欲<rt>ほ</rt></ruby>しいです。<ruby>旅行<rt>りょこう</rt></ruby>で たくさん <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りたいですから。\nあした デパートへ カメラを <ruby>買<rt>か</rt></ruby>いに <ruby>行<rt>い</rt></ruby>きます。\n\n<ruby>夏休<rt>なつやす</rt></ruby>みに <ruby>友達<rt>ともだち</rt></ruby>と どこかへ <ruby>行<rt>い</rt></ruby>きたいです。<ruby>北海道<rt>ほっかいどう</rt></ruby>へ <ruby>涼<rt>すず</rt></ruby>しい <ruby>風<rt>かぜ</rt></ruby>を <ruby>感<rt>かん</rt></ruby>じに <ruby>行<rt>い</rt></ruby>きたいです。\nまた、<ruby>海<rt>うみ</rt></ruby>で <ruby>泳<rt>およ</rt></ruby>ぎたいです。おいしい <ruby>海鮮料理<rt>かいせんりょうり</rt></ruby>も <ruby>食<rt>た</rt></ruby>べたいです。\n<ruby>仕事<rt>しごと</rt></ruby>を たくさん しましたから、<ruby>今<rt>いま</rt></ruby>は とても <ruby>疲<rt>つか</rt></ruby>れています。<ruby>夏休<rt>なつやす</rt></ruby>みは ゆっくり <ruby>休<rt>やす</rt></ruby>みたいです。",
    "questions": [
      {
        "id": "dk13-1",
        "question": "<ruby>夏休<rt>なつやす</rt></ruby>みは どのくらい ありますか。",
        "options": [
          "1<ruby>週間<rt>しゅうかん</rt></ruby>",
          "2<ruby>週間<rt>しゅうかん</rt></ruby>",
          "1か<ruby>月<rt>つき</rt></ruby>",
          "3<ruby>日<rt>ひ</rt></ruby>だけ"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「夏休みは 2週間 あります。」"
      },
      {
        "id": "dk13-2",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>今<rt>いま</rt></ruby> <ruby>何<rt>なに</rt></ruby>が <ruby>欲<rt>ほ</rt></ruby>しいですか。",
        "options": [
          "<ruby>新<rt>あたら</rt></ruby>しい <ruby>車<rt>くるま</rt></ruby>",
          "<ruby>新<rt>あたら</rt></ruby>しい パソコン",
          "<ruby>新<rt>あたら</rt></ruby>しい カメラ",
          "お<ruby>金<rt>かね</rt></ruby>"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài:「わたしは 今 新しい カメラが 欲しいです。」"
      },
      {
        "id": "dk13-3",
        "question": "あした デパートへ <ruby>何<rt>なに</rt></ruby>を しに <ruby>行<rt>い</rt></ruby>きますか。",
        "options": [
          "<ruby>服<rt>ふく</rt></ruby>を <ruby>買<rt>か</rt></ruby>いに",
          "カメラを <ruby>買<rt>か</rt></ruby>いに",
          "<ruby>食<rt>た</rt></ruby><ruby>事<rt>こと</rt></ruby>に",
          "<ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>に"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「あした デパートへ カメラを 買いに 行きます。」"
      },
      {
        "id": "dk13-4",
        "question": "<ruby>夏休<rt>なつやす</rt></ruby>みに どこへ <ruby>行<rt>い</rt></ruby>きたいですか。",
        "options": [
          "<ruby>沖縄<rt>おきなわ</rt></ruby>",
          "<ruby>北海道<rt>ほっかいどう</rt></ruby>",
          "<ruby>京都<rt>きょうと</rt></ruby>",
          "<ruby>外国<rt>がいこく</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「北海道へ 涼しい 風を 感じに 行きたいです。」"
      },
      {
        "id": "dk13-5",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は なぜ ゆっくり <ruby>休<rt>やす</rt></ruby>みたいですか。",
        "options": [
          "<ruby>病気<rt>びょうき</rt></ruby>だから",
          "<ruby>仕事<rt>しごと</rt></ruby>を たくさん して、<ruby>疲<rt>つか</rt></ruby>れて いるから",
          "お<ruby>金<rt>かね</rt></ruby>が ないから",
          "<ruby>友達<rt>ともだち</rt></ruby>が いないから"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài:「仕事を たくさん しましたから、今は とても 疲れています。夏休みは ゆっくり 休みたいです。」"
      }
    ]
  },
  {
    "id": "dokkai-14",
    "lessonId": "bai-14",
    "title": "Bài Đọc Hiểu - Bài 14 Minna",
    "subTitle": "雪の 日の ミラーさん (Anh Miller vào ngày có tuyết rơi)",
    "description": "Đoạn văn đọc hiểu ứng dụng ngữ pháp Bài 14: V-てください (nhờ vả, hướng dẫn), V-ています (hành động đang diễn ra) và V-ましょうか (đề nghị giúp đỡ).",
    "passage": "<ruby>今日<rt>きょう</rt></ruby>は <ruby>朝<rt>あさ</rt></ruby>から <ruby>冷<rt>つめ</rt></ruby>たい <ruby>雪<rt>ゆき</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>って います。<ruby>外<rt>そと</rt></ruby>は とても <ruby>寒<rt>さむ</rt></ruby>いです。\nミラーさんは <ruby>駅<rt>えき</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<ruby>駅<rt>えき</rt></ruby>の まえで <ruby>男<rt>おとこ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>が <ruby>重<rt>おも</rt></ruby>い <ruby>荷物<rt>にもつ</rt></ruby>を ２つ <ruby>持<rt>も</rt></ruby>って、<ruby>困<rt>こま</rt></ruby>って いました。\nミラーさんは「その <ruby>荷物<rt>にもつ</rt></ruby>を ひとつ <ruby>持<rt>も</rt></ruby>ちましょうか」と <ruby>言<rt>い</rt></ruby>いました。<ruby>男<rt>おとこ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は「ありがとうございます。<ruby>手伝<rt>てつだ</rt></ruby>って ください」と <ruby>答<rt>こた</rt></ruby>えました。\n\nそれから、２<ruby>人<rt>ひと</rt></ruby>は いっしょに <ruby>歩<rt>ある</rt></ruby>きました。<ruby>雪<rt>ゆき</rt></ruby>が たくさん <ruby>降<rt>ふ</rt></ruby>って きましたから、ミラーさんは「<ruby>危<rt>あぶ</rt></ruby>ないですから、ゆっくり <ruby>歩<rt>ある</rt></ruby>いて ください」と <ruby>言<rt>い</rt></ruby>いました。\n<ruby>男<rt>おとこ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は <ruby>傘<rt>かさ</rt></ruby>を <ruby>持<rt>も</rt></ruby>って いませんでしたから、ミラーさんは「わたしの <ruby>傘<rt>かさ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>って ください」と <ruby>言<rt>い</rt></ruby>いました。\n<ruby>駅<rt>えき</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ってから、<ruby>男<rt>おとこ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は「<ruby>親切<rt>しんせつ</rt></ruby>に してくれて、<ruby>本当<rt>ほんとう</rt></ruby>に ありがとうございました」と <ruby>言<rt>い</rt></ruby>いました。",
    "questions": [
      {
        "id": "dk14-1",
        "question": "<ruby>今日<rt>きょう</rt></ruby>の <ruby>天気<rt>てんき</rt></ruby>は どうですか。",
        "options": [
          "<ruby>朝<rt>あさ</rt></ruby>から <ruby>雪<rt>ゆき</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>って いて、<ruby>寒<rt>さむ</rt></ruby>い",
          "いい <ruby>天気<rt>てんき</rt></ruby>で、<ruby>暖<rt>あたた</rt></ruby>かい",
          "<ruby>雨<rt>あめ</rt></ruby>が やんで、<ruby>風<rt>かぜ</rt></ruby>が <ruby>吹<rt>ふ</rt></ruby>いて いる",
          "<ruby>晴<rt>は</rt></ruby>れて いて、<ruby>暑<rt>あつ</rt></ruby>い"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài viết:「今日は 朝から 冷たい 雪が 降って います。外は とても 寒いです。」"
      },
      {
        "id": "dk14-2",
        "question": "<ruby>駅<rt>えき</rt></ruby>の まえで <ruby>男<rt>おとこ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は なぜ <ruby>困<rt>こま</rt></ruby>って いましたか。",
        "options": [
          "<ruby>切符<rt>きっぷ</rt></ruby>を なくしたから",
          "<ruby>電車<rt>でんしゃ</rt></ruby>が <ruby>来<rt>こ</rt></ruby>なかったから",
          "<ruby>重<rt>おも</rt></ruby>い <ruby>荷物<rt>にもつ</rt></ruby>を ２つ <ruby>持<rt>も</rt></ruby>って いたから",
          "<ruby>駅<rt>えき</rt></ruby>の <ruby>場所<rt>ばしょ</rt></ruby>が <ruby>分<rt>わ</rt></ruby>からなかったから"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài viết:「駅の まえで 男の 人が 重い 荷物を ２つ 持って、困って いました。」"
      },
      {
        "id": "dk14-3",
        "question": "ミラーさんは <ruby>男<rt>おとこ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>に <ruby>何<rt>なに</rt></ruby>と <ruby>言<rt>い</rt></ruby>いましたか。",
        "options": [
          "「タクシーを <ruby>呼<rt>よ</rt></ruby>びましょうか。」",
          "「その <ruby>荷物<rt>にもつ</rt></ruby>を ひとつ <ruby>持<rt>も</rt></ruby>ちましょうか。」",
          "「お<ruby>金<rt>かね</rt></ruby>を <ruby>貸<rt>か</rt></ruby>しましょうか。」",
          "「ここで <ruby>待<rt>ま</rt></ruby>ちましょうか。」"
        ],
        "correctIdx": 1,
        "explanation": "Miller đề nghị giúp đỡ bằng cấu trúc 〜ましょうか:「その 荷物を ひとつ 持ちましょうか。」"
      },
      {
        "id": "dk14-4",
        "question": "<ruby>雪<rt>ゆき</rt></ruby>が たくさん <ruby>降<rt>ふ</rt></ruby>って きたとき、ミラーさんは <ruby>何<rt>なに</rt></ruby>と <ruby>言<rt>い</rt></ruby>いましたか。",
        "options": [
          "「<ruby>急<rt>いそ</rt></ruby>いで <ruby>走<rt>はし</rt></ruby>って ください。」",
          "「ここで <ruby>電車<rt>でんしゃ</rt></ruby>を <ruby>待<rt>ま</rt></ruby>って ください。」",
          "「<ruby>危<rt>あぶ</rt></ruby>ないですから、ゆっくり <ruby>歩<rt>ある</rt></ruby>いて ください。」",
          "「<ruby>傘<rt>かさ</rt></ruby>を <ruby>買<rt>か</rt></ruby>って ください。」"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài viết:「危ないですから、ゆっくり 歩いて ください」と 言いました。"
      },
      {
        "id": "dk14-5",
        "question": "<ruby>男<rt>おとこ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>について、<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        "options": [
          "<ruby>傘<rt>かさ</rt></ruby>を <ruby>持<rt>も</rt></ruby>って いなかったので、ミラーさんの <ruby>傘<rt>かさ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>った",
          "<ruby>自分<rt>じぶん</rt></ruby>で <ruby>傘<rt>かさ</rt></ruby>を さして <ruby>歩<rt>ある</rt></ruby>いた",
          "ミラーさんの <ruby>荷物<rt>にもつ</rt></ruby>を <ruby>運<rt>はこ</rt></ruby>んだ",
          "お<ruby>礼<rt>れい</rt></ruby>を <ruby>言<rt>い</rt></ruby>わないで <ruby>去<rt>さ</rt></ruby>った"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài viết: Người đàn ông không có ô nên Miller đã bảo:「わたしの 傘に 入って ください」, và sau đó người đàn ông cảm ơn sự tốt bụng của Miller."
      }
    ]
  },
  {
    "id": "dokkai-15",
    "lessonId": "bai-15",
    "title": "Bài Đọc Hiểu - Bài 15 Minna",
    "subTitle": "ミラーさんの 会社と 生活 (Công ty và cuộc sống của anh Miller)",
    "description": "Đoạn văn đọc hiểu ứng dụng ngữ pháp Bài 15: V-てもいいですか (xin phép), V-てはいけません (cấm đoán) và V-ています (trạng thái kết quả, nghề nghiệp, nơi cư trú).",
    "passage": "わたしは ミラーです。アメリカから <ruby>来<rt>き</rt></ruby>ました。<ruby>独身<rt>どくしん</rt></ruby>です。\nわたしは <ruby>今<rt>いま</rt></ruby> <ruby>東京<rt>とうきょう</rt></ruby>の <ruby>小<rt>ちい</rt></ruby>さい アパートに <ruby>住<rt>す</rt></ruby>んで います。\nわたしは IMCという <ruby>会社<rt>かいしゃ</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>いて います。IMCは コンピューターの ソフトを <ruby>作<rt>つく</rt></ruby>って います。\n\nIMCには いろいろな ルールが あります。<ruby>仕事<rt>しごと</rt></ruby>の <ruby>部屋<rt>へや</rt></ruby>で たばこを <ruby>吸<rt>す</rt></ruby>っては いけません。<ruby>禁煙<rt>きんえん</rt></ruby>ですから。たばこは <ruby>外<rt>そと</rt></ruby>の <ruby>場所<rt>ばしょ</rt></ruby>で <ruby>吸<rt>す</rt></ruby>っても いいです。\nまた、<ruby>会社<rt>かいしゃ</rt></ruby>の まえに <ruby>車<rt>くるま</rt></ruby>を <ruby>止<rt>と</rt></ruby>めては いけません。<ruby>駐車禁止<rt>ちゅうしゃきんし</rt></ruby>ですから。\n\n<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>資料<rt>しりょう</rt></ruby>や カタログを <ruby>使<rt>つか</rt></ruby>いたい ときは、<ruby>課長<rt>かちょう</rt></ruby>に「この <ruby>資料<rt>しりょう</rt></ruby>を <ruby>見<rt>み</rt></ruby>ても いいですか」と <ruby>聞<rt>き</rt></ruby>きます。<ruby>課長<rt>かちょう</rt></ruby>は いつも「ええ、どうぞ」と <ruby>言<rt>い</rt></ruby>います。\n<ruby>同僚<rt>どうりょう</rt></ruby>の <ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>去年<rt>きょねん</rt></ruby> <ruby>結婚<rt>けっこん</rt></ruby>しました。<ruby>奥<rt>おく</rt></ruby>さんは <ruby>銀行<rt>ぎんこう</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>いて います。\nわたしは まだ <ruby>結婚<rt>けっこん</rt></ruby>して いません。でも、<ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は とても <ruby>楽<rt>たの</rt></ruby>しいです。",
    "questions": [
      {
        "id": "dk15-1",
        "question": "ミラーさんは どこに <ruby>住<rt>す</rt></ruby>んで いますか。",
        "options": [
          "<ruby>アメリカ<rt>あめりか</rt></ruby>の <ruby>家<rt>いえ</rt></ruby>",
          "<ruby>東京<rt>とうきょう</rt></ruby>の <ruby>小<rt>ちい</rt></ruby>さい アパート",
          "IMCの <ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>",
          "<ruby>山田<rt>やまだ</rt></ruby>さんの <ruby>家<rt>いえ</rt></ruby>"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài viết:「わたしは 今 東京の 小さい アパートに 住んで います。」"
      },
      {
        "id": "dk15-2",
        "question": "IMCは どんな <ruby>会社<rt>かいしゃ</rt></ruby>ですか。",
        "options": [
          "コンピューターの ソフトを <ruby>作<rt>つく</rt></ruby>って いる <ruby>会社<rt>かいしゃ</rt></ruby>",
          "<ruby>自動車<rt>じどうしゃ</rt></ruby>を <ruby>売<rt>う</rt></ruby>って いる <ruby>会社<rt>かいしゃ</rt></ruby>",
          "たばこを <ruby>売<rt>う</rt></ruby>って いる <ruby>会社<rt>かいしゃ</rt></ruby>",
          "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>って いる <ruby>会社<rt>かいしゃ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài viết:「IMCは コンピューターの ソフトを 作って います。」"
      },
      {
        "id": "dk15-3",
        "question": "IMCの <ruby>会社<rt>かいしゃ</rt></ruby>の ルールについて、<ruby>正<rt>ただ</rt></ruby>しい ものは どれですか。",
        "options": [
          "<ruby>会社<rt>かいしゃ</rt></ruby>の まえに <ruby>車<rt>くるま</rt></ruby>を <ruby>止<rt>と</rt></ruby>めても いい",
          "<ruby>外<rt>そと</rt></ruby>の <ruby>場所<rt>ばしょ</rt></ruby>でも たばこを <ruby>吸<rt>す</rt></ruby>っては いけない",
          "<ruby>仕事<rt>しごと</rt></ruby>の <ruby>部屋<rt>へや</rt></ruby>で たばこを <ruby>吸<rt>す</rt></ruby>っては いけない",
          "<ruby>資料<rt>しりょう</rt></ruby>を <ruby>見<rt>み</rt></ruby>ては いけない"
        ],
        "correctIdx": 2,
        "explanation": "Trong bài viết:「仕事の 部屋で たばこを 吸っては いけません。禁煙ですから。」"
      },
      {
        "id": "dk15-4",
        "question": "ミラーさんが <ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>資料<rt>しりょう</rt></ruby>を <ruby>使<rt>つか</rt></ruby>いたい とき、どう しますか。",
        "options": [
          "<ruby>何<rt>なに</rt></ruby>も <ruby>言<rt>い</rt></ruby>わないで <ruby>持<rt>も</rt></ruby>って <ruby>帰<rt>かえ</rt></ruby>る",
          "<ruby>課長<rt>かちょう</rt></ruby>に「<ruby>見<rt>み</rt></ruby>ても いいですか」と <ruby>聞<rt>き</rt></ruby>く",
          "<ruby>新<rt>あたら</rt></ruby>しい <ruby>資料<rt>しりょう</rt></ruby>を <ruby>自分<rt>じぶん</rt></ruby>で <ruby>買<rt>か</rt></ruby>う",
          "<ruby>山田<rt>やまだ</rt></ruby>さんに <ruby>頼<rt>たの</rt></ruby>む"
        ],
        "correctIdx": 1,
        "explanation": "Trong bài viết:「課長に『この 資料を 見ても いいですか』と 聞きます。」"
      },
      {
        "id": "dk15-5",
        "question": "ミラーさんと <ruby>山田<rt>やまだ</rt></ruby>さんについて、<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        "options": [
          "ミラーさんは <ruby>去年<rt>きょねん</rt></ruby> <ruby>結婚<rt>けっこん</rt></ruby>した",
          "<ruby>山田<rt>やまだ</rt></ruby>さんの <ruby>奥<rt>おく</rt></ruby>さんは IMCで <ruby>働<rt>はたら</rt></ruby>いて いる",
          "ミラーさんは <ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>が <ruby>嫌<rt>きら</rt></ruby>いである",
          "<ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>結婚<rt>けっこん</rt></ruby>して いて、ミラーさんは <ruby>独身<rt>どくしん</rt></ruby>である"
        ],
        "correctIdx": 3,
        "explanation": "Trong bài viết: Yamada đã kết hôn năm ngoái (奥さんは 銀行で 働いています), còn Miller vẫn độc thân (独身です / まだ 結婚していません)."
      }
    ]
  },
  {
    "id": "dokkai-16",
    "lessonId": "bai-16",
    "title": "Bài Đọc Hiểu - Bài 16 Minna",
    "subTitle": "京都への 旅 (Chuyến du lịch Kyoto)",
    "description": "Đoạn văn miêu tả chi tiết hành trình khám phá cố đô Kyoto, cách thức di chuyển và trải nghiệm ngắm cảnh chùa chiền ẩm thực.",
    "passage": "<ruby>先週<rt>せんしゅう</rt></ruby>の <ruby>土曜日<rt>どようび</rt></ruby>、わたしは <ruby>友達<rt>ともだち</rt></ruby>の マリアさんと <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。\n<ruby>朝<rt>あさ</rt></ruby> 6<ruby>時<rt>じ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きて、シャワーを <ruby>浴<rt>あ</rt></ruby>びて、<ruby>朝<rt>あさ</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べました。それから <ruby>東京<rt>とうきょう</rt></ruby><ruby>駅<rt>えき</rt></ruby>へ <ruby>行<rt>い</rt></ruby>って、<ruby>新幹線<rt>しんかんせん</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りました。\n\n<ruby>京都<rt>きょうと</rt></ruby><ruby>駅<rt>えき</rt></ruby>に <ruby>着<rt>つ</rt></ruby>いてから、まず <ruby>観光<rt>かんこう</rt></ruby><ruby>案内所<rt>あんないじょ</rt></ruby>で <ruby>地図<rt>ちず</rt></ruby>を もらいました。<ruby>京都<rt>きょうと</rt></ruby><ruby>駅<rt>えき</rt></ruby><ruby>前<rt>まえ</rt></ruby>から <ruby>市<rt>し</rt></ruby>バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>金閣寺<rt>きんかくじ</rt></ruby><ruby>道<rt>みち</rt></ruby>で <ruby>降<rt>お</rt></ruby>りました。\n<ruby>金閣寺<rt>きんかくじ</rt></ruby>は <ruby>金<rt>きん</rt></ruby><ruby>色<rt>いろ</rt></ruby>で、とても きれいでした。<ruby>庭<rt>にわ</rt></ruby>は <ruby>緑<rt>みどり</rt></ruby>が <ruby>多<rt>おお</rt></ruby>くて、<ruby>静<rt>しず</rt></ruby>かでした。\n\nそれから <ruby>近<rt>ちか</rt></ruby>くの レストランで <ruby>京都<rt>きょうと</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました。<ruby>料理<rt>りょうり</rt></ruby>は <ruby>安<rt>やす</rt></ruby>くて、とても おいしかったです。<ruby>店<rt>みせ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は <ruby>親切<rt>しんせつ</rt></ruby>で、<ruby>親切<rt>しんせつ</rt></ruby>に <ruby>道<rt>みち</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて くれました。<ruby>京都<rt>きょうと</rt></ruby>は <ruby>古<rt>ふる</rt></ruby>くて、おもしろい <ruby>町<rt>まち</rt></ruby>です。",
    "questions": [
      {
        "id": "dk16-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>東京<rt>とうきょう</rt></ruby><ruby>駅<rt>えき</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く まえに、<ruby>何<rt>なに</rt></ruby>を しましたか。",
        "options": [
          "シャワーを <ruby>浴<rt>あ</rt></ruby>びて、<ruby>朝<rt>あさ</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べた",
          "<ruby>地図<rt>ちず</rt></ruby>を <ruby>買<rt>か</rt></ruby>った",
          "<ruby>金閣寺<rt>きんかくじ</rt></ruby>を <ruby>見<rt>み</rt></ruby>た",
          "<ruby>新幹線<rt>しんかんせん</rt></ruby>の <ruby>切符<rt>きっぷ</rt></ruby>を <ruby>買<rt>か</rt></ruby>った"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài viết:「朝 6時に 起きて、シャワーを 浴びて、朝ごはんを 食べました。それから 東京駅へ 行って...」"
      },
      {
        "id": "dk16-2",
        "question": "<ruby>京都<rt>きょうと</rt></ruby><ruby>駅<rt>えき</rt></ruby>に <ruby>着<rt>つ</rt></ruby>いてから、まず <ruby>何<rt>なに</rt></ruby>を しましたか。",
        "options": [
          "<ruby>観光<rt>かんこう</rt></ruby><ruby>案内所<rt>あんないじょ</rt></ruby>で <ruby>地図<rt>ちず</rt></ruby>を もらった",
          "バスに <ruby>乗<rt>の</rt></ruby>った",
          "<ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べた",
          "ホテルに <ruby>行<rt>い</rt></ruby>った"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「京都駅に 着いてから、まず 観光案内所で 地図を もらいました。」"
      },
      {
        "id": "dk16-3",
        "question": "<ruby>金閣寺<rt>きんかくじ</rt></ruby>へ どうやって <ruby>行<rt>い</rt></ruby>きましたか。",
        "options": [
          "<ruby>京都<rt>きょうと</rt></ruby><ruby>駅<rt>えき</rt></ruby><ruby>前<rt>まえ</rt></ruby>から <ruby>市<rt>し</rt></ruby>バスに <ruby>乗<rt>の</rt></ruby>って <ruby>行<rt>い</rt></ruby>った",
          "<ruby>新幹線<rt>しんかんせん</rt></ruby>で <ruby>行<rt>い</rt></ruby>った",
          "タクシーで <ruby>行<rt>い</rt></ruby>った",
          "<ruby>歩<rt>ある</rt></ruby>いて <ruby>行<rt>い</rt></ruby>った"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「京都駅前から 市バスに 乗って、金閣寺道で 降りました。」"
      },
      {
        "id": "dk16-4",
        "question": "<ruby>金閣寺<rt>きんかくじ</rt></ruby>の <ruby>庭<rt>にわ</rt></ruby>は どうでしたか。",
        "options": [
          "<ruby>緑<rt>みどり</rt></ruby>が <ruby>多<rt>おお</rt></ruby>くて、<ruby>静<rt>しず</rt></ruby>かだった",
          "にぎやかで、<ruby>狭<rt>せま</rt></ruby>かった",
          "<ruby>人<rt>ひと</rt></ruby>が <ruby>少<rt>すく</rt></ruby>なくて、<ruby>暗<rt>くら</rt></ruby>かった",
          "<ruby>新<rt>あたら</rt></ruby>しくて、<ruby>広<rt>ひろ</rt></ruby>かった"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「庭は 緑が 多くて、静かでした。」"
      },
      {
        "id": "dk16-5",
        "question": "<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        "options": [
          "<ruby>京都<rt>きょうと</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>は <ruby>安<rt>やす</rt></ruby>くて おいしかった",
          "レストランの <ruby>料理<rt>りょうり</rt></ruby>は とても <ruby>高<rt>たか</rt></ruby>かった",
          "<ruby>金閣寺<rt>きんかくじ</rt></ruby>は <ruby>白<rt>しろ</rt></ruby>い <ruby>色<rt>いろ</rt></ruby>の <ruby>建物<rt>たてもの</rt></ruby>である",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は 1<ruby>人<rt>ひとり</rt></ruby>で <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>った"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「料理は 安くて、とても おいしかったです。」 Đi cùng bạn Maria."
      }
    ]
  },
  {
    "id": "dokkai-17",
    "lessonId": "bai-17",
    "title": "Bài Đọc Hiểu - Bài 17 Minna",
    "subTitle": "病院での ルールと 先生の アドバイス (Lời khuyên của bác sĩ)",
    "description": "Bài đọc về trải nghiệm đi khám tại bệnh viện Nhật Bản, các quy định và hướng dẫn uống thuốc.",
    "passage": "わたしは <ruby>昨日<rt>きのう</rt></ruby>から <ruby>熱<rt>ねつ</rt></ruby>が あって、<ruby>頭<rt>あたま</rt></ruby>と のどが <ruby>痛<rt>いた</rt></ruby>かったです。それで <ruby>今日<rt>きょう</rt></ruby>の <ruby>午前中<rt>ごぜんちゅう</rt></ruby>に さくら<ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。\n\n<ruby>病院<rt>びょういん</rt></ruby>の <ruby>受付<rt>うけつけ</rt></ruby>で「<ruby>保険証<rt>ほけんしょう</rt></ruby>を <ruby>出<rt>だ</rt></ruby>してください」と <ruby>言<rt>い</rt></ruby>われました。<ruby>保険証<rt>ほけんしょう</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れないで <ruby>持<rt>も</rt></ruby>って <ruby>来<rt>き</rt></ruby>ましたから、すぐに <ruby>出<rt>だ</rt></ruby>す ことが できました。\n\n<ruby>医者<rt>いしゃ</rt></ruby>の <ruby>先生<rt>せんせい</rt></ruby>は「かぜですね。<ruby>薬<rt>くすり</rt></ruby>を <ruby>出<rt>だ</rt></ruby>しますから、1<ruby>日<rt>にち</rt></ruby>に 3<ruby>回<rt>かい</rt></ruby>、ごはんを <ruby>食<rt>た</rt></ruby>べてから <ruby>飲<rt>の</rt></ruby>んでください。<ruby>今日<rt>きょう</rt></ruby>は お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らないで、<ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>てください。<ruby>明日<rt>あした</rt></ruby>は <ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>かなくても いいですよ」と <ruby>言<rt>い</rt></ruby>いました。\nまた、「<ruby>金曜日<rt>きんようび</rt></ruby>までに もう <ruby>一度<rt>いちど</rt></ruby> <ruby>来<rt>き</rt></ruby>てください」と <ruby>言<rt>い</rt></ruby>われました。<ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>んで、<ruby>家<rt>いえ</rt></ruby>で ゆっくり <ruby>休<rt>やす</rt></ruby>みます。",
    "questions": [
      {
        "id": "dk17-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は どうして <ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きましたか。",
        "options": [
          "<ruby>熱<rt>ねつ</rt></ruby>が あって、<ruby>頭<rt>あたま</rt></ruby>と のどが <ruby>痛<rt>いた</rt></ruby>かったから",
          "<ruby>足<rt>あし</rt></ruby>を <ruby>怪我<rt>けが</rt></ruby>したから",
          "<ruby>友達<rt>ともだち</rt></ruby>に <ruby>会<rt>あ</rt></ruby>うため",
          "<ruby>保険証<rt>ほけんしょう</rt></ruby>を <ruby>買<rt>か</rt></ruby>うため"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「熱が あって、頭と のどが 痛かったです。」"
      },
      {
        "id": "dk17-2",
        "question": "<ruby>受付<rt>うけつけ</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を <ruby>出<rt>だ</rt></ruby>しましたか。",
        "options": [
          "<ruby>保険証<rt>ほけんしょう</rt></ruby>",
          "パスポート",
          "お<ruby>金<rt>かね</rt></ruby>だけ",
          "<ruby>薬<rt>くすり</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「保険証を 出してくださいと言われました... すぐに 出すことが できました。」"
      },
      {
        "id": "dk17-3",
        "question": "<ruby>薬<rt>くすり</rt></ruby>は いつ <ruby>飲<rt>の</rt></ruby>まなければ なりませんか。",
        "options": [
          "1<ruby>日<rt>にち</rt></ruby>に 3<ruby>回<rt>かい</rt></ruby>、ごはんを <ruby>食<rt>た</rt></ruby>べてから",
          "1<ruby>日<rt>にち</rt></ruby>に 1<ruby>回<rt>かい</rt></ruby>、<ruby>寝<rt>ね</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に",
          "ごはんを <ruby>食<rt>た</rt></ruby>べる <ruby>前<rt>まえ</rt></ruby>に 2<ruby>回<rt>かい</rt></ruby>",
          "お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ったあと"
        ],
        "correctIdx": 0,
        "explanation": "Bác sĩ dặn:「1日に 3回、ごはんを 食べてから 飲んでください。」"
      },
      {
        "id": "dk17-4",
        "question": "<ruby>医者<rt>いしゃ</rt></ruby>の アドバイスについて、<ruby>正<rt>ただ</rt></ruby>しい ものは どれですか。",
        "options": [
          "<ruby>今日<rt>きょう</rt></ruby>は お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らないで、<ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>ること",
          "<ruby>今日<rt>きょう</rt></ruby> お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らなければ ならない",
          "<ruby>明日<rt>あした</rt></ruby> <ruby>必<rt>かなら</rt></ruby>ず <ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>かなければ ならない",
          "<ruby>来週<rt>らいしゅう</rt></ruby>まで <ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>んでは いけない"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「今日はお風呂に入らないで、早く寝てください。」"
      },
      {
        "id": "dk17-5",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は いつまでに もう <ruby>一度<rt>いちど</rt></ruby> <ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>かなければ なりませんか。",
        "options": [
          "<ruby>金曜日<rt>きんようび</rt></ruby>までに",
          "<ruby>明日<rt>あした</rt></ruby>までに",
          "<ruby>日曜日<rt>にちようび</rt></ruby>までに",
          "<ruby>来月<rt>らいげつ</rt></ruby>までに"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「金曜日までに もう 一度 来てください」と 言われました."
      }
    ]
  },
  {
    "id": "dokkai-18",
    "lessonId": "bai-18",
    "title": "Bài Đọc Hiểu - Bài 18 Minna",
    "subTitle": "私の 趣味と できること (Sở thích và năng lực)",
    "description": "Đoạn văn tự giới thiệu về sở thích, các kỹ năng cá nhân và thói quen sinh hoạt hàng ngày.",
    "passage": "わたしの <ruby>名前<rt>なまえ</rt></ruby>は ワンです。<ruby>中国<rt>ちゅうごく</rt></ruby>から <ruby>来<rt>き</rt></ruby>ました。<ruby>日本<rt>にほん</rt></ruby>に <ruby>来<rt>き</rt></ruby>てから 1<ruby>年<rt>ねん</rt></ruby>に なります。\n\nわたしの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>ることと、ピアノを <ruby>弾<rt>ひ</rt></ruby>くことです。<ruby>子<rt>こ</rt></ruby>どもの ときから ピアノを <ruby>練習<rt>れんしゅう</rt></ruby>しましたから、<ruby>難<rt>むずか</rt></ruby>しい <ruby>曲<rt>きょく</rt></ruby>も <ruby>弾<rt>ひ</rt></ruby>く ことが できます。\nスポーツも <ruby>好<rt>す</rt></ruby>きです。プールで 50メートル <ruby>泳<rt>およ</rt></ruby>ぐ ことが できます。でも、スキーは できません。まだ <ruby>一度<rt>いちど</rt></ruby>も やった ことが ありませんから、<ruby>今年<rt>ことし</rt></ruby>の <ruby>冬<rt>ふゆ</rt></ruby> ぜひ スキー<ruby>場<rt>じょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きたいです。\n\nわたしは <ruby>毎晩<rt>まいばん</rt></ruby> <ruby>寝<rt>ね</rt></ruby>る まえに、<ruby>日本語<rt>にほんご</rt></ruby>で <ruby>日記<rt>にっき</rt></ruby>を <ruby>書<rt>か</rt></ruby>いて います。<ruby>始<rt>はじ</rt></ruby>めは なかなか <ruby>漢字<rt>かんじ</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す ことが できませんでしたが、<ruby>最近<rt>さいきん</rt></ruby>は たくさん <ruby>書<rt>か</rt></ruby>けるように なりました。<ruby>将来<rt>しょうらい</rt></ruby>は <ruby>日本<rt>にほん</rt></ruby>の <ruby>会社<rt>かいしゃ</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>きたいです。",
    "questions": [
      {
        "id": "dk18-1",
        "question": "ワンさんの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。",
        "options": [
          "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>ることと ピアノを <ruby>弾<rt>ひ</rt></ruby>くこと",
          "スキーと <ruby>水泳<rt>すいえい</rt></ruby>",
          "<ruby>日記<rt>にっき</rt></ruby>を <ruby>読<rt>よ</rt></ruby>むこと",
          "<ruby>旅行<rt>りょこう</rt></ruby>すること"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「趣味は 写真を 撮ることと、ピアノを 弾くことです。」"
      },
      {
        "id": "dk18-2",
        "question": "ワンさんが できない スポーツは どれですか。",
        "options": [
          "スキー",
          "<ruby>水泳<rt>すいえい</rt></ruby> (<ruby>泳<rt>およ</rt></ruby>ぐこと)",
          "ジョギング",
          "サッカー"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「でも、スキーは できません。」"
      },
      {
        "id": "dk18-3",
        "question": "<ruby>今年<rt>ことし</rt></ruby>の <ruby>冬<rt>ふゆ</rt></ruby>、ワンさんは <ruby>何<rt>なに</rt></ruby>を したいですか。",
        "options": [
          "ぜひ スキー<ruby>場<rt>じょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きたい",
          "<ruby>国<rt>くに</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>りたい",
          "ピアノを <ruby>買<rt>か</rt></ruby>いたい",
          "<ruby>会社<rt>かいしゃ</rt></ruby>を <ruby>辞<rt>や</rt></ruby>めたい"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「今年の 冬 ぜひ スキー場へ 行きたいです。」"
      },
      {
        "id": "dk18-4",
        "question": "ワンさんは <ruby>毎晩<rt>まいばん</rt></ruby> <ruby>寝<rt>ね</rt></ruby>る まえに、<ruby>何<rt>なに</rt></ruby>を して いますか。",
        "options": [
          "<ruby>日本語<rt>にほんご</rt></ruby>で <ruby>日記<rt>にっき</rt></ruby>を <ruby>書<rt>か</rt></ruby>いて いる",
          "ピアノを <ruby>弾<rt>ひ</rt></ruby>いて いる",
          "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>整理<rt>せいり</rt></ruby>して いる",
          "<ruby>中国<rt>ちゅうごく</rt></ruby>の <ruby>家族<rt>かぞく</rt></ruby>に <ruby>電話<rt>でんわ</rt></ruby>して いる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「毎晩 寝る まえに、日本語で 日記を 書いて います。」"
      },
      {
        "id": "dk18-5",
        "question": "<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        "options": [
          "ワンさんは <ruby>難<rt>むずか</rt></ruby>しい <ruby>曲<rt>きょく</rt></ruby>の ピアノも <ruby>弾<rt>ひ</rt></ruby>く ことが できる",
          "ワンさんは <ruby>泳<rt>およ</rt></ruby>ぐ ことが できない",
          "ワンさんは スキーを <ruby>何回<rt>なんかい</rt></ruby>も した ことが ある",
          "ワンさんは <ruby>漢字<rt>かんじ</rt></ruby>が <ruby>全<rt>まった</rt></ruby>く <ruby>書<rt>か</rt></ruby>けない"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「子どもの ときから ピアノを 練習しましたから、難しい 曲も 弾く ことが できます。」"
      }
    ]
  },
  {
    "id": "dokkai-19",
    "lessonId": "bai-19",
    "title": "Bài Đọc Hiểu - Bài 19 Minna",
    "subTitle": "日本での 初めての 体験 (Những trải nghiệm đầu tiên tại Nhật)",
    "description": "Bài đọc chia sẻ về trải nghiệm leo núi Phú Sĩ ngắm bình minh và ngâm suối nước nóng Onsen.",
    "passage": "わたしは <ruby>去年<rt>きょねん</rt></ruby>の <ruby>夏<rt>なつ</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>りました。<ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>った ことが ありませんでしたから、とても わくわくしました。\n<ruby>夜<rt>よる</rt></ruby>から <ruby>登<rt>のぼ</rt></ruby>り<ruby>始<rt>はじ</rt></ruby>めました。だんだん <ruby>寒<rt>さむ</rt></ruby>く なって、<ruby>体<rt>からだ</rt></ruby>も <ruby>疲<rt>つか</rt></ruby>れましたが、<ruby>山頂<rt>さんちょう</rt></ruby>で <ruby>見<rt>み</rt></ruby>た <ruby>太陽<rt>たいよう</rt></ruby>は とても <ruby>美<rt>うつく</rt></ruby>しかったです。\n\nそれから、<ruby>山<rt>やま</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くの <ruby>温泉<rt>おんせん</rt></ruby><ruby>旅館<rt>りょかん</rt></ruby>に <ruby>泊<rt>と</rt></ruby>まりました。<ruby>温泉<rt>おんせん</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ったり、おいしい <ruby>和食<rt>わしょく</rt></ruby>を <ruby>食<rt>た</rt></ruby>べたり しました。<ruby>浴衣<rt>ゆかた</rt></ruby>を <ruby>着<rt>き</rt></ruby>て、<ruby>写真<rt>しゃしん</rt></ruby>も たくさん <ruby>撮<rt>と</rt></ruby>りました。\n<ruby>温泉<rt>おんせん</rt></ruby>の おかげで、<ruby>体<rt>からだ</rt></ruby>の <ruby>調子<rt>ちょうし</rt></ruby>が すっかり <ruby>良<rt>よ</rt></ruby>く なりました。\n\n<ruby>休<rt>やす</rt></ruby>みの <ruby>日<rt>ひ</rt></ruby>は、<ruby>部屋<rt>へや</rt></ruby>を <ruby>掃除<rt>そうじ</rt></ruby>したり、<ruby>洗濯<rt>せんたく</rt></ruby>したり する ことが <ruby>多<rt>おお</rt></ruby>いですが、ときどき <ruby>遠<rt>とお</rt></ruby>くへ <ruby>出<rt>で</rt></ruby>かけて、<ruby>新<rt>あたら</rt></ruby>しい <ruby>体験<rt>たいけん</rt></ruby>を したいです。",
    "questions": [
      {
        "id": "dk19-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は いつ <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>りましたか。",
        "options": [
          "<ruby>去年<rt>きょねん</rt></ruby>の <ruby>夏<rt>なつ</rt></ruby>",
          "<ruby>今年<rt>ことし</rt></ruby>の <ruby>春<rt>はる</rt></ruby>",
          "3<ruby>年<rt>ねん</rt></ruby>まえの <ruby>冬<rt>ふゆ</rt></ruby>",
          "<ruby>先週<rt>せんしゅう</rt></ruby>の <ruby>秋<rt>あき</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「去年の 夏、友達と 一緒に 富士山に 登りました。」"
      },
      {
        "id": "dk19-2",
        "question": "<ruby>山頂<rt>さんちょう</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を <ruby>見<rt>み</rt></ruby>ましたか。",
        "options": [
          "とても <ruby>美<rt>うつく</rt></ruby>しい <ruby>太陽<rt>たいよう</rt></ruby> (<ruby>日<rt>にち</rt></ruby>の<ruby>出<rt>だ</rt></ruby>)",
          "<ruby>大<rt>おお</rt></ruby>きい <ruby>月<rt>つき</rt></ruby>",
          "<ruby>雪<rt>ゆき</rt></ruby>の <ruby>景色<rt>けしき</rt></ruby>",
          "<ruby>東京<rt>とうきょう</rt></ruby>タワー"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「山頂で 見た 太陽は とても 美しかったです。」"
      },
      {
        "id": "dk19-3",
        "question": "<ruby>温泉<rt>おんせん</rt></ruby><ruby>旅館<rt>りょかん</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を しましたか。",
        "options": [
          "<ruby>温泉<rt>おんせん</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ったり <ruby>和食<rt>わしょく</rt></ruby>を <ruby>食<rt>た</rt></ruby>べたりした",
          "スキーを <ruby>練習<rt>れんしゅう</rt></ruby>した",
          "<ruby>仕事<rt>しごと</rt></ruby>の レポートを <ruby>書<rt>か</rt></ruby>いた",
          "<ruby>部屋<rt>へや</rt></ruby>の <ruby>掃除<rt>そうじ</rt></ruby>をした"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「温泉に 入ったり、おいしい 和食を 食べたり しました。」"
      },
      {
        "id": "dk19-4",
        "question": "<ruby>温泉<rt>おんせん</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ってから、<ruby>体<rt>からだ</rt></ruby>は どう なりましたか。",
        "options": [
          "<ruby>体<rt>からだ</rt></ruby>の <ruby>調子<rt>ちょうし</rt></ruby>が すっかり <ruby>良<rt>よ</rt></ruby>く なった",
          "もっと <ruby>疲<rt>つか</rt></ruby>れて <ruby>熱<rt>ねつ</rt></ruby>が <ruby>出<rt>で</rt></ruby>た",
          "<ruby>眠<rt>ねむ</rt></ruby>く ならなかった",
          "<ruby>足<rt>あし</rt></ruby>が <ruby>痛<rt>いた</rt></ruby>く なった"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「温泉の おかげで、体の 調子が すっかり 良く なりました。」"
      },
      {
        "id": "dk19-5",
        "question": "<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        "options": [
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>るまえ、<ruby>一度<rt>いちど</rt></ruby>も <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>った ことが なかった",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>昼<rt>ひる</rt></ruby>から <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>り<ruby>始<rt>はじ</rt></ruby>めた",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>浴衣<rt>ゆかた</rt></ruby>が <ruby>嫌<rt>きら</rt></ruby>いである",
          "<ruby>旅館<rt>りょかん</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>は まずかった"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài viết:「富士山に 登った ことが ありませんでしたから、とても わくわくしました。」 (Chưa từng leo trước đó)."
      }
    ]
  },
  {
    "id": "dokkai-20",
    "lessonId": "bai-20",
    "title": "Bài Đọc Hiểu - Bài 20 Minna",
    "subTitle": "友達との 会話と 日本の 生活 (Trò chuyện cùng bạn bè)",
    "description": "Đoạn đối thoại thân mật (thể thông thường 普通体) giữa hai người bạn về kế hoạch cuối tuần và ấn tượng sống ở Tokyo.",
    "passage": "タナカ：ミラー<ruby>君<rt>きみ</rt></ruby>、<ruby>今度<rt>こんど</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby> <ruby>暇<rt>ひま</rt></ruby>？\nミラー：うん、<ruby>特<rt>とく</rt></ruby>に <ruby>予定<rt>よてい</rt></ruby>は ないよ。どうして？\nタナカ：<ruby>銀座<rt>ぎんざ</rt></ruby>で おもしろい <ruby>写真<rt>しゃしん</rt></ruby>の <ruby>展覧会<rt>てんらんかい</rt></ruby>が あるんだ。よかったら、<ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>行<rt>い</rt></ruby>かない？\nミラー：いいね。ぜひ <ruby>行<rt>い</rt></ruby>きたい。<ruby>何時<rt>なんじ</rt></ruby>に どこで <ruby>会<rt>あ</rt></ruby>う？\nタナカ：10<ruby>時<rt>じ</rt></ruby>に <ruby>銀座駅<rt>ぎんざえき</rt></ruby>の <ruby>改札口<rt>かいさつぐち</rt></ruby>で どう？\nミラー：<ruby>分<rt>ふん</rt></ruby>かった。あ、その <ruby>後<rt>あと</rt></ruby>で どこかで <ruby>昼<rt>ひる</rt></ruby>ごはん <ruby>食<rt>た</rt></ruby>べない？\nタナカ：うん、<ruby>銀座<rt>ぎんざ</rt></ruby>に おいしい ラーメン<ruby>屋<rt>や</rt></ruby>が あるよ。<ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>いけど、すごく <ruby>有名<rt>ゆうめい</rt></ruby>なんだ。\nミラー：へえ、<ruby>楽<rt>たの</rt></ruby>しみだな。<ruby>東京<rt>とうきょう</rt></ruby>は <ruby>物価<rt>ぶっか</rt></ruby>が <ruby>高<rt>たか</rt></ruby>いけど、おいしい <ruby>店<rt>みせ</rt></ruby>が たくさん あるね。\nタナカ：そうだね。じゃ、<ruby>日曜日<rt>にちようび</rt></ruby> 10<ruby>時<rt>じ</rt></ruby>に！\nミラー：うん、また <ruby>日曜日<rt>にちようび</rt></ruby>！",
    "questions": [
      {
        "id": "dk20-1",
        "question": "ミラーさんは <ruby>今度<rt>こんど</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>用事<rt>ようじ</rt></ruby>が ありますか。",
        "options": [
          "いいえ、<ruby>特<rt>とく</rt></ruby>に <ruby>予定<rt>よてい</rt></ruby>は ない (<ruby>暇<rt>ひま</rt></ruby>である)",
          "はい、<ruby>仕事<rt>しごと</rt></ruby>が ある",
          "はい、<ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く",
          "はい、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しを する"
        ],
        "correctIdx": 0,
        "explanation": "Miller trả lời:「うん、特に 予定は ないよ (Ừ, tớ chẳng có kế hoạch gì đặc biệt cả).」"
      },
      {
        "id": "dk20-2",
        "question": "タナカ<ruby>君<rt>きみ</rt></ruby>は ミラー<ruby>君<rt>きみ</rt></ruby>を どこに <ruby>誘<rt>さそ</rt></ruby>いましたか。",
        "options": [
          "<ruby>銀座<rt>ぎんざ</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>の <ruby>展覧会<rt>てんらんかい</rt></ruby>",
          "カラオケ<ruby>大会<rt>たいかい</rt></ruby>",
          "サッカーの <ruby>試合<rt>しあい</rt></ruby>",
          "<ruby>映画館<rt>えいがかん</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Tanaka rủ:「銀座で おもしろい 写真の 展覧会が あるんだ。よかったら、一緒に 行かない？」"
      },
      {
        "id": "dk20-3",
        "question": "2<ruby>人<rt>ふたり</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>に どこで <ruby>会<rt>あ</rt></ruby>いますか。",
        "options": [
          "10<ruby>時<rt>じ</rt></ruby>に <ruby>銀座駅<rt>ぎんざえき</rt></ruby>の <ruby>改札口<rt>かいさつぐち</rt></ruby>で",
          "11<ruby>時<rt>じ</rt></ruby>に ラーメン<ruby>屋<rt>や</rt></ruby>の まえで",
          "9<ruby>時<rt>じ</rt></ruby>に ミラー<ruby>君<rt>きみ</rt></ruby>の アパートで",
          "12<ruby>時<rt>じ</rt></ruby>に <ruby>美術館<rt>びじゅつかん</rt></ruby>で"
        ],
        "correctIdx": 0,
        "explanation": "Tanaka đề nghị:「10時に 銀座駅の 改札口で どう？」và Miller đồng ý."
      },
      {
        "id": "dk20-4",
        "question": "<ruby>昼<rt>ひる</rt></ruby>ごはんは <ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べる <ruby>予定<rt>よてい</rt></ruby>ですか。",
        "options": [
          "<ruby>有名<rt>ゆうめい</rt></ruby>で <ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>い ラーメン",
          "すし",
          "<ruby>安<rt>やす</rt></ruby>い カレー",
          "ハンバーガー"
        ],
        "correctIdx": 0,
        "explanation": "Tanaka giới thiệu quán mì:「銀座に おいしい ラーメン屋が あるよ。少し 高いけど、すごく 有名なんだ。」"
      },
      {
        "id": "dk20-5",
        "question": "この <ruby>会話<rt>かいわ</rt></ruby>の <ruby>言葉遣<rt>ことばづか</rt></ruby>い (cách dùng từ) について、<ruby>正<rt>ただ</rt></ruby>しい ものは どれですか。",
        "options": [
          "<ruby>友達<rt>ともだち</rt></ruby>どうしの <ruby>親<rt>した</rt></ruby>しい <ruby>普通体<rt>ふつうたい</rt></ruby> ( thể thông thường) で <ruby>話<rt>はな</rt></ruby>して いる",
          "とても <ruby>丁寧<rt>ていねい</rt></ruby>な <ruby>敬語<rt>けいご</rt></ruby>で <ruby>話<rt>はな</rt></ruby>して いる",
          "<ruby>先生<rt>せんせい</rt></ruby>と <ruby>学生<rt>がくせい</rt></ruby>の <ruby>会話<rt>かいわ</rt></ruby>である",
          "<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>面接<rt>めんせつ</rt></ruby>の <ruby>会話<rt>かいわ</rt></ruby>である"
        ],
        "correctIdx": 0,
        "explanation": "Cuộc hội thoại dùng thể thân mật (うん、〜ない？、〜だよ、〜けど) giữa hai người bạn thân thiết."
      }
    ]
  },
  {
    "id": "dokkai-21",
    "lessonId": "bai-21",
    "title": "Bài Đọc Hiểu - Bài 21 Minna",
    "subTitle": "日本の 交通と 社会についての 意見 (Ý kiến về giao thông Nhật Bản)",
    "description": "Bài văn nghị luận ngắn nêu suy nghĩ về hệ thống tàu điện và nếp sống văn minh tại các đô thị Nhật Bản.",
    "passage": "わたしは <ruby>日本<rt>にほん</rt></ruby>の <ruby>交通<rt>こうつう</rt></ruby>について、とても <ruby>便利<rt>べんり</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>います。\n<ruby>電車<rt>でんしゃ</rt></ruby>や バスは <ruby>時間<rt>じかん</rt></ruby>どおりに <ruby>来<rt>き</rt></ruby>ますから、<ruby>約束<rt>やくそく</rt></ruby>の <ruby>時間<rt>じかん</rt></ruby>に <ruby>遅<rt>おく</rt></ruby>れません。<ruby>駅<rt>えき</rt></ruby>の <ruby>中<rt>なか</rt></ruby>も <ruby>道<rt>みち</rt></ruby>も きれいで、<ruby>安全<rt>あんぜん</rt></ruby>です。\n\nしかし、<ruby>朝<rt>あさ</rt></ruby>の ラッシュは <ruby>本当<rt>ほんとう</rt></ruby>に <ruby>大変<rt>たいへん</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>います。<ruby>人<rt>ひと</rt></ruby>が とても <ruby>多<rt>おお</rt></ruby>くて、<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>で <ruby>動<rt>うご</rt></ruby>く ことが できません。\n<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>先輩<rt>せんぱい</rt></ruby>は「<ruby>始<rt>はじ</rt></ruby>めは びっくりしたでしょう？ でも すぐ <ruby>慣<rt>な</rt></ruby>れるよ」と <ruby>言<rt>い</rt></ruby>いました。\n\nまた、<ruby>日本<rt>にほん</rt></ruby>の サラリーマンは <ruby>真面目<rt>まじめ</rt></ruby>で、よく <ruby>働<rt>はたら</rt></ruby>くと <ruby>思<rt>おも</rt></ruby>います。でも、あまり <ruby>残業<rt>ざんぎょう</rt></ruby>を しないで、もっと <ruby>家族<rt>かぞく</rt></ruby>と <ruby>過<rt>す</rt></ruby>ごす <ruby>時間<rt>じかん</rt></ruby>を <ruby>作<rt>つく</rt></ruby>った ほうが いいと <ruby>思<rt>おも</rt></ruby>います。",
    "questions": [
      {
        "id": "dk21-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>日本<rt>にほん</rt></ruby>の <ruby>交通<rt>こうつう</rt></ruby>について どう <ruby>思<rt>おも</rt></ruby>って いますか。",
        "options": [
          "とても <ruby>便利<rt>べんり</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>って いる",
          "<ruby>不便<rt>ふべん</rt></ruby>で <ruby>危険<rt>きけん</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>って いる",
          "<ruby>電車<rt>でんしゃ</rt></ruby>が いつも <ruby>遅<rt>おく</rt></ruby>れると <ruby>思<rt>おも</rt></ruby>って いる",
          "<ruby>車<rt>くるま</rt></ruby>の ほうが <ruby>早<rt>はや</rt></ruby>いと <ruby>思<rt>おも</rt></ruby>って いる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「日本の 交通について、とても 便利だと 思います。」"
      },
      {
        "id": "dk21-2",
        "question": "どうして <ruby>約束<rt>やくそく</rt></ruby>の <ruby>時間<rt>じかん</rt></ruby>に <ruby>遅<rt>おく</rt></ruby>れませんか。",
        "options": [
          "<ruby>電車<rt>でんしゃ</rt></ruby>や バスが <ruby>時間<rt>じかん</rt></ruby>どおりに <ruby>来<rt>く</rt></ruby>るから",
          "<ruby>道<rt>みち</rt></ruby>に <ruby>車<rt>くるま</rt></ruby>が ないから",
          "<ruby>走<rt>はし</rt></ruby>って <ruby>行<rt>い</rt></ruby>くから",
          "<ruby>近<rt>ちか</rt></ruby>くに <ruby>住<rt>す</rt></ruby>んで いるから"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「電車や バスは 時間どおりに 来ますから、約束の 時間に 遅れません。」"
      },
      {
        "id": "dk21-3",
        "question": "<ruby>朝<rt>あさ</rt></ruby>の ラッシュについて、<ruby>筆者<rt>ひっしゃ</rt></ruby>は どう <ruby>思<rt>おも</rt></ruby>って いますか。",
        "options": [
          "<ruby>本当<rt>ほんとう</rt></ruby>に <ruby>大変<rt>たいへん</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>って いる",
          "とても <ruby>楽<rt>たの</rt></ruby>しいと <ruby>思<rt>おも</rt></ruby>って いる",
          "<ruby>人<rt>ひと</rt></ruby>が <ruby>少<rt>すく</rt></ruby>ないと <ruby>思<rt>おも</rt></ruby>って いる",
          "<ruby>涼<rt>すず</rt></ruby>しくて <ruby>気持<rt>きも</rt></ruby>ちいいと <ruby>思<rt>おも</rt></ruby>って いる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「朝の ラッシュは 本当に 大変だと 思います。人が とても 多くて...」"
      },
      {
        "id": "dk21-4",
        "question": "<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>先輩<rt>せんぱい</rt></ruby>は <ruby>何<rt>なに</rt></ruby>と <ruby>言<rt>い</rt></ruby>いましたか。",
        "options": [
          "「<ruby>始<rt>はじ</rt></ruby>めは びっくりしたでしょう？ でも すぐ <ruby>慣<rt>な</rt></ruby>れるよ」",
          "「<ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>るな」",
          "「タクシーで <ruby>行<rt>い</rt></ruby>きなさい」",
          "「<ruby>会社<rt>かいしゃ</rt></ruby>を <ruby>辞<rt>や</rt></ruby>めなさい」"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「会社の 先輩は『始めは びっくりしたでしょう？ でも すぐ 慣れるよ』と 言いました。」"
      },
      {
        "id": "dk21-5",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>日本<rt>にほん</rt></ruby>の サラリーマンについて どんな <ruby>意見<rt>いけん</rt></ruby>を <ruby>持<rt>も</rt></ruby>って いますか。",
        "options": [
          "あまり <ruby>残業<rt>ざんぎょう</rt></ruby>しないで、<ruby>家族<rt>かぞく</rt></ruby>との <ruby>時間<rt>じかん</rt></ruby>を <ruby>作<rt>つく</rt></ruby>った ほうが いい",
          "もっと <ruby>夜<rt>よる</rt></ruby>まで <ruby>残業<rt>ざんぎょう</rt></ruby>すべきだ",
          "<ruby>仕事<rt>しごと</rt></ruby>が <ruby>不真面目<rt>ふまじめ</rt></ruby>である",
          "<ruby>休<rt>やす</rt></ruby>みを <ruby>減<rt>へ</rt></ruby>らすべきだ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「あまり 残業を しないで、もっと 家族と 過ごす 時間を 作った ほうが いいと 思います。」"
      }
    ]
  },
  {
    "id": "dokkai-22",
    "lessonId": "bai-22",
    "title": "Bài Đọc Hiểu - Bài 22 Minna",
    "subTitle": "新しい アパートと 私の 部屋 (Căn hộ mới và căn phòng của tôi)",
    "description": "Đoạn văn miêu tả về căn nhà trọ mới thuê, đồ đạc và những người sống xung quanh ứng dụng mệnh đề bổ ngữ danh từ.",
    "passage": "わたしは <ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しい アパートへ <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しました。\n[わたしが <ruby>今<rt>いま</rt></ruby> <ruby>住<rt>す</rt></ruby>んで いる] アパートは、<ruby>駅<rt>えき</rt></ruby>から <ruby>歩<rt>ある</rt></ruby>いて 5<ruby>分<rt>ふん</rt></ruby>の ところに あります。<ruby>家賃<rt>やちん</rt></ruby>は <ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>いですが、とても <ruby>便利<rt>べんり</rt></ruby>です。\n\n<ruby>部屋<rt>へや</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に [<ruby>父<rt>ちち</rt></ruby>が <ruby>買<rt>か</rt></ruby>ってくれた] <ruby>大<rt>おお</rt></ruby>きい <ruby>机<rt>つくえ</rt></ruby>と、[<ruby>友達<rt>ともだち</rt></ruby>が <ruby>描<rt>えが</rt></ruby>いた] きれいな <ruby>絵<rt>え</rt></ruby>が あります。\nまた、この アパートには <ruby>和室<rt>わしつ</rt></ruby>が あります。<ruby>大<rt>おお</rt></ruby>きい <ruby>押<rt>お</rt></ruby>し<ruby>入<rt>い</rt></ruby>れが ありますから、<ruby>昼間<rt>ひるま</rt></ruby>は そこに <ruby>布団<rt>ふとん</rt></ruby>を <ruby>入<rt>い</rt></ruby>れます。\n\n<ruby>隣<rt>となり</rt></ruby>の <ruby>部屋<rt>へや</rt></ruby>に [いつも メガネを かけて スーツを <ruby>着<rt>き</rt></ruby>て いる] <ruby>親切<rt>しんせつ</rt></ruby>な サラリーマンが <ruby>住<rt>す</rt></ruby>んで います。\n<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>した <ruby>日<rt>ひ</rt></ruby>、わたしに「おめでとうございます」と <ruby>言<rt>い</rt></ruby>って、おいしい お<ruby>菓子<rt>かし</rt></ruby>を くれました。<ruby>本当<rt>ほんとう</rt></ruby>に いい <ruby>所<rt>ところ</rt></ruby>です。",
    "questions": [
      {
        "id": "dk22-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>の アパートは どこに ありますか。",
        "options": [
          "<ruby>駅<rt>えき</rt></ruby>から <ruby>歩<rt>ある</rt></ruby>いて 5<ruby>分<rt>ふん</rt></ruby>の ところ",
          "<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>",
          "<ruby>駅<rt>えき</rt></ruby>から バスで 1<ruby>時間<rt>じかん</rt></ruby>の ところ",
          "<ruby>山<rt>やま</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「駅から 歩いて 5分の ところに あります。」"
      },
      {
        "id": "dk22-2",
        "question": "<ruby>部屋<rt>へや</rt></ruby>に ある <ruby>大<rt>おお</rt></ruby>きい <ruby>机<rt>つくえ</rt></ruby>は だれが くれましたか。",
        "options": [
          "<ruby>父<rt>ちち</rt></ruby>",
          "<ruby>友達<rt>ともだち</rt></ruby>",
          "<ruby>隣<rt>となり</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>",
          "<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>社長<rt>しゃちょう</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「[父が 買ってくれた] 大きい 机」"
      },
      {
        "id": "dk22-3",
        "question": "<ruby>昼間<rt>ひるま</rt></ruby> <ruby>布団<rt>ふとん</rt></ruby>を どこに <ruby>入<rt>い</rt></ruby>れますか。",
        "options": [
          "<ruby>押<rt>お</rt></ruby>し<ruby>入<rt>い</rt></ruby>れの <ruby>中<rt>なか</rt></ruby>",
          "ベッドの <ruby>下<rt>した</rt></ruby>",
          "ベランダ",
          "<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「大きい 押し入れが ありますから、昼間は そこに 布団を 入れます。」"
      },
      {
        "id": "dk22-4",
        "question": "<ruby>隣<rt>となり</rt></ruby>の <ruby>部屋<rt>へや</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は どんな <ruby>人<rt>ひと</rt></ruby>ですか。",
        "options": [
          "いつも メガネを かけて スーツを <ruby>着<rt>き</rt></ruby>て いる サラリーマン",
          "<ruby>帽子<rt>ぼうし</rt></ruby>を かぶった <ruby>学生<rt>がくせい</rt></ruby>",
          "<ruby>着物<rt>きもの</rt></ruby>を <ruby>着<rt>き</rt></ruby>た おばあさん",
          "いつも うるさい <ruby>若<rt>わか</rt></ruby>い <ruby>人<rt>ひと</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「[いつも メガネを かけて スーツを 着て いる] 親切な サラリーマン」"
      },
      {
        "id": "dk22-5",
        "question": "<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        "options": [
          "<ruby>隣<rt>となり</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は <ruby>筆者<rt>ひっしゃ</rt></ruby>に おいしい お<ruby>菓子<rt>かし</rt></ruby>を くれた",
          "アパートの <ruby>家賃<rt>やちん</rt></ruby>は とても <ruby>安<rt>やす</rt></ruby>い",
          "アパートには <ruby>和室<rt>わしつ</rt></ruby>は ない",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は この アパートが <ruby>嫌<rt>きら</rt></ruby>いである"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「わたしに『おめでとうございます』と言って、おいしい お菓子を くれました。」"
      }
    ]
  },
  {
    "id": "dokkai-23",
    "lessonId": "bai-23",
    "title": "Bài Đọc Hiểu - Bài 23 Minna",
    "subTitle": "初めての 一人旅と 道案内 (Chuyến đi một mình và sự chỉ đường)",
    "description": "Đoạn văn kể về chuyến đi du lịch Nara, trải nghiệm hỏi đường tại đồn cảnh sát và những chú hươu thân thiện.",
    "passage": "<ruby>先月<rt>せんげつ</rt></ruby>の <ruby>休<rt>やす</rt></ruby>み、わたしは <ruby>一人<rt>ひとり</rt></ruby>で <ruby>奈良<rt>なら</rt></ruby>へ <ruby>旅行<rt>りょこう</rt></ruby>に <ruby>行<rt>い</rt></ruby>きました。\n<ruby>奈良<rt>なら</rt></ruby><ruby>駅<rt>えき</rt></ruby>に <ruby>着<rt>つ</rt></ruby>いた とき、<ruby>奈良<rt>なら</rt></ruby><ruby>公園<rt>こうえん</rt></ruby>への <ruby>道<rt>みち</rt></ruby>が <ruby>分<rt>ふん</rt></ruby>かりませんでした。それで、<ruby>駅前<rt>えきまえ</rt></ruby>の <ruby>交番<rt>こうばん</rt></ruby>で <ruby>警察官<rt>けいさつかん</rt></ruby>に <ruby>聞<rt>き</rt></ruby>きました。\n\n<ruby>警察官<rt>けいさつかん</rt></ruby>は「この <ruby>道<rt>みち</rt></ruby>を まっすぐ <ruby>行<rt>い</rt></ruby>って、2つ<ruby>目<rt>め</rt></ruby>の <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がってください。それから <ruby>大<rt>おお</rt></ruby>きい <ruby>橋<rt>はし</rt></ruby>を <ruby>渡<rt>わた</rt></ruby>ると、<ruby>左側<rt>ひだりがわ</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>が ありますよ」と <ruby>教<rt>おし</rt></ruby>えて くれました。\n\n<ruby>教<rt>おし</rt></ruby>えられた とおりに <ruby>歩<rt>ある</rt></ruby>いて <ruby>行<rt>い</rt></ruby>くと、すぐに <ruby>奈良<rt>なら</rt></ruby><ruby>公園<rt>こうえん</rt></ruby>が <ruby>見<rt>み</rt></ruby>つかりました。\n<ruby>公園<rt>こうえん</rt></ruby>には たくさんの <ruby>鹿<rt>しか</rt></ruby>が いました。「<ruby>鹿<rt>しか</rt></ruby>せんべい」を <ruby>買<rt>か</rt></ruby>って <ruby>渡<rt>わた</rt></ruby>すと、<ruby>鹿<rt>しか</rt></ruby>は <ruby>頭<rt>あたま</rt></ruby>を <ruby>下げ<rt>さげ</rt></ruby>て、お<ruby>礼<rt>れい</rt></ruby>を しました。とても かわいいと <ruby>思<rt>おも</rt></ruby>いました。<ruby>道<rt>みち</rt></ruby>に <ruby>迷<rt>まよ</rt></ruby>った ときは <ruby>不安<rt>ふあん</rt></ruby>でしたが、とても <ruby>楽<rt>たの</rt></ruby>しい <ruby>一日<rt>いちにち</rt></ruby>でした。",
    "questions": [
      {
        "id": "dk23-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>奈良<rt>なら</rt></ruby><ruby>駅<rt>えき</rt></ruby>に <ruby>着<rt>つ</rt></ruby>いた とき、どうして <ruby>交番<rt>こうばん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きましたか。",
        "options": [
          "<ruby>奈良<rt>なら</rt></ruby><ruby>公園<rt>こうえん</rt></ruby>への <ruby>道<rt>みち</rt></ruby>が <ruby>分<rt>ふん</rt></ruby>からなかったから",
          "<ruby>財布<rt>さいふ</rt></ruby>を なくしたから",
          "<ruby>警察官<rt>けいさつかん</rt></ruby>の <ruby>友達<rt>ともだち</rt></ruby>が いたから",
          "<ruby>切符<rt>きっぷ</rt></ruby>を <ruby>買<rt>か</rt></ruby>うため"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「奈良公園への 道が 分かりませんでした。それで、駅前の 交番で 警察官に 聞きました。」"
      },
      {
        "id": "dk23-2",
        "question": "<ruby>警察官<rt>けいさつかん</rt></ruby>の <ruby>道案内<rt>みちあんない</rt></ruby>について、<ruby>正<rt>ただ</rt></ruby>しい ものは どれですか。",
        "options": [
          "まっすぐ <ruby>行<rt>い</rt></ruby>って 2つ<ruby>目<rt>め</rt></ruby>の <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>きょく</rt></ruby>がり、<ruby>橋<rt>はし</rt></ruby>を <ruby>渡<rt>わた</rt></ruby>ると <ruby>左側<rt>ひだりがわ</rt></ruby>にある",
          "<ruby>最初<rt>さいしょ</rt></ruby>の <ruby>信号<rt>しんごう</rt></ruby>を <ruby>左<rt>ひだり</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がると すぐある",
          "バスに 30<ruby>分<rt>ふん</rt></ruby> <ruby>乗<rt>の</rt></ruby>る",
          "<ruby>橋<rt>はし</rt></ruby>を <ruby>渡<rt>わた</rt></ruby>らないで <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「まっすぐ 行って、2つ目の 信号を 右へ 曲がってください。それから 大きい 橋を 渡ると、左側に 公園が ありますよ」"
      },
      {
        "id": "dk23-3",
        "question": "<ruby>鹿<rt>しか</rt></ruby>に「<ruby>鹿<rt>しか</rt></ruby>せんべい」を <ruby>渡<rt>わた</rt></ruby>すと、<ruby>鹿<rt>しか</rt></ruby>は どう しましたか。",
        "options": [
          "<ruby>頭<rt>あたま</rt></ruby>を <ruby>下げ<rt>さげ</rt></ruby>て、お<ruby>礼<rt>れい</rt></ruby>を した",
          "<ruby>走<rt>はし</rt></ruby>って <ruby>逃<rt>に</rt></ruby>げた",
          "<ruby>怒<rt>おこ</rt></ruby>って <ruby>噛<rt>か</rt></ruby>んだ",
          "<ruby>何<rt>なに</rt></ruby>も しなかった"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「『鹿せんべい』を 買って 渡すと、鹿は 頭を 下げて、お礼を しました。」"
      },
      {
        "id": "dk23-4",
        "question": "「<ruby>道<rt>みち</rt></ruby>に <ruby>迷<rt>まよ</rt></ruby>った とき」の「<ruby>迷<rt>まよ</rt></ruby>う」の <ruby>意味<rt>いみ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "Lạc đường, mất phương hướng",
          "Tìm thấy đường đi",
          "Sửa chữa đường sá",
          "Chạy thật nhanh"
        ],
        "correctIdx": 0,
        "explanation": "道に 迷います (みちに まよいます) nghĩa là lạc đường."
      },
      {
        "id": "dk23-5",
        "question": "<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        "options": [
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は 1<ruby>人<rt>ひとり</rt></ruby>で <ruby>奈良<rt>なら</rt></ruby>へ <ruby>行<rt>い</rt></ruby>った",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>家族<rt>かぞく</rt></ruby>と <ruby>奈良<rt>なら</rt></ruby>へ <ruby>行<rt>い</rt></ruby>った",
          "<ruby>奈良<rt>なら</rt></ruby><ruby>公園<rt>こうえん</rt></ruby>に <ruby>鹿<rt>しか</rt></ruby>は 1<ruby>頭<rt>あたま</rt></ruby>も いなかった",
          "<ruby>警察官<rt>けいさつかん</rt></ruby>は <ruby>道<rt>みち</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて くれなかった"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「わたしは 一人で 奈良へ 旅行に 行きました。」"
      }
    ]
  },
  {
    "id": "dokkai-24",
    "lessonId": "bai-24",
    "title": "Bài Đọc Hiểu - Bài 24 Minna",
    "subTitle": "親切な 人々と 助け合い (Những con người tốt bụng và sự tương trợ)",
    "description": "Đoạn văn bày tỏ lòng biết ơn đối với những người hàng xóm và đồng nghiệp đã giúp đỡ mình trong thời gian đầu sang Nhật.",
    "passage": "わたしが <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>たばかりの とき、<ruby>日本語<rt>にほんご</rt></ruby>が あまり <ruby>分<rt>ふん</rt></ruby>かりませんでした。\nその とき、アパートの <ruby>大家<rt>おおや</rt></ruby>さんは <ruby>市役所<rt>しやくしょ</rt></ruby>へ <ruby>連<rt>つ</rt></ruby>れて <ruby>行<rt>い</rt></ruby>って、<ruby>外国人<rt>がいこくじん</rt></ruby><ruby>登録<rt>とうろく</rt></ruby>の <ruby>手続<rt>てつづ</rt></ruby>きを <ruby>手伝<rt>てつだ</rt></ruby>って くれました。\n\nまた、<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>同僚<rt>どうりょう</rt></ruby>の <ruby>佐藤<rt>さとう</rt></ruby>さんは、スーパーでの <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>の しかたや ゴミの <ruby>分<rt>わ</rt></ruby>け<ruby>方<rt>かた</rt></ruby>を <ruby>親切<rt>しんせつ</rt></ruby>に <ruby>説明<rt>せつめい</rt></ruby>して くれました。<ruby>佐藤<rt>さとう</rt></ruby>さんの <ruby>奥<rt>おく</rt></ruby>さんも、おいしい <ruby>日本料理<rt>にほんりょうり</rt></ruby>を <ruby>作<rt>つく</rt></ruby>って、わたしに くれました。\n\nわたしは <ruby>皆<rt>みな</rt></ruby>さんに お<ruby>礼<rt>れい</rt></ruby>が したかったですから、<ruby>先週<rt>せんしゅう</rt></ruby> ベトナムの <ruby>春巻<rt>はるま</rt></ruby>きを <ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>って、<ruby>大家<rt>おおや</rt></ruby>さんと <ruby>佐藤<rt>さとう</rt></ruby>さんに あげました。「とても おいしい！」と <ruby>言<rt>い</rt></ruby>って、たくさん <ruby>食<rt>た</rt></ruby>べて くれました。<ruby>周<rt>まわ</rt></ruby>りの <ruby>人<rt>ひと</rt></ruby>たちが いつも <ruby>助<rt>たす</rt></ruby>けて くれますから、わたしは <ruby>日本<rt>にほん</rt></ruby>での <ruby>生活<rt>せいかつ</rt></ruby>が とても <ruby>楽<rt>たの</rt></ruby>しいです。",
    "questions": [
      {
        "id": "dk24-1",
        "question": "アパートの <ruby>大家<rt>おおや</rt></ruby>さんは <ruby>何<rt>なに</rt></ruby>を して くれましたか。",
        "options": [
          "<ruby>市役所<rt>しやくしょ</rt></ruby>へ <ruby>連<rt>つ</rt></ruby>れて <ruby>行<rt>い</rt></ruby>って、<ruby>手続<rt>てつづ</rt></ruby>きを <ruby>手伝<rt>てつだ</rt></ruby>って くれた",
          "お<ruby>金<rt>かね</rt></ruby>を <ruby>貸<rt>か</rt></ruby>して くれた",
          "<ruby>新<rt>あたら</rt></ruby>しい <ruby>車<rt>くるま</rt></ruby>を <ruby>買<rt>か</rt></ruby>って くれた",
          "<ruby>日本語<rt>にほんご</rt></ruby>を <ruby>毎日<rt>まいにち</rt></ruby> <ruby>教<rt>おし</rt></ruby>えて くれた"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「アパートの 大家さんは 市役所へ 連れて 行って、外国人登録の 手続きを 手伝って くれました。」"
      },
      {
        "id": "dk24-2",
        "question": "<ruby>同僚<rt>どうりょう</rt></ruby>の <ruby>佐藤<rt>さとう</rt></ruby>さんは <ruby>何<rt>なに</rt></ruby>を して くれましたか。",
        "options": [
          "<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>の しかたや ゴミの <ruby>分<rt>わ</rt></ruby>け<ruby>方<rt>かた</rt></ruby>を <ruby>説明<rt>せつめい</rt></ruby>して くれた",
          "アパートを <ruby>探<rt>さが</rt></ruby>して くれた",
          "<ruby>飛行機<rt>ひこうき</rt></ruby>の <ruby>切符<rt>きっぷ</rt></ruby>を <ruby>買<rt>か</rt></ruby>って くれた",
          "ベトナムへ <ruby>案内<rt>あんない</rt></ruby>して くれた"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「スーパーでの 買い物の しかたや ゴミの 分け方を 親切に 説明して くれました。」"
      },
      {
        "id": "dk24-3",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は お<ruby>礼<rt>れい</rt></ruby>に <ruby>何<rt>なに</rt></ruby>を しましたか。",
        "options": [
          "<ruby>自分<rt>じぶん</rt></ruby>で ベトナムの <ruby>春巻<rt>はるま</rt></ruby>きを <ruby>作<rt>つく</rt></ruby>って あげた",
          "<ruby>高価<rt>こうか</rt></ruby>な <ruby>時計<rt>とけい</rt></ruby>を あげた",
          "お<ruby>金<rt>かね</rt></ruby>を <ruby>払<rt>はら</rt></ruby>った",
          "<ruby>手紙<rt>てがみ</rt></ruby>だけ <ruby>書<rt>か</rt></ruby>いた"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「ベトナムの 春巻きを 自分で 作って、大家さんと 佐藤さんに あげました。」"
      },
      {
        "id": "dk24-4",
        "question": "「<ruby>大家<rt>おおや</rt></ruby>さんと <ruby>佐藤<rt>さとう</rt></ruby>さんに あげました」で「あげました」を <ruby>使<rt>つか</rt></ruby>った <ruby>理由<rt>りゆう</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>が <ruby>他<rt>ほか</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>に プレゼントを <ruby>渡<rt>わた</rt></ruby>したから",
          "<ruby>他<rt>ほか</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>が <ruby>筆者<rt>ひっしゃ</rt></ruby>に くれたから",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>が もらったから",
          "<ruby>特<rt>とく</rt></ruby>に <ruby>意味<rt>いみ</rt></ruby>は ない"
        ],
        "correctIdx": 0,
        "explanation": "Người nói (tôi) tặng đồ cho người khác thì dùng động từ あげます."
      },
      {
        "id": "dk24-5",
        "question": "<ruby>文章<rt>ぶんしょう</rt></ruby>の <ruby>内容<rt>ないよう</rt></ruby>と <ruby>合<rt>あ</rt></ruby>って いる ものは どれですか。",
        "options": [
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>周<rt>まわ</rt></ruby>りの <ruby>人<rt>ひと</rt></ruby>たちに <ruby>感謝<rt>かんしゃ</rt></ruby>して <ruby>楽<rt>たの</rt></ruby>しく <ruby>暮<rt>く</rt></ruby>らして いる",
          "<ruby>大家<rt>おおや</rt></ruby>さんは <ruby>春巻<rt>はるま</rt></ruby>きを <ruby>食<rt>た</rt></ruby>べなかった",
          "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>たときから <ruby>日本語<rt>にほんご</rt></ruby>が とても <ruby>上手<rt>じょうず</rt></ruby>だった",
          "<ruby>佐藤<rt>さとう</rt></ruby>さんの <ruby>奥<rt>おく</rt></ruby>さんは <ruby>料理<rt>りょうり</rt></ruby>が <ruby>下手<rt>へた</rt></ruby>である"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「周りの 人たちが いつも 助けて くれますから、わたしは 日本での 生活が とても 楽しいです。」"
      }
    ]
  },
  {
    "id": "dokkai-25",
    "lessonId": "bai-25",
    "title": "Bài Đọc Hiểu - Bài 25 Minna",
    "subTitle": "将来の 夢と 感謝の 気持ち (Ước mơ tương lai và lời tri ân)",
    "description": "Bài phát biểu kết thúc giai đoạn sơ cấp N5, chia sẻ ước mơ nghề nghiệp và những lời dặn dò chia tay xúc động.",
    "passage": "きょうで <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>初級<rt>しょきゅう</rt></ruby>コースが <ruby>終<rt>お</rt></ruby>わります。<ruby>半年間<rt>はんとしかん</rt></ruby>、<ruby>本当<rt>ほんとう</rt></ruby>に お<ruby>世話<rt>せわ</rt></ruby>に なりました。\n\n<ruby>始<rt>はじ</rt></ruby>めは ひらがなも カタカナも <ruby>読<rt>よ</rt></ruby>めませんでしたから、いくら <ruby>勉強<rt>べんきょう</rt></ruby>しても、テストで いい <ruby>点<rt>てん</rt></ruby>が <ruby>取<rt>と</rt></ruby>れませんでした。でも、<ruby>先生方<rt>せんせいがた</rt></ruby>が <ruby>優<rt>やさ</rt></ruby>しく <ruby>教<rt>おし</rt></ruby>えて くださったおかげで、だんだん <ruby>日本語<rt>にほんご</rt></ruby>が <ruby>分<rt>ふん</rt></ruby>かるように なりました。\n\nもし JLPT N5に <ruby>合格<rt>ごうかく</rt></ruby>したら、<ruby>次<rt>つぎ</rt></ruby>は N4の <ruby>勉強<rt>べんきょう</rt></ruby>を <ruby>始<rt>はじ</rt></ruby>めたいです。<ruby>仕事<rt>しごと</rt></ruby>が <ruby>忙<rt>いそが</rt></ruby>しくても、<ruby>毎日<rt>まいにち</rt></ruby> 1<ruby>時間<rt>じかん</rt></ruby>は <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>する つもりです。\nそして、<ruby>将来<rt>しょうらい</rt></ruby> チャンスが あったら、<ruby>日本<rt>にほん</rt></ruby>の IT<ruby>企業<rt>きぎょう</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>きたいと <ruby>思<rt>おも</rt></ruby>って います。どんなに <ruby>大変<rt>たいへん</rt></ruby>でも、<ruby>夢<rt>ゆめ</rt></ruby>の ために <ruby>頑張<rt>がんば</rt></ruby>ります。\n\n<ruby>先生方<rt>せんせいがた</rt></ruby>、クラスメートの <ruby>皆<rt>みな</rt></ruby>さん、<ruby>本当<rt>ほんとう</rt></ruby>に ありがとうございました。どうぞ お<ruby>元気<rt>げんき</rt></ruby>で！",
    "questions": [
      {
        "id": "dk25-1",
        "question": "<ruby>今日<rt>きょう</rt></ruby>で <ruby>何<rt>なに</rt></ruby>が <ruby>終<rt>お</rt></ruby>わりますか。",
        "options": [
          "<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>初級<rt>しょきゅう</rt></ruby>コース",
          "<ruby>大学<rt>だいがく</rt></ruby>の 4<ruby>年間<rt>ねんかん</rt></ruby>",
          "IT<ruby>企業<rt>きぎょう</rt></ruby>の <ruby>仕事<rt>しごと</rt></ruby>",
          "<ruby>日本<rt>にほん</rt></ruby>の <ruby>旅行<rt>りょこう</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「きょうで 日本語の 初級コースが 終わります。」"
      },
      {
        "id": "dk25-2",
        "question": "もし N5に <ruby>合格<rt>ごうかく</rt></ruby>したら、<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>次<rt>つぎ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>を しますか。",
        "options": [
          "N4の <ruby>勉強<rt>べんきょう</rt></ruby>を <ruby>始<rt>はじ</rt></ruby>める",
          "<ruby>国<rt>くに</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>る",
          "<ruby>勉強<rt>べんきょう</rt></ruby>を やめる",
          "すぐに <ruby>転職<rt>てんしょく</rt></ruby>する"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「もし JLPT N5に 合格したら、次は N4の 勉強を 始めたいです。」"
      },
      {
        "id": "dk25-3",
        "question": "<ruby>仕事<rt>しごと</rt></ruby>が <ruby>忙<rt>いそが</rt></ruby>しくても、<ruby>筆者<rt>ひっしゃ</rt></ruby>は どう しますか。",
        "options": [
          "<ruby>毎日<rt>まいにち</rt></ruby> 1<ruby>時間<rt>じかん</rt></ruby>は <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>する",
          "<ruby>勉強<rt>べんきょう</rt></ruby>を <ruby>休<rt>やす</rt></ruby>む",
          "<ruby>会社<rt>かいしゃ</rt></ruby>を <ruby>辞<rt>や</rt></ruby>める",
          "<ruby>遊<rt>あそ</rt></ruby>びに <ruby>行<rt>い</rt></ruby>く"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「仕事が 忙しくても、毎日 1時間は 日本語を 勉強する つもりです。」"
      },
      {
        "id": "dk25-4",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>の <ruby>将来<rt>しょうらい</rt></ruby>の <ruby>夢<rt>ゆめ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。",
        "options": [
          "<ruby>日本<rt>にほん</rt></ruby>の IT<ruby>企業<rt>きぎょう</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>くこと",
          "<ruby>歌手<rt>かしゅ</rt></ruby>に なること",
          "<ruby>日本中<rt>にほんじゅう</rt></ruby>を ドライブすること",
          "<ruby>学校<rt>がっこう</rt></ruby>の <ruby>先生<rt>せんせい</rt></ruby>に なること"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「将来 チャンスが あったら、日本の IT企業で 働きたいと 思って います。」"
      },
      {
        "id": "dk25-5",
        "question": "「お<ruby>世話<rt>せわ</rt></ruby>に なりました」の <ruby>意味<rt>いみ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "Cảm ơn vì đã luôn quan tâm, dạy bảo và giúp đỡ tôi suốt thời gian qua",
          "Xin lỗi vì đã làm hỏng đồ đạc",
          "Xin chào buổi sáng tốt lành",
          "Chúc mừng năm mới an khang"
        ],
        "correctIdx": 0,
        "explanation": "お世話になりました là lời chào tạm biệt tri ân cảm ơn vì đã giúp đỡ, chăm sóc mình trong suốt thời gian học tập/làm việc."
      }
    ]
  },
  {
    "id": "dokkai-26",
    "lessonId": "bai-26",
    "title": "Bài Đọc Hiểu - Bài 26 Minna",
    "subTitle": "新しい アパートと ゴミの 出し方 (Căn hộ mới và cách đổ rác)",
    "description": "Đoạn văn kể về trải nghiệm chuyển đến khu nhà mới, hỏi thăm người quản lý về quy định phân loại rác và sử dụng cấu trúc 〜んです.",
    "passage": "<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しい アパートへ <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>したんです。<ruby>部屋<rt>へや</rt></ruby>は <ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>くて、とても <ruby>便利<rt>べんり</rt></ruby>なんです。\nでも、<ruby>一<rt>いち</rt></ruby>つ <ruby>困<rt>こま</rt></ruby>った ことが ありました。ゴミの <ruby>出<rt>だ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>が よく <ruby>分<rt>ふん</rt></ruby>からないんです。\nそれで、アパートの <ruby>管<rt>かん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>人<rt>ひと</rt></ruby>さんに <ruby>聞<rt>き</rt></ruby>きに <ruby>行<rt>い</rt></ruby>きました。\n「すみません、<ruby>燃<rt>も</rt></ruby>える ゴミは いつ <ruby>出<rt>だ</rt></ruby>せば いいですか」と <ruby>聞<rt>き</rt></ruby>きました。\n<ruby>管<rt>かん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>人<rt>ひと</rt></ruby>さんは <ruby>親切<rt>しんせつ</rt></ruby>に <ruby>教<rt>おし</rt></ruby>えて くれました。「<ruby>燃<rt>も</rt></ruby>える ゴミは <ruby>火曜日<rt>かようび</rt></ruby>と <ruby>金曜日<rt>きんようび</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby> 8<ruby>時<rt>じ</rt></ruby>までに <ruby>出<rt>だ</rt></ruby>して ください。カンや ビンは <ruby>水曜日<rt>すいようび</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby>ですよ」\n<ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は ルールが <ruby>多<rt>おお</rt></ruby>いですが、<ruby>管<rt>かん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>人<rt>ひと</rt></ruby>さんが <ruby>親切<rt>しんせつ</rt></ruby>なので、<ruby>安心<rt>あんしん</rt></ruby>しました。",
    "questions": [
      {
        "id": "dk26-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>先週<rt>せんしゅう</rt></ruby> <ruby>何<rt>なん</rt></ruby>を しましたか。",
        "options": [
          "<ruby>新<rt>あたら</rt></ruby>しい アパートへ <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>した",
          "<ruby>国<rt>くに</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>った",
          "<ruby>車<rt>くるま</rt></ruby>を <ruby>買<rt>か</rt></ruby>った",
          "<ruby>仕事<rt>しごと</rt></ruby>を <ruby>辞<rt>や</rt></ruby>めた"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「先週、新しい アパートへ 引っ越したんです。」"
      },
      {
        "id": "dk26-2",
        "question": "アパートの <ruby>部屋<rt>へや</rt></ruby>は どうですか。",
        "options": [
          "<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>くて <ruby>便利<rt>べんり</rt></ruby>",
          "<ruby>駅<rt>えき</rt></ruby>から <ruby>遠<rt>とお</rt></ruby>くて <ruby>不便<rt>ふべん</rt></ruby>",
          "<ruby>狭<rt>せま</rt></ruby>くて <ruby>暗<rt>くら</rt></ruby>い",
          "<ruby>家賃<rt>やちん</rt></ruby>が <ruby>高<rt>たか</rt></ruby>すぎる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「部屋は 駅から 近くて、とても 便利なんです。」"
      },
      {
        "id": "dk26-3",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>に <ruby>困<rt>こま</rt></ruby>って いましたか。",
        "options": [
          "ゴミの <ruby>出<rt>だ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>が <ruby>分<rt>ふん</rt></ruby>からないこと",
          "<ruby>鍵<rt>かぎ</rt></ruby>を なくしたこと",
          "お<ruby>金<rt>かね</rt></ruby>が ないこと",
          "<ruby>電気<rt>でんき</rt></ruby>が つかないこと"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「ゴミの 出し方が よく 分からないんです。」"
      },
      {
        "id": "dk26-4",
        "question": "<ruby>燃<rt>も</rt></ruby>える ゴミは いつ <ruby>出<rt>だ</rt></ruby>しますか。",
        "options": [
          "<ruby>火曜日<rt>かようび</rt></ruby>と <ruby>金曜日<rt>きんようび</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby>",
          "<ruby>水曜日<rt>すいようび</rt></ruby>の <ruby>昼<rt>ひる</rt></ruby>",
          "<ruby>土曜日<rt>どようび</rt></ruby>の <ruby>夜<rt>よる</rt></ruby>",
          "<ruby>毎日<rt>まいにち</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「燃える ゴミは 火曜日と 金曜日の 朝 8時までに 出して ください。」"
      },
      {
        "id": "dk26-5",
        "question": "<ruby>管<rt>かん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>人<rt>ひと</rt></ruby>さんは どんな <ruby>人<rt>ひと</rt></ruby>ですか。",
        "options": [
          "<ruby>親切<rt>しんせつ</rt></ruby>な <ruby>人<rt>ひと</rt></ruby>",
          "<ruby>怖<rt>こわ</rt></ruby>い <ruby>人<rt>ひと</rt></ruby>",
          "<ruby>厳<rt>きび</rt></ruby>しい <ruby>人<rt>ひと</rt></ruby>",
          "<ruby>静<rt>しず</rt></ruby>かな <ruby>人<rt>ひと</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「管理人さんは 親切に 教えて くれました。」"
      }
    ]
  },
  {
    "id": "dokkai-27",
    "lessonId": "bai-27",
    "title": "Bài Đọc Hiểu - Bài 27 Minna",
    "subTitle": "温泉で できること (Những trải nghiệm tại suối nước nóng)",
    "description": "Đoạn văn miêu tả chuyến đi suối nước nóng ngắm cảnh núi Phú Sĩ ứng dụng thể khả năng 可能形.",
    "passage": "<ruby>日本<rt>にほん</rt></ruby>には たくさんの <ruby>温泉<rt>おんせん</rt></ruby>が あります。<ruby>先月<rt>せんげつ</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は <ruby>箱<rt>はこ</rt></ruby><ruby>根<rt>ね</rt></ruby>の <ruby>温泉<rt>おんせん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。\n<ruby>露<rt>ろ</rt></ruby><ruby>天<rt>てん</rt></ruby><ruby>風呂<rt>ふろ</rt></ruby>からは <ruby>富士山<rt>ふじさん</rt></ruby>が はっきりと <ruby>見<rt>み</rt></ruby>えました。お<ruby>湯<rt>ゆ</rt></ruby>は <ruby>温<rt>おん</rt></ruby>かくて、とても <ruby>気持<rt>きも</rt></ruby>ちが よかったです。\nこの <ruby>旅館<rt>りょかん</rt></ruby>では、<ruby>夜<rt>よる</rt></ruby> 8<ruby>時<rt>じ</rt></ruby>まで <ruby>広<rt>ひろ</rt></ruby>い <ruby>部屋<rt>へや</rt></ruby>で おいしい <ruby>料理<rt>りょうり</rt></ruby>が <ruby>食<rt>た</rt></ruby>べられます。\nまた、<ruby>近<rt>ちか</rt></ruby>くの <ruby>川<rt>かわ</rt></ruby>では <ruby>鳥<rt>とり</rt></ruby>の <ruby>声<rt>こえ</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえて、<ruby>静<rt>しず</rt></ruby>かに <ruby>過<rt>す</rt></ruby>ごす ことが できました。\n<ruby>忙<rt>いそが</rt></ruby>しい <ruby>毎日<rt>まいにち</rt></ruby>ですが、<ruby>温泉<rt>おんせん</rt></ruby>に <ruby>行<rt>い</rt></ruby>くと、<ruby>疲<rt>つか</rt></ruby>れを <ruby>取<rt>と</rt></ruby>る ことが できます。<ruby>外国人<rt>がいこくじん</rt></ruby>でも <ruby>簡単<rt>かんたん</rt></ruby>に <ruby>予約<rt>よやく</rt></ruby>が できますから、<ruby>皆<rt>みな</rt></ruby>さんも ぜひ <ruby>行<rt>い</rt></ruby>って みてください。",
    "questions": [
      {
        "id": "dk27-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>先月<rt>せんげつ</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きましたか。",
        "options": [
          "<ruby>箱<rt>はこ</rt></ruby><ruby>根<rt>ね</rt></ruby>の <ruby>温泉<rt>おんせん</rt></ruby>",
          "<ruby>京都<rt>きょうと</rt></ruby>の お<ruby>寺<rt>てら</rt></ruby>",
          "<ruby>東京<rt>とうきょう</rt></ruby>タワー",
          "<ruby>北海道<rt>ほっかいどう</rt></ruby>の スキー<ruby>場<rt>じょう</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「先月、私は 箱根の 温泉へ 行きました。」"
      },
      {
        "id": "dk27-2",
        "question": "<ruby>露<rt>ろ</rt></ruby><ruby>天<rt>てん</rt></ruby><ruby>風呂<rt>ふろ</rt></ruby>から <ruby>何<rt>なん</rt></ruby>が <ruby>見<rt>み</rt></ruby>えましたか。",
        "options": [
          "<ruby>富士山<rt>ふじさん</rt></ruby>",
          "<ruby>海<rt>うみ</rt></ruby>",
          "<ruby>新幹線<rt>しんかんせん</rt></ruby>",
          "<ruby>星<rt>ほし</rt></ruby><ruby>空<rt>そら</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「露天風呂からは 富士山が はっきりと 見えました。」"
      },
      {
        "id": "dk27-3",
        "question": "<ruby>川<rt>かわ</rt></ruby>からは <ruby>何<rt>なん</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえましたか。",
        "options": [
          "<ruby>鳥<rt>とり</rt></ruby>の <ruby>声<rt>こえ</rt></ruby>",
          "<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>音<rt>おと</rt></ruby>",
          "<ruby>車<rt>くるま</rt></ruby>の <ruby>音<rt>おと</rt></ruby>",
          "<ruby>人<rt>ひと</rt></ruby>の <ruby>話<rt>はなし</rt></ruby>し<ruby>声<rt>こえ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「近くの 川では 鳥の 声が 聞こえて...」"
      },
      {
        "id": "dk27-4",
        "question": "この <ruby>旅館<rt>りょかん</rt></ruby>では <ruby>何時<rt>なんじ</rt></ruby>まで <ruby>料理<rt>りょうり</rt></ruby>が <ruby>食<rt>た</rt></ruby>べられますか。",
        "options": [
          "<ruby>夜<rt>よる</rt></ruby> 8<ruby>時<rt>じ</rt></ruby>まで",
          "<ruby>夜<rt>よる</rt></ruby> 10<ruby>時<rt>じ</rt></ruby>まで",
          "<ruby>夕方<rt>ゆうがた</rt></ruby> 5<ruby>時<rt>じ</rt></ruby>まで",
          "<ruby>朝<rt>あさ</rt></ruby> 9<ruby>時<rt>じ</rt></ruby>まで"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「夜 8時まで 広い 部屋で おいしい 料理が 食べられます。」"
      },
      {
        "id": "dk27-5",
        "question": "<ruby>温泉<rt>おんせん</rt></ruby>に <ruby>行<rt>い</rt></ruby>くと どうなりますか。",
        "options": [
          "<ruby>疲<rt>つか</rt></ruby>れを <ruby>取<rt>と</rt></ruby>る ことが できる",
          "<ruby>風<rt>かぜ</rt></ruby><ruby>邪<rt>じゃ</rt></ruby>を <ruby>引<rt>ひ</rt></ruby>く",
          "<ruby>眠<rt>ねむ</rt></ruby>れなく なる",
          "お<ruby>腹<rt>なか</rt></ruby>が すく"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「温泉に 行くと、疲れを 取る ことが できます。」"
      }
    ]
  },
  {
    "id": "dokkai-28",
    "lessonId": "bai-28",
    "title": "Bài Đọc Hiểu - Bài 28 Minna",
    "subTitle": "留学生の 忙しい 毎日 (Cuộc sống bận rộn của du học sinh)",
    "description": "Đoạn văn miêu tả cuộc sống vừa học vừa làm thêm của du học sinh ứng dụng cấu trúc 〜ながら và 〜し、〜し.",
    "passage": "<ruby>私<rt>わたし</rt></ruby>は ベトナムから <ruby>来<rt>き</rt></ruby>た <ruby>留学生<rt>りゅうがくせい</rt></ruby>です。<ruby>日本<rt>にほん</rt></ruby>に <ruby>来<rt>き</rt></ruby>てから 1<ruby>年<rt>ねん</rt></ruby>に なります。\n<ruby>平日<rt>へいじつ</rt></ruby>は <ruby>大学<rt>だいがく</rt></ruby>で <ruby>経済<rt>けいざい</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しながら、<ruby>夜<rt>よる</rt></ruby>は コンビニで アルバイトを して います。\nアルバイトの <ruby>仕事<rt>しごと</rt></ruby>は レジ<ruby>打<rt>う</rt></ruby>ちや <ruby>品<rt>ひん</rt></ruby><ruby>出<rt>だ</rt></ruby>しなど、やることが たくさん あります。\n<ruby>店<rt>みせ</rt></ruby><ruby>長<rt>なが</rt></ruby>は <ruby>優<rt>やさ</rt></ruby>しいし、<ruby>給料<rt>きゅうりょう</rt></ruby>も いいし、<ruby>同僚<rt>どうりょう</rt></ruby>も <ruby>親切<rt>しんせつ</rt></ruby>なので、とても <ruby>働<rt>はたら</rt></ruby>きやすいです。\n<ruby>週末<rt>しゅうまつ</rt></ruby>は <ruby>日本<rt>にほん</rt></ruby>の <ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>きながら、<ruby>部屋<rt>へや</rt></ruby>の <ruby>掃除<rt>そうじ</rt></ruby>を します。<ruby>大変<rt>たいへん</rt></ruby>ですが、<ruby>自分<rt>じぶん</rt></ruby>の <ruby>将来<rt>しょうらい</rt></ruby>の ために <ruby>頑張<rt>がんば</rt></ruby>って います。",
    "questions": [
      {
        "id": "dk28-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>昼間<rt>ひるま</rt></ruby> <ruby>大学<rt>だいがく</rt></ruby>で <ruby>何<rt>なん</rt></ruby>を して いますか。",
        "options": [
          "<ruby>経済<rt>けいざい</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>して いる",
          "<ruby>日本語<rt>にほんご</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて いる",
          "<ruby>寝<rt>ね</rt></ruby>て いる",
          "<ruby>運動<rt>うんどう</rt></ruby>して いる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「平日は 大学で 経済を 勉強しながら...」"
      },
      {
        "id": "dk28-2",
        "question": "<ruby>夜<rt>よる</rt></ruby>は どこで アルバイトを して いますか。",
        "options": [
          "コンビニ",
          "レストラン",
          "ホテル",
          "スーパー"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「夜は コンビニで アルバイトを して います。」"
      },
      {
        "id": "dk28-3",
        "question": "コンビニで <ruby>働<rt>はたら</rt></ruby>く <ruby>理由<rt>りゆう</rt></ruby>として <ruby>正<rt>ただ</rt></ruby>しいものは どれですか。",
        "options": [
          "<ruby>店<rt>みせ</rt></ruby><ruby>長<rt>なが</rt></ruby>が <ruby>優<rt>やさ</rt></ruby>しいし、<ruby>給料<rt>きゅうりょう</rt></ruby>も いいし、<ruby>同僚<rt>どうりょう</rt></ruby>も <ruby>親切<rt>しんせつ</rt></ruby>だから",
          "<ruby>家<rt>いえ</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>いから だけ",
          "<ruby>仕事<rt>しごと</rt></ruby>が <ruby>全然<rt>ぜんぜん</rt></ruby> ないから",
          "<ruby>友達<rt>ともだち</rt></ruby>が いるから だけ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「店長は 優しいし、給料も いいし、同僚も 親切なので...」"
      },
      {
        "id": "dk28-4",
        "question": "<ruby>週末<rt>しゅうまつ</rt></ruby>は どんな ことを して いますか。",
        "options": [
          "<ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>きながら <ruby>掃除<rt>そうじ</rt></ruby>を して いる",
          "<ruby>旅行<rt>りょこう</rt></ruby>に <ruby>行<rt>い</rt></ruby>って いる",
          "ずっと <ruby>寝<rt>ね</rt></ruby>て いる",
          "<ruby>一日<rt>いちにち</rt></ruby><ruby>中<rt>なか</rt></ruby> <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>して いる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「週末は 日本の 音楽を 聞きながら、部屋の 掃除を します。」"
      },
      {
        "id": "dk28-5",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は どんな <ruby>気持<rt>きも</rt></ruby>ちで <ruby>毎日<rt>まいにち</rt></ruby>を <ruby>過<rt>す</rt></ruby>ごして いますか。",
        "options": [
          "<ruby>大変<rt>たいへん</rt></ruby>だが <ruby>将来<rt>しょうらい</rt></ruby>の ために <ruby>頑張<rt>がんば</rt></ruby>って いる",
          "<ruby>嫌<rt>きら</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby><ruby>国<rt>くに</rt></ruby>したい",
          "<ruby>暇<rt>ひま</rt></ruby>で <ruby>退<rt>たい</rt></ruby><ruby>屈<rt>くつ</rt></ruby>して いる",
          "<ruby>諦<rt>あきら</rt></ruby>めて いる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「大変ですが、自分の 将来の ために 頑張って います。」"
      }
    ]
  },
  {
    "id": "dokkai-29",
    "lessonId": "bai-29",
    "title": "Bài Đọc Hiểu - Bài 29 Minna",
    "subTitle": "落とし物と 駅員さん (Đồ bỏ quên và nhân viên nhà ga)",
    "description": "Đoạn văn kể về sự cố để quên cặp trên tàu điện và nhận lại được đồ nhờ nhân viên ga ứng dụng tự động từ và 〜てしまいました.",
    "passage": "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は <ruby>大変<rt>たいへん</rt></ruby>な <ruby>失敗<rt>しっぱい</rt></ruby>を して しまいました。<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に かばんを <ruby>忘<rt>わす</rt></ruby>れて しまったんです。\n<ruby>駅<rt>えき</rt></ruby>の <ruby>改札<rt>かいさつ</rt></ruby>を <ruby>出<rt>で</rt></ruby>た <ruby>時<rt>じ</rt></ruby>、<ruby>財布<rt>さいふ</rt></ruby>や パスポートが <ruby>入<rt>はい</rt></ruby>った かばんが ない ことに <ruby>気<rt>き</rt></ruby>が つきました。\n<ruby>急<rt>いそ</rt></ruby>いで <ruby>駅員<rt>えきいん</rt></ruby>さんの ところへ <ruby>行<rt>い</rt></ruby>って、「かばんを <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>忘<rt>わす</rt></ruby>れて しまいました」と <ruby>言<rt>い</rt></ruby>いました。\n<ruby>駅員<rt>えきいん</rt></ruby>さんは <ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>時間<rt>じかん</rt></ruby>や かばんの <ruby>色<rt>いろ</rt></ruby>を <ruby>丁寧<rt>ていねい</rt></ruby>に <ruby>聞<rt>き</rt></ruby>いて くれました。\n30<ruby>分<rt>ふん</rt></ruby><ruby>後<rt>うし</rt></ruby>、<ruby>駅員<rt>えきいん</rt></ruby>さんから「<ruby>次<rt>つぎ</rt></ruby>の <ruby>駅<rt>えき</rt></ruby>で かばんが <ruby>見<rt>み</rt></ruby>つかりましたよ」と <ruby>連絡<rt>れんらく</rt></ruby>が ありました。\n<ruby>中<rt>なか</rt></ruby>を <ruby>確認<rt>かくにん</rt></ruby>すると、お<ruby>金<rt>かね</rt></ruby>も パスポートも <ruby>全部<rt>ぜんぶ</rt></ruby> そのまま <ruby>入<rt>はい</rt></ruby>って いました。<ruby>日本<rt>にほん</rt></ruby>の <ruby>駅員<rt>えきいん</rt></ruby>さんに <ruby>心<rt>しん</rt></ruby>から <ruby>感謝<rt>かんしゃ</rt></ruby>しました。",
    "questions": [
      {
        "id": "dk29-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>昨日<rt>きのう</rt></ruby> どんな <ruby>失敗<rt>しっぱい</rt></ruby>を しましたか。",
        "options": [
          "<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に かばんを <ruby>忘<rt>わす</rt></ruby>れた",
          "<ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>り<ruby>遅<rt>おそ</rt></ruby>れた",
          "<ruby>財布<rt>さいふ</rt></ruby>を <ruby>落<rt>お</rt></ruby>として なくした",
          "<ruby>切符<rt>きっぷ</rt></ruby>を <ruby>買<rt>か</rt></ruby>い<ruby>忘<rt>わす</rt></ruby>れた"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「電車の中に かばんを 忘れて しまったんです。」"
      },
      {
        "id": "dk29-2",
        "question": "かばんの<ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なん</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って いましたか。",
        "options": [
          "<ruby>財布<rt>さいふ</rt></ruby>や パスポート",
          "<ruby>服<rt>ふく</rt></ruby>や <ruby>靴<rt>くつ</rt></ruby>",
          "<ruby>本<rt>ほん</rt></ruby>と ノート だけ",
          "カメラ だけ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「財布や パスポートが 入った かばんが ない...」"
      },
      {
        "id": "dk29-3",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>の ところへ <ruby>相<rt>あい</rt></ruby><ruby>談<rt>だん</rt></ruby>に <ruby>行<rt>い</rt></ruby>きましたか。",
        "options": [
          "<ruby>駅員<rt>えきいん</rt></ruby>さん",
          "<ruby>警察官<rt>けいさつかん</rt></ruby>",
          "<ruby>友達<rt>ともだち</rt></ruby>",
          "<ruby>先生<rt>せんせい</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「急いで 駅員さんの ところへ 行って...」"
      },
      {
        "id": "dk29-4",
        "question": "かばんは どうなりましたか。",
        "options": [
          "<ruby>次<rt>つぎ</rt></ruby>の <ruby>駅<rt>えき</rt></ruby>で <ruby>見<rt>み</rt></ruby>つかった",
          "<ruby>見<rt>み</rt></ruby>つからなかった",
          "<ruby>盗<rt>ぬす</rt></ruby>まれて お<ruby>金<rt>かね</rt></ruby>が なくなった",
          "<ruby>川<rt>かわ</rt></ruby>に <ruby>落<rt>お</rt></ruby>ちて いた"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「次の 駅で かばんが 見つかりましたよ」"
      },
      {
        "id": "dk29-5",
        "question": "かばんの <ruby>中<rt>なか</rt></ruby><ruby>身<rt>み</rt></ruby>は どうでしたか。",
        "options": [
          "<ruby>全部<rt>ぜんぶ</rt></ruby> そのまま <ruby>入<rt>はい</rt></ruby>って いた",
          "お<ruby>金<rt>かね</rt></ruby>だけ なくなって いた",
          "パスポートが <ruby>汚<rt>きたな</rt></ruby>れて いた",
          "<ruby>中<rt>なか</rt></ruby>が <ruby>空<rt>そら</rt></ruby>だった"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「お金も パスポートも 全部 そのまま 入って いました。」"
      }
    ]
  },
  {
    "id": "dokkai-30",
    "lessonId": "bai-30",
    "title": "Bài Đọc Hiểu - Bài 30 Minna",
    "subTitle": "北海道旅行の 計画と 準備 (Kế hoạch và sự chuẩn bị cho chuyến đi Hokkaido)",
    "description": "Đoạn văn kể về các bước chuẩn bị kỹ lưỡng trước khi đi du lịch Hokkaido ứng dụng ngữ pháp 〜てあります và 〜ておきます.",
    "passage": "<ruby>来週<rt>らいしゅう</rt></ruby>から <ruby>友達<rt>ともだち</rt></ruby>と 3<ruby>日<rt>にち</rt></ruby><ruby>間<rt>あいだ</rt></ruby>、<ruby>北海道<rt>ほっかいどう</rt></ruby>へ <ruby>旅行<rt>りょこう</rt></ruby>に <ruby>行<rt>い</rt></ruby>きます。\nホテルは もう インターネットで <ruby>予約<rt>よやく</rt></ruby>して ありますし、<ruby>飛行機<rt>ひこうき</rt></ruby>の <ruby>切符<rt>きっぷ</rt></ruby>も <ruby>買<rt>か</rt></ruby>って あります。\n<ruby>北海道<rt>ほっかいどう</rt></ruby>は まだ <ruby>寒<rt>さむ</rt></ruby>いですから、<ruby>暖<rt>あたた</rt></ruby>かい <ruby>上着<rt>うわぎ</rt></ruby>を <ruby>準備<rt>じゅんび</rt></ruby>して おかなければ なりません。\n<ruby>部屋<rt>へや</rt></ruby>の <ruby>壁<rt>かべ</rt></ruby>には <ruby>北海道<rt>ほっかいどう</rt></ruby>の <ruby>地図<rt>ちず</rt></ruby>が はって あります。<ruby>行<rt>い</rt></ruby>きたい <ruby>観光<rt>かんこう</rt></ruby><ruby>地<rt>ち</rt></ruby>に <ruby>赤<rt>あか</rt></ruby>い ペンで <ruby>印<rt>しるし</rt></ruby>が つけて あります。\n<ruby>出発<rt>しゅっぱつ</rt></ruby>する <ruby>前<rt>まえ</rt></ruby>に、カメラの <ruby>充<rt>じゅう</rt></ruby><ruby>電<rt>でん</rt></ruby>を して おきます。おいしい ラーメンを <ruby>食<rt>た</rt></ruby>べるのが とても <ruby>楽<rt>たの</rt></ruby>しみです。",
    "questions": [
      {
        "id": "dk30-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>来週<rt>らいしゅう</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか。",
        "options": [
          "<ruby>北海道<rt>ほっかいどう</rt></ruby>",
          "<ruby>沖縄<rt>おきなわ</rt></ruby>",
          "<ruby>京都<rt>きょうと</rt></ruby>",
          "<ruby>東京<rt>とうきょう</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「来週から 友達と 3日間、北海道へ 旅行に 行きます。」"
      },
      {
        "id": "dk30-2",
        "question": "ホテルや <ruby>飛行機<rt>ひこうき</rt></ruby>の <ruby>切符<rt>きっぷ</rt></ruby>は どうして ありますか。",
        "options": [
          "もう <ruby>予約<rt>よやく</rt></ruby>したり <ruby>買<rt>か</rt></ruby>ったり して ある",
          "まだ <ruby>準備<rt>じゅんび</rt></ruby>して いない",
          "<ruby>旅行<rt>りょこう</rt></ruby><ruby>会社<rt>かいしゃ</rt></ruby>に <ruby>頼<rt>たの</rt></ruby>む つもりだ",
          "<ruby>来週<rt>らいしゅう</rt></ruby> <ruby>買<rt>か</rt></ruby>う <ruby>予定<rt>よてい</rt></ruby>だ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「ホテルは もう インターネットで 予約して ありますし、飛行機の 切符も 買って あります。」"
      },
      {
        "id": "dk30-3",
        "question": "<ruby>部屋<rt>へや</rt></ruby>の <ruby>壁<rt>かべ</rt></ruby>には <ruby>何<rt>なん</rt></ruby>が して ありますか。",
        "options": [
          "<ruby>北海道<rt>ほっかいどう</rt></ruby>の <ruby>地図<rt>ちず</rt></ruby>が はって ある",
          "カレンダーが はって ある",
          "<ruby>写真<rt>しゃしん</rt></ruby>が かけて ある",
          "<ruby>時計<rt>とけい</rt></ruby>が <ruby>置<rt>お</rt></ruby>いて ある"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「部屋の 壁には 北海道の 地図が はって あります。」"
      },
      {
        "id": "dk30-4",
        "question": "<ruby>出発<rt>しゅっぱつ</rt></ruby>する <ruby>前<rt>まえ</rt></ruby>に <ruby>何<rt>なん</rt></ruby>を して おきますか。",
        "options": [
          "カメラの <ruby>充<rt>じゅう</rt></ruby><ruby>電<rt>でん</rt></ruby>を して おく",
          "<ruby>新<rt>あたら</rt></ruby>しい <ruby>靴<rt>くつ</rt></ruby>を <ruby>買<rt>か</rt></ruby>う",
          "<ruby>部屋<rt>へや</rt></ruby>を <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>す",
          "<ruby>髪<rt>かみ</rt></ruby>を <ruby>切<rt>き</rt></ruby>る"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「出発する 前に、カメラの 充電を して おきます。」"
      },
      {
        "id": "dk30-5",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>が <ruby>楽<rt>たの</rt></ruby>しみに して いる ことは <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "おいしい ラーメンを <ruby>食<rt>た</rt></ruby>べること",
          "スキーを すること",
          "<ruby>温泉<rt>おんせん</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ること だけ",
          "お<ruby>土<rt>つち</rt></ruby><ruby>産<rt>さん</rt></ruby>を <ruby>売<rt>う</rt></ruby>ること"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「おいしい ラーメンを 食べるのが とても 楽しみです。」"
      }
    ]
  },
  {
    "id": "dokkai-31",
    "lessonId": "bai-31",
    "title": "Bài Đọc Hiểu - Bài 31 Minna",
    "subTitle": "私の 夢と 計画 (Ước mơ và kế hoạch tương lai của tôi)",
    "description": "Đoạn văn kể về ước mơ mở một quán ăn Việt Nam tại Nhật Bản ứng dụng thể ý chí 意向形 và 〜つもりです / 〜予定です.",
    "passage": "<ruby>大学<rt>だいがく</rt></ruby>を <ruby>卒業<rt>そつぎょう</rt></ruby>したら、<ruby>私<rt>わたし</rt></ruby>は <ruby>日本<rt>にほん</rt></ruby>の レストランで 3<ruby>年間<rt>ねんかん</rt></ruby> <ruby>働<rt>はたら</rt></ruby>こうと <ruby>思<rt>おも</rt></ruby>って います。\n<ruby>日本<rt>にほん</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>の <ruby>作<rt>つく</rt></ruby>り<ruby>方<rt>かた</rt></ruby>や <ruby>接<rt>せつ</rt></ruby><ruby>客<rt>きゃく</rt></ruby>の マナーを しっかり <ruby>学<rt>がく</rt></ruby>ぶ つもりです。\nそれから、30<ruby>歳<rt>さい</rt></ruby>までに <ruby>自分<rt>じぶん</rt></ruby>の ベトナム<ruby>料理<rt>りょうり</rt></ruby>の <ruby>店<rt>みせ</rt></ruby>を <ruby>開<rt>あ</rt></ruby>く <ruby>予定<rt>よてい</rt></ruby>です。\n<ruby>店<rt>みせ</rt></ruby>では フォーや <ruby>生<rt>う</rt></ruby><ruby>春巻<rt>はるま</rt></ruby>きなど、おいしい <ruby>本<rt>ほん</rt></ruby><ruby>場<rt>じょう</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>を <ruby>出<rt>だ</rt></ruby>そうと <ruby>考<rt>かんが</rt></ruby>えて います。\n<ruby>夢<rt>ゆめ</rt></ruby>を かなえる ために、<ruby>今<rt>いま</rt></ruby>から <ruby>毎月<rt>まいつき</rt></ruby> <ruby>貯金<rt>ちょきん</rt></ruby>を しようと <ruby>思<rt>おも</rt></ruby>って います。どんなに <ruby>大変<rt>たいへん</rt></ruby>でも、<ruby>決<rt>き</rt></ruby>して <ruby>諦<rt>あきら</rt></ruby>めない つもりです。",
    "questions": [
      {
        "id": "dk31-1",
        "question": "<ruby>大学<rt>だいがく</rt></ruby>を <ruby>卒業<rt>そつぎょう</rt></ruby>したら、まず <ruby>何<rt>なん</rt></ruby>を しようと <ruby>思<rt>おも</rt></ruby>って いますか。",
        "options": [
          "<ruby>日本<rt>にほん</rt></ruby>の レストランで 3<ruby>年間<rt>ねんかん</rt></ruby> <ruby>働<rt>はたら</rt></ruby>く",
          "すぐに <ruby>国<rt>くに</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>る",
          "<ruby>大学<rt>だいがく</rt></ruby><ruby>院<rt>いん</rt></ruby>に <ruby>進<rt>すす</rt></ruby>む",
          "<ruby>世界旅行<rt>せかいりょこう</rt></ruby>に <ruby>出<rt>で</rt></ruby>かける"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「大学を 卒業したら、私は 日本の レストランで 3年間 働こうと 思って います。」"
      },
      {
        "id": "dk31-2",
        "question": "レストランで <ruby>何<rt>なん</rt></ruby>を <ruby>学<rt>がく</rt></ruby>ぶ つもりですか。",
        "options": [
          "<ruby>料理<rt>りょうり</rt></ruby>の <ruby>作<rt>つく</rt></ruby>り<ruby>方<rt>かた</rt></ruby>や <ruby>接<rt>せつ</rt></ruby><ruby>客<rt>きゃく</rt></ruby>の マナー",
          "<ruby>英語<rt>えいご</rt></ruby>の <ruby>会話<rt>かいわ</rt></ruby>",
          "コンピューターの <ruby>技<rt>ぎ</rt></ruby><ruby>術<rt>じゅつ</rt></ruby>",
          "<ruby>車<rt>くるま</rt></ruby>の <ruby>運転<rt>うんてん</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「日本の 料理の 作り方や 接客の マナーを しっかり 学ぶ つもりです。」"
      },
      {
        "id": "dk31-3",
        "question": "<ruby>何歳<rt>なんさい</rt></ruby>までに <ruby>自分<rt>じぶん</rt></ruby>の <ruby>店<rt>みせ</rt></ruby>を <ruby>開<rt>あ</rt></ruby>く <ruby>予定<rt>よてい</rt></ruby>ですか。",
        "options": [
          "30<ruby>歳<rt>さい</rt></ruby>までに",
          "25<ruby>歳<rt>さい</rt></ruby>までに",
          "35<ruby>歳<rt>さい</rt></ruby>までに",
          "40<ruby>歳<rt>さい</rt></ruby>までに"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「それから、30歳までに 自分の ベトナム料理の 店を 開く 予定です。」"
      },
      {
        "id": "dk31-4",
        "question": "<ruby>自分<rt>じぶん</rt></ruby>の <ruby>店<rt>みせ</rt></ruby>で どんな <ruby>料理<rt>りょうり</rt></ruby>を <ruby>出<rt>だ</rt></ruby>そうと <ruby>考<rt>かんが</rt></ruby>えて いますか。",
        "options": [
          "フォーや <ruby>生<rt>う</rt></ruby><ruby>春巻<rt>はるま</rt></ruby>きなどの ベトナム<ruby>料理<rt>りょうり</rt></ruby>",
          "すしや <ruby>天<rt>てん</rt></ruby>ぷら",
          "ピザや パスタ",
          "ハンバーガー"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「店では フォーや 生春巻きなど、おいしい 本場の 料理を 出そうと 考えて います。」"
      },
      {
        "id": "dk31-5",
        "question": "<ruby>夢<rt>ゆめ</rt></ruby>を かなえる ために、<ruby>今<rt>いま</rt></ruby> <ruby>何<rt>なん</rt></ruby>を しようと して いますか。",
        "options": [
          "<ruby>毎月<rt>まいつき</rt></ruby> <ruby>貯金<rt>ちょきん</rt></ruby>を しようと <ruby>思<rt>おも</rt></ruby>って いる",
          "<ruby>新<rt>あたら</rt></ruby>しい <ruby>家<rt>いえ</rt></ruby>を <ruby>買<rt>か</rt></ruby>おうと して いる",
          "<ruby>仕事<rt>しごと</rt></ruby>を <ruby>休<rt>やす</rt></ruby>もうと して いる",
          "<ruby>友達<rt>ともだち</rt></ruby>と <ruby>遊<rt>あそ</rt></ruby>んで いる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「夢を かなえる ために、今から 毎月 貯金を しようと 思って います。」"
      }
    ]
  },
  {
    "id": "dokkai-32",
    "lessonId": "bai-32",
    "title": "Bài Đọc Hiểu - Bài 32 Minna",
    "subTitle": "医者からの アドバイス (Lời khuyên bổ ích từ bác sĩ)",
    "description": "Đoạn văn kể về lời khuyên duy trì sức khỏe khi bị căng thẳng, mệt mỏi ứng dụng cấu trúc 〜ほうがいいです và 〜かもしれません.",
    "passage": "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>仕事<rt>しごと</rt></ruby>が <ruby>忙<rt>いそが</rt></ruby>しくて、<ruby>夜<rt>よる</rt></ruby> なかなか <ruby>眠<rt>ねむ</rt></ruby>れませんでした。<ruby>頭<rt>あたま</rt></ruby>も <ruby>痛<rt>いた</rt></ruby>かったので、<ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。\nお<ruby>医者<rt>いしゃ</rt></ruby>さんは <ruby>私<rt>わたし</rt></ruby>に いくつか アドバイスを して くれました。\n「<ruby>夜<rt>よる</rt></ruby> <ruby>遅<rt>おそ</rt></ruby>くまで スマホを <ruby>見<rt>み</rt></ruby>ない ほうが いいですよ。お<ruby>風呂<rt>ふろ</rt></ruby>に ゆっくり <ruby>入<rt>はい</rt></ruby>って、<ruby>体<rt>からだ</rt></ruby>を <ruby>温<rt>おん</rt></ruby>めた ほうが いいでしょう。\nまた、<ruby>寝<rt>ね</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に <ruby>温<rt>あたた</rt></ruby>かい <ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>を <ruby>飲<rt>の</rt></ruby>むと、よく <ruby>眠<rt>ねむ</rt></ruby>れるかも しれません」と <ruby>言<rt>い</rt></ruby>いました。\n<ruby>家<rt>いえ</rt></ruby>に <ruby>帰<rt>かえ</rt></ruby>ってから、<ruby>先生<rt>せんせい</rt></ruby>の <ruby>言<rt>い</rt></ruby>った とおりに すると、ぐっすり <ruby>眠<rt>ねむ</rt></ruby>る ことが できました。<ruby>健康<rt>けんこう</rt></ruby>が <ruby>一番<rt>いちばん</rt></ruby> <ruby>大切<rt>たいせつ</rt></ruby>ですね。",
    "questions": [
      {
        "id": "dk32-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は どうして <ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きましたか。",
        "options": [
          "<ruby>夜<rt>よる</rt></ruby> <ruby>眠<rt>ねむ</rt></ruby>れなくて、<ruby>頭<rt>あたま</rt></ruby>も <ruby>痛<rt>いた</rt></ruby>かったから",
          "<ruby>足<rt>あし</rt></ruby>を <ruby>怪我<rt>けが</rt></ruby>したから",
          "<ruby>風<rt>かぜ</rt></ruby><ruby>邪<rt>じゃ</rt></ruby>を <ruby>引<rt>ひ</rt></ruby>いて <ruby>咳<rt>せき</rt></ruby>が <ruby>止<rt>と</rt></ruby>まらなかったから",
          "<ruby>薬<rt>くすり</rt></ruby>を もらいに <ruby>行<rt>い</rt></ruby>った だけ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「夜 なかなか 眠れませんでした。頭も 痛かったので、病院へ 行きました。」"
      },
      {
        "id": "dk32-2",
        "question": "お<ruby>医者<rt>いしゃ</rt></ruby>さんは スマホについて <ruby>何<rt>なん</rt></ruby>と <ruby>言<rt>い</rt></ruby>いましたか。",
        "options": [
          "<ruby>夜<rt>よる</rt></ruby> <ruby>遅<rt>おそ</rt></ruby>くまで <ruby>見<rt>み</rt></ruby>ない ほうが いい",
          "<ruby>一日<rt>いちにち</rt></ruby><ruby>中<rt>なか</rt></ruby> <ruby>使<rt>つか</rt></ruby>った ほうが いい",
          "<ruby>新<rt>あたら</rt></ruby>しい スマホを <ruby>買<rt>か</rt></ruby>った ほうが いい",
          "<ruby>何<rt>なん</rt></ruby>も <ruby>言<rt>い</rt></ruby>わなかった"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「夜 遅くまで スマホを 見ない ほうが いいですよ。」"
      },
      {
        "id": "dk32-3",
        "question": "<ruby>体<rt>からだ</rt></ruby>を <ruby>温<rt>おん</rt></ruby>める ために <ruby>何<rt>なん</rt></ruby>を した ほうが いいと <ruby>言<rt>い</rt></ruby>われましたか。",
        "options": [
          "お<ruby>風呂<rt>ふろ</rt></ruby>に ゆっくり <ruby>入<rt>はい</rt></ruby>る",
          "<ruby>激<rt>げき</rt></ruby>しい <ruby>運動<rt>うんどう</rt></ruby>を する",
          "<ruby>冷<rt>つめ</rt></ruby>たい <ruby>水<rt>みず</rt></ruby>を <ruby>浴<rt>あ</rt></ruby>びる",
          "<ruby>薬<rt>くすり</rt></ruby>を たくさん <ruby>飲<rt>の</rt></ruby>む"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「お風呂に ゆっくり 入って、体を 温めた ほうが いいでしょう。」"
      },
      {
        "id": "dk32-4",
        "question": "<ruby>寝<rt>ね</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に <ruby>何<rt>なん</rt></ruby>を <ruby>飲<rt>の</rt></ruby>むと よく <ruby>眠<rt>ねむ</rt></ruby>れるかも しれませんか。",
        "options": [
          "<ruby>温<rt>あたた</rt></ruby>かい <ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>",
          "<ruby>冷<rt>つめ</rt></ruby>たい ビール",
          "<ruby>濃<rt>こ</rt></ruby>い コーヒー",
          "<ruby>熱<rt>あつ</rt></ruby>い お<ruby>茶<rt>ちゃ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「寝る 前に 温かい 牛乳を 飲むと、よく 眠れるかも しれません」"
      },
      {
        "id": "dk32-5",
        "question": "<ruby>先生<rt>せんせい</rt></ruby>のアドバイスを <ruby>実<rt>じつ</rt></ruby><ruby>行<rt>い</rt></ruby>した<ruby>後<rt>うし</rt></ruby>、<ruby>筆者<rt>ひっしゃ</rt></ruby>は どうなりましたか。",
        "options": [
          "ぐっすり <ruby>眠<rt>ねむ</rt></ruby>る ことが できた",
          "まだ <ruby>眠<rt>ねむ</rt></ruby>れなかった",
          "<ruby>頭<rt>あたま</rt></ruby><ruby>痛<rt>いた</rt></ruby>が ひどく なった",
          "<ruby>熱<rt>ねつ</rt></ruby>が <ruby>出<rt>で</rt></ruby>た"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「先生の 言った とおりに すると、ぐっすり 眠る ことが できました。」"
      }
    ]
  },
  {
    "id": "dokkai-33",
    "lessonId": "bai-33",
    "title": "Bài Đọc Hiểu - Bài 33 Minna",
    "subTitle": "工場での 安全標識と ルール (Quy tắc an toàn và biển báo trong nhà máy)",
    "description": "Đoạn văn kể về ngày đầu học việc tại xưởng sản xuất cơ khí ứng dụng thể mệnh lệnh, cấm chỉ và 〜という意味です.",
    "passage": "<ruby>私<rt>わたし</rt></ruby>は <ruby>自動車<rt>じどうしゃ</rt></ruby>の <ruby>部<rt>ぶ</rt></ruby><ruby>品<rt>ひん</rt></ruby>を <ruby>作<rt>つく</rt></ruby>る <ruby>工場<rt>こうじょう</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>いて います。\n<ruby>工場<rt>こうじょう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>には いろいろな <ruby>標識<rt>ひょうしき</rt></ruby>が あります。<ruby>例<rt>れい</rt></ruby>えば、<ruby>黄色<rt>きいろ</rt></ruby>い <ruby>看<rt>かん</rt></ruby><ruby>板<rt>ばん</rt></ruby>に「<ruby>立入禁止<rt>たちいりきんし</rt></ruby>」と <ruby>書<rt>か</rt></ruby>いて あります。\nこれは「ここへ <ruby>入<rt>はい</rt></ruby>るな」という <ruby>意味<rt>いみ</rt></ruby>です。<ruby>機械<rt>きかい</rt></ruby>が <ruby>動<rt>うご</rt></ruby>いて いて <ruby>危<rt>あぶ</rt></ruby>ないからです。\nまた、<ruby>赤<rt>あか</rt></ruby>い <ruby>看<rt>かん</rt></ruby><ruby>板<rt>ばん</rt></ruby>の「<ruby>火<rt>ひ</rt></ruby><ruby>気<rt>き</rt></ruby><ruby>厳<rt>きび</rt></ruby><ruby>禁<rt>きん</rt></ruby>」は「ここで タバコを <ruby>吸<rt>す</rt></ruby>ったり、<ruby>火<rt>ひ</rt></ruby>を <ruby>使<rt>つか</rt></ruby>ったり しては いけない」という <ruby>意味<rt>いみ</rt></ruby>です。\n<ruby>毎朝<rt>まいあさ</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby><ruby>礼<rt>れい</rt></ruby>で、<ruby>班<rt>はん</rt></ruby><ruby>長<rt>なが</rt></ruby>は「<ruby>指<rt>さ</rt></ruby><ruby>差<rt>さ</rt></ruby>し<ruby>確認<rt>かくにん</rt></ruby>を しろ」「<ruby>安全<rt>あんぜん</rt></ruby><ruby>第<rt>だい</rt></ruby><ruby>一<rt>いち</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>け」と <ruby>言<rt>い</rt></ruby>って います。<ruby>事故<rt>じこ</rt></ruby>を <ruby>起<rt>お</rt></ruby>こさないように、ルールを <ruby>守<rt>まも</rt></ruby>る ことが <ruby>大切<rt>たいせつ</rt></ruby>です。",
    "questions": [
      {
        "id": "dk33-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は どんな <ruby>工場<rt>こうじょう</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>いて いますか。",
        "options": [
          "<ruby>自動車<rt>じどうしゃ</rt></ruby>の <ruby>部<rt>ぶ</rt></ruby><ruby>品<rt>ひん</rt></ruby>を <ruby>作<rt>つく</rt></ruby>る <ruby>工場<rt>こうじょう</rt></ruby>",
          "<ruby>食<rt>た</rt></ruby><ruby>品<rt>ひん</rt></ruby>を <ruby>加<rt>か</rt></ruby><ruby>工<rt>こう</rt></ruby>する <ruby>工場<rt>こうじょう</rt></ruby>",
          "<ruby>服<rt>ふく</rt></ruby>を <ruby>縫<rt>ぬ</rt></ruby>う <ruby>工場<rt>こうじょう</rt></ruby>",
          "<ruby>薬<rt>くすり</rt></ruby>を <ruby>作<rt>つく</rt></ruby>る <ruby>工場<rt>こうじょう</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「私は 自動車の 部品を 作る 工場で 働いて います。」"
      },
      {
        "id": "dk33-2",
        "question": "「<ruby>立入禁止<rt>たちいりきんし</rt></ruby>」は どういう <ruby>意味<rt>いみ</rt></ruby>ですか。",
        "options": [
          "ここへ <ruby>入<rt>はい</rt></ruby>るな という <ruby>意味<rt>いみ</rt></ruby>",
          "<ruby>静<rt>しず</rt></ruby>かに しろ という <ruby>意味<rt>いみ</rt></ruby>",
          "<ruby>走<rt>はし</rt></ruby>れ という <ruby>意味<rt>いみ</rt></ruby>",
          "<ruby>靴<rt>くつ</rt></ruby>を <ruby>脱<rt>ぬ</rt></ruby>げ という <ruby>意味<rt>いみ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「これは「ここへ 入るな」という 意味です。」"
      },
      {
        "id": "dk33-3",
        "question": "「<ruby>火<rt>ひ</rt></ruby><ruby>気<rt>き</rt></ruby><ruby>厳<rt>きび</rt></ruby><ruby>禁<rt>きん</rt></ruby>」の <ruby>場所<rt>ばしょ</rt></ruby>で <ruby>何<rt>なん</rt></ruby>を しては いけませんか。",
        "options": [
          "タバコを <ruby>吸<rt>す</rt></ruby>ったり、<ruby>火<rt>ひ</rt></ruby>を <ruby>使<rt>つか</rt></ruby>ったり しては いけない",
          "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>っては いけない",
          "<ruby>大<rt>おお</rt></ruby><ruby>声<rt>こえ</rt></ruby>で <ruby>話<rt>はな</rt></ruby>しては いけない",
          "<ruby>食事<rt>しょくじ</rt></ruby>を しては いけない"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「火気厳禁」は「ここで タバコを 吸ったり、火を 使ったり しては いけない」という 意味です。"
      },
      {
        "id": "dk33-4",
        "question": "<ruby>班<rt>はん</rt></ruby><ruby>長<rt>なが</rt></ruby>は <ruby>朝<rt>あさ</rt></ruby><ruby>礼<rt>れい</rt></ruby>で <ruby>何<rt>なん</rt></ruby>と <ruby>言<rt>い</rt></ruby>って いますか。",
        "options": [
          "「<ruby>指<rt>さ</rt></ruby><ruby>差<rt>さ</rt></ruby>し<ruby>確認<rt>かくにん</rt></ruby>を しろ」「<ruby>安全<rt>あんぜん</rt></ruby><ruby>第<rt>だい</rt></ruby><ruby>一<rt>いち</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>け」",
          "「<ruby>早<rt>はや</rt></ruby>く <ruby>帰<rt>かえ</rt></ruby>れ」",
          "「<ruby>休<rt>やす</rt></ruby>まず <ruby>働<rt>はたら</rt></ruby>け」",
          "「<ruby>歌<rt>うた</rt></ruby>を <ruby>歌<rt>うた</rt></ruby>え」"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「班長は「指差し確認を しろ」「安全第一で 働け」と 言って います。」"
      },
      {
        "id": "dk33-5",
        "question": "<ruby>工場<rt>こうじょう</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>く ときに <ruby>最<rt>もっと</rt></ruby>も <ruby>大切<rt>たいせつ</rt></ruby>な ことは <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>事故<rt>じこ</rt></ruby>を <ruby>起<rt>お</rt></ruby>こさないように ルールを <ruby>守<rt>まも</rt></ruby>ること",
          "<ruby>誰<rt>だれ</rt></ruby>よりも <ruby>早<rt>はや</rt></ruby>く <ruby>作<rt>つく</rt></ruby>ること",
          "<ruby>残業<rt>ざんぎょう</rt></ruby>を たくさん すること",
          "お<ruby>金<rt>かね</rt></ruby>を <ruby>稼<rt>かせ</rt></ruby>ぐこと"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「事故を 起こさないように、ルールを 守る ことが 大切です。」"
      }
    ]
  },
  {
    "id": "dokkai-34",
    "lessonId": "bai-34",
    "title": "Bài Đọc Hiểu - Bài 34 Minna",
    "subTitle": "初めての お茶会 (Lần đầu tham gia tiệc trà đạo)",
    "description": "Đoạn văn kể về buổi trải nghiệm văn hóa trà đạo Nhật Bản ứng dụng ngữ pháp 〜とおりに và 〜あとで.",
    "passage": "<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>大学<rt>だいがく</rt></ruby>の <ruby>日本<rt>にほん</rt></ruby><ruby>文化<rt>ぶんか</rt></ruby><ruby>体験<rt>たいけん</rt></ruby>で、<ruby>初<rt>はじ</rt></ruby>めて <ruby>茶<rt>ちゃ</rt></ruby><ruby>道<rt>みち</rt></ruby>を <ruby>体験<rt>たいけん</rt></ruby>しました。\n<ruby>先生<rt>せんせい</rt></ruby>が「<ruby>私<rt>わたし</rt></ruby>の やる とおりに、お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>点<rt>てん</rt></ruby>てて ください」と <ruby>言<rt>い</rt></ruby>いました。\nまず、お<ruby>菓子<rt>かし</rt></ruby>を <ruby>食<rt>た</rt></ruby>べた あとで、お<ruby>茶<rt>ちゃ</rt></ruby>を いただきます。<ruby>甘<rt>あま</rt></ruby>い お<ruby>菓子<rt>かし</rt></ruby>を <ruby>食<rt>た</rt></ruby>べた あとだと、<ruby>苦<rt>く</rt></ruby>い お<ruby>茶<rt>ちゃ</rt></ruby>が とても おいしく <ruby>感<rt>かん</rt></ruby>じられます。\nお<ruby>茶<rt>ちゃ</rt></ruby><ruby>碗<rt>わん</rt></ruby>を <ruby>手<rt>て</rt></ruby>に <ruby>取<rt>と</rt></ruby>ったら、<ruby>時計<rt>とけい</rt></ruby>の <ruby>針<rt>はり</rt></ruby>の <ruby>向<rt>む</rt></ruby>きに 2<ruby>回<rt>かい</rt></ruby> <ruby>回<rt>まわ</rt></ruby>してから <ruby>飲<rt>の</rt></ruby>みます。\n<ruby>最初<rt>さいしょ</rt></ruby>、<ruby>正<rt>ただ</rt></ruby><ruby>座<rt>すわ</rt></ruby>を して <ruby>足<rt>あし</rt></ruby>が <ruby>痛<rt>いた</rt></ruby>く なりましたが、<ruby>先生<rt>せんせい</rt></ruby>の <ruby>説明<rt>せつめい</rt></ruby>の とおりに やると、<ruby>上手<rt>じょうず</rt></ruby>に できました。<ruby>日本<rt>にほん</rt></ruby>の <ruby>伝<rt>つた</rt></ruby><ruby>統<rt>とう</rt></ruby><ruby>文化<rt>ぶんか</rt></ruby>は <ruby>奥<rt>おく</rt></ruby>が <ruby>深<rt>ふか</rt></ruby>いです。",
    "questions": [
      {
        "id": "dk34-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>先週<rt>せんしゅう</rt></ruby> <ruby>何<rt>なん</rt></ruby>を <ruby>体験<rt>たいけん</rt></ruby>しましたか。",
        "options": [
          "<ruby>茶<rt>ちゃ</rt></ruby><ruby>道<rt>みち</rt></ruby> (お<ruby>茶<rt>ちゃ</rt></ruby><ruby>会<rt>あ</rt></ruby>)",
          "<ruby>柔<rt>じゅう</rt></ruby><ruby>道<rt>みち</rt></ruby>",
          "<ruby>歌舞伎<rt>かぶき</rt></ruby>",
          "<ruby>着<rt>き</rt></ruby><ruby>付<rt>つ</rt></ruby>け"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「初めて 茶道を 体験しました。」"
      },
      {
        "id": "dk34-2",
        "question": "お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>む <ruby>前<rt>まえ</rt></ruby>に <ruby>何<rt>なん</rt></ruby>を しましたか。",
        "options": [
          "<ruby>甘<rt>あま</rt></ruby>い お<ruby>菓子<rt>かし</rt></ruby>を <ruby>食<rt>た</rt></ruby>べた",
          "ご<ruby>飯<rt>はん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べた",
          "<ruby>歌<rt>うた</rt></ruby>を <ruby>歌<rt>うた</rt></ruby>った",
          "<ruby>外<rt>そと</rt></ruby>を <ruby>散歩<rt>さんぽ</rt></ruby>した"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「まず、お菓子を 食べた あとで、お茶を いただきます。」"
      },
      {
        "id": "dk34-3",
        "question": "お<ruby>菓子<rt>かし</rt></ruby>を <ruby>食<rt>た</rt></ruby>べた あとで お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>むと、どう <ruby>感<rt>かん</rt></ruby>じられますか。",
        "options": [
          "<ruby>苦<rt>く</rt></ruby>い お<ruby>茶<rt>ちゃ</rt></ruby>が とても おいしく <ruby>感<rt>かん</rt></ruby>じられる",
          "まずく <ruby>感<rt>かん</rt></ruby>じる",
          "<ruby>甘<rt>あま</rt></ruby>すぎて <ruby>飲<rt>の</rt></ruby>めない",
          "<ruby>何<rt>なん</rt></ruby>も <ruby>感<rt>かん</rt></ruby>じない"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「甘い お菓子を 食べた あとだと、苦い お茶が とても おいしく 感じられます。」"
      },
      {
        "id": "dk34-4",
        "question": "お<ruby>茶<rt>ちゃ</rt></ruby><ruby>碗<rt>わん</rt></ruby>は <ruby>飲<rt>の</rt></ruby>む <ruby>前<rt>まえ</rt></ruby>に どうしますか。",
        "options": [
          "<ruby>時計<rt>とけい</rt></ruby>の <ruby>針<rt>はり</rt></ruby>の <ruby>向<rt>む</rt></ruby>きに 2<ruby>回<rt>かい</rt></ruby> <ruby>回<rt>まわ</rt></ruby>す",
          "<ruby>反対<rt>はんたい</rt></ruby><ruby>向<rt>む</rt></ruby>きに 3<ruby>回<rt>かい</rt></ruby> <ruby>回<rt>まわ</rt></ruby>す",
          "すぐに <ruby>一<rt>いち</rt></ruby><ruby>気<rt>き</rt></ruby>に <ruby>飲<rt>の</rt></ruby>む",
          "<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>く"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「時計の 針の 向きに 2回 回してから 飲みます。」"
      },
      {
        "id": "dk34-5",
        "question": "<ruby>茶<rt>ちゃ</rt></ruby><ruby>道<rt>みち</rt></ruby>を <ruby>体験<rt>たいけん</rt></ruby>して <ruby>筆者<rt>ひっしゃ</rt></ruby>は どう <ruby>思<rt>おも</rt></ruby>いましたか。",
        "options": [
          "<ruby>日本<rt>にほん</rt></ruby>の <ruby>伝<rt>つた</rt></ruby><ruby>統<rt>とう</rt></ruby><ruby>文化<rt>ぶんか</rt></ruby>は <ruby>奥<rt>おく</rt></ruby>が <ruby>深<rt>ふか</rt></ruby>いと <ruby>思<rt>おも</rt></ruby>った",
          "もう <ruby>二<rt>に</rt></ruby><ruby>度<rt>ど</rt></ruby>と やりたくないと <ruby>思<rt>おも</rt></ruby>った",
          "つまらなかった",
          "<ruby>簡単<rt>かんたん</rt></ruby>すぎると <ruby>思<rt>おも</rt></ruby>った"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「日本の 伝統文化は 奥が 深いです。」"
      }
    ]
  },
  {
    "id": "dokkai-35",
    "lessonId": "bai-35",
    "title": "Bài Đọc Hiểu - Bài 35 Minna",
    "subTitle": "日本の 四季と 旅の アドバイス (Bốn mùa tươi đẹp và gợi ý du lịch Nhật Bản)",
    "description": "Đoạn văn giới thiệu các mùa trong năm tại Nhật ứng dụng thể điều kiện 〜ば và なら.",
    "passage": "<ruby>日本<rt>にほん</rt></ruby>には <ruby>春<rt>はる</rt></ruby>、<ruby>夏<rt>なつ</rt></ruby>、<ruby>秋<rt>あき</rt></ruby>、<ruby>冬<rt>ふゆ</rt></ruby>の <ruby>四<rt>よん</rt></ruby>つの <ruby>季節<rt>きせつ</rt></ruby>が あります。\n<ruby>春<rt>はる</rt></ruby>に なれば、<ruby>桜<rt>さくら</rt></ruby>が <ruby>咲<rt>さ</rt></ruby>いて、<ruby>町<rt>まち</rt></ruby><ruby>中<rt>なか</rt></ruby>が ピンク<ruby>色<rt>いろ</rt></ruby>に なります。<ruby>花見<rt>はなみ</rt></ruby>を するなら、<ruby>京都<rt>きょうと</rt></ruby>や <ruby>奈良<rt>なら</rt></ruby>が おすすめです。\n<ruby>夏<rt>なつ</rt></ruby>は <ruby>蒸<rt>じょう</rt></ruby>し<ruby>暑<rt>あつ</rt></ruby>いですが、<ruby>各<rt>かく</rt></ruby><ruby>地<rt>ち</rt></ruby>で <ruby>花火<rt>はなび</rt></ruby><ruby>大会<rt>たいかい</rt></ruby>や <ruby>祭<rt>まつ</rt></ruby>りが <ruby>開<rt>あ</rt></ruby>かれます。<ruby>涼<rt>すず</rt></ruby>しい <ruby>所<rt>ところ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きたければ、<ruby>北海道<rt>ほっかいどう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>くと いいでしょう。\n<ruby>秋<rt>あき</rt></ruby>は <ruby>紅葉<rt>こうよう</rt></ruby>が きれいですし、<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>も おいしいです。<ruby>天気<rt>てんき</rt></ruby>が よければ、<ruby>山<rt>やま</rt></ruby><ruby>登<rt>のぼ</rt></ruby>りを <ruby>楽<rt>たの</rt></ruby>しむ ことが できます。\n<ruby>冬<rt>ふゆ</rt></ruby>になれば、<ruby>雪<rt>ゆき</rt></ruby>が <ruby>降<rt>お</rt></ruby>ります。スキーを するなら、<ruby>長<rt>なが</rt></ruby><ruby>野<rt>や</rt></ruby>や <ruby>新<rt>あたら</rt></ruby><ruby>潟<rt>がた</rt></ruby>へ <ruby>行<rt>い</rt></ruby>けば、<ruby>素<rt>す</rt></ruby><ruby>晴<rt>は</rt></ruby>らしい <ruby>雪<rt>ゆき</rt></ruby><ruby>景色<rt>けしき</rt></ruby>が <ruby>楽<rt>たの</rt></ruby>しめます。",
    "questions": [
      {
        "id": "dk35-1",
        "question": "<ruby>春<rt>はる</rt></ruby>に なれば <ruby>何<rt>なん</rt></ruby>が <ruby>咲<rt>さ</rt></ruby>きますか。",
        "options": [
          "<ruby>桜<rt>さくら</rt></ruby>",
          "ひまわり",
          "<ruby>紅葉<rt>こうよう</rt></ruby>",
          "<ruby>梅<rt>うめ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「春に なれば、桜が 咲いて...」"
      },
      {
        "id": "dk35-2",
        "question": "<ruby>花見<rt>はなみ</rt></ruby>を するなら どこが おすすめですか。",
        "options": [
          "<ruby>京都<rt>きょうと</rt></ruby>や <ruby>奈良<rt>なら</rt></ruby>",
          "<ruby>沖縄<rt>おきなわ</rt></ruby>",
          "<ruby>北海道<rt>ほっかいどう</rt></ruby>",
          "<ruby>富士山<rt>ふじさん</rt></ruby>の <ruby>頂<rt>ちょう</rt></ruby><ruby>上<rt>うえ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「花見を するなら、京都や 奈良が おすすめです。」"
      },
      {
        "id": "dk35-3",
        "question": "<ruby>夏<rt>なつ</rt></ruby>に <ruby>涼<rt>すず</rt></ruby>しい <ruby>所<rt>ところ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きたければ どこが いいですか。",
        "options": [
          "<ruby>北海道<rt>ほっかいどう</rt></ruby>",
          "<ruby>九州<rt>きゅうしゅう</rt></ruby>",
          "<ruby>沖縄<rt>おきなわ</rt></ruby>",
          "<ruby>東京<rt>とうきょう</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「涼しい 所へ 行きたければ、北海道へ 行くと いいでしょう。」"
      },
      {
        "id": "dk35-4",
        "question": "<ruby>秋<rt>あき</rt></ruby>の <ruby>魅<rt>み</rt></ruby><ruby>力<rt>ちから</rt></ruby>として <ruby>書<rt>か</rt></ruby>かれて いるものは どれですか。",
        "options": [
          "<ruby>紅葉<rt>こうよう</rt></ruby>が きれいで、<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>が おいしい",
          "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>雪<rt>ゆき</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>る",
          "<ruby>桜<rt>さくら</rt></ruby>が <ruby>満<rt>まん</rt></ruby><ruby>開<rt>あ</rt></ruby>に なる",
          "<ruby>海<rt>うみ</rt></ruby>で <ruby>泳<rt>およ</rt></ruby>げる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「秋は 紅葉が きれいですし、食べ物も おいしいです。」"
      },
      {
        "id": "dk35-5",
        "question": "スキーを するなら どこへ <ruby>行<rt>い</rt></ruby>けば いいですか。",
        "options": [
          "<ruby>長<rt>なが</rt></ruby><ruby>野<rt>や</rt></ruby>や <ruby>新<rt>あたら</rt></ruby><ruby>潟<rt>がた</rt></ruby>",
          "<ruby>大阪<rt>おおさか</rt></ruby>や <ruby>神戸<rt>こうべ</rt></ruby>",
          "<ruby>広島<rt>ひろしま</rt></ruby>や <ruby>岡<rt>おか</rt></ruby><ruby>山<rt>やま</rt></ruby>",
          "<ruby>沖縄<rt>おきなわ</rt></ruby>や <ruby>鹿<rt>しか</rt></ruby><ruby>児<rt>こ</rt></ruby><ruby>島<rt>とう</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「スキーを するなら、長野や 新潟へ 行けば...」"
      }
    ]
  },
  {
    "id": "dokkai-36",
    "lessonId": "bai-36",
    "title": "Bài Đọc Hiểu - Bài 36 Minna",
    "subTitle": "私の 日本語の 上達 (Sự tiến bộ trong tiếng Nhật của tôi)",
    "description": "Đoạn văn kể về hành trình kiên trì học tiếng Nhật ứng dụng 〜ように なりました và 〜ように しています.",
    "passage": "<ruby>日本<rt>にほん</rt></ruby>に <ruby>来<rt>き</rt></ruby>た ばかりの ころは、<ruby>日本語<rt>にほんご</rt></ruby>が <ruby>全然<rt>ぜんぜん</rt></ruby> <ruby>話<rt>はなし</rt></ruby>せませんでした。\nでも、<ruby>毎日<rt>まいにち</rt></ruby> <ruby>諦<rt>あきら</rt></ruby>めずに <ruby>勉強<rt>べんきょう</rt></ruby>して、<ruby>今<rt>いま</rt></ruby>では <ruby>日本語<rt>にほんご</rt></ruby>で <ruby>簡単<rt>かんたん</rt></ruby>な <ruby>日<rt>にち</rt></ruby><ruby>常<rt>じょう</rt></ruby><ruby>会話<rt>かいわ</rt></ruby>が できるように なりました。\n<ruby>最近<rt>さいきん</rt></ruby>は <ruby>日本<rt>にほん</rt></ruby>の アニメも <ruby>字<rt>じ</rt></ruby><ruby>幕<rt>まく</rt></ruby>なしで <ruby>見<rt>み</rt></ruby>られるように なりました。\n<ruby>私<rt>わたし</rt></ruby>は <ruby>毎日<rt>まいにち</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しい <ruby>漢字<rt>かんじ</rt></ruby>を 5つ <ruby>覚<rt>おぼ</rt></ruby>えるように して います。\nまた、<ruby>分<rt>ふん</rt></ruby>からない <ruby>言葉<rt>ことば</rt></ruby>が あったら、すぐに <ruby>辞書<rt>じしょ</rt></ruby>で <ruby>調<rt>しら</rt></ruby>べるように して います。\n<ruby>来年<rt>らいねん</rt></ruby>は JLPT N2に <ruby>合格<rt>ごうかく</rt></ruby>できるように、これからも <ruby>一生懸命<rt>いっしょうけんめい</rt></ruby> <ruby>努<rt>ど</rt></ruby><ruby>力<rt>ちから</rt></ruby>を <ruby>続<rt>つづ</rt></ruby>ける つもりです。",
    "questions": [
      {
        "id": "dk36-1",
        "question": "<ruby>日本<rt>にほん</rt></ruby>に <ruby>来<rt>き</rt></ruby>た ばかりの ころ、<ruby>筆者<rt>ひっしゃ</rt></ruby>は どうでしたか。",
        "options": [
          "<ruby>日本語<rt>にほんご</rt></ruby>が <ruby>全然<rt>ぜんぜん</rt></ruby> <ruby>話<rt>はなし</rt></ruby>せなかった",
          "<ruby>日本語<rt>にほんご</rt></ruby>が とても <ruby>上手<rt>じょうず</rt></ruby>だった",
          "<ruby>通<rt>つう</rt></ruby><ruby>訳<rt>やく</rt></ruby>の <ruby>仕事<rt>しごと</rt></ruby>を して いた",
          "<ruby>漢字<rt>かんじ</rt></ruby>を <ruby>全部<rt>ぜんぶ</rt></ruby> <ruby>知<rt>し</rt></ruby>って いた"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「日本に 来た ばかりの ころは、日本語が 全然 話せませんでした。」"
      },
      {
        "id": "dk36-2",
        "question": "<ruby>今<rt>いま</rt></ruby>では どんな ことが できるように なりましたか。",
        "options": [
          "<ruby>簡単<rt>かんたん</rt></ruby>な <ruby>日<rt>にち</rt></ruby><ruby>常<rt>じょう</rt></ruby><ruby>会話<rt>かいわ</rt></ruby>や <ruby>字<rt>じ</rt></ruby><ruby>幕<rt>まく</rt></ruby>なしで アニメを <ruby>見<rt>み</rt></ruby>ること",
          "<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>小説<rt>しょうせつ</rt></ruby>を <ruby>書<rt>か</rt></ruby>くこと",
          "ニュースの <ruby>原<rt>げん</rt></ruby><ruby>稿<rt>こう</rt></ruby>を <ruby>読<rt>よ</rt></ruby>むこと",
          "<ruby>大学<rt>だいがく</rt></ruby>で <ruby>講<rt>こう</rt></ruby><ruby>義<rt>ぎ</rt></ruby>を すること"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「簡単な 日常会話が できるように なりました。最近は 日本の アニメも 字幕なしで 見られるように なりました。」"
      },
      {
        "id": "dk36-3",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>毎日<rt>まいにち</rt></ruby> どんな ことを するように して いますか。",
        "options": [
          "<ruby>新<rt>あたら</rt></ruby>しい <ruby>漢字<rt>かんじ</rt></ruby>を 5つ <ruby>覚<rt>おぼ</rt></ruby>えるように して いる",
          "<ruby>漢字<rt>かんじ</rt></ruby>を 100<ruby>字<rt>じ</rt></ruby> <ruby>書<rt>か</rt></ruby>いて いる",
          "<ruby>一日<rt>いちにち</rt></ruby><ruby>中<rt>なか</rt></ruby> テレビを <ruby>見<rt>み</rt></ruby>て いる",
          "<ruby>英語<rt>えいご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>して いる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「私は 毎日、新しい 漢字を 5つ 覚えるように して います。」"
      },
      {
        "id": "dk36-4",
        "question": "<ruby>分<rt>ふん</rt></ruby>からない <ruby>言葉<rt>ことば</rt></ruby>が あったら どうしますか。",
        "options": [
          "すぐに <ruby>辞書<rt>じしょ</rt></ruby>で <ruby>調<rt>しら</rt></ruby>べるように して いる",
          "そのまま <ruby>忘<rt>わす</rt></ruby>れて しまう",
          "<ruby>友達<rt>ともだち</rt></ruby>に <ruby>全部<rt>ぜんぶ</rt></ruby> <ruby>聞<rt>き</rt></ruby>く",
          "<ruby>無<rt>な</rt></ruby><ruby>視<rt>し</rt></ruby>する"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「分からない 言葉が あったら、すぐに 辞書で 調べるように して います。」"
      },
      {
        "id": "dk36-5",
        "question": "<ruby>来年<rt>らいねん</rt></ruby>の <ruby>目<rt>め</rt></ruby><ruby>標<rt>ひょう</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "JLPT N2に <ruby>合格<rt>ごうかく</rt></ruby>すること",
          "<ruby>帰<rt>かえ</rt></ruby><ruby>国<rt>くに</rt></ruby>すること",
          "<ruby>車<rt>くるま</rt></ruby>を <ruby>買<rt>か</rt></ruby>うこと",
          "<ruby>会社<rt>かいしゃ</rt></ruby>を <ruby>辞<rt>や</rt></ruby>めること"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「来年は JLPT N2に 合格できるように、これからも 一生懸命 努力を 続ける つもりです。」"
      }
    ]
  },
  {
    "id": "dokkai-37",
    "lessonId": "bai-37",
    "title": "Bài Đọc Hiểu - Bài 37 Minna",
    "subTitle": "世界中で 愛される ラーメン (Món mì ramen được yêu thích khắp thế giới)",
    "description": "Đoạn văn kể về lịch sử ra đời của mì gói ăn liền tại Nhật ứng dụng thể bị động 受身形.",
    "passage": "お<ruby>湯<rt>ゆ</rt></ruby>を <ruby>注<rt>ちゅう</rt></ruby>ぐだけで <ruby>食<rt>た</rt></ruby>べられる インスタントラーメンは、<ruby>日本<rt>にほん</rt></ruby>で <ruby>発明<rt>はつめい</rt></ruby>されました。\n1958<ruby>年<rt>ねん</rt></ruby>に <ruby>安<rt>やす</rt></ruby><ruby>藤<rt>ふじ</rt></ruby><ruby>百<rt>ひゃく</rt></ruby><ruby>福<rt>ふく</rt></ruby>という <ruby>人<rt>ひと</rt></ruby>によって、<ruby>世界<rt>せかい</rt></ruby>で <ruby>初<rt>はじ</rt></ruby>めての チキンラーメンが <ruby>作<rt>つく</rt></ruby>られました。\n<ruby>当<rt>とう</rt></ruby><ruby>時<rt>じ</rt></ruby>、<ruby>人々<rt>ひとびと</rt></ruby>は <ruby>手<rt>て</rt></ruby><ruby>軽<rt>かる</rt></ruby>に おいしい ラーメンが <ruby>食<rt>た</rt></ruby>べられると <ruby>言<rt>い</rt></ruby>って、とても <ruby>驚<rt>おどろ</rt></ruby>きました。\nその<ruby>後<rt>うし</rt></ruby>、1971<ruby>年<rt>ねん</rt></ruby>には カップヌードルが <ruby>発<rt>はつ</rt></ruby><ruby>売<rt>う</rt></ruby>され、<ruby>世界<rt>せかい</rt></ruby><ruby>中<rt>なか</rt></ruby>に <ruby>輸出<rt>ゆしゅつ</rt></ruby>されるように なりました。\n<ruby>今<rt>いま</rt></ruby>では アジアだけでなく、アメリカや ヨーロッパなど、<ruby>世界<rt>せかい</rt></ruby><ruby>中<rt>なか</rt></ruby>の <ruby>人々<rt>ひとびと</rt></ruby>に <ruby>毎日<rt>まいにち</rt></ruby> たくさん <ruby>食<rt>た</rt></ruby>べられて います。<ruby>日本<rt>にほん</rt></ruby>の <ruby>素<rt>す</rt></ruby><ruby>晴<rt>は</rt></ruby>らしい <ruby>発明<rt>はつめい</rt></ruby>の <ruby>一<rt>いち</rt></ruby>つです。",
    "questions": [
      {
        "id": "dk37-1",
        "question": "インスタントラーメンは どこで <ruby>発明<rt>はつめい</rt></ruby>されましたか。",
        "options": [
          "<ruby>日本<rt>にほん</rt></ruby>",
          "<ruby>中国<rt>ちゅうごく</rt></ruby>",
          "アメリカ",
          "イタリア"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「インスタントラーメンは、日本で 発明されました。」"
      },
      {
        "id": "dk37-2",
        "question": "<ruby>世界<rt>せかい</rt></ruby>で <ruby>初<rt>はじ</rt></ruby>めての チキンラーメンは <ruby>誰<rt>だれ</rt></ruby>によって <ruby>作<rt>つく</rt></ruby>られましたか。",
        "options": [
          "<ruby>安<rt>やす</rt></ruby><ruby>藤<rt>ふじ</rt></ruby><ruby>百<rt>ひゃく</rt></ruby><ruby>福<rt>ふく</rt></ruby>",
          "<ruby>松<rt>まつ</rt></ruby><ruby>下<rt>した</rt></ruby><ruby>幸<rt>しあわ</rt></ruby><ruby>之<rt>の</rt></ruby><ruby>助<rt>たす</rt></ruby>",
          "<ruby>本<rt>ほん</rt></ruby><ruby>田<rt>でん</rt></ruby><ruby>宗<rt>そう</rt></ruby><ruby>一<rt>いち</rt></ruby><ruby>郎<rt>ろう</rt></ruby>",
          "<ruby>豊<rt>とよ</rt></ruby><ruby>田<rt>でん</rt></ruby><ruby>喜<rt>よろこ</rt></ruby><ruby>一<rt>いち</rt></ruby><ruby>郎<rt>ろう</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「1958年に 安藤百福という 人によって... 作られました。」"
      },
      {
        "id": "dk37-3",
        "question": "チキンラーメンが <ruby>発<rt>はつ</rt></ruby><ruby>売<rt>う</rt></ruby>されたのは <ruby>何年<rt>なんねん</rt></ruby>ですか。",
        "options": [
          "1958<ruby>年<rt>ねん</rt></ruby>",
          "1971<ruby>年<rt>ねん</rt></ruby>",
          "1945<ruby>年<rt>ねん</rt></ruby>",
          "2000<ruby>年<rt>ねん</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「1958年に 安藤百福という 人によって...」"
      },
      {
        "id": "dk37-4",
        "question": "カップヌードルが <ruby>発<rt>はつ</rt></ruby><ruby>売<rt>う</rt></ruby>されたのは <ruby>何年<rt>なんねん</rt></ruby>ですか。",
        "options": [
          "1971<ruby>年<rt>ねん</rt></ruby>",
          "1958<ruby>年<rt>ねん</rt></ruby>",
          "1980<ruby>年<rt>ねん</rt></ruby>",
          "1990<ruby>年<rt>ねん</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「その後、1971年には カップヌードルが 発売され...」"
      },
      {
        "id": "dk37-5",
        "question": "<ruby>現在<rt>げんざい</rt></ruby>、インスタントラーメンは どこで <ruby>食<rt>た</rt></ruby>べられて いますか。",
        "options": [
          "アジアや アメリカ、ヨーロッパなど <ruby>世界<rt>せかい</rt></ruby><ruby>中<rt>なか</rt></ruby>",
          "<ruby>日本<rt>にほん</rt></ruby>だけで",
          "アジアの<ruby>一<rt>いち</rt></ruby><ruby>部<rt>ぶ</rt></ruby>だけで",
          "<ruby>宇宙<rt>うちゅう</rt></ruby>だけで"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「今では アジアだけでなく、アメリカや ヨーロッパなど、世界中の 人々に...」"
      }
    ]
  },
  {
    "id": "dokkai-38",
    "lessonId": "bai-38",
    "title": "Bài Đọc Hiểu - Bài 38 Minna",
    "subTitle": "地域の ボランティア (Hoạt động tình nguyện tại khu dân cư)",
    "description": "Đoạn văn kể về việc tham gia câu lạc bộ dọn dẹp vệ sinh công viên ứng dụng danh từ hóa V-の.",
    "passage": "<ruby>私<rt>わたし</rt></ruby>は <ruby>週末<rt>しゅうまつ</rt></ruby>に <ruby>地<rt>ち</rt></ruby><ruby>域<rt>いき</rt></ruby>の <ruby>清掃<rt>せいそう</rt></ruby>ボランティアに <ruby>参<rt>まい</rt></ruby><ruby>加<rt>か</rt></ruby>して います。\n<ruby>朝<rt>あさ</rt></ruby> 8<ruby>時<rt>じ</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>に <ruby>集<rt>あつ</rt></ruby>まって、ゴミを <ruby>拾<rt>ひろ</rt></ruby>うのが <ruby>私<rt>わたし</rt></ruby>たちの <ruby>活<rt>かつ</rt></ruby><ruby>動<rt>うご</rt></ruby>です。\n<ruby>公園<rt>こうえん</rt></ruby>を きれいに することは、<ruby>気持<rt>きも</rt></ruby>ちが いいだけでなく、<ruby>近所<rt>きんじょ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>たちと <ruby>交<rt>こう</rt></ruby><ruby>流<rt>りゅう</rt></ruby>するのにも <ruby>役<rt>やく</rt></ruby><ruby>立<rt>た</rt></ruby>ちます。\n<ruby>先週<rt>せんしゅう</rt></ruby>は <ruby>子<rt>こ</rt></ruby>どもたちも <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>参<rt>まい</rt></ruby><ruby>加<rt>か</rt></ruby>して くれました。<ruby>子<rt>こ</rt></ruby>どもたちが <ruby>一生懸命<rt>いっしょうけんめい</rt></ruby> ゴミを <ruby>拾<rt>ひろ</rt></ruby>って いるのを <ruby>見<rt>み</rt></ruby>るのは、とても <ruby>嬉<rt>うれ</rt></ruby>しいです。\n<ruby>活<rt>かつ</rt></ruby><ruby>動<rt>うご</rt></ruby>の あとで、みんなで お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>むのが <ruby>楽<rt>たの</rt></ruby>しみです。これからも <ruby>地<rt>ち</rt></ruby><ruby>域<rt>いき</rt></ruby>の ために <ruby>続<rt>つづ</rt></ruby>けたいです。",
    "questions": [
      {
        "id": "dk38-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>週末<rt>しゅうまつ</rt></ruby>に どんな ボランティアに <ruby>参<rt>まい</rt></ruby><ruby>加<rt>か</rt></ruby>して いますか。",
        "options": [
          "<ruby>地<rt>ち</rt></ruby><ruby>域<rt>いき</rt></ruby>の <ruby>清掃<rt>せいそう</rt></ruby>ボランティア",
          "<ruby>日本語<rt>にほんご</rt></ruby>を <ruby>教<rt>おし</rt></ruby>える ボランティア",
          "お<ruby>年<rt>ねん</rt></ruby><ruby>寄<rt>よ</rt></ruby>りの <ruby>介<rt>かい</rt></ruby><ruby>護<rt>ご</rt></ruby>ボランティア",
          "<ruby>動物<rt>どうぶつ</rt></ruby>を <ruby>育<rt>そだ</rt></ruby>てる ボランティア"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「私は 週末に 地域の 清掃ボランティアに 参加して います。」"
      },
      {
        "id": "dk38-2",
        "question": "ボランティアの <ruby>活<rt>かつ</rt></ruby><ruby>動<rt>うご</rt></ruby><ruby>内容<rt>ないよう</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>公園<rt>こうえん</rt></ruby>に <ruby>集<rt>あつ</rt></ruby>まって ゴミを <ruby>拾<rt>ひろ</rt></ruby>うこと",
          "<ruby>木<rt>き</rt></ruby>を <ruby>植<rt>う</rt></ruby>えること",
          "<ruby>花<rt>はな</rt></ruby>を <ruby>売<rt>う</rt></ruby>ること",
          "<ruby>料理<rt>りょうり</rt></ruby>を <ruby>作<rt>つく</rt></ruby>ること"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「朝 8時に 公園に 集まって、ゴミを 拾うのが 私たちの 活動です。」"
      },
      {
        "id": "dk38-3",
        "question": "<ruby>公園<rt>こうえん</rt></ruby>を きれいに することは <ruby>何<rt>なん</rt></ruby>に <ruby>役<rt>やく</rt></ruby><ruby>立<rt>た</rt></ruby>ちますか。",
        "options": [
          "<ruby>近所<rt>きんじょ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>たちと <ruby>交<rt>こう</rt></ruby><ruby>流<rt>りゅう</rt></ruby>するのにも <ruby>役<rt>やく</rt></ruby><ruby>立<rt>た</rt></ruby>つ",
          "お<ruby>金<rt>かね</rt></ruby>を <ruby>稼<rt>かせ</rt></ruby>ぐのに <ruby>役<rt>やく</rt></ruby><ruby>立<rt>た</rt></ruby>つ",
          "<ruby>有名<rt>ゆうめい</rt></ruby>に なるのに <ruby>役<rt>やく</rt></ruby><ruby>立<rt>た</rt></ruby>つ",
          "<ruby>宿題<rt>しゅくだい</rt></ruby>を <ruby>終<rt>お</rt></ruby>わらせるのに <ruby>役<rt>やく</rt></ruby><ruby>立<rt>た</rt></ruby>つ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「近所の 人たちと 交流するのにも 役立ちます。」"
      },
      {
        "id": "dk38-4",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>が <ruby>嬉<rt>うれ</rt></ruby>しく <ruby>感<rt>かん</rt></ruby>じたのは どんな <ruby>時<rt>じ</rt></ruby>ですか。",
        "options": [
          "<ruby>子<rt>こ</rt></ruby>どもたちが <ruby>一生懸命<rt>いっしょうけんめい</rt></ruby> ゴミを <ruby>拾<rt>ひろ</rt></ruby>って いるのを <ruby>見<rt>み</rt></ruby>た<ruby>時<rt>じ</rt></ruby>",
          "お<ruby>金<rt>かね</rt></ruby>を もらった<ruby>時<rt>じ</rt></ruby>",
          "<ruby>早<rt>はや</rt></ruby>く <ruby>終<rt>お</rt></ruby>わった<ruby>時<rt>じ</rt></ruby>",
          "<ruby>褒<rt>ほ</rt></ruby>められた<ruby>時<rt>じ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「子どもたちが 一生懸命 ゴミを 拾って いるのを 見るのは、とても 嬉しいです。」"
      },
      {
        "id": "dk38-5",
        "question": "<ruby>活<rt>かつ</rt></ruby><ruby>動<rt>うご</rt></ruby>の あとの <ruby>楽<rt>たの</rt></ruby>しみは <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "みんなで お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>むこと",
          "すぐ <ruby>帰<rt>かえ</rt></ruby>って <ruby>寝<rt>ね</rt></ruby>ること",
          "お<ruby>酒<rt>さけ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>むこと",
          "<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>に <ruby>行<rt>い</rt></ruby>くこと"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「活動の あとで、みんなで お茶を 飲むのが 楽しみです。」"
      }
    ]
  },
  {
    "id": "dokkai-39",
    "lessonId": "bai-39",
    "title": "Bài Đọc Hiểu - Bài 39 Minna",
    "subTitle": "大型台風と 交通の 乱れ (Cơn bão lớn và giao thông tê liệt)",
    "description": "Đoạn văn kể về cơn bão nhiệt đới đổ bộ vào Tokyo gây ảnh hưởng đi lại ứng dụng 〜て/で và 〜ので chỉ nguyên nhân khách quan.",
    "passage": "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>に <ruby>非<rt>ひ</rt></ruby><ruby>常<rt>じょう</rt></ruby>に <ruby>強<rt>つよ</rt></ruby>い <ruby>台風<rt>たいふう</rt></ruby>が <ruby>上<rt>うえ</rt></ruby><ruby>陸<rt>りく</rt></ruby>しました。\n<ruby>強<rt>つよ</rt></ruby>い <ruby>風<rt>かぜ</rt></ruby>と <ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>で、<ruby>多<rt>おお</rt></ruby>くの <ruby>電車<rt>でんしゃ</rt></ruby>が <ruby>止<rt>と</rt></ruby>まって しまいました。\n<ruby>木<rt>き</rt></ruby>が <ruby>倒<rt>たお</rt></ruby>れて <ruby>道<rt>みち</rt></ruby><ruby>路<rt>ろ</rt></ruby>を ふさいだので、バスも <ruby>走<rt>はし</rt></ruby>る ことが できませんでした。\n<ruby>学校<rt>がっこう</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みになり、<ruby>会社員<rt>かいしゃいん</rt></ruby>も <ruby>家<rt>いえ</rt></ruby>で リモートワークを <ruby>行<rt>い</rt></ruby>いました。\n<ruby>私<rt>わたし</rt></ruby>の アパートも <ruby>停<rt>てい</rt></ruby><ruby>電<rt>でん</rt></ruby>して、<ruby>電気<rt>でんき</rt></ruby>が つかなくて <ruby>困<rt>こま</rt></ruby>りましたが、<ruby>懐<rt>かい</rt></ruby><ruby>中<rt>なか</rt></ruby><ruby>電<rt>でん</rt></ruby><ruby>灯<rt>とう</rt></ruby>や <ruby>水<rt>みず</rt></ruby>を <ruby>準備<rt>じゅんび</rt></ruby>して あったので、<ruby>無<rt>な</rt></ruby><ruby>事<rt>こと</rt></ruby>でした。\n<ruby>自然<rt>しぜん</rt></ruby><ruby>災<rt>さい</rt></ruby><ruby>害<rt>がい</rt></ruby>が <ruby>多<rt>おお</rt></ruby>い <ruby>日本<rt>にほん</rt></ruby>では、<ruby>日<rt>にち</rt></ruby><ruby>頃<rt>ころ</rt></ruby>から <ruby>備<rt>そな</rt></ruby>えて おく ことが <ruby>大切<rt>たいせつ</rt></ruby>だと <ruby>実<rt>じつ</rt></ruby><ruby>感<rt>かん</rt></ruby>しました。",
    "questions": [
      {
        "id": "dk39-1",
        "question": "<ruby>昨日<rt>きのう</rt></ruby> <ruby>日本<rt>にほん</rt></ruby>に <ruby>何<rt>なん</rt></ruby>が <ruby>来<rt>き</rt></ruby>ましたか。",
        "options": [
          "<ruby>非<rt>ひ</rt></ruby><ruby>常<rt>じょう</rt></ruby>に <ruby>強<rt>つよ</rt></ruby>い <ruby>台風<rt>たいふう</rt></ruby>",
          "<ruby>大<rt>おお</rt></ruby><ruby>地震<rt>じしん</rt></ruby>",
          "<ruby>大<rt>おお</rt></ruby><ruby>雪<rt>ゆき</rt></ruby>",
          "<ruby>火事<rt>かじ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「昨日、日本に 非常に 強い 台風が 上陸しました。」"
      },
      {
        "id": "dk39-2",
        "question": "<ruby>電車<rt>でんしゃ</rt></ruby>が <ruby>止<rt>と</rt></ruby>まった <ruby>原因<rt>げんいん</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>強<rt>つよ</rt></ruby>い <ruby>風<rt>かぜ</rt></ruby>と <ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>",
          "<ruby>事故<rt>じこ</rt></ruby>",
          "<ruby>機械<rt>きかい</rt></ruby>の <ruby>故障<rt>こしょう</rt></ruby>",
          "<ruby>運転<rt>うんてん</rt></ruby><ruby>手<rt>て</rt></ruby>の ストライキ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「強い 風と 大雨で、多くの 電車が 止まって しまいました。」"
      },
      {
        "id": "dk39-3",
        "question": "バスが <ruby>走<rt>はし</rt></ruby>れなかったのは なぜですか。",
        "options": [
          "<ruby>木<rt>き</rt></ruby>が <ruby>倒<rt>たお</rt></ruby>れて <ruby>道<rt>みち</rt></ruby><ruby>路<rt>ろ</rt></ruby>を ふさいだので",
          "ガソリンが なくなったので",
          "<ruby>祝<rt>いわ</rt></ruby><ruby>日<rt>にち</rt></ruby>だったから",
          "<ruby>雪<rt>ゆき</rt></ruby>が <ruby>積<rt>つ</rt></ruby>もったから"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「木が 倒れて 道路を ふさいだので、バスも 走る ことが できませんでした。」"
      },
      {
        "id": "dk39-4",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>の アパートで <ruby>何<rt>なん</rt></ruby>が <ruby>起<rt>お</rt></ruby>きましたか。",
        "options": [
          "<ruby>停<rt>てい</rt></ruby><ruby>電<rt>でん</rt></ruby>して <ruby>電気<rt>でんき</rt></ruby>が つかなかった",
          "<ruby>水<rt>みず</rt></ruby><ruby>漏<rt>も</rt></ruby>れが <ruby>起<rt>お</rt></ruby>きた",
          "<ruby>窓<rt>まど</rt></ruby>ガラスが <ruby>割<rt>わ</rt></ruby>れた",
          "<ruby>火事<rt>かじ</rt></ruby>が <ruby>起<rt>お</rt></ruby>きた"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「私の アパートも 停電して、電気が つかなくて 困りましたが...」"
      },
      {
        "id": "dk39-5",
        "question": "どうして <ruby>停<rt>てい</rt></ruby><ruby>電<rt>でん</rt></ruby>でも <ruby>無<rt>な</rt></ruby><ruby>事<rt>こと</rt></ruby>でしたか。",
        "options": [
          "<ruby>懐<rt>かい</rt></ruby><ruby>中<rt>なか</rt></ruby><ruby>電<rt>でん</rt></ruby><ruby>灯<rt>とう</rt></ruby>や <ruby>水<rt>みず</rt></ruby>を <ruby>準備<rt>じゅんび</rt></ruby>して あったので",
          "すぐに ホテルへ <ruby>逃<rt>に</rt></ruby>げたので",
          "<ruby>友達<rt>ともだち</rt></ruby>の <ruby>家<rt>いえ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったので",
          "<ruby>電気<rt>でんき</rt></ruby>が すぐ <ruby>復<rt>ふく</rt></ruby><ruby>旧<rt>きゅう</rt></ruby>したので"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「懐中電灯や 水を 準備して あったので、無事でした。」"
      }
    ]
  },
  {
    "id": "dokkai-40",
    "lessonId": "bai-40",
    "title": "Bài Đọc Hiểu - Bài 40 Minna",
    "subTitle": "宇宙飛行士の 訓練と 夢 (Huấn luyện phi hành gia và giấc mơ bay vào không gian)",
    "description": "Đoạn văn kể về các bài kiểm tra khắc nghiệt để trở thành phi hành gia ứng dụng 〜か / 〜かどうか và 〜てみます.",
    "passage": "<ruby>子<rt>こ</rt></ruby>どもの ころから、<ruby>私<rt>わたし</rt></ruby>は <ruby>宇宙<rt>うちゅう</rt></ruby>に <ruby>行<rt>い</rt></ruby>って みたいと <ruby>思<rt>おも</rt></ruby>って いました。\n<ruby>宇宙<rt>うちゅう</rt></ruby><ruby>飛<rt>と</rt></ruby><ruby>行<rt>い</rt></ruby><ruby>士<rt>し</rt></ruby>に なるためには、<ruby>過<rt>す</rt></ruby><ruby>酷<rt>こく</rt></ruby>な <ruby>試験<rt>しけん</rt></ruby>や <ruby>訓<rt>くん</rt></ruby><ruby>練<rt>れん</rt></ruby>に <ruby>合格<rt>ごうかく</rt></ruby>しなければ なりません。\n<ruby>狭<rt>せま</rt></ruby>い <ruby>部屋<rt>へや</rt></ruby>で 1<ruby>週間<rt>しゅうかん</rt></ruby> <ruby>仲<rt>なか</rt></ruby><ruby>間<rt>あいだ</rt></ruby>と トラブルなく <ruby>過<rt>す</rt></ruby>ごせるかどうか、<ruby>精<rt>せい</rt></ruby><ruby>神<rt>しん</rt></ruby><ruby>力<rt>ちから</rt></ruby>も <ruby>試<rt>し</rt></ruby>されます。\nまた、<ruby>無<rt>な</rt></ruby><ruby>重<rt>おも</rt></ruby><ruby>力<rt>ちから</rt></ruby><ruby>状<rt>じょう</rt></ruby><ruby>態<rt>たい</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で <ruby>正<rt>ただ</rt></ruby>しく <ruby>機械<rt>きかい</rt></ruby>を <ruby>操<rt>そう</rt></ruby><ruby>作<rt>つく</rt></ruby>できるか、<ruby>何度<rt>なんど</rt></ruby>も <ruby>実<rt>じつ</rt></ruby><ruby>験<rt>けん</rt></ruby>を して みます。\n<ruby>宇宙<rt>うちゅう</rt></ruby>から <ruby>地<rt>ち</rt></ruby><ruby>球<rt>きゅう</rt></ruby>を <ruby>見<rt>み</rt></ruby>たら、どんなに <ruby>美<rt>うつく</rt></ruby>しいでしょうか。<ruby>自分<rt>じぶん</rt></ruby>の <ruby>夢<rt>ゆめ</rt></ruby>が かなうかどうか <ruby>分<rt>ふん</rt></ruby>かりませんが、<ruby>全<rt>まった</rt></ruby><ruby>力<rt>ちから</rt></ruby>で <ruby>挑<rt>ちょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>して みます。",
    "questions": [
      {
        "id": "dk40-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>子<rt>こ</rt></ruby>どもの ころから どこへ <ruby>行<rt>い</rt></ruby>って みたいと <ruby>思<rt>おも</rt></ruby>って いましたか。",
        "options": [
          "<ruby>宇宙<rt>うちゅう</rt></ruby>",
          "<ruby>北<rt>きた</rt></ruby><ruby>極<rt>きょく</rt></ruby>",
          "<ruby>深<rt>ふか</rt></ruby><ruby>海<rt>うみ</rt></ruby>",
          "<ruby>無<rt>な</rt></ruby><ruby>人<rt>ひと</rt></ruby><ruby>島<rt>とう</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「子どもの ころから、私は 宇宙に 行って みたいと 思って いました。」"
      },
      {
        "id": "dk40-2",
        "question": "<ruby>狭<rt>せま</rt></ruby>い <ruby>部屋<rt>へや</rt></ruby>の <ruby>試験<rt>しけん</rt></ruby>では <ruby>何<rt>なん</rt></ruby>が <ruby>試<rt>し</rt></ruby>されますか。",
        "options": [
          "<ruby>仲<rt>なか</rt></ruby><ruby>間<rt>あいだ</rt></ruby>と <ruby>過<rt>す</rt></ruby>ごせるかどうか、<ruby>精<rt>せい</rt></ruby><ruby>神<rt>しん</rt></ruby><ruby>力<rt>ちから</rt></ruby>",
          "<ruby>視<rt>し</rt></ruby><ruby>力<rt>ちから</rt></ruby>の <ruby>良<rt>よ</rt></ruby>さ",
          "<ruby>料理<rt>りょうり</rt></ruby>の <ruby>腕<rt>うで</rt></ruby><ruby>前<rt>まえ</rt></ruby>",
          "<ruby>足<rt>あし</rt></ruby>の <ruby>速<rt>はや</rt></ruby>さ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「狭い 部屋で 1週間 仲間と トラブルなく 過ごせるかどうか、精神力も 試されます。」"
      },
      {
        "id": "dk40-3",
        "question": "<ruby>無<rt>な</rt></ruby><ruby>重<rt>おも</rt></ruby><ruby>力<rt>ちから</rt></ruby><ruby>状<rt>じょう</rt></ruby><ruby>態<rt>たい</rt></ruby>で <ruby>何<rt>なん</rt></ruby>を して みますか。",
        "options": [
          "<ruby>正<rt>ただ</rt></ruby>しく <ruby>機械<rt>きかい</rt></ruby>を <ruby>操<rt>そう</rt></ruby><ruby>作<rt>つく</rt></ruby>できるか、<ruby>実<rt>じつ</rt></ruby><ruby>験<rt>けん</rt></ruby>",
          "ダンスの <ruby>練習<rt>れんしゅう</rt></ruby>",
          "<ruby>歌<rt>うた</rt></ruby>の <ruby>録音<rt>ろくおん</rt></ruby>",
          "<ruby>睡<rt>すい</rt></ruby><ruby>眠<rt>ねむ</rt></ruby>の <ruby>測<rt>はか</rt></ruby><ruby>定<rt>てい</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「無重力状態の中で 正しく 機械を 操作できるか、何度も 実験を して みます。」"
      },
      {
        "id": "dk40-4",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>宇宙<rt>うちゅう</rt></ruby>から <ruby>何<rt>なん</rt></ruby>を <ruby>見<rt>み</rt></ruby>たいと <ruby>思<rt>おも</rt></ruby>って いますか。",
        "options": [
          "<ruby>美<rt>うつく</rt></ruby>しい <ruby>地<rt>ち</rt></ruby><ruby>球<rt>きゅう</rt></ruby>",
          "<ruby>他<rt>ほか</rt></ruby>の <ruby>惑<rt>わく</rt></ruby><ruby>星<rt>ほし</rt></ruby>",
          "<ruby>巨<rt>きょ</rt></ruby><ruby>大<rt>おお</rt></ruby>な <ruby>星<rt>ほし</rt></ruby>",
          "<ruby>人<rt>ひと</rt></ruby><ruby>工<rt>こう</rt></ruby><ruby>衛<rt>えい</rt></ruby><ruby>星<rt>ほし</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「宇宙から 地球を 見たら、どんなに 美しいでしょうか。」"
      },
      {
        "id": "dk40-5",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>の <ruby>姿<rt>すがた</rt></ruby><ruby>勢<rt>せい</rt></ruby>として <ruby>正<rt>ただ</rt></ruby>しいものは どれですか。",
        "options": [
          "<ruby>夢<rt>ゆめ</rt></ruby>が かなうか <ruby>分<rt>ふん</rt></ruby>からないが <ruby>全<rt>まった</rt></ruby><ruby>力<rt>ちから</rt></ruby>で <ruby>挑<rt>ちょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>する",
          "<ruby>無理<rt>むり</rt></ruby>だから <ruby>諦<rt>あきら</rt></ruby>める",
          "<ruby>友達<rt>ともだち</rt></ruby>に <ruby>代<rt>だい</rt></ruby>わって もらう",
          "<ruby>試験<rt>しけん</rt></ruby>を <ruby>受<rt>じゅ</rt></ruby>けない"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「自分の 夢が かなうかどうか 分かりませんが、全力で 挑戦して みます。」"
      }
    ]
  },
  {
    "id": "dokkai-41",
    "lessonId": "bai-41",
    "title": "Bài Đọc Hiểu - Bài 41 Minna",
    "subTitle": "お中元と お歳暮の 習慣 (Phong tục tặng quà Ochugen và Oseibo)",
    "description": "Đoạn văn giới thiệu nét đẹp văn hóa biếu tặng quà tri ân người trên tại Nhật ứng dụng いただきます, くださいます, やります.",
    "passage": "<ruby>日本<rt>にほん</rt></ruby>には お<ruby>世話<rt>せわ</rt></ruby>に なった <ruby>方<rt>かた</rt></ruby>に <ruby>贈<rt>ぞう</rt></ruby>り<ruby>物<rt>もの</rt></ruby>を する <ruby>習慣<rt>しゅうかん</rt></ruby>が あります。\n<ruby>夏<rt>なつ</rt></ruby>には「お<ruby>中<rt>なか</rt></ruby><ruby>元<rt>げん</rt></ruby>」、<ruby>冬<rt>ふゆ</rt></ruby>の <ruby>終<rt>お</rt></ruby>わりには「お<ruby>歳<rt>さい</rt></ruby><ruby>暮<rt>く</rt></ruby>」と <ruby>言<rt>い</rt></ruby>って、<ruby>日<rt>にち</rt></ruby><ruby>頃<rt>ころ</rt></ruby>の <ruby>感謝<rt>かんしゃ</rt></ruby>の <ruby>気持<rt>きも</rt></ruby>ちを <ruby>伝<rt>つた</rt></ruby>えます。\n<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は お<ruby>世話<rt>せわ</rt></ruby>に なって いる <ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>部長<rt>ぶちょう</rt></ruby>から、<ruby>新鮮<rt>しんせん</rt></ruby>な フルーツを いただきました。\n<ruby>部長<rt>ぶちょう</rt></ruby>は いつも <ruby>私<rt>わたし</rt></ruby>の <ruby>仕事<rt>しごと</rt></ruby>を <ruby>丁寧<rt>ていねい</rt></ruby>に <ruby>教<rt>おし</rt></ruby>えて くださいます。\nお<ruby>正月<rt>しょうがつ</rt></ruby>に なると、<ruby>大<rt>おお</rt></ruby><ruby>人<rt>ひと</rt></ruby>は <ruby>子<rt>こ</rt></ruby>どもたちに お<ruby>年玉<rt>としだま</rt></ruby>を やります。<ruby>子<rt>こ</rt></ruby>どもたちは その お<ruby>金<rt>かね</rt></ruby>で <ruby>好<rt>す</rt></ruby>きなおもちゃを <ruby>買<rt>か</rt></ruby>います。\n<ruby>贈<rt>ぞう</rt></ruby>り<ruby>物<rt>もの</rt></ruby>を <ruby>通<rt>つう</rt></ruby>して <ruby>感謝<rt>かんしゃ</rt></ruby>を <ruby>伝<rt>つた</rt></ruby>え<ruby>合<rt>あ</rt></ruby>うのは、<ruby>日本<rt>にほん</rt></ruby>の <ruby>素<rt>す</rt></ruby><ruby>晴<rt>は</rt></ruby>らしい <ruby>文化<rt>ぶんか</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>います。",
    "questions": [
      {
        "id": "dk41-1",
        "question": "<ruby>夏<rt>なつ</rt></ruby>に <ruby>贈<rt>ぞう</rt></ruby>る ギフトを <ruby>何<rt>なん</rt></ruby>と <ruby>言<rt>い</rt></ruby>いますか。",
        "options": [
          "お<ruby>中<rt>なか</rt></ruby><ruby>元<rt>げん</rt></ruby>",
          "お<ruby>歳<rt>さい</rt></ruby><ruby>暮<rt>く</rt></ruby>",
          "お<ruby>年玉<rt>としだま</rt></ruby>",
          "お<ruby>見舞<rt>みま</rt></ruby>い"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「夏には「お中元」... と 言って」"
      },
      {
        "id": "dk41-2",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>先週<rt>せんしゅう</rt></ruby> <ruby>部長<rt>ぶちょう</rt></ruby>から <ruby>何<rt>なん</rt></ruby>を いただきましたか。",
        "options": [
          "<ruby>新鮮<rt>しんせん</rt></ruby>な フルーツ",
          "<ruby>高<rt>たか</rt></ruby><ruby>級<rt>きゅう</rt></ruby>な お<ruby>酒<rt>さけ</rt></ruby>",
          "お<ruby>菓子<rt>かし</rt></ruby>",
          "<ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby><ruby>券<rt>けん</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「先週、私は お世話に なって いる 会社の 部長から、新鮮な フルーツを いただきました。」"
      },
      {
        "id": "dk41-3",
        "question": "<ruby>部長<rt>ぶちょう</rt></ruby>は <ruby>普<rt>ふ</rt></ruby><ruby>段<rt>だん</rt></ruby> <ruby>筆者<rt>ひっしゃ</rt></ruby>に どんな ことを して くださいますか。",
        "options": [
          "<ruby>仕事<rt>しごと</rt></ruby>を <ruby>丁寧<rt>ていねい</rt></ruby>に <ruby>教<rt>おし</rt></ruby>えて くださる",
          "<ruby>車<rt>くるま</rt></ruby>を <ruby>運転<rt>うんてん</rt></ruby>して くださる",
          "ご<ruby>飯<rt>はん</rt></ruby>を <ruby>作<rt>つく</rt></ruby>って くださる",
          "<ruby>本<rt>ほん</rt></ruby>を <ruby>買<rt>か</rt></ruby>って くださる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「部長は いつも 私の 仕事を 丁寧に 教えて くださいます。」"
      },
      {
        "id": "dk41-4",
        "question": "お<ruby>正月<rt>しょうがつ</rt></ruby>に <ruby>大<rt>おお</rt></ruby><ruby>人<rt>ひと</rt></ruby>は <ruby>子<rt>こ</rt></ruby>どもに <ruby>何<rt>なん</rt></ruby>を やりますか。",
        "options": [
          "お<ruby>年玉<rt>としだま</rt></ruby>",
          "お<ruby>中<rt>なか</rt></ruby><ruby>元<rt>げん</rt></ruby>",
          "お<ruby>歳<rt>さい</rt></ruby><ruby>暮<rt>く</rt></ruby>",
          "お<ruby>土<rt>つち</rt></ruby><ruby>産<rt>さん</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「お正月に なると、大人は 子どもたちに お年玉を やります。」"
      },
      {
        "id": "dk41-5",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は この <ruby>贈<rt>ぞう</rt></ruby><ruby>答<rt>こた</rt></ruby><ruby>文化<rt>ぶんか</rt></ruby>について どう <ruby>思<rt>おも</rt></ruby>って いますか。",
        "options": [
          "<ruby>感謝<rt>かんしゃ</rt></ruby>を <ruby>伝<rt>つた</rt></ruby>え<ruby>合<rt>あ</rt></ruby>う <ruby>素<rt>す</rt></ruby><ruby>晴<rt>は</rt></ruby>らしい <ruby>文化<rt>ぶんか</rt></ruby>だと <ruby>思<rt>おも</rt></ruby>う",
          "<ruby>面<rt>めん</rt></ruby><ruby>倒<rt>たお</rt></ruby>で <ruby>廃<rt>はい</rt></ruby><ruby>止<rt>と</rt></ruby>すべきだと <ruby>思<rt>おも</rt></ruby>う",
          "お<ruby>金<rt>かね</rt></ruby>の <ruby>無駄<rt>むだ</rt></ruby><ruby>遣<rt>づか</rt></ruby>いだと <ruby>思<rt>おも</rt></ruby>う",
          "<ruby>意味<rt>いみ</rt></ruby>が ないと <ruby>思<rt>おも</rt></ruby>う"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「贈り物を 通して 感謝を 伝え合うのは、日本の 素晴らしい 文化だと 思います。」"
      }
    ]
  },
  {
    "id": "dokkai-42",
    "lessonId": "bai-42",
    "title": "Bài Đọc Hiểu - Bài 42 Minna",
    "subTitle": "弁護士を 目指す 留学生 (Du học sinh với mục tiêu trở thành luật sư)",
    "description": "Đoạn văn kể về nỗ lực học tập để cống hiến vì xã hội ứng dụng 〜ために và 〜のに.",
    "passage": "<ruby>私<rt>わたし</rt></ruby>は <ruby>困<rt>こま</rt></ruby>って いる <ruby>人<rt>ひと</rt></ruby>たちを <ruby>助<rt>たす</rt></ruby>ける ために、<ruby>弁護士<rt>べんごし</rt></ruby>に なろうと <ruby>決<rt>き</rt></ruby><ruby>心<rt>しん</rt></ruby>しました。\n<ruby>日本<rt>にほん</rt></ruby>の <ruby>法律<rt>ほうりつ</rt></ruby>は <ruby>難<rt>むずか</rt></ruby>しいですが、<ruby>毎日<rt>まいにち</rt></ruby> <ruby>一生懸命<rt>いっしょうけんめい</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby>して います。\n<ruby>日本<rt>にほん</rt></ruby>の <ruby>大学<rt>だいがく</rt></ruby>を <ruby>卒業<rt>そつぎょう</rt></ruby>するのには、たくさんの <ruby>時間<rt>じかん</rt></ruby>と お<ruby>金<rt>かね</rt></ruby>が かかります。\nですから、<ruby>学<rt>がく</rt></ruby><ruby>費<rt>ひ</rt></ruby>を <ruby>払<rt>はら</rt></ruby>う ために、<ruby>週末<rt>しゅうまつ</rt></ruby>は レストランで アルバイトを して います。\nこの <ruby>厚<rt>あつ</rt></ruby>い <ruby>法律<rt>ほうりつ</rt></ruby>の <ruby>本<rt>ほん</rt></ruby>は、<ruby>判<rt>はん</rt></ruby><ruby>例<rt>れい</rt></ruby>を <ruby>調<rt>しら</rt></ruby>べるのに とても <ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>ちます。\n<ruby>自分<rt>じぶん</rt></ruby>の <ruby>夢<rt>ゆめ</rt></ruby>を <ruby>実<rt>じつ</rt></ruby><ruby>現<rt>げん</rt></ruby>する ために、どんなに <ruby>苦<rt>く</rt></ruby>しくても <ruby>諦<rt>あきら</rt></ruby>めずに <ruby>歩<rt>ある</rt></ruby>み<ruby>続<rt>つづ</rt></ruby>けます。",
    "questions": [
      {
        "id": "dk42-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>の ために <ruby>弁護士<rt>べんごし</rt></ruby>を <ruby>目<rt>め</rt></ruby><ruby>指<rt>さ</rt></ruby>して いますか。",
        "options": [
          "<ruby>困<rt>こま</rt></ruby>って いる <ruby>人<rt>ひと</rt></ruby>たちを <ruby>助<rt>たす</rt></ruby>ける ために",
          "<ruby>大<rt>おお</rt></ruby><ruby>金<rt>かね</rt></ruby><ruby>持<rt>も</rt></ruby>ちに なる ために",
          "<ruby>有名<rt>ゆうめい</rt></ruby>に なる ために",
          "<ruby>親<rt>した</rt></ruby>に <ruby>自<rt>じ</rt></ruby><ruby>慢<rt>まん</rt></ruby>する ために"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「困って いる 人たちを 助ける ために、弁護士に なろうと 決心しました。」"
      },
      {
        "id": "dk42-2",
        "question": "<ruby>日本<rt>にほん</rt></ruby>の <ruby>大学<rt>だいがく</rt></ruby>を <ruby>卒業<rt>そつぎょう</rt></ruby>するのには <ruby>何<rt>なん</rt></ruby>が かかりますか。",
        "options": [
          "たくさんの <ruby>時間<rt>じかん</rt></ruby>と お<ruby>金<rt>かね</rt></ruby>",
          "たくさんの <ruby>友達<rt>ともだち</rt></ruby>",
          "<ruby>車<rt>くるま</rt></ruby>と <ruby>家<rt>いえ</rt></ruby>",
          "<ruby>強<rt>つよ</rt></ruby>い <ruby>体<rt>からだ</rt></ruby><ruby>力<rt>ちから</rt></ruby> だけ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「日本の 大学を 卒業するのには、たくさんの 時間と お金が かかります。」"
      },
      {
        "id": "dk42-3",
        "question": "<ruby>学<rt>がく</rt></ruby><ruby>費<rt>ひ</rt></ruby>を <ruby>払<rt>はら</rt></ruby>う ために <ruby>週末<rt>しゅうまつ</rt></ruby> <ruby>何<rt>なん</rt></ruby>を して いますか。",
        "options": [
          "レストランで アルバイトを して いる",
          "<ruby>旅行<rt>りょこう</rt></ruby>に <ruby>行<rt>い</rt></ruby>って いる",
          "<ruby>家<rt>いえ</rt></ruby>で <ruby>寝<rt>ね</rt></ruby>て いる",
          "スポーツを して いる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「ですから、学費を 払う ために、週末は レストランで アルバイトを して います。」"
      },
      {
        "id": "dk42-4",
        "question": "<ruby>厚<rt>あつ</rt></ruby>い <ruby>法律<rt>ほうりつ</rt></ruby>の <ruby>本<rt>ほん</rt></ruby>は <ruby>何<rt>なん</rt></ruby>に <ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>ちますか。",
        "options": [
          "<ruby>判<rt>はん</rt></ruby><ruby>例<rt>れい</rt></ruby>を <ruby>調<rt>しら</rt></ruby>べるのに",
          "<ruby>枕<rt>まくら</rt></ruby>に するのに",
          "<ruby>部屋<rt>へや</rt></ruby>を <ruby>飾<rt>かざ</rt></ruby>るのに",
          "<ruby>重<rt>おも</rt></ruby>しに するのに"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「この 厚い 法律の 本は、判例を 調べるのに とても 役に立ちます。」"
      },
      {
        "id": "dk42-5",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>の <ruby>決<rt>き</rt></ruby><ruby>意<rt>い</rt></ruby>として <ruby>正<rt>ただ</rt></ruby>しいものは どれですか。",
        "options": [
          "<ruby>夢<rt>ゆめ</rt></ruby>を <ruby>実<rt>じつ</rt></ruby><ruby>現<rt>げん</rt></ruby>する ために <ruby>諦<rt>あきら</rt></ruby>めずに <ruby>歩<rt>ある</rt></ruby>み<ruby>続<rt>つづ</rt></ruby>ける",
          "<ruby>来年<rt>らいねん</rt></ruby> <ruby>国<rt>くに</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>る",
          "<ruby>別<rt>べつ</rt></ruby>の <ruby>仕事<rt>しごと</rt></ruby>を <ruby>探<rt>さが</rt></ruby>す",
          "<ruby>勉強<rt>べんきょう</rt></ruby>を やめる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「自分の 夢を 実現する ために、どんなに 苦しくても 諦めずに 歩み続けます。」"
      }
    ]
  },
  {
    "id": "dokkai-43",
    "lessonId": "bai-43",
    "title": "Bài Đọc Hiểu - Bài 43 Minna",
    "subTitle": "秋から 冬への 移り変わり (Khúc giao mùa từ thu sang đông)",
    "description": "Đoạn văn miêu tả sự biến đổi của thời tiết và cảnh sắc ứng dụng cấu trúc 〜そうです trông có vẻ và 〜て来ます.",
    "passage": "11<ruby>月<rt>がつ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ると、<ruby>風<rt>かぜ</rt></ruby>が <ruby>冷<rt>つめ</rt></ruby>たく なって、<ruby>冬<rt>ふゆ</rt></ruby>が <ruby>近<rt>ちか</rt></ruby>づいて <ruby>来<rt>き</rt></ruby>ました。\n<ruby>空<rt>そら</rt></ruby>を <ruby>見<rt>み</rt></ruby><ruby>上<rt>うえ</rt></ruby>げると、<ruby>厚<rt>あつ</rt></ruby>い <ruby>雲<rt>くも</rt></ruby>が <ruby>広<rt>ひろ</rt></ruby>がって いて、<ruby>今<rt>いま</rt></ruby>にも <ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>りそうです。\n<ruby>公園<rt>こうえん</rt></ruby>の <ruby>木<rt>き</rt></ruby>々の <ruby>葉<rt>よう</rt></ruby>も <ruby>黄<rt>き</rt></ruby><ruby>色<rt>いろ</rt></ruby>や <ruby>赤<rt>あか</rt></ruby>に <ruby>変<rt>か</rt></ruby>わり、<ruby>風<rt>かぜ</rt></ruby>が <ruby>吹<rt>ふ</rt></ruby>くと <ruby>散<rt>ち</rt></ruby>りそうです。\n<ruby>八<rt>はち</rt></ruby><ruby>百<rt>ひゃく</rt></ruby><ruby>屋<rt>や</rt></ruby>の <ruby>店<rt>みせ</rt></ruby><ruby>先<rt>さき</rt></ruby>には、おいしそうな みかんや りんごが たくさん <ruby>並<rt>なみ</rt></ruby>んで います。\n<ruby>寒<rt>さむ</rt></ruby>そうなので、<ruby>私<rt>わたし</rt></ruby>は コートを <ruby>着<rt>き</rt></ruby>て、<ruby>近<rt>ちか</rt></ruby>くの コンビニへ <ruby>温<rt>あたた</rt></ruby>かい お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>買<rt>か</rt></ruby>って <ruby>来<rt>き</rt></ruby>ました。\n<ruby>季節<rt>きせつ</rt></ruby>の <ruby>変<rt>か</rt></ruby>わり<ruby>目<rt>め</rt></ruby>は <ruby>風<rt>かぜ</rt></ruby><ruby>邪<rt>じゃ</rt></ruby>を <ruby>引<rt>ひ</rt></ruby>きやすいですから、<ruby>健康<rt>けんこう</rt></ruby>に <ruby>気<rt>き</rt></ruby>をつけたいです。",
    "questions": [
      {
        "id": "dk43-1",
        "question": "11<ruby>月<rt>がつ</rt></ruby>に なると どうなって <ruby>来<rt>き</rt></ruby>ましたか。",
        "options": [
          "<ruby>風<rt>かぜ</rt></ruby>が <ruby>冷<rt>つめ</rt></ruby>たく なって、<ruby>冬<rt>ふゆ</rt></ruby>が <ruby>近<rt>ちか</rt></ruby>づいて <ruby>来<rt>き</rt></ruby>た",
          "<ruby>暑<rt>あつ</rt></ruby>く なって <ruby>夏<rt>なつ</rt></ruby>が <ruby>来<rt>き</rt></ruby>た",
          "<ruby>雪<rt>ゆき</rt></ruby>が <ruby>溶<rt>と</rt></ruby>けて <ruby>春<rt>はる</rt></ruby>が <ruby>来<rt>き</rt></ruby>た",
          "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>晴<rt>は</rt></ruby><ruby>天<rt>てん</rt></ruby>が <ruby>続<rt>つづ</rt></ruby>いた"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「風が 冷たく なって、冬が 近づいて 来ました。」"
      },
      {
        "id": "dk43-2",
        "question": "<ruby>空<rt>そら</rt></ruby>の <ruby>様<rt>さま</rt></ruby><ruby>子<rt>こ</rt></ruby>から <ruby>天気<rt>てんき</rt></ruby>は どう なりそうですか。",
        "options": [
          "<ruby>今<rt>いま</rt></ruby>にも <ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>りそう",
          "<ruby>晴<rt>は</rt></ruby>れそう",
          "<ruby>台風<rt>たいふう</rt></ruby>が <ruby>来<rt>き</rt></ruby>そう",
          "<ruby>虹<rt>にじ</rt></ruby>が <ruby>出<rt>だ</rt></ruby>そう"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「厚い 雲が 広がって いて、今にも 雨が 降りそうです。」"
      },
      {
        "id": "dk43-3",
        "question": "<ruby>八<rt>はち</rt></ruby><ruby>百<rt>ひゃく</rt></ruby><ruby>屋<rt>や</rt></ruby>の <ruby>店<rt>みせ</rt></ruby><ruby>先<rt>さき</rt></ruby>には どんな <ruby>果物<rt>くだもの</rt></ruby>が <ruby>並<rt>なみ</rt></ruby>んで いますか。",
        "options": [
          "おいしそうな みかんや りんご",
          "すいかや ぶどう",
          "バナナや マンゴー",
          "メロンや いちご"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「おいしそうな みかんや りんごが たくさん 並んで います。」"
      },
      {
        "id": "dk43-4",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は コンビニへ <ruby>何<rt>なん</rt></ruby>を しに <ruby>行<rt>い</rt></ruby>って <ruby>来<rt>き</rt></ruby>ましたか。",
        "options": [
          "<ruby>温<rt>あたた</rt></ruby>かい お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>買<rt>か</rt></ruby>って <ruby>来<rt>き</rt></ruby>た",
          "<ruby>雑誌<rt>ざっし</rt></ruby>を <ruby>立<rt>た</rt></ruby>ち<ruby>読<rt>よ</rt></ruby>みして <ruby>来<rt>き</rt></ruby>た",
          "お<ruby>金<rt>かね</rt></ruby>を <ruby>振<rt>ふ</rt></ruby>り<ruby>込<rt>こ</rt></ruby>んで <ruby>来<rt>き</rt></ruby>た",
          "<ruby>傘<rt>かさ</rt></ruby>を <ruby>借<rt>か</rt></ruby>りて <ruby>来<rt>き</rt></ruby>た"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「近くの コンビニへ 温かい お茶を 買って 来ました。」"
      },
      {
        "id": "dk43-5",
        "question": "<ruby>季節<rt>きせつ</rt></ruby>の <ruby>変<rt>か</rt></ruby>わり<ruby>目<rt>め</rt></ruby>に どうして <ruby>気<rt>き</rt></ruby>をつけますか。",
        "options": [
          "<ruby>風<rt>かぜ</rt></ruby><ruby>邪<rt>じゃ</rt></ruby>を <ruby>引<rt>ひ</rt></ruby>きやすいから",
          "<ruby>太<rt>ふと</rt></ruby>りやすいから",
          "<ruby>眠<rt>ねむ</rt></ruby>く なるから",
          "<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を しやすいから"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「季節の 変わり目は 風邪を 引きやすいですから、健康に 気をつけたいです。」"
      }
    ]
  },
  {
    "id": "dokkai-44",
    "lessonId": "bai-44",
    "title": "Bài Đọc Hiểu - Bài 44 Minna",
    "subTitle": "一人暮らしの 失敗と 工夫 (Những bỡ ngỡ và mẹo khi sống một mình)",
    "description": "Đoạn văn kể về những kinh nghiệm nấu ăn, sinh hoạt khi bắt đầu sống tự lập ứng dụng 〜すぎます, 〜やすい, 〜にくい, A-くします.",
    "passage": "<ruby>日本<rt>にほん</rt></ruby>で <ruby>一人<rt>ひとり</rt></ruby><ruby>暮<rt>く</rt></ruby>らしを <ruby>始<rt>はじ</rt></ruby>めた ころ、たくさんの <ruby>失敗<rt>しっぱい</rt></ruby>を しました。\n<ruby>初<rt>はじ</rt></ruby>めて カレーを <ruby>作<rt>つく</rt></ruby>った <ruby>時<rt>じ</rt></ruby>、<ruby>辛<rt>から</rt></ruby>い スパイスを <ruby>入<rt>はい</rt></ruby>れすぎて、<ruby>辛<rt>から</rt></ruby>すぎて <ruby>食<rt>た</rt></ruby>べられませんでした。\nそれで、<ruby>味<rt>み</rt></ruby>を <ruby>薄<rt>うす</rt></ruby>く するために、<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>を <ruby>入<rt>い</rt></ruby>れて <ruby>調節<rt>ちょうせつ</rt></ruby>しました。\nまた、<ruby>新<rt>あたら</rt></ruby>しい <ruby>部屋<rt>へや</rt></ruby>の <ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>は <ruby>小<rt>ちい</rt></ruby>さすぎて、<ruby>食<rt>た</rt></ruby><ruby>材<rt>ざい</rt></ruby>が あまり <ruby>入<rt>はい</rt></ruby>りません。\nでも、<ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くは スーパーが <ruby>多<rt>おお</rt></ruby>くて、<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>しやすくて <ruby>便利<rt>べんり</rt></ruby>です。\n<ruby>部屋<rt>へや</rt></ruby>を <ruby>広<rt>ひろ</rt></ruby>く <ruby>使<rt>つか</rt></ruby>うために、<ruby>不<rt>ふ</rt></ruby><ruby>要<rt>い</rt></ruby>な <ruby>物<rt>もの</rt></ruby>を <ruby>捨<rt>す</rt></ruby>てて、<ruby>部屋<rt>へや</rt></ruby>を きれいに しました。<ruby>失敗<rt>しっぱい</rt></ruby>を <ruby>重<rt>おも</rt></ruby>ねて、<ruby>少<rt>すこ</rt></ruby>しずつ <ruby>生活<rt>せいかつ</rt></ruby>が <ruby>楽<rt>たの</rt></ruby>しく なって きました。",
    "questions": [
      {
        "id": "dk44-1",
        "question": "<ruby>初<rt>はじ</rt></ruby>めて カレーを <ruby>作<rt>つく</rt></ruby>った <ruby>時<rt>じ</rt></ruby>、どうして <ruby>食<rt>た</rt></ruby>べられませんでしたか。",
        "options": [
          "スパイスを <ruby>入<rt>はい</rt></ruby>れすぎて <ruby>辛<rt>から</rt></ruby>すぎたから",
          "<ruby>焦<rt>こ</rt></ruby>げて しまったから",
          "<ruby>塩<rt>しお</rt></ruby>が <ruby>足<rt>あし</rt></ruby>りなかったから",
          "<ruby>冷<rt>つめ</rt></ruby>たかったから"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「辛い スパイスを 入れすぎて、辛すぎて 食べられませんでした。」"
      },
      {
        "id": "dk44-2",
        "question": "カレーの <ruby>味<rt>み</rt></ruby>を <ruby>薄<rt>うす</rt></ruby>く するために <ruby>何<rt>なん</rt></ruby>を しましたか。",
        "options": [
          "<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>を <ruby>入<rt>い</rt></ruby>れて <ruby>調節<rt>ちょうせつ</rt></ruby>した",
          "<ruby>砂糖<rt>さとう</rt></ruby>を <ruby>大<rt>おお</rt></ruby><ruby>量<rt>りょう</rt></ruby>に <ruby>入<rt>い</rt></ruby>れた",
          "<ruby>水<rt>みず</rt></ruby>を たくさん <ruby>飲<rt>の</rt></ruby>んだ",
          "<ruby>捨<rt>す</rt></ruby>てて <ruby>新<rt>あたら</rt></ruby>しく <ruby>買<rt>か</rt></ruby>った"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「味を 薄く するために、牛乳を 入れて 調節しました。」"
      },
      {
        "id": "dk44-3",
        "question": "<ruby>新<rt>あたら</rt></ruby>しい <ruby>部屋<rt>へや</rt></ruby>の <ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>は どうですか。",
        "options": [
          "<ruby>小<rt>ちい</rt></ruby>さすぎて <ruby>食<rt>た</rt></ruby><ruby>材<rt>ざい</rt></ruby>が <ruby>入<rt>はい</rt></ruby>らない",
          "<ruby>大<rt>おお</rt></ruby>きすぎて <ruby>邪魔<rt>じゃま</rt></ruby>だ",
          "<ruby>壊<rt>こわ</rt></ruby>れて <ruby>冷<rt>つめ</rt></ruby>えない",
          "<ruby>音<rt>おと</rt></ruby>が うるさすぎる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「冷蔵庫は 小さすぎて、食材が あまり 入りません。」"
      },
      {
        "id": "dk44-4",
        "question": "<ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くは どうして <ruby>便利<rt>べんり</rt></ruby>ですか。",
        "options": [
          "スーパーが <ruby>多<rt>おお</rt></ruby>くて <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>しやすいから",
          "<ruby>病院<rt>びょういん</rt></ruby>が <ruby>近<rt>ちか</rt></ruby>いから",
          "<ruby>友達<rt>ともだち</rt></ruby>の <ruby>家<rt>いえ</rt></ruby>が あるから",
          "<ruby>静<rt>しず</rt></ruby>かだから"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「駅の 近くは スーパーが 多くて、買い物しやすくて 便利です。」"
      },
      {
        "id": "dk44-5",
        "question": "<ruby>部屋<rt>へや</rt></ruby>を <ruby>広<rt>ひろ</rt></ruby>く <ruby>使<rt>つか</rt></ruby>うために <ruby>何<rt>なん</rt></ruby>を しましたか。",
        "options": [
          "<ruby>不<rt>ふ</rt></ruby><ruby>要<rt>い</rt></ruby>な <ruby>物<rt>もの</rt></ruby>を <ruby>捨<rt>す</rt></ruby>てて きれいに した",
          "<ruby>大<rt>おお</rt></ruby>きな <ruby>家具<rt>かぐ</rt></ruby>を <ruby>買<rt>か</rt></ruby>った",
          "<ruby>壁<rt>かべ</rt></ruby>を <ruby>壊<rt>こわ</rt></ruby>した",
          "<ruby>友達<rt>ともだち</rt></ruby>を <ruby>呼<rt>よ</rt></ruby>んだ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「不要な 物を 捨てて、部屋を きれいに しました。」"
      }
    ]
  },
  {
    "id": "dokkai-45",
    "lessonId": "bai-45",
    "title": "Bài Đọc Hiểu - Bài 45 Minna",
    "subTitle": "もしもの 時の 防災訓練 (Diễn tập phòng chống thiên tai)",
    "description": "Đoạn văn kể về buổi diễn tập cứu hộ động đất và hỏa hoạn ứng dụng 〜場合は và 〜のに.",
    "passage": "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>町<rt>まち</rt></ruby><ruby>内<rt>ない</rt></ruby>で <ruby>防災訓練<rt>ぼうさいくんれん</rt></ruby>が <ruby>行<rt>い</rt></ruby>われました。\n<ruby>消<rt>け</rt></ruby><ruby>防<rt>ぼう</rt></ruby><ruby>署<rt>しょ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>が「<ruby>火事<rt>かじ</rt></ruby>や <ruby>地震<rt>じしん</rt></ruby>の <ruby>場合<rt>ばあい</rt></ruby>は、<ruby>慌<rt>あわ</rt></ruby>てずに <ruby>行動<rt>こうどう</rt></ruby>して ください」と <ruby>説明<rt>せつめい</rt></ruby>しました。\n「<ruby>煙<rt>けむり</rt></ruby>が <ruby>出<rt>で</rt></ruby>て いる <ruby>場合<rt>ばあい</rt></ruby>は、ハンカチで <ruby>鼻<rt>はな</rt></ruby>と <ruby>口<rt>くち</rt></ruby>を <ruby>覆<rt>おお</rt></ruby>って、<ruby>体<rt>からだ</rt></ruby>を <ruby>低<rt>ひく</rt></ruby>く して <ruby>逃<rt>に</rt></ruby>げて ください」\n<ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>って いたのに、<ruby>近所<rt>きんじょ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>たちが たくさん <ruby>訓<rt>くん</rt></ruby><ruby>練<rt>れん</rt></ruby>に <ruby>集<rt>あつ</rt></ruby>まりました。\n<ruby>消<rt>け</rt></ruby><ruby>火<rt>ひ</rt></ruby><ruby>器<rt>き</rt></ruby>の <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>は、<ruby>何度<rt>なんど</rt></ruby>も <ruby>説明<rt>せつめい</rt></ruby>を <ruby>聞<rt>き</rt></ruby>いたのに、<ruby>実<rt>じつ</rt></ruby><ruby>際<rt>さい</rt></ruby>に <ruby>使<rt>つか</rt></ruby>って みると <ruby>難<rt>むずか</rt></ruby>しかったです。\n<ruby>緊<rt>きん</rt></ruby><ruby>急<rt>いそ</rt></ruby>の <ruby>場合<rt>ばあい</rt></ruby>は <ruby>正<rt>ただ</rt></ruby>しい <ruby>知<rt>し</rt></ruby><ruby>識<rt>しき</rt></ruby>が <ruby>命<rt>めい</rt></ruby>を <ruby>救<rt>すく</rt></ruby>いますから、とても <ruby>有<rt>ゆう</rt></ruby><ruby>意<rt>い</rt></ruby><ruby>義<rt>ぎ</rt></ruby>な <ruby>訓<rt>くん</rt></ruby><ruby>練<rt>れん</rt></ruby>でした。",
    "questions": [
      {
        "id": "dk45-1",
        "question": "<ruby>昨日<rt>きのう</rt></ruby> <ruby>町<rt>まち</rt></ruby><ruby>内<rt>ない</rt></ruby>で <ruby>何<rt>なん</rt></ruby>が <ruby>行<rt>い</rt></ruby>われましたか。",
        "options": [
          "<ruby>防災訓練<rt>ぼうさいくんれん</rt></ruby>",
          "<ruby>夏<rt>なつ</rt></ruby><ruby>祭<rt>まつ</rt></ruby>り",
          "<ruby>運動<rt>うんどう</rt></ruby><ruby>会<rt>あ</rt></ruby>",
          "<ruby>音楽<rt>おんがく</rt></ruby><ruby>会<rt>あ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「昨日、町内で 防災訓練が 行われました。」"
      },
      {
        "id": "dk45-2",
        "question": "<ruby>火事<rt>かじ</rt></ruby>や <ruby>地震<rt>じしん</rt></ruby>の <ruby>場合<rt>ばあい</rt></ruby>は どうしなければ なりませんか。",
        "options": [
          "<ruby>慌<rt>あわ</rt></ruby>てずに <ruby>行動<rt>こうどう</rt></ruby>する",
          "<ruby>大<rt>おお</rt></ruby><ruby>声<rt>こえ</rt></ruby>を <ruby>出<rt>だ</rt></ruby>して <ruby>走<rt>はし</rt></ruby>る",
          "エレベーターに <ruby>乗<rt>の</rt></ruby>る",
          "<ruby>荷物<rt>にもつ</rt></ruby>を <ruby>全部<rt>ぜんぶ</rt></ruby> <ruby>持<rt>も</rt></ruby>つ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「火事や 地震の 場合は、慌てずに 行動して ください」"
      },
      {
        "id": "dk45-3",
        "question": "<ruby>煙<rt>けむり</rt></ruby>が <ruby>出<rt>で</rt></ruby>て いる <ruby>場合<rt>ばあい</rt></ruby>は どうやって <ruby>逃<rt>に</rt></ruby>げますか。",
        "options": [
          "ハンカチで <ruby>鼻<rt>はな</rt></ruby>と <ruby>口<rt>くち</rt></ruby>を <ruby>覆<rt>おお</rt></ruby>い <ruby>体<rt>からだ</rt></ruby>を <ruby>低<rt>ひく</rt></ruby>く する",
          "<ruby>窓<rt>まど</rt></ruby>を <ruby>全部<rt>ぜんぶ</rt></ruby> <ruby>開<rt>あ</rt></ruby>ける",
          "<ruby>走<rt>はし</rt></ruby>って <ruby>階段<rt>かいだん</rt></ruby>を <ruby>飛<rt>と</rt></ruby>び<ruby>降<rt>お</rt></ruby>りる",
          "<ruby>水<rt>みず</rt></ruby><ruby>槽<rt>そう</rt></ruby>に <ruby>飛<rt>と</rt></ruby>び<ruby>込<rt>こ</rt></ruby>む"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「ハンカチで 鼻と 口を 覆って、体を 低く して 逃げて ください」"
      },
      {
        "id": "dk45-4",
        "question": "<ruby>天気<rt>てんき</rt></ruby>が どうだったのに、たくさんの <ruby>人<rt>ひと</rt></ruby>が <ruby>集<rt>あつ</rt></ruby>まりましたか。",
        "options": [
          "<ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>って いたのに",
          "<ruby>風<rt>かぜ</rt></ruby>が <ruby>強<rt>つよ</rt></ruby>かったのに",
          "<ruby>雪<rt>ゆき</rt></ruby>が <ruby>積<rt>つ</rt></ruby>もって いたのに",
          "とても <ruby>寒<rt>さむ</rt></ruby>かったのに"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「雨が 降って いたのに、近所の 人たちが たくさん 訓練に 集まりました。」"
      },
      {
        "id": "dk45-5",
        "question": "<ruby>消<rt>け</rt></ruby><ruby>火<rt>ひ</rt></ruby><ruby>器<rt>き</rt></ruby>を <ruby>実<rt>じつ</rt></ruby><ruby>際<rt>さい</rt></ruby>に <ruby>使<rt>つか</rt></ruby>って みて どうでしたか。",
        "options": [
          "<ruby>何度<rt>なんど</rt></ruby>も <ruby>聞<rt>き</rt></ruby>いたのに <ruby>難<rt>むずか</rt></ruby>しかった",
          "とても <ruby>簡単<rt>かんたん</rt></ruby>だった",
          "<ruby>重<rt>おも</rt></ruby>すぎて <ruby>持<rt>も</rt></ruby>てなかった",
          "<ruby>壊<rt>こわ</rt></ruby>れて <ruby>水<rt>みず</rt></ruby>が <ruby>出<rt>だ</rt></ruby>なかった"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「何度も 説明を 聞いたのに、実際に 使って みると 難しかったです。」"
      }
    ]
  },
  {
    "id": "dokkai-46",
    "lessonId": "bai-46",
    "title": "Bài Đọc Hiểu - Bài 46 Minna",
    "subTitle": "正確な 新幹線と 出張 (Chuyến công tác và độ chính xác của tàu Shinkansen)",
    "description": "Đoạn văn kể về sự chuẩn xác đến từng giây của mạng lưới tàu cao tốc Nhật Bản ứng dụng 〜ところです, 〜ばかりです, 〜はずです.",
    "passage": "<ruby>私<rt>わたし</rt></ruby>は <ruby>今<rt>いま</rt></ruby>、<ruby>東京駅<rt>とうきょうえき</rt></ruby>の ホームに います。<ruby>新<rt>あたら</rt></ruby><ruby>大阪<rt>おおさか</rt></ruby><ruby>行<rt>い</rt></ruby>きの <ruby>新幹線<rt>しんかんせん</rt></ruby>が ちょうど <ruby>入<rt>はい</rt></ruby>って <ruby>来<rt>き</rt></ruby>た ところです。\n<ruby>日本<rt>にほん</rt></ruby>の <ruby>新幹線<rt>しんかんせん</rt></ruby>は <ruby>時間<rt>じかん</rt></ruby>が <ruby>正<rt>ただ</rt></ruby><ruby>確<rt>たし</rt></ruby>ですから、10<ruby>時<rt>じ</rt></ruby>ちょうどに <ruby>発<rt>はつ</rt></ruby><ruby>車<rt>くるま</rt></ruby>する はずです。\n<ruby>先週<rt>せんしゅう</rt></ruby> <ruby>入<rt>はい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>した ばかりの <ruby>後輩<rt>こうはい</rt></ruby>と <ruby>一緒<rt>いっしょ</rt></ruby>に、<ruby>大阪<rt>おおさか</rt></ruby>の <ruby>支<rt>し</rt></ruby><ruby>社<rt>しゃ</rt></ruby>へ <ruby>出張<rt>しゅっちょう</rt></ruby>に <ruby>行<rt>い</rt></ruby>きます。\n<ruby>後輩<rt>こうはい</rt></ruby>は「<ruby>新幹線<rt>しんかんせん</rt></ruby>に <ruby>乗<rt>の</rt></ruby>るのは <ruby>初<rt>はじ</rt></ruby>めてです」と <ruby>言<rt>い</rt></ruby>って、とても <ruby>楽<rt>たの</rt></ruby>しみに して います。\nたった<ruby>今<rt>いま</rt></ruby>、お<ruby>弁当<rt>べんとう</rt></ruby>とお<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>買<rt>か</rt></ruby>った ところなので、<ruby>座<rt>すわ</rt></ruby><ruby>席<rt>せき</rt></ruby>に <ruby>座<rt>すわ</rt></ruby>って ゆっくり <ruby>出発<rt>しゅっぱつ</rt></ruby>を <ruby>待<rt>ま</rt></ruby>ちます。\n<ruby>定<rt>てい</rt></ruby><ruby>刻<rt>こく</rt></ruby><ruby>通<rt>とお</rt></ruby>りに <ruby>着<rt>つ</rt></ruby>くはずですから、<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>にも <ruby>余<rt>よ</rt></ruby><ruby>裕<rt>ゆう</rt></ruby>で <ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うでしょう。",
    "questions": [
      {
        "id": "dk46-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>今<rt>いま</rt></ruby> どこに いますか。",
        "options": [
          "<ruby>東京駅<rt>とうきょうえき</rt></ruby>の ホーム",
          "<ruby>新<rt>あたら</rt></ruby><ruby>大阪<rt>おおさか</rt></ruby><ruby>駅<rt>えき</rt></ruby>の <ruby>改札<rt>かいさつ</rt></ruby>",
          "<ruby>飛行機<rt>ひこうき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>",
          "ホテルの ロビー"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「私は 今、東京駅の ホームに います。」"
      },
      {
        "id": "dk46-2",
        "question": "<ruby>新幹線<rt>しんかんせん</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>に <ruby>発<rt>はつ</rt></ruby><ruby>車<rt>くるま</rt></ruby>する はずですか。",
        "options": [
          "10<ruby>時<rt>じ</rt></ruby>ちょうど",
          "9<ruby>時<rt>じ</rt></ruby>30<ruby>分<rt>ふん</rt></ruby>",
          "11<ruby>時<rt>じ</rt></ruby>15<ruby>分<rt>ふん</rt></ruby>",
          "12<ruby>時<rt>じ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「10時ちょうどに 発車する はずです。」"
      },
      {
        "id": "dk46-3",
        "question": "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>く <ruby>後輩<rt>こうはい</rt></ruby>は どんな <ruby>人<rt>ひと</rt></ruby>ですか。",
        "options": [
          "<ruby>先週<rt>せんしゅう</rt></ruby> <ruby>入<rt>はい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>した ばかりの <ruby>人<rt>ひと</rt></ruby>",
          "10<ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>からの ベテラン",
          "<ruby>外国人<rt>がいこくじん</rt></ruby>の <ruby>友達<rt>ともだち</rt></ruby>",
          "<ruby>大学<rt>だいがく</rt></ruby>の <ruby>教<rt>おし</rt></ruby><ruby>授<rt>じゅ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「先週 入社した ばかりの 後輩と 一緒に...」"
      },
      {
        "id": "dk46-4",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は たった<ruby>今<rt>いま</rt></ruby> <ruby>何<rt>なん</rt></ruby>を した ところですか。",
        "options": [
          "お<ruby>弁当<rt>べんとう</rt></ruby>とお<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>買<rt>か</rt></ruby>った ところ",
          "<ruby>切符<rt>きっぷ</rt></ruby>を なくした ところ",
          "<ruby>電話<rt>でんわ</rt></ruby>を かけた ところ",
          "<ruby>荷物<rt>にもつ</rt></ruby>を <ruby>預<rt>あず</rt></ruby>けた ところ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「たった今、お弁当とお茶を 買った ところなので...」"
      },
      {
        "id": "dk46-5",
        "question": "<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>は どうなりそうですか。",
        "options": [
          "<ruby>定<rt>てい</rt></ruby><ruby>刻<rt>こく</rt></ruby><ruby>通<rt>とお</rt></ruby>り <ruby>着<rt>つ</rt></ruby>くはずなので <ruby>余<rt>よ</rt></ruby><ruby>裕<rt>ゆう</rt></ruby>で <ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>う",
          "<ruby>遅刻<rt>ちこく</rt></ruby>して しまう",
          "<ruby>中止<rt>ちゅうし</rt></ruby>に なる",
          "<ruby>欠<rt>けつ</rt></ruby><ruby>席<rt>せき</rt></ruby>しなければ ならない"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「定刻通りに 着くはずですから、午後の 会議にも 余裕で 間に合うでしょう。」"
      }
    ]
  },
  {
    "id": "dokkai-47",
    "lessonId": "bai-47",
    "title": "Bài Đọc Hiểu - Bài 47 Minna",
    "subTitle": "日本人の お辞儀と 挨拶 (Cúi chào và nét văn hóa giao tiếp của người Nhật)",
    "description": "Đoạn văn tìm hiểu về phong tục cúi chào (ojigi) và lời đồn trong giao tiếp ứng dụng 〜そうです nghe nói và 〜ようです hình như.",
    "passage": "<ruby>日本人<rt>にほんじん</rt></ruby>は <ruby>挨拶<rt>あいさつ</rt></ruby>する ときに、<ruby>頭<rt>あたま</rt></ruby>を <ruby>下げ<rt>さげ</rt></ruby>て お<ruby>辞<rt>や</rt></ruby><ruby>儀<rt>ぎ</rt></ruby>を します。\n<ruby>本<rt>ほん</rt></ruby>に よると、お<ruby>辞<rt>や</rt></ruby><ruby>儀<rt>ぎ</rt></ruby>には <ruby>角<rt>かど</rt></ruby><ruby>度<rt>ど</rt></ruby>によって「<ruby>会<rt>あ</rt></ruby><ruby>釈<rt>しゃく</rt></ruby>」「<ruby>敬<rt>けい</rt></ruby><ruby>礼<rt>れい</rt></ruby>」「<ruby>最<rt>もっと</rt></ruby><ruby>敬<rt>けい</rt></ruby><ruby>礼<rt>れい</rt></ruby>」という 3つの <ruby>種<rt>しゅ</rt></ruby><ruby>類<rt>るい</rt></ruby>が あるそうです。\nビジネスの <ruby>場<rt>じょう</rt></ruby><ruby>面<rt>めん</rt></ruby>では、30<ruby>度<rt>ど</rt></ruby>から 45<ruby>度<rt>ど</rt></ruby>くらい <ruby>深<rt>ふか</rt></ruby>く <ruby>頭<rt>あたま</rt></ruby>を <ruby>下<rt>さ</rt></ruby>げるのが <ruby>一<rt>いち</rt></ruby><ruby>般<rt>はん</rt></ruby><ruby>的<rt>てき</rt></ruby>だそうです。\nオフィスを <ruby>見<rt>み</rt></ruby>ると、<ruby>社員<rt>しゃいん</rt></ruby>たちが <ruby>丁寧<rt>ていねい</rt></ruby>な お<ruby>辞<rt>や</rt></ruby><ruby>儀<rt>ぎ</rt></ruby>を しながら <ruby>挨拶<rt>あいさつ</rt></ruby>して います。とても <ruby>礼<rt>れい</rt></ruby><ruby>儀<rt>ぎ</rt></ruby><ruby>正<rt>ただ</rt></ruby>しい ようです。\n<ruby>外<rt>そと</rt></ruby>から <ruby>鳥<rt>とり</rt></ruby>の いい <ruby>声<rt>こえ</rt></ruby>が して、<ruby>爽<rt>さわ</rt></ruby>やかな <ruby>朝<rt>あさ</rt></ruby>が <ruby>始<rt>はじ</rt></ruby>まりました。<ruby>私<rt>わたし</rt></ruby>も <ruby>笑<rt>わら</rt></ruby><ruby>顔<rt>かお</rt></ruby>で「おはようございます」と <ruby>挨拶<rt>あいさつ</rt></ruby>したいです。",
    "questions": [
      {
        "id": "dk47-1",
        "question": "<ruby>日本人<rt>にほんじん</rt></ruby>は <ruby>挨拶<rt>あいさつ</rt></ruby>する ときに <ruby>何<rt>なん</rt></ruby>を しますか。",
        "options": [
          "<ruby>頭<rt>あたま</rt></ruby>を <ruby>下げ<rt>さげ</rt></ruby>て お<ruby>辞<rt>や</rt></ruby><ruby>儀<rt>ぎ</rt></ruby>を する",
          "<ruby>握<rt>にぎ</rt></ruby><ruby>手<rt>て</rt></ruby>を する",
          "ハグを する",
          "<ruby>手<rt>て</rt></ruby>を <ruby>振<rt>ふ</rt></ruby>る"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「日本人は 挨拶する ときに、頭を 下げて お辞儀を します。」"
      },
      {
        "id": "dk47-2",
        "question": "<ruby>本<rt>ほん</rt></ruby>に よると お<ruby>辞<rt>や</rt></ruby><ruby>儀<rt>ぎ</rt></ruby>には <ruby>何<rt>なん</rt></ruby><ruby>種<rt>しゅ</rt></ruby><ruby>類<rt>るい</rt></ruby>の <ruby>形<rt>けい</rt></ruby><ruby>式<rt>しき</rt></ruby>が あるそうですか。",
        "options": [
          "3つの <ruby>種<rt>しゅ</rt></ruby><ruby>類<rt>るい</rt></ruby>",
          "1つ だけ",
          "5つの <ruby>種<rt>しゅ</rt></ruby><ruby>類<rt>るい</rt></ruby>",
          "10の <ruby>種<rt>しゅ</rt></ruby><ruby>類<rt>るい</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「お辞儀には 角度によって「会釈」「敬礼」「最敬礼」という 3つの 種類が あるそうです。」"
      },
      {
        "id": "dk47-3",
        "question": "ビジネスの <ruby>場<rt>じょう</rt></ruby><ruby>面<rt>めん</rt></ruby>では <ruby>何度<rt>なんど</rt></ruby>くらい <ruby>頭<rt>あたま</rt></ruby>を <ruby>下<rt>さ</rt></ruby>げるそうですか。",
        "options": [
          "30<ruby>度<rt>ど</rt></ruby>から 45<ruby>度<rt>ど</rt></ruby>くらい",
          "10<ruby>度<rt>ど</rt></ruby>くらい",
          "90<ruby>度<rt>ど</rt></ruby> <ruby>直<rt>なお</rt></ruby><ruby>角<rt>かど</rt></ruby>に",
          "<ruby>全<rt>まった</rt></ruby>く <ruby>下げ<rt>さげ</rt></ruby>ない"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「ビジネスの 場面では、30度から 45度くらい 深く 頭を 下げるのが 一般的だそうです。」"
      },
      {
        "id": "dk47-4",
        "question": "<ruby>社員<rt>しゃいん</rt></ruby>たちを <ruby>見<rt>み</rt></ruby>て <ruby>筆者<rt>ひっしゃ</rt></ruby>は どう <ruby>感<rt>かん</rt></ruby>じましたか。",
        "options": [
          "とても <ruby>礼<rt>れい</rt></ruby><ruby>儀<rt>ぎ</rt></ruby><ruby>正<rt>ただ</rt></ruby>しい ようだと <ruby>感<rt>かん</rt></ruby>じた",
          "<ruby>不<rt>ふ</rt></ruby><ruby>親切<rt>しんせつ</rt></ruby>な ようだと <ruby>感<rt>かん</rt></ruby>じた",
          "やる<ruby>気<rt>き</rt></ruby>が なさそうだと <ruby>思<rt>おも</rt></ruby>った",
          "<ruby>怒<rt>おこ</rt></ruby>って いるようだと <ruby>思<rt>おも</rt></ruby>った"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「とても 礼儀正しい ようです。」"
      },
      {
        "id": "dk47-5",
        "question": "<ruby>外<rt>そと</rt></ruby>から どんな <ruby>音<rt>おと</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえましたか。",
        "options": [
          "<ruby>鳥<rt>とり</rt></ruby>の いい <ruby>声<rt>こえ</rt></ruby>",
          "<ruby>車<rt>くるま</rt></ruby>の <ruby>騒<rt>さわ</rt></ruby><ruby>音<rt>おと</rt></ruby>",
          "<ruby>雨<rt>あめ</rt></ruby>の <ruby>音<rt>おと</rt></ruby>",
          "<ruby>警<rt>けい</rt></ruby><ruby>報<rt>ほう</rt></ruby>の <ruby>音<rt>おと</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「外から 鳥の いい 声が して、爽やかな 朝が 始まりました。」"
      }
    ]
  },
  {
    "id": "dokkai-48",
    "lessonId": "bai-48",
    "title": "Bài Đọc Hiểu - Bài 48 Minna",
    "subTitle": "子どもの 個性と 習い事 (Năng khiếu của con trẻ và việc học ngoại khóa)",
    "description": "Đoạn văn kể về quan điểm giáo dục con cái tự do khám phá ứng dụng thể sai khiến 使役形.",
    "passage": "<ruby>日本<rt>にほん</rt></ruby>では、たくさんの <ruby>小<rt>ちい</rt></ruby><ruby>学生<rt>がくせい</rt></ruby>が ピアノや <ruby>水泳<rt>すいえい</rt></ruby>、<ruby>英語<rt>えいご</rt></ruby>などを <ruby>習<rt>なら</rt></ruby>って います。\n<ruby>私<rt>わたし</rt></ruby>の <ruby>友<rt>とも</rt></ruby><ruby>人<rt>ひと</rt></ruby>の <ruby>山田<rt>やまだ</rt></ruby>さんは、<ruby>息子<rt>むすこ</rt></ruby>に <ruby>毎週<rt>まいしゅう</rt></ruby> サッカーを <ruby>習<rt>なら</rt></ruby>わせています。\nしかし、<ruby>山田<rt>やまだ</rt></ruby>さんは「<ruby>親<rt>した</rt></ruby>が <ruby>無理<rt>むり</rt></ruby>に <ruby>習<rt>なら</rt></ruby>わせるのは よくない」と <ruby>言<rt>い</rt></ruby>って います。\n<ruby>子<rt>こ</rt></ruby>どもが <ruby>興味<rt>きょうみ</rt></ruby>を <ruby>持<rt>も</rt></ruby>った ことを <ruby>自由<rt>じゆう</rt></ruby>に やらせて あげることが <ruby>大切<rt>たいせつ</rt></ruby>だと <ruby>考<rt>かんが</rt></ruby>えて います。\n「すみません、<ruby>今日<rt>きょう</rt></ruby>は <ruby>息子<rt>むすこ</rt></ruby>の <ruby>試合<rt>しあい</rt></ruby>が あるので、<ruby>早<rt>はや</rt></ruby>く <ruby>帰<rt>かえ</rt></ruby>らせて いただけませんか」と <ruby>部長<rt>ぶちょう</rt></ruby>に <ruby>相<rt>あい</rt></ruby><ruby>談<rt>だん</rt></ruby>して、<ruby>応援<rt>おうえん</rt></ruby>に <ruby>行<rt>い</rt></ruby>きました。\n<ruby>子<rt>こ</rt></ruby>どもの <ruby>笑<rt>わら</rt></ruby><ruby>顔<rt>かお</rt></ruby>を <ruby>見<rt>み</rt></ruby>るのが <ruby>親<rt>した</rt></ruby>にとって <ruby>一番<rt>いちばん</rt></ruby>の <ruby>幸<rt>しあわ</rt></ruby>せです。",
    "questions": [
      {
        "id": "dk48-1",
        "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>息子<rt>むすこ</rt></ruby>に <ruby>何<rt>なん</rt></ruby>を <ruby>習<rt>なら</rt></ruby>わせていますか。",
        "options": [
          "サッカー",
          "ピアノ",
          "<ruby>水泳<rt>すいえい</rt></ruby>",
          "<ruby>習<rt>なら</rt></ruby><ruby>字<rt>じ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「息子に 毎週 サッカーを 習わせています。」"
      },
      {
        "id": "dk48-2",
        "question": "<ruby>山田<rt>やまだ</rt></ruby>さんの <ruby>教育<rt>きょういく</rt></ruby><ruby>方<rt>かた</rt></ruby><ruby>針<rt>はり</rt></ruby>として <ruby>正<rt>ただ</rt></ruby>しいものは どれですか。",
        "options": [
          "<ruby>子<rt>こ</rt></ruby>どもが <ruby>興味<rt>きょうみ</rt></ruby>を <ruby>持<rt>も</rt></ruby>った ことを <ruby>自由<rt>じゆう</rt></ruby>に やらせる",
          "<ruby>親<rt>した</rt></ruby>が <ruby>決<rt>き</rt></ruby>めた <ruby>習<rt>なら</rt></ruby>い<ruby>事<rt>こと</rt></ruby>を <ruby>強<rt>つよ</rt></ruby><ruby>制<rt>せい</rt></ruby>する",
          "<ruby>何<rt>なん</rt></ruby><ruby>一<rt>いち</rt></ruby>つ <ruby>習<rt>なら</rt></ruby>わせない",
          "<ruby>勉強<rt>べんきょう</rt></ruby>だけ させる"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「子どもが 興味を 持った ことを 自由に やらせて あげることが 大切だと 考えて います。」"
      },
      {
        "id": "dk48-3",
        "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>部長<rt>ぶちょう</rt></ruby>に <ruby>何<rt>なん</rt></ruby>と お<ruby>願<rt>ねが</rt></ruby>いしましたか。",
        "options": [
          "<ruby>早<rt>はや</rt></ruby>く <ruby>帰<rt>かえ</rt></ruby>らせて いただけませんか",
          "<ruby>給料<rt>きゅうりょう</rt></ruby>を <ruby>上<rt>うえ</rt></ruby>げて いただけませんか",
          "<ruby>休<rt>やす</rt></ruby>みを 1ヶ<ruby>月<rt>がつ</rt></ruby> ください",
          "<ruby>息子<rt>むすこ</rt></ruby>を <ruby>採<rt>さい</rt></ruby><ruby>用<rt>よう</rt></ruby>して ください"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「今日は 息子の 試合が あるので、早く 帰らせて いただけませんか」"
      },
      {
        "id": "dk48-4",
        "question": "<ruby>早<rt>はや</rt></ruby>く <ruby>帰<rt>かえ</rt></ruby>って どこへ <ruby>行<rt>い</rt></ruby>きましたか。",
        "options": [
          "<ruby>息子<rt>むすこ</rt></ruby>の <ruby>試合<rt>しあい</rt></ruby>の <ruby>応援<rt>おうえん</rt></ruby>",
          "<ruby>病院<rt>びょういん</rt></ruby>",
          "<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>",
          "<ruby>旅行<rt>りょこう</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「相談して、応援に 行きました。」"
      },
      {
        "id": "dk48-5",
        "question": "<ruby>親<rt>した</rt></ruby>にとって <ruby>一番<rt>いちばん</rt></ruby>の <ruby>幸<rt>しあわ</rt></ruby>せは <ruby>何<rt>なん</rt></ruby>ですか。",
        "options": [
          "<ruby>子<rt>こ</rt></ruby>どもの <ruby>笑<rt>わら</rt></ruby><ruby>顔<rt>かお</rt></ruby>を <ruby>見<rt>み</rt></ruby>ること",
          "お<ruby>金<rt>かね</rt></ruby>を <ruby>稼<rt>かせ</rt></ruby>ぐこと",
          "<ruby>昇<rt>しょう</rt></ruby><ruby>進<rt>すす</rt></ruby>すること",
          "<ruby>贅<rt>ぜい</rt></ruby><ruby>沢<rt>たく</rt></ruby>な ご<ruby>飯<rt>はん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べること"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「子どもの 笑顔を 見るのが 親にとって 一番の 幸せです。」"
      }
    ]
  },
  {
    "id": "dokkai-49",
    "lessonId": "bai-49",
    "title": "Bài Đọc Hiểu - Bài 49 Minna",
    "subTitle": "陶芸作家の 先生への インタビュー (Phỏng vấn nghệ nhân gốm sứ)",
    "description": "Đoạn văn phỏng vấn nghệ nhân gốm sứ nổi tiếng ứng dụng tôn kính ngữ 尊敬語.",
    "passage": "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は <ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>陶<rt>とう</rt></ruby><ruby>芸<rt>げい</rt></ruby><ruby>家<rt>いえ</rt></ruby>の <ruby>佐藤<rt>さとう</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の <ruby>工<rt>こう</rt></ruby><ruby>房<rt>ぼう</rt></ruby>を <ruby>訪<rt>おとず</rt></ruby>ねました。\n<ruby>先生<rt>せんせい</rt></ruby>は <ruby>毎朝<rt>まいあさ</rt></ruby> 6<ruby>時<rt>じ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きられて、<ruby>夜<rt>よる</rt></ruby> <ruby>遅<rt>おそ</rt></ruby>くまで <ruby>作<rt>つく</rt></ruby><ruby>品<rt>ひん</rt></ruby>を お<ruby>作<rt>つく</rt></ruby>りに なります。\n「<ruby>先生<rt>せんせい</rt></ruby>、この <ruby>美<rt>うつく</rt></ruby>しい お<ruby>皿<rt>さら</rt></ruby>は どちらで ご<ruby>覧<rt>らん</rt></ruby>に なれますか」と <ruby>伺<rt>うかが</rt></ruby>うと、\n<ruby>先生<rt>せんせい</rt></ruby>は <ruby>笑<rt>わら</rt></ruby><ruby>顔<rt>かお</rt></ruby>で「<ruby>来月<rt>らいげつ</rt></ruby>、<ruby>東京<rt>とうきょう</rt></ruby>の デパートで <ruby>個<rt>こ</rt></ruby><ruby>展<rt>てん</rt></ruby>を <ruby>開<rt>ひら</rt></ruby>きますから、ぜひ お<ruby>越<rt>こ</rt></ruby>し ください」と おっしゃいました。\n<ruby>先生<rt>せんせい</rt></ruby>は <ruby>日本<rt>にほん</rt></ruby>だけでなく、<ruby>海<rt>うみ</rt></ruby><ruby>外<rt>そと</rt></ruby>の <ruby>展<rt>てん</rt></ruby><ruby>示<rt>じ</rt></ruby><ruby>会<rt>あ</rt></ruby>にも <ruby>招待<rt>しょうたい</rt></ruby>されて いらっしゃいます。\n<ruby>伝<rt>つた</rt></ruby><ruby>統<rt>とう</rt></ruby>を <ruby>守<rt>まも</rt></ruby>りながら、<ruby>新<rt>あたら</rt></ruby>しい <ruby>技<rt>ぎ</rt></ruby><ruby>法<rt>ほう</rt></ruby>に <ruby>挑<rt>ちょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>なさる <ruby>姿<rt>すがた</rt></ruby>に、<ruby>深<rt>ふか</rt></ruby>く <ruby>感<rt>かん</rt></ruby><ruby>動<rt>うご</rt></ruby>しました。",
    "questions": [
      {
        "id": "dk49-1",
        "question": "<ruby>佐藤<rt>さとう</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は <ruby>何<rt>なん</rt></ruby>の <ruby>作<rt>つく</rt></ruby><ruby>家<rt>いえ</rt></ruby>ですか。",
        "options": [
          "<ruby>陶<rt>とう</rt></ruby><ruby>芸<rt>げい</rt></ruby><ruby>作<rt>つく</rt></ruby><ruby>家<rt>いえ</rt></ruby> (<ruby>陶<rt>とう</rt></ruby><ruby>芸<rt>げい</rt></ruby><ruby>家<rt>いえ</rt></ruby>)",
          "<ruby>絵<rt>え</rt></ruby>の <ruby>先生<rt>せんせい</rt></ruby>",
          "<ruby>写真<rt>しゃしん</rt></ruby><ruby>家<rt>いえ</rt></ruby>",
          "<ruby>小説<rt>しょうせつ</rt></ruby><ruby>家<rt>いえ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「有名な 陶芸家の 佐藤先生の 工房を 訪ねました。」"
      },
      {
        "id": "dk49-2",
        "question": "<ruby>佐藤<rt>さとう</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は <ruby>毎朝<rt>まいあさ</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きられますか。",
        "options": [
          "<ruby>朝<rt>あさ</rt></ruby> 6<ruby>時<rt>じ</rt></ruby>",
          "<ruby>朝<rt>あさ</rt></ruby> 5<ruby>時<rt>じ</rt></ruby>",
          "<ruby>朝<rt>あさ</rt></ruby> 8<ruby>時<rt>じ</rt></ruby>",
          "<ruby>朝<rt>あさ</rt></ruby> 7<ruby>時<rt>じ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「先生は 毎朝 6時に 起きられて...」"
      },
      {
        "id": "dk49-3",
        "question": "<ruby>作<rt>つく</rt></ruby><ruby>品<rt>ひん</rt></ruby>は <ruby>来月<rt>らいげつ</rt></ruby> どこで <ruby>見<rt>み</rt></ruby>られますか。",
        "options": [
          "<ruby>東京<rt>とうきょう</rt></ruby>の デパートの <ruby>個<rt>こ</rt></ruby><ruby>展<rt>てん</rt></ruby>",
          "<ruby>京都<rt>きょうと</rt></ruby>の お<ruby>寺<rt>てら</rt></ruby>",
          "パリの ルーヴル<ruby>美術館<rt>びじゅつかん</rt></ruby>",
          "<ruby>先生<rt>せんせい</rt></ruby>の <ruby>自<rt>じ</rt></ruby><ruby>宅<rt>たく</rt></ruby> だけ"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「来月、東京の デパートで 個展を 開きますから、ぜひ お越し ください」"
      },
      {
        "id": "dk49-4",
        "question": "<ruby>佐藤<rt>さとう</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は <ruby>日本<rt>にほん</rt></ruby>の ほかに どこへ <ruby>招待<rt>しょうたい</rt></ruby>されて いらっしゃいますか。",
        "options": [
          "<ruby>海<rt>うみ</rt></ruby><ruby>外<rt>そと</rt></ruby>の <ruby>展<rt>てん</rt></ruby><ruby>示<rt>じ</rt></ruby><ruby>会<rt>あ</rt></ruby>",
          "<ruby>宇宙<rt>うちゅう</rt></ruby>ステーション",
          "<ruby>無<rt>な</rt></ruby><ruby>人<rt>ひと</rt></ruby><ruby>島<rt>とう</rt></ruby>",
          "<ruby>国<rt>くに</rt></ruby><ruby>会<rt>あ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「海外の 展示会にも 招待されて いらっしゃいます。」"
      },
      {
        "id": "dk49-5",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>先生<rt>せんせい</rt></ruby>の どんな <ruby>姿<rt>すがた</rt></ruby>に <ruby>感<rt>かん</rt></ruby><ruby>動<rt>うご</rt></ruby>しましたか。",
        "options": [
          "<ruby>伝<rt>つた</rt></ruby><ruby>統<rt>とう</rt></ruby>を <ruby>守<rt>まも</rt></ruby>りながら <ruby>新<rt>あたら</rt></ruby>しい <ruby>技<rt>ぎ</rt></ruby><ruby>法<rt>ほう</rt></ruby>に <ruby>挑<rt>ちょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>なさる <ruby>姿<rt>すがた</rt></ruby>",
          "お<ruby>金<rt>かね</rt></ruby><ruby>持<rt>も</rt></ruby>ちな <ruby>姿<rt>すがた</rt></ruby>",
          "お<ruby>酒<rt>さけ</rt></ruby>を たくさん <ruby>飲<rt>の</rt></ruby>む <ruby>姿<rt>すがた</rt></ruby>",
          "テレビに <ruby>出<rt>だ</rt></ruby><ruby>演<rt>えん</rt></ruby>する <ruby>姿<rt>すがた</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「伝統を 守りながら、新しい 技法に 挑戦なさる 姿に、深く 感動しました。」"
      }
    ]
  },
  {
    "id": "dokkai-50",
    "lessonId": "bai-50",
    "title": "Bài Đọc Hiểu - Bài 50 Minna",
    "subTitle": "取引先への 初訪問と ご挨拶 (Chuyến thăm đối tác và phép tắc giao tiếp kinh doanh)",
    "description": "Đoạn văn kể về buổi gặp gỡ làm việc đầu tiên với công ty đối tác Nhật Bản ứng dụng khiêm nhường ngữ 謙譲語 và lịch sự ngữ 丁寧語.",
    "passage": "<ruby>本<rt>ほん</rt></ruby><ruby>日<rt>にち</rt></ruby> <ruby>午前<rt>ごぜん</rt></ruby> 10<ruby>時<rt>じ</rt></ruby>に、<ruby>私<rt>わたし</rt></ruby>は <ruby>上<rt>うえ</rt></ruby><ruby>司<rt>し</rt></ruby>と <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>取<rt>と</rt></ruby><ruby>引<rt>ひ</rt></ruby><ruby>先<rt>さき</rt></ruby>の パワー<ruby>電気<rt>でんき</rt></ruby>へ <ruby>伺<rt>うかが</rt></ruby>いました。\n<ruby>受付<rt>うけつけ</rt></ruby>で「グエンと <ruby>申<rt>もう</rt></ruby>します。10<ruby>時<rt>じ</rt></ruby>に <ruby>山田<rt>やまだ</rt></ruby><ruby>部長<rt>ぶちょう</rt></ruby>とお<ruby>約束<rt>やくそく</rt></ruby>を いただいて おります」と <ruby>伝<rt>つた</rt></ruby>えました。\n<ruby>応<rt>おう</rt></ruby><ruby>接<rt>せつ</rt></ruby><ruby>室<rt>しつ</rt></ruby>に ご<ruby>案内<rt>あんない</rt></ruby>いただき、しばらく お<ruby>待<rt>ま</rt></ruby>ちして おりました。\n<ruby>山田<rt>やまだ</rt></ruby><ruby>部長<rt>ぶちょう</rt></ruby>が <ruby>来<rt>き</rt></ruby>られた <ruby>時<rt>じ</rt></ruby>、「<ruby>初<rt>はじ</rt></ruby>めまして。IMCの グエンと <ruby>申<rt>もう</rt></ruby>します。<ruby>本<rt>ほん</rt></ruby><ruby>日<rt>にち</rt></ruby>は お<ruby>時間<rt>じかん</rt></ruby>を いただき、<ruby>心<rt>しん</rt></ruby>から <ruby>感謝<rt>かんしゃ</rt></ruby>いたします」と <ruby>挨拶<rt>あいさつ</rt></ruby>いたしました。\n<ruby>持<rt>も</rt></ruby><ruby>参<rt>まい</rt></ruby>した <ruby>新<rt>あたら</rt></ruby>しい カタログを <ruby>拝見<rt>はいけん</rt></ruby>して いただき、<ruby>新<rt>あたら</rt></ruby><ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>の <ruby>特<rt>とく</rt></ruby><ruby>徴<rt>ちょう</rt></ruby>を ご<ruby>説明<rt>せつめい</rt></ruby>いたしました。\nビジネスの <ruby>現<rt>げん</rt></ruby><ruby>場<rt>じょう</rt></ruby>で <ruby>正<rt>ただ</rt></ruby>しい <ruby>敬語<rt>けいご</rt></ruby>を <ruby>使<rt>つか</rt></ruby>うのは <ruby>緊張<rt>きんちょう</rt></ruby>しますが、とても <ruby>良<rt>よ</rt></ruby>い <ruby>経験<rt>けいけん</rt></ruby>に なりました。",
    "questions": [
      {
        "id": "dk50-1",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>今日<rt>きょう</rt></ruby> どこへ <ruby>伺<rt>うかが</rt></ruby>いましたか。",
        "options": [
          "<ruby>取<rt>と</rt></ruby><ruby>引<rt>ひ</rt></ruby><ruby>先<rt>さき</rt></ruby>の パワー<ruby>電気<rt>でんき</rt></ruby>",
          "<ruby>大学<rt>だいがく</rt></ruby>の <ruby>研究<rt>けんきゅう</rt></ruby><ruby>室<rt>しつ</rt></ruby>",
          "<ruby>病院<rt>びょういん</rt></ruby>の <ruby>診<rt>しん</rt></ruby><ruby>察<rt>さつ</rt></ruby><ruby>室<rt>しつ</rt></ruby>",
          "<ruby>警察<rt>けいさつ</rt></ruby><ruby>署<rt>しょ</rt></ruby>"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「本日 午前 10時に、私は 上司と 一緒に 取引先の パワー電気へ 伺いました。」"
      },
      {
        "id": "dk50-2",
        "question": "<ruby>受付<rt>うけつけ</rt></ruby>で <ruby>自分<rt>じぶん</rt></ruby>の <ruby>名前<rt>なまえ</rt></ruby>を <ruby>何<rt>なん</rt></ruby>と <ruby>言<rt>い</rt></ruby>いましたか。",
        "options": [
          "「グエンと <ruby>申<rt>もう</rt></ruby>します」",
          "「グエン<ruby>様<rt>さま</rt></ruby>だ」",
          "「グエンと おっしゃいます」",
          "「グエンで いらっしゃる」"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「受付で「グエンと 申します」と 伝えました。」"
      },
      {
        "id": "dk50-3",
        "question": "<ruby>誰<rt>だれ</rt></ruby>とお<ruby>約束<rt>やくそく</rt></ruby>を いただいて いましたか。",
        "options": [
          "<ruby>山田<rt>やまだ</rt></ruby><ruby>部長<rt>ぶちょう</rt></ruby>",
          "<ruby>社長<rt>しゃちょう</rt></ruby>",
          "<ruby>課長<rt>かちょう</rt></ruby>",
          "<ruby>田中<rt>たなか</rt></ruby>さん"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「10時に 山田部長とお約束を いただいて おります」"
      },
      {
        "id": "dk50-4",
        "question": "<ruby>山田<rt>やまだ</rt></ruby><ruby>部長<rt>ぶちょう</rt></ruby>に <ruby>何<rt>なん</rt></ruby>を ご<ruby>説明<rt>せつめい</rt></ruby>いたしましたか。",
        "options": [
          "カタログを <ruby>拝見<rt>はいけん</rt></ruby>して いただき、<ruby>新<rt>あたら</rt></ruby><ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>の <ruby>特<rt>とく</rt></ruby><ruby>徴<rt>ちょう</rt></ruby>を <ruby>説明<rt>せつめい</rt></ruby>した",
          "<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>愚<rt>ぐ</rt></ruby><ruby>痴<rt>ち</rt></ruby>を <ruby>話<rt>はな</rt></ruby>した",
          "プライベートの <ruby>旅行<rt>りょこう</rt></ruby>の <ruby>話<rt>はなし</rt></ruby>を した",
          "ベトナムの <ruby>観光<rt>かんこう</rt></ruby><ruby>案内<rt>あんない</rt></ruby>を した"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「持参した 新しい カタログを 拝見して いただき、新商品の 特徴を ご説明いたしました。」"
      },
      {
        "id": "dk50-5",
        "question": "<ruby>筆者<rt>ひっしゃ</rt></ruby>は ビジネスの <ruby>敬語<rt>けいご</rt></ruby>について どう <ruby>感<rt>かん</rt></ruby>じましたか。",
        "options": [
          "<ruby>緊張<rt>きんちょう</rt></ruby>するが、とても <ruby>良<rt>よ</rt></ruby>い <ruby>経験<rt>けいけん</rt></ruby>に なった",
          "<ruby>簡単<rt>かんたん</rt></ruby>すぎて つまらなかった",
          "<ruby>意味<rt>いみ</rt></ruby>が <ruby>分<rt>ふん</rt></ruby>からなくて <ruby>怒<rt>おこ</rt></ruby>られた",
          "<ruby>二<rt>に</rt></ruby><ruby>度<rt>ど</rt></ruby>と <ruby>使<rt>つか</rt></ruby>いたくないと <ruby>思<rt>おも</rt></ruby>った"
        ],
        "correctIdx": 0,
        "explanation": "Trong bài:「ビジネスの 現場で 正しい 敬語を 使うのは 緊張しますが、とても 良い 経験に なりました。」"
      }
    ]
  }
];
