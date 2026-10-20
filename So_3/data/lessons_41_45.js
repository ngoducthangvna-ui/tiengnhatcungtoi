// Lessons 41 to 45: Minna no Nihongo Shokyuu II (N4 Standard Curriculum)
const lessons_41_45 = [
  {
    "id": "bai-41",
    "title": "Bài 41: Cho & Nhận Trong Giao Tiếp (いただきます / くださいます / やります)",
    "level": "Minna no Nihongo N4 (Bài 41)",
    "badge": "Kính ngữ Cho & Nhận",
    "description": "Nắm vững hệ thống kính ngữ của hành động cho và nhận vật chất cũng như hành vi: いただきます (khiêm nhường nhận từ bề trên), くださいます (tôn kính người trên cho mình), やります (cho người dưới/động thực vật), và lời nhờ cậy lịch sự 〜ていただけませんか.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\">いただきます</span>",
        "hiragana": "いただきます",
        "meaning": "Nhận [từ người bề trên] (khiêm nhường của もらいます)",
        "type": "Động từ nhóm 1",
        "example": "社長に お土産を いただきました。(Tôi nhận quà lưu niệm từ giám đốc.)"
      },
      {
        "kanji": "<span class=\"furigana\">くださいます</span>",
        "hiragana": "くださいます",
        "meaning": "Cho, tặng [cho tôi/người nhà tôi] (tôn kính của くれます)",
        "type": "Động từ nhóm 1",
        "example": "先生が 本を くださいました。(Thầy giáo tặng sách cho tôi.)"
      },
      {
        "kanji": "<span class=\"furigana\">やります</span>",
        "hiragana": "やります",
        "meaning": "Cho [cấp dưới, em út, động thực vật]",
        "type": "Động từ nhóm 1",
        "example": "犬に えさを やります。(Cho chó ăn thức ăn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>呼<rt>よ</rt></ruby>びます</span>",
        "hiragana": "よびます",
        "meaning": "Gọi [taxi, tên]",
        "type": "Động từ nhóm 1",
        "example": "タクシーを 呼びます。(Gọi xe taxi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>取<rt>と</rt></ruby>り<ruby>替<rt>か</rt></ruby>えます</span>",
        "hiragana": "とりかえます",
        "meaning": "Đổi lại, thay thế mới",
        "type": "Động từ nhóm 2",
        "example": "電池を 取り替えます。(Thay pin mới.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>親切<rt>しんせつ</rt></ruby>に します</span>",
        "hiragana": "しんせつにします",
        "meaning": "Đối xử tốt bụng, tử tế với ai (đi với に)",
        "type": "Cụm động từ",
        "example": "お年寄りに 親切に します。(Đối xử tử tế với người cao tuổi.)"
      },
      {
        "kanji": "<span class=\"furigana\">かわいい</span>",
        "hiragana": "かわいい",
        "meaning": "Dễ thương, đáng yêu",
        "type": "Tính từ đuôi い",
        "example": "かわいい 子猫ですね。(Chú mèo con đáng yêu quá.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>珍<rt>めずら</rt></ruby>しい</span>",
        "hiragana": "めずらしい",
        "meaning": "Quý hiếm, hiếm thấy",
        "type": "Tính từ đuôi い",
        "example": "珍しい 切手を もらいました。(Nhận được con tem quý hiếm.)"
      },
      {
        "kanji": "<span class=\"furigana\">お<ruby>祝<rt>いわ</rt></ruby>い</span>",
        "hiragana": "おいわい",
        "meaning": "Quà mừng, lời chúc mừng",
        "type": "Danh từ",
        "example": "結婚の お祝いを 送ります。(Gửi quà mừng đám cưới.)"
      },
      {
        "kanji": "<span class=\"furigana\">お<ruby>年玉<rt>としだま</rt></ruby></span>",
        "hiragana": "おとしだま",
        "meaning": "Tiền lì xì mừng tuổi đầu năm mới",
        "type": "Danh từ",
        "example": "子どもに お年玉を やります。(Lì xì tiền mừng tuổi cho các cháu nhỏ.)"
      },
      {
        "kanji": "<span class=\"furigana\">お<ruby>見舞<rt>みま</rt></ruby>い</span>",
        "hiragana": "おみまい",
        "meaning": "Thăm hỏi người ốm, quà thăm bệnh",
        "type": "Danh từ",
        "example": "病院へ お見舞いに 行きます。(Đến viện thăm người ốm.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>興味<rt>きょうみ</rt></ruby></span>",
        "hiragana": "きょうみ",
        "meaning": "Hứng thú, quan tâm (興味が あります)",
        "type": "Danh từ",
        "example": "日本文化に 興味が あります。(Tôi có hứng thú với văn hóa Nhật.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>情報<rt>じょうほう</rt></ruby></span>",
        "hiragana": "じょうほう",
        "meaning": "Thông tin dữ liệu",
        "type": "Danh từ",
        "example": "インターネットで 情報を 集めます。(Thu thập thông tin trên internet.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>文法<rt>ぶんぽう</rt></ruby></span>",
        "hiragana": "ぶんぽう",
        "meaning": "Ngữ pháp",
        "type": "Danh từ",
        "example": "日本語の 文法を 勉強します。(Học ngữ pháp tiếng Nhật.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>発音<rt>はつおん</rt></ruby></span>",
        "hiragana": "はつおん",
        "meaning": "Phát âm",
        "type": "Danh từ",
        "example": "きれいな 発音ですね。(Phát âm chuẩn hay quá.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>猿<rt>さる</rt></ruby></span>",
        "hiragana": "さる",
        "meaning": "Con khỉ",
        "type": "Danh từ",
        "example": "猿が 木に 登って います。(Con khỉ đang trèo cây.)"
      },
      {
        "kanji": "<span class=\"furigana\">えさ</span>",
        "hiragana": "えさ",
        "meaning": "Mồi, thức ăn cho động vật/thú cưng",
        "type": "Danh từ",
        "example": "魚に えさを やります。(Cho cá ăn mồi.)"
      },
      {
        "kanji": "<span class=\"furigana\">おもちゃ</span>",
        "hiragana": "おもちゃ",
        "meaning": "Đồ chơi trẻ em",
        "type": "Danh từ",
        "example": "子どもに おもちゃを 買いました。(Mua đồ chơi cho con.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>絵本<rt>えほん</rt></ruby></span>",
        "hiragana": "えほん",
        "meaning": "Sách tranh truyện tranh cho trẻ em",
        "type": "Danh từ",
        "example": "子どもに 絵本を 読んで やります。(Đọc sách tranh cho con nghe.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>絵<rt>え</rt></ruby>はがき</span>",
        "hiragana": "えはがき",
        "meaning": "Bưu ảnh, bưu thiếp có tranh ảnh",
        "type": "Danh từ",
        "example": "京都の 絵はがきを 送ります。(Gửi bưu thiếp cảnh Kyoto.)"
      },
      {
        "kanji": "<span class=\"furigana\">ドライバー</span>",
        "hiragana": "ドライバー",
        "meaning": "Cái tua-vít vặn ốc / tài xế",
        "type": "Danh từ",
        "example": "ドライバーで ねじを 締めます。(Vặn chặt đinh ốc bằng tua-vít.)"
      },
      {
        "kanji": "<span class=\"furigana\">ハンカチ</span>",
        "hiragana": "ハンカチ",
        "meaning": "Khăn tay",
        "type": "Danh từ",
        "example": "ハンカチで 汗を ふきます。(Lau mồ hôi bằng khăn tay.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>靴下<rt>くつした</rt></ruby></span>",
        "hiragana": "くつした",
        "meaning": "Đôi tất, bít tất",
        "type": "Danh từ",
        "example": "暖かい 靴下を 履きます。(Đi đôi tất ấm áp.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>手袋<rt>てぶくろ</rt></ruby></span>",
        "hiragana": "てぶくろ",
        "meaning": "Găng tay, bao tay",
        "type": "Danh từ",
        "example": "革の 手袋を はめます。(Đeo găng tay da.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>幼稚園<rt>ようちえん</rt></ruby></span>",
        "hiragana": "ようちえん",
        "meaning": "Trường mầm non, trường mẫu giáo",
        "type": "Danh từ",
        "example": "息子は 幼稚園に 通って います。(Con trai tôi học mẫu giáo.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>暖房<rt>だんぼう</rt></ruby></span>",
        "hiragana": "だんぼう",
        "meaning": "Hệ thống sưởi ấm, máy sưởi",
        "type": "Danh từ",
        "example": "暖房を つけて 部屋を 温めます。(Bật sưởi ấm phòng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>冷房<rt>れいぼう</rt></ruby></span>",
        "hiragana": "れいぼう",
        "meaning": "Hệ thống làm lạnh, máy điều hòa mát",
        "type": "Danh từ",
        "example": "夏は 冷房が 欠かせません。(Mùa hè không thể thiếu máy lạnh.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>温度<rt>おんど</rt></ruby></span>",
        "hiragana": "おんど",
        "meaning": "Nhiệt độ",
        "type": "Danh từ",
        "example": "お風呂の 温度を 調節します。(Điều chỉnh nhiệt độ nước tắm.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>祖父<rt>そふ</rt></ruby></span>",
        "hiragana": "そふ",
        "meaning": "Ông (của mình)",
        "type": "Danh từ",
        "example": "祖父は 80歳ですが 元気です。(Ông tôi 80 tuổi nhưng vẫn khỏe.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>祖母<rt>そぼ</rt></ruby></span>",
        "hiragana": "そぼ",
        "meaning": "Bà (của mình)",
        "type": "Danh từ",
        "example": "祖母に セーターを もらいました。(Bà tặng tôi áo len.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>孫<rt>まご</rt></ruby></span>",
        "hiragana": "まご",
        "meaning": "Cháu (nội/ngoại)",
        "type": "Danh từ",
        "example": "孫と 公園で 遊びます。(Chơi với cháu ở công viên.)"
      },
      {
        "kanji": "<span class=\"furigana\">おじ</span>",
        "hiragana": "おじ",
        "meaning": "Chú, bác trai, cậu (của mình)",
        "type": "Danh từ",
        "example": "おじは 医者を して います。(Bác trai tôi làm bác sĩ.)"
      },
      {
        "kanji": "<span class=\"furigana\">おば</span>",
        "hiragana": "おば",
        "meaning": "Cô, dì, bác gái (của mình)",
        "type": "Danh từ",
        "example": "おばの 家に 泊まりました。(Tôi trọ lại nhà cô.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>この間<rt>このあいだ</rt></ruby></span>",
        "hiragana": "このあいだ",
        "meaning": "Hôm nọ, vừa rồi, dạo gần đây",
        "type": "Phó từ / Danh từ",
        "example": "この間は どうも ありがとう。(Hôm nọ cảm ơn bạn nhiều nhé.)"
      },
      {
        "kanji": "<span class=\"furigana\">ひとこと</span>",
        "hiragana": "ひとこと",
        "meaning": "Một vài lời, đôi lời",
        "type": "Danh từ",
        "example": "ひとこと お礼を 言いたいです。(Tôi muốn nói đôi lời cảm ơn.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Kính ngữ Cho - Nhận: いただきます / くださいます / やります",
        "explanation": "• いただきます: Là thể khiêm nhường của もらいます. Dùng khi bản thân nhận đồ vật từ người có địa vị cao hơn (thầy cô, sếp, đối tác: 社長に/から いただきました).\n• くださいます: Là thể tôn kính của くれます. Dùng khi người bề trên tặng/cho bản thân mình hoặc gia đình mình đồ vật (先生が くだいました).\n• やります: Dùng khi người nói cho con cái, cấp dưới, người ít tuổi hơn nhiều, hoặc cho động vật ăn, tưới nước cho cây cỏ (犬に えさを やります).",
        "caution": "Với người ngang hàng hoặc người thân lớn tuổi hơn trong nhà (như tặng mẹ) thì dùng あげます chứ không dùng やります.",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhận quà từ giám đốc",
            "jp": "<span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>は <span class=\"furigana\"><ruby>社長<rt>しゃちょう</rt></ruby></span>に 時計を <span class=\"furigana\">いただきました</span>。",
            "rawJp": "私は社長に時計をいただきました。",
            "vi": "Tôi đã nhận được chiếc đồng hồ từ ngài giám đốc."
          },
          {
            "type": "sentence",
            "context": "Trưởng phòng tặng sách cho tôi",
            "jp": "<span class=\"furigana\"><ruby>部長<rt>ぶちょう</rt></ruby></span>が <span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>に この <span class=\"furigana\"><ruby>本<rt>ほん</rt></ruby></span>を <span class=\"furigana\">くださいました</span>。",
            "rawJp": "部長が私にこの本をくださいました。",
            "vi": "Trưởng phòng đã tặng cho tôi cuốn sách này."
          }
        ]
      },
      {
        "structure": "2. V-て いただきます (Được người bề trên làm giúp cho việc gì)",
        "explanation": "Là thể khiêm nhường của V-てもらいます. Biểu thị lòng biết ơn sâu sắc khi được người có vai vế cao hơn làm giúp cho một hành động có lợi.",
        "caution": "Người thực hiện hành động đi với trợ từ に (hoặc から).",
        "examples": [
          {
            "type": "sentence",
            "context": "Được thầy giáo sửa bài văn",
            "jp": "<span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>は <span class=\"furigana\"><ruby>先生<rt>せんせい</rt></ruby></span>に <span class=\"furigana\"><ruby>作文<rt>さくぶん</rt></ruby></span>を <span class=\"furigana\"><ruby>直<rt>なお</rt></ruby>して</span> <span class=\"furigana\">いただきました</span>。",
            "rawJp": "私は先生に作文を直していただきました。",
            "vi": "Tôi đã được thầy giáo sửa giúp bài văn."
          }
        ]
      },
      {
        "structure": "3. V-て くださいます (Người bề trên làm giúp cho mình/người nhà)",
        "explanation": "Là thể tôn kính của V-てくれます. Chủ ngữ là người bề trên (đi với trợ từ が) thực hiện hành động giúp đỡ mình.",
        "caution": "Chủ ngữ luôn là người bề trên.",
        "examples": [
          {
            "type": "sentence",
            "context": "Trưởng phòng dạy chơi golf cho tôi",
            "jp": "<span class=\"furigana\"><ruby>課長<rt>かちょう</rt></ruby></span>が <span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>に ゴルフを <span class=\"furigana\"><ruby>教<rt>おし</rt></ruby>えて</span> <span class=\"furigana\">くださいました</span>。",
            "rawJp": "課長が私にゴルフを教えてくださいました。",
            "vi": "Trưởng phòng đã chỉ dạy môn golf cho tôi."
          }
        ]
      },
      {
        "structure": "4. V-て やります (Làm giúp gì cho con cái / người dưới / thú cưng)",
        "explanation": "Dùng khi người nói thực hiện một hành động mang lại lợi ích cho con nhỏ, em út, cấp dưới hoặc chăm sóc thú nuôi.",
        "caution": "Không dùng mẫu này với người ngoài hoặc bạn bè cùng trang lứa.",
        "examples": [
          {
            "type": "sentence",
            "context": "Mua xe đạp cho con trai",
            "jp": "<span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>は <span class=\"furigana\"><ruby>息子<rt>むすこ</rt></ruby></span>に <span class=\"furigana\"><ruby>自転車<rt>じてんしゃ</rt></ruby></span>を <span class=\"furigana\"><ruby>買<rt>か</rt></ruby>って</span> <span class=\"furigana\">やりました</span>。",
            "rawJp": "私は息子に自転車を買ってやりました。",
            "vi": "Tôi đã mua xe đạp cho con trai."
          }
        ]
      },
      {
        "structure": "5. V-て いただけませんか (Yêu cầu nhờ vả trang trọng lịch sự nhất)",
        "explanation": "Mẫu câu nhờ cậy có mức độ lịch sự cao nhất, dùng khi nhờ người bề trên, thầy cô giáo, cấp trên hoặc đối tác giúp mình việc gì.",
        "caution": "So sánh mức độ lịch sự: V-てください < V-てくれませんか < V-てもらえませんか < V-ていただけませんか (cao nhất).",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhờ sếp xem lại bản báo cáo",
            "jp": "この レポートを <span class=\"furigana\"><ruby>見<rt>み</rt></ruby>て</span> いただけませんか。",
            "rawJp": "このレポートを見ていただけませんか。",
            "vi": "Thầy/Sếp làm ơn xem giúp em bản báo cáo này được không ạ?"
          }
        ]
      }
    ]
  },
  {
    "id": "bai-42",
    "title": "Bài 42: Mục Đích Với 〜ために & Công Dụng Với 〜のに",
    "level": "Minna no Nihongo N4 (Bài 42)",
    "badge": "Mục đích ために & Công dụng",
    "description": "Phân biệt sâu sắc mục đích có ý chí (〜ために) với mục đích trạng thái tự nhiên (〜ように), làm chủ cấu trúc nói về công dụng đồ vật V-るのに使います, và tiêu tốn chi phí thời gian V-るのにかかります.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>包<rt>つつ</rt></ruby>みます</span>",
        "hiragana": "つつみます",
        "meaning": "Gói, bọc [quà, đồ đạc]",
        "type": "Động từ nhóm 1",
        "example": "プレゼントを きれいに 包みます。(Gói quà thật đẹp.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>沸<rt>わ</rt></ruby>かします</span>",
        "hiragana": "わかします",
        "meaning": "Đun sôi [nước] (お湯を〜)",
        "type": "Động từ nhóm 1",
        "example": "お湯を 沸かします。(Đun sôi nước nóng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>混<rt>ま</rt></ruby>ぜます</span>",
        "hiragana": "まぜます",
        "meaning": "Trộn đều, khuấy đều",
        "type": "Động từ nhóm 2",
        "example": "卵と 牛乳を よく 混ぜます。(Trộn đều trứng và sữa.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>計算<rt>けいさん</rt></ruby>します</span>",
        "hiragana": "けいさんします",
        "meaning": "Tính toán, làm phép tính",
        "type": "Động từ nhóm 3",
        "example": "電卓で 計算します。(Làm tính bằng máy tính bấm tay.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>並<rt>なら</rt></ruby>びます</span>",
        "hiragana": "ならびます",
        "meaning": "Xếp hàng, đứng thành hàng",
        "type": "Động từ nhóm 1 (Tự)",
        "example": "列に 並んで 待ちます。(Xếp thành hàng để đợi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>丈夫<rt>じょうぶ</rt></ruby>[な]</span>",
        "hiragana": "じょうぶ[な]",
        "meaning": "Bền chắc, dai sức, rắn rỏi",
        "type": "Tính từ đuôi な",
        "example": "この 靴は 軽くて 丈夫です。(Đôi giày này nhẹ và bền chắc.)"
      },
      {
        "kanji": "<span class=\"furigana\">アパート</span>",
        "hiragana": "アパート",
        "meaning": "Căn hộ chung cư nhỏ, nhà trọ",
        "type": "Danh từ",
        "example": "アパートを 借ります。(Thuê căn hộ trọ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>弁護士<rt>べんごし</rt></ruby></span>",
        "hiragana": "べんごし",
        "meaning": "Luật sư",
        "type": "Danh từ",
        "example": "将来 弁護士に なりたいです。(Tương lai tôi muốn thành luật sư.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>音楽家<rt>おんがくか</rt></ruby></span>",
        "hiragana": "おんがくか",
        "meaning": "Nhạc sĩ, nghệ sĩ âm nhạc",
        "type": "Danh từ",
        "example": "有名な 音楽家の コンサートです。(Buổi biểu diễn của nhạc sĩ nổi tiếng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>教育<rt>きょういく</rt></ruby></span>",
        "hiragana": "きょういく",
        "meaning": "Giáo dục",
        "type": "Danh từ",
        "example": "子どもの 教育に 力を 入れます。(Dồn tâm sức cho việc giáo dục con cái.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>歴史<rt>れきし</rt></ruby></span>",
        "hiragana": "れきし",
        "meaning": "Lịch sử",
        "type": "Danh từ",
        "example": "日本料理の 歴史を 調べます。(Tìm hiểu lịch sử ẩm thực Nhật.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>文化<rt>ぶんか</rt></ruby></span>",
        "hiragana": "ぶんか",
        "meaning": "Văn hóa",
        "type": "Danh từ",
        "example": "異文化を 理解します。(Thấu hiểu các nền văn hóa khác nhau.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>社会<rt>しゃかい</rt></ruby></span>",
        "hiragana": "しゃかい",
        "meaning": "Xã hội",
        "type": "Danh từ",
        "example": "社会の ルールを 守ります。(Tuân thủ quy tắc xã hội.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>法律<rt>ほうりつ</rt></ruby></span>",
        "hiragana": "ほうりつ",
        "meaning": "Pháp luật",
        "type": "Danh từ",
        "example": "法律を 勉強して います。(Tôi đang theo học luật.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>戦争<rt>せんそう</rt></ruby></span>",
        "hiragana": "せんそう",
        "meaning": "Chiến tranh",
        "type": "Danh từ",
        "example": "戦争が ない 世界を 願います。(Nguyện cầu thế giới không còn chiến tranh.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>平和<rt>へいわ</rt></ruby></span>",
        "hiragana": "へいわ",
        "meaning": "Hòa bình",
        "type": "Danh từ / Tính từ đuôi な",
        "example": "世界平和を 祈ります。(Cầu nguyện cho hòa bình thế giới.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>目的<rt>もくてき</rt></ruby></span>",
        "hiragana": "もくてき",
        "meaning": "Mục đích",
        "type": "Danh từ",
        "example": "旅行の 目的は 観光です。(Mục đích chuyến đi là tham quan.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>論文<rt>ろんぶん</rt></ruby></span>",
        "hiragana": "ろんぶん",
        "meaning": "Bài luận văn, đề tài nghiên cứu",
        "type": "Danh từ",
        "example": "卒業論文を 書きます。(Viết bài luận văn tốt nghiệp.)"
      },
      {
        "kanji": "<span class=\"furigana\">やかん</span>",
        "hiragana": "やかん",
        "meaning": "Cái ấm đun nước",
        "type": "Danh từ",
        "example": "やかんで お湯を 沸かします。(Đun nước bằng ấm.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>栓抜<rt>せんぬ</rt></ruby>き</span>",
        "hiragana": "せんぬき",
        "meaning": "Cái mở nút chai, khui nắp chai",
        "type": "Danh từ",
        "example": "栓抜きで ビンの ふたを 開けます。(Mở nắp chai bằng đồ khui.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>缶切<rt>かんき</rt></ruby>り</span>",
        "hiragana": "かんきり",
        "meaning": "Cái khui đồ hộp",
        "type": "Danh từ",
        "example": "缶切りを 探して います。(Tìm cái khui hộp.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>缶詰<rt>かんづめ</rt></ruby></span>",
        "hiragana": "かんづめ",
        "meaning": "Đồ hộp, thức ăn đóng hộp",
        "type": "Danh từ",
        "example": "魚の 缶詰を 買います。(Mua hộp cá hộp.)"
      },
      {
        "kanji": "<span class=\"furigana\">のし<ruby>袋<rt>ぶくろ</rt></ruby></span>",
        "hiragana": "のしぶくろ",
        "meaning": "Phong bao tiền mừng trang trọng",
        "type": "Danh từ",
        "example": "結婚祝いを のし袋に 入れます。(Bỏ tiền mừng cưới vào phong bao noshibukuro.)"
      },
      {
        "kanji": "<span class=\"furigana\">ふろしき</span>",
        "hiragana": "ふろしき",
        "meaning": "Khăn bọc đồ truyền thống Furoshiki",
        "type": "Danh từ",
        "example": "荷物を ふろしきで 包みます。(Bọc đồ đạc bằng khăn furoshiki.)"
      },
      {
        "kanji": "<span class=\"furigana\">そろばん</span>",
        "hiragana": "そろばん",
        "meaning": "Bàn tính gẩy kiểu Nhật",
        "type": "Danh từ",
        "example": "そろばんを 習いました。(Tôi đã từng học bàn tính soroban.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>体温計<rt>たいおんけい</rt></ruby></span>",
        "hiragana": "たいおんけい",
        "meaning": "Cặp nhiệt độ, nhiệt kế đo thân nhiệt",
        "type": "Danh từ",
        "example": "体温計で 熱を 測ります。(Đo nhiệt độ bằng cặp nhiệt độ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>材料<rt>ざいりょう</rt></ruby></span>",
        "hiragana": "ざいりょう",
        "meaning": "Nguyên liệu chế biến món ăn",
        "type": "Danh từ",
        "example": "ケーキの 材料を 揃えます。(Chuẩn bị nguyên liệu làm bánh.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>一生懸命<rt>いっしょうけんめい</rt></ruby></span>",
        "hiragana": "いっしょうけんめい",
        "meaning": "Hết sức, chăm chỉ, nỗ lực hết mình",
        "type": "Phó từ",
        "example": "一生懸命 働きます。(Chăm chỉ làm việc hết mình.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V-る / N の + ために (Mục đích có ý chí)",
        "explanation": "Dùng để diễn tả mục đích mà chủ thể có ý thức, quyết tâm thực hiện hành động ở vế sau để đạt được.\n• V đi trước ために bắt buộc phải là ĐỘNG TỪ CÓ Ý CHÍ (買う、建てる、行く、なる).\n• Nếu là Danh từ thì thêm の (家族の ために、健康の ために).",
        "caution": "Phân biệt với 〜ように: ように đi với động từ không ý chí hoặc thể phủ định; ために đi với động từ ý chí.",
        "examples": [
          {
            "type": "sentence",
            "context": "Tiết kiệm tiền để mua nhà",
            "jp": "<span class=\"furigana\"><ruby>自分<rt>じぶん</rt></ruby></span>の <span class=\"furigana\"><ruby>家<rt>いえ</rt></ruby></span>を <span class=\"furigana\"><ruby>買<rt>か</rt></ruby>う</span> <span class=\"furigana\">ために</span>、<span class=\"furigana\"><ruby>貯金<rt>ちょきん</rt></ruby>して</span> います。",
            "rawJp": "自分の家を買うために、貯金しています。",
            "vi": "Để mua nhà riêng, tôi đang tiết kiệm tiền."
          },
          {
            "type": "sentence",
            "context": "Làm việc vì gia đình thân yêu",
            "jp": "<span class=\"furigana\"><ruby>家族<rt>かぞく</rt></ruby></span>の <span class=\"furigana\">ために</span>、<span class=\"furigana\"><ruby>一生懸命<rt>いっしょうけんめい</rt></ruby></span> <span class=\"furigana\"><ruby>働<rt>はたら</rt></ruby>きます</span>。",
            "rawJp": "家族のために、一生懸命働きます。",
            "vi": "Tôi làm việc chăm chỉ vì gia đình."
          }
        ]
      },
      {
        "structure": "2. V-る + のに + 使います / 便利です (Công dụng của đồ vật)",
        "explanation": "Dùng để biểu thị mục đích công dụng của một đồ vật hoặc đánh giá mức độ tiện lợi, hữu ích trong một trường hợp cụ thể.",
        "caution": "Thường đi kèm với các vị ngữ như: 使います (dùng vào việc...), 便利です (tiện cho việc...), 役に立ちます (có ích cho...).",
        "examples": [
          {
            "type": "sentence",
            "context": "Công dụng của cái ấm đun nước",
            "jp": "やかんは お<span class=\"furigana\"><ruby>湯<rt>ゆ</rt></ruby></span>を <span class=\"furigana\"><ruby>沸<rt>わ</rt></ruby>かす</span><span class=\"furigana\">のに</span> <span class=\"furigana\"><ruby>使<rt>つか</rt></ruby>います</span>。",
            "rawJp": "やかんはお湯を沸かすのに使います。",
            "vi": "Cái ấm đun nước dùng để đun nước sôi."
          },
          {
            "type": "sentence",
            "context": "Đánh giá chiếc túi tiện cho đi du lịch",
            "jp": "この かばんは <span class=\"furigana\"><ruby>旅行<rt>りょこう</rt></ruby></span>に <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>く</span><span class=\"furigana\">のに</span> <span class=\"furigana\"><ruby>便利<rt>べんり</rt></ruby>です</span>。",
            "rawJp": "このかばんは旅行に行くのに便利です。",
            "vi": "Chiếc túi này rất tiện lợi cho việc đi du lịch."
          }
        ]
      },
      {
        "structure": "3. V-る + のに + [Thời gian / Tiền bạc] が かかります (Tiêu tốn)",
        "explanation": "Dùng để diễn tả việc tiêu tốn bao nhiêu thời gian hoặc chi phí tiền bạc để hoàn thành một mục đích cụ thể nào đó.",
        "caution": "Đi cùng động từ かかります.",
        "examples": [
          {
            "type": "sentence",
            "context": "Thời gian đi đến nhà ga",
            "jp": "<span class=\"furigana\"><ruby>東京<rt>とうきょう</rt></ruby><ruby>駅<rt>えき</rt></ruby></span>へ <span class=\"furigana\"><ruby>行<rt>い</rt></ruby>く</span><span class=\"furigana\">のに</span> 1<span class=\"furigana\"><ruby>時間<rt>じかん</rt></ruby></span> かかります。",
            "rawJp": "東京駅へ行くのに1時間かかります。",
            "vi": "Mất 1 tiếng đồng hồ để đi đến ga Tokyo."
          }
        ]
      }
    ]
  },
  {
    "id": "bai-43",
    "title": "Bài 43: Phỏng Đoán Trực Quan 〜そうです & Hành Động Đi Rồi Về 〜てくる",
    "level": "Minna no Nihongo N4 (Bài 43)",
    "badge": "Phỏng đoán そうです & てくる",
    "description": "Thành thạo cách phỏng đoán trạng thái sắp xảy ra (V-そうです) hoặc vẻ bề ngoài (A-そうです), dạng bổ ngữ 〜そうな / 〜そうに, và hành động đi làm việc gì rồi quay lại V-て来ます.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>増<rt>ふ</rt></ruby>えます</span>",
        "hiragana": "ふえます",
        "meaning": "Tăng lên [xuất khẩu, dân số] (輸出が〜)",
        "type": "Động từ nhóm 2 (Tự)",
        "example": "人口が 増えます。(Dân số tăng lên.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>減<rt>へ</rt></ruby>ります</span>",
        "hiragana": "へります",
        "meaning": "Giảm đi [xuất khẩu, số lượng] (輸出が〜)",
        "type": "Động từ nhóm 1 (Tự)",
        "example": "輸出が 減りました。(Kim ngạch xuất khẩu giảm sút.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>上<rt>あ</rt></ruby>がります</span>",
        "hiragana": "あがります",
        "meaning": "Tăng lên, lên giá [giá cả, nhiệt độ] (値段が〜)",
        "type": "Động từ nhóm 1 (Tự)",
        "example": "物価が 上がります。(Vật giá leo thang.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>下<rt>さ</rt></ruby>がります</span>",
        "hiragana": "さがります",
        "meaning": "Giảm xuống, hạ giá [giá cả, nhiệt độ] (値段が〜)",
        "type": "Động từ nhóm 1 (Tự)",
        "example": "気温が 下がりました。(Nhiệt độ đã hạ xuống.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>切<rt>き</rt></ruby>れます</span>",
        "hiragana": "きれます",
        "meaning": "Bị đứt [sợi dây] (ひもが〜)",
        "type": "Động từ nhóm 2 (Tự)",
        "example": "ひもが 切れて しまいました。(Sợi dây đã bị đứt.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>外<rt>と</rt></ruby>れます / とれます</span>",
        "hiragana": "とれます",
        "meaning": "Tuột, rơi ra [cúc áo] (ボタンが〜)",
        "type": "Động từ nhóm 2 (Tự)",
        "example": "ボタンが とれそうです。(Cúc áo trông sắp tuột rồi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>落<rt>お</rt></ruby>ちます</span>",
        "hiragana": "おちます",
        "meaning": "Rơi xuống, rớt [hành lý] (荷物が〜)",
        "type": "Động từ nhóm 2 (Tự)",
        "example": "荷物が 落ちそうです。(Hành lý sắp rơi xuống rồi.)"
      },
      {
        "kanji": "<span class=\"furigana\">なくなります</span>",
        "hiragana": "なくなります",
        "meaning": "Hết sạch, mất đi [xăng, tiền] (ガソリンが〜)",
        "type": "Động từ nhóm 1 (Tự)",
        "example": "ガソリンが なくなりました。(Hết sạch xăng xe.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>変<rt>へん</rt></ruby>[な]</span>",
        "hiragana": "へん[な]",
        "meaning": "Kỳ lạ, quái dị",
        "type": "Tính từ đuôi な",
        "example": "変な 音が します。(Có tiếng động lạ phát ra.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>幸<rt>しあわ</rt></ruby>せ[な]</span>",
        "hiragana": "しあわせ[な]",
        "meaning": "Hạnh phúc",
        "type": "Tính từ đuôi な",
        "example": "幸せな 毎日を 過ごします。(Trải qua những ngày hạnh phúc.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>楽<rt>らく</rt></ruby>[な]</span>",
        "hiragana": "らく[な]",
        "meaning": "Nhẹ nhàng, thanh thản, dễ dàng",
        "type": "Tính từ đuôi な",
        "example": "この 仕事は 楽です。(Việc này khá nhẹ nhàng.)"
      },
      {
        "kanji": "<span class=\"furigana\">うまい</span>",
        "hiragana": "うまい",
        "meaning": "Ngon miệng / Giỏi giang",
        "type": "Tính từ đuôi い",
        "example": "この ラーメンは うまいですね。(Món mì này ngon thật đấy.)"
      },
      {
        "kanji": "<span class=\"furigana\">まずい</span>",
        "hiragana": "まずい",
        "meaning": "Dở, không ngon",
        "type": "Tính từ đuôi い",
        "example": "この スープは まずいです。(Món canh này dở quá.)"
      },
      {
        "kanji": "<span class=\"furigana\">つまらない</span>",
        "hiragana": "つまらない",
        "meaning": "Buồn tẻ, chán ngắt",
        "type": "Tính từ đuôi い",
        "example": "つまらない 映画でした。(Bộ phim chán ngắt.)"
      },
      {
        "kanji": "<span class=\"furigana\">ガソリン</span>",
        "hiragana": "ガソリン",
        "meaning": "Xăng xe nhiên liệu",
        "type": "Danh từ",
        "example": "ガソリンスタンドで 給油します。(Đổ xăng ở cây xăng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>火<rt>ひ</rt></ruby></span>",
        "hiragana": "ひ",
        "meaning": "Ngọn lửa, lửa",
        "type": "Danh từ",
        "example": "火を 消します。(Dập tắt ngọn lửa.)"
      },
      {
        "kanji": "<span class=\"furigana\">センス</span>",
        "hiragana": "センス",
        "meaning": "Gu thẩm mỹ, khiếu cảm nhận",
        "type": "Danh từ",
        "example": "服の センスが いいですね。(Gu ăn mặc của bạn có khiếu thật.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>今<rt>いま</rt></ruby>にも</span>",
        "hiragana": "いまにも",
        "meaning": "Sắp sửa... đến nơi rồi",
        "type": "Phó từ",
        "example": "今にも 雨が 降りそうです。(Trông trời sắp mưa đến nơi rồi.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V-ます(bỏ ます) + そうです (Trông sắp sửa xảy ra)",
        "explanation": "Dùng để dự đoán một sự biến đổi hoặc hiện tượng sắp sửa xảy ra ngay trước mắt dựa trên những dấu hiệu thị giác quan sát được.\n• Thường đi kèm phó từ「今にも」(sắp sửa đến nơi).",
        "caution": "Chỉ dùng cho tự động từ chỉ biến đổi (rơi, đổ, rách, mưa, tuột...).",
        "examples": [
          {
            "type": "sentence",
            "context": "Trời đầy mây đen xám xịt",
            "jp": "<span class=\"furigana\"><ruby>今<rt>いま</rt></ruby>にも</span> <span class=\"furigana\"><ruby>雨<rt>あめ</rt></ruby></span>が <span class=\"furigana\"><ruby>降<rt>ふ</rt></ruby>りそうです</span>。",
            "rawJp": "今にも雨が降りそうです。",
            "vi": "Trông trời có vẻ sắp mưa đến nơi rồi."
          },
          {
            "type": "sentence",
            "context": "Cúc áo lung lay sắp đứt",
            "jp": "ボタンが <span class=\"furigana\"><ruby>外<rt>はず</rt></ruby>れそうです</span>よ。",
            "rawJp": "ボタンが外れそうですよ。",
            "vi": "Cúc áo của bạn trông sắp tuột ra rồi kìa."
          }
        ]
      },
      {
        "structure": "2. A-い (bỏ い) / A-な (bỏ な) + そうです (Trông có vẻ...)",
        "explanation": "Dùng để phán đoán tính chất, mùi vị hoặc tâm trạng của người/vật qua ánh nhìn bề ngoài.\n• Tính từ đuôi い: Bỏ い + そうです (おいしそうです, 寒そうです).\n• Tính từ đuôi な: Bỏ な + そうです (元気そうです, 親切そうです).\n• Ngoại lệ: いい -> よさそうです, ない -> なさそうです.",
        "caution": "Không dùng そうです cho những màu sắc hoặc vẻ đẹp hiển nhiên đập vào mắt (không nói: 赤いです -> 赤そうです SAI; きれいです -> きれいそうです SAI).",
        "examples": [
          {
            "type": "sentence",
            "context": "Chiếc bánh trông ngon mắt",
            "jp": "この ケーキは とても <span class=\"furigana\">おいしそうです</span>ね。",
            "rawJp": "このケーキはとてもおいしそうですね。",
            "vi": "Chiếc bánh này trông có vẻ ngon quá nhỉ."
          }
        ]
      },
      {
        "structure": "3. 〜そうな + N / 〜そうに + V (Bổ ngữ của そう)",
        "explanation": "Khi cụm phỏng đoán そう bổ nghĩa cho danh từ thì thêm な (おいしそうな ケーキ); khi bổ nghĩa cho động từ thì thêm に (おいしそうに 食べています).",
        "caution": "Chia đuôi như một tính từ đuôi な.",
        "examples": [
          {
            "type": "sentence",
            "context": "Bọn trẻ ăn uống ngon lành",
            "jp": "<span class=\"furigana\"><ruby>子<rt>こ</rt></ruby>どもたち</span>が <span class=\"furigana\">おいしそうに</span> パンを <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べて</span> います。",
            "rawJp": "子どもたちがおいしそうにパンを食べています。",
            "vi": "Bọn trẻ đang ăn bánh mì một cách ngon lành."
          }
        ]
      },
      {
        "structure": "4. V-て 来ます (Đi làm việc gì rồi quay lại)",
        "explanation": "Diễn tả hành động người nói tạm rời vị trí hiện tại để đi làm một việc cần thiết, sau đó sẽ quay trở lại vị trí ban đầu.",
        "caution": "Câu chào quen thuộc「行って来ます」(Tôi đi rồi sẽ về) bắt nguồn từ cấu trúc này.",
        "examples": [
          {
            "type": "sentence",
            "context": "Đi mua gói thuốc rồi về ngay",
            "jp": "ちょっと たばこを <span class=\"furigana\"><ruby>買<rt>か</rt></ruby>って</span> <span class=\"furigana\"><ruby>来<rt>き</rt></ruby>ます</span>。",
            "rawJp": "ちょっとたばこを買って来ます。",
            "vi": "Tôi đi mua bao thuốc một lát rồi quay lại ngay."
          }
        ]
      }
    ]
  },
  {
    "id": "bai-44",
    "title": "Bài 44: Quá Mức 〜すぎます & Dễ/Khó Làm Gì 〜やすい / 〜にくい",
    "level": "Minna no Nihongo N4 (Bài 44)",
    "badge": "Mức độ すぎる & Dễ/Khó",
    "description": "Nắm vững cách diễn tả hành động hoặc tính chất vượt quá mức bình thường bằng 〜すぎます, tính chất dễ hoặc khó thực hiện bằng 〜やすい / 〜にくい, cách đưa ra quyết định N にします, và tác động biến đổi A-く/に します.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>泣<rt>な</rt></ruby>きます</span>",
        "hiragana": "なきます",
        "meaning": "Khóc",
        "type": "Động từ nhóm 1",
        "example": "赤ちゃんが 泣いて います。(Em bé đang khóc.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>笑<rt>わら</rt></ruby>います</span>",
        "hiragana": "わらいます",
        "meaning": "Cười, mỉm cười",
        "type": "Động từ nhóm 1",
        "example": "みんなで 楽しく 笑いました。(Mọi người cùng cười vui vẻ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>乾<rt>かわ</rt></ruby>きます</span>",
        "hiragana": "かわきます",
        "meaning": "Khô ráo [quần áo] (服が〜)",
        "type": "Động từ nhóm 1 (Tự)",
        "example": "洗濯物が よく 乾きました。(Quần áo giặt đã khô ráo.)"
      },
      {
        "kanji": "<span class=\"furigana\">ぬれます</span>",
        "hiragana": "ぬれます",
        "meaning": "Ướt, bị ướt [quần áo, tóc] (服が〜)",
        "type": "Động từ nhóm 2 (Tự)",
        "example": "雨で 服が ぬれて しまいました。(Quần áo bị ướt sũng vì mưa.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>滑<rt>すべ</rt></ruby>ります</span>",
        "hiragana": "すべります",
        "meaning": "Trơn trượt [đường tuyết] (道が〜)",
        "type": "Động từ nhóm 1 (Tự)",
        "example": "雪道で 足が 滑りました。(Trượt chân trên đường đầy tuyết.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>起<rt>お</rt></ruby>きます</span>",
        "hiragana": "おきます",
        "meaning": "Xảy ra [tai nạn] (事故が〜)",
        "type": "Động từ nhóm 2 (Tự)",
        "example": "交差点で 事故が 起きました。(Tại ngã tư đã xảy ra tai nạn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>調節<rt>ちょうせつ</rt></ruby>します</span>",
        "hiragana": "ちょうせつします",
        "meaning": "Điều chỉnh [nhiệt độ, âm lượng]",
        "type": "Động từ nhóm 3",
        "example": "エアコンの 温度を 調節します。(Điều chỉnh nhiệt độ điều hòa.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>安全<rt>あんぜん</rt></ruby>[な]</span>",
        "hiragana": "あんぜん[な]",
        "meaning": "An toàn",
        "type": "Tính từ đuôi な",
        "example": "安全な 場所に 避難します。(Sơ tán đến nơi an toàn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>丁寧<rt>ていねい</rt></ruby>[な]</span>",
        "hiragana": "ていねい[な]",
        "meaning": "Lịch sự, cẩn thận, chu đáo",
        "type": "Tính từ đuôi な",
        "example": "丁寧な 言葉で 話します。(Nói chuyện bằng lời lẽ lịch sự.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>細<rt>こま</rt></ruby>かい</span>",
        "hiragana": "こまかい",
        "meaning": "Nhỏ li ti, tiền lẻ (細かい お金)",
        "type": "Tính từ đuôi い",
        "example": "細かい お金が ありません。(Tôi không có tiền lẻ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>濃<rt>こ</rt></ruby>い</span>",
        "hiragana": "こい",
        "meaning": "Đậm đặc, đậm màu [vị, trà]",
        "type": "Tính từ đuôi い",
        "example": "濃い コーヒーが 好きです。(Tôi thích cà phê đậm vị.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>薄<rt>うす</rt></ruby>い</span>",
        "hiragana": "うすい",
        "meaning": "Nhạt, loãng, mỏng",
        "type": "Tính từ đuôi い",
        "example": "味が 少し 薄いです。(Vị hơi nhạt một chút.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>空気<rt>くうき</rt></ruby></span>",
        "hiragana": "くうき",
        "meaning": "Không khí, bầu không khí",
        "type": "Danh từ",
        "example": "山の 空気が おいしいです。(Không khí vùng núi thật trong lành.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>涙<rt>なみだ</rt></ruby></span>",
        "hiragana": "なみだ",
        "meaning": "Nước mắt (涙が 出ます)",
        "type": "Danh từ",
        "example": "感動して 涙が 出ました。(Xúc động trào nước mắt.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>和食<rt>わしょく</rt></ruby></span>",
        "hiragana": "わしょく",
        "meaning": "Món ăn truyền thống Nhật Bản",
        "type": "Danh từ",
        "example": "健康の ために 和食を 食べます。(Ăn món Nhật vì sức khỏe.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>洋食<rt>ようしょく</rt></ruby></span>",
        "hiragana": "ようしょく",
        "meaning": "Món ăn kiểu phương Tây",
        "type": "Danh từ",
        "example": "洋食の レストランに 行きます。(Đến nhà hàng món Âu.)"
      },
      {
        "kanji": "<span class=\"furigana\">おかず</span>",
        "hiragana": "おかず",
        "meaning": "Thức ăn kèm, món ăn với cơm",
        "type": "Danh từ",
        "example": "今夜の おかずは 焼き魚です。(Món ăn kèm tối nay là cá nướng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>量<rt>りょう</rt></ruby></span>",
        "hiragana": "りょう",
        "meaning": "Số lượng, khối lượng thức ăn",
        "type": "Danh từ",
        "example": "ご飯の 量を 減らします。(Giảm lượng cơm ăn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>倍<rt>ばい</rt></ruby></span>",
        "hiragana": "ばい",
        "meaning": "Gấp ... lần (2倍, 3倍)",
        "type": "Hậu tố",
        "example": "値段が 2倍に なりました。(Giá tăng gấp đôi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>半分<rt>はんぶん</rt></ruby></span>",
        "hiragana": "はんぶん",
        "meaning": "Một nửa, nửa phần",
        "type": "Danh từ",
        "example": "半分に 切って 分けます。(Cắt làm đôi rồi chia nhau.)"
      },
      {
        "kanji": "<span class=\"furigana\">シングル</span>",
        "hiragana": "シングル",
        "meaning": "Phòng đơn khách sạn (single room)",
        "type": "Danh từ",
        "example": "シングルを 1部屋 予約しました。(Đặt 1 phòng đơn.)"
      },
      {
        "kanji": "<span class=\"furigana\">ツイン</span>",
        "hiragana": "ツイン",
        "meaning": "Phòng đôi 2 giường (twin room)",
        "type": "Danh từ",
        "example": "ツインの 部屋に 泊まります。(Trọ ở phòng 2 giường.)"
      },
      {
        "kanji": "<span class=\"furigana\">たんす</span>",
        "hiragana": "たんす",
        "meaning": "Tủ ngăn kéo đựng quần áo",
        "type": "Danh từ",
        "example": "たんすに 服を しまいます。(Cất quần áo vào tủ ngăn kéo.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>洗濯物<rt>せんたくもの</rt></ruby></span>",
        "hiragana": "せんたくもの",
        "meaning": "Đồ giặt, quần áo giặt",
        "type": "Danh từ",
        "example": "洗濯物を 干します。(Phơi quần áo giặt.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>理由<rt>りゆう</rt></ruby></span>",
        "hiragana": "りゆう",
        "meaning": "Lý do, nguyên cớ",
        "type": "Danh từ",
        "example": "遅刻した 理由を 説明します。(Giải thích lý do đi muộn.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V-ます(bỏ ます) / A-い(bỏ い) / A-な(bỏ な) + すぎます (Quá mức)",
        "explanation": "Biểu thị hành động hoặc trạng thái vượt quá giới hạn bình thường, mang lại hệ quả xấu hoặc tiêu cực.\n• Động từ: 飲みすぎます (uống quá nhiều), 食べすぎます (ăn quá nhiều).\n• Tính từ đuôi い: 長すぎます (dài quá), 高すぎます (đắt quá).\n• Tính từ đuôi な: 静かすぎます (yên ắng quá mức).",
        "caution": "Chia đuôi すぎます như ĐỘNG TỪ NHÓM 2 (すぎない、すぎた...).",
        "examples": [
          {
            "type": "sentence",
            "context": "Uống say vì uống quá nhiều rượu",
            "jp": "きのう お<span class=\"furigana\"><ruby>酒<rt>さけ</rt></ruby></span>を <span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>みすぎました</span>。",
            "rawJp": "きのうお酒を飲みすぎました。",
            "vi": "Hôm qua tôi đã uống quá nhiều rượu."
          }
        ]
      },
      {
        "structure": "2. V-ます(bỏ ます) + やすいです (Dễ làm gì / Dễ xảy ra)",
        "explanation": "Biểu thị tính chất làm việc gì đó rất dễ dàng, thuận lợi, hoặc một vật/hiện tượng rất dễ xảy ra sự cố (dễ bẩn, dễ trơn trượt).\n• Bút dễ viết: 書きやすいです.\n• Áo trắng dễ bẩn: 汚れやすいです.",
        "caution": "Chia đuôi như một TÍNH TỪ ĐUÔI い (やすかった、やすくない).",
        "examples": [
          {
            "type": "sentence",
            "context": "Cây bút viết rất êm tay",
            "jp": "この ペンは とても <span class=\"furigana\"><ruby>書<rt>か</rt></ruby>きやすいです</span>。",
            "rawJp": "このペンはとても書きやすいです。",
            "vi": "Cây bút này viết rất êm và dễ viết."
          }
        ]
      },
      {
        "structure": "3. V-ます(bỏ ます) + にくいです (Khó làm gì / Khó xảy ra)",
        "explanation": "Biểu thị sự khó khăn, trở ngại khi thực hiện hành động, hoặc một sự việc khó lòng xảy ra.\n• Thuốc đắng khó uống: 飲みにくいです.\n• Thành phố đông đúc khó sống: 住みにくいです.",
        "caution": "Chia đuôi như một TÍNH TỪ ĐUÔI い (にくかった、にくくない).",
        "examples": [
          {
            "type": "sentence",
            "context": "Thuốc đắng quá khó nuốt",
            "jp": "この <span class=\"furigana\"><ruby>薬<rt>くすり</rt></ruby></span>は <span class=\"furigana\"><ruby>苦<rt>にが</rt></ruby>くて</span>、<span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>みにくいです</span>。",
            "rawJp": "この薬は苦くて、飲みにくいです。",
            "vi": "Thuốc này đắng quá rất khó uống."
          }
        ]
      },
      {
        "structure": "4. N + に します (Quyết định chọn lựa)",
        "explanation": "Dùng để biểu thị sự lựa chọn, quyết định của bản thân trong số các phương án (thường dùng khi gọi món ăn ở nhà hàng, chọn phòng khách sạn).",
        "caution": "Phân biệt với N に なります (tự nó biến đổi thành).",
        "examples": [
          {
            "type": "dialogue",
            "context": "Gọi món ở quán cà phê",
            "lines": [
              {
                "speaker": "A",
                "jp": "<span class=\"furigana\"><ruby>何<rt>なに</rt></ruby></span>に なさいますか。",
                "rawJp": "何になさいますか。",
                "vi": "Quý khách chọn dùng gì ạ?"
              },
              {
                "speaker": "B",
                "jp": "<span class=\"furigana\"><ruby>私<rt>わたし</rt></ruby></span>は コーヒー<span class=\"furigana\">に します</span>。",
                "rawJp": "私はコーヒーにします。",
                "vi": "Tôi chọn cà phê."
              }
            ]
          }
        ]
      },
      {
        "structure": "5. A-く / A-に します (Tác động làm biến đổi trạng thái)",
        "explanation": "Biểu thị sự tác động chủ quan của con người làm thay đổi trạng thái của sự vật.\n• Tính từ đuôi い: Bỏ い + く します (短く します - cắt ngắn đi, 大きく します - vặn to lên).\n• Tính từ đuôi な: Bỏ な + に します (きれいに します - dọn sạch sẽ).",
        "caution": "Phân biệt với A-く / A-に なります (trạng thái tự nó biến đổi khách quan).",
        "examples": [
          {
            "type": "sentence",
            "context": "Yêu cầu thợ cắt tóc cắt ngắn bớt",
            "jp": "<span class=\"furigana\"><ruby>髪<rt>かみ</rt></ruby></span>を <span class=\"furigana\"><ruby>短<rt>みじか</rt></ruby>く</span> して ください。",
            "rawJp": "髪を短くしてください。",
            "vi": "Xin hãy cắt tóc ngắn bớt cho tôi."
          }
        ]
      }
    ]
  },
  {
    "id": "bai-45",
    "title": "Bài 45: Giả Định Tình Huống 〜場合は & Trái Với Mong Đợi 〜のに",
    "level": "Minna no Nihongo N4 (Bài 45)",
    "badge": "Tình huống 場合は & 〜のに",
    "description": "Làm chủ cấu trúc giả định xử lý tình huống khẩn cấp 〜場合は, và cấu trúc thể hiện cảm xúc bất ngờ, bất mãn, tiếc nuối khi kết quả trái ngược với kỳ vọng 〜のに.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>信<rt>しん</rt></ruby>じます</span>",
        "hiragana": "しんじます",
        "meaning": "Tin tưởng, tin cậy",
        "type": "Động từ nhóm 2",
        "example": "彼の 言葉を 信じます。(Tin lời anh ấy nói.)"
      },
      {
        "kanji": "<span class=\"furigana\">キャンセルします</span>",
        "hiragana": "キャンセルします",
        "meaning": "Hủy bỏ [lịch hẹn, hợp đồng, đặt chỗ]",
        "type": "Động từ nhóm 3",
        "example": "ホテルの 予約を キャンセルします。(Hủy đặt phòng khách sạn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>知<rt>し</rt></ruby>らせます</span>",
        "hiragana": "しらせます",
        "meaning": "Thông báo, báo tin",
        "type": "Động từ nhóm 2",
        "example": "日時の 変更を 知らせます。(Thông báo thay đổi ngày giờ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>保証書<rt>ほしょうしょ</rt></ruby></span>",
        "hiragana": "ほしょうしょ",
        "meaning": "Phiếu bảo hành sản phẩm",
        "type": "Danh từ",
        "example": "保証書を 大切に 保管します。(Cất giữ cẩn thận phiếu bảo hành.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>領収書<rt>りょうしゅうしょ</rt></ruby></span>",
        "hiragana": "りょうしゅうしょ",
        "meaning": "Biên lai thanh toán, hóa đơn tiền",
        "type": "Danh từ",
        "example": "領収書を もらえますか。(Cho tôi xin hóa đơn thanh toán được không?)"
      },
      {
        "kanji": "<span class=\"furigana\">キャンプ</span>",
        "hiragana": "キャンプ",
        "meaning": "Cắm trại ngoài trời",
        "type": "Danh từ",
        "example": "山で キャンプを 楽しもう。(Cùng cắm trại trên núi nào.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>中止<rt>ちゅうし</rt></ruby></span>",
        "hiragana": "ちゅうし",
        "meaning": "Tạm dừng, hủy bỏ [sự kiện, giải đấu]",
        "type": "Danh từ",
        "example": "雨で 試合が 中止に なりました。(Trận đấu bị hủy do trời mưa.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>点<rt>てん</rt></ruby></span>",
        "hiragana": "てん",
        "meaning": "Điểm số bài thi",
        "type": "Danh từ",
        "example": "テストで 100点を 取りました。(Đạt 100 điểm bài kiểm tra.)"
      },
      {
        "kanji": "<span class=\"furigana\">レバー</span>",
        "hiragana": "レバー",
        "meaning": "Cần gạt điều khiển",
        "type": "Danh từ",
        "example": "レバーを 引いて 水を 流します。(Gạt cần để xả nước.)"
      },
      {
        "kanji": "<span class=\"furigana\">ちゃんと</span>",
        "hiragana": "ちゃんと",
        "meaning": "Đàng hoàng, ngăn nắp, cẩn thận",
        "type": "Phó từ",
        "example": "ちゃんと 宿題を します。(Làm bài tập đàng hoàng đầy đủ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>急<rt>きゅう</rt></ruby>に</span>",
        "hiragana": "きゅうに",
        "meaning": "Đột ngột, bất thình lình",
        "type": "Phó từ",
        "example": "急に 雨が 降り出しました。(Đột nhiên trời đổ mưa.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>楽<rt>たの</rt></ruby>しみに して います</span>",
        "hiragana": "たのしみにしています",
        "meaning": "Rất mong chờ, háo hức ngóng đợi",
        "type": "Cụm động từ",
        "example": "旅行を 楽しみに して います。(Tôi rất háo hức mong đợi chuyến đi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>係員<rt>かかりいん</rt></ruby></span>",
        "hiragana": "かかりいん",
        "meaning": "Nhân viên phụ trách, người trực",
        "type": "Danh từ",
        "example": "係員の 指示に 従います。(Làm theo hướng dẫn của nhân viên phụ trách.)"
      },
      {
        "kanji": "<span class=\"furigana\">コース</span>",
        "hiragana": "コース",
        "meaning": "Đường chạy, lộ trình, khóa học",
        "type": "Danh từ",
        "example": "マラソンの コースを 走ります。(Chạy theo đường chạy marathon.)"
      },
      {
        "kanji": "<span class=\"furigana\">スタート</span>",
        "hiragana": "スタート",
        "meaning": "Xuất phát, khởi đầu",
        "type": "Danh từ",
        "example": "合図で スタートします。(Xuất phát theo hiệu lệnh.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>優勝<rt>ゆうしょう</rt></ruby>します</span>",
        "hiragana": "ゆうしょうします",
        "meaning": "Đoạt chức vô địch, giành giải nhất",
        "type": "Động từ nhóm 3",
        "example": "大会で 優勝しました。(Vô địch giải đấu.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>悩<rt>なや</rt></ruby>み</span>",
        "hiragana": "なやみ",
        "meaning": "Nỗi ưu tư, phiền muộn, trăn trở",
        "type": "Danh từ",
        "example": "友人に 悩みを 打ち明けます。(Bộc bạch nỗi niềm với bạn bè.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>目覚<rt>めざ</rt></ruby>まし<ruby>時計<rt>どけい</rt></ruby></span>",
        "hiragana": "めざましどけい",
        "meaning": "Đồng hồ báo thức",
        "type": "Danh từ",
        "example": "目覚まし時計を 7時に セットします。(Cài đồng hồ báo thức lúc 7 giờ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>目<rt>め</rt></ruby>が <ruby>覚<rt>さ</rt></ruby>めます</span>",
        "hiragana": "めがさめます",
        "meaning": "Tỉnh giấc, mở mắt thức dậy",
        "type": "Cụm động từ",
        "example": "朝 早く 目が 覚めました。(Sáng nay tôi tỉnh giấc rất sớm.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>鳴<rt>な</rt></ruby>ります</span>",
        "hiragana": "なります",
        "meaning": "Kêu vang, reo lên [chuông, điện thoại] (ベルが〜)",
        "type": "Động từ nhóm 1 (Tự)",
        "example": "目覚まし時計が 鳴りました。(Đồng hồ báo thức reo vang.)"
      },
      {
        "kanji": "<span class=\"furigana\">セットします</span>",
        "hiragana": "セットします",
        "meaning": "Cài đặt, chỉnh đặt [giờ hẹn]",
        "type": "Động từ nhóm 3",
        "example": "アラームを セットします。(Cài đặt chuông báo.)"
      },
      {
        "kanji": "<span class=\"furigana\">それでも</span>",
        "hiragana": "それでも",
        "meaning": "Dù vậy, tuy thế nhưng",
        "type": "Liên từ",
        "example": "雨です。それでも 試合は 行われます。(Trời mưa, dù vậy trận đấu vẫn diễn ra.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. Thể thông thường + 場合は (Trong trường hợp...)",
        "explanation": "Dùng để giả định một tình huống khẩn cấp, sự cố hoặc trường hợp giả định có thể xảy ra, và vế sau đưa ra cách thức xử lý, ứng phó tương ứng.\n• Động từ/Tính từ đuôi い: Thể thông thường + 場合は\n• Tính từ đuôi な: Thêm な trước 場合は (必要な 場合は)\n• Danh từ: Thêm の trước 場合は (火事の 場合は、地震の 場合は).",
        "caution": "Rất hay gặp trong các bản nội quy thoát hiểm, bảo hiểm, hợp đồng giao dịch.",
        "examples": [
          {
            "type": "sentence",
            "context": "Chỉ dẫn thoát hiểm khi có hỏa hoạn",
            "jp": "<span class=\"furigana\"><ruby>火事<rt>かじ</rt></ruby></span>の <span class=\"furigana\"><ruby>場合<rt>ばあい</rt></ruby>は</span>、エレベーターを <span class=\"furigana\"><ruby>使<rt>つか</rt></ruby>わないで</span> ください。",
            "rawJp": "火事の場合は、エレベーターを使わないでください。",
            "vi": "Trong trường hợp xảy ra hỏa hoạn, tuyệt đối không sử dụng thang máy."
          },
          {
            "type": "sentence",
            "context": "Xử lý khi bị chậm trễ giờ hẹn",
            "jp": "<span class=\"furigana\"><ruby>時間<rt>じかん</rt></ruby></span>に <span class=\"furigana\"><ruby>遅<rt>おく</rt></ruby>れる</span> <span class=\"furigana\"><ruby>場合<rt>ばあい</rt></ruby>は</span>、<span class=\"furigana\"><ruby>必<rt>かなら</rt></ruby>ず</span> <span class=\"furigana\"><ruby>連絡<rt>れんらく</rt></ruby>して</span> ください。",
            "rawJp": "時間に遅れる場合は、必ず連絡してください。",
            "vi": "Trong trường hợp bị muộn giờ, nhất định hãy liên lạc thông báo nhé."
          }
        ]
      },
      {
        "structure": "2. Thể thông thường + のに (Thế mà, vậy mà - Bất mãn / Nuối tiếc)",
        "explanation": "Dùng để diễn tả một kết quả thực tế diễn ra hoàn toàn trái ngược với lẽ thông thường hoặc kỳ vọng của người nói. Chứa đựng cảm xúc ngạc nhiên, bất mãn, trách móc hoặc nuối tiếc.\n• Động từ/Tính từ đuôi い: Thể thông thường + のに\n• Tính từ đuôi な / Danh từ: Thêm な trước のに (日曜日なのに、好きなのに).",
        "caution": "Phân biệt với 〜ても: 〜ても dùng cho cả giả định chưa xảy ra (dù trời mưa tôi vẫn đi); còn 〜のに bắt buộc phải dùng cho việc ĐÃ XẢY RA thực tế ngoài mong đợi.",
        "examples": [
          {
            "type": "sentence",
            "context": "Hẹn mà không đến",
            "jp": "<span class=\"furigana\"><ruby>約束<rt>やくそく</rt></ruby>した</span><span class=\"furigana\">のに</span>、<span class=\"furigana\"><ruby>彼<rt>かれ</rt></ruby></span>は <span class=\"furigana\"><ruby>来<rt>き</rt></ruby>ませんでした</span>。",
            "rawJp": "約束したのに、彼は来ませんでした。",
            "vi": "Đã hẹn trước rồi thế mà anh ấy lại không đến."
          },
          {
            "type": "sentence",
            "context": "Học hết sức mà vẫn thi trượt",
            "jp": "<span class=\"furigana\"><ruby>一生懸命<rt>いっしょうけんめい</rt></ruby></span> <span class=\"furigana\"><ruby>勉強<rt>べんきょう</rt></ruby>した</span><span class=\"furigana\">のに</span>、テストで いい <span class=\"furigana\"><ruby>点<rt>てん</rt></ruby></span>が 取れませんでした。",
            "rawJp": "一生懸命勉強したのに、テストでいい点が取れませんでした。",
            "vi": "Tôi đã học hành cật lực thế mà lại không đạt điểm cao trong bài thi."
          }
        ]
      }
    ]
  }
];
