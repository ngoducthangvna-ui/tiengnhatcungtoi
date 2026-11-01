/**
 * DỮ LIỆU ĐỀ THI JLPT N5 (25 ĐỀ • 500 CÂU HỎI & 25 ĐOẠN VĂN)
 * data/exams_n5.js
 * --------------------------------------------------------------------------
 * Tự động nạp theo cơ chế Lazy Loading khi học viên chọn cấp độ JLPT N5.
 */
(function(root) {
  'use strict';

  const EXAMS_N5_DATA = [
  {
    "index": 1,
    "code": "N5-01",
    "level": "N5",
    "title": "Đề N5-01: Trợ từ cơ bản は‧の‧も‧か  & Câu danh từ (Bài 1–2) — Nguồn: Nihongo Quiz N5 & JLPT",
    "passage": "たなかさんは まいにち 六時はんに おきます。おきて【 16 】、かおを あらいます。それから、くるま【 17 】会社へ 行きま す。うちから 会社まで【 18 】三十分 かかります。会社は おおきいです。【 19 】、しごとは あまり おおくないです。よる は テレビを 見るのが【 20 】です。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは まいあさ コーヒー( )のみます。",
        "options": [
          "1. を",
          "2. に",
          "3. で",
          "4. が"
        ],
        "correct": 1,
        "correctText": "を",
        "explanation": "( を  chỉ tân ngữ trực tiếp của のみます )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "としょかん( )ほんを 読みます。",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( で  chỉ địa điểm diễn ra hành động)"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "( )ほんは 私のです。きのう 買いました。",
        "options": [
          "1. この",
          "2. これ",
          "3. それ",
          "4. どれ"
        ],
        "correct": 1,
        "correctText": "この",
        "explanation": "( この  + Danh từ)"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "私は 友だち( )としょかんへ 行きます。",
        "options": [
          "1. と",
          "2. も",
          "3. や",
          "4. を"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "( と  chỉ người cùng thực hiện hành động)"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "学校は 九時( )三時までです。",
        "options": [
          "1. から",
          "2. まで",
          "3. に",
          "4. で"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( 〜から  〜まで  (từ... đến...))"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "私は あたらしい 車が 買い( )。",
        "options": [
          "1. たいです",
          "2. ます",
          "3. ました",
          "4. ま\nしょう"
        ],
        "correct": 1,
        "correctText": "たいです",
        "explanation": "(V たいです  (muốn làm gì))"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "この パンは あまり 高く( )。",
        "options": [
          "1. ないです",
          "2. ではありません",
          "3. じゃ\nありません",
          "4. ません"
        ],
        "correct": 1,
        "correctText": "ないです",
        "explanation": "(Phủ định tính từ い : くないです )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "りんごを( )かいますか。 ― 三つ かいます。",
        "options": [
          "1. いくつ",
          "2. どこで",
          "3. いつ",
          "4. なん\nにん"
        ],
        "correct": 1,
        "correctText": "いくつ",
        "explanation": "( いくつ  hỏi số lượng đồ vật)"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "ここで しゃしんを とら( )ください。",
        "options": [
          "1. ないで",
          "2. なくて",
          "3. ませんで",
          "4. な\nいと"
        ],
        "correct": 1,
        "correctText": "ないで",
        "explanation": "(V ないでください  (xin đừng làm))"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "きのうは うちに( )何を しましたか。",
        "options": [
          "1. かえる",
          "2. かえるから",
          "3. かえって",
          "4. かえったり"
        ],
        "correct": 3,
        "correctText": "かえって",
        "explanation": "(Nối hành động tuần tự bằng V て )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ か。",
        "options": [
          "1. です",
          "2. あなたは",
          "3. 好き",
          "4. 何が"
        ],
        "correct": 3,
        "correctText": "好き",
        "explanation": "[2→4→3→1 (あなたは  何が  好き  ですか。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ★ ___ ___。",
        "options": [
          "1. では",
          "2. 今日は",
          "3. ありません",
          "4.\n火曜日"
        ],
        "correct": 4,
        "correctText": "火曜日",
        "explanation": "[2→4→1→3 (今 日は  火曜日  では  ありません。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. 買いたいです",
          "2. くつが",
          "3. 私は",
          "4.\n新しい"
        ],
        "correct": 2,
        "correctText": "くつが",
        "explanation": "[3→4→2→1 (私は  新しい  くつが  買いたいです。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは やさいより、___ ★ ___ ___。",
        "options": [
          "1. ほうが",
          "2. くだものの",
          "3. 好き",
          "4.\nです"
        ],
        "correct": 1,
        "correctText": "ほうが",
        "explanation": "[2→1→3→4 (くだものの  ほうが  好きです。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "としょかんで ___ ___ ★ ___。",
        "options": [
          "1. かりて",
          "2. うちで",
          "3. ほんを",
          "4. 読\nみます"
        ],
        "correct": 2,
        "correctText": "うちで",
        "explanation": "[3→1→2→4 (ほんを  かりて  うちで  読みます。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. から",
          "2. まで",
          "3. に",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( おきてから  (sau khi thức dậy))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( くるまで  (bằng ô tô))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. だいたい",
          "2. ぜんぜん",
          "3. あまり",
          "4. とても"
        ],
        "correct": 1,
        "correctText": "だいたい",
        "explanation": "( だいたい  三十分  (khoảng 30 phút))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. でも",
          "2. それでは",
          "3. それから",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "でも",
        "explanation": "( でも  (tuy nhiên))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. すき",
          "2. たかい",
          "3. やすい",
          "4. ながい"
        ],
        "correct": 1,
        "correctText": "すき",
        "explanation": "( 見るのが  すきです  (thích xem))"
      }
    ]
  },
  {
    "index": 2,
    "code": "N5-02",
    "level": "N5",
    "title": "Đề N5-02: Chỉ định từ ここ‧そこ‧あそこ  & Thời gian に‧から‧まで  (Bài 3–4) — Nguồn: Nihongo NET",
    "passage": "にちようびに、キムさんは あたらしい くつが ほしかった【 16 】、デパートへ 行きました。あかい くつ【 17 】しろい く つの ほうが すきでした。みせの 人が「【 18 】くつが いいですか」と ききました。キムさんは しろい くつを えらびまし た。その 人は「すこし【 19 】ください」と 言いました。うちへ かえる【 20 】、コーヒーを のみました。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "あの 人は( )ですか。",
        "options": [
          "1. だれ",
          "2. なに",
          "3. どこ",
          "4. いつ"
        ],
        "correct": 1,
        "correctText": "だれ",
        "explanation": "( だれ  dùng hỏi về người)"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "「あした ひまですか。」「ええ。」「じゃあ、えいがを 見に 行き( )。」",
        "options": [
          "1. ませんか",
          "2. ました",
          "3. ません",
          "4.\nなさい"
        ],
        "correct": 1,
        "correctText": "ませんか",
        "explanation": "(V ませんか  dùng mời/rủ lịch sự)"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "先生も 来ます。友だち( )来ます。",
        "options": [
          "1. も",
          "2. を",
          "3. へ",
          "4. の"
        ],
        "correct": 1,
        "correctText": "も",
        "explanation": "( も  (cũng) chỉ sự tương đồng)"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "今日は 千円( )ありません。",
        "options": [
          "1. しか",
          "2. を",
          "3. へ",
          "4. の"
        ],
        "correct": 1,
        "correctText": "しか",
        "explanation": "( しか  + Phủ định (chỉ có...))"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "つかれましたね。すこし 休み( )。",
        "options": [
          "1. ましょう",
          "2. ません",
          "3. ました",
          "4.\nましたか"
        ],
        "correct": 1,
        "correctText": "ましょう",
        "explanation": "(V まし ょう  (cùng làm gì nhé))"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "きのうの テストは かんたん( )。",
        "options": [
          "1. でした",
          "2. ました",
          "3. かったです",
          "4.\nくなかったです"
        ],
        "correct": 1,
        "correctText": "でした",
        "explanation": "(Quá khứ tính từ な : でした )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "きっぷを 三( )買いました。",
        "options": [
          "1. まい",
          "2. ひき",
          "3. さつ",
          "4. にん"
        ],
        "correct": 1,
        "correctText": "まい",
        "explanation": "( まい  đếm vật mỏng phẳng)"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "今日、友だちが 十( )来ます。",
        "options": [
          "1. にん",
          "2. まい",
          "3. さつ",
          "4. ひき"
        ],
        "correct": 1,
        "correctText": "にん",
        "explanation": "( にん  đếm người)"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "きのう、友だちと「はこね」( )いう ところへ 行き ました。",
        "options": [
          "1. を",
          "2. で",
          "3. と",
          "4. や"
        ],
        "correct": 3,
        "correctText": "と",
        "explanation": "(N1 という  N2 (tên gọi là))"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "すみません、お手洗いは( )ですか。",
        "options": [
          "1. どこ",
          "2. だれ",
          "3. なに",
          "4. いつ"
        ],
        "correct": 1,
        "correctText": "どこ",
        "explanation": "( どこ  hỏi địa điểm)"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "A 「___ ___ ___ ★ か。」 B 「リンさんのです。」",
        "options": [
          "1. かさ",
          "2. です",
          "3. これは",
          "4. だれの"
        ],
        "correct": 2,
        "correctText": "です",
        "explanation": "[3→4→1→2 (こ れは  だれの  かさ  ですか。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ___ ★ 。",
        "options": [
          "1. 三時までです",
          "2. 今日の",
          "3. 九時か\nら",
          "4. テストは"
        ],
        "correct": 1,
        "correctText": "三時までです",
        "explanation": "[2→4→3→1 (今日の  テストは  九時から  三時までです。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. しずかです",
          "2. ひろくて",
          "3. この",
          "4.\nへやは"
        ],
        "correct": 2,
        "correctText": "ひ ろくて",
        "explanation": "[3→4→2→1 (この  へやは  ひろくて  しずかです。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. かさですか",
          "2. 新しい",
          "3. これは",
          "4.\nだれの"
        ],
        "correct": 2,
        "correctText": "新しい",
        "explanation": "[3→4→2→1 (これは  だれの  新しい  かさで すか。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. あついです",
          "2. 八月が",
          "3. 一年のうち\nで",
          "4. いちばん"
        ],
        "correct": 4,
        "correctText": "いちばん",
        "explanation": "[3→2→4→1 (一年のうちで  八月が  いちばん  あついです。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. から",
          "2. まで",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( ほしかったから  (vì muốn có))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. より",
          "2. から",
          "3. まで",
          "4. とか"
        ],
        "correct": 1,
        "correctText": "より",
        "explanation": "(A より  B のほうが  (so sánh hơn))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. どんな",
          "2. どこ",
          "3. だれ",
          "4. いつ"
        ],
        "correct": 1,
        "correctText": "どんな",
        "explanation": "( どんな  くつ  (giày như thế nào))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. まって",
          "2. たべて",
          "3. のんで",
          "4. かって"
        ],
        "correct": 1,
        "correctText": "まって",
        "explanation": "( すこし  まってください  (xin đợi một chút))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. まえに",
          "2. あとで",
          "3. ときで",
          "4. なかで"
        ],
        "correct": 1,
        "correctText": "まえに",
        "explanation": "( かえる  まえに  (trước khi về))"
      }
    ]
  },
  {
    "index": 3,
    "code": "N5-03",
    "level": "N5",
    "title": "Đề N5-03: Phương tiện で , Phương hướng へ  & Đồng hành と  (Bài 5) — Nguồn: GoJapan N5 Đề 2",
    "passage": "わたしは 月曜日から 金曜日まで 学校へ 行きます。バスで 二十分【 16 】。ごごは としょかんへ 行きます。としょかんは とても【 17 】から、べんきょうが よく できます。土曜日と 日曜日は うち【 18 】テレビを 見ます。らいしゅうは しけん が【 19 】。だから、あしたから まいばん べんきょう【 20 】。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "つくえの 上に ねこ( )います。",
        "options": [
          "1. が",
          "2. を",
          "3. に",
          "4. で"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "(Tồn tại sinh vật sống: に  + N が  います )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "つくえの 上に ほん( )ノートが あります。",
        "options": [
          "1. や",
          "2. を",
          "3. に",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "や",
        "explanation": "( や  liệt kê tiêu biểu)"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "先生に「すみません、この ほんを 読んで( )。」と お ねがいしました。",
        "options": [
          "1. ください",
          "2. いました",
          "3. います",
          "4.\nいません"
        ],
        "correct": 1,
        "correctText": "ください",
        "explanation": "(V てください  (nhờ vả lịch sự))"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "りんごと バナナと、( )が やすいですか。",
        "options": [
          "1. どちら",
          "2. どこ",
          "3. どの",
          "4. なに"
        ],
        "correct": 1,
        "correctText": "どちら",
        "explanation": "( どちら  hỏi lựa chọn giữa 2 vật)"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "駅から 学校まで( )かかりますか。",
        "options": [
          "1. どのくらい",
          "2. どちら",
          "3. いくつ",
          "4.\nいつ"
        ],
        "correct": 1,
        "correctText": "どのくら い",
        "explanation": "( どのくらい  hỏi khoảng thời gian)"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "やさいより くだものの( )が 好きです。",
        "options": [
          "1. ほう",
          "2. どちら",
          "3. より",
          "4. ほど"
        ],
        "correct": 1,
        "correctText": "ほう",
        "explanation": "(A より  B のほうが  (so sánh hơn))"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "今、雨が ふって( )。",
        "options": [
          "1. います",
          "2. あります",
          "3. ください",
          "4.\nでした"
        ],
        "correct": 1,
        "correctText": "います",
        "explanation": "(V ています  (đang diễn ra))"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "日本に( )まえに、国で 日本語を 勉強しました。",
        "options": [
          "1. き",
          "2. くる",
          "3. きて",
          "4. きた"
        ],
        "correct": 2,
        "correctText": "くる",
        "explanation": "(V る  + まえに  (trước khi))"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "きのうの 晩、十時( )勉強しました。",
        "options": [
          "1. まで",
          "2. から",
          "3. を",
          "4. が"
        ],
        "correct": 1,
        "correctText": "まで",
        "explanation": "( まで  chỉ mốc kết thúc)"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "私は 先生( )いろいろ 習いました。",
        "options": [
          "1. から",
          "2. しか",
          "3. ので",
          "4. のが"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "(Học/nhận từ ai dùng から / に )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは やさいより、___ ★ ___ ___。",
        "options": [
          "1. ほうが",
          "2. くだものの",
          "3. 好き",
          "4.\nです"
        ],
        "correct": 1,
        "correctText": "ほうが",
        "explanation": "[2→1→3→4 (くだものの  ほうが  好きです。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "としょかんで ___ ___ ★ ___。",
        "options": [
          "1. かりて",
          "2. うちで",
          "3. ほんを",
          "4. 読\nみます"
        ],
        "correct": 2,
        "correctText": "うちで",
        "explanation": "[3→1→2→4 (ほんを  かりて  うちで 読みます。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "私は ___ ★ ___ ___。",
        "options": [
          "1. 学校へ",
          "2. 行く",
          "3. まえに",
          "4. シャ\nワーをあびます"
        ],
        "correct": 2,
        "correctText": "行く",
        "explanation": "[1→2→3→4 (学校へ  行く  まえに  シャワーをあびます。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "きのう ___ ___ ★ ___ か。",
        "options": [
          "1. 買いに",
          "2. 日本語の",
          "3. 行きました",
          "4. じしょを"
        ],
        "correct": 1,
        "correctText": "買いに",
        "explanation": "[2→4→1→3 (日 本語の  じしょを  買いに  行きましたか。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "らいねん、___ ___ ___ ★ です。",
        "options": [
          "1. 日本語",
          "2. 勉強する",
          "3. を",
          "4. つも\nり"
        ],
        "correct": 4,
        "correctText": "つもり",
        "explanation": "[1→3→2→4 (日本語を  勉強する  つもりです。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. かかります",
          "2. かかりました",
          "3. かかって",
          "4. かかる"
        ],
        "correct": 1,
        "correctText": "かかり ます",
        "explanation": "(Thói quen hiện tại: かかります )"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. しずかです",
          "2. しずかい",
          "3. しずかな",
          "4. しずかに"
        ],
        "correct": 1,
        "correctText": "しずかです",
        "explanation": "( しずかですから  (vì yên tĩnh))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( うちで  テレビを見ま す  (xem ở nhà))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. あります",
          "2. います",
          "3. します",
          "4. きます"
        ],
        "correct": 1,
        "correctText": "あります",
        "explanation": "( しけんが  あります  (có kỳ thi))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. します",
          "2. しました",
          "3. しませんでした",
          "4. していました"
        ],
        "correct": 1,
        "correctText": "します",
        "explanation": "( あしたから  べんきょうします )"
      }
    ]
  },
  {
    "index": 4,
    "code": "N5-04",
    "level": "N5",
    "title": "Đề N5-04: Tân ngữ を , Nơi hành động で  & Rủ rê ませんか‧ましょう  (Bài 6) — Nguồn: Nihongo NET Part",
    "passage": "きのうは 母の たんじょうび【 16 】。わたしは デパートへ プレゼントを【 17 】に 行きました。きれいな かばんが ありま した【 18 】、とても 高かったです。だから、あかい はなを【 19 】、母に あげました。母は「ありがとう」【 20 】言いま した。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "学校は 九時( )三時までです。",
        "options": [
          "1. から",
          "2. まで",
          "3. に",
          "4. で"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( 〜から  〜まで  (từ... đến...))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "私は あたらしい 車が 買い( )。",
        "options": [
          "1. たいです",
          "2. ます",
          "3. ました",
          "4. ま\nしょう"
        ],
        "correct": 1,
        "correctText": "たいです",
        "explanation": "(V たいです (muốn làm gì))"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "この パンは あまり 高く( )。",
        "options": [
          "1. ないです",
          "2. ではありません",
          "3. じゃ\nありません",
          "4. ません"
        ],
        "correct": 1,
        "correctText": "ないです",
        "explanation": "(Phủ định tính từ い : くないです )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "りんごを( )かいますか。 ― 三つ かいます。",
        "options": [
          "1. いくつ",
          "2. どこで",
          "3. いつ",
          "4. なん\nにん"
        ],
        "correct": 1,
        "correctText": "いくつ",
        "explanation": "( いくつ  hỏi số lượng đồ vật)"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "ここで しゃしんを とら( )ください。",
        "options": [
          "1. ないで",
          "2. なくて",
          "3. ませんで",
          "4. な\nいと"
        ],
        "correct": 1,
        "correctText": "ない で",
        "explanation": "(V ないでください  (xin đừng làm))"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "きのうは うちに( )何を しましたか。",
        "options": [
          "1. かえる",
          "2. かえるから",
          "3. かえって",
          "4. かえったり"
        ],
        "correct": 3,
        "correctText": "かえって",
        "explanation": "(Nối hành động tuần tự bằng V て )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "まいにち 電車( )会社へ 行きます。",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( で  chỉ phương tiện đi lại)"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "昨日は どこ( )行きませんでした。",
        "options": [
          "1. へも",
          "2. とも",
          "3. とは",
          "4. へは"
        ],
        "correct": 1,
        "correctText": "へも",
        "explanation": "( どこへも  + Phủ định)"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "「ありがとう」は 英語( )何ですか。",
        "options": [
          "1. で",
          "2. に",
          "3. の",
          "4. を"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( で  chỉ ngôn ngữ sử dụng)"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "日本の 地下鉄は とても( )です。",
        "options": [
          "1. べんり",
          "2. べんりな",
          "3. べんりに",
          "4.\nべんりの"
        ],
        "correct": 1,
        "correctText": "べんり",
        "explanation": "(Tính từ な  đứng trước で す )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. かさですか",
          "2. 新しい",
          "3. これは",
          "4.\nだれの"
        ],
        "correct": 2,
        "correctText": "新しい",
        "explanation": "[3→4→2→1 (これは  だれの  新しい  かさですか。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. あついです",
          "2. 八月が",
          "3. 一年のうち\nで",
          "4. いちばん"
        ],
        "correct": 4,
        "correctText": "いちばん",
        "explanation": "[3→2→4→1 (一年のうちで 八月が  いちばん  あついです。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ___ ___ ★ 英語で 話しました。",
        "options": [
          "1. フランス語",
          "2. ので",
          "3. わからない",
          "4. が"
        ],
        "correct": 2,
        "correctText": "ので",
        "explanation": "[1→4→3→2 (フランス語が  わからないので) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ★ ___ ___ もらいました。",
        "options": [
          "1. に",
          "2. 父",
          "3. 時計",
          "4. を"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "[2→1→3→4 (父に  時計を  もらいました。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "一週間に ___ ★ ___ ___ します。",
        "options": [
          "1. テニス",
          "2. 二回",
          "3. ぐらい",
          "4. を"
        ],
        "correct": 3,
        "correctText": "ぐらい",
        "explanation": "[2→3→1→4 (二回ぐらい  テニスを  します。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. でした",
          "2. です",
          "3. ました",
          "4. あります"
        ],
        "correct": 1,
        "correctText": "でした",
        "explanation": "( きのうは 〜でした  (quá khứ))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. 買い",
          "2. 買う",
          "3. 買って",
          "4. 買った"
        ],
        "correct": 1,
        "correctText": "買い",
        "explanation": "( 買いに  行きました  (đi mua))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. が",
          "2. から",
          "3. ので",
          "4. と"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "( ありました  が、高かったです  (nhưng đắt))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. 買って",
          "2. 買う",
          "3. 買い",
          "4. 買いました"
        ],
        "correct": 1,
        "correctText": "買って",
        "explanation": "(Nối câu bằng V て : 買って、あげました )"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. と",
          "2. を",
          "3. に",
          "4. が"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "(「 ... 」と  言いました  (đã nói rằng))"
      }
    ]
  },
  {
    "index": 5,
    "code": "N5-05",
    "level": "N5",
    "title": "Đề N5-05: Công cụ で  & Cho – Nhận あげます‧もらいます  (Bài 7) — Nguồn: Nihongo NET Part 3",
    "passage": "わたしの へやは 二階【 16 】あります。へやには つくえや いす【 17 】が あります。まいばん わたしは へやで 日本語の ラジオを【 18 】から、ねます。あしたは やすみです【 19 】、友だちが あそびに 来ます。だから、きょう へやを【 20 】 します。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "つかれましたね。すこし 休み( )。",
        "options": [
          "1. ましょう",
          "2. ません",
          "3. ました",
          "4.\nましたか"
        ],
        "correct": 1,
        "correctText": "ましょう",
        "explanation": "(V ましょう  (cùng làm gì nhé))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "きのうの テストは かんたん( )。",
        "options": [
          "1. でした",
          "2. ました",
          "3. かったです",
          "4.\nくなかったです"
        ],
        "correct": 1,
        "correctText": "でした",
        "explanation": "(Quá khứ tính từ な : でした )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "きっぷを 三( )買いました。",
        "options": [
          "1. まい",
          "2. ひき",
          "3. さつ",
          "4. にん"
        ],
        "correct": 1,
        "correctText": "まい",
        "explanation": "( まい  đếm vật mỏng phẳng)"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "今日、友だちが 十( )来ます。",
        "options": [
          "1. にん",
          "2. まい",
          "3. さつ",
          "4. ひき"
        ],
        "correct": 1,
        "correctText": "にん",
        "explanation": "( にん  đếm người)"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "きのう、友だちと「はこね」( )いう ところへ 行き ました。",
        "options": [
          "1. を",
          "2. で",
          "3. と",
          "4. や"
        ],
        "correct": 3,
        "correctText": "と",
        "explanation": "(N1 という  N2 (tên gọi là))"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "すみません、お手洗いは( )ですか。",
        "options": [
          "1. どこ",
          "2. だれ",
          "3. なに",
          "4. いつ"
        ],
        "correct": 1,
        "correctText": "どこ",
        "explanation": "( どこ  hỏi địa điểm)"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "日本人は はし( )ごはんを 食べます。",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( で  chỉ công cụ/dụng cụ)"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "( )ひるごはんを 食べましたか。 ― いいえ、まだで す。",
        "options": [
          "1. もう",
          "2. まだ",
          "3. すぐ",
          "4. よく"
        ],
        "correct": 1,
        "correctText": "もう",
        "explanation": "( もう  V ましたか  (đã... chưa?))"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "( )荷物は 子供たちに 頼みます。",
        "options": [
          "1. おもくない",
          "2. おもいない",
          "3. おもく\nてない",
          "4. おもいのない"
        ],
        "correct": 1,
        "correctText": "おもくない",
        "explanation": "(Tính từ い  phủ định + Danh từ)"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは かんじが ぜんぜん( )。",
        "options": [
          "1. わかりません",
          "2. わかります",
          "3. わか\nって",
          "4. わかりました"
        ],
        "correct": 1,
        "correctText": "わかりません",
        "explanation": "( ぜんぜん  + Phủ định)"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "きのう ___ ___ ★ ___ か。",
        "options": [
          "1. 買いに",
          "2. 日本語の",
          "3. 行きました",
          "4. じしょを"
        ],
        "correct": 1,
        "correctText": "買いに",
        "explanation": "[2→4→1→3 (日本語の  じしょを  買いに  行きましたか。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "らいねん、___ ___ ___ ★ です。",
        "options": [
          "1. 日本語",
          "2. 勉強する",
          "3. を",
          "4. つも\nり"
        ],
        "correct": 4,
        "correctText": "つもり",
        "explanation": "[1→3→2→4 (日本語を  勉強する  つもりです。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "テーブルの ___ ___ ★ ___ あります。",
        "options": [
          "1. が",
          "2. 上に",
          "3. みかん",
          "4. りんごや"
        ],
        "correct": 3,
        "correctText": "みかん",
        "explanation": "[2→4→3→1 (上に  りんごや  みかんが  あります。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この ___ ___ ★ ___ いいですか。",
        "options": [
          "1. すわっても",
          "2. に",
          "3. いす",
          "4. どうぞ"
        ],
        "correct": 1,
        "correctText": "すわっても",
        "explanation": "[4→3→2→1 (この  いすに  すわっても いいですか。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "やすみの 日は ___ ★ ___ ___ します。",
        "options": [
          "1. たり",
          "2. テニスを",
          "3. さんぽを",
          "4.\nし"
        ],
        "correct": 4,
        "correctText": "し",
        "explanation": "[2→4→1→3 (テニスを  したり  さんぽを) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. に",
          "2. で",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "( 二階に  あります  (ở tầng 2))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. など",
          "2. しか",
          "3. だけ",
          "4. ごろ"
        ],
        "correct": 1,
        "correctText": "な ど",
        "explanation": "( つくえや  いすなど  (bàn, ghế v.v...))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. きいて",
          "2. きく",
          "3. きいた",
          "4. きき"
        ],
        "correct": 1,
        "correctText": "きいて",
        "explanation": "( きいてから、ねます  (nghe xong rồi ngủ))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. から",
          "2. でも",
          "3. ごろ",
          "4. だけ"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( やすみで すから  (vì mai là ngày nghỉ))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. そうじ",
          "2. せんたく",
          "3. りょうり",
          "4. さんぽ"
        ],
        "correct": 1,
        "correctText": "そうじ",
        "explanation": "( へやを  そうじします  (dọn phòng))"
      }
    ]
  },
  {
    "index": 6,
    "code": "N5-06",
    "level": "N5",
    "title": "Đề N5-06: Tính từ đuôi い  và Tính từ đuôi な  (Bài 8) — Nguồn: Nihongo Quiz N5",
    "passage": "たなかさんは まいにち 六時はんに おきます。おきて【 16 】、かおを あらいます。それから、くるま【 17 】会社へ 行きま す。うちから 会社まで【 18 】三十分 かかります。会社は おおきいです。【 19 】、しごとは あまり おおくないです。よる は テレビを 見るのが【 20 】です。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "駅から 学校まで( )かかりますか。",
        "options": [
          "1. どのくらい",
          "2. どちら",
          "3. いくつ",
          "4.\nいつ"
        ],
        "correct": 1,
        "correctText": "どのくらい",
        "explanation": "( どのくらい  hỏi khoảng thời gian)"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "やさいより くだものの( )が 好きです。",
        "options": [
          "1. ほう",
          "2. どちら",
          "3. より",
          "4. ほど"
        ],
        "correct": 1,
        "correctText": "ほう",
        "explanation": "(A より B のほうが  (so sánh hơn))"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "今、雨が ふって( )。",
        "options": [
          "1. います",
          "2. あります",
          "3. ください",
          "4.\nでした"
        ],
        "correct": 1,
        "correctText": "います",
        "explanation": "(V ています  (đang diễn ra))"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "日本に( )まえに、国で 日本語を 勉強しました。",
        "options": [
          "1. き",
          "2. くる",
          "3. きて",
          "4. きた"
        ],
        "correct": 2,
        "correctText": "くる",
        "explanation": "(V る  + まえに  (trước khi))"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "きのうの 晩、十時( )勉強しました。",
        "options": [
          "1. まで",
          "2. から",
          "3. を",
          "4. が"
        ],
        "correct": 1,
        "correctText": "まで",
        "explanation": "( まで  chỉ mốc kết thúc)"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "私は 先生( )いろいろ 習いました。",
        "options": [
          "1. から",
          "2. しか",
          "3. ので",
          "4. のが"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "(Học/nhận từ ai dùng から / に )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "ここは 昔は しずかでした( )、今は にぎやかです。",
        "options": [
          "1. が",
          "2. から",
          "3. ので",
          "4. と"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "( が  nối 2 mệnh đề tương phản)"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "私は スポーツ( )好きです。",
        "options": [
          "1. が",
          "2. を",
          "3. で",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "(N が  好きです )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "( )あしたの パーティーに 出ませんか。",
        "options": [
          "1. どうして",
          "2. どうやって",
          "3. どんな",
          "4. どのくらい"
        ],
        "correct": 1,
        "correctText": "どうして",
        "explanation": "( どうして  hỏi lý do)"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "昨日の 天気は とても( )。",
        "options": [
          "1. よかったです",
          "2. いいでした",
          "3. いか\nったです",
          "4. よいでした"
        ],
        "correct": 1,
        "correctText": "よかったです",
        "explanation": "(Quá khứ của いい  là よかったです )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ★ ___ ___ もらいました。",
        "options": [
          "1. に",
          "2. 父",
          "3. 時計",
          "4. を"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "[2→1→3→4 (父に  時計を  もらいました。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "一週間に ___ ★ ___ ___ します。",
        "options": [
          "1. テニス",
          "2. 二回",
          "3. ぐらい",
          "4. を"
        ],
        "correct": 3,
        "correctText": "ぐらい",
        "explanation": "[2→3→1→4 (二回ぐらい  テニスを  します。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "あぶないですから、___ ___ ★ ___ ください。",
        "options": [
          "1. はいら",
          "2. ここ",
          "3. ないで",
          "4. に"
        ],
        "correct": 1,
        "correctText": "は いら",
        "explanation": "[2→4→1→3 (ここに  はいらないで  ください。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "田中さんは ___ ___ ★ ___ と 思います。",
        "options": [
          "1. 来ない",
          "2. きょうは",
          "3. もう",
          "4. た\nぶん"
        ],
        "correct": 3,
        "correctText": "もう",
        "explanation": "[2→4→3→1 (きょうは  たぶん  もう  来ない) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "日本へ ___ ★ ___ ___ 買いました。",
        "options": [
          "1. とき",
          "2. 来る",
          "3. かばんを",
          "4. この"
        ],
        "correct": 1,
        "correctText": "とき",
        "explanation": "[2→1→4→3 (日本へ  来る  とき  この  かばんを) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. から",
          "2. まで",
          "3. に",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( おきてから  (sau khi thức dậy))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( く るまで  (bằng ô tô))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. だいたい",
          "2. ぜんぜん",
          "3. あまり",
          "4. とても"
        ],
        "correct": 1,
        "correctText": "だいたい",
        "explanation": "( だいたい  三十分  (khoảng 30 phút))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. でも",
          "2. それでは",
          "3. それから",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "でも",
        "explanation": "( でも  (tuy nhiên))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. すき",
          "2. たかい",
          "3. やすい",
          "4. ながい"
        ],
        "correct": 1,
        "correctText": "すき",
        "explanation": "( 見るのが  すきです  (thích xem))"
      }
    ]
  },
  {
    "index": 7,
    "code": "N5-07",
    "level": "N5",
    "title": "Đề N5-07: Sở thích 好き‧上手 , Nguyên nhân から  & Phó từ mức độ (Bài 9) — Nguồn: Nihongo NET Part",
    "passage": "にちようびに、キムさんは あたらしい くつが ほしかった【 16 】、デパートへ 行きました。あかい くつ【 17 】しろい く つの ほうが すきでした。みせの 人が「【 18 】くつが いいですか」と ききました。キムさんは しろい くつを えらびまし た。その 人は「すこし【 19 】ください」と 言いました。うちへ かえる【 20 】、コーヒーを のみました。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "ここで しゃしんを とら( )ください。",
        "options": [
          "1. ないで",
          "2. なくて",
          "3. ませんで",
          "4. な\nいと"
        ],
        "correct": 1,
        "correctText": "ないで",
        "explanation": "(V ないでください  (xin đừng làm))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "きのうは うちに( )何を しましたか。",
        "options": [
          "1. かえる",
          "2. かえるから",
          "3. かえって",
          "4. かえったり"
        ],
        "correct": 3,
        "correctText": "かえって",
        "explanation": "(Nối hành động tuần tự bằng V て )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "まいにち 電車( )会社へ 行きます。",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( で  chỉ phương tiện đi lại)"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "昨日は どこ( )行きませんでした。",
        "options": [
          "1. へも",
          "2. とも",
          "3. とは",
          "4. へは"
        ],
        "correct": 1,
        "correctText": "へも",
        "explanation": "( どこへも  + Phủ định)"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "「ありがとう」は 英語( )何ですか。",
        "options": [
          "1. で",
          "2. に",
          "3. の",
          "4. を"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( で  chỉ ngôn ngữ sử dụng)"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "日本の 地下鉄は とても( )です。",
        "options": [
          "1. べんり",
          "2. べんりな",
          "3. べんりに",
          "4.\nべんりの"
        ],
        "correct": 1,
        "correctText": "べんり",
        "explanation": "(Tính từ な  đứng trước です )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "テレビは 見ますが、新聞は あまり( )。",
        "options": [
          "1. 見ません",
          "2. みりません",
          "3. みたない",
          "4. みるじゃない"
        ],
        "correct": 1,
        "correctText": "見ません",
        "explanation": "( あまり  + Phủ định)"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは ももや りんご( )を 食べます。",
        "options": [
          "1. など",
          "2. だけ",
          "3. しか",
          "4. ごろ"
        ],
        "correct": 1,
        "correctText": "など",
        "explanation": "(A や  B な ど  (v.v...))"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "私は カメラ( )ほしいです。",
        "options": [
          "1. が",
          "2. を",
          "3. に",
          "4. で"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "(N が  ほしいです )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "あついので、まどを( )ください。",
        "options": [
          "1. あけて",
          "2. かけて",
          "3. つけて",
          "4. し\nめて"
        ],
        "correct": 1,
        "correctText": "あけて",
        "explanation": "( まどをあけてください  (hãy mở cửa sổ))"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この ___ ___ ★ ___ いいですか。",
        "options": [
          "1. すわっても",
          "2. に",
          "3. いす",
          "4. どうぞ"
        ],
        "correct": 1,
        "correctText": "すわっても",
        "explanation": "[4→3→2→1 (この  いすに  すわっても  いいですか。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "やすみの 日は ___ ★ ___ ___ します。",
        "options": [
          "1. たり",
          "2. テニスを",
          "3. さんぽを",
          "4.\nし"
        ],
        "correct": 4,
        "correctText": "し",
        "explanation": "[2→4→1→3 (テニスを  したり  さんぽを) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "母が ___ ___ ★ ___ おいしいです。",
        "options": [
          "1. りょうり",
          "2. 作った",
          "3. とても",
          "4. は"
        ],
        "correct": 4,
        "correctText": "は",
        "explanation": "[2→1→4→3 (母が  作った  りょうりは  とても) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "お金が ___ ★ ___ ___ たいです。",
        "options": [
          "1. たら",
          "2. あっ",
          "3. 旅行し",
          "4. 外国へ"
        ],
        "correct": 1,
        "correctText": "たら",
        "explanation": "[2→1→4→3 (お金が  あったら  外国へ  旅行したい) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "すみません、___ ___ ★ ___。",
        "options": [
          "1. ください",
          "2. その",
          "3. 見せて",
          "4. ほ\nんを"
        ],
        "correct": 3,
        "correctText": "見せて",
        "explanation": "[2→4→3→1 (その  ほんを  見せて  ください。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. から",
          "2. まで",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( ほしかったから  (vì muốn có))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. より",
          "2. から",
          "3. まで",
          "4. とか"
        ],
        "correct": 1,
        "correctText": "より",
        "explanation": "(A より  B のほうが  (so sánh hơn))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. どんな",
          "2. どこ",
          "3. だれ",
          "4. いつ"
        ],
        "correct": 1,
        "correctText": "どんな",
        "explanation": "( どんな  くつ  (giày như thế nào))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. まって",
          "2. たべて",
          "3. のんで",
          "4. かって"
        ],
        "correct": 1,
        "correctText": "まって",
        "explanation": "( すこし  まってください (xin đợi một chút))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. まえに",
          "2. あとで",
          "3. ときで",
          "4. なかで"
        ],
        "correct": 1,
        "correctText": "まえに",
        "explanation": "( かえる  まえに  (trước khi về))"
      }
    ]
  },
  {
    "index": 8,
    "code": "N5-08",
    "level": "N5",
    "title": "Đề N5-08: Tồn tại あります‧います , Vị trí & Liệt kê や‧など  (Bài 10) — Nguồn: JLPT Official N5-",
    "passage": "わたしは 月曜日から 金曜日まで 学校へ 行きます。バスで 二十分【 16 】。ごごは としょかんへ 行きます。としょかんは とても【 17 】から、べんきょうが よく できます。土曜日と 日曜日は うち【 18 】テレビを 見ます。らいしゅうは しけん が【 19 】。だから、あしたから まいばん べんきょう【 20 】。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "きのう、友だちと「はこね」( )いう ところへ 行き ました。",
        "options": [
          "1. を",
          "2. で",
          "3. と",
          "4. や"
        ],
        "correct": 3,
        "correctText": "と",
        "explanation": "(N1 という  N2 (tên gọi là))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "すみません、お手洗いは( )ですか。",
        "options": [
          "1. どこ",
          "2. だれ",
          "3. なに",
          "4. いつ"
        ],
        "correct": 1,
        "correctText": "どこ",
        "explanation": "( どこ  hỏi địa điểm)"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "日本人は はし( )ごはんを 食べます。",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( で  chỉ công cụ/dụng cụ)"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "( )ひるごはんを 食べましたか。 ― いいえ、まだで す。",
        "options": [
          "1. もう",
          "2. まだ",
          "3. すぐ",
          "4. よく"
        ],
        "correct": 1,
        "correctText": "もう",
        "explanation": "( もう  V ましたか  (đã... chưa?))"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "( )荷物は 子供たちに 頼みます。",
        "options": [
          "1. おもくない",
          "2. おもいない",
          "3. おもく\nてない",
          "4. おもいのない"
        ],
        "correct": 1,
        "correctText": "おもくない",
        "explanation": "(Tính từ い  phủ định + Danh từ)"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは かんじが ぜんぜん( )。",
        "options": [
          "1. わかりません",
          "2. わかります",
          "3. わか\nって",
          "4. わかりました"
        ],
        "correct": 1,
        "correctText": "わかりません",
        "explanation": "( ぜんぜん  + Phủ định)"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "部屋の 中に だれ( )いません。",
        "options": [
          "1. も",
          "2. が",
          "3. は",
          "4. か"
        ],
        "correct": 1,
        "correctText": "も",
        "explanation": "( だれも  いません  (không có ai))"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "あした わたしは 買い物( )行きます。",
        "options": [
          "1. に",
          "2. が",
          "3. を",
          "4. で"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "(Danh động từ + に  行きます )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "荷物が おもいですから、すこし( )ましょうか。",
        "options": [
          "1. もち",
          "2. もつ",
          "3. もって",
          "4. もった"
        ],
        "correct": 1,
        "correctText": "もち",
        "explanation": "(V ましょうか  (tôi làm giúp nhé))"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは デパートに( )います。",
        "options": [
          "1. つとめて",
          "2. かいものして",
          "3. さんぽ\nして",
          "4. やすんで"
        ],
        "correct": 1,
        "correctText": "つとめて",
        "explanation": "( つとめています  (đang làm việc tại))"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "田中さんは ___ ___ ★ ___ と 思います。",
        "options": [
          "1. 来ない",
          "2. きょうは",
          "3. もう",
          "4. た\nぶん"
        ],
        "correct": 3,
        "correctText": "もう",
        "explanation": "[2→4→3→1 (きょうは  たぶん  もう  来ない) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "日本へ ___ ★ ___ ___ 買いました。",
        "options": [
          "1. とき",
          "2. 来る",
          "3. かばんを",
          "4. この"
        ],
        "correct": 1,
        "correctText": "とき",
        "explanation": "[2→1→4→3 (日本へ  来る  とき  この  かばんを) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ か。",
        "options": [
          "1. です",
          "2. あなたは",
          "3. 好き",
          "4. 何が"
        ],
        "correct": 3,
        "correctText": "好き",
        "explanation": "[2→4→3→1 (あなたは  何が  好き  ですか。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ★ ___ ___。",
        "options": [
          "1. では",
          "2. 今日は",
          "3. ありません",
          "4.\n火曜日"
        ],
        "correct": 4,
        "correctText": "火曜日",
        "explanation": "[2→4→1→3 (今日は  火曜日  では  ありませ ん。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. 買いたいです",
          "2. くつが",
          "3. 私は",
          "4.\n新しい"
        ],
        "correct": 2,
        "correctText": "くつが",
        "explanation": "[3→4→2→1 (私は  新しい  くつが  買いたいです。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. かかります",
          "2. かかりました",
          "3. かかって",
          "4. かかる"
        ],
        "correct": 1,
        "correctText": "かかります",
        "explanation": "(Thói quen hiện tại: かかり ます )"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. しずかです",
          "2. しずかい",
          "3. しずかな",
          "4. しずかに"
        ],
        "correct": 1,
        "correctText": "しずかです",
        "explanation": "( しずかですから  (vì yên tĩnh))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( うちで  テレビを見ます  (xem ở nhà))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. あります",
          "2. います",
          "3. します",
          "4. きます"
        ],
        "correct": 1,
        "correctText": "あります",
        "explanation": "( しけんが  あります  (có kỳ thi))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. します",
          "2. しました",
          "3. しませんでした",
          "4. していました"
        ],
        "correct": 1,
        "correctText": "します",
        "explanation": "( あしたから  べんきょうします )"
      }
    ]
  },
  {
    "index": 9,
    "code": "N5-09",
    "level": "N5",
    "title": "Đề N5-09: Lượng từ đếm まい‧にん‧さつ‧ひき  & Khoảng thời gian (Bài 11) — Nguồn: Nihongo Quiz",
    "passage": "きのうは 母の たんじょうび【 16 】。わたしは デパートへ プレゼントを【 17 】に 行きました。きれいな かばんが ありま した【 18 】、とても 高かったです。だから、あかい はなを【 19 】、母に あげました。母は「ありがとう」【 20 】言いま した。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "きのうの 晩、十時( )勉強しました。",
        "options": [
          "1. まで",
          "2. から",
          "3. を",
          "4. が"
        ],
        "correct": 1,
        "correctText": "まで",
        "explanation": "( まで  chỉ mốc kết thúc)"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "私は 先生( )いろいろ 習いました。",
        "options": [
          "1. から",
          "2. しか",
          "3. ので",
          "4. のが"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "(Học/nhận từ ai dùng か ら / に )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "ここは 昔は しずかでした( )、今は にぎやかです。",
        "options": [
          "1. が",
          "2. から",
          "3. ので",
          "4. と"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "( が  nối 2 mệnh đề tương phản)"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "私は スポーツ( )好きです。",
        "options": [
          "1. が",
          "2. を",
          "3. で",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "(N が  好きです )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "( )あしたの パーティーに 出ませんか。",
        "options": [
          "1. どうして",
          "2. どうやって",
          "3. どんな",
          "4. どのくらい"
        ],
        "correct": 1,
        "correctText": "どうして",
        "explanation": "( どうして  hỏi lý do)"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "昨日の 天気は とても( )。",
        "options": [
          "1. よかったです",
          "2. いいでした",
          "3. いか\nったです",
          "4. よいでした"
        ],
        "correct": 1,
        "correctText": "よか ったです",
        "explanation": "(Quá khứ của いい  là よかったです )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "おなかが すきましたね。( )食べましょう。",
        "options": [
          "1. なにか",
          "2. なにも",
          "3. どこか",
          "4. だ\nれか"
        ],
        "correct": 1,
        "correctText": "なにか",
        "explanation": "( なにか  (cái gì đó))"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "ここに くるまを とめ( )いけません。",
        "options": [
          "1. ては",
          "2. ても",
          "3. たり",
          "4. から"
        ],
        "correct": 1,
        "correctText": "ては",
        "explanation": "(V てはいけません  (cấm đoán))"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "田中さんの 電話番号を( )か。 ― いいえ、知りませ ん。",
        "options": [
          "1. 知っています",
          "2. 知ります",
          "3. 知りま\nした",
          "4. 知ってあります"
        ],
        "correct": 1,
        "correctText": "知っています",
        "explanation": "( 知っていますか  (có biết không))"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "仕事が( )から、のみに 行きませんか。",
        "options": [
          "1. おわって",
          "2. おわる",
          "3. おわった",
          "4.\nおわり"
        ],
        "correct": 1,
        "correctText": "おわって",
        "explanation": "(V てから  (sau khi làm V))"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "お金が ___ ★ ___ ___ たいです。",
        "options": [
          "1. たら",
          "2. あっ",
          "3. 旅行し",
          "4. 外国へ"
        ],
        "correct": 1,
        "correctText": "たら",
        "explanation": "[2→1→4→3 (お金が  あったら  外国へ  旅行したい) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "すみません、___ ___ ★ ___。",
        "options": [
          "1. ください",
          "2. その",
          "3. 見せて",
          "4. ほ\nんを"
        ],
        "correct": 3,
        "correctText": "見せて",
        "explanation": "[2→4→3→1 (その  ほんを  見せて  ください。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "A 「___ ___ ___ ★ か。」 B 「リンさんのです。」",
        "options": [
          "1. かさ",
          "2. です",
          "3. これは",
          "4. だれの"
        ],
        "correct": 2,
        "correctText": "です",
        "explanation": "[3→4→1→2 (これは  だれの  かさ  ですか。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ___ ★ 。",
        "options": [
          "1. 三時までです",
          "2. 今日の",
          "3. 九時か\nら",
          "4. テストは"
        ],
        "correct": 1,
        "correctText": "三時までです",
        "explanation": "[2→4→3→1 (今日の  テストは  九時 から  三時までです。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. しずかです",
          "2. ひろくて",
          "3. この",
          "4.\nへやは"
        ],
        "correct": 2,
        "correctText": "ひろくて",
        "explanation": "[3→4→2→1 (この  へやは  ひろくて  しずかです。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. でした",
          "2. です",
          "3. ました",
          "4. あります"
        ],
        "correct": 1,
        "correctText": "でした",
        "explanation": "( きのうは  〜 でした  (quá khứ))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. 買い",
          "2. 買う",
          "3. 買って",
          "4. 買った"
        ],
        "correct": 1,
        "correctText": "買い",
        "explanation": "( 買いに  行きました  (đi mua))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. が",
          "2. から",
          "3. ので",
          "4. と"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "( ありました  が、高かったです  (nhưng đắt))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. 買って",
          "2. 買う",
          "3. 買い",
          "4. 買いました"
        ],
        "correct": 1,
        "correctText": "買って",
        "explanation": "(Nối câu bằng V て : 買って、あげました )"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. と",
          "2. を",
          "3. に",
          "4. が"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "(「 ... 」と  言いました  (đã nói rằng))"
      }
    ]
  },
  {
    "index": 10,
    "code": "N5-10",
    "level": "N5",
    "title": "Đề N5-10: Quá khứ Tính từ & So sánh より‧ほうが‧いちばん  (Bài 12) — Nguồn: Nihongo NET Part 5",
    "passage": "わたしの へやは 二階【 16 】あります。へやには つくえや いす【 17 】が あります。まいばん わたしは へやで 日本語の ラジオを【 18 】から、ねます。あしたは やすみです【 19 】、友だちが あそびに 来ます。だから、きょう へやを【 20 】 します。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "「ありがとう」は 英語( )何ですか。",
        "options": [
          "1. で",
          "2. に",
          "3. の",
          "4. を"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( で  chỉ ngôn ngữ sử dụng)"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "日本の 地下鉄は とても( )です。",
        "options": [
          "1. べんり",
          "2. べんりな",
          "3. べんりに",
          "4.\nべんりの"
        ],
        "correct": 1,
        "correctText": "べんり",
        "explanation": "(Tính từ な  đứng trước です )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "テレビは 見ますが、新聞は あまり( )。",
        "options": [
          "1. 見ません",
          "2. みりません",
          "3. みたない",
          "4. みるじゃない"
        ],
        "correct": 1,
        "correctText": "見ません",
        "explanation": "( あまり  + Phủ định)"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは ももや りんご( )を 食べます。",
        "options": [
          "1. など",
          "2. だけ",
          "3. しか",
          "4. ごろ"
        ],
        "correct": 1,
        "correctText": "など",
        "explanation": "(A や  B など  (v.v...))"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "私は カメラ( )ほしいです。",
        "options": [
          "1. が",
          "2. を",
          "3. に",
          "4. で"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "(N が  ほしいです )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "あついので、まどを( )ください。",
        "options": [
          "1. あけて",
          "2. かけて",
          "3. つけて",
          "4. し\nめて"
        ],
        "correct": 1,
        "correctText": "あけて",
        "explanation": "( まどをあけてください  (hãy mở cửa sổ))"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "この カタログを もらっ( )いいですか。",
        "options": [
          "1. ても",
          "2. ては",
          "3. たり",
          "4. てもち"
        ],
        "correct": 1,
        "correctText": "ても",
        "explanation": "(V てもいいですか  (xin phép))"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "ミラーさんは せが( )、ハンサムです。",
        "options": [
          "1. たかくて",
          "2. たかいと",
          "3. たかいで",
          "4. たかかった"
        ],
        "correct": 1,
        "correctText": "たかくて",
        "explanation": "(Nối tính từ い  bằng 〜くて )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "この テストは じしょを( )ください。",
        "options": [
          "1. つかわないで",
          "2. つかわない",
          "3. つか\nわなくて",
          "4. つかいなく"
        ],
        "correct": 1,
        "correctText": "つかわないで",
        "explanation": "(V ないでください )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "日本人は しょくじの( )、「いただきます」と いいま す。",
        "options": [
          "1. まえに",
          "2. いぜん",
          "3. あと",
          "4. むか\nし"
        ],
        "correct": 1,
        "correctText": "まえに",
        "explanation": "(N のまえに  (trước bữa ăn))"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ★ ___ ___。",
        "options": [
          "1. では",
          "2. 今日は",
          "3. ありません",
          "4.\n火曜日"
        ],
        "correct": 4,
        "correctText": "火曜日",
        "explanation": "[2→4→1→3 (今日は  火曜日  では  ありません。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. 買いたいです",
          "2. くつが",
          "3. 私は",
          "4.\n新しい"
        ],
        "correct": 2,
        "correctText": "くつが",
        "explanation": "[3→4→2→1 (私は  新しい  くつが  買いたいです。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは やさいより、___ ★ ___ ___。",
        "options": [
          "1. ほうが",
          "2. くだものの",
          "3. 好き",
          "4.\nです"
        ],
        "correct": 1,
        "correctText": "ほう が",
        "explanation": "[2→1→3→4 (くだものの  ほうが  好きです。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "としょかんで ___ ___ ★ ___。",
        "options": [
          "1. かりて",
          "2. うちで",
          "3. ほんを",
          "4. 読\nみます"
        ],
        "correct": 2,
        "correctText": "うちで",
        "explanation": "[3→1→2→4 (ほんを  かりて  うちで  読みます。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "私は ___ ★ ___ ___。",
        "options": [
          "1. 学校へ",
          "2. 行く",
          "3. まえに",
          "4. シャ\nワーをあびます"
        ],
        "correct": 2,
        "correctText": "行く",
        "explanation": "[1→2→3→4 (学校へ  行く  まえに  シャワーをあびます。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. に",
          "2. で",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "( 二階に  あります  (ở tầng 2))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. など",
          "2. しか",
          "3. だけ",
          "4. ごろ"
        ],
        "correct": 1,
        "correctText": "な ど",
        "explanation": "( つくえや  いすなど  (bàn, ghế v.v...))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. きいて",
          "2. きく",
          "3. きいた",
          "4. きき"
        ],
        "correct": 1,
        "correctText": "きいて",
        "explanation": "( きいてから、ねます  (nghe xong rồi ngủ))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. から",
          "2. でも",
          "3. ごろ",
          "4. だけ"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( やすみで すから  (vì mai là ngày nghỉ))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. そうじ",
          "2. せんたく",
          "3. りょうり",
          "4. さんぽ"
        ],
        "correct": 1,
        "correctText": "そうじ",
        "explanation": "( へやを  そうじします  (dọn phòng))"
      }
    ]
  },
  {
    "index": 11,
    "code": "N5-11",
    "level": "N5",
    "title": "Đề N5-11: Mong muốn ほしい‧たいです  & Mục đích に行きます  (Bài 13) — Nguồn: JLPT Official N5-",
    "passage": "たなかさんは まいにち 六時はんに おきます。おきて【 16 】、かおを あらいます。それから、くるま【 17 】会社へ 行きま す。うちから 会社まで【 18 】三十分 かかります。会社は おおきいです。【 19 】、しごとは あまり おおくないです。よる は テレビを 見るのが【 20 】です。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "( )荷物は 子供たちに 頼みます。",
        "options": [
          "1. おもくない",
          "2. おもいない",
          "3. おもく\nてない",
          "4. おもいのない"
        ],
        "correct": 1,
        "correctText": "おもくない",
        "explanation": "(Tính từ い  phủ định + Danh từ)"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは かんじが ぜんぜん( )。",
        "options": [
          "1. わかりません",
          "2. わかります",
          "3. わか\nって",
          "4. わかりました"
        ],
        "correct": 1,
        "correctText": "わかりません",
        "explanation": "( ぜんぜん  + Phủ định)"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "部屋の 中に だれ( )いません。",
        "options": [
          "1. も",
          "2. が",
          "3. は",
          "4. か"
        ],
        "correct": 1,
        "correctText": "も",
        "explanation": "( だれも  いません  (không có ai))"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "あした わたしは 買い物( )行きます。",
        "options": [
          "1. に",
          "2. が",
          "3. を",
          "4. で"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "(Danh động từ + に  行きます )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "荷物が おもいですから、すこし( )ましょうか。",
        "options": [
          "1. もち",
          "2. もつ",
          "3. もって",
          "4. もった"
        ],
        "correct": 1,
        "correctText": "もち",
        "explanation": "(V ま しょうか  (tôi làm giúp nhé))"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは デパートに( )います。",
        "options": [
          "1. つとめて",
          "2. かいものして",
          "3. さんぽ\nして",
          "4. やすんで"
        ],
        "correct": 1,
        "correctText": "つとめて",
        "explanation": "( つとめています  (đang làm việc tại))"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "マリアさんは きれい( )、しんせつな 人です。",
        "options": [
          "1. で",
          "2. くて",
          "3. に",
          "4. な"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "(Nối tính từ な  bằng で )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは 土曜日ですから、会社へ 行か( )いいで す。",
        "options": [
          "1. なくても",
          "2. ないでも",
          "3. なければ",
          "4. ないでは"
        ],
        "correct": 1,
        "correctText": "なくても",
        "explanation": "(V なくてもいいです  (không cần làm))"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは ピアノを( )ことが できます。",
        "options": [
          "1. ひく",
          "2. ひいて",
          "3. ひき",
          "4. ひいた"
        ],
        "correct": 1,
        "correctText": "ひく",
        "explanation": "(V ることができます  (có thể))"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "日曜日は かいものし( )、うちで 勉強し( )し ます。",
        "options": [
          "1. たり∕たり",
          "2. て∕て",
          "3. ながら∕\nながら",
          "4. ても∕ても"
        ],
        "correct": 1,
        "correctText": "たり∕たり",
        "explanation": "(V たり V たりします )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ___ ★ 。",
        "options": [
          "1. 三時までです",
          "2. 今日の",
          "3. 九時か\nら",
          "4. テストは"
        ],
        "correct": 1,
        "correctText": "三時までです",
        "explanation": "[2→4→3→1 (今日の  テストは  九時から  三時までです。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. しずかです",
          "2. ひろくて",
          "3. この",
          "4.\nへやは"
        ],
        "correct": 2,
        "correctText": "ひろくて",
        "explanation": "[3→4→2→1 (この  へやは  ひろくて  しずかです。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. かさですか",
          "2. 新しい",
          "3. これは",
          "4.\nだれの"
        ],
        "correct": 2,
        "correctText": "新しい",
        "explanation": "[3→4→2→1 (これは  だれの  新しい  かさですか。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. あついです",
          "2. 八月が",
          "3. 一年のうち\nで",
          "4. いちばん"
        ],
        "correct": 4,
        "correctText": "いちばん",
        "explanation": "[3→2→4→1 (一年のうちで  八月が  いちばん  あついです。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ___ ___ ★ 英語で 話しました。",
        "options": [
          "1. フランス語",
          "2. ので",
          "3. わからない",
          "4. が"
        ],
        "correct": 2,
        "correctText": "ので",
        "explanation": "[1→4→3→2 (フランス語 が  わからないので) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. から",
          "2. まで",
          "3. に",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( おきてから  (sau khi thức dậy))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( くるまで  (bằng ô tô))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. だいたい",
          "2. ぜんぜん",
          "3. あまり",
          "4. とても"
        ],
        "correct": 1,
        "correctText": "だいたい",
        "explanation": "( だ いたい  三十分  (khoảng 30 phút))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. でも",
          "2. それでは",
          "3. それから",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "でも",
        "explanation": "( でも  (tuy nhiên))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. すき",
          "2. たかい",
          "3. やすい",
          "4. ながい"
        ],
        "correct": 1,
        "correctText": "すき",
        "explanation": "( 見るのが  すきです  (thích xem))"
      }
    ]
  },
  {
    "index": 12,
    "code": "N5-12",
    "level": "N5",
    "title": "Đề N5-12: Chia thể て , Yêu cầu てください  & Tiếp diễn ています  (Bài 14) — Nguồn: GoJapan N5 Đề 8",
    "passage": "にちようびに、キムさんは あたらしい くつが ほしかった【 16 】、デパートへ 行きました。あかい くつ【 17 】しろい く つの ほうが すきでした。みせの 人が「【 18 】くつが いいですか」と ききました。キムさんは しろい くつを えらびまし た。その 人は「すこし【 19 】ください」と 言いました。うちへ かえる【 20 】、コーヒーを のみました。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "( )あしたの パーティーに 出ませんか。",
        "options": [
          "1. どうして",
          "2. どうやって",
          "3. どんな",
          "4. どのくらい"
        ],
        "correct": 1,
        "correctText": "どうして",
        "explanation": "( どうして  hỏi lý do)"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "昨日の 天気は とても( )。",
        "options": [
          "1. よかったです",
          "2. いいでした",
          "3. いか\nったです",
          "4. よいでした"
        ],
        "correct": 1,
        "correctText": "よかったです",
        "explanation": "(Quá khứ của い い  là よかったです )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "おなかが すきましたね。( )食べましょう。",
        "options": [
          "1. なにか",
          "2. なにも",
          "3. どこか",
          "4. だ\nれか"
        ],
        "correct": 1,
        "correctText": "なにか",
        "explanation": "( なにか  (cái gì đó))"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "ここに くるまを とめ( )いけません。",
        "options": [
          "1. ては",
          "2. ても",
          "3. たり",
          "4. から"
        ],
        "correct": 1,
        "correctText": "ては",
        "explanation": "(V てはいけません  (cấm đoán))"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "田中さんの 電話番号を( )か。 ― いいえ、知りませ ん。",
        "options": [
          "1. 知っています",
          "2. 知ります",
          "3. 知りま\nした",
          "4. 知ってあります"
        ],
        "correct": 1,
        "correctText": "知っています",
        "explanation": "( 知 っていますか  (có biết không))"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "仕事が( )から、のみに 行きませんか。",
        "options": [
          "1. おわって",
          "2. おわる",
          "3. おわった",
          "4.\nおわり"
        ],
        "correct": 1,
        "correctText": "おわって",
        "explanation": "(V てから  (sau khi làm V))"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "くすりを( )なければ なりません。",
        "options": [
          "1. のま",
          "2. のみ",
          "3. のむ",
          "4. のんで"
        ],
        "correct": 1,
        "correctText": "のま",
        "explanation": "(V なければなりません  (phải làm))"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "わたしの しゅみは 古い 切手を( )ことです。",
        "options": [
          "1. あつめる",
          "2. あつめて",
          "3. あつめ",
          "4.\nあつめた"
        ],
        "correct": 1,
        "correctText": "あつめる",
        "explanation": "( しゅみは  V ることです )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "だんだん( )なりましたね。",
        "options": [
          "1. あたたかく",
          "2. あたたかい",
          "3. あた\nたかいに",
          "4. あたたかくて"
        ],
        "correct": 1,
        "correctText": "あたたかく",
        "explanation": "(A い ( く ) + なります )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "「きのうの 映画は どうだった?」 ― 「とても( ) よ。」",
        "options": [
          "1. おもしろかった",
          "2. おもしろいだ",
          "3.\nおもしろいだった",
          "4. おもしろく"
        ],
        "correct": 1,
        "correctText": "おもしろかった",
        "explanation": "(Quá khứ thể ngắn của tính từ い )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "としょかんで ___ ___ ★ ___。",
        "options": [
          "1. かりて",
          "2. うちで",
          "3. ほんを",
          "4. 読\nみます"
        ],
        "correct": 2,
        "correctText": "うちで",
        "explanation": "[3→1→2→4 (ほんを  かりて  うちで  読みます。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "私は ___ ★ ___ ___。",
        "options": [
          "1. 学校へ",
          "2. 行く",
          "3. まえに",
          "4. シャ\nワーをあびます"
        ],
        "correct": 2,
        "correctText": "行く",
        "explanation": "[1→2→3→4 (学 校へ  行く  まえに  シャワーをあびます。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "きのう ___ ___ ★ ___ か。",
        "options": [
          "1. 買いに",
          "2. 日本語の",
          "3. 行きました",
          "4. じしょを"
        ],
        "correct": 1,
        "correctText": "買いに",
        "explanation": "[2→4→1→3 (日本語の  じしょを  買いに  行きましたか。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "らいねん、___ ___ ___ ★ です。",
        "options": [
          "1. 日本語",
          "2. 勉強する",
          "3. を",
          "4. つも\nり"
        ],
        "correct": 4,
        "correctText": "つもり",
        "explanation": "[1→3→2→4 (日本語を  勉強する  つもりです。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "テーブルの ___ ___ ★ ___ あります。",
        "options": [
          "1. が",
          "2. 上に",
          "3. みかん",
          "4. りんごや"
        ],
        "correct": 3,
        "correctText": "みかん",
        "explanation": "[2→4→3→1 (上に  りんごや  みかんが あります。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. から",
          "2. まで",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( ほしかったから  (vì muốn có))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. より",
          "2. から",
          "3. まで",
          "4. とか"
        ],
        "correct": 1,
        "correctText": "より",
        "explanation": "(A より  B のほうが  (so sánh hơn))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. どんな",
          "2. どこ",
          "3. だれ",
          "4. いつ"
        ],
        "correct": 1,
        "correctText": "どんな",
        "explanation": "( ど んな  くつ  (giày như thế nào))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. まって",
          "2. たべて",
          "3. のんで",
          "4. かって"
        ],
        "correct": 1,
        "correctText": "まって",
        "explanation": "( すこし  まってください  (xin đợi một chút))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. まえに",
          "2. あとで",
          "3. ときで",
          "4. なかで"
        ],
        "correct": 1,
        "correctText": "まえに",
        "explanation": "( かえる  まえに (trước khi về))"
      }
    ]
  },
  {
    "index": 13,
    "code": "N5-13",
    "level": "N5",
    "title": "Đề N5-13: Xin phép てもいいですか  & Cấm đoán てはいけません  (Bài 15) — Nguồn: Nihongo NET Part 6",
    "passage": "わたしは 月曜日から 金曜日まで 学校へ 行きます。バスで 二十分【 16 】。ごごは としょかんへ 行きます。としょかんは とても【 17 】から、べんきょうが よく できます。土曜日と 日曜日は うち【 18 】テレビを 見ます。らいしゅうは しけん が【 19 】。だから、あしたから まいばん べんきょう【 20 】。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "私は カメラ( )ほしいです。",
        "options": [
          "1. が",
          "2. を",
          "3. に",
          "4. で"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "(N が  ほしいです )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "あついので、まどを( )ください。",
        "options": [
          "1. あけて",
          "2. かけて",
          "3. つけて",
          "4. し\nめて"
        ],
        "correct": 1,
        "correctText": "あけて",
        "explanation": "( まどをあけてください  (hãy mở cửa sổ))"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "この カタログを もらっ( )いいですか。",
        "options": [
          "1. ても",
          "2. ては",
          "3. たり",
          "4. てもち"
        ],
        "correct": 1,
        "correctText": "ても",
        "explanation": "(V てもいいですか  (xin phép))"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "ミラーさんは せが( )、ハンサムです。",
        "options": [
          "1. たかくて",
          "2. たかいと",
          "3. たかいで",
          "4. たかかった"
        ],
        "correct": 1,
        "correctText": "たかくて",
        "explanation": "(Nối tính từ い  bằng 〜くて )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "この テストは じしょを( )ください。",
        "options": [
          "1. つかわないで",
          "2. つかわない",
          "3. つか\nわなくて",
          "4. つかいなく"
        ],
        "correct": 1,
        "correctText": "つかわないで",
        "explanation": "(V な いでください )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "日本人は しょくじの( )、「いただきます」と いいま す。",
        "options": [
          "1. まえに",
          "2. いぜん",
          "3. あと",
          "4. むか\nし"
        ],
        "correct": 1,
        "correctText": "まえに",
        "explanation": "(N のまえに  (trước bữa ăn))"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "おすしを( )ことが ありますか。",
        "options": [
          "1. たべた",
          "2. たべる",
          "3. たべない",
          "4.\nたべなかった"
        ],
        "correct": 1,
        "correctText": "たべた",
        "explanation": "(V たことがありますか  (đã từng))"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "むすこは 来年 医者( )なります。",
        "options": [
          "1. に",
          "2. く",
          "3. で",
          "4. を"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "(N + に なります )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "「今 ひま?」 ― 「ううん、ひま( )。」",
        "options": [
          "1. じゃない",
          "2. くない",
          "3. ではないです",
          "4. なかった"
        ],
        "correct": 1,
        "correctText": "じゃない",
        "explanation": "(Phủ định thể ngắn của tính từ な )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは たぶん 雨が( )と 思います。",
        "options": [
          "1. ふる",
          "2. ふります",
          "3. ふって",
          "4. ふ\nり"
        ],
        "correct": 1,
        "correctText": "ふる",
        "explanation": "(Thể thông thường + と思います )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. あついです",
          "2. 八月が",
          "3. 一年のうち\nで",
          "4. いちばん"
        ],
        "correct": 4,
        "correctText": "い ちばん",
        "explanation": "[3→2→4→1 (一年のうちで  八月が  いちばん  あついです。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ___ ___ ★ 英語で 話しました。",
        "options": [
          "1. フランス語",
          "2. ので",
          "3. わからない",
          "4. が"
        ],
        "correct": 2,
        "correctText": "ので",
        "explanation": "[1→4→3→2 (フランス語が  わからな いので) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ★ ___ ___ もらいました。",
        "options": [
          "1. に",
          "2. 父",
          "3. 時計",
          "4. を"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "[2→1→3→4 (父に  時計を  もらいました。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "一週間に ___ ★ ___ ___ します。",
        "options": [
          "1. テニス",
          "2. 二回",
          "3. ぐらい",
          "4. を"
        ],
        "correct": 3,
        "correctText": "ぐらい",
        "explanation": "[2→3→1→4 (二回ぐらい  テニスを します。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "あぶないですから、___ ___ ★ ___ ください。",
        "options": [
          "1. はいら",
          "2. ここ",
          "3. ないで",
          "4. に"
        ],
        "correct": 1,
        "correctText": "はいら",
        "explanation": "[2→4→1→3 (ここに  はいらないで  ください。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. かかります",
          "2. かかりました",
          "3. かかって",
          "4. かかる"
        ],
        "correct": 1,
        "correctText": "かかります",
        "explanation": "(Thói quen hiện tại: かか ります )"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. しずかです",
          "2. しずかい",
          "3. しずかな",
          "4. しずかに"
        ],
        "correct": 1,
        "correctText": "しずかです",
        "explanation": "( しずかですから  (vì yên tĩnh))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( うちで  テレビを見ます  (xem ở nhà))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. あります",
          "2. います",
          "3. します",
          "4. きます"
        ],
        "correct": 1,
        "correctText": "ありま す",
        "explanation": "( しけんが  あります  (có kỳ thi))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. します",
          "2. しました",
          "3. しませんでした",
          "4. していました"
        ],
        "correct": 1,
        "correctText": "します",
        "explanation": "( あしたから  べんきょうします )"
      }
    ]
  },
  {
    "index": 14,
    "code": "N5-14",
    "level": "N5",
    "title": "Đề N5-14: Nối câu bằng V て‧ A くて‧で  & Trình tự てから  (Bài 16) — Nguồn: Nihongo Quiz N5",
    "passage": "きのうは 母の たんじょうび【 16 】。わたしは デパートへ プレゼントを【 17 】に 行きました。きれいな かばんが ありま した【 18 】、とても 高かったです。だから、あかい はなを【 19 】、母に あげました。母は「ありがとう」【 20 】言いま した。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "荷物が おもいですから、すこし( )ましょうか。",
        "options": [
          "1. もち",
          "2. もつ",
          "3. もって",
          "4. もった"
        ],
        "correct": 1,
        "correctText": "もち",
        "explanation": "(V ましょうか  (tôi làm giúp nhé))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは デパートに( )います。",
        "options": [
          "1. つとめて",
          "2. かいものして",
          "3. さんぽ\nして",
          "4. やすんで"
        ],
        "correct": 1,
        "correctText": "つとめて",
        "explanation": "( つとめてい ます  (đang làm việc tại))"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "マリアさんは きれい( )、しんせつな 人です。",
        "options": [
          "1. で",
          "2. くて",
          "3. に",
          "4. な"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "(Nối tính từ な  bằng で )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは 土曜日ですから、会社へ 行か( )いいで す。",
        "options": [
          "1. なくても",
          "2. ないでも",
          "3. なければ",
          "4. ないでは"
        ],
        "correct": 1,
        "correctText": "なくても",
        "explanation": "(V なくてもいいです  (không cần làm))"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは ピアノを( )ことが できます。",
        "options": [
          "1. ひく",
          "2. ひいて",
          "3. ひき",
          "4. ひいた"
        ],
        "correct": 1,
        "correctText": "ひく",
        "explanation": "(V ることができます  (có thể))"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "日曜日は かいものし( )、うちで 勉強し( )し ます。",
        "options": [
          "1. たり∕たり",
          "2. て∕て",
          "3. ながら∕\nながら",
          "4. ても∕ても"
        ],
        "correct": 1,
        "correctText": "たり∕たり",
        "explanation": "(V たり V たりします )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "「あした パーティーに 行く?」 ― 「ううん、( )。」",
        "options": [
          "1. 行かない",
          "2. 行きません",
          "3. 行かなか\nった",
          "4. 行くよ"
        ],
        "correct": 1,
        "correctText": "行かない",
        "explanation": "(Thể ngắn phủ định 行かな い )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "「辞書を 持っている?」 ― 「ううん、( )。」",
        "options": [
          "1. 持っていない",
          "2. 持たない",
          "3. 持って\nいなかった",
          "4. 持っています"
        ],
        "correct": 1,
        "correctText": "持っていない",
        "explanation": "(Phủ định của 持っている  là 持っていない )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "ミラーさんは「来週 東京へ( )」と 言いました。",
        "options": [
          "1. 行きます",
          "2. 行って",
          "3. 行き",
          "4. 行\nこう"
        ],
        "correct": 1,
        "correctText": "行きます",
        "explanation": "(Trích dẫn trực tiếp trong ngoặc kép)"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "ゆうべ わたしが( )えいがは おもしろかったです。",
        "options": [
          "1. 見た",
          "2. 見ました",
          "3. 見て",
          "4. 見り"
        ],
        "correct": 1,
        "correctText": "見た",
        "explanation": "(Mệnh đề bổ nghĩa cho えいが )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "らいねん、___ ___ ___ ★ です。",
        "options": [
          "1. 日本語",
          "2. 勉強する",
          "3. を",
          "4. つも\nり"
        ],
        "correct": 4,
        "correctText": "つもり",
        "explanation": "[1→3→2→4 (日本語を  勉強する  つもりです。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "テーブルの ___ ___ ★ ___ あります。",
        "options": [
          "1. が",
          "2. 上に",
          "3. みかん",
          "4. りんごや"
        ],
        "correct": 3,
        "correctText": "みかん",
        "explanation": "[2→4→3→1 (上に  りんごや  みかんが  あります。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この ___ ___ ★ ___ いいですか。",
        "options": [
          "1. すわっても",
          "2. に",
          "3. いす",
          "4. どうぞ"
        ],
        "correct": 1,
        "correctText": "すわっても",
        "explanation": "[4→3→2→1 (この  いすに  すわ っても  いいですか。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "やすみの 日は ___ ★ ___ ___ します。",
        "options": [
          "1. たり",
          "2. テニスを",
          "3. さんぽを",
          "4.\nし"
        ],
        "correct": 4,
        "correctText": "し",
        "explanation": "[2→4→1→3 (テニスを  したり  さんぽを) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "母が ___ ___ ★ ___ おいしいです。",
        "options": [
          "1. りょうり",
          "2. 作った",
          "3. とても",
          "4. は"
        ],
        "correct": 4,
        "correctText": "は",
        "explanation": "[2→1→4→3 (母が  作った  り ょうりは  とても) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. でした",
          "2. です",
          "3. ました",
          "4. あります"
        ],
        "correct": 1,
        "correctText": "でした",
        "explanation": "( きのうは  〜でした  (quá khứ))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. 買い",
          "2. 買う",
          "3. 買って",
          "4. 買った"
        ],
        "correct": 1,
        "correctText": "買い",
        "explanation": "( 買いに  行きました  (đi mua))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. が",
          "2. から",
          "3. ので",
          "4. と"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "( あ りました  が、高かったです  (nhưng đắt))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. 買って",
          "2. 買う",
          "3. 買い",
          "4. 買いました"
        ],
        "correct": 1,
        "correctText": "買って",
        "explanation": "(Nối câu bằng V て : 買って、あげました )"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. と",
          "2. を",
          "3. に",
          "4. が"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "(「 ... 」と  言 いました  (đã nói rằng))"
      }
    ]
  },
  {
    "index": 15,
    "code": "N5-15",
    "level": "N5",
    "title": "Đề N5-15: Thể ない , Yêu cầu ないでください  & なければなりません  (Bài 17) — Nguồn: GoJapan N5 Đề 8",
    "passage": "わたしの へやは 二階【 16 】あります。へやには つくえや いす【 17 】が あります。まいばん わたしは へやで 日本語の ラジオを【 18 】から、ねます。あしたは やすみです【 19 】、友だちが あそびに 来ます。だから、きょう へやを【 20 】 します。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "田中さんの 電話番号を( )か。 ― いいえ、知りませ ん。",
        "options": [
          "1. 知っています",
          "2. 知ります",
          "3. 知りま\nした",
          "4. 知ってあります"
        ],
        "correct": 1,
        "correctText": "知っています",
        "explanation": "( 知っていますか  (có biết không))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "仕事が( )から、のみに 行きませんか。",
        "options": [
          "1. おわって",
          "2. おわる",
          "3. おわった",
          "4.\nおわり"
        ],
        "correct": 1,
        "correctText": "おわって",
        "explanation": "(V てから  (sau khi làm V))"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "くすりを( )なければ なりません。",
        "options": [
          "1. のま",
          "2. のみ",
          "3. のむ",
          "4. のんで"
        ],
        "correct": 1,
        "correctText": "のま",
        "explanation": "(V なければなりません  (phải làm))"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "わたしの しゅみは 古い 切手を( )ことです。",
        "options": [
          "1. あつめる",
          "2. あつめて",
          "3. あつめ",
          "4.\nあつめた"
        ],
        "correct": 1,
        "correctText": "あつめる",
        "explanation": "( しゅみは  V ることです )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "だんだん( )なりましたね。",
        "options": [
          "1. あたたかく",
          "2. あたたかい",
          "3. あた\nたかいに",
          "4. あたたかくて"
        ],
        "correct": 1,
        "correctText": "あた たかく",
        "explanation": "(A い ( く ) + なります )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "「きのうの 映画は どうだった?」 ― 「とても( ) よ。」",
        "options": [
          "1. おもしろかった",
          "2. おもしろいだ",
          "3.\nおもしろいだった",
          "4. おもしろく"
        ],
        "correct": 1,
        "correctText": "おもしろかった",
        "explanation": "(Quá khứ thể ngắn của tính từ い )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "それは なんだ( )おもいますか。",
        "options": [
          "1. と",
          "2. を",
          "3. は",
          "4. が"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "(Trợ từ と  trước おもい ます )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは いい 天気( )ね。",
        "options": [
          "1. でしょう",
          "2. ましょう",
          "3. ください",
          "4. ながら"
        ],
        "correct": 1,
        "correctText": "でしょう",
        "explanation": "( 〜でしょうね  (xác nhận/suy đoán))"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "めがねを( )いる 人は 田中先生です。",
        "options": [
          "1. かけて",
          "2. きて",
          "3. はいて",
          "4. かぶ\nって"
        ],
        "correct": 1,
        "correctText": "かけて",
        "explanation": "( めがねをかけている人 )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "ひま( )とき、うちへ あそびに 来て ください。",
        "options": [
          "1. な",
          "2. の",
          "3. だ",
          "4. に"
        ],
        "correct": 1,
        "correctText": "な",
        "explanation": "(Tính từ な  + な  + とき )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "一週間に ___ ★ ___ ___ します。",
        "options": [
          "1. テニス",
          "2. 二回",
          "3. ぐらい",
          "4. を"
        ],
        "correct": 3,
        "correctText": "ぐらい",
        "explanation": "[2→3→1→4 (二回ぐらい  テニスを  します。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "あぶないですから、___ ___ ★ ___ ください。",
        "options": [
          "1. はいら",
          "2. ここ",
          "3. ないで",
          "4. に"
        ],
        "correct": 1,
        "correctText": "はいら",
        "explanation": "[2→4→1→3 (ここに  はいら ないで  ください。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "田中さんは ___ ___ ★ ___ と 思います。",
        "options": [
          "1. 来ない",
          "2. きょうは",
          "3. もう",
          "4. た\nぶん"
        ],
        "correct": 3,
        "correctText": "もう",
        "explanation": "[2→4→3→1 (きょうは  たぶん  もう  来ない) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "日本へ ___ ★ ___ ___ 買いました。",
        "options": [
          "1. とき",
          "2. 来る",
          "3. かばんを",
          "4. この"
        ],
        "correct": 1,
        "correctText": "とき",
        "explanation": "[2→1→4→3 (日本へ  来 る  とき  この  かばんを) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ か。",
        "options": [
          "1. です",
          "2. あなたは",
          "3. 好き",
          "4. 何が"
        ],
        "correct": 3,
        "correctText": "好き",
        "explanation": "[2→4→3→1 (あなたは  何が  好き  ですか。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. に",
          "2. で",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "( 二階に  あります  (ở tầng 2))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. など",
          "2. しか",
          "3. だけ",
          "4. ごろ"
        ],
        "correct": 1,
        "correctText": "など",
        "explanation": "( つくえや  いすなど  (bàn, ghế v.v...))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. きいて",
          "2. きく",
          "3. きいた",
          "4. きき"
        ],
        "correct": 1,
        "correctText": "きいて",
        "explanation": "( きいてから、ねます  (nghe xong rồi ngủ))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. から",
          "2. でも",
          "3. ごろ",
          "4. だけ"
        ],
        "correct": 1,
        "correctText": "か ら",
        "explanation": "( やすみですから  (vì mai là ngày nghỉ))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. そうじ",
          "2. せんたく",
          "3. りょうり",
          "4. さんぽ"
        ],
        "correct": 1,
        "correctText": "そうじ",
        "explanation": "( へやを  そうじします  (dọn phòng))"
      }
    ]
  },
  {
    "index": 16,
    "code": "N5-16",
    "level": "N5",
    "title": "Đề N5-16: Thể từ điển V る , ことができます  & Trước khi まえに  (Bài 18) — Nguồn: Nihongo Quiz N5",
    "passage": "たなかさんは まいにち 六時はんに おきます。おきて【 16 】、かおを あらいます。それから、くるま【 17 】会社へ 行きま す。うちから 会社まで【 18 】三十分 かかります。会社は おおきいです。【 19 】、しごとは あまり おおくないです。よる は テレビを 見るのが【 20 】です。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "この テストは じしょを( )ください。",
        "options": [
          "1. つかわないで",
          "2. つかわない",
          "3. つか\nわなくて",
          "4. つかいなく"
        ],
        "correct": 1,
        "correctText": "つかわないで",
        "explanation": "(V ないでください )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "日本人は しょくじの( )、「いただきます」と いいま す。",
        "options": [
          "1. まえに",
          "2. いぜん",
          "3. あと",
          "4. むか\nし"
        ],
        "correct": 1,
        "correctText": "まえに",
        "explanation": "(N のまえに  (trước bữa ăn))"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "おすしを( )ことが ありますか。",
        "options": [
          "1. たべた",
          "2. たべる",
          "3. たべない",
          "4.\nたべなかった"
        ],
        "correct": 1,
        "correctText": "たべた",
        "explanation": "(V たことがありますか  (đã từng))"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "むすこは 来年 医者( )なります。",
        "options": [
          "1. に",
          "2. く",
          "3. で",
          "4. を"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "(N + に  なります )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "「今 ひま?」 ― 「ううん、ひま( )。」",
        "options": [
          "1. じゃない",
          "2. くない",
          "3. ではないです",
          "4. なかった"
        ],
        "correct": 1,
        "correctText": "じゃない",
        "explanation": "(Phủ định thể ngắn của tính từ な )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは たぶん 雨が( )と 思います。",
        "options": [
          "1. ふる",
          "2. ふります",
          "3. ふって",
          "4. ふ\nり"
        ],
        "correct": 1,
        "correctText": "ふる",
        "explanation": "(Thể thông thường + と思います )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "これは きょねん わたしが( )しゃしんです。",
        "options": [
          "1. とった",
          "2. とりました",
          "3. とって",
          "4.\nとり"
        ],
        "correct": 1,
        "correctText": "とった",
        "explanation": "(Mệnh đề định ngữ dùng thể thông thường)"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 朝ごはんを( )時間が ありません。",
        "options": [
          "1. 食べる",
          "2. 食べます",
          "3. 食べて",
          "4.\n食べ"
        ],
        "correct": 1,
        "correctText": "食べる",
        "explanation": "(V る  + 時間  (thời gian ăn sáng))"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "子ども( )とき、よく 河で およぎました。",
        "options": [
          "1. の",
          "2. な",
          "3. だ",
          "4. に"
        ],
        "correct": 1,
        "correctText": "の",
        "explanation": "(Danh từ + の  + とき )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "母は わたしに セーターを おくって( )。",
        "options": [
          "1. くれました",
          "2. あげました",
          "3. もら\nいました",
          "4. いました"
        ],
        "correct": 1,
        "correctText": "くれました",
        "explanation": "(V てくれました  (người khác làm cho mình))"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "やすみの 日は ___ ★ ___ ___ します。",
        "options": [
          "1. たり",
          "2. テニスを",
          "3. さんぽを",
          "4.\nし"
        ],
        "correct": 4,
        "correctText": "し",
        "explanation": "[2→4→1→3 (テニスを  したり  さんぽを) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "母が ___ ___ ★ ___ おいしいです。",
        "options": [
          "1. りょうり",
          "2. 作った",
          "3. とても",
          "4. は"
        ],
        "correct": 4,
        "correctText": "は",
        "explanation": "[2→1→4→3 (母が  作った  り ょうりは  とても) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "お金が ___ ★ ___ ___ たいです。",
        "options": [
          "1. たら",
          "2. あっ",
          "3. 旅行し",
          "4. 外国へ"
        ],
        "correct": 1,
        "correctText": "たら",
        "explanation": "[2→1→4→3 (お金が  あったら  外国へ  旅行したい) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "すみません、___ ___ ★ ___。",
        "options": [
          "1. ください",
          "2. その",
          "3. 見せて",
          "4. ほ\nんを"
        ],
        "correct": 3,
        "correctText": "見せて",
        "explanation": "[2→4→3→1 (そ の  ほんを  見せて  ください。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "A 「___ ___ ___ ★ か。」 B 「リンさんのです。」",
        "options": [
          "1. かさ",
          "2. です",
          "3. これは",
          "4. だれの"
        ],
        "correct": 2,
        "correctText": "です",
        "explanation": "[3→4→1→2 (これは  だれの  かさ  ですか。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. から",
          "2. まで",
          "3. に",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( おきてから  (sau khi thức dậy))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( くるまで  (bằng ô tô))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. だいたい",
          "2. ぜんぜん",
          "3. あまり",
          "4. とても"
        ],
        "correct": 1,
        "correctText": "だいたい",
        "explanation": "( だいたい  三十分  (khoảng 30 phút))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. でも",
          "2. それでは",
          "3. それから",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "でも",
        "explanation": "( でも (tuy nhiên))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. すき",
          "2. たかい",
          "3. やすい",
          "4. ながい"
        ],
        "correct": 1,
        "correctText": "すき",
        "explanation": "( 見るのが  すきです  (thích xem))"
      }
    ]
  },
  {
    "index": 17,
    "code": "N5-17",
    "level": "N5",
    "title": "Đề N5-17: Thể た , Kinh nghiệm たことがあります  & Liệt kê たり〜たり  (Bài 19) — Nguồn: GoJapan N5 Đề",
    "passage": "にちようびに、キムさんは あたらしい くつが ほしかった【 16 】、デパートへ 行きました。あかい くつ【 17 】しろい く つの ほうが すきでした。みせの 人が「【 18 】くつが いいですか」と ききました。キムさんは しろい くつを えらびまし た。その 人は「すこし【 19 】ください」と 言いました。うちへ かえる【 20 】、コーヒーを のみました。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは ピアノを( )ことが できます。",
        "options": [
          "1. ひく",
          "2. ひいて",
          "3. ひき",
          "4. ひいた"
        ],
        "correct": 1,
        "correctText": "ひく",
        "explanation": "(V ることができます  (có thể))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "日曜日は かいものし( )、うちで 勉強し( )し ます。",
        "options": [
          "1. たり∕たり",
          "2. て∕て",
          "3. ながら∕\nながら",
          "4. ても∕ても"
        ],
        "correct": 1,
        "correctText": "たり∕たり",
        "explanation": "(V たり V たり します )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "「あした パーティーに 行く?」 ― 「ううん、( )。」",
        "options": [
          "1. 行かない",
          "2. 行きません",
          "3. 行かなか\nった",
          "4. 行くよ"
        ],
        "correct": 1,
        "correctText": "行かない",
        "explanation": "(Thể ngắn phủ định 行かない )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "「辞書を 持っている?」 ― 「ううん、( )。」",
        "options": [
          "1. 持っていない",
          "2. 持たない",
          "3. 持って\nいなかった",
          "4. 持っています"
        ],
        "correct": 1,
        "correctText": "持っていない",
        "explanation": "(Phủ định của 持っている  là 持っていない )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "ミラーさんは「来週 東京へ( )」と 言いました。",
        "options": [
          "1. 行きます",
          "2. 行って",
          "3. 行き",
          "4. 行\nこう"
        ],
        "correct": 1,
        "correctText": "行きます",
        "explanation": "(Trích dẫn trực tiếp trong ngoặc kép)"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "ゆうべ わたしが( )えいがは おもしろかったです。",
        "options": [
          "1. 見た",
          "2. 見ました",
          "3. 見て",
          "4. 見り"
        ],
        "correct": 1,
        "correctText": "見た",
        "explanation": "(Mệnh đề bổ nghĩa cho えいが )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "としょかんで 本を( )とき、カードが いります。",
        "options": [
          "1. かりる",
          "2. かります",
          "3. かりて",
          "4.\nかりり"
        ],
        "correct": 1,
        "correctText": "かりる",
        "explanation": "(V る  + と き )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "この つまみを 右へ( )と、音が 大きく なります。",
        "options": [
          "1. まわす",
          "2. まわして",
          "3. まわした",
          "4.\nまわし"
        ],
        "correct": 1,
        "correctText": "まわす",
        "explanation": "(V る  + と  (điều kiện tất yếu))"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 山田さんに 漢字を おしえて( )。",
        "options": [
          "1. もらいました",
          "2. くれました",
          "3. あ\nげました",
          "4. ありました"
        ],
        "correct": 1,
        "correctText": "もらいました",
        "explanation": "(V てもらいました  (được ai giúp))"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "日曜日( )、ちちは 会社へ 行きます。",
        "options": [
          "1. でも",
          "2. ても",
          "3. たら",
          "4. なら"
        ],
        "correct": 1,
        "correctText": "でも",
        "explanation": "(Danh từ + でも  (ngay cả Chủ nhật))"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "日本へ ___ ★ ___ ___ 買いました。",
        "options": [
          "1. とき",
          "2. 来る",
          "3. かばんを",
          "4. この"
        ],
        "correct": 1,
        "correctText": "とき",
        "explanation": "[2→1→4→3 (日本へ  来る  とき  この  かばんを) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ か。",
        "options": [
          "1. です",
          "2. あなたは",
          "3. 好き",
          "4. 何が"
        ],
        "correct": 3,
        "correctText": "好き",
        "explanation": "[2→4→3→1 (あなたは  何が  好き  ですか。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ★ ___ ___。",
        "options": [
          "1. では",
          "2. 今日は",
          "3. ありません",
          "4.\n火曜日"
        ],
        "correct": 4,
        "correctText": "火曜日",
        "explanation": "[2→4→1→3 (今日は  火曜日  では  ありません。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. 買いたいです",
          "2. くつが",
          "3. 私は",
          "4.\n新しい"
        ],
        "correct": 2,
        "correctText": "くつが",
        "explanation": "[3→4→2→1 (私は  新しい  くつが  買いたいです。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは やさいより、___ ★ ___ ___。",
        "options": [
          "1. ほうが",
          "2. くだものの",
          "3. 好き",
          "4.\nです"
        ],
        "correct": 1,
        "correctText": "ほうが",
        "explanation": "[2→1→3→4 (くだものの  ほうが  好きで す。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. から",
          "2. まで",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( ほしかったから  (vì muốn có))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. より",
          "2. から",
          "3. まで",
          "4. とか"
        ],
        "correct": 1,
        "correctText": "より",
        "explanation": "(A より  B のほうが  (so sánh hơn))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. どんな",
          "2. どこ",
          "3. だれ",
          "4. いつ"
        ],
        "correct": 1,
        "correctText": "どんな",
        "explanation": "( どんな  く つ  (giày như thế nào))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. まって",
          "2. たべて",
          "3. のんで",
          "4. かって"
        ],
        "correct": 1,
        "correctText": "まって",
        "explanation": "( すこし  まってください  (xin đợi một chút))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. まえに",
          "2. あとで",
          "3. ときで",
          "4. なかで"
        ],
        "correct": 1,
        "correctText": "まえに",
        "explanation": "( かえる  まえに  (trước khi về))"
      }
    ]
  },
  {
    "index": 18,
    "code": "N5-18",
    "level": "N5",
    "title": "Đề N5-18: Thể thông thường ( 普通形 ) & Đàm thoại thân mật (Bài 20) — Nguồn: Nihongo NET Part 7",
    "passage": "わたしは 月曜日から 金曜日まで 学校へ 行きます。バスで 二十分【 16 】。ごごは としょかんへ 行きます。としょかんは とても【 17 】から、べんきょうが よく できます。土曜日と 日曜日は うち【 18 】テレビを 見ます。らいしゅうは しけん が【 19 】。だから、あしたから まいばん べんきょう【 20 】。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "だんだん( )なりましたね。",
        "options": [
          "1. あたたかく",
          "2. あたたかい",
          "3. あた\nたかいに",
          "4. あたたかくて"
        ],
        "correct": 1,
        "correctText": "あたたかく",
        "explanation": "(A い ( く ) + なります )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "「きのうの 映画は どうだった?」 ― 「とても( ) よ。」",
        "options": [
          "1. おもしろかった",
          "2. おもしろいだ",
          "3.\nおもしろいだった",
          "4. おもしろく"
        ],
        "correct": 1,
        "correctText": "おもしろかった",
        "explanation": "(Quá khứ thể ngắn của tính từ い )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "それは なんだ( )おもいますか。",
        "options": [
          "1. と",
          "2. を",
          "3. は",
          "4. が"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "(Trợ từ と  trước おもいます )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは いい 天気( )ね。",
        "options": [
          "1. でしょう",
          "2. ましょう",
          "3. ください",
          "4. ながら"
        ],
        "correct": 1,
        "correctText": "でしょう",
        "explanation": "( 〜でしょうね  (xác nhận/suy đoán))"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "めがねを( )いる 人は 田中先生です。",
        "options": [
          "1. かけて",
          "2. きて",
          "3. はいて",
          "4. かぶ\nって"
        ],
        "correct": 1,
        "correctText": "かけて",
        "explanation": "( めがねをかけている人 )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "ひま( )とき、うちへ あそびに 来て ください。",
        "options": [
          "1. な",
          "2. の",
          "3. だ",
          "4. に"
        ],
        "correct": 1,
        "correctText": "な",
        "explanation": "(Tính từ な  + な  + とき )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 木村さんに 本を かして( )。",
        "options": [
          "1. あげました",
          "2. くれました",
          "3. あり\nました",
          "4. いました"
        ],
        "correct": 1,
        "correctText": "あげました",
        "explanation": "(V てあげました  (làm cho người khác))"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "あした 雨が( )、サッカーを しません。",
        "options": [
          "1. ふったら",
          "2. ふっても",
          "3. ふると",
          "4.\nふるなら"
        ],
        "correct": 1,
        "correctText": "ふったら",
        "explanation": "(V たら  (giả định nếu...))"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "駅へ( )、すぐ 電話を かけて ください。",
        "options": [
          "1. ついたら",
          "2. ついても",
          "3. つくと",
          "4.\nつくなら"
        ],
        "correct": 1,
        "correctText": "ついたら",
        "explanation": "(V たら  (khi đến ga))"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "この ざっしは 何ページ( )ありますか。",
        "options": [
          "1. ぐらい",
          "2. ごろ",
          "3. まで",
          "4. が"
        ],
        "correct": 1,
        "correctText": "ぐらい",
        "explanation": "( ぐらい  ước lượng số lượng)"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "すみません、___ ___ ★ ___。",
        "options": [
          "1. ください",
          "2. その",
          "3. 見せて",
          "4. ほ\nんを"
        ],
        "correct": 3,
        "correctText": "見せて",
        "explanation": "[2→4→3→1 (その  ほんを  見せて  ください。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "A 「___ ___ ___ ★ か。」 B 「リンさんのです。」",
        "options": [
          "1. かさ",
          "2. です",
          "3. これは",
          "4. だれの"
        ],
        "correct": 2,
        "correctText": "です",
        "explanation": "[3→4→1→2 (これは  だれの かさ  ですか。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ___ ★ 。",
        "options": [
          "1. 三時までです",
          "2. 今日の",
          "3. 九時か\nら",
          "4. テストは"
        ],
        "correct": 1,
        "correctText": "三時までです",
        "explanation": "[2→4→3→1 (今日の  テストは  九時から  三時までです。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. しずかです",
          "2. ひろくて",
          "3. この",
          "4.\nへやは"
        ],
        "correct": 2,
        "correctText": "ひろくて",
        "explanation": "[3→4→2→1 (この  へやは  ひろくて  しずかです。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. かさですか",
          "2. 新しい",
          "3. これは",
          "4.\nだれの"
        ],
        "correct": 2,
        "correctText": "新しい",
        "explanation": "[3→4→2→1 (これは  だれの  新しい  かさですか。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. かかります",
          "2. かかりました",
          "3. かかって",
          "4. かかる"
        ],
        "correct": 1,
        "correctText": "かかります",
        "explanation": "(Thói quen hiện tại: かかります )"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. しずかです",
          "2. しずかい",
          "3. しずかな",
          "4. しずかに"
        ],
        "correct": 1,
        "correctText": "しずかです",
        "explanation": "( しずかですから  (vì yên tĩnh))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( うちで テレビを見ます  (xem ở nhà))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. あります",
          "2. います",
          "3. します",
          "4. きます"
        ],
        "correct": 1,
        "correctText": "あります",
        "explanation": "( しけんが  あります  (có kỳ thi))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. します",
          "2. しました",
          "3. しませんでした",
          "4. していました"
        ],
        "correct": 1,
        "correctText": "します",
        "explanation": "( あしたから  べんきょうし ます )"
      }
    ]
  },
  {
    "index": 19,
    "code": "N5-19",
    "level": "N5",
    "title": "Đề N5-19: Trích dẫn と思います‧と言いました  & Xác nhận でしょう  (Bài 21) — Nguồn: Nihongo NET",
    "passage": "きのうは 母の たんじょうび【 16 】。わたしは デパートへ プレゼントを【 17 】に 行きました。きれいな かばんが ありま した【 18 】、とても 高かったです。だから、あかい はなを【 19 】、母に あげました。母は「ありがとう」【 20 】言いま した。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "「今 ひま?」 ― 「ううん、ひま( )。」",
        "options": [
          "1. じゃない",
          "2. くない",
          "3. ではないです",
          "4. なかった"
        ],
        "correct": 1,
        "correctText": "じゃない",
        "explanation": "(Phủ định thể ngắn của tính từ な )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは たぶん 雨が( )と 思います。",
        "options": [
          "1. ふる",
          "2. ふります",
          "3. ふって",
          "4. ふ\nり"
        ],
        "correct": 1,
        "correctText": "ふる",
        "explanation": "(Thể thông thường + と思います )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "これは きょねん わたしが( )しゃしんです。",
        "options": [
          "1. とった",
          "2. とりました",
          "3. とって",
          "4.\nとり"
        ],
        "correct": 1,
        "correctText": "とった",
        "explanation": "(Mệnh đề định ngữ dùng thể thông thường)"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 朝ごはんを( )時間が ありません。",
        "options": [
          "1. 食べる",
          "2. 食べます",
          "3. 食べて",
          "4.\n食べ"
        ],
        "correct": 1,
        "correctText": "食べる",
        "explanation": "(V る  + 時間  (thời gian ăn sáng))"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "子ども( )とき、よく 河で およぎました。",
        "options": [
          "1. の",
          "2. な",
          "3. だ",
          "4. に"
        ],
        "correct": 1,
        "correctText": "の",
        "explanation": "(Danh từ + の  + とき )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "母は わたしに セーターを おくって( )。",
        "options": [
          "1. くれました",
          "2. あげました",
          "3. もら\nいました",
          "4. いました"
        ],
        "correct": 1,
        "correctText": "くれました",
        "explanation": "(V てくれました  (người khác làm cho mình))"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "やすく( )、わたしは パソコンを 買いません。",
        "options": [
          "1. ても",
          "2. たら",
          "3. と",
          "4. でも"
        ],
        "correct": 1,
        "correctText": "ても",
        "explanation": "(A い ( くても ) (cho dù...))"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "テレビを( )ながら、ごはんを 食べないで くださ い。",
        "options": [
          "1. 見",
          "2. 見る",
          "3. 見て",
          "4. 見た"
        ],
        "correct": 1,
        "correctText": "見",
        "explanation": "(V ます (bỏ ます ) + ながら )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "きたない きょうしつを( )しました。",
        "options": [
          "1. きれいに",
          "2. きれい",
          "3. きれいだ",
          "4.\nきれいな"
        ],
        "correct": 1,
        "correctText": "きれいに",
        "explanation": "(A な  + に  します )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "きのう プールで たくさん( )ました。",
        "options": [
          "1. およぎ",
          "2. およぐ",
          "3. およい",
          "4. お\nよが"
        ],
        "correct": 1,
        "correctText": "およぎ",
        "explanation": "( およぐ chia thể ます  là およぎました )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. 買いたいです",
          "2. くつが",
          "3. 私は",
          "4.\n新しい"
        ],
        "correct": 2,
        "correctText": "くつが",
        "explanation": "[3→4→2→1 (私は  新しい  くつが  買いたいです。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは やさいより、___ ★ ___ ___。",
        "options": [
          "1. ほうが",
          "2. くだものの",
          "3. 好き",
          "4.\nです"
        ],
        "correct": 1,
        "correctText": "ほうが",
        "explanation": "[2→1→3→4 (くだものの  ほうが  好きです。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "としょかんで ___ ___ ★ ___。",
        "options": [
          "1. かりて",
          "2. うちで",
          "3. ほんを",
          "4. 読\nみます"
        ],
        "correct": 2,
        "correctText": "うちで",
        "explanation": "[3→1→2→4 (ほんを  かりて  うちで  読みます。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "私は ___ ★ ___ ___。",
        "options": [
          "1. 学校へ",
          "2. 行く",
          "3. まえに",
          "4. シャ\nワーをあびます"
        ],
        "correct": 2,
        "correctText": "行く",
        "explanation": "[1→2→3→4 (学校へ  行く  まえに  シャワーをあびます。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "きのう ___ ___ ★ ___ か。",
        "options": [
          "1. 買いに",
          "2. 日本語の",
          "3. 行きました",
          "4. じしょを"
        ],
        "correct": 1,
        "correctText": "買いに",
        "explanation": "[2→4→1→3 (日本語の  じしょを  買 いに  行きましたか。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. でした",
          "2. です",
          "3. ました",
          "4. あります"
        ],
        "correct": 1,
        "correctText": "でした",
        "explanation": "( きのうは  〜でした  (quá khứ))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. 買い",
          "2. 買う",
          "3. 買って",
          "4. 買った"
        ],
        "correct": 1,
        "correctText": "買い",
        "explanation": "( 買いに  行きました  (đi mua))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. が",
          "2. から",
          "3. ので",
          "4. と"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "( ありました  が、高かったです  (nhưng đắt))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. 買って",
          "2. 買う",
          "3. 買い",
          "4. 買いました"
        ],
        "correct": 1,
        "correctText": "買って",
        "explanation": "(Nối câu bằng V て : 買って、あげました )"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. と",
          "2. を",
          "3. に",
          "4. が"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "(「 ... 」と 言いました  (đã nói rằng))"
      }
    ]
  },
  {
    "index": 20,
    "code": "N5-20",
    "level": "N5",
    "title": "Đề N5-20: Mệnh đề định ngữ bổ nghĩa danh từ ( 連体修飾  — Bài 22) — Nguồn: Nihongo NET Part 9",
    "passage": "わたしの へやは 二階【 16 】あります。へやには つくえや いす【 17 】が あります。まいばん わたしは へやで 日本語の ラジオを【 18 】から、ねます。あしたは やすみです【 19 】、友だちが あそびに 来ます。だから、きょう へやを【 20 】 します。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "ミラーさんは「来週 東京へ( )」と 言いました。",
        "options": [
          "1. 行きます",
          "2. 行って",
          "3. 行き",
          "4. 行\nこう"
        ],
        "correct": 1,
        "correctText": "行きます",
        "explanation": "(Trích dẫn trực tiếp trong ngoặc kép)"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "ゆうべ わたしが( )えいがは おもしろかったです。",
        "options": [
          "1. 見た",
          "2. 見ました",
          "3. 見て",
          "4. 見り"
        ],
        "correct": 1,
        "correctText": "見た",
        "explanation": "(Mệnh đề bổ nghĩa cho えいが )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "としょかんで 本を( )とき、カードが いります。",
        "options": [
          "1. かりる",
          "2. かります",
          "3. かりて",
          "4.\nかりり"
        ],
        "correct": 1,
        "correctText": "かりる",
        "explanation": "(V る  + とき )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "この つまみを 右へ( )と、音が 大きく なります。",
        "options": [
          "1. まわす",
          "2. まわして",
          "3. まわした",
          "4.\nまわし"
        ],
        "correct": 1,
        "correctText": "まわす",
        "explanation": "(V る  + と  (điều kiện tất yếu))"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 山田さんに 漢字を おしえて( )。",
        "options": [
          "1. もらいました",
          "2. くれました",
          "3. あ\nげました",
          "4. ありました"
        ],
        "correct": 1,
        "correctText": "もらいました",
        "explanation": "(V てもらいました  (được ai giúp))"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "日曜日( )、ちちは 会社へ 行きます。",
        "options": [
          "1. でも",
          "2. ても",
          "3. たら",
          "4. なら"
        ],
        "correct": 1,
        "correctText": "でも",
        "explanation": "(Danh từ + でも  (ngay cả Chủ nhật))"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "ごはんを 食べた( )、この くすりを のみます。",
        "options": [
          "1. あとで",
          "2. まえに",
          "3. ときを",
          "4. う\nしろ"
        ],
        "correct": 1,
        "correctText": "あとで",
        "explanation": "(V た  + あとで  (sau khi))"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "母は 毎朝 いちばん( )おきます。",
        "options": [
          "1. はやく",
          "2. はやい",
          "3. はやくて",
          "4.\nはやかった"
        ],
        "correct": 1,
        "correctText": "はやく",
        "explanation": "(Phó từ はやく  bổ nghĩa cho động từ おきます )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは まいあさ コーヒー( )のみます。",
        "options": [
          "1. を",
          "2. に",
          "3. で",
          "4. が"
        ],
        "correct": 1,
        "correctText": "を",
        "explanation": "( を  chỉ tân ngữ trực tiếp của のみます )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "としょかん( )ほんを 読みます。",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( で  chỉ địa điểm diễn ra hành động)"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. しずかです",
          "2. ひろくて",
          "3. この",
          "4.\nへやは"
        ],
        "correct": 2,
        "correctText": "ひろくて",
        "explanation": "[3→4→2→1 (この  へやは  ひろくて  しずかです。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. かさですか",
          "2. 新しい",
          "3. これは",
          "4.\nだれの"
        ],
        "correct": 2,
        "correctText": "新 しい",
        "explanation": "[3→4→2→1 (これは  だれの  新しい  かさですか。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___。",
        "options": [
          "1. あついです",
          "2. 八月が",
          "3. 一年のうち\nで",
          "4. いちばん"
        ],
        "correct": 4,
        "correctText": "いちばん",
        "explanation": "[3→2→4→1 (一年のうちで  八月が  いちば ん  あついです。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ___ ___ ★ 英語で 話しました。",
        "options": [
          "1. フランス語",
          "2. ので",
          "3. わからない",
          "4. が"
        ],
        "correct": 2,
        "correctText": "ので",
        "explanation": "[1→4→3→2 (フランス語が  わからないので) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ★ ___ ___ もらいました。",
        "options": [
          "1. に",
          "2. 父",
          "3. 時計",
          "4. を"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "[2→1→3→4 (父に  時計を もらいました。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. に",
          "2. で",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "( 二階に  あります  (ở tầng 2))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. など",
          "2. しか",
          "3. だけ",
          "4. ごろ"
        ],
        "correct": 1,
        "correctText": "など",
        "explanation": "( つくえや  いすなど  (bàn, ghế v.v...))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. きいて",
          "2. きく",
          "3. きいた",
          "4. きき"
        ],
        "correct": 1,
        "correctText": "きいて",
        "explanation": "( きいてから、ねます  (nghe xong rồi ngủ))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. から",
          "2. でも",
          "3. ごろ",
          "4. だけ"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( やすみですから  (vì mai là ngày nghỉ))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. そうじ",
          "2. せんたく",
          "3. りょうり",
          "4. さんぽ"
        ],
        "correct": 1,
        "correctText": "そうじ",
        "explanation": "( へやを  そ うじします  (dọn phòng))"
      }
    ]
  },
  {
    "index": 21,
    "code": "N5-21",
    "level": "N5",
    "title": "Đề N5-21: Mệnh đề thời gian とき  & Điều kiện tất yếu と  (Bài 23) — Nguồn: Nihongo NET Part 10",
    "passage": "たなかさんは まいにち 六時はんに おきます。おきて【 16 】、かおを あらいます。それから、くるま【 17 】会社へ 行きま す。うちから 会社まで【 18 】三十分 かかります。会社は おおきいです。【 19 】、しごとは あまり おおくないです。よる は テレビを 見るのが【 20 】です。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "めがねを( )いる 人は 田中先生です。",
        "options": [
          "1. かけて",
          "2. きて",
          "3. はいて",
          "4. かぶ\nって"
        ],
        "correct": 1,
        "correctText": "かけて",
        "explanation": "( めがねをかけている人 )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "ひま( )とき、うちへ あそびに 来て ください。",
        "options": [
          "1. な",
          "2. の",
          "3. だ",
          "4. に"
        ],
        "correct": 1,
        "correctText": "な",
        "explanation": "(Tính từ な  + な  + とき )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 木村さんに 本を かして( )。",
        "options": [
          "1. あげました",
          "2. くれました",
          "3. あり\nました",
          "4. いました"
        ],
        "correct": 1,
        "correctText": "あげました",
        "explanation": "(V てあげました  (làm cho người khác))"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "あした 雨が( )、サッカーを しません。",
        "options": [
          "1. ふったら",
          "2. ふっても",
          "3. ふると",
          "4.\nふるなら"
        ],
        "correct": 1,
        "correctText": "ふったら",
        "explanation": "(V たら  (giả định nếu...))"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "駅へ( )、すぐ 電話を かけて ください。",
        "options": [
          "1. ついたら",
          "2. ついても",
          "3. つくと",
          "4.\nつくなら"
        ],
        "correct": 1,
        "correctText": "ついたら",
        "explanation": "(V たら (khi đến ga))"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "この ざっしは 何ページ( )ありますか。",
        "options": [
          "1. ぐらい",
          "2. ごろ",
          "3. まで",
          "4. が"
        ],
        "correct": 1,
        "correctText": "ぐらい",
        "explanation": "( ぐらい  ước lượng số lượng)"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "こうえんの 花は とても( )です。",
        "options": [
          "1. きれい",
          "2. きれいな",
          "3. きれいに",
          "4.\nきれいく"
        ],
        "correct": 1,
        "correctText": "きれい",
        "explanation": "( きれい  là tính từ đuôi な )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "これ( )私の ほんです。",
        "options": [
          "1. は",
          "2. を",
          "3. に",
          "4. で"
        ],
        "correct": 1,
        "correctText": "は",
        "explanation": "( は  đánh dấu chủ đề câu danh từ)"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "あの 人は( )ですか。",
        "options": [
          "1. だれ",
          "2. なに",
          "3. どこ",
          "4. いつ"
        ],
        "correct": 1,
        "correctText": "だれ",
        "explanation": "( だれ  dùng hỏi về người)"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "「あした ひまですか。」「ええ。」「じゃあ、えいがを 見に 行き( )。」",
        "options": [
          "1. ませんか",
          "2. ました",
          "3. ません",
          "4.\nなさい"
        ],
        "correct": 1,
        "correctText": "ませんか",
        "explanation": "(V ませんか  dùng mời/rủ lịch sự)"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "私は ___ ★ ___ ___。",
        "options": [
          "1. 学校へ",
          "2. 行く",
          "3. まえに",
          "4. シャ\nワーをあびます"
        ],
        "correct": 2,
        "correctText": "行 く",
        "explanation": "[1→2→3→4 (学校へ  行く  まえに  シャワーをあびます。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "きのう ___ ___ ★ ___ か。",
        "options": [
          "1. 買いに",
          "2. 日本語の",
          "3. 行きました",
          "4. じしょを"
        ],
        "correct": 1,
        "correctText": "買いに",
        "explanation": "[2→4→1→3 (日本語の  じしょを  買いに 行きましたか。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "らいねん、___ ___ ___ ★ です。",
        "options": [
          "1. 日本語",
          "2. 勉強する",
          "3. を",
          "4. つも\nり"
        ],
        "correct": 4,
        "correctText": "つもり",
        "explanation": "[1→3→2→4 (日本語を  勉強する  つもりです。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "テーブルの ___ ___ ★ ___ あります。",
        "options": [
          "1. が",
          "2. 上に",
          "3. みかん",
          "4. りんごや"
        ],
        "correct": 3,
        "correctText": "みかん",
        "explanation": "[2→4→3→1 (上に りんごや  みかんが  あります。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この ___ ___ ★ ___ いいですか。",
        "options": [
          "1. すわっても",
          "2. に",
          "3. いす",
          "4. どうぞ"
        ],
        "correct": 1,
        "correctText": "すわっても",
        "explanation": "[4→3→2→1 (この  いすに  すわっても  いいですか。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. から",
          "2. まで",
          "3. に",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( おきてから  (sau khi thức dậy))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( くるまで  (bằng ô tô))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. だいたい",
          "2. ぜんぜん",
          "3. あまり",
          "4. とても"
        ],
        "correct": 1,
        "correctText": "だいたい",
        "explanation": "( だいたい  三十分  (khoảng 30 phút))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. でも",
          "2. それでは",
          "3. それから",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "でも",
        "explanation": "( でも  (tuy nhiên))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. すき",
          "2. たかい",
          "3. やすい",
          "4. ながい"
        ],
        "correct": 1,
        "correctText": "すき",
        "explanation": "( 見るのが  すきです  (thích xem))"
      }
    ]
  },
  {
    "index": 22,
    "code": "N5-22",
    "level": "N5",
    "title": "Đề N5-22: Cho – Nhận Hành Động てあげます‧てくれます‧てもらいます  (Bài 24) — Nguồn: Nihongo",
    "passage": "にちようびに、キムさんは あたらしい くつが ほしかった【 16 】、デパートへ 行きました。あかい くつ【 17 】しろい く つの ほうが すきでした。みせの 人が「【 18 】くつが いいですか」と ききました。キムさんは しろい くつを えらびまし た。その 人は「すこし【 19 】ください」と 言いました。うちへ かえる【 20 】、コーヒーを のみました。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "子ども( )とき、よく 河で およぎました。",
        "options": [
          "1. の",
          "2. な",
          "3. だ",
          "4. に"
        ],
        "correct": 1,
        "correctText": "の",
        "explanation": "(Danh từ + の  + とき )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "母は わたしに セーターを おくって( )。",
        "options": [
          "1. くれました",
          "2. あげました",
          "3. もら\nいました",
          "4. いました"
        ],
        "correct": 1,
        "correctText": "くれました",
        "explanation": "(V てくれました  (người khác làm cho mình))"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "やすく( )、わたしは パソコンを 買いません。",
        "options": [
          "1. ても",
          "2. たら",
          "3. と",
          "4. でも"
        ],
        "correct": 1,
        "correctText": "ても",
        "explanation": "(A い ( くても ) (cho dù...))"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "テレビを( )ながら、ごはんを 食べないで くださ い。",
        "options": [
          "1. 見",
          "2. 見る",
          "3. 見て",
          "4. 見た"
        ],
        "correct": 1,
        "correctText": "見",
        "explanation": "(V ます (bỏ ます ) + ながら )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "きたない きょうしつを( )しました。",
        "options": [
          "1. きれいに",
          "2. きれい",
          "3. きれいだ",
          "4.\nきれいな"
        ],
        "correct": 1,
        "correctText": "きれいに",
        "explanation": "(A な  + に します )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "きのう プールで たくさん( )ました。",
        "options": [
          "1. およぎ",
          "2. およぐ",
          "3. およい",
          "4. お\nよが"
        ],
        "correct": 1,
        "correctText": "およぎ",
        "explanation": "( およぐ  chia thể ます  là およぎました )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "まいあさ 七時( )おきます。",
        "options": [
          "1. に",
          "2. を",
          "3. で",
          "4. と"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "( に  đi sau thời điểm có số cụ thể)"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "たんじょうびは( )ですか。",
        "options": [
          "1. いつ",
          "2. だれ",
          "3. どこ",
          "4. どう"
        ],
        "correct": 1,
        "correctText": "いつ",
        "explanation": "( い つ  hỏi thời gian/ngày tháng)"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "つくえの 上に ねこ( )います。",
        "options": [
          "1. が",
          "2. を",
          "3. に",
          "4. で"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "(Tồn tại sinh vật sống: に  + N が  います )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "つくえの 上に ほん( )ノートが あります。",
        "options": [
          "1. や",
          "2. を",
          "3. に",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "や",
        "explanation": "( や  liệt kê tiêu biểu)"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ___ ___ ★ 英語で 話しました。",
        "options": [
          "1. フランス語",
          "2. ので",
          "3. わからない",
          "4. が"
        ],
        "correct": 2,
        "correctText": "ので",
        "explanation": "[1→4→3→2 (フランス語が  わからないので) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ★ ___ ___ もらいました。",
        "options": [
          "1. に",
          "2. 父",
          "3. 時計",
          "4. を"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "[2→1→3→4 (父に  時計を  もらいました。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "一週間に ___ ★ ___ ___ します。",
        "options": [
          "1. テニス",
          "2. 二回",
          "3. ぐらい",
          "4. を"
        ],
        "correct": 3,
        "correctText": "ぐらい",
        "explanation": "[2→3→1→4 (二回ぐらい  テニスを  します。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "あぶないですから、___ ___ ★ ___ ください。",
        "options": [
          "1. はいら",
          "2. ここ",
          "3. ないで",
          "4. に"
        ],
        "correct": 1,
        "correctText": "はいら",
        "explanation": "[2→4→1→3 (ここに  はいらないで  くださ い。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "田中さんは ___ ___ ★ ___ と 思います。",
        "options": [
          "1. 来ない",
          "2. きょうは",
          "3. もう",
          "4. た\nぶん"
        ],
        "correct": 3,
        "correctText": "もう",
        "explanation": "[2→4→3→1 (きょうは  たぶん  もう  来ない) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. から",
          "2. まで",
          "3. を",
          "4. と"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( ほしかったから  (vì muốn có))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. より",
          "2. から",
          "3. まで",
          "4. とか"
        ],
        "correct": 1,
        "correctText": "よ り",
        "explanation": "(A より  B のほうが  (so sánh hơn))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. どんな",
          "2. どこ",
          "3. だれ",
          "4. いつ"
        ],
        "correct": 1,
        "correctText": "どんな",
        "explanation": "( どんな  くつ  (giày như thế nào))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. まって",
          "2. たべて",
          "3. のんで",
          "4. かって"
        ],
        "correct": 1,
        "correctText": "まって",
        "explanation": "( すこし  まってくだ さい  (xin đợi một chút))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. まえに",
          "2. あとで",
          "3. ときで",
          "4. なかで"
        ],
        "correct": 1,
        "correctText": "まえに",
        "explanation": "( かえる  まえに  (trước khi về))"
      }
    ]
  },
  {
    "index": 23,
    "code": "N5-23",
    "level": "N5",
    "title": "Đề N5-23: Giả định たら  & Nhượng bộ ても‧でも  (Bài 25) — Nguồn: Nihongo NET Part 12",
    "passage": "わたしは 月曜日から 金曜日まで 学校へ 行きます。バスで 二十分【 16 】。ごごは としょかんへ 行きます。としょかんは とても【 17 】から、べんきょうが よく できます。土曜日と 日曜日は うち【 18 】テレビを 見ます。らいしゅうは しけん が【 19 】。だから、あしたから まいばん べんきょう【 20 】。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 山田さんに 漢字を おしえて( )。",
        "options": [
          "1. もらいました",
          "2. くれました",
          "3. あ\nげました",
          "4. ありました"
        ],
        "correct": 1,
        "correctText": "もらいました",
        "explanation": "(V てもらいました  (được ai giúp))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "日曜日( )、ちちは 会社へ 行きます。",
        "options": [
          "1. でも",
          "2. ても",
          "3. たら",
          "4. なら"
        ],
        "correct": 1,
        "correctText": "でも",
        "explanation": "(Danh từ + でも  (ngay cả Chủ nhật))"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "ごはんを 食べた( )、この くすりを のみます。",
        "options": [
          "1. あとで",
          "2. まえに",
          "3. ときを",
          "4. う\nしろ"
        ],
        "correct": 1,
        "correctText": "あとで",
        "explanation": "(V た  + あとで  (sau khi))"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "母は 毎朝 いちばん( )おきます。",
        "options": [
          "1. はやく",
          "2. はやい",
          "3. はやくて",
          "4.\nはやかった"
        ],
        "correct": 1,
        "correctText": "はやく",
        "explanation": "(Phó từ はやく  bổ nghĩa cho động từ おきます )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは まいあさ コーヒー( )のみます。",
        "options": [
          "1. を",
          "2. に",
          "3. で",
          "4. が"
        ],
        "correct": 1,
        "correctText": "を",
        "explanation": "( を  chỉ tân ngữ trực tiếp của のみます )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "としょかん( )ほんを 読みます。",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( で  chỉ địa điểm diễn ra hành động)"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "( )ほんは 私のです。きのう 買いました。",
        "options": [
          "1. この",
          "2. これ",
          "3. それ",
          "4. どれ"
        ],
        "correct": 1,
        "correctText": "この",
        "explanation": "( こ の  + Danh từ)"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "私は 友だち( )としょかんへ 行きます。",
        "options": [
          "1. と",
          "2. も",
          "3. や",
          "4. を"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "( と  chỉ người cùng thực hiện hành động)"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "学校は 九時( )三時までです。",
        "options": [
          "1. から",
          "2. まで",
          "3. に",
          "4. で"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( 〜から  〜まで  (từ... đến...))"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "私は あたらしい 車が 買い( )。",
        "options": [
          "1. たいです",
          "2. ます",
          "3. ました",
          "4. ま\nしょう"
        ],
        "correct": 1,
        "correctText": "たいで す",
        "explanation": "(V たいです  (muốn làm gì))"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "テーブルの ___ ___ ★ ___ あります。",
        "options": [
          "1. が",
          "2. 上に",
          "3. みかん",
          "4. りんごや"
        ],
        "correct": 3,
        "correctText": "みかん",
        "explanation": "[2→4→3→1 (上に  りんごや  みかんが  あります。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この ___ ___ ★ ___ いいですか。",
        "options": [
          "1. すわっても",
          "2. に",
          "3. いす",
          "4. どうぞ"
        ],
        "correct": 1,
        "correctText": "すわっても",
        "explanation": "[4→3→2→1 (この  いすに  すわっても  いいですか。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "やすみの 日は ___ ★ ___ ___ します。",
        "options": [
          "1. たり",
          "2. テニスを",
          "3. さんぽを",
          "4.\nし"
        ],
        "correct": 4,
        "correctText": "し",
        "explanation": "[2→4→1→3 (テニスを  したり  さんぽを) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "母が ___ ___ ★ ___ おいしいです。",
        "options": [
          "1. りょうり",
          "2. 作った",
          "3. とても",
          "4. は"
        ],
        "correct": 4,
        "correctText": "は",
        "explanation": "[2→1→4→3 (母が  作った  りょうりは  とても) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "お金が ___ ★ ___ ___ たいです。",
        "options": [
          "1. たら",
          "2. あっ",
          "3. 旅行し",
          "4. 外国へ"
        ],
        "correct": 1,
        "correctText": "たら",
        "explanation": "[2→1→4→3 (お金が  あったら  外国へ  旅行したい) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. かかります",
          "2. かかりました",
          "3. かかって",
          "4. かかる"
        ],
        "correct": 1,
        "correctText": "かかります",
        "explanation": "(Thói quen hiện tại: かかります )"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. しずかです",
          "2. しずかい",
          "3. しずかな",
          "4. しずかに"
        ],
        "correct": 1,
        "correctText": "しずかです",
        "explanation": "( しずかですから  (vì yên tĩnh))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "( うちで テレビを見ます  (xem ở nhà))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. あります",
          "2. います",
          "3. します",
          "4. きます"
        ],
        "correct": 1,
        "correctText": "あります",
        "explanation": "( しけんが  あります  (có kỳ thi))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. します",
          "2. しました",
          "3. しませんでした",
          "4. していました"
        ],
        "correct": 1,
        "correctText": "します",
        "explanation": "( あしたから  べんきょうし ます )"
      }
    ]
  },
  {
    "index": 24,
    "code": "N5-24",
    "level": "N5",
    "title": "Đề N5-24: Tổng ôn Ngữ pháp N5 — Đề Thi Thực Chiến Quốc Tế Số 1 — Nguồn: JLPT Official N5G",
    "passage": "きのうは 母の たんじょうび【 16 】。わたしは デパートへ プレゼントを【 17 】に 行きました。きれいな かばんが ありま した【 18 】、とても 高かったです。だから、あかい はなを【 19 】、母に あげました。母は「ありがとう」【 20 】言いま した。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "駅へ( )、すぐ 電話を かけて ください。",
        "options": [
          "1. ついたら",
          "2. ついても",
          "3. つくと",
          "4.\nつくなら"
        ],
        "correct": 1,
        "correctText": "ついたら",
        "explanation": "(V たら  (khi đến ga))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "この ざっしは 何ページ( )ありますか。",
        "options": [
          "1. ぐらい",
          "2. ごろ",
          "3. まで",
          "4. が"
        ],
        "correct": 1,
        "correctText": "ぐらい",
        "explanation": "( ぐらい  ước lượng số lượng)"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "こうえんの 花は とても( )です。",
        "options": [
          "1. きれい",
          "2. きれいな",
          "3. きれいに",
          "4.\nきれいく"
        ],
        "correct": 1,
        "correctText": "きれい",
        "explanation": "( きれい  là tính từ đuôi な )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "これ( )私の ほんです。",
        "options": [
          "1. は",
          "2. を",
          "3. に",
          "4. で"
        ],
        "correct": 1,
        "correctText": "は",
        "explanation": "( は  đánh dấu chủ đề câu danh từ)"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "あの 人は( )ですか。",
        "options": [
          "1. だれ",
          "2. なに",
          "3. どこ",
          "4. いつ"
        ],
        "correct": 1,
        "correctText": "だれ",
        "explanation": "( だれ  dùng hỏi về người)"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "「あした ひまですか。」「ええ。」「じゃあ、えいがを 見に 行き( )。」",
        "options": [
          "1. ませんか",
          "2. ました",
          "3. ません",
          "4.\nなさい"
        ],
        "correct": 1,
        "correctText": "ませんか",
        "explanation": "(V ませんか  dùng mời/rủ lịch sự)"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "先生も 来ます。友だち( )来ます。",
        "options": [
          "1. も",
          "2. を",
          "3. へ",
          "4. の"
        ],
        "correct": 1,
        "correctText": "も",
        "explanation": "( も  (cũng) chỉ sự tương đồng)"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "今日は 千円( )ありません。",
        "options": [
          "1. しか",
          "2. を",
          "3. へ",
          "4. の"
        ],
        "correct": 1,
        "correctText": "しか",
        "explanation": "( しか  + Phủ định (chỉ có...))"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "つかれましたね。すこし 休み( )。",
        "options": [
          "1. ましょう",
          "2. ません",
          "3. ました",
          "4.\nましたか"
        ],
        "correct": 1,
        "correctText": "ましょう",
        "explanation": "(V ましょう  (cùng làm gì nhé))"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "きのうの テストは かんたん( )。",
        "options": [
          "1. でした",
          "2. ました",
          "3. かったです",
          "4.\nくなかったです"
        ],
        "correct": 1,
        "correctText": "でした",
        "explanation": "(Quá khứ tính từ な : でした )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "あぶないですから、___ ___ ★ ___ ください。",
        "options": [
          "1. はいら",
          "2. ここ",
          "3. ないで",
          "4. に"
        ],
        "correct": 1,
        "correctText": "はいら",
        "explanation": "[2→4→1→3 (ここに  はいらないで  ください。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "田中さんは ___ ___ ★ ___ と 思います。",
        "options": [
          "1. 来ない",
          "2. きょうは",
          "3. もう",
          "4. た\nぶん"
        ],
        "correct": 3,
        "correctText": "もう",
        "explanation": "[2→4→3→1 (きょうは  たぶん  もう  来ない) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "日本へ ___ ★ ___ ___ 買いました。",
        "options": [
          "1. とき",
          "2. 来る",
          "3. かばんを",
          "4. この"
        ],
        "correct": 1,
        "correctText": "とき",
        "explanation": "[2→1→4→3 (日本へ  来る  とき  この  かばんを) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ か。",
        "options": [
          "1. です",
          "2. あなたは",
          "3. 好き",
          "4. 何が"
        ],
        "correct": 3,
        "correctText": "好き",
        "explanation": "[2→4→3→1 (あなたは  何が  好き  です か。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ★ ___ ___。",
        "options": [
          "1. では",
          "2. 今日は",
          "3. ありません",
          "4.\n火曜日"
        ],
        "correct": 4,
        "correctText": "火曜日",
        "explanation": "[2→4→1→3 (今日は  火曜日  では  ありません。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. でした",
          "2. です",
          "3. ました",
          "4. あります"
        ],
        "correct": 1,
        "correctText": "でした",
        "explanation": "( きのうは  〜でした  (quá khứ))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. 買い",
          "2. 買う",
          "3. 買って",
          "4. 買った"
        ],
        "correct": 1,
        "correctText": "買い",
        "explanation": "( 買いに  行きました  (đi mua))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. が",
          "2. から",
          "3. ので",
          "4. と"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "( ありました  が、高かったです  (nhưng đắt))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. 買って",
          "2. 買う",
          "3. 買い",
          "4. 買いました"
        ],
        "correct": 1,
        "correctText": "買って",
        "explanation": "(Nối câu bằng V て : 買って、あげました )"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. と",
          "2. を",
          "3. に",
          "4. が"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "(「 ... 」と  言いました  (đã nói rằng))"
      }
    ]
  },
  {
    "index": 25,
    "code": "N5-25",
    "level": "N5",
    "title": "Đề N5-25: Tổng ôn Ngữ pháp N5 — Đề Thi Thực Chiến Quốc Tế Số 2 — Nguồn: Uno Japano N5 (D03)",
    "passage": "わたしの へやは 二階【 16 】あります。へやには つくえや いす【 17 】が あります。まいばん わたしは へやで 日本語の ラジオを【 18 】から、ねます。あしたは やすみです【 19 】、友だちが あそびに 来ます。だから、きょう へやを【 20 】 します。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "きたない きょうしつを( )しました。",
        "options": [
          "1. きれいに",
          "2. きれい",
          "3. きれいだ",
          "4.\nきれいな"
        ],
        "correct": 1,
        "correctText": "きれいに",
        "explanation": "(A な  + に  します )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "きのう プールで たくさん( )ました。",
        "options": [
          "1. およぎ",
          "2. およぐ",
          "3. およい",
          "4. お\nよが"
        ],
        "correct": 1,
        "correctText": "およぎ",
        "explanation": "( およぐ  chia thể ます  là およぎました )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "まいあさ 七時( )おきます。",
        "options": [
          "1. に",
          "2. を",
          "3. で",
          "4. と"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "( に  đi sau thời điểm có số cụ thể)"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "たんじょうびは( )ですか。",
        "options": [
          "1. いつ",
          "2. だれ",
          "3. どこ",
          "4. どう"
        ],
        "correct": 1,
        "correctText": "いつ",
        "explanation": "( いつ  hỏi thời gian/ngày tháng)"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "つくえの 上に ねこ( )います。",
        "options": [
          "1. が",
          "2. を",
          "3. に",
          "4. で"
        ],
        "correct": 1,
        "correctText": "が",
        "explanation": "(Tồn tại sinh vật sống: に  + N が  います )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "つくえの 上に ほん( )ノートが あります。",
        "options": [
          "1. や",
          "2. を",
          "3. に",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "や",
        "explanation": "( や  liệt kê tiêu biểu)"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "先生に「すみません、この ほんを 読んで( )。」と お ねがいしました。",
        "options": [
          "1. ください",
          "2. いました",
          "3. います",
          "4.\nいません"
        ],
        "correct": 1,
        "correctText": "ください",
        "explanation": "(V てください  (nhờ vả lịch sự))"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "りんごと バナナと、( )が やすいですか。",
        "options": [
          "1. どちら",
          "2. どこ",
          "3. どの",
          "4. なに"
        ],
        "correct": 1,
        "correctText": "どち ら",
        "explanation": "( どちら  hỏi lựa chọn giữa 2 vật)"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "駅から 学校まで( )かかりますか。",
        "options": [
          "1. どのくらい",
          "2. どちら",
          "3. いくつ",
          "4.\nいつ"
        ],
        "correct": 1,
        "correctText": "どのくらい",
        "explanation": "( どのくらい  hỏi khoảng thời gian)"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "やさいより くだものの( )が 好きです。",
        "options": [
          "1. ほう",
          "2. どちら",
          "3. より",
          "4. ほど"
        ],
        "correct": 1,
        "correctText": "ほう",
        "explanation": "(A より  B のほうが (so sánh hơn))"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "母が ___ ___ ★ ___ おいしいです。",
        "options": [
          "1. りょうり",
          "2. 作った",
          "3. とても",
          "4. は"
        ],
        "correct": 4,
        "correctText": "は",
        "explanation": "[2→1→4→3 (母が  作った  りょうりは  とても) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "お金が ___ ★ ___ ___ たいです。",
        "options": [
          "1. たら",
          "2. あっ",
          "3. 旅行し",
          "4. 外国へ"
        ],
        "correct": 1,
        "correctText": "たら",
        "explanation": "[2→1→4→3 (お金が  あった ら  外国へ  旅行したい) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "すみません、___ ___ ★ ___。",
        "options": [
          "1. ください",
          "2. その",
          "3. 見せて",
          "4. ほ\nんを"
        ],
        "correct": 3,
        "correctText": "見せて",
        "explanation": "[2→4→3→1 (その  ほんを  見せて  ください。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "A 「___ ___ ___ ★ か。」 B 「リンさんのです。」",
        "options": [
          "1. かさ",
          "2. です",
          "3. これは",
          "4. だれの"
        ],
        "correct": 2,
        "correctText": "です",
        "explanation": "[3→4→1→2 (こ れは  だれの  かさ  ですか。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ___ ★ 。",
        "options": [
          "1. 三時までです",
          "2. 今日の",
          "3. 九時か\nら",
          "4. テストは"
        ],
        "correct": 1,
        "correctText": "三時までです",
        "explanation": "[2→4→3→1 (今日の  テストは  九時から  三時までです。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. に",
          "2. で",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "( 二階に  あります  (ở tầng 2))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. など",
          "2. しか",
          "3. だけ",
          "4. ごろ"
        ],
        "correct": 1,
        "correctText": "など",
        "explanation": "( つくえや  いすなど  (bàn, ghế v.v...))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. きいて",
          "2. きく",
          "3. きいた",
          "4. きき"
        ],
        "correct": 1,
        "correctText": "きいて",
        "explanation": "( きいてから、ねます  (nghe xong rồi ngủ))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. から",
          "2. でも",
          "3. ごろ",
          "4. だけ"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "( やすみですから  (vì mai là ngày nghỉ))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. そうじ",
          "2. せんたく",
          "3. りょうり",
          "4. さんぽ"
        ],
        "correct": 1,
        "correctText": "そうじ",
        "explanation": "( へやを  そうじします  (dọn phòng)) PHẦN"
      }
    ]
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EXAMS_N5_DATA;
  } else {
    root.EXAMS_N5_DATA = EXAMS_N5_DATA;
  }
})(typeof window !== 'undefined' ? window : global);
