const lessons_16_20 = [
  {
    "id": "bai-16",
    "title": "Bài 16: Nối Câu & Chuỗi Hành Động Liên Tiếp",
    "level": "Minna no Nihongo N5 (Bài 16)",
    "badge": "Nối câu & Trình tự",
    "description": "Nắm vững cách nối câu bằng thể Te của động từ (V-て、V-て), nối tính từ (A-くて, Na/N-で), cấu trúc V-てから (sau khi), miêu tả đặc điểm đối tượng (N1 は N2 が A です), và từ để hỏi cách làm (どうやって).",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>乗<rt>の</rt></ruby>ります</span>",
        "hiragana": "のります",
        "meaning": "Lên [tàu, xe] (đi với trợ từ に)",
        "type": "Động từ nhóm 1",
        "example": "電車に 乗ります。(Lên tàu điện.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>降<rt>お</rt></ruby>ります</span>",
        "hiragana": "おります",
        "meaning": "Xuống [tàu, xe] (đi với trợ từ を)",
        "type": "Động từ nhóm 2",
        "example": "バスを 降ります。(Xuống xe buýt.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えます</span>",
        "hiragana": "のりかえます",
        "meaning": "Chuyển tàu, đổi xe",
        "type": "Động từ nhóm 2",
        "example": "新宿で 乗り換えます。(Đổi tàu ở Shinjuku.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>浴<rt>あ</rt></ruby>びます</span>",
        "hiragana": "あびます",
        "meaning": "Tắm [vòi sen] (シャワーを〜)",
        "type": "Động từ nhóm 2",
        "example": "シャワーを 浴びます。(Tắm vòi sen.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>入<rt>い</rt></ruby>れます</span>",
        "hiragana": "いれます",
        "meaning": "Cho vào, bỏ vào",
        "type": "Động từ nhóm 2",
        "example": "かばんに 本を 入れます。(Bỏ sách vào cặp.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>出<rt>だ</rt></ruby>します</span>",
        "hiragana": "だします",
        "meaning": "Lấy ra, nộp [báo cáo]",
        "type": "Động từ nhóm 1",
        "example": "宿題を 出します。(Nộp bài tập về nhà.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>下<rt>お</rt></ruby>ろします</span>",
        "hiragana": "おろします",
        "meaning": "Rút [tiền]",
        "type": "Động từ nhóm 1",
        "example": "銀行で お金を 下ろします。(Rút tiền ở ngân hàng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>入<rt>はい</rt></ruby>ります</span>",
        "hiragana": "はいります",
        "meaning": "Vào [đại học] (大学に〜)",
        "type": "Động từ nhóm 1",
        "example": "大学に 入ります。(Vào học đại học.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>出<rt>で</rt></ruby>ます</span>",
        "hiragana": "でます",
        "meaning": "Rời khỏi, tốt nghiệp [đại học] (大学を〜)",
        "type": "Động từ nhóm 2",
        "example": "大学を 出ます。(Tốt nghiệp đại học.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>押<rt>お</rt></ruby>します</span>",
        "hiragana": "おします",
        "meaning": "Bấm, ấn [nút]",
        "type": "Động từ nhóm 1",
        "example": "ボタンを 押します。(Bấm nút.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>若<rt>わか</rt></ruby>い</span>",
        "hiragana": "わかい",
        "meaning": "Trẻ tuổi",
        "type": "Tính từ (i)",
        "example": "若い 先生 (Thầy giáo trẻ)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>長<rt>なが</rt></ruby>い</span>",
        "hiragana": "ながい",
        "meaning": "Dài",
        "type": "Tính từ (i)",
        "example": "髪が 長いです。(Tóc dài.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>短<rt>みじか</rt></ruby>い</span>",
        "hiragana": "みじかい",
        "meaning": "Ngắn",
        "type": "Tính từ (i)",
        "example": "スカートが 短いです。(Váy ngắn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>明<rt>あか</rt></ruby>るい</span>",
        "hiragana": "あかるい",
        "meaning": "Sáng sủa, tươi sáng",
        "type": "Tính từ (i)",
        "example": "明るい 部屋 (Căn phòng sáng sủa)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>暗<rt>くら</rt></ruby>い</span>",
        "hiragana": "くらい",
        "meaning": "Tối tăm, u ám",
        "type": "Tính từ (i)",
        "example": "暗い 道 (Con đường tối)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>体<rt>からだ</rt></ruby></span>",
        "hiragana": "からだ",
        "meaning": "Thân thể, cơ thể",
        "type": "Danh từ",
        "example": "体に 気を つけます。(Giữ gìn sức khỏe cơ thể.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>頭<rt>あたま</rt></ruby></span>",
        "hiragana": "あたま",
        "meaning": "Đầu, đầu óc",
        "type": "Danh từ",
        "example": "頭が いいです。(Thông minh, đầu óc nhanh nhạy.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>髪<rt>かみ</rt></ruby></span>",
        "hiragana": "かみ",
        "meaning": "Tóc",
        "type": "Danh từ",
        "example": "黒い 髪 (Mái tóc đen)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>顔<rt>かお</rt></ruby></span>",
        "hiragana": "かお",
        "meaning": "Khuôn mặt",
        "type": "Danh từ",
        "example": "顔を 洗います。(Rửa mặt.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>目<rt>め</rt></ruby></span>",
        "hiragana": "め",
        "meaning": "Mắt",
        "type": "Danh từ",
        "example": "目が 大きいです。(Mắt to.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>耳<rt>みみ</rt></ruby></span>",
        "hiragana": "みみ",
        "meaning": "Tai",
        "type": "Danh từ",
        "example": "耳が 痛いです。(Đau tai.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>鼻<rt>はな</rt></ruby></span>",
        "hiragana": "はな",
        "meaning": "Mũi",
        "type": "Danh từ",
        "example": "鼻が 高いです。(Mũi cao.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>口<rt>くち</rt></ruby></span>",
        "hiragana": "くち",
        "meaning": "Miệng",
        "type": "Danh từ",
        "example": "口を 開けます。(Mở miệng ra.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>歯<rt>は</rt></ruby></span>",
        "hiragana": "は",
        "meaning": "Răng",
        "type": "Danh từ",
        "example": "歯を 磨きます。(Đánh răng.)"
      },
      {
        "kanji": "お<span class=\"furigana\"><ruby>腹<rt>なか</rt></ruby></span>",
        "hiragana": "おなか",
        "meaning": "Bụng",
        "type": "Danh từ",
        "example": "お腹が すきました。(Đói bụng rồi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>足<rt>あし</rt></ruby></span>",
        "hiragana": "あし",
        "meaning": "Chân",
        "type": "Danh từ",
        "example": "足が 長いです。(Chân dài.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>背<rt>せ</rt></ruby></span>",
        "hiragana": "せ",
        "meaning": "Chiều cao cơ thể (背が 高い/低い)",
        "type": "Danh từ",
        "example": "背が 高いです。(Dáng người cao.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>緑<rt>みどり</rt></ruby></span>",
        "hiragana": "みどり",
        "meaning": "Màu xanh lá, cây xanh",
        "type": "Danh từ",
        "example": "緑が 多い まち (Thành phố có nhiều cây xanh)"
      },
      {
        "kanji": "お<span class=\"furigana\"><ruby>寺<rt>てら</rt></ruby></span>",
        "hiragana": "おてら",
        "meaning": "Chùa Phật giáo",
        "type": "Danh từ",
        "example": "京都の お寺 (Ngôi chùa ở Kyoto)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>神社<rt>じんじゃ</rt></ruby></span>",
        "hiragana": "じんじゃ",
        "meaning": "Đền Thần đạo (Shinto)",
        "type": "Danh từ",
        "example": "有名な 神社 (Ngôi đền Thần đạo nổi tiếng)"
      },
      {
        "kanji": "どうやって",
        "hiragana": "どうやって",
        "meaning": "Làm thế nào, bằng cách nào (hỏi cách thức/phương tiện)",
        "type": "Phó từ",
        "example": "駅まで どうやって 行きますか。(Đến ga bằng cách nào?)"
      },
      {
        "kanji": "どの〜",
        "hiragana": "どの〜",
        "meaning": "Cái nào, người nào (trong nhóm từ 3 trở lên)",
        "type": "Đại từ chỉ định",
        "example": "どの 傘ですか。(Là cây dù nào vậy?)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>降<rt>お</rt></ruby>りる</span>",
        "hiragana": "おりる",
        "meaning": "Xuống ( xe, tàu..)",
        "type": "Động từ",
        "example": "降りるを べんきょうします。(Học từ 降りる.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>乗り換える<rt>のりかえる</rt></ruby></span>",
        "hiragana": "のりかえる",
        "meaning": "Sang xe, tàu",
        "type": "Động từ",
        "example": "乗り換えるを べんきょうします。(Học từ 乗り換える.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>浴<rt>あ</rt></ruby>びる</span>",
        "hiragana": "あびる",
        "meaning": "Tắm",
        "type": "Động từ",
        "example": "浴びるを べんきょうします。(Học từ 浴びる.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>入<rt>い</rt></ruby>れる</span>",
        "hiragana": "いれる",
        "meaning": "Cho vào, bỏ vào",
        "type": "Động từ",
        "example": "入れるを べんきょうします。(Học từ 入れる.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>出<rt>だ</rt></ruby>す</span>",
        "hiragana": "だす",
        "meaning": "Nộp ( báo cáo ), rút ( tiền )",
        "type": "Danh từ",
        "example": "出すを べんきょうします。(Học từ 出す.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>出<rt>で</rt></ruby>る</span>",
        "hiragana": "でる",
        "meaning": "Tốt nghiệp",
        "type": "Động từ",
        "example": "出るを べんきょうします。(Học từ 出る.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>押<rt>お</rt></ruby>す</span>",
        "hiragana": "おす",
        "meaning": "Nhấn, đẩy, xô, ấn, bấm",
        "type": "Danh từ",
        "example": "押すを べんきょうします。(Học từ 押す.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>乗<rt>の</rt></ruby>る</span>",
        "hiragana": "のる",
        "meaning": "Đi, Lên ( tàu, xe ), Cưỡi…",
        "type": "Động từ",
        "example": "乗るを べんきょうします。(Học từ 乗る.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>電車に乗る<rt>でんしゃにのる</rt></ruby></span>",
        "hiragana": "でんしゃにのる",
        "meaning": "Đi xe điện",
        "type": "Động từ",
        "example": "電車に乗るを べんきょうします。(Học từ 電車に乗る.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>電車を降りる<rt>でんしゃをおりる</rt></ruby></span>",
        "hiragana": "でんしゃをおりる",
        "meaning": "Xuống xe điện",
        "type": "Động từ",
        "example": "電車を降りるを べんきょうします。(Học từ 電車を降りる.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>お金を出す<rt>おかねをだす</rt></ruby></span>",
        "hiragana": "おかねをだす",
        "meaning": "Rút tiền",
        "type": "Danh từ",
        "example": "お金を出すを べんきょうします。(Học từ お金を出す.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>入<rt>はい</rt></ruby>る</span>",
        "hiragana": "はいる",
        "meaning": "Vào ( Đại học,..)",
        "type": "Động từ",
        "example": "入るを べんきょうします。(Học từ 入る.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>大学に入る<rt>だいがくにはいる</rt></ruby></span>",
        "hiragana": "だいがくにはいる",
        "meaning": "Vào Đại học",
        "type": "Động từ",
        "example": "大学に入るを べんきょうします。(Học từ 大学に入る.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>辞<rt>や</rt></ruby>める</span>",
        "hiragana": "やめる",
        "meaning": "Từ bỏ, bỏ, nghỉ, thôi ( việc, học )",
        "type": "Động từ",
        "example": "辞めるを べんきょうします。(Học từ 辞める.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>会社を辞める<rt>かいしゃをやめる</rt></ruby></span>",
        "hiragana": "かいしゃをやめる",
        "meaning": "Nghỉ làm",
        "type": "Động từ",
        "example": "会社を辞めるを べんきょうします。(Học từ 会社を辞める.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>背が高い<rt>せがたかい</rt></ruby></span>",
        "hiragana": "せがたかい",
        "meaning": "Cao ( vóc dáng )",
        "type": "Tính từ",
        "example": "背が高いを べんきょうします。(Học từ 背が高い.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>頭がいい<rt>あたまがいい</rt></ruby></span>",
        "hiragana": "あたまがいい",
        "meaning": "Thông minh",
        "type": "Tính từ",
        "example": "頭がいいを べんきょうします。(Học từ 頭がいい.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>留学生<rt>りゅうがくせい</rt></ruby></span>",
        "hiragana": "りゅうがくせい",
        "meaning": "Du học sinh",
        "type": "Danh từ",
        "example": "留学生を べんきょうします。(Học từ 留学生.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>一番<rt>いちばん</rt></ruby></span>",
        "hiragana": "いちばん",
        "meaning": "Hạng nhất, số một",
        "type": "Danh từ",
        "example": "一番を べんきょうします。(Học từ 一番.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>どの人<rt>どのひと</rt></ruby></span>",
        "hiragana": "どのひと",
        "meaning": "Người nào ?",
        "type": "Danh từ",
        "example": "どの人を べんきょうします。(Học từ どの人.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>お引き出しですか<rt>おひきだしですか</rt></ruby></span>",
        "hiragana": "おひきだしですか",
        "meaning": "Rút tiền phải không ?",
        "type": "Danh từ",
        "example": "お引き出しですかを べんきょうします。(Học từ お引き出しですか.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>次に<rt>つぎに</rt></ruby></span>",
        "hiragana": "つぎに",
        "meaning": "Tiếp theo, kế tiếp",
        "type": "Danh từ",
        "example": "次にを べんきょうします。(Học từ 次に.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>確認<rt>かくにん</rt></ruby></span>",
        "hiragana": "かくにん",
        "meaning": "Xác nhận",
        "type": "Danh từ",
        "example": "確認を べんきょうします。(Học từ 確認.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>金額<rt>きんがく</rt></ruby></span>",
        "hiragana": "きんがく",
        "meaning": "Số tiền",
        "type": "Danh từ",
        "example": "金額を べんきょうします。(Học từ 金額.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V1-て、V2-て、～ (Nối chuỗi hành động theo trình tự thời gian)",
        "explanation": "Làm V1, rồi làm V2, rồi... (Nối các hành động theo trình tự thời gian thực tế xảy ra; thì của câu do động từ cuối cùng quyết định).",
        "caution": "Thời thì của toàn bộ câu (quá khứ hay tương lai) hoàn toàn phụ thuộc vào động từ CUỐI CÙNG của câu.",
        "examples": [
          {
            "type": "sentence",
            "context": "Thói quen buổi sáng",
            "jp": "あさ ジョギングをして、シャワーを あびて、かいしゃへ いきます。",
            "rawJp": "あさ ジョギングをして、シャワーを あびて、かいしゃへ いきます。",
            "vi": "Buổi sáng tôi chạy bộ, tắm vòi sen, rồi đến công ty."
          },
          {
            "type": "sentence",
            "context": "Hành động ngày hôm qua",
            "jp": "きのう こうべへ いって、えいがを みて、おちゃを のみました。",
            "rawJp": "きのう こうべへ いって、えいがを みて、おちゃを のみました。",
            "vi": "Hôm qua tôi đi Kobe, xem phim rồi uống trà."
          },
          {
            "type": "sentence",
            "context": "Lấy tiền mua hàng",
            "jp": "ぎんこうで おかねを おろして、かいものに いきます。",
            "rawJp": "ぎんこうで おかねを おろして、かいものに いきます。",
            "vi": "Tôi rút tiền ở ngân hàng rồi đi mua sắm."
          },
          {
            "type": "sentence",
            "context": "Ăn cơm xong đi ngủ",
            "jp": "ばんごはんを たべて、ほんを よんで、ねます。",
            "rawJp": "ばんごはんを たべて、ほんを よんで、ねます。",
            "vi": "Tôi ăn tối, đọc sách rồi đi ngủ."
          },
          {
            "type": "sentence",
            "context": "Đến ga gặp bạn",
            "jp": "えきへ いって、ともだちに あって、ごはんを たべました。",
            "rawJp": "えきへ いって、ともだちに あって、ごはんを たべました。",
            "vi": "Tôi đã đến ga, gặp bạn rồi cùng ăn cơm."
          }
        ]
      },
      {
        "structure": "2. {A-くて / Na-で / N-で}、～ (Nối tính từ và danh từ)",
        "explanation": "Nối tính chất hoặc trạng thái tương đồng: Tính từ đuôi い đổi đuôi thành くて; Tính từ đuôi な và Danh từ đổi thành で.",
        "caution": "Chỉ nối các đặc điểm CÙNG TÍNH CHẤT (cùng khen hoặc cùng chê). Nếu trái ngược tính chất thì phải dùng liên từ が (nhưng).",
        "examples": [
          {
            "type": "sentence",
            "context": "Khen ngợi đồ ăn ngon và rẻ",
            "jp": "この レストランの たべものは おいしくて、やすいです。",
            "rawJp": "この レストランの たべものは おいしくて、やすいです。",
            "vi": "Đồ ăn của nhà hàng này ngon và rẻ."
          },
          {
            "type": "sentence",
            "context": "Miêu tả thành phố Kyoto",
            "jp": "きょうとは しずかで、きれいな まちです。",
            "rawJp": "きょうとは しずかで、きれいな まちです。",
            "vi": "Kyoto là một thành phố yên bình và đẹp."
          },
          {
            "type": "sentence",
            "context": "Giới thiệu người trẻ và tốt bụng",
            "jp": "ミラーさんは わかくて、しんせつな ひとです。",
            "rawJp": "ミラーさんは わかくて、しんせつな ひとです。",
            "vi": "Anh Miller là người trẻ tuổi và tốt bụng."
          },
          {
            "type": "sentence",
            "context": "Phòng hẹp và tối",
            "jp": "この へやは せまくて、くらいです。",
            "rawJp": "この へやは せまくて、くらいです。",
            "vi": "Căn phòng này vừa hẹp vừa tối."
          },
          {
            "type": "sentence",
            "context": "Nêu quốc tịch và nghề nghiệp",
            "jp": "カリナさんは インドネシアじんで、がくせいです。",
            "rawJp": "カリナさんは インドネシアじんで、がくせいです。",
            "vi": "Chị Karina là người Indonesia và là sinh viên."
          }
        ]
      },
      {
        "structure": "3. V1-てから、V2",
        "explanation": "Sau khi làm V1 thì mới làm V2 (Nhấn mạnh hành động V2 chỉ diễn ra sau khi V1 đã hoàn thành trọn vẹn).",
        "caution": "Trật tự câu: V1 hoàn tất xong xuôi thì mới làm V2. Không dùng thì quá khứ ở V1 (không nói: V1-たから V2).",
        "examples": [
          {
            "type": "sentence",
            "context": "Xong việc mới đi chơi",
            "jp": "しごとが おわってから、のみに いきます。",
            "rawJp": "しごとが おわってから、のみに いきます。",
            "vi": "Sau khi xong việc thì tôi đi uống."
          },
          {
            "type": "sentence",
            "context": "Rửa tay trước khi ăn",
            "jp": "てを あらってから、ごはんを たべます。",
            "rawJp": "てを あらってから、ごはんを たべます。",
            "vi": "Sau khi rửa tay thì tôi mới ăn cơm."
          },
          {
            "type": "sentence",
            "context": "Mua vé trước khi lên tàu",
            "jp": "きっぷを かってから、でんしゃに のります。",
            "rawJp": "きっぷを かってから、でんしゃに のります。",
            "vi": "Sau khi mua vé thì tôi mới lên tàu."
          },
          {
            "type": "sentence",
            "context": "Tốt nghiệp mới đi làm",
            "jp": "だいがくを そつぎょうしてから、にほんへ いきます。",
            "rawJp": "だいがくを そつぎょうしてから、にほんへ いきます。",
            "vi": "Sau khi tốt nghiệp đại học thì tôi sẽ đi Nhật."
          },
          {
            "type": "sentence",
            "context": "Đọc xong mới trả sách",
            "jp": "ほんを よんでから、ともだちに かえします。",
            "rawJp": "ほんを よんでから、ともだちに かえします。",
            "vi": "Sau khi đọc xong sách thì tôi sẽ trả lại cho bạn."
          }
        ]
      },
      {
        "structure": "4. N1 は N2 が [Tính từ]",
        "explanation": "N1 có N2 thì mang tính chất A (Miêu tả một bộ phận, thuộc tính cụ thể N2 của đối tượng N1).",
        "caution": "N1 là đối tượng tổng thể đi với は, N2 là bộ phận hoặc thuộc tính cụ thể BẮT BUỘC đi với trợ từ が (Ví dụ: Chị Maria mắt to: マリアさんは 目が大きいです).",
        "examples": [
          {
            "type": "sentence",
            "context": "Miêu tả ngoại hình tóc dài",
            "jp": "マリアさんは かみが ながいです。",
            "rawJp": "マリアさんは かみが ながいです。",
            "vi": "Chị Maria tóc dài."
          },
          {
            "type": "sentence",
            "context": "Miêu tả thành phố thức ăn ngon",
            "jp": "おおさかは たべものが おいしいです。",
            "rawJp": "おおさかは たべものが おいしいです。",
            "vi": "Osaka đồ ăn ngon."
          },
          {
            "type": "sentence",
            "context": "Núi Phú Sĩ núi cao",
            "jp": "ふじさんは やまが たかいです。",
            "rawJp": "ふじさんは やまが たかいです。",
            "vi": "Núi Phú Sĩ có đỉnh núi rất cao."
          },
          {
            "type": "sentence",
            "context": "Khen ngợi anh Miller dáng cao",
            "jp": "ミラーさんは せが たかいです。",
            "rawJp": "ミラーさんは せが たかいです。",
            "vi": "Anh Miller dáng người cao ráo."
          },
          {
            "type": "sentence",
            "context": "Đầu óc thông minh",
            "jp": "あのこは あたまが いいです。",
            "rawJp": "あのこは あたまが いいです。",
            "vi": "Đứa bé đó rất thông minh."
          }
        ]
      },
      {
        "structure": "5. どうやって (Hỏi cách thức, đường đi, trình tự)",
        "explanation": "Làm thế nào? / Đi bằng cách nào? (Hỏi về phương thức di chuyển hoặc trình tự thực hiện công việc).",
        "caution": "Phân biệt: どうやって hỏi về CÁCH THỨC, TRÌNH TỰ (đi đường nào, thao tác máy ra sao); còn どう là hỏi CẢM NHẬN (thế nào).",
        "examples": [
          {
            "type": "dialogue",
            "context": "Hỏi đường đi đến trường đại học",
            "lines": [
              {
                "speaker": "A",
                "jp": "だいがくまで どうやって いきますか。",
                "rawJp": "だいがくまで どうやって いきますか。",
                "vi": "Đến trường đại học đi bằng cách nào?"
              },
              {
                "speaker": "B",
                "jp": "とうきょうえきから JRに のって、しんじゅくで ちかてつに のりかえます。",
                "rawJp": "とうきょうえきから JRに のって、しんじゅくで ちかてつに のりかえます。",
                "vi": "Từ ga Tokyo đi tàu JR, rồi ở Shinjuku chuyển sang tàu điện ngầm."
              }
            ]
          },
          {
            "type": "sentence",
            "context": "Hỏi cách sử dụng máy rút tiền",
            "jp": "ATMは どうやって つかいますか。",
            "rawJp": "ATMは どうやって つかいますか。",
            "vi": "Máy ATM dùng bằng cách nào?"
          },
          {
            "type": "sentence",
            "context": "Hỏi cách làm món ăn",
            "jp": "この りょうりは どうやって つくりますか。",
            "rawJp": "この りょうりは どうやって つくりますか。",
            "vi": "Món ăn này nấu bằng cách nào?"
          },
          {
            "type": "sentence",
            "context": "Hỏi cách đến sân bay",
            "jp": "くうこうまで どうやって いきますか。",
            "rawJp": "くうこうまで どうやって いきますか。",
            "vi": "Đến sân bay thì đi thế nào?"
          },
          {
            "type": "sentence",
            "context": "Hỏi cách viết chữ Hán này",
            "jp": "この かんじは どうやって かきますか。",
            "rawJp": "この かんじは どうやって かきますか。",
            "vi": "Chữ Hán này viết bằng cách nào?"
          }
        ]
      }
    ]
  },
  {
    "id": "bai-17",
    "title": "Bài 17: Thể Nai (ない形) & Câu Bắt Buộc / Cấm Đoán",
    "level": "Minna no Nihongo N5 (Bài 17)",
    "badge": "Thể Nai & Nghĩa vụ",
    "description": "Nắm vững cách chia thể ない (phủ định ngắn), mẫu câu xin đừng làm (V-ないでください), bắt buộc phải làm (V-なければなりません), không cần làm cũng được (V-なくてもいいです), và mốc thời gian hạn chót (までに).",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>覚<rt>おぼ</rt></ruby>えます</span>",
        "hiragana": "おぼえます",
        "meaning": "Nhớ, ghi nhớ",
        "type": "Động từ nhóm 2",
        "example": "単語を 覚えます。(Học thuộc từ vựng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>忘<rt>わす</rt></ruby>れます</span>",
        "hiragana": "わすれます",
        "meaning": "Quên",
        "type": "Động từ nhóm 2",
        "example": "傘を 忘れました。(Tôi đã quên chiếc dù.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>無<rt>な</rt></ruby>くします</span>",
        "hiragana": "なくします",
        "meaning": "Làm mất, đánh rơi",
        "type": "Động từ nhóm 1",
        "example": "パスポートを 無くしました。(Tôi làm mất hộ chiếu.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>払<rt>はら</rt></ruby>います</span>",
        "hiragana": "はらいます",
        "meaning": "Trả tiền, thanh toán",
        "type": "Động từ nhóm 1",
        "example": "現金で 払います。(Thanh toán bằng tiền mặt.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>返<rt>かえ</rt></ruby>します</span>",
        "hiragana": "かえします",
        "meaning": "Trả lại [đồ đã mượn]",
        "type": "Động từ nhóm 1",
        "example": "本を 図書館に 返します。(Trả sách cho thư viện.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>出<rt>で</rt></ruby>かけます</span>",
        "hiragana": "でかけます",
        "meaning": "Đi ra ngoài",
        "type": "Động từ nhóm 2",
        "example": "休みに 出かけます。(Đi ra ngoài chơi vào ngày nghỉ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>脱<rt>ぬ</rt></ruby>ぎます</span>",
        "hiragana": "ぬぎます",
        "meaning": "Cởi [giày, quần áo]",
        "type": "Động từ nhóm 1",
        "example": "靴を 脱ぎます。(Cởi giày.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>持<rt>も</rt></ruby>って <ruby>行<rt>い</rt></ruby>きます</span>",
        "hiragana": "もっていきます",
        "meaning": "Mang đi",
        "type": "Động từ nhóm 1",
        "example": "お弁当を 持って 行きます。(Mang cơm hộp đi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>持<rt>も</rt></ruby>って <ruby>来<rt>き</rt></ruby>ます</span>",
        "hiragana": "もってきます",
        "meaning": "Mang đến",
        "type": "Động từ nhóm 3",
        "example": "保険証を 持って 来てください。(Hãy mang thẻ bảo hiểm đến.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>心配<rt>しんぱい</rt></ruby>します</span>",
        "hiragana": "しんぱいします",
        "meaning": "Lo lắng",
        "type": "Động từ nhóm 3",
        "example": "心配しないで ください。(Xin đừng lo lắng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>残業<rt>ざんぎょう</rt></ruby>します</span>",
        "hiragana": "ざんぎょうします",
        "meaning": "Làm thêm giờ (OT)",
        "type": "Động từ nhóm 3",
        "example": "きょうは 残業します。(Hôm nay tôi tăng ca.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>出張<rt>しゅっちょう</rt></ruby>します</span>",
        "hiragana": "しゅっちょうします",
        "meaning": "Đi công tác",
        "type": "Động từ nhóm 3",
        "example": "大阪へ 出張します。(Đi công tác Osaka.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>大切<rt>たいせつ</rt></ruby>[な]</span>",
        "hiragana": "たいせつ[な]",
        "meaning": "Quan trọng, quý giá",
        "type": "Tính từ (na)",
        "example": "大切な 書類 (Tài liệu quan trọng)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>大丈夫<rt>だいじょうぶ</rt></ruby>[な]</span>",
        "hiragana": "だいじょうぶ[な]",
        "meaning": "Không sao, ổn",
        "type": "Tính từ (na)",
        "example": "大丈夫ですか。(Bạn có sao không?)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>危<rt>あぶ</rt></ruby>ない</span>",
        "hiragana": "あぶない",
        "meaning": "Nguy hiểm",
        "type": "Tính từ (i)",
        "example": "危ないですから、触らないで。(Vì nguy hiểm, xin đừng chạm vào.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>禁煙<rt>きんえん</rt></ruby></span>",
        "hiragana": "きんえん",
        "meaning": "Cấm hút thuốc",
        "type": "Danh từ",
        "example": "ここは 禁煙です。(Ở đây cấm hút thuốc.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>保険証<rt>ほけんしょう</rt></ruby></span>",
        "hiragana": "ほけんしょう",
        "meaning": "Thẻ bảo hiểm y tế",
        "type": "Danh từ",
        "example": "保険証を 見せて ください。(Xin cho xem thẻ bảo hiểm.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>熱<rt>ねつ</rt></ruby></span>",
        "hiragana": "ねつ",
        "meaning": "Sốt, nhiệt độ cơ thể cao",
        "type": "Danh từ",
        "example": "熱が あります。(Tôi bị sốt.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>病気<rt>びょうき</rt></ruby></span>",
        "hiragana": "びょうき",
        "meaning": "Bệnh tật, ốm đau",
        "type": "Danh từ",
        "example": "重い 病気 (Bệnh nặng)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>薬<rt>くすり</rt></ruby></span>",
        "hiragana": "くすり",
        "meaning": "Thuốc uống",
        "type": "Danh từ",
        "example": "薬を 飲みます。(Uống thuốc.)"
      },
      {
        "kanji": "お<span class=\"furigana\"><ruby>風呂<rt>ふろ</rt></ruby></span>",
        "hiragana": "おふろ",
        "meaning": "Bồn tắm, bồn nước nóng",
        "type": "Danh từ",
        "example": "お風呂に 入ります。(Ngâm mình trong bồn tắm.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>上着<rt>うわぎ</rt></ruby></span>",
        "hiragana": "うわぎ",
        "meaning": "Áo khoác, áo ngoài",
        "type": "Danh từ",
        "example": "上着を 脱ぎます。(Cởi áo khoác ngoài.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>下着<rt>したぎ</rt></ruby></span>",
        "hiragana": "したぎ",
        "meaning": "Quần áo lót bên trong",
        "type": "Danh từ",
        "example": "白い 下着 (Áo lót màu trắng)"
      },
      {
        "kanji": "〜までに",
        "hiragana": "〜までに",
        "meaning": "Trước thời điểm... (hạn chót hoàn thành)",
        "type": "Trợ từ",
        "example": "金曜日までに レポートを 出します。(Nộp báo cáo trước thứ Sáu.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>覚<rt>おぼ</rt></ruby>える</span>",
        "hiragana": "おぼえる",
        "meaning": "Nhớ, học thuộc lòng",
        "type": "Động từ",
        "example": "覚えるを べんきょうします。(Học từ 覚える.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>忘<rt>わす</rt></ruby>れる</span>",
        "hiragana": "わすれる",
        "meaning": "Quên",
        "type": "Động từ",
        "example": "忘れるを べんきょうします。(Học từ 忘れる.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>払<rt>はら</rt></ruby>う</span>",
        "hiragana": "はらう",
        "meaning": "Trả ( tiền )",
        "type": "Động từ",
        "example": "払うを べんきょうします。(Học từ 払う.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>返<rt>かえ</rt></ruby>す</span>",
        "hiragana": "かえす",
        "meaning": "Trả lại",
        "type": "Danh từ",
        "example": "返すを べんきょうします。(Học từ 返す.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>出<rt>で</rt></ruby>かける</span>",
        "hiragana": "でかける",
        "meaning": "Đi ra ngoài",
        "type": "Động từ",
        "example": "出かけるを べんきょうします。(Học từ 出かける.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>脱<rt>ぬ</rt></ruby>ぐ</span>",
        "hiragana": "ぬぐ",
        "meaning": "Cởi ( quần áo, giầy dép )",
        "type": "Động từ",
        "example": "脱ぐを べんきょうします。(Học từ 脱ぐ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>持<rt>も</rt></ruby>って<ruby>行<rt>い</rt></ruby>く</span>",
        "hiragana": "もっていく",
        "meaning": "Mang theo",
        "type": "Động từ",
        "example": "持って行くを べんきょうします。(Học từ 持って行く.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>出<rt>だ</rt></ruby>す</span>",
        "hiragana": "だす",
        "meaning": "Gởi, nộp",
        "type": "Danh từ",
        "example": "出すを べんきょうします。(Học từ 出す.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>レポートを出す<rt>レポートをだす</rt></ruby></span>",
        "hiragana": "レポートをだす",
        "meaning": "Gởi báo cáo",
        "type": "Danh từ",
        "example": "レポートを出すを べんきょうします。(Học từ レポートを出す.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>む</span>",
        "hiragana": "のむ",
        "meaning": "Uống",
        "type": "Động từ",
        "example": "飲むを べんきょうします。(Học từ 飲む.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>薬を飲む<rt>くすりをのむ</rt></ruby></span>",
        "hiragana": "くすりをのむ",
        "meaning": "Uống thuốc",
        "type": "Động từ",
        "example": "薬を飲むを べんきょうします。(Học từ 薬を飲む.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>持<rt>も</rt></ruby>って<ruby>来<rt>く</rt></ruby>る</span>",
        "hiragana": "もってくる",
        "meaning": "Mang đến",
        "type": "Động từ",
        "example": "持って来るを べんきょうします。(Học từ 持って来る.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>心配する<rt>しんぱいする</rt></ruby></span>",
        "hiragana": "しんぱいする",
        "meaning": "Lo lắng",
        "type": "Động từ",
        "example": "心配するを べんきょうします。(Học từ 心配する.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>残業する<rt>ざんぎょうする</rt></ruby></span>",
        "hiragana": "ざんぎょうする",
        "meaning": "Tăng ca, làm thêm giờ",
        "type": "Động từ",
        "example": "残業するを べんきょうします。(Học từ 残業する.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>出張する<rt>しゅっちょうする</rt></ruby></span>",
        "hiragana": "しゅっちょうする",
        "meaning": "Đi công tác",
        "type": "Động từ",
        "example": "出張するを べんきょうします。(Học từ 出張する.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>入<rt>はい</rt></ruby>る</span>",
        "hiragana": "はいる",
        "meaning": "Đi vào",
        "type": "Động từ",
        "example": "入るを べんきょうします。(Học từ 入る.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>お風呂に入る<rt>おふろにはいる</rt></ruby></span>",
        "hiragana": "おふろにはいる",
        "meaning": "Tắm",
        "type": "Động từ",
        "example": "お風呂に入るを べんきょうします。(Học từ お風呂に入る.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>大切<rt>たいせつ</rt></ruby></span>",
        "hiragana": "たいせつ",
        "meaning": "Quan trọng",
        "type": "Danh từ",
        "example": "大切を べんきょうします。(Học từ 大切.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>大丈夫<rt>だいじょうぶ</rt></ruby></span>",
        "hiragana": "だいじょうぶ",
        "meaning": "Không sao",
        "type": "Danh từ",
        "example": "大丈夫を べんきょうします。(Học từ 大丈夫.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>問題<rt>もんだい</rt></ruby></span>",
        "hiragana": "もんだい",
        "meaning": "Vấn đề, bài tập",
        "type": "Danh từ",
        "example": "問題を べんきょうします。(Học từ 問題.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>答<rt>こた</rt></ruby>え</span>",
        "hiragana": "こたえ",
        "meaning": "Câu trả lời",
        "type": "Danh từ",
        "example": "答えを べんきょうします。(Học từ 答え.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>健康保険証<rt>けんこうほけんしょう</rt></ruby></span>",
        "hiragana": "けんこうほけんしょう",
        "meaning": "CHỨNG Thẻ Bảo Hiểm Y Tế",
        "type": "Danh từ",
        "example": "健康保険証を べんきょうします。(Học từ 健康保険証.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>風邪<rt>かぜ</rt></ruby></span>",
        "hiragana": "かぜ",
        "meaning": "Cảm, cúm, sổ mũi",
        "type": "Danh từ",
        "example": "風邪を べんきょうします。(Học từ 風邪.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>風を引く<rt>かぜをひく</rt></ruby></span>",
        "hiragana": "かぜをひく",
        "meaning": "Bị cảm",
        "type": "Động từ",
        "example": "風を引くを べんきょうします。(Học từ 風を引く.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>熱があります<rt>ねつがあります</rt></ruby></span>",
        "hiragana": "ねつがあります",
        "meaning": "Bị sốt",
        "type": "Động từ",
        "example": "熱がありますを べんきょうします。(Học từ 熱があります.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>先生<rt>せんせい</rt></ruby></span>",
        "hiragana": "せんせい",
        "meaning": "Giáo viên – Bác sĩ",
        "type": "Danh từ",
        "example": "ワット先生 (Thầy Watt)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>２，３日<rt>にさんにち</rt></ruby></span>",
        "hiragana": "にさんにち",
        "meaning": "2, 3 ngày",
        "type": "Danh từ",
        "example": "２，３日を べんきょうします。(Học từ ２，３日.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>許可<rt>きょか</rt></ruby></span>",
        "hiragana": "きょか",
        "meaning": "Cho phép",
        "type": "Danh từ",
        "example": "先生の 許可を もらいます。(Xin phép thầy giáo.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>痛<rt>いた</rt></ruby>い</span>",
        "hiragana": "いたい",
        "meaning": "Đau",
        "type": "Tính từ",
        "example": "痛いを べんきょうします。(Học từ 痛い.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>喉<rt>のど</rt></ruby></span>",
        "hiragana": "のど",
        "meaning": "Cổ họng",
        "type": "Danh từ",
        "example": "喉を べんきょうします。(Học từ 喉.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>お大事に<rt>おだいじに</rt></ruby></span>",
        "hiragana": "おだいじに",
        "meaning": "Chúc mau hết bệnh",
        "type": "Danh từ",
        "example": "お大事にを べんきょうします。(Học từ お大事に.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>喉が痛いです<rt>のどがいたいです</rt></ruby></span>",
        "hiragana": "のどがいたいです",
        "meaning": "Đau cổ họng",
        "type": "Danh từ",
        "example": "喉が痛いですを べんきょうします。(Học từ 喉が痛いです.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>触<rt>さわ</rt></ruby>る</span>",
        "hiragana": "さわる",
        "meaning": "Sờ",
        "type": "Động từ",
        "example": "触るを べんきょうします。(Học từ 触る.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Quy tắc chia động từ thể ない (Nai-form)",
        "explanation": "Quy tắc chia thể ない: Nhóm 1 (Đổi hàng い sang hàng あ + ない; ngoại lệ i -> wa: suimamasu -> suwanai); Nhóm 2 (bỏ ます + ない); Nhóm 3 (kimasu -> konai; shimasu -> shinai).",
        "caution": "BẪY THI KINH ĐIỂN: Động từ nhóm 1 có đuôi い (như 会います, 吸います, 買います) khi chuyển sang thể ない đổi thành わない (会わない, 吸わない, 買わない), tuyệt đối KHÔNG đổi thành あない.",
        "examples": [
          {
            "type": "sentence",
            "context": "Chia nhóm 1 âm wa",
            "jp": "たばこを すわない。",
            "rawJp": "たばこを すわない。",
            "vi": "Không hút thuốc lá."
          },
          {
            "type": "sentence",
            "context": "Chia nhóm 1 âm a thông thường",
            "jp": "あした ほんを よまない。",
            "rawJp": "あした ほんを よまない。",
            "vi": "Ngày mai tôi không đọc sách."
          },
          {
            "type": "sentence",
            "context": "Chia nhóm 2 bỏ masu thêm nai",
            "jp": "あさごはんを たべない。",
            "rawJp": "あさごはんを たべない。",
            "vi": "Không ăn sáng."
          },
          {
            "type": "sentence",
            "context": "Chia nhóm 3 kimasu thành konai",
            "jp": "かれは パーティーに こない。",
            "rawJp": "かれは パーティーに こない。",
            "vi": "Anh ấy không đến bữa tiệc."
          },
          {
            "type": "sentence",
            "context": "Động từ arimasu thành nai",
            "jp": "おかねが ない。",
            "rawJp": "おかねが ない。",
            "vi": "Không có tiền."
          }
        ]
      },
      {
        "structure": "2. V-ないで ください",
        "explanation": "Xin đừng làm V (Lời yêu cầu đối phương không thực hiện hành động một cách lịch sự; động từ thể ない + で ください).",
        "caution": "Yêu cầu đừng làm gì: V-ない + で ください. Nhớ trợ từ で sau ない, không được bỏ sót chữ で.",
        "examples": [
          {
            "type": "sentence",
            "context": "Yêu cầu không chụp ảnh",
            "jp": "ここで しゃしんを とらないで ください。",
            "rawJp": "ここで しゃしんを とらないで ください。",
            "vi": "Xin đừng chụp ảnh ở đây."
          },
          {
            "type": "sentence",
            "context": "Yêu cầu không hút thuốc",
            "jp": "たばこを すわないで ください。",
            "rawJp": "たばこを すわないで ください。",
            "vi": "Xin vui lòng đừng hút thuốc."
          },
          {
            "type": "sentence",
            "context": "Yêu cầu đừng lo lắng",
            "jp": "しんぱいしないで ください。",
            "rawJp": "しんぱいしないで ください。",
            "vi": "Xin đừng lo lắng."
          },
          {
            "type": "sentence",
            "context": "Yêu cầu không quên ví",
            "jp": "さいふを わすれないで ください。",
            "rawJp": "さいふを わすれないで ください。",
            "vi": "Xin đừng quên ví tiền."
          },
          {
            "type": "sentence",
            "context": "Yêu cầu đừng vào phòng",
            "jp": "へやに はいらないで ください。",
            "rawJp": "へやに はいらないで ください。",
            "vi": "Xin vui lòng đừng vào phòng."
          }
        ]
      },
      {
        "structure": "3. V-なければ なりません",
        "explanation": "Phải làm V (Diễn tả nghĩa vụ, bổn phận tất yếu không thể tránh khỏi; động từ thể ない đổi い thành ければ なりません).",
        "caution": "Dù có dạng phủ định ければ なりません nhưng mang ý nghĩa KHẲNG ĐỊNH tuyệt đối: BẮT BUỘC PHẢI LÀM.",
        "examples": [
          {
            "type": "sentence",
            "context": "Nghĩa vụ uống thuốc",
            "jp": "くすりを のまなければ なりません。",
            "rawJp": "くすりを のまなければ なりません。",
            "vi": "Tôi phải uống thuốc."
          },
          {
            "type": "sentence",
            "context": "Phải học tiếng Nhật mỗi ngày",
            "jp": "まいにち にほんごを べんきょうしなければ なりません。",
            "rawJp": "まいにち にほんごを べんきょうしなければ なりません。",
            "vi": "Tôi phải học tiếng Nhật mỗi ngày."
          },
          {
            "type": "sentence",
            "context": "Phải trả sách cho thư viện",
            "jp": "としょかんに ほんを かえさなければ なりません。",
            "rawJp": "としょかんに ほんを かえさなければ なりません。",
            "vi": "Tôi phải trả sách cho thư viện."
          },
          {
            "type": "sentence",
            "context": "Phải về nhà trước 10 giờ",
            "jp": "１０じまでに うちへ かえらなければ なりません。",
            "rawJp": "１０じまでに うちへ かえらなければ なりません。",
            "vi": "Tôi phải về nhà trước 10 giờ."
          },
          {
            "type": "sentence",
            "context": "Phải xuất trình hộ chiếu",
            "jp": "パスポートを みせなければ なりません。",
            "rawJp": "パスポートを みせなければ なりません。",
            "vi": "Bạn phải xuất trình hộ chiếu."
          }
        ]
      },
      {
        "structure": "4. V-なくても いいです",
        "explanation": "Không phải làm V cũng được (Cho phép không thực hiện hành động, không có nghĩa vụ ràng buộc; thể ない đổi い thành くても いいです).",
        "caution": "Là dạng phủ định của V-なければ なりません. Mang ý nghĩa 'Không cần làm cũng không sao', không bắt buộc.",
        "examples": [
          {
            "type": "sentence",
            "context": "Không phải đi làm ngày mai",
            "jp": "あした かいしゃへ こなくても いいです。",
            "rawJp": "あした かいしゃへ こなくても いいです。",
            "vi": "Ngày mai bạn không phải đến công ty cũng được."
          },
          {
            "type": "sentence",
            "context": "Không cần vội vã",
            "jp": "いそがなくても いいです。",
            "rawJp": "いそがなくても いいです。",
            "vi": "Không cần vội đâu."
          },
          {
            "type": "sentence",
            "context": "Không cần cởi giày",
            "jp": "くつを ぬがなくても いいです。",
            "rawJp": "くつを ぬがなくても いいです。",
            "vi": "Không cần cởi giày cũng được."
          },
          {
            "type": "sentence",
            "context": "Không phải trả tiền ngay",
            "jp": "いま はらわなくても いいです。",
            "rawJp": "いま はらわなくても いいです。",
            "vi": "Bây giờ không cần trả tiền cũng được."
          },
          {
            "type": "sentence",
            "context": "Không cần viết lại",
            "jp": "もう かかなくても いいです。",
            "rawJp": "もう かかなくても いいです。",
            "vi": "Không cần viết lại nữa đâu."
          }
        ]
      },
      {
        "structure": "5. N (thời hạn) までに V",
        "explanation": "Làm V trước mốc thời hạn N (Chỉ hạn chót mà hành động phải được hoàn thành trước thời điểm đó).",
        "caution": "BẪY THI: まで chỉ hành động kéo dài LIÊN TỤC đến mốc thời gian (勉強します). Còn までに chỉ HẠN CHÓT của một hành động dứt điểm (提出します).",
        "examples": [
          {
            "type": "sentence",
            "context": "Hạn chót nộp báo cáo",
            "jp": "きんようびまでに レポートを ださなければ なりません。",
            "rawJp": "きんようびまでに レポートを ださなければ なりません。",
            "vi": "Phải nộp báo cáo trước thứ Sáu."
          },
          {
            "type": "sentence",
            "context": "Hạn chót trả tiền",
            "jp": "らいしゅうまでに おかねを かえして ください。",
            "rawJp": "らいしゅうまでに おかねを かえして ください。",
            "vi": "Xin vui lòng trả tiền trước tuần sau."
          },
          {
            "type": "sentence",
            "context": "Thời hạn về nhà",
            "jp": "５じまでに うちへ かえります。",
            "rawJp": "５じまでに うちへ かえらなければ なりません。",
            "vi": "Tôi phải về nhà trước 5 giờ."
          },
          {
            "type": "sentence",
            "context": "Hạn chót cuộc họp kết thúc",
            "jp": "かいぎは ３じまでに おわります。",
            "rawJp": "かいぎは ３じまでに おわります。",
            "vi": "Cuộc họp sẽ kết thúc trước 3 giờ."
          },
          {
            "type": "sentence",
            "context": "Thời hạn đăng ký",
            "jp": "あしたまでに もうしこんで ください。",
            "rawJp": "あしたまでに もうしこんで ください。",
            "vi": "Vui lòng đăng ký trước ngày mai."
          }
        ]
      }
    ]
  },
  {
    "id": "bai-18",
    "title": "Bài 18: Thể Từ Điển (辞書形) & Khả Năng / Sở Thích",
    "level": "Minna no Nihongo N5 (Bài 18)",
    "badge": "Thể Từ Điển & Năng lực",
    "description": "Học thể nguyên mẫu từ điển (辞書形), cấu trúc biểu thị khả năng (V-ることが できます), sở thích cá nhân (趣味は V-ることです), và trình tự thời gian trước khi làm gì (V1-る まえに V2).",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>出来<rt>でき</rt></ruby>ます</span>",
        "hiragana": "できます",
        "meaning": "Có thể, làm được",
        "type": "Động từ nhóm 2",
        "example": "日本語が できます。(Có thể nói được tiếng Nhật.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>洗<rt>あら</rt></ruby>います</span>",
        "hiragana": "あらいます",
        "meaning": "Rửa, giặt",
        "type": "Động từ nhóm 1",
        "example": "手を 洗います。(Rửa tay.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>弾<rt>ひ</rt></ruby>きます</span>",
        "hiragana": "ひきます",
        "meaning": "Chơi [nhạc cụ dây/phím như piano, guitar]",
        "type": "Động từ nhóm 1",
        "example": "ピアノを 弾きます。(Chơi đàn piano.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>歌<rt>うた</rt></ruby>います</span>",
        "hiragana": "うたいます",
        "meaning": "Hát",
        "type": "Động từ nhóm 1",
        "example": "日本の 歌を 歌います。(Hát bài hát Nhật Bản.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>集<rt>あつ</rt></ruby>めます</span>",
        "hiragana": "あつめます",
        "meaning": "Sưu tầm, thu thập",
        "type": "Động từ nhóm 2",
        "example": "切手を 集めます。(Sưu tầm tem.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>捨<rt>す</rt></ruby>てます</span>",
        "hiragana": "すてます",
        "meaning": "Vứt, bỏ rác",
        "type": "Động từ nhóm 2",
        "example": "ごみを 捨てます。(Vứt rác.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>換<rt>か</rt></ruby>えます</span>",
        "hiragana": "かえます",
        "meaning": "Đổi, trao đổi [tiền bạc, đồ vật]",
        "type": "Động từ nhóm 2",
        "example": "お金を 換えます。(Đổi tiền.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>運転<rt>うんてん</rt></ruby>します</span>",
        "hiragana": "うんてんします",
        "meaning": "Lái xe",
        "type": "Động từ nhóm 3",
        "example": "車を 運転します。(Lái xe ô tô.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>予約<rt>よやく</rt></ruby>します</span>",
        "hiragana": "よやくします",
        "meaning": "Đặt trước, đặt chỗ",
        "type": "Động từ nhóm 3",
        "example": "ホテルを 予約します。(Đặt phòng khách sạn.)"
      },
      {
        "kanji": "ピアノ",
        "hiragana": "ピアノ",
        "meaning": "Đàn piano",
        "type": "Danh từ",
        "example": "ピアノの 練習 (Luyện tập piano)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>現金<rt>げんきん</rt></ruby></span>",
        "hiragana": "げんきん",
        "meaning": "Tiền mặt",
        "type": "Danh từ",
        "example": "現金で 払います。(Trả bằng tiền mặt.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>趣味<rt>しゅみ</rt></ruby></span>",
        "hiragana": "しゅみ",
        "meaning": "Sở thích",
        "type": "Danh từ",
        "example": "趣味は サッカーです。(Sở thích là bóng đá.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>日記<rt>にっき</rt></ruby></span>",
        "hiragana": "にっき",
        "meaning": "Nhật ký",
        "type": "Danh từ",
        "example": "日記を 書きます。(Viết nhật ký.)"
      },
      {
        "kanji": "お<span class=\"furigana\"><ruby>祈<rt>いの</rt></ruby>り</span>",
        "hiragana": "おいのり",
        "meaning": "Lời cầu nguyện (お祈りをします: cầu nguyện)",
        "type": "Danh từ",
        "example": "神様に お祈りします。(Cầu nguyện thần linh.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>課長<rt>かちょう</rt></ruby></span>",
        "hiragana": "かちょう",
        "meaning": "Trưởng nhóm, tổ trưởng, trưởng khoa",
        "type": "Danh từ",
        "example": "田中課長 (Trưởng phòng Tanaka)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>部長<rt>ぶちょう</rt></ruby></span>",
        "hiragana": "ぶちょう",
        "meaning": "Trưởng phòng",
        "type": "Danh từ",
        "example": "中村部長 (Trưởng bộ phận Nakamura)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>社長<rt>しゃちょう</rt></ruby></span>",
        "hiragana": "しゃちょう",
        "meaning": "Giám đốc, tổng giám đốc công ty",
        "type": "Danh từ",
        "example": "会社の 社長 (Giám đốc công ty)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>動物<rt>どうぶつ</rt></ruby></span>",
        "hiragana": "どうぶつ",
        "meaning": "Động vật",
        "type": "Danh từ",
        "example": "動物園 (Vườn bách thú)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>馬<rt>うま</rt></ruby></span>",
        "hiragana": "うま",
        "meaning": "Con ngựa",
        "type": "Danh từ",
        "example": "馬に 乗ります。(Cưỡi ngựa.)"
      },
      {
        "kanji": "インターネット",
        "hiragana": "インターネット",
        "meaning": "Mạng Internet",
        "type": "Danh từ",
        "example": "インターネットで 調べます。(Tra cứu trên Internet.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>特<rt>とく</rt></ruby>に</span>",
        "hiragana": "とくに",
        "meaning": "Đặc biệt là",
        "type": "Phó từ",
        "example": "特に 寿司が 好きです。(Đặc biệt thích món sushi.)"
      },
      {
        "kanji": "ぜひ",
        "hiragana": "ぜひ",
        "meaning": "Nhất định (thể hiện mong muốn tha thiết)",
        "type": "Phó từ",
        "example": "ぜひ 遊びに 来てください。(Nhất định hãy ghé chơi nhé.)"
      },
      {
        "kanji": "なかなか",
        "hiragana": "なかなか",
        "meaning": "Mãi mà không... (đi cùng phủ định)",
        "type": "Phó từ",
        "example": "なかなか バスが 来ません。(Mãi mà xe buýt chưa tới.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>洗<rt>あら</rt></ruby>う</span>",
        "hiragana": "あらう",
        "meaning": "Rửa",
        "type": "Động từ",
        "example": "洗うを べんきょうします。(Học từ 洗う.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>弾<rt>ひ</rt></ruby>く</span>",
        "hiragana": "ひく",
        "meaning": "Chơi, đánh ( Đàn )",
        "type": "Động từ",
        "example": "弾くを べんきょうします。(Học từ 弾く.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>歌<rt>うた</rt></ruby>う</span>",
        "hiragana": "うたう",
        "meaning": "Hát",
        "type": "Động từ",
        "example": "歌うを べんきょうします。(Học từ 歌う.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>集<rt>あつ</rt></ruby>める</span>",
        "hiragana": "あつめる",
        "meaning": "Tập hợp, sưu tập",
        "type": "Động từ",
        "example": "集めるを べんきょうします。(Học từ 集める.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>捨<rt>す</rt></ruby>てる</span>",
        "hiragana": "すてる",
        "meaning": "Vứt, bỏ",
        "type": "Động từ",
        "example": "捨てるを べんきょうします。(Học từ 捨てる.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>換<rt>か</rt></ruby>える</span>",
        "hiragana": "かえる",
        "meaning": "Đổi ( Tiền )",
        "type": "Động từ",
        "example": "換えるを べんきょうします。(Học từ 換える.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>ピアノを弾く<rt>ピアノをひく</rt></ruby></span>",
        "hiragana": "ピアノをひく",
        "meaning": "Đánh đàn Piano",
        "type": "Động từ",
        "example": "ピアノを弾くを べんきょうします。(Học từ ピアノを弾く.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>運転<rt>うんてん</rt></ruby>する</span>",
        "hiragana": "うんてんする",
        "meaning": "Lái xe",
        "type": "Động từ",
        "example": "運転するを べんきょうします。(Học từ 運転する.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>予約する<rt>よやくする</rt></ruby></span>",
        "hiragana": "よやくする",
        "meaning": "Hẹn trước, đặt trước",
        "type": "Động từ",
        "example": "予約するを べんきょうします。(Học từ 予約する.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>見学する<rt>けんがくする</rt></ruby></span>",
        "hiragana": "けんがくする",
        "meaning": "Tham quan",
        "type": "Động từ",
        "example": "見学するを べんきょうします。(Học từ 見学する.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>国際<rt>こくさい</rt></ruby></span>",
        "hiragana": "こくさい",
        "meaning": "Quốc tế",
        "type": "Danh từ",
        "example": "国際を べんきょうします。(Học từ 国際.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>国際電話<rt>こくさいでんわ</rt></ruby></span>",
        "hiragana": "こくさいでんわ",
        "meaning": "Điện thoại quốc tế",
        "type": "Động từ",
        "example": "国際電話を べんきょうします。(Học từ 国際電話.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>故障<rt>こしょう</rt></ruby></span>",
        "hiragana": "こしょう",
        "meaning": "Hỏng hóc, hư",
        "type": "Danh từ",
        "example": "機械の 故障 (Máy bị hỏng hóc)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>牧場<rt>ぼくじょう</rt></ruby></span>",
        "hiragana": "ぼくじょう",
        "meaning": "Trang trại",
        "type": "Danh từ",
        "example": "牧場を べんきょうします。(Học từ 牧場.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>本当ですか<rt>ほんとうですか</rt></ruby></span>",
        "hiragana": "ほんとうですか",
        "meaning": "Có thật vậy không?",
        "type": "Danh từ",
        "example": "本当ですかを べんきょうします。(Học từ 本当ですか.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>大丈夫です<rt>だいじょうぶです</rt></ruby></span>",
        "hiragana": "だいじょうぶです",
        "meaning": "Không sao, Ổn",
        "type": "Danh từ",
        "example": "大丈夫ですを べんきょうします。(Học từ 大丈夫です.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Quy tắc chia động từ thể từ điển (辞書形 - Jishokei)",
        "explanation": "Quy tắc chia thể từ điển (nguyên mẫu): Nhóm 1 (Đổi hàng い sang hàng う: ikimasu -> iku); Nhóm 2 (bỏ ます + る: tabemasu -> taberu); Nhóm 3 (kimasu -> kuru; shimasu -> suru).",
        "caution": "Thể từ điển (辞書形) là dạng động từ căn bản tra từ điển. Nhớ kỹ nhóm 3: きます đổi thành くる, します đổi thành する.",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhóm 1 đổi sang hàng u",
            "jp": "ほんを かう。",
            "rawJp": "ほんを かう。",
            "vi": "Mua sách."
          },
          {
            "type": "sentence",
            "context": "Nhóm 1 đổi sang u",
            "jp": "にほんへ いく。",
            "rawJp": "にほんへ いく。",
            "vi": "Đi Nhật Bản."
          },
          {
            "type": "sentence",
            "context": "Nhóm 2 bỏ masu thêm ru",
            "jp": "あさごはんを たべる。",
            "rawJp": "あさごはんを たべる。",
            "vi": "Ăn sáng."
          },
          {
            "type": "sentence",
            "context": "Nhóm 3 kimasu thành kuru",
            "jp": "ともだちが うちへ くる。",
            "rawJp": "ともだちが うちへ くる。",
            "vi": "Bạn đến nhà."
          },
          {
            "type": "sentence",
            "context": "Nhóm 3 shimasu thành suru",
            "jp": "まいにち にほんごを べんきょうする。",
            "rawJp": "まいにち にほんごを べんきょうする。",
            "vi": "Học tiếng Nhật mỗi ngày."
          }
        ]
      },
      {
        "structure": "2. V-る ことが できます",
        "explanation": "Có thể làm V (Biểu thị năng lực bản thân hoặc khả năng được phép làm việc gì theo quy định; Động từ thể từ điển + ことが できます).",
        "caution": "Động từ đứng trước ことが できます BẮT BUỘC ở thể từ điển (辞書形). Nếu là danh từ thì đi thẳng: N が できます (スキーが できます).",
        "examples": [
          {
            "type": "sentence",
            "context": "Năng lực lái xe",
            "jp": "ミラーさんは くるまの うんてんが できます。",
            "rawJp": "ミラーさんは くるまの うんてんが できます。",
            "vi": "Anh Miller có thể lái xe ô tô."
          },
          {
            "type": "sentence",
            "context": "Năng lực chơi đàn piano",
            "jp": "ピアノを ひく ことが できます。",
            "rawJp": "ピアノを ひく ことが できます。",
            "vi": "Tôi có thể chơi đàn piano."
          },
          {
            "type": "sentence",
            "context": "Khả năng thanh toán thẻ",
            "jp": "カードで はらう ことが できます。",
            "rawJp": "カードで はらう ことが できます。",
            "vi": "Có thể thanh toán bằng thẻ."
          },
          {
            "type": "sentence",
            "context": "Khả năng nói tiếng Nhật",
            "jp": "にほんごを はなす ことが できます。",
            "rawJp": "にほんごを はなす ことが できます。",
            "vi": "Tôi có thể nói tiếng Nhật."
          },
          {
            "type": "sentence",
            "context": "Khả năng bơi 100m",
            "jp": "１００メートル およぐ ことが できます。",
            "rawJp": "１００メートル およぐ ことが できます。",
            "vi": "Tôi có thể bơi được 100 mét."
          }
        ]
      },
      {
        "structure": "3. わたしの しゅみは {V-る こと / N} です",
        "explanation": "Sở thích của tôi là V / N (Danh từ hóa hành động để nêu rõ sở thích cá nhân; dùng thể từ điển + こと).",
        "caution": "Không nói 'わたしの 趣味は 音楽を聞きます です'. BẮT BUỘC phải biến động từ thành danh từ: 音楽を聞く【こと】です.",
        "examples": [
          {
            "type": "sentence",
            "context": "Sở thích chụp ảnh",
            "jp": "わたしの しゅみは しゃしんを とる ことです。",
            "rawJp": "わたしの しゅみは しゃしんを とる ことです。",
            "vi": "Sở thích của tôi là chụp ảnh."
          },
          {
            "type": "sentence",
            "context": "Sở thích nghe nhạc",
            "jp": "わたしの しゅみは おんがくを きく ことです。",
            "rawJp": "わたしの しゅみは おんがくを きく ことです。",
            "vi": "Sở thích của tôi là nghe nhạc."
          },
          {
            "type": "sentence",
            "context": "Sở thích xem phim",
            "jp": "しゅみは えいがを みる ことです。",
            "rawJp": "しゅみは えいがを みる ことです。",
            "vi": "Sở thích là xem phim."
          },
          {
            "type": "sentence",
            "context": "Sở thích đọc sách",
            "jp": "しゅみは ほんを よむ ことです。",
            "rawJp": "しゅみは ほんを よむ ことです。",
            "vi": "Sở thích của tôi là đọc sách."
          },
          {
            "type": "sentence",
            "context": "Sở thích nấu ăn",
            "jp": "わたしの しゅみは りょうりを つくる ことです。",
            "rawJp": "わたしの しゅみは りょうりを つくる ことです。",
            "vi": "Sở thích của tôi là nấu ăn."
          }
        ]
      },
      {
        "structure": "4. {V1-る / N の / Lượng từ thời gian} + まえに、V2",
        "explanation": "Trước khi làm V1 thì làm V2 (Biểu thị thứ tự thời gian; trước まえに luôn là thể từ điển dù V2 chia thì quá khứ).",
        "caution": "BẪY THI: Động từ đứng trước まえに LUÔN LUÔN ở thể từ điển V-る, kể cả khi hành động V2 đã xảy ra trong quá khứ (Ví dụ: 日本へ【行く】まえに、日本語を勉強しました).",
        "examples": [
          {
            "type": "sentence",
            "context": "Rửa tay trước khi ăn",
            "jp": "ごはんを たべる まえに、てを あらいます。",
            "rawJp": "ごはんを たべる まえに、てを あらいます。",
            "vi": "Trước khi ăn cơm tôi rửa tay."
          },
          {
            "type": "sentence",
            "context": "Uống thuốc trước khi đi ngủ",
            "jp": "ねる まえに、くすりを のみます。",
            "rawJp": "ねる まえに、くすりを のみます。",
            "vi": "Trước khi đi ngủ tôi uống thuốc."
          },
          {
            "type": "sentence",
            "context": "Danh từ đi với no trước mae ni",
            "jp": "しょくじの まえに、てを あらって ください。",
            "rawJp": "しょくじの まえに、てを あらって ください。",
            "vi": "Trước bữa ăn xin hãy rửa tay."
          },
          {
            "type": "sentence",
            "context": "Học tiếng Nhật trước khi đến Nhật",
            "jp": "にほんへ くる まえに、にほんごを べんきょうしました。",
            "rawJp": "にほんへ くる まえに、にほんごを べんきょうしました。",
            "vi": "Trước khi đến Nhật tôi đã học tiếng Nhật."
          },
          {
            "type": "sentence",
            "context": "Khoảng thời gian trước",
            "jp": "ミラーさんは １じかんまえに でかけました。",
            "rawJp": "ミラーさんは １じかんまえに でかけました。",
            "vi": "Anh Miller đã ra ngoài cách đây 1 tiếng."
          }
        ]
      },
      {
        "structure": "5. なかなか + Phủ định / ぜひ + V-たい・V-てください",
        "explanation": "なかなか (mãi mà không...) luôn đi với phủ định; ぜひ (nhất định...) luôn đi kèm mong muốn hoặc lời mời gọi thiết tha.",
        "caution": "なかなか BẮT BUỘC đi với vị ngữ PHỦ ĐỊNH. Còn ぜひ luôn đi với V-たい hoặc V-てください (Ví dụ: ぜひ 遊びに来てください).",
        "examples": [
          {
            "type": "sentence",
            "context": "Mãi mà không thấy xe buýt",
            "jp": "バスが なかなか きません。",
            "rawJp": "バスが なかなか きません。",
            "vi": "Xe buýt mãi mà không tới."
          },
          {
            "type": "sentence",
            "context": "Nhất định muốn đi Nhật",
            "jp": "ぜひ にほんへ いきたいです。",
            "rawJp": "ぜひ にほんへ いきたいです。",
            "vi": "Tôi nhất định muốn đến Nhật Bản."
          },
          {
            "type": "sentence",
            "context": "Mãi mà không ngủ được",
            "jp": "きのうの よる なかなか ねられませんでした。",
            "rawJp": "きのうの よる なかなか ねられませんでした。",
            "vi": "Tối qua mãi mà tôi không ngủ được."
          },
          {
            "type": "sentence",
            "context": "Mời bạn đến nhà chơi",
            "jp": "ぜひ わたしの うちへ あそびに きて ください。",
            "rawJp": "ぜひ わたしの うちへ あそびに きて ください。",
            "vi": "Nhất định hãy ghé nhà tôi chơi nhé."
          },
          {
            "type": "sentence",
            "context": "Mãi mà không nhớ được chữ Hán",
            "jp": "かんじが なかなか おぼえられません。",
            "rawJp": "かんじが なかなか おぼえられません。",
            "vi": "Chữ Hán mãi mà tôi không nhớ nổi."
          }
        ]
      }
    ]
  },
  {
    "id": "bai-19",
    "title": "Bài 19: Thể Ta (た形) & Kinh Nghiệm Bản Thân",
    "level": "Minna no Nihongo N5 (Bài 19)",
    "badge": "Thể Ta & Kinh nghiệm",
    "description": "Nắm vững thể quá khứ ngắn Ta (た形), cấu trúc diễn đạt trải nghiệm (V-た ことが あります), liệt kê hành động tiêu biểu không thứ tự (V-たり V-たり します), và sự thay đổi trạng thái (〜くなります/になります).",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>登<rt>のぼ</rt></ruby>ります</span>",
        "hiragana": "のぼります",
        "meaning": "Leo [núi] (山に〜)",
        "type": "Động từ nhóm 1",
        "example": "富士山に 登ります。(Leo núi Phú Sĩ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>泊<rt>と</rt></ruby>まります</span>",
        "hiragana": "とまります",
        "meaning": "Nghỉ trọ [khách sạn] (ホテルに〜)",
        "type": "Động từ nhóm 1",
        "example": "ホテルに 泊まります。(Trọ lại ở khách sạn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>掃除<rt>そうじ</rt></ruby>します</span>",
        "hiragana": "そうじします",
        "meaning": "Dọn dẹp vệ sinh",
        "type": "Động từ nhóm 3",
        "example": "部屋を 掃除します。(Dọn dẹp phòng ốc.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>洗濯<rt>せんたく</rt></ruby>します</span>",
        "hiragana": "せんたくします",
        "meaning": "Giặt giũ quần áo",
        "type": "Động từ nhóm 3",
        "example": "服を 洗濯します。(Giặt quần áo.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>練習<rt>れんしゅう</rt></ruby>します</span>",
        "hiragana": "れんしゅうします",
        "meaning": "Luyện tập",
        "type": "Động từ nhóm 3",
        "example": "会話を 練習します。(Luyện tập hội thoại.)"
      },
      {
        "kanji": "なります",
        "hiragana": "なります",
        "meaning": "Trở nên, trở thành",
        "type": "Động từ nhóm 1",
        "example": "医者に なります。(Trở thành bác sĩ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>眠<rt>ねむ</rt></ruby>い</span>",
        "hiragana": "ねむい",
        "meaning": "Buồn ngủ",
        "type": "Tính từ (i)",
        "example": "とても 眠いです。(Rất buồn ngủ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>強<rt>つよ</rt></ruby>い</span>",
        "hiragana": "つよい",
        "meaning": "Mạnh mẽ",
        "type": "Tính từ (i)",
        "example": "風が 強いです。(Gió rất mạnh.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>弱<rt>よわ</rt></ruby>い</span>",
        "hiragana": "よわい",
        "meaning": "Yếu ớt",
        "type": "Tính từ (i)",
        "example": "体が 弱いです。(Cơ thể yếu.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>調子<rt>ちょうし</rt></ruby></span>",
        "hiragana": "ちょうし",
        "meaning": "Tình trạng sức khỏe, trạng thái máy móc",
        "type": "Danh từ",
        "example": "体の 調子が いいです。(Sức khỏe trong trạng thái tốt.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>一度<rt>いちど</rt></ruby></span>",
        "hiragana": "いちど",
        "meaning": "Một lần",
        "type": "Phó từ",
        "example": "一度 日本へ 行きたいです。(Muốn đi Nhật một lần.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>一度<rt>いちど</rt></ruby>も</span>",
        "hiragana": "いちども",
        "meaning": "Chưa từng lần nào (đi với phủ định)",
        "type": "Phó từ",
        "example": "一度も 刺身を 食べた ことが ありません。(Chưa từng ăn sashimi lần nào.)"
      },
      {
        "kanji": "だんだん",
        "hiragana": "だんだん",
        "meaning": "Dần dần, từ từ",
        "type": "Phó từ",
        "example": "だんだん 寒く なります。(Trời dần dần trở lạnh.)"
      },
      {
        "kanji": "もうすぐ",
        "hiragana": "もうすぐ",
        "meaning": "Sắp sửa, chuẩn bị",
        "type": "Phó từ",
        "example": "もうすぐ 春に なります。(Sắp sửa sang mùa xuân rồi.)"
      },
      {
        "kanji": "おかげさまで",
        "hiragana": "おかげさまで",
        "meaning": "Nhờ ơn trời / Nhờ có bạn giúp đỡ",
        "type": "Cụm từ",
        "example": "元気です、おかげさまで。(Nhờ ơn trời tôi vẫn khỏe.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>乾杯<rt>かんぱい</rt></ruby></span>",
        "hiragana": "かんぱい",
        "meaning": "Cạn ly! (khi uống tiệc)",
        "type": "Danh từ",
        "example": "ビールで 乾杯！(Cạn ly bằng bia nào!)"
      },
      {
        "kanji": "ダイエット",
        "hiragana": "ダイエット",
        "meaning": "Chế độ ăn kiêng (ダイエットをします)",
        "type": "Danh từ",
        "example": "ダイエットを しています。(Tôi đang ăn kiêng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>無理<rt>むり</rt></ruby>[な]</span>",
        "hiragana": "むり[な]",
        "meaning": "Quá sức, vô lý, không thể làm nổi",
        "type": "Tính từ (na)",
        "example": "無理を しないで ください。(Xin đừng làm việc quá sức.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>段々<rt>だんだん</rt></ruby></span>",
        "hiragana": "だんだん",
        "meaning": "Dần dần",
        "type": "Danh từ",
        "example": "段々を べんきょうします。(Học từ 段々.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>お蔭様で<rt>おかげさまで</rt></ruby></span>",
        "hiragana": "おかげさまで",
        "meaning": "Nhờ trời",
        "type": "Danh từ",
        "example": "お蔭様でを べんきょうします。(Học từ お蔭様で.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>登<rt>のぼ</rt></ruby>る</span>",
        "hiragana": "のぼる",
        "meaning": "Leo ( núi )",
        "type": "Động từ",
        "example": "登るを べんきょうします。(Học từ 登る.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>山に登る<rt>やまにのぼる</rt></ruby></span>",
        "hiragana": "やまにのぼる",
        "meaning": "Leo núi",
        "type": "Động từ",
        "example": "山に登るを べんきょうします。(Học từ 山に登る.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>泊<rt>と</rt></ruby>まる</span>",
        "hiragana": "とまる",
        "meaning": "Trọ, ở ( lại )",
        "type": "Động từ",
        "example": "泊まるを べんきょうします。(Học từ 泊まる.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>ホテルに泊まる<rt>ホテルにとまる</rt></ruby></span>",
        "hiragana": "ホテルにとまる",
        "meaning": "Trọ lại khách sạn",
        "type": "Động từ",
        "example": "ホテルに泊まるを べんきょうします。(Học từ ホテルに泊まる.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>掃除する<rt>そうじする</rt></ruby></span>",
        "hiragana": "そうじする",
        "meaning": "Dọn dẹp, vệ sinh",
        "type": "Động từ",
        "example": "掃除するを べんきょうします。(Học từ 掃除する.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>洗濯する<rt>せんたくする</rt></ruby></span>",
        "hiragana": "せんたくする",
        "meaning": "Giặt ( giũ )",
        "type": "Động từ",
        "example": "洗濯するを べんきょうします。(Học từ 洗濯する.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>練習する<rt>れんしゅうする</rt></ruby></span>",
        "hiragana": "れんしゅうする",
        "meaning": "Luyện tập",
        "type": "Động từ",
        "example": "練習するを べんきょうします。(Học từ 練習する.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>調子がいい<rt>ちょうしがいい</rt></ruby></span>",
        "hiragana": "ちょうしがいい",
        "meaning": "Sức khỏe tốt",
        "type": "Tính từ",
        "example": "調子がいいを べんきょうします。(Học từ 調子がいい.)"
      },
      {
        "kanji": "<span class=\"furigana\">お<ruby>茶<rt>ちゃ</rt></ruby></span>",
        "hiragana": "おちゃ",
        "meaning": "Trà",
        "type": "Danh từ",
        "example": "お茶を べんきょうします。(Học từ お茶.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>日<rt>にち</rt></ruby></span>",
        "hiragana": "ちょうしがわるい",
        "meaning": "Sức khỏe không tốt",
        "type": "Danh từ",
        "example": "日を べんきょうします。(Học từ 日.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>茶道<rt>さどう</rt></ruby></span>",
        "hiragana": "さどう",
        "meaning": "Trà đạo",
        "type": "Danh từ",
        "example": "京都で 茶道を 体験しました。(Trải nghiệm trà đạo tại Kyoto.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>相撲<rt>すもう</rt></ruby></span>",
        "hiragana": "すもう",
        "meaning": "Võ Sumo",
        "type": "Danh từ",
        "example": "相撲を べんきょうします。(Học từ 相撲.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>実は<rt>じつは</rt></ruby></span>",
        "hiragana": "じつは",
        "meaning": "Thật ra thì…",
        "type": "Danh từ",
        "example": "実はを べんきょうします。(Học từ 実は.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>何回も<rt>なんかいも</rt></ruby></span>",
        "hiragana": "なんかいも",
        "meaning": "Nhiều lần, mấy lần",
        "type": "Từ nghi vấn",
        "example": "何回もを べんきょうします。(Học từ 何回も.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>無理<rt>むり</rt></ruby></span>",
        "hiragana": "むり",
        "meaning": "Không thể",
        "type": "Danh từ",
        "example": "無理を べんきょうします。(Học từ 無理.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>外国<rt>がいこく</rt></ruby></span>",
        "hiragana": "がいこく",
        "meaning": "Nước ngoài",
        "type": "Danh từ",
        "example": "外国を べんきょうします。(Học từ 外国.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>体にいい<rt>からだにいい</rt></ruby></span>",
        "hiragana": "からだにいい",
        "meaning": "Tốt cho sức khỏe",
        "type": "Tính từ",
        "example": "体にいいを べんきょうします。(Học từ 体にいい.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>体に悪い<rt>からだにわるい</rt></ruby></span>",
        "hiragana": "からだにわるい",
        "meaning": "Không tốt cho sức khỏe",
        "type": "Tính từ",
        "example": "体に悪いを べんきょうします。(Học từ 体に悪い.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>そろそろ失礼します<rt>そろそろしつれいします</rt></ruby></span>",
        "hiragana": "そろそろしつれいします",
        "meaning": "Có lẽ sắp giờ tôi phải về rồi",
        "type": "Động từ",
        "example": "そろそろ失礼しますを べんきょうします。(Học từ そろそろ失礼します.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>調子が悪い<rt>ちょうしがわるい</rt></ruby></span>",
        "hiragana": "ちょうしがわるい",
        "meaning": "Tình trạng sức khỏe kém, trục trặc",
        "type": "Cụm từ",
        "example": "きのうから 体の 調子が 悪いです。(Từ hôm qua tình trạng sức khỏe trong người không tốt.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Quy tắc chia động từ thể た (Ta-form)",
        "explanation": "Quy tắc chia thể た: Hoàn toàn tương tự quy tắc chia thể て, chỉ cần thay đuôi て/で bằng た/だ.",
        "caution": "Cách chia thể た GIỐNG HỆT thể て (chỉ việc thay te thành ta, de thành da). Ngoại lệ: いきます -> いった (đã đi).",
        "examples": [
          {
            "type": "sentence",
            "context": "Ngoại lệ ikimasu thành itta",
            "jp": "きょねん きょうとへ いった。",
            "rawJp": "きょねん きょうとへ いった。",
            "vi": "Năm ngoái tôi đã đi Kyoto."
          },
          {
            "type": "sentence",
            "context": "Nhóm 1 âm ngắt",
            "jp": "きのう ほんを かった。",
            "rawJp": "きのう ほんを かった。",
            "vi": "Hôm qua tôi đã mua sách."
          },
          {
            "type": "sentence",
            "context": "Nhóm 1 âm mũi",
            "jp": "おさけを のんだ。",
            "rawJp": "おさけを のんだ。",
            "vi": "Tôi đã uống rượu."
          },
          {
            "type": "sentence",
            "context": "Nhóm 2 bỏ masu thêm ta",
            "jp": "あさごはんを たべた。",
            "rawJp": "あさごはんを たべた。",
            "vi": "Tôi đã ăn sáng."
          },
          {
            "type": "sentence",
            "context": "Nhóm 3 shimasu thành shita",
            "jp": "サッカーを した。",
            "rawJp": "サッカーを した。",
            "vi": "Tôi đã đá bóng."
          }
        ]
      },
      {
        "structure": "2. V-た ことが あります",
        "explanation": "Đã từng làm V (Biểu thị trải nghiệm, kinh nghiệm từng xảy ra trong quá khứ; Động từ thể た + ことが あります).",
        "caution": "BẪY THI: Động từ đứng trước ことが あります BẮT BUỘC phải ở thể た. Tuyệt đối không dùng thể từ điển hay thể ます.",
        "examples": [
          {
            "type": "sentence",
            "context": "Kinh nghiệm leo núi Phú Sĩ",
            "jp": "わたしは ふじさんに のぼった ことが あります。",
            "rawJp": "わたしは ふじさんに のぼった ことが あります。",
            "vi": "Tôi đã từng leo núi Phú Sĩ."
          },
          {
            "type": "sentence",
            "context": "Từng ăn Sushi",
            "jp": "すしを たべた ことが あります。",
            "rawJp": "すしを たべた ことが あります。",
            "vi": "Tôi đã từng ăn món Sushi."
          },
          {
            "type": "sentence",
            "context": "Chưa từng đi Nhật",
            "jp": "にほんへ いった ことが ありません。",
            "rawJp": "にほんへ いった ことが ありません。",
            "vi": "Tôi chưa từng đi Nhật Bản bao giờ."
          },
          {
            "type": "sentence",
            "context": "Từng cưỡi ngựa",
            "jp": "うまに のった ことが あります。",
            "rawJp": "うまに のった ことが あります。",
            "vi": "Tôi đã từng cưỡi ngựa."
          },
          {
            "type": "sentence",
            "context": "Hỏi trải nghiệm xem phim",
            "jp": "この えいがを みた ことが ありますか。… はい、あります。",
            "rawJp": "この えいがを みた ことが ありますか。… はい、あります。",
            "vi": "Bạn đã từng xem bộ phim này chưa? ...Vâng, tôi đã từng xem rồi."
          }
        ]
      },
      {
        "structure": "3. V1-たり、V2-たり します",
        "explanation": "Lúc thì làm V1, lúc thì làm V2... (Liệt kê một vài hành động tiêu biểu đại diện trong số nhiều hành động; kết thúc bằng します).",
        "caution": "BẪY THI: Cuối câu liệt kê たり BẮT BUỘC phải có động từ します (hoặc しました nếu là quá khứ). Không được dừng câu ngay sau たり.",
        "examples": [
          {
            "type": "sentence",
            "context": "Hoạt động ngày nghỉ",
            "jp": "にちようびは テニスを したり、えいがを みたり します。",
            "rawJp": "にちようびは テニスを したり、えいがを みたり します。",
            "vi": "Chủ Nhật tôi lúc thì chơi tennis, lúc thì xem phim."
          },
          {
            "type": "sentence",
            "context": "Hoạt động ngày hôm qua",
            "jp": "きのうは ほんを よんだり、おんがくを きいたり しました。",
            "rawJp": "きのうは ほんを よんだり、おんがくを きいたり しました。",
            "vi": "Hôm qua tôi lúc thì đọc sách, lúc thì nghe nhạc."
          },
          {
            "type": "sentence",
            "context": "Kỳ nghỉ hè",
            "jp": "なつやすみは およいだり、りょこうしたり したいです。",
            "rawJp": "なつやすみは およいだり、りょこうしたり したいです。",
            "vi": "Nghỉ hè tôi muốn lúc thì bơi lội, lúc thì đi du lịch."
          },
          {
            "type": "sentence",
            "context": "Hoạt động buổi tối",
            "jp": "まいばん テレビを みたり、ともだちと はなしたり します。",
            "rawJp": "まいばん テレビを みたり、ともだちと はなしたり します。",
            "vi": "Mỗi tối tôi lúc thì xem tivi, lúc thì trò chuyện với bạn bè."
          },
          {
            "type": "sentence",
            "context": "Dọn dẹp và giặt giũ",
            "jp": "そうじしたり、せんたくしたり しました。",
            "rawJp": "そうじしたり、せんたくしたり しました。",
            "vi": "Tôi đã dọn dẹp phòng, giặt giũ quần áo v.v."
          }
        ]
      },
      {
        "structure": "4. {A-く / Na-に / N-に} なります",
        "explanation": "Trở nên / Trở thành ~ (Biểu thị sự biến đổi trạng thái; Tính từ đuôi い đổi đuôi thành く; Tính từ đuôi な và Danh từ + に).",
        "caution": "Biến đổi trạng thái: Tính từ đuôi な và Danh từ BẮT BUỘC đi với trợ từ に (元気に なります, 医者に なります). Không dùng な.",
        "examples": [
          {
            "type": "sentence",
            "context": "Thời tiết ấm lên",
            "jp": "てんきが あたたかく なりました。",
            "rawJp": "てんきが あたたかく なりました。",
            "vi": "Thời tiết đã trở nên ấm áp."
          },
          {
            "type": "sentence",
            "context": "Trở nên khỏe mạnh",
            "jp": "げんきに なりました。",
            "rawJp": "げんきに なりました。",
            "vi": "Tôi đã trở nên khỏe mạnh trở lại."
          },
          {
            "type": "sentence",
            "context": "Ước mơ trở thành bác sĩ",
            "jp": "しょうらい いしゃに なりたいです。",
            "rawJp": "しょうらい いしゃに なりたいです。",
            "vi": "Tương lai tôi muốn trở thành bác sĩ."
          },
          {
            "type": "sentence",
            "context": "Trời tối dần",
            "jp": "そとが くらく なりました。",
            "rawJp": "そとが くらく なりました。",
            "vi": "Bên ngoài trời đã trở nên tối."
          },
          {
            "type": "sentence",
            "context": "Tuổi tác tăng lên",
            "jp": "２０さいに なりました。",
            "rawJp": "２０さいに なりました。",
            "vi": "Tôi đã bước sang tuổi 20."
          }
        ]
      }
    ]
  },
  {
    "id": "bai-20",
    "title": "Bài 20: Thể Thông Thường (普通形) & Giao Tiếp Thân Mật",
    "level": "Minna no Nihongo N5 (Bài 20)",
    "badge": "Thể Thông Thường (Futsukei)",
    "description": "Nắm vững thể thông thường (普通形) trong tiếng Nhật, sự khác biệt với thể lịch sự (丁寧形), cách đàm thoại tự nhiên với bạn bè, người thân, lược bỏ trợ từ và ngữ điệu trong văn nói.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>要<rt>い</rt></ruby>ります</span>",
        "hiragana": "いります",
        "meaning": "Cần [visa, tiền] (ビザが〜)",
        "type": "Động từ nhóm 1",
        "example": "ビザが 要ります。(Cần có thị thực visa.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>調<rt>しら</rt></ruby>べます</span>",
        "hiragana": "しらべます",
        "meaning": "Tra cứu, điều tra",
        "type": "Động từ nhóm 2",
        "example": "辞書で 調べます。(Tra cứu bằng từ điển.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>直<rt>なお</rt></ruby>します</span>",
        "hiragana": "なおします",
        "meaning": "Sửa chữa, đính chính",
        "type": "Động từ nhóm 1",
        "example": "作文を 直します。(Sửa bài văn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>修理<rt>しゅうり</rt></ruby>します</span>",
        "hiragana": "しゅうりします",
        "meaning": "Sửa chữa [máy móc, xe cộ]",
        "type": "Động từ nhóm 3",
        "example": "車を 修理します。(Sửa xe ô tô.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>電話<rt>でんわ</rt></ruby>します</span>",
        "hiragana": "でんわします",
        "meaning": "Gọi điện thoại",
        "type": "Động từ nhóm 3",
        "example": "友だちに 電話します。(Gọi điện thoại cho bạn bè.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>僕<rt>ぼく</rt></ruby></span>",
        "hiragana": "ぼく",
        "meaning": "Tôi (cách xưng hô thân mật của nam giới)",
        "type": "Đại từ",
        "example": "僕も 行くよ。(Tôi cũng đi đấy nhé.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>君<rt>きみ</rt></ruby></span>",
        "hiragana": "きみ",
        "meaning": "Cậu, bạn, mày (ngôi thứ 2 thân mật)",
        "type": "Đại từ",
        "example": "君は どうする？(Cậu tính sao?)"
      },
      {
        "kanji": "うん",
        "hiragana": "うん",
        "meaning": "Ừ, có (thân mật của はい)",
        "type": "Thán từ",
        "example": "うん、わかった。(Ừ, tớ hiểu rồi.)"
      },
      {
        "kanji": "ううん",
        "hiragana": "ううん",
        "meaning": "Không (thân mật của いいえ)",
        "type": "Thán từ",
        "example": "ううん、行かない。(Không, tớ không đi.)"
      },
      {
        "kanji": "サラリーマン",
        "hiragana": "サラリーマン",
        "meaning": "Người đi làm công ăn lương",
        "type": "Danh từ",
        "example": "日本の サラリーマン (Dân văn phòng Nhật Bản)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>言葉<rt>ことば</rt></ruby></span>",
        "hiragana": "ことば",
        "meaning": "Ngôn ngữ, từ ngữ, tiếng nói",
        "type": "Danh từ",
        "example": "日本の 言葉 (Tiếng Nhật)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>物価<rt>ぶっか</rt></ruby></span>",
        "hiragana": "ぶっか",
        "meaning": "Vật giá, giá cả sinh hoạt",
        "type": "Danh từ",
        "example": "東京は 物価が 高いです。(Vật giá Tokyo đắt đỏ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>着物<rt>きもの</rt></ruby></span>",
        "hiragana": "きもの",
        "meaning": "Áo Kimono truyền thống Nhật Bản",
        "type": "Danh từ",
        "example": "着物を 着ます。(Mặc áo Kimono.)"
      },
      {
        "kanji": "ビザ",
        "hiragana": "ビザ",
        "meaning": "Thị thực (visa)",
        "type": "Danh từ",
        "example": "学生ビザ (Visa du học sinh)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>初<rt>はじ</rt></ruby>め</span>",
        "hiragana": "はじめ",
        "meaning": "Lúc đầu, ban đầu",
        "type": "Danh từ",
        "example": "初めは 難しかったです。(Lúc đầu thấy rất khó.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>終<rt>お</rt></ruby>わり</span>",
        "hiragana": "おわり",
        "meaning": "Kết thúc, phần cuối",
        "type": "Danh từ",
        "example": "授業の 終わり (Hết giờ học)"
      },
      {
        "kanji": "こっち",
        "hiragana": "こっち",
        "meaning": "Đằng này (thân mật của こちら)",
        "type": "Đại từ chỉ định",
        "example": "こっちへ おいで。(Lại đằng này đi.)"
      },
      {
        "kanji": "そっち",
        "hiragana": "そっち",
        "meaning": "Đằng đó (thân mật của そちら)",
        "type": "Đại từ chỉ định",
        "example": "そっちは どう？(Bên đằng cậu thế nào?)"
      },
      {
        "kanji": "あっち",
        "hiragana": "あっち",
        "meaning": "Đằng kia (thân mật của あちら)",
        "type": "Đại từ chỉ định",
        "example": "あっちへ 行こう。(Đi đằng kia đi.)"
      },
      {
        "kanji": "どっち",
        "hiragana": "どっち",
        "meaning": "Đằng nào, cái nào trong hai cái (thân mật của どちら)",
        "type": "Đại từ chỉ định",
        "example": "どっちが いい？(Cậu thích cái nào hơn?)"
      },
      {
        "kanji": "みんなで",
        "hiragana": "みんなで",
        "meaning": "Mọi người cùng nhau",
        "type": "Phó từ",
        "example": "みんなで 歌いましょう。(Mọi người cùng nhau hát nào.)"
      },
      {
        "kanji": "〜けど",
        "hiragana": "〜けど",
        "meaning": "Nhưng mà (văn nói thân mật của が)",
        "type": "Liên từ",
        "example": "高いけど、おいしい。(Đắt nhưng mà ngon.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>調<rt>しら</rt></ruby>べる</span>",
        "hiragana": "しらべる",
        "meaning": "Tra cứu, tìm hiểu",
        "type": "Động từ",
        "example": "調べるを べんきょうします。(Học từ 調べる.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>直<rt>なお</rt></ruby>す</span>",
        "hiragana": "なおす",
        "meaning": "Sửa chữa",
        "type": "Danh từ",
        "example": "直すを べんきょうします。(Học từ 直す.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>始<rt>はじ</rt></ruby>め</span>",
        "hiragana": "はじめ",
        "meaning": "Đầu ( Đầu tháng )",
        "type": "Danh từ",
        "example": "始めを べんきょうします。(Học từ 始め.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>皆で<rt>みんなで</rt></ruby></span>",
        "hiragana": "みんなで",
        "meaning": "Tất cả, mọi người",
        "type": "Danh từ",
        "example": "皆でを べんきょうします。(Học từ 皆で.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>要<rt>い</rt></ruby>る</span>",
        "hiragana": "いる",
        "meaning": "Cần",
        "type": "Động từ",
        "example": "要るを べんきょうします。(Học từ 要る.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>修理する<rt>しゅうりする</rt></ruby></span>",
        "hiragana": "しゅうりする",
        "meaning": "Sửa chữa máy móc",
        "type": "Động từ",
        "example": "修理するを べんきょうします。(Học từ 修理する.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>今月の始め<rt>こんげつのはじめ</rt></ruby></span>",
        "hiragana": "こんげつのはじめ",
        "meaning": "Đầu tháng này",
        "type": "Danh từ",
        "example": "今月の始めを べんきょうします。(Học từ 今月の始め.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>今月の終わり<rt>こんげつのおわり</rt></ruby></span>",
        "hiragana": "こんげつのおわり",
        "meaning": "Cuối tháng này",
        "type": "Danh từ",
        "example": "今月の終わりを べんきょうします。(Học từ 今月の終わり.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>この間<rt>このあいだ</rt></ruby></span>",
        "hiragana": "このあいだ",
        "meaning": "Vừa rồi, Hôm  nọ",
        "type": "Danh từ",
        "example": "この間は どうも ありがとう。(Hôm nọ cảm ơn bạn nhiều nhé.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>場所<rt>ばしょ</rt></ruby></span>",
        "hiragana": "ばしょ",
        "meaning": "Địa điểm, chổ",
        "type": "Danh từ",
        "example": "集合の 場所は どこですか。(Địa điểm tập trung ở đâu?)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>待っているよ<rt>まっているよ</rt></ruby></span>",
        "hiragana": "まっているよ",
        "meaning": "Mình đang chờ đấy",
        "type": "Danh từ",
        "example": "待っているよを べんきょうします。(Học từ 待っているよ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>色々<rt>いろいろ</rt></ruby></span>",
        "hiragana": "いろいろ",
        "meaning": "Nhiều",
        "type": "Danh từ",
        "example": "色々を べんきょうします。(Học từ 色々.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Bảng đối chiếu Thể lịch sự (丁寧体) vs Thể thông thường (普通体)",
        "explanation": "Đối chiếu quy tắc chuyển đổi: Động từ (ます -> Thể từ điển, ません -> ない, ました -> た, ませんでした -> なかった); Tính từ đuôi い (bỏ です); Tính từ đuôi な & Danh từ (です -> だ, でした -> だった, じゃありません -> じゃない).",
        "caution": "BẪY THI CỰC QUAN TRỌNG: Câu khẳng định của Danh từ và Tính từ đuôi な trong thể thông thường là だ (静かだ, 暇だ), nhưng trong CÂU HỎI thì BỎ だ và lên giọng (暇？ chứ không nói 暇だ？).",
        "examples": [
          {
            "type": "sentence",
            "context": "Đối chiếu động từ thông thường",
            "jp": "あした とうきょうへ いく。",
            "rawJp": "あした とうきょうへ いく。",
            "vi": "Ngày mai tôi đi Tokyo. (Thể thông thường của 行きます)"
          },
          {
            "type": "sentence",
            "context": "Phủ định quá khứ thông thường",
            "jp": "きのう なにも たべなかった。",
            "rawJp": "きのう なにも たべなかった。",
            "vi": "Hôm qua tôi chẳng ăn gì cả. (Thể thông thường của 食べませんでした)"
          },
          {
            "type": "sentence",
            "context": "Tính từ đuôi i bỏ desu",
            "jp": "この りょうりは おいしい。",
            "rawJp": "この りょうりは おいしい。",
            "vi": "Món này ngon. (Thể thông thường của おいしいです)"
          },
          {
            "type": "sentence",
            "context": "Tính từ đuôi na thành da",
            "jp": "きょうは ひまだ。",
            "rawJp": "きょうは ひまだ。",
            "vi": "Hôm nay tôi rảnh rỗi. (Thể thông thường của 暇です)"
          },
          {
            "type": "sentence",
            "context": "Danh từ phủ định thành janai",
            "jp": "わたしは がくせいじゃない。",
            "rawJp": "わたしは がくせいじゃない。",
            "vi": "Tôi không phải là học sinh. (Thể thông thường của 学生じゃありません)"
          }
        ]
      },
      {
        "structure": "2. Hội thoại thân mật: Lược bỏ trợ từ & Đổi ngữ điệu",
        "explanation": "Quy tắc văn đàm thoại thân mật giữa bạn bè, gia đình: Lược bỏ trợ từ は, を, が khi ngữ cảnh rõ ràng; lên giọng cuối câu hỏi và bỏ trợ từ か; はい đổi thành うん, いいえ đổi thành ううん.",
        "caution": "Trong hội thoại thân mật, câu hỏi BỎ trợ từ か và BỎ chữ だ, chỉ cần lên giọng ở cuối câu (Ví dụ: ご飯食べる？ / 明日暇？). Trả lời: Ừ là うん, Không là ううん.",
        "examples": [
          {
            "type": "dialogue",
            "context": "Hỏi ăn cơm thân mật",
            "lines": [
              {
                "speaker": "A",
                "jp": "ごはん [を] たべる？",
                "rawJp": "ごはん たべる",
                "vi": "Ăn cơm không?"
              },
              {
                "speaker": "B",
                "jp": "うん、たべる。",
                "rawJp": "うん、たべる。",
                "vi": "Ừ, ăn chứ."
              }
            ]
          },
          {
            "type": "dialogue",
            "context": "Hỏi thời gian rảnh thân mật",
            "lines": [
              {
                "speaker": "A",
                "jp": "あした ひま？",
                "rawJp": "あした ひま",
                "vi": "Mai rảnh không?"
              },
              {
                "speaker": "B",
                "jp": "ううん、ひまじゃない。",
                "rawJp": "ううん、ひまじゃない。",
                "vi": "Không, không rảnh."
              }
            ]
          },
          {
            "type": "sentence",
            "context": "Uống cà phê không",
            "jp": "コーヒー [を] のむ？ … うん、のむ。",
            "rawJp": "コーヒー のむ？ … うん、のむ。",
            "vi": "Uống cà phê không? ...Ừ, uống."
          },
          {
            "type": "sentence",
            "context": "Hỏi đồ vật đâu",
            "jp": "ハサミ [は] どこ？ … そこに あるよ。",
            "rawJp": "ハサミ どこ？ … そこに あるよ。",
            "vi": "Kéo ở đâu thế? ...Ở đó kìa."
          },
          {
            "type": "sentence",
            "context": "Hỏi đi đâu đấy",
            "jp": "いまから どこ [へ] いくの？ … コンビニ。",
            "rawJp": "いまから どこ いくの？ … コンビニ。",
            "vi": "Bây giờ đi đâu đấy? ...Đi cửa hàng tiện lợi."
          }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lessons_16_20;
}
