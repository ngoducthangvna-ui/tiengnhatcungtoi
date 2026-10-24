const fs = require('fs');

const lessons_41_45 = [
  // BÀI 41
  {
    "id": "bai-41",
    "title": "Bài 41: Cho & Nhận Trong Giao Tiếp (いただきます / くださいます / やります)",
    "level": "Minna no Nihongo N4 (Bài 41)",
    "badge": "Cho & Nhận",
    "description": "Các động từ cho và nhận biểu thị quan hệ trên dưới: いただきます (nhận từ người trên), くださいます (người trên cho mình), やります (cho người dưới/động vật), và cách nhờ vả 〜て いただけませんか.",
    "vocabulary": [
      {
        "kanji": "いただきます",
        "hiragana": "いただきます",
        "meaning": "Nhận được (khiêm nhường của もらいます)",
        "type": "Động từ nhóm 1",
        "example": "先生に 本を いただきました。(Được thầy giáo tặng cho cuốn sách.)"
      },
      {
        "kanji": "くださいます",
        "hiragana": "くださいます",
        "meaning": "Cho, tặng (tôn kính của くれます)",
        "type": "Động từ nhóm 1",
        "example": "部長が お土産を くださいました。(Trưởng phòng đã tặng quà lưu niệm cho tôi.)"
      },
      {
        "kanji": "やります",
        "hiragana": "やります",
        "meaning": "Cho (người dưới, em, thú cưng, cây cối)",
        "type": "Động từ nhóm 1",
        "example": "犬に えさを やります。(Cho chó ăn thức ăn.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>呼<rt>よ</rt></ruby>びます</span>",
        "hiragana": "よびます",
        "meaning": "Gọi (tên, taxi)",
        "type": "Động từ nhóm 1",
        "example": "タクシーを 呼びます。(Gọi taxi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>取<rt>と</rt></ruby>り<ruby>替<rt>か</rt></ruby>えます</span>",
        "hiragana": "とりかえます",
        "meaning": "Đổi, thay thế linh kiện",
        "type": "Động từ nhóm 2",
        "example": "電池を 取り替えます。(Thay pin mới.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>親切<rt>しんせつ</rt></ruby>に します</span>",
        "hiragana": "しんせつにします",
        "meaning": "Đối xử tốt bụng, tử tế",
        "type": "Cụm động từ",
        "example": "お年寄りに 親切に します。(Đối xử tử tế với người già.)"
      },
      {
        "kanji": "かわいい",
        "hiragana": "かわいい",
        "meaning": "Đáng yêu, dễ thương",
        "type": "Tính từ (i)",
        "example": "かわいい 子犬 (Chú cún con dễ thương)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>珍<rt>めずら</rt></ruby>しい</span>",
        "hiragana": "めずらしい",
        "meaning": "Hiếm có, độc lạ",
        "type": "Tính từ (i)",
        "example": "珍しい 切手 (Con tem hiếm có)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>祝<rt>いわ</rt></ruby>い</span>",
        "hiragana": "いわい",
        "meaning": "Quà mừng, đồ chúc mừng (お祝い)",
        "type": "Danh từ",
        "example": "結婚の お祝い (Quà mừng đám cưới)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>年玉<rt>としだま</rt></ruby></span>",
        "hiragana": "としだま",
        "meaning": "Tiền mừng tuổi đầu năm (お年玉)",
        "type": "Danh từ",
        "example": "子どもに お年玉を あげます。(Mừng tuổi cho trẻ con.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>見舞<rt>みま</rt></ruby>い</span>",
        "hiragana": "みまい",
        "meaning": "Thăm hỏi người ốm (お見舞い)",
        "type": "Danh từ",
        "example": "お見舞いに 行きます。(Đi thăm người ốm.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>興味<rt>きょうみ</rt></ruby></span>",
        "hiragana": "きょうみ",
        "meaning": "Hứng thú, niềm đam mê (đi với に)",
        "type": "Danh từ",
        "example": "日本の 歴史に 興味が あります。(Rất có hứng thú với lịch sử Nhật Bản.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>猿<rt>さる</rt></ruby></span>",
        "hiragana": "さる",
        "meaning": "Con khỉ",
        "type": "Danh từ",
        "example": "猿に えさを やります。(Cho khỉ ăn.)"
      },
      {
        "kanji": "えさ",
        "hiragana": "えさ",
        "meaning": "Mồi, thức ăn cho động vật",
        "type": "Danh từ",
        "example": "魚の えさ (Thức ăn cho cá)"
      },
      {
        "kanji": "おもちゃ",
        "hiragana": "おもちゃ",
        "meaning": "Đồ chơi trẻ em",
        "type": "Danh từ",
        "example": "おもちゃで 遊びます。(Chơi đồ chơi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>絵本<rt>えほん</rt></ruby></span>",
        "hiragana": "えほん",
        "meaning": "Sách tranh thiếu nhi",
        "type": "Danh từ",
        "example": "子どもに 絵本を 読んで やります。(Đọc sách tranh cho con nghe.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. [Người trên] に V-て いただきます (Nhận hành vi từ bề trên)",
        "explanation": "Khiêm nhường ngữ của 〜て もらいます. Biểu thị sự biết ơn khi nhận được hành động giúp đỡ từ người có địa vị cao hơn hoặc người lớn tuổi hơn.",
        "caution": "Người thực hiện hành động đi với trợ từ に.",
        "examples": [
          {
            "type": "sentence",
            "context": "Được giáo viên sửa bài văn cho",
            "jp": "わたしは <span class=\"furigana\"><ruby>先生<rt>せんせい</rt></ruby></span>に <span class=\"furigana\"><ruby>作文<rt>さくぶん</rt></ruby></span>を <span class=\"furigana\"><ruby>直<rt>なお</rt></ruby>して</span> いただきました。",
            "rawJp": "わたしは先生に作文を直していただきました。",
            "vi": "Tôi đã được thầy giáo sửa bài văn giúp cho."
          }
        ]
      },
      {
        "structure": "2. [Người trên] が V-て くださいます (Bề trên làm giúp mình)",
        "explanation": "Tôn kính ngữ của 〜て くれます. Bề trên chủ động thực hiện hành vi đem lại lợi ích cho mình hoặc người thân trong gia đình mình.",
        "caution": "Chủ ngữ là người bề trên đi với trợ từ が.",
        "examples": [
          {
            "type": "sentence",
            "context": "Trưởng phòng chở về tận nhà",
            "jp": "<span class=\"furigana\"><ruby>部長<rt>ぶちょう</rt></ruby></span>が <span class=\"furigana\"><ruby>車<rt>くるま</rt></ruby></span>で <span class=\"furigana\"><ruby>送<rt>おく</rt></ruby>って</span> くださいました。",
            "rawJp": "部長が車で送ってくださいました。",
            "vi": "Đích thân trưởng phòng đã lái xe chở tôi về tận nơi."
          }
        ]
      },
      {
        "structure": "3. [Người dưới] に V-て やります (Làm giúp người dưới/thú cưng)",
        "explanation": "Dùng khi người nói thực hiện một hành động đem lại lợi ích cho người có vai vế thấp hơn, em nhỏ, thú cưng hoặc cây cối.",
        "caution": "Không dùng với người ngang hàng hoặc người ngoài vì có sắc thái ban ơn.",
        "examples": [
          {
            "type": "sentence",
            "context": "Sửa xe đạp giúp em trai",
            "jp": "わたしは <span class=\"furigana\"><ruby>弟<rt>おとうと</rt></ruby></span>の <span class=\"furigana\"><ruby>自転車<rt>じてんしゃ</rt></ruby></span>を <span class=\"furigana\"><ruby>修理<rt>しゅうり</rt></ruby>して</span> やりました。",
            "rawJp": "わたしは弟の自転車を修理してやりました。",
            "vi": "Tôi đã sửa chiếc xe đạp giúp cho cậu em trai."
          }
        ]
      }
    ]
  },

  // BÀI 42
  {
    "id": "bai-42",
    "title": "Bài 42: Mục Đích Với 〜ために & Công Dụng Với 〜のに",
    "level": "Minna no Nihongo N4 (Bài 42)",
    "badge": "Mục đích & Công dụng",
    "description": "Biểu thị mục đích có ý chí với V-る / Nの + ために, biểu thị công dụng mục đích dùng vào việc gì với V-る / N + に, và tính toán hao phí thời gian tiền bạc.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>包<rt>つつ</rt></ruby>みます</span>",
        "hiragana": "つつみます",
        "meaning": "Gói ghém, bọc quà",
        "type": "Động từ nhóm 1",
        "example": "プレゼントを きれいに 包みます。(Gói quà thật đẹp.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>沸<rt>わ</rt></ruby>かします</span>",
        "hiragana": "わかします",
        "meaning": "Đun sôi (nước - お湯を〜)",
        "type": "Động từ nhóm 1",
        "example": "お湯を 沸かします。(Đun nước sôi.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>混<rt>ま</rt></ruby>ぜます</span>",
        "hiragana": "まぜます",
        "meaning": "Trộn, khuấy đều",
        "type": "Động từ nhóm 2",
        "example": "よく 混ぜて ください。(Hãy khuấy thật đều lên.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>計算<rt>けいさん</rt></ruby>します</span>",
        "hiragana": "けいさんします",
        "meaning": "Tính toán tiền bạc, số liệu",
        "type": "Động từ nhóm 3",
        "example": "お金を 計算します。(Tính toán tiền.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>並<rt>なら</rt></ruby>びます</span>",
        "hiragana": "ならびます",
        "meaning": "Xếp hàng (tự động từ)",
        "type": "Động từ nhóm 1",
        "example": "列に 並びます。(Xếp thành hàng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>丈夫<rt>じょうぶ</rt></ruby>な</span>",
        "hiragana": "じょうぶな",
        "meaning": "Bền chắc, dai",
        "type": "Tính từ (na)",
        "example": "丈夫な 靴 (Đôi giày rất bền)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>弁護士<rt>べんごし</rt></ruby></span>",
        "hiragana": "べんごし",
        "meaning": "Luật sư",
        "type": "Danh từ",
        "example": "弁護士に 相談します。(Thảo luận với luật sư.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>音楽家<rt>おんがくか</rt></ruby></span>",
        "hiragana": "おんがくか",
        "meaning": "Nhạc sĩ, nghệ sĩ âm nhạc",
        "type": "Danh từ",
        "example": "有名な 音楽家 (Nghệ sĩ âm nhạc nổi tiếng)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>自然<rt>しぜん</rt></ruby></span>",
        "hiragana": "しぜん",
        "meaning": "Tự nhiên, thiên nhiên",
        "type": "Danh từ",
        "example": "豊かな 自然 (Thiên nhiên trù phú)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>教育<rt>きょういく</rt></ruby></span>",
        "hiragana": "きょういく",
        "meaning": "Giáo dục",
        "type": "Danh từ",
        "example": "子どもの 教育 (Giáo dục con cái)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>法律<rt>ほうりつ</rt></ruby></span>",
        "hiragana": "ほうりつ",
        "meaning": "Pháp luật",
        "type": "Danh từ",
        "example": "法律を 守ります。(Tuân thủ pháp luật.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>目的<rt>もくてき</rt></ruby></span>",
        "hiragana": "もくてき",
        "meaning": "Mục đích",
        "type": "Danh từ",
        "example": "勉強の 目的 (Mục đích học tập)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>論文<rt>ろんぶん</rt></ruby></span>",
        "hiragana": "ろんぶん",
        "meaning": "Luận văn tốt nghiệp, bài nghiên cứu",
        "type": "Danh từ",
        "example": "卒業論文を 書きます。(Viết luận văn tốt nghiệp.)"
      },
      {
        "kanji": "やかん",
        "hiragana": "やかん",
        "meaning": "Ấm đun nước",
        "type": "Danh từ",
        "example": "やかんで お湯を 沸かします。(Đun nước bằng ấm.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>栓抜<rt>せんぬ</rt></ruby>き</span>",
        "hiragana": "せんぬき",
        "meaning": "Dụng cụ khui nắp chai",
        "type": "Danh từ",
        "example": "栓抜きで ビールを 開けます。(Khui nắp chai bia bằng dụng cụ mở nắp.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V-る / Nの + ために (Vì mục đích có ý chí)",
        "explanation": "Diễn tả hành động vế sau được thực hiện nhằm đạt được mục đích có chủ đích rõ ràng ở vế trước.",
        "caution": "Chủ ngữ ở hai vế của câu phải là cùng một người (chủ ngữ đồng nhất).",
        "examples": [
          {
            "type": "sentence",
            "context": "Tiết kiệm tiền để mua nhà",
            "jp": "<span class=\"furigana\"><ruby>家<rt>いえ</rt></ruby></span>を <span class=\"furigana\"><ruby>買<rt>か</rt></ruby>う</span>ために、<span class=\"furigana\"><ruby>貯金<rt>ちょきん</rt></ruby>して</span> います。",
            "rawJp": "家を買うために、貯金しています。",
            "vi": "Để mua nhà, tôi đang chăm chỉ tiết kiệm tiền."
          }
        ]
      },
      {
        "structure": "2. V-る / N + に 使います (Công dụng của đồ vật)",
        "explanation": "Dùng để diễn tả công dụng, tính năng hoặc mục đích sử dụng của một đồ vật cụ thể.",
        "caution": "Sau 〜のに thường đi với các động từ: 使う (dùng), 便利だ (tiện), いい (tốt).",
        "examples": [
          {
            "type": "sentence",
            "context": "Công dụng của chiếc kéo",
            "jp": "この はさみは <span class=\"furigana\"><ruby>紙<rt>かみ</rt></ruby></span>を <span class=\"furigana\"><ruby>切<rt>き</rt></ruby>る</span>のに <span class=\"furigana\"><ruby>使<rt>つか</rt></ruby>います</span>。",
            "rawJp": "このはさみは紙を切るのに使います。",
            "vi": "Cây kéo này được dùng vào việc cắt giấy."
          }
        ]
      },
      {
        "structure": "3. V-る / N + に [Thời gian/Tiền bạc] かかります (Tiêu tốn)",
        "explanation": "Biểu thị mức độ tiêu tốn về thời gian hoặc tiền của để hoàn tất một mục tiêu nào đó.",
        "caution": "Đi trực tiếp với số từ chỉ lượng và động từ かかります.",
        "examples": [
          {
            "type": "sentence",
            "context": "Thời gian sửa máy tính",
            "jp": "パソコンを <span class=\"furigana\"><ruby>修理<rt>しゅうり</rt></ruby>する</span>のに 3<span class=\"furigana\"><ruby>日<rt>にち</rt></ruby></span> かかります。",
            "rawJp": "パソコンを修理するのに3日かかります。",
            "vi": "Để sửa chiếc máy tính này phải mất 3 ngày."
          }
        ]
      }
    ]
  },

  // BÀI 43
  {
    "id": "bai-43",
    "title": "Bài 43: Phỏng Đoán Trực Quan 〜そうです & Hành Động Đi Rồi Về 〜てくる",
    "level": "Minna no Nihongo N4 (Bài 43)",
    "badge": "Vẻ bề ngoài & Đi về",
    "description": "Biểu thị sự phỏng đoán trực quan qua vẻ ngoài hoặc sắp sửa xảy ra với V-bỏ ます / A-bỏ い / Na + そうです, và diễn tả hành động đi đâu làm gì rồi quay về với V-て きます.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>増<rt>ふ</rt></ruby>えます</span>",
        "hiragana": "ふえます",
        "meaning": "Tăng lên (tự động từ, xuất khẩu - 輸出が〜)",
        "type": "Động từ nhóm 2",
        "example": "輸出が 増えました。(Kim ngạch xuất khẩu đã tăng lên.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>減<rt>へ</rt></ruby>ります</span>",
        "hiragana": "へります",
        "meaning": "Giảm xuống (tự động từ, xuất khẩu - 輸出が〜)",
        "type": "Động từ nhóm 1",
        "example": "輸入が 減りました。(Kim ngạch nhập khẩu đã giảm xuống.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>上<rt>あ</rt></ruby>がります</span>",
        "hiragana": "あがります",
        "meaning": "Tăng giá, lên giá (giá cả - 値段が〜)",
        "type": "Động từ nhóm 1",
        "example": "物価が 上がります。(Vật giá tăng lên.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>下<rt>さ</rt></ruby>がります</span>",
        "hiragana": "さがります",
        "meaning": "Hạ giá, tụt xuống (giá cả - 値段が〜)",
        "type": "Động từ nhóm 1",
        "example": "気温が 下がります。(Nhiệt độ hạ thấp.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>切<rt>き</rt></ruby>れます</span>",
        "hiragana": "きれます",
        "meaning": "Bị đứt (dây buộc - ひもが〜)",
        "type": "Động từ nhóm 2",
        "example": "ひもが 切れました。(Sợi dây đã bị đứt.)"
      },
      {
        "kanji": "とれます",
        "hiragana": "とれます",
        "meaning": "Bị tuột, rụng ra (cúc áo - ボタンが〜)",
        "type": "Động từ nhóm 2",
        "example": "ボタンが とれました。(Cúc áo bị tuột ra.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>落<rt>お</rt></ruby>ちます</span>",
        "hiragana": "おちます",
        "meaning": "Rơi xuống (hành lý - 荷物が〜)",
        "type": "Động từ nhóm 2",
        "example": "荷物が 落ちました。(Gói hàng đã bị rơi.)"
      },
      {
        "kanji": "なくなります",
        "hiragana": "なくなります",
        "meaning": "Hết sạch, cạn kiệt (xăng - ガソリンが〜)",
        "type": "Động từ nhóm 1",
        "example": "ガソリンが なくなりました。(Xe đã cạn sạch xăng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>変<rt>へん</rt></ruby>な</span>",
        "hiragana": "へんな",
        "meaning": "Kỳ lạ, bất thường",
        "type": "Tính từ (na)",
        "example": "変な 音が します。(Có âm thanh kỳ lạ phát ra.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>幸<rt>しあわ</rt></ruby>せな</span>",
        "hiragana": "しあわせな",
        "meaning": "Hạnh phúc, đầm ấm",
        "type": "Tính từ (na)",
        "example": "幸せな 家族 (Gia đình hạnh phúc)"
      },
      {
        "kanji": "うまい",
        "hiragana": "うまい",
        "meaning": "Ngon miệng, khéo léo",
        "type": "Tính từ (i)",
        "example": "料理が うまいです。(Nấu ăn rất ngon.)"
      },
      {
        "kanji": "まずい",
        "hiragana": "まずい",
        "meaning": "Dở tệ, vụng về",
        "type": "Tính từ (i)",
        "example": "まずい コーヒー (Cà phê dở tệ)"
      },
      {
        "kanji": "ガソリン",
        "hiragana": "ガソリン",
        "meaning": "Xăng dầu xe",
        "type": "Danh từ",
        "example": "ガソリンスタンド (Trạm đổ xăng)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>今<rt>いま</rt></ruby>にも</span>",
        "hiragana": "いまにも",
        "meaning": "Bất cứ lúc nào, sắp sửa đến nơi rồi",
        "type": "Phó từ",
        "example": "今にも 雨が 降りそうです。(Trời trông như sắp sửa đổ mưa ngay bây giờ.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V-bỏ ます + そうです (Trông sắp sửa...)",
        "explanation": "Diễn tả sự phán đoán một hiện tượng sắp sửa xảy ra ngay trước mắt dựa trên quan sát trực tiếp.",
        "caution": "Thường đi kèm phó từ 今にも (bất cứ lúc nào).",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhìn mây đen vần vũ",
            "jp": "<span class=\"furigana\"><ruby>今<rt>いま</rt></ruby>にも</span> <span class=\"furigana\"><ruby>雨<rt>あめ</rt></ruby></span>が <span class=\"furigana\"><ruby>降<rt>ふ</rt></ruby>りそう</span>です。",
            "rawJp": "今にも雨が降りそうです。",
            "vi": "Trông như trời sắp sửa đổ mưa ngay bây giờ ấy."
          }
        ]
      },
      {
        "structure": "2. A-bỏ い / Na + そうです (Trông có vẻ...)",
        "explanation": "Diễn tả cảm nhận, phỏng đoán về tính chất của sự vật qua vẻ ngoài trực quan.",
        "caution": "Đặc biệt: いい -> よさそうです (trông có vẻ tốt). ない -> なさそうです (trông có vẻ không có).",
        "examples": [
          {
            "type": "sentence",
            "context": "Nhìn đĩa bánh ngọt bày trong tủ kính",
            "jp": "この ケーキは とても おいしそうです。",
            "rawJp": "このケーキはとてもおいしそうです。",
            "vi": "Chiếc bánh ngọt này trông có vẻ rất ngon."
          }
        ]
      },
      {
        "structure": "3. V-て きます (Đi đâu làm gì rồi quay về)",
        "explanation": "Diễn tả việc rời khỏi vị trí hiện tại, đi đến một địa điểm để thực hiện một hành động rồi quay trở lại vị trí ban đầu.",
        "caution": "Phân biệt với nghĩa biến đổi dần dần theo thời gian trong N3.",
        "examples": [
          {
            "type": "sentence",
            "context": "Ra ngoài mua đồ uống",
            "jp": "ちょっと <span class=\"furigana\"><ruby>飲<rt>の</rt></ruby>み物</span>を <span class=\"furigana\"><ruby>買<rt>か</rt></ruby>って</span> きます。",
            "rawJp": "ちょっと飲み物を買ってきます。",
            "vi": "Tôi đi mua chút đồ uống rồi về ngay đây."
          }
        ]
      }
    ]
  },

  // BÀI 44
  {
    "id": "bai-44",
    "title": "Bài 44: Quá Mức 〜すぎます & Dễ/Khó Làm Gì 〜やすい / 〜にくい",
    "level": "Minna no Nihongo N4 (Bài 44)",
    "badge": "Mức độ & Tính chất",
    "description": "Biểu thị sự vượt quá giới hạn với 〜すぎます, tính chất dễ hoặc khó thực hiện với 〜やすい / 〜にくい, biến đổi trạng thái nhân tạo với A-く / Na-に します, và chọn lựa với N に します.",
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
        "meaning": "Cười",
        "type": "Động từ nhóm 1",
        "example": "みんなで 笑いました。(Mọi người cùng cười rộ lên.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>乾<rt>かわ</rt></ruby>きます</span>",
        "hiragana": "かわきます",
        "meaning": "Khô ráo (quần áo - 洗濯物が〜)",
        "type": "Động từ nhóm 1",
        "example": "洗濯物が 乾きました。(Quần áo giặt đã khô.)"
      },
      {
        "kanji": "ぬれます",
        "hiragana": "ぬれます",
        "meaning": "Bị ướt sũng (quần áo - 服が〜)",
        "type": "Động từ nhóm 2",
        "example": "雨で 服が ぬれました。(Vì mưa nên quần áo ướt sũng.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>滑<rt>すべ</rt></ruby>ります</span>",
        "hiragana": "すべります",
        "meaning": "Trượt chân, trơn trượt",
        "type": "Động từ nhóm 1",
        "example": "雪で 滑ります。(Trượt chân vì đường tuyết.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>起<rt>お</rt></ruby>きます</span>",
        "hiragana": "おきます",
        "meaning": "Xảy ra (sự cố, tai nạn - 事故が〜)",
        "type": "Động từ nhóm 2",
        "example": "事故が 起きました。(Tai nạn đã xảy ra.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>調節<rt>ちょうせつ</rt></ruby>します</span>",
        "hiragana": "ちょうせつします",
        "meaning": "Điều chỉnh (nhiệt độ, âm lượng)",
        "type": "Động từ nhóm 3",
        "example": "温度を 調節します。(Điều chỉnh nhiệt độ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>安全<rt>あんぜん</rt></ruby>な</span>",
        "hiragana": "あんぜんな",
        "meaning": "An toàn",
        "type": "Tính từ (na)",
        "example": "安全な 運転 (Lái xe an toàn)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>危険<rt>きけん</rt></ruby>な</span>",
        "hiragana": "きけんな",
        "meaning": "Nguy hiểm",
        "type": "Tính từ (na)",
        "example": "危険な 場所 (Nơi nguy hiểm)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>濃<rt>こ</rt></ruby>い</span>",
        "hiragana": "こい",
        "meaning": "Đậm đặc, sẫm màu",
        "type": "Tính từ (i)",
        "example": "濃い お茶 (Trà đậm đặc)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>薄<rt>うす</rt></ruby>い</span>",
        "hiragana": "うすい",
        "meaning": "Nhạt vị, loãng, mỏng",
        "type": "Tính từ (i)",
        "example": "薄い 味 (Vị nhạt)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>厚<rt>あつ</rt></ruby>い</span>",
        "hiragana": "あつい",
        "meaning": "Dày cộp (sách, áo len)",
        "type": "Tính từ (i)",
        "example": "厚い 本 (Cuốn sách dày)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>空気<rt>くうき</rt></ruby></span>",
        "hiragana": "くうき",
        "meaning": "Không khí",
        "type": "Danh từ",
        "example": "きれいな 空気 (Không khí trong lành)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>涙<rt>なみだ</rt></ruby></span>",
        "hiragana": "なみだ",
        "meaning": "Nước mắt",
        "type": "Danh từ",
        "example": "涙が 出ます。(Rơi nước mắt.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. V-bỏ ます / A-bỏ い / Na + すぎます (Quá mức, vượt giới hạn)",
        "explanation": "Diễn tả hành vi hoặc tính chất vượt quá mức độ bình thường hoặc chuẩn mực, thường mang hàm ý tiêu cực, không tốt.",
        "caution": "Sau khi ghép với すぎます thì cụm từ trở thành một động từ nhóm 2.",
        "examples": [
          {
            "type": "sentence",
            "context": "Ăn quá nhiều đau bụng",
            "jp": "ご飯を <span class=\"furigana\"><ruby>食<rt>た</rt></ruby>べすぎました</span>。",
            "rawJp": "ご飯を食べすぎました。",
            "vi": "Tôi đã lỡ ăn quá nhiều cơm rồi."
          }
        ]
      },
      {
        "structure": "2. V-bỏ ます + やすい / にくい (Dễ làm / Khó làm)",
        "explanation": "• やすい: Diễn tả một hành động rất dễ thực hiện hoặc đồ vật có xu hướng dễ bị biến đổi.\n• にくい: Diễn tả một hành động khó thực hiện hoặc khó gây ra hiện tượng.",
        "caution": "Sau khi ghép, cụm từ biến đổi và chia theo quy tắc của tính từ đuôi い.",
        "examples": [
          {
            "type": "sentence",
            "context": "Khen cuốn sách dễ đọc",
            "jp": "この <span class=\"furigana\"><ruby>本<rt>ほん</rt></ruby></span>は <span class=\"furigana\"><ruby>字<rt>じ</rt></ruby></span>が <span class=\"furigana\"><ruby>大<rt>おお</rt></ruby>きくて</span>、<span class=\"furigana\"><ruby>読<rt>よ</rt></ruby>みやすい</span>です。",
            "rawJp": "この本は字が大きくて、読みやすいです。",
            "vi": "Cuốn sách này chữ to nên rất dễ đọc."
          }
        ]
      },
      {
        "structure": "3. A-く / Na-に + します (Làm cho trở nên...)",
        "explanation": "Diễn tả sự tác động có chủ ý của con người để làm thay đổi tính chất hoặc trạng thái của đồ vật.",
        "caution": "Nếu tự biến đổi tự nhiên thì dùng Ａ-く / Na-に なります.",
        "examples": [
          {
            "type": "sentence",
            "context": "Dọn dẹp phòng ốc cho sạch",
            "jp": "<span class=\"furigana\"><ruby>部屋<rt>へや</rt></ruby></span>を きれいに します。",
            "rawJp": "部屋をきれいにします。",
            "vi": "Tôi sẽ dọn dẹp cho căn phòng trở nên sạch sẽ."
          }
        ]
      }
    ]
  },

  // BÀI 45
  {
    "id": "bai-45",
    "title": "Bài 45: Giả Định Tình Huống 〜場合は & Trái Với Mong Đợi 〜のに",
    "level": "Minna no Nihongo N4 (Bài 45)",
    "badge": "Giả định & Bất mãn",
    "description": "Nêu phương án xử lý trong trường hợp giả định với [Thể thông thường] + 場合は, và diễn tả tâm trạng bất mãn, hụt hẫng khi kết quả trái với dự kiến với [Thể thông thường] + のに.",
    "vocabulary": [
      {
        "kanji": "<span class=\"furigana\"><ruby>信<rt>しん</rt></ruby>じます</span>",
        "hiragana": "しんじます",
        "meaning": "Tin tưởng, tin cậy",
        "type": "Động từ nhóm 2",
        "example": "友だちを 信じます。(Tin tưởng bạn bè.)"
      },
      {
        "kanji": "キャンセルします",
        "hiragana": "キャンセルします",
        "meaning": "Hủy bỏ (đặt phòng, lịch hẹn)",
        "type": "Động từ nhóm 3",
        "example": "予約を キャンセルします。(Hủy đặt chỗ.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>知<rt>し</rt></ruby>らせます</span>",
        "hiragana": "しらせます",
        "meaning": "Thông báo cho biết",
        "type": "Động từ nhóm 2",
        "example": "結果を 知らせます。(Thông báo kết quả.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>保証書<rt>ほしょうしょ</rt></ruby></span>",
        "hiragana": "ほしょうしょ",
        "meaning": "Phiếu bảo hành sản phẩm",
        "type": "Danh từ",
        "example": "商品の 保証書 (Giấy bảo hành của sản phẩm)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>領収書<rt>りょうしゅうしょ</rt></ruby></span>",
        "hiragana": "りょうしゅうしょ",
        "meaning": "Biên lai thu tiền, hóa đơn đỏ",
        "type": "Danh từ",
        "example": "領収書を もらいます。(Lấy hóa đơn biên lai.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>中止<rt>ちゅうし</rt></ruby></span>",
        "hiragana": "ちゅうし",
        "meaning": "Sự hoãn lại, đình chỉ hủy bỏ",
        "type": "Danh từ",
        "example": "雨で 試合は 中止です。(Trận đấu bị hoãn do trời mưa.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>点<rt>てん</rt></ruby></span>",
        "hiragana": "てん",
        "meaning": "Điểm số thi cử",
        "type": "Danh từ",
        "example": "100点を 取ります。(Đạt 100 điểm tuyệt đối.)"
      },
      {
        "kanji": "ちゃんと",
        "hiragana": "ちゃんと",
        "meaning": "Cẩn thận, đàng hoàng, ngăn nắp",
        "type": "Phó từ",
        "example": "ちゃんと 復習します。(Ôn bài một cách cẩn thận.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>急<rt>きゅう</rt></ruby>に</span>",
        "hiragana": "きゅうに",
        "meaning": "Đột ngột, bất ngờ",
        "type": "Phó từ",
        "example": "急に 雨が 降りました。(Trời bỗng đổ mưa rào đột ngột.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>優勝<rt>ゆうしょう</rt></ruby></span>",
        "hiragana": "ゆうしょう",
        "meaning": "Chiến thắng vô địch giải đấu",
        "type": "Danh từ",
        "example": "大会で 優勝しました。(Vô địch giải đấu.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>眠<rt>ねむ</rt></ruby>ります</span>",
        "hiragana": "ねむります",
        "meaning": "Ngủ say",
        "type": "Động từ nhóm 1",
        "example": "ぐっすり 眠りました。(Ngủ một giấc thật say.)"
      },
      {
        "kanji": "<span class=\"furigana\"><ruby>目<rt>め</rt></ruby>が <ruby>覚<rt>さ</rt></ruby>めます</span>",
        "hiragana": "めがさめます",
        "meaning": "Tỉnh giấc, mở mắt thức dậy",
        "type": "Cụm động từ",
        "example": "朝 6時に 目が 覚めました。(Tỉnh giấc vào 6 giờ sáng.)"
      }
    ],
    "grammar": [
      {
        "structure": "1. [Thể thông thường] + 場合は (Trong trường hợp...)",
        "explanation": "Dùng để nêu lên một tình huống, hoàn cảnh có khả năng xảy ra, và vế sau đưa ra chỉ dẫn, cách thức xử lý tình huống đó.",
        "caution": "Tính từ đuôi な thêm な, Danh từ thêm の trước 場合は (火事の場合は、故障の場合は).",
        "examples": [
          {
            "type": "sentence",
            "context": "Hướng dẫn khi xảy ra hỏa hoạn",
            "jp": "<span class=\"furigana\"><ruby>火事<rt>かじ</rt></ruby></span>の <span class=\"furigana\"><ruby>場合<rt>ばあい</rt></ruby></span>は、119<span class=\"furigana\"><ruby>番<rt>ばん</rt></ruby></span>に <span class=\"furigana\"><ruby>電話<rt>でんわ</rt></ruby>して</span> ください。",
            "rawJp": "火事の場合は、119番に電話してください。",
            "vi": "Trong trường hợp xảy ra hỏa hoạn, xin hãy gọi đến số 119."
          }
        ]
      },
      {
        "structure": "2. [Thể thông thường] + のに (Vậy mà, thế mà - Bất mãn, ngược mong đợi)",
        "explanation": "Dùng để nối hai mệnh đề có quan hệ đối lập, diễn tả kết quả thực tế trái ngược hẳn với những gì người nói kỳ vọng, kèm sắc thái ngạc nhiên, hụt hẫng hoặc bất mãn.",
        "caution": "Tính từ đuôi な và Danh từ ở hiện tại thêm な trước のに (好きなのに、日曜日なのに). Khác với けど/が (đối lập khách quan), のに mang nặng cảm xúc người nói.",
        "examples": [
          {
            "type": "sentence",
            "context": "Học hành chăm chỉ vậy mà thi trượt",
            "jp": "<span class=\"furigana\"><ruby>一生懸命<rt>いっしょうけんめい</rt></ruby></span> <span class=\"furigana\"><ruby>勉強<rt>べんきょう</rt></ruby>した</span>のに、テストに <span class=\"furigana\"><ruby>落<rt>お</rt></ruby>ちました</span>。",
            "rawJp": "一生懸命勉強したのに、テストに落ちました。",
            "vi": "Tôi đã học hành vô cùng chăm chỉ, vậy mà vẫn thi trượt."
          }
        ]
      }
    ]
  }
];

fs.writeFileSync('data/lessons_41_45.js', `// Lessons 41 to 45 (Minna no Nihongo N4)\nconst lessons_41_45 = ${JSON.stringify(lessons_41_45, null, 2)};\n`, 'utf8');
console.log('Successfully generated data/lessons_41_45.js');
