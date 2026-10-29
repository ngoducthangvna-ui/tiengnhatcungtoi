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
        "structure": "1. V1-て、V2-て、... V-ます/ました (Nối chuỗi hành động)",
        "explanation": "Khi muốn diễn tả hai hay nhiều hành động diễn ra theo trình tự thời gian, ta chia các động từ đứng trước về thể て, động từ cuối cùng chia theo thì của cả câu.",
        "caution": "Thì của toàn bộ câu (quá khứ, tương lai hay phủ định) hoàn toàn do động từ cuối cùng quyết định.",
        "examples": [
          {
            "type": "sentence",
            "context": "Liệt kê chuỗi sinh hoạt buổi sáng",
            "jp": "あさ 6<span class=\"furigana\"><ruby>時<rt>じ</rt></ruby></span>に <span class=\"furigana\"><ruby>起<rt>お</rt></ruby>きて</span>、ジョギングを して、シャワーを <span class=\"furigana\"><ruby>浴<rt>あ</rt></ruby>びました</span>。",
            "rawJp": "あさ6時に起きて、ジョギングをして、シャワーを浴びました。",
            "vi": "Buổi sáng tôi thức dậy lúc 6 giờ, chạy bộ rồi tắm vòi sen."
          },
          {
            "type": "dialogue",
            "context": "Hỏi kế hoạch ngày nghỉ",
            "lines": [
              {
                "speaker": "A",
                "jp": "きのう どこへ <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>きました</span>か。",
                "rawJp": "きのうどこへ行きましたか。",
                "vi": "Hôm qua bạn đã đi đâu thế?"
              },
              {
                "speaker": "B",
                "jp": "<span class=\"furigana\"><ruby>銀座<rt>ぎんざ</rt></ruby></span>へ <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>って</span>、<span class=\"furigana\"><ruby>映画<rt>えいが</rt></ruby></span>を <span class=\"furigana\"><ruby>見<rt>み</rt></ruby>て</span>、お<span class=\"furigana\"><ruby>茶<rt>ちゃ</rt></ruby></span>を <span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>みました</span>。",
                "rawJp": "銀座へ行って、映画を見て、お茶を飲みました。",
                "vi": "Tôi đã đến Ginza, xem phim rồi đi uống trà."
              }
            ]
          }
        ]
      },
      {
        "structure": "2. V1-てから、V2 (Sau khi làm V1 thì làm V2)",
        "explanation": "Nhấn mạnh hành động V1 bắt buộc phải hoàn thành trước thì hành động V2 mới bắt đầu xảy ra.",
        "caution": "V1-てから không phụ thuộc vào thì của câu. Vế V2 quyết định thời thì.",
        "examples": [
          {
            "type": "sentence",
            "context": "Trình tự ăn uống",
            "jp": "この <span class=\"furigana\"><ruby>仕事<rt>しごと</rt></ruby></span>が <span class=\"furigana\"><ruby>終<rt>お</rt></ruby>わってから</span>、ご<span class=\"furigana\"><ruby>飯<rt>はん</rt></ruby></span>を <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べます</span>。",
            "rawJp": "この仕事が終わってから、ご飯を食べます。",
            "vi": "Sau khi công việc này xong, tôi sẽ ăn cơm."
          },
          {
            "type": "dialogue",
            "context": "Hướng dẫn rút tiền ATM",
            "lines": [
              {
                "speaker": "A",
                "jp": "お<span class=\"furigana\"><ruby>金<rt>かね</rt></ruby></span>は どうやって <span class=\"furigana\"><ruby>下<rt>お</rt></ruby>ろします</span>か。",
                "rawJp": "お金はどうやって下ろしますか。",
                "vi": "Rút tiền như thế nào vậy ạ?"
              },
              {
                "speaker": "B",
                "jp": "カードを <span class=\"furigana\"><ruby>入<rt>い</rt></ruby>れてから</span>、<span class=\"furigana\"><ruby>暗証番号<rt>あんしょうばんごう</rt></ruby></span>を <span class=\"furigana\"><ruby>押<rt>お</rt></ruby>してください</span>。",
                "rawJp": "カードを入れてから、暗証番号を押してください。",
                "vi": "Sau khi cho thẻ vào, xin hãy bấm mã số pin."
              }
            ]
          }
        ]
      },
      {
        "structure": "3. Nối Tính từ & Danh từ (A-くて / Na-で / N-で)",
        "explanation": "• Tính từ đuôi い: Bỏ い thay bằng くて (大きくて、安くて).\n• Tính từ đuôi な: Bỏ な thay bằng で (静かで、きれいで).\n• Danh từ: Thêm で (日本人で、会社員で). Dùng để nối các đặc tính tương đồng.",
        "caution": "Chỉ dùng để nối các tính chất cùng chiều (cùng khen hoặc cùng chê). Nếu ngược chiều phải dùng が.",
        "examples": [
          {
            "type": "sentence",
            "context": "Miêu tả món ăn vừa ngon vừa rẻ",
            "jp": "あの レストランは <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby></span>が <span class=\"furigana\"><ruby>安<rt>やす</rt></ruby>くて</span>、おいしいです。",
            "rawJp": "あのレストランは食べ物が安くて、おいしいです。",
            "vi": "Nhà hàng đó đồ ăn vừa rẻ lại vừa ngon."
          },
          {
            "type": "sentence",
            "context": "Miêu tả người có nhiều ưu điểm",
            "jp": "サントスさんは <span class=\"furigana\"><ruby>親切<rt>しんせつ</rt></ruby>で</span>、おもしろい <span class=\"furigana\"><ruby>人<rt>ひと</rt></ruby></span>です。",
            "rawJp": "サントスさんは親切で、おもしろい人です。",
            "vi": "Anh Santos là người vừa tốt bụng vừa thú vị."
          }
        ]
      },
      {
        "structure": "4. N1 は N2 が Tính từ です (Miêu tả bộ phận/thuộc tính)",
        "explanation": "Dùng để miêu tả một bộ phận, đặc điểm hoặc thuộc tính N2 của đối tượng N1 (N1 đóng vai trò chủ đề toàn câu).",
        "caution": "Trợ từ đi với bộ phận đặc tính luôn là が, không dùng を hay は.",
        "examples": [
          {
            "type": "sentence",
            "context": "Miêu tả ngoại hình",
            "jp": "マリアさんは <span class=\"furigana\"><ruby>髪<rt>かみ</rt></ruby></span>が <span class=\"furigana\"><ruby>長<rt>なが</rt></ruby>い</span>です。",
            "rawJp": "マリアさんは髪が長いです。",
            "vi": "Bạn Maria có mái tóc dài."
          },
          {
            "type": "sentence",
            "context": "Miêu tả thành phố",
            "jp": "ハノイは <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby></span>が おいしいです。",
            "rawJp": "ハノイは食べ物がおいしいです。",
            "vi": "Hà Nội có đồ ăn rất ngon."
          }
        ]
      },
      {
        "structure": "5. どうやって & どの N (Hỏi cách thức & Chỉ định đối tượng)",
        "explanation": "• どうやって: Dùng để hỏi cách thức tiến hành một việc hoặc lộ trình đi lại từ điểm A đến B.\n• どの N: Dùng để hỏi xác định một vật thể N cụ thể trong nhóm từ 3 đối tượng trở lên.",
        "caution": "どの luôn đi liền trước một danh từ, không đứng độc lập.",
        "examples": [
          {
            "type": "dialogue",
            "context": "Hỏi cách đi đến trường",
            "lines": [
              {
                "speaker": "A",
                "jp": "<span class=\"furigana\"><ruby>大学<rt>だいがく</rt></ruby></span>まで どうやって <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>きます</span>か。",
                "rawJp": "大学までどうやって行きますか。",
                "vi": "Đến trường đại học bằng cách nào vậy bạn?"
              },
              {
                "speaker": "B",
                "jp": "<span class=\"furigana\"><ruby>京都駅<rt>きょうとえき</rt></ruby></span>から 16<span class=\"furigana\"><ruby>番<rt>ばん</rt></ruby></span>の バスに <span class=\"furigana\"><ruby>乗<rt>の</rt></ruby>って</span>、<span class=\"furigana\"><ruby>大学前<rt>だいがくまえ</rt></ruby></span>で <span class=\"furigana\"><ruby>降<rt>お</rt></ruby>ります</span>。",
                "rawJp": "京都駅から16番のバスに乗って、大学前で降ります。",
                "vi": "Từ ga Kyoto lên xe buýt số 16, rồi xuống ở điểm trước cổng trường đại học."
              }
            ]
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
        "structure": "1. Cách chia thể ない (Động từ thể Phủ định ngắn)",
        "explanation": "• Nhóm 1: Đổi âm hàng い trước ます thành âm hàng あ tương ứng + ない (かきます -> かかない, よみます -> よまない). Riêng い đổi thành わ (かいます -> かわない).\n• Nhóm 2: Bỏ ます + ない (たべます -> たべない, みます -> みない).\n• Nhóm 3: します -> しない, きます -> こない (đặc biệt phát âm konai). Động từ あります biến đổi thành ない.",
        "caution": "Chú ý đặc biệt: あります -> ない, きます -> こない, âm い ở nhóm 1 chuyển thành わ chứ không thành あ.",
        "examples": [
          {
            "type": "sentence",
            "context": "Ví dụ chia thể ない",
            "jp": "あしたは どこへも <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>かない</span>。",
            "rawJp": "あしたはどこへも行かない。",
            "vi": "Ngày mai tôi sẽ không đi đâu cả."
          }
        ]
      },
      {
        "structure": "2. V-ないで ください (Xin đừng làm gì đó)",
        "explanation": "Dùng để yêu cầu, nhắc nhở hoặc khuyên bảo đối phương không thực hiện một hành vi nào đó.",
        "caution": "V-ないで ください có tính chất yêu cầu lịch sự, dùng phổ biến trong giao tiếp hằng ngày và thông báo công cộng.",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhắc nhở nơi công cộng",
            "jp": "ここで <span class=\"furigana\"><ruby>写真<rt>しゃしん</rt></ruby></span>を <span class=\"furigana\"><ruby>撮<rt>と</rt></ruby>らないで</span> ください。",
            "rawJp": "ここで写真を撮らないでください。",
            "vi": "Xin đừng chụp ảnh ở đây."
          },
          {
            "type": "dialogue",
            "context": "Lời dặn của bác sĩ",
            "lines": [
              {
                "speaker": "A",
                "jp": "お<span class=\"furigana\"><ruby>風呂<rt>ふろ</rt></ruby></span>に <span class=\"furigana\"><ruby>入<rt>はい</rt></ruby>っても</span> いいですか。",
                "rawJp": "お風呂に入ってもいいですか。",
                "vi": "Tôi tắm bồn được không ạ?"
              },
              {
                "speaker": "B",
                "jp": "いいえ、<span class=\"furigana\"><ruby>熱<rt>ねつ</rt></ruby></span>が ありますから、きょうは お<span class=\"furigana\"><ruby>風呂<rt>ふろ</rt></ruby></span>に <span class=\"furigana\"><ruby>入<rt>はい</rt></ruby>らないで</span> ください。",
                "rawJp": "いいえ、熱がありますから、きょうはお風呂に入らないでください。",
                "vi": "Không được, vì bạn đang sốt nên hôm nay xin đừng ngâm bồn tắm."
              }
            ]
          }
        ]
      },
      {
        "structure": "3. V-なければ なりません (Phải làm gì đó)",
        "explanation": "Biểu thị một hành động có tính chất bắt buộc phải làm, do nghĩa vụ, quy định của pháp luật hoặc tình huống bắt buộc phải thực hiện.",
        "caution": "Dù mang đuôi phủ định (なければ), mẫu câu này diễn tả ý nghĩa khẳng định mạnh mẽ 'bắt buộc phải làm'.",
        "examples": [
          {
            "type": "sentence",
            "context": "Uống thuốc theo đơn",
            "jp": "<span class=\"furigana\"><ruby>薬<rt>くすり</rt></ruby></span>を <span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>まなければ</span> なりません。",
            "rawJp": "薬を飲まなければなりません。",
            "vi": "Tôi phải uống thuốc."
          },
          {
            "type": "dialogue",
            "context": "Hỏi hạn trả sách",
            "lines": [
              {
                "speaker": "A",
                "jp": "いつまでに 本を <span class=\"furigana\"><ruby>返<rt>かえ</rt></ruby>さなければ</span> なりませんか。",
                "rawJp": "いつまでに本を返さなければなりませんか。",
                "vi": "Phải trả sách trước thời gian nào ạ?"
              },
              {
                "speaker": "B",
                "jp": "<span class=\"furigana\"><ruby>来週<rt>らいしゅう</rt></ruby></span>の <span class=\"furigana\"><ruby>月曜日<rt>げつようび</rt></ruby></span>までに <span class=\"furigana\"><ruby>返<rt>かえ</rt></ruby>さなければ</span> なりません。",
                "rawJp": "来週の月曜日までに返さなければなりません。",
                "vi": "Phải trả sách trước thứ Hai tuần sau."
              }
            ]
          }
        ]
      },
      {
        "structure": "4. V-なくても いいです (Không cần làm gì cũng được)",
        "explanation": "Biểu thị sự cho phép không cần phải thực hiện hành động nào đó, không có tính bắt buộc.",
        "caution": "Thường dùng để trả lời khi được hỏi 'có bắt buộc phải làm không?'.",
        "examples": [
          {
            "type": "dialogue",
            "context": "Hỏi về việc đi làm ngày nghỉ",
            "lines": [
              {
                "speaker": "A",
                "jp": "あしたも <span class=\"furigana\"><ruby>来<rt>こ</rt></ruby>なければ</span> なりませんか。",
                "rawJp": "あしたも来なければなりませんか。",
                "vi": "Ngày mai tôi cũng phải đến hả anh?"
              },
              {
                "speaker": "B",
                "jp": "いいえ、あしたは <span class=\"furigana\"><ruby>来<rt>こ</rt></ruby>なくても</span> いいですよ。",
                "rawJp": "いいえ、あしたは来なくてもいいですよ。",
                "vi": "Không, ngày mai không cần đến cũng được mà."
              }
            ]
          }
        ]
      },
      {
        "structure": "5. N (thời gian) までに V (Hạn chót hoàn thành)",
        "explanation": "Trợ từ までに chỉ ra mốc thời gian giới hạn cuối cùng (deadline) mà hành động V phải được hoàn tất trước hoặc đúng vào thời điểm đó.",
        "caution": "Phân biệt: まで là hành động diễn ra liên tục đến mốc đó (5時まで勉強する); còn までに là hành động hoàn tất trước mốc đó (5時までにレポートを出す).",
        "examples": [
          {
            "type": "sentence",
            "context": "Quy định giờ giấc ký túc xá",
            "jp": "<span class=\"furigana\"><ruby>夜<rt>よる</rt></ruby></span> 10<span class=\"furigana\"><ruby>時<rt>じ</rt></ruby></span>までに <span class=\"furigana\"><ruby>帰<rt>かえ</rt></ruby>らなければ</span> なりません。",
            "rawJp": "夜10時までに帰らなければなりません。",
            "vi": "Phải về phòng trước 10 giờ tối."
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
        "structure": "1. Cách chia thể Từ Điển (辞書形 - Jishokei)",
        "explanation": "• Nhóm 1: Đổi âm hàng い trước ます sang âm hàng う tương ứng (かきます -> かく, よみます -> よむ, いきます -> いく).\n• Nhóm 2: Bỏ ます rồi thêm る (たべます -> たべる, みます -> みる).\n• Nhóm 3: します -> する, きます -> くる.",
        "caution": "Thể từ điển là dạng nguyên thể tìm thấy trong từ điển tiếng Nhật, nền tảng của ngữ pháp trung cấp.",
        "examples": [
          {
            "type": "sentence",
            "context": "Ví dụ thể từ điển",
            "jp": "ひらがなを <span class=\"furigana\"><ruby>書<rt>か</rt></ruby>く</span>。",
            "rawJp": "ひらがなを書く。",
            "vi": "Viết chữ Hiragana."
          }
        ]
      },
      {
        "structure": "2. N / V-る ことが できます (Khả năng làm được việc gì)",
        "explanation": "Dùng để diễn tả năng lực thực hiện hành động của con người hoặc điều kiện hoàn cảnh cho phép hành động xảy ra.",
        "caution": "Động từ bắt buộc phải chia về thể từ điển trước こと để danh từ hóa hành động.",
        "examples": [
          {
            "type": "sentence",
            "context": "Nói về khả năng ngôn ngữ",
            "jp": "ミラーさんは <span class=\"furigana\"><ruby>日本語<rt>にほんご</rt></ruby></span>を <span class=\"furigana\"><ruby>話<rt>はな</rt></ruby>す</span> ことが できます。",
            "rawJp": "ミラーさんは日本語を話すことができます。",
            "vi": "Anh Miller có thể nói được tiếng Nhật."
          },
          {
            "type": "dialogue",
            "context": "Hỏi thanh toán ở cửa hàng",
            "lines": [
              {
                "speaker": "A",
                "jp": "カードで <span class=\"furigana\"><ruby>払<rt>はら</rt></ruby>う</span> ことが できますか。",
                "rawJp": "カードで払うことができますか。",
                "vi": "Tôi có thể trả bằng thẻ được không?"
              },
              {
                "speaker": "B",
                "jp": "すみません、<span class=\"furigana\"><ruby>現金<rt>げんきん</rt></ruby></span>だけで お<span class=\"furigana\"><ruby>願<rt>ねが</rt></ruby>いします</span>。",
                "rawJp": "すみません、現金だけでお願いします。",
                "vi": "Xin lỗi quý khách, ở đây chỉ nhận tiền mặt thôi ạ."
              }
            ]
          }
        ]
      },
      {
        "structure": "3. わたしの 趣味は N / V-ることです (Nói về sở thích)",
        "explanation": "Dùng để giới thiệu sở thích bản thân một cách chi tiết và chính xác. Danh từ hóa động từ bằng V-ること.",
        "caution": "Nếu sở thích là một hành động cụ thể, bắt buộc phải dùng V-ること (không nói 趣味は 映画を見ます です).",
        "examples": [
          {
            "type": "sentence",
            "context": "Giới thiệu sở thích",
            "jp": "わたしの <span class=\"furigana\"><ruby>趣味<rt>しゅみ</rt></ruby></span>は <span class=\"furigana\"><ruby>写真<rt>しゃしん</rt></ruby></span>を <span class=\"furigana\"><ruby>撮<rt>と</rt></ruby>る</span> ことです。",
            "rawJp": "わたしの趣味は写真を撮ることです。",
            "vi": "Sở thích của tôi là chụp ảnh."
          }
        ]
      },
      {
        "structure": "4. V1-る / Nの / Thời lượng + まえに、V2 (Trước khi làm gì)",
        "explanation": "Diễn tả hành động V2 xảy ra trước mốc hành động V1 hoặc trước một danh từ/thời lượng nào đó.",
        "caution": "Động từ đứng trước まえに luôn ở thể từ điển V-る, bất kể thì của câu là quá khứ hay tương lai.",
        "examples": [
          {
            "type": "sentence",
            "context": "Thói quen sinh hoạt",
            "jp": "ご<span class=\"furigana\"><ruby>飯<rt>はん</rt></ruby></span>を <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べる</span> まえに、<span class=\"furigana\"><ruby>手<rt>て</rt></ruby></span>を <span class=\"furigana\"><ruby>洗<rt>あら</rt></ruby>います</span>。",
            "rawJp": "ご飯を食べるまえに、手を洗います。",
            "vi": "Trước khi ăn cơm, tôi rửa tay."
          },
          {
            "type": "sentence",
            "context": "Thời gian ngủ nghỉ",
            "jp": "<span class=\"furigana\"><ruby>寝<rt>ね</rt></ruby>る</span> まえに、<span class=\"furigana\"><ruby>日記<rt>にっき</rt></ruby></span>を <span class=\"furigana\"><ruby>書<rt>か</rt></ruby>きます</span>。",
            "rawJp": "寝るまえに、日記を書きます。",
            "vi": "Trước khi đi ngủ, tôi viết nhật ký."
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
        "structure": "1. Cách chia thể Ta (た形 - Quá khứ ngắn)",
        "explanation": "Quy tắc chia thể た hoàn toàn giống 100% với thể て (chỉ cần đổi て -> た, で -> だ).\n• い・ち・り -> った (かった, まった, とった)\n• み・び・に -> んだ (のんだ, あそんだ, しんだ)\n• き -> いた, ぎ -> いだ (かいた, いそいだ). Riêng いきます -> いった.\n• し -> した (はなした).\n• Nhóm 2: Bỏ ます + た (たべた, みた).\n• Nhóm 3: します -> した, きます -> きた.",
        "caution": "Trường hợp đặc biệt: 行きます chuyển thành 行った (itta).",
        "examples": [
          {
            "type": "sentence",
            "context": "Ví dụ thể Ta",
            "jp": "きのう <span class=\"furigana\"><ruby>本<rt>ほん</rt></ruby></span>を <span class=\"furigana\"><ruby>読<rt>よ</rt></ruby>んだ</span>。",
            "rawJp": "きのう本を読んだ。",
            "vi": "Hôm qua tôi đã đọc sách."
          }
        ]
      },
      {
        "structure": "2. V-た ことが あります (Đã từng trải nghiệm việc gì)",
        "explanation": "Dùng để diễn tả một trải nghiệm, kinh nghiệm từng xảy ra trong quá khứ.",
        "caution": "Chỉ dùng cho những sự kiện mang tính dấu ấn, trải nghiệm cá nhân; không dùng cho những việc sinh hoạt bình thường lặp lại mỗi ngày (như sáng nay ăn cơm).",
        "examples": [
          {
            "type": "sentence",
            "context": "Kinh nghiệm leo núi",
            "jp": "<span class=\"furigana\"><ruby>富士山<rt>ふじさん</rt></ruby></span>に <span class=\"furigana\"><ruby>登<rt>のぼ</rt></ruby>った</span> ことが あります。",
            "rawJp": "富士山に登ったことがあります。",
            "vi": "Tôi đã từng leo núi Phú Sĩ."
          },
          {
            "type": "dialogue",
            "context": "Hỏi về món ăn Nhật",
            "lines": [
              {
                "speaker": "A",
                "jp": "<span class=\"furigana\"><ruby>刺身<rt>さしみ</rt></ruby></span>を <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べた</span> ことが ありますか。",
                "rawJp": "刺身を食べたことがありますか。",
                "vi": "Bạn đã từng ăn gỏi cá sống sashimi bao giờ chưa?"
              },
              {
                "speaker": "B",
                "jp": "いいえ、<span class=\"furigana\"><ruby>一度<rt>いちど</rt></ruby>も</span> <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べた</span> ことが ありません。",
                "rawJp": "いいえ、一度も食べたことがありません。",
                "vi": "Chưa, tôi chưa từng ăn món đó lần nào cả."
              }
            ]
          }
        ]
      },
      {
        "structure": "3. V1-たり、V2-たり します (Liệt kê hành động tiêu biểu)",
        "explanation": "Dùng để chọn ra vài hành động tiêu biểu đại diện trong số nhiều hành động, không quan tâm thứ tự trước sau.",
        "caution": "Khác với V-て、V-て (nối hành động theo trình tự thời gian nghiêm ngặt), V-たり chỉ liệt kê hành vi tượng trưng.",
        "examples": [
          {
            "type": "sentence",
            "context": "Hoạt động ngày nghỉ",
            "jp": "<span class=\"furigana\"><ruby>日曜日<rt>にちようび</rt></ruby></span>は <span class=\"furigana\"><ruby>掃除<rt>そうじ</rt></ruby>したり</span>、<span class=\"furigana\"><ruby>洗濯<rt>せんたく</rt></ruby>したり</span> します。",
            "rawJp": "日曜日は掃除したり、洗濯したりします。",
            "vi": "Chủ nhật tôi thường khi thì dọn dẹp, khi thì giặt giũ đồ đạc."
          }
        ]
      },
      {
        "structure": "4. A-く / Na-に / N-に + なります (Biến đổi trạng thái)",
        "explanation": "Diễn tả sự thay đổi từ trạng thái này sang trạng thái khác theo thời gian ('trở nên...', 'trở thành...').\n• Tính từ đuôi い: Bỏ い + く なります (寒くなります).\n• Tính từ đuôi な: Bỏ な + に なります (元気に なります).\n• Danh từ: + に なります (先生に なります).",
        "caution": "Tính từ đuôi な và Danh từ đều đi với trợ từ に trước なります.",
        "examples": [
          {
            "type": "sentence",
            "context": "Sự thay đổi thời tiết",
            "jp": "<span class=\"furigana\"><ruby>寒<rt>さむ</rt></ruby>く</span> なりましたね。",
            "rawJp": "寒くなりましたね。",
            "vi": "Trời đã trở lạnh rồi nhỉ."
          },
          {
            "type": "sentence",
            "context": "Mục tiêu nghề nghiệp",
            "jp": "<span class=\"furigana\"><ruby>医者<rt>いしゃ</rt></ruby></span>に なりたいです。",
            "rawJp": "医者になりたいです。",
            "vi": "Tôi muốn trở thành bác sĩ."
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
        "structure": "1. Bảng đối chiếu Thể Lịch sự (丁寧形) và Thể Thông thường (普通形)",
        "explanation": "• Động từ:\n  - Khẳng định hiện tại: 書きます -> 書く\n  - Phủ định hiện tại: 書かない\n  - Khẳng định quá khứ: 書きました -> 書いた\n  - Phủ định quá khứ: 書かなかった\n• Tính từ đuôi い:\n  - Bỏ です: おいしいです -> おいしい / おいしくない / おいしかった / おいしくなかった\n• Tính từ đuôi な & Danh từ:\n  - です -> だ\n  - じゃありません -> ではない / じゃない\n  - でした -> だった\n  - じゃありませんでした -> じゃなかった",
        "caution": "Trong câu hỏi thân mật, kết thúc bằng danh từ hoặc tính từ đuôi な thì BỎ だ và lên giọng (ví dụ: 暇？ chứ không nói 暇だ？).",
        "examples": [
          {
            "type": "sentence",
            "context": "Nói chuyện thân mật",
            "jp": "あした <span class=\"furigana\"><ruby>東京<rt>とうきょう</rt></ruby></span>へ <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>く</span>よ。",
            "rawJp": "あした東京へ行くよ。",
            "vi": "Mai tớ đi Tokyo đấy nhé."
          }
        ]
      },
      {
        "structure": "2. Đàm thoại câu hỏi & trả lời trong Thể Thông thường",
        "explanation": "• Lược bỏ trợ từ nghi vấn か, thay bằng cách lên giọng ở cuối câu.\n• Trợ từ chỉ đối tượng は, を, へ thường được lược bỏ khi ngữ cảnh đã rõ ràng.\n• Trả lời: はい chuyển thành うん, いいえ chuyển thành ううん.",
        "caution": "Khi viết, câu hỏi thân mật thường đặt dấu '?' ở cuối câu để biểu thị lên giọng.",
        "examples": [
          {
            "type": "dialogue",
            "context": "Hai người bạn hỏi thăm nhau",
            "lines": [
              {
                "speaker": "A",
                "jp": "きのう ビール <span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>んだ</span>？",
                "rawJp": "きのうビール飲んだ？",
                "vi": "Hôm qua cậu có uống bia không?"
              },
              {
                "speaker": "B",
                "jp": "ううん、<span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>まなかった</span>。",
                "rawJp": "ううん、飲まなかった。",
                "vi": "Không, tớ không uống."
              }
            ]
          },
          {
            "type": "dialogue",
            "context": "Rủ rê ăn cơm trưa",
            "lines": [
              {
                "speaker": "A",
                "jp": "<span class=\"furigana\"><ruby>今<rt>いま</rt></ruby></span>、お<span class=\"furigana\"><ruby>腹<rt>なか</rt></ruby></span> すいた？",
                "rawJp": "今、お腹すいた？",
                "vi": "Giờ cậu đã đói bụng chưa?"
              },
              {
                "speaker": "B",
                "jp": "うん、すいた。いっしょに ご<span class=\"furigana\"><ruby>飯<rt>はん</rt></ruby> <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べよう</span>。",
                "rawJp": "うん、すいた。いっしょにご飯食べよう。",
                "vi": "Ừ, đói rồi. Đi ăn cùng nhau đi."
              }
            ]
          }
        ]
      },
      {
        "structure": "3. Liên từ nối thân mật 〜けど",
        "explanation": "Liên từ けど được dùng trong văn nói thân mật để nối hai vế tương phản hoặc mở đầu câu chuyện, tương đương với が trong thể lịch sự.",
        "caution": "けど chỉ dùng trong văn nói với bạn bè, người bằng hoặc dưới tuổi; trong văn trang trọng phải dùng が.",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhận xét vé xem phim",
            "jp": "チケット、ちょっと <span class=\"furigana\"><ruby>高<rt>たか</rt></ruby>い</span>けど、すごく おもしろかったよ。",
            "rawJp": "チケット、ちょっと高いけど、すごくおもしろかったよ。",
            "vi": "Vé xem phim hơi đắt một chút nhưng cực kỳ hay luôn đó."
          }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lessons_16_20;
}
