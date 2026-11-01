/**
 * DỮ LIỆU ĐỀ THI JLPT N4 (25 ĐỀ • 500 CÂU HỎI & 25 ĐOẠN VĂN)
 * data/exams_n4.js
 * --------------------------------------------------------------------------
 * Tự động nạp theo cơ chế Lazy Loading khi học viên chọn cấp độ JLPT N4.
 */
(function(root) {
  'use strict';

  const EXAMS_N4_DATA = [
  {
    "index": 26,
    "code": "N4-01",
    "level": "N4",
    "title": "Đề N4-01: Cấu trúc giải thích のです‧んです  & たらいいですか  (Bài 26) — Nguồn: Nihongo NET N4 Part",
    "passage": "わたしは 去年の 春に 日本へ 来ました。はじめは 店の 人が 言った ことが わからなくて、【 16 】。それで、まいにち テレ ビを 見ながら、日本語を【 17 】ことに しました。半年 つづけたら、少しずつ 聞こえる【 18 】。今は 友だちと 日本語で 話せます。【 19 】、まだ 漢字は むずかしいです。来年は 日本の 大学に 入りたいです。【 20 】、これからも まいにち がん ばります。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 一度も ひこうきに( )ことが ありません。",
        "options": [
          "1. のった",
          "2. のろう",
          "3. のって",
          "4. の\nり"
        ],
        "correct": 1,
        "correctText": "のった",
        "explanation": "(V たことがあります / ありません )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "明日 友だちが 来ますから、部屋を( )おきます。",
        "options": [
          "1. そうじして",
          "2. そうじした",
          "3. そうじ\nする",
          "4. そうじし"
        ],
        "correct": 1,
        "correctText": "そうじして",
        "explanation": "(V てお きます  (chuẩn bị trước))"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "この 字は 小さすぎて、わたしには( )。",
        "options": [
          "1. 読めません",
          "2. 読みません",
          "3. 読んで\nいません",
          "4. 読みたくないです"
        ],
        "correct": 1,
        "correctText": "読めません",
        "explanation": "(Thể khả năng 読めません )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "雨が( )、うちに いましょう。",
        "options": [
          "1. ふったら",
          "2. ふるのに",
          "3. ふりなが\nら",
          "4. ふるほど"
        ],
        "correct": 1,
        "correctText": "ふったら",
        "explanation": "(Điều kiện giả định V たら )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "「あした 行きますか。」「あなたが( )、わたしも 行 きます。」",
        "options": [
          "1. 行くなら",
          "2. 行くのに",
          "3. 行きなが\nら",
          "4. 行くほど"
        ],
        "correct": 1,
        "correctText": "行くなら",
        "explanation": "(Điều kiện V るなら )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "部屋の 電気が 消えて います。だれも( )ようです。",
        "options": [
          "1. いない",
          "2. いなく",
          "3. いなくて",
          "4.\nいません"
        ],
        "correct": 1,
        "correctText": "いない",
        "explanation": "(Suy đoán: V 普通形  + ようです )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 先生から さくぶんを なおして( )。",
        "options": [
          "1. もらいました",
          "2. あげました",
          "3. く\nれました",
          "4. いました"
        ],
        "correct": 1,
        "correctText": "もらいました",
        "explanation": "( わたしは  N に / から  V てもらいました )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "この 部屋は きんえんです。たばこを( )。",
        "options": [
          "1. すってはいけません",
          "2. すわなくても\nいいです",
          "3. すったことがあります",
          "4.\nすうようになりました"
        ],
        "correct": 1,
        "correctText": "すってはいけません",
        "explanation": "(Cấm đoán V てはいけません )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "薬を 飲んだ( )、まだ 頭が いたいです。",
        "options": [
          "1. のに",
          "2. ので",
          "3. ほど",
          "4. なら"
        ],
        "correct": 1,
        "correctText": "のに",
        "explanation": "(Nghịch lý trái kỳ vọng 〜のに )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "この 薬は 大きくて 飲み( )です。",
        "options": [
          "1. にくい",
          "2. やすい",
          "3. すぎ",
          "4. たい"
        ],
        "correct": 1,
        "correctText": "にくい",
        "explanation": "(Khó làm: V ます (bỏ ます ) + にくい )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは 友だちに ___ ___ ★ ___。",
        "options": [
          "1. 本を",
          "2. 新しい",
          "3. 買って",
          "4. あげ\nました"
        ],
        "correct": 3,
        "correctText": "買って",
        "explanation": "[2→1→3→4 (新しい  本を  買って  あげました。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "あしたは あさ 六時に ___ ___ ★ ___ なりませ ん。",
        "options": [
          "1. ので",
          "2. しなければ",
          "3. じゅんびを",
          "4. 出かける"
        ],
        "correct": 3,
        "correctText": "じゅんびを",
        "explanation": "[4→1→3→2 (出かけるので  じゅんびを  しなければ) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは 先生に ___ ___ ★ ___ もらいました。",
        "options": [
          "1. なおして",
          "2. 書いた",
          "3. まちがいを",
          "4. さくぶんの"
        ],
        "correct": 3,
        "correctText": "まちがいを",
        "explanation": "[2→4→3→1 (書いた さくぶんの  まちがいを  なおして) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 道を ___ ___ ★ ___、駅が あります。",
        "options": [
          "1. まがると",
          "2. 右に",
          "3. まっすぐ",
          "4.\n行って"
        ],
        "correct": 2,
        "correctText": "右に",
        "explanation": "[3→4→2→1 (まっすぐ  行って  右に  まがると) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "来月 ___ ___ ★ ___ と 思って います。",
        "options": [
          "1. 買おう",
          "2. 新しい",
          "3. じてんしゃを",
          "4. 自分の"
        ],
        "correct": 3,
        "correctText": "じてんしゃ を",
        "explanation": "[4→2→3→1 (自分の  新しい  じてんしゃを  買おう) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. こまってしまいました",
          "2. こまってあげました",
          "3. こまってくれました",
          "4. こまって\nみました"
        ],
        "correct": 1,
        "correctText": "こまってしまいました",
        "explanation": "( こまってしまいました  (lỡ lâm vào thế bí))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. 練習する",
          "2. 練習した",
          "3. 練習して",
          "4. 練習し"
        ],
        "correct": 1,
        "correctText": "練習する",
        "explanation": "(V ることにしました  (tự quyết định))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. ようになりました",
          "2. ことになりました",
          "3. ところでした",
          "4. はずでした"
        ],
        "correct": 1,
        "correctText": "ようになりました",
        "explanation": "( 聞こえるようになりました  (đã nghe được))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. しかし",
          "2. だから",
          "3. または",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "しかし",
        "explanation": "( しかし  (tuy nhiên))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. ですから",
          "2. しかし",
          "3. たとえば",
          "4. それでは"
        ],
        "correct": 1,
        "correctText": "ですから",
        "explanation": "( ですから  (vì vậy))"
      }
    ]
  },
  {
    "index": 27,
    "code": "N4-02",
    "level": "N4",
    "title": "Đề N4-02: Động từ khả năng ( 可能動詞 ) & みえます‧きこえます  (Bài 27) — Nguồn: Nihongo NET N4",
    "passage": "去年、わたしは 一人で 住む ように なりました。はじめは 毎日 べんとうを 買って いましたが、お金が【 16 】しまいまし た。それで、自分で 料理を【 17 】と 思いました。母に 電話を して、りょうりの しかたを 教えて【 18 】。今は やさいの りょうりを【 19 】ことが できます。来週は 友だちが 来ますから、【 20 】りょうりを ならって おきます。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "電車の 中に かさを( )しまいました。",
        "options": [
          "1. わすれて",
          "2. わすれる",
          "3. わすれた",
          "4. わすれ"
        ],
        "correct": 1,
        "correctText": "わすれて",
        "explanation": "(V てしまいました  (lỡ làm))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "こんだ 電車の 中で となりの 人に 足を( )。",
        "options": [
          "1. ふまれました",
          "2. ふみました",
          "3. ふ\nんでいます",
          "4. ふるつもりです"
        ],
        "correct": 1,
        "correctText": "ふまれました",
        "explanation": "(Thể bị động ふまれました )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "時間が( )、いっしょに えいがを 見ましょう。",
        "options": [
          "1. あれば",
          "2. あるのに",
          "3. ありながら",
          "4. あるほど"
        ],
        "correct": 1,
        "correctText": "あれば",
        "explanation": "(Thể điều kiện あれば )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "天気よほうに よると、あしたは 雪が ふる( )。",
        "options": [
          "1. そうです",
          "2. ようでした",
          "3. ところ\nです",
          "4. はずでした"
        ],
        "correct": 1,
        "correctText": "そうです",
        "explanation": "(Truyền đạt V 普通形  + そうです )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "妹が わからないと 言ったので、わたしが 教えて ( )。",
        "options": [
          "1. あげました",
          "2. くれました",
          "3. もら\nいました",
          "4. いただきました"
        ],
        "correct": 1,
        "correctText": "あげま した",
        "explanation": "( わたしが  N に  V てあげました )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは 試験ですから、今夜は べんきょうし( )。",
        "options": [
          "1. なければなりません",
          "2. なくてもいい\nです",
          "3. てはいけません",
          "4. ながらいま\nす"
        ],
        "correct": 1,
        "correctText": "なければなりません",
        "explanation": "(Nghĩa vụ なければなりません )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "空が 暗く なりました。雨が ふる( )。",
        "options": [
          "1. かもしれません",
          "2. ことにしました",
          "3. はずでした",
          "4. ようになりました"
        ],
        "correct": 1,
        "correctText": "かもしれません",
        "explanation": "(Có lẽ: 〜かもしれません )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "ゆうべ ケーキを( )すぎて、おなかが いたく なりま した。",
        "options": [
          "1. 食べ",
          "2. 食べて",
          "3. 食べる",
          "4. 食べ\nた"
        ],
        "correct": 1,
        "correctText": "食べ",
        "explanation": "(Quá mức: V ます (bỏ ます ) + すぎる )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "音楽を( )ながら、そうじを します。",
        "options": [
          "1. 聞き",
          "2. 聞いて",
          "3. 聞く",
          "4. 聞いた"
        ],
        "correct": 1,
        "correctText": "聞き",
        "explanation": "(Song song: V ます (bỏ ます ) + な がら )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "まいにち 練習して、およげる( )。",
        "options": [
          "1. ようになりました",
          "2. ことにしました",
          "3. ところです",
          "4. つもりです"
        ],
        "correct": 1,
        "correctText": "ようになりました",
        "explanation": "(Biến đổi năng lực: ようになりました )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "友だちが 来る ___ ___ ★ ___ おきました。",
        "options": [
          "1. して",
          "2. そうじを",
          "3. まえに",
          "4. 部\n屋の"
        ],
        "correct": 2,
        "correctText": "そうじを",
        "explanation": "[3→4→2→1 (まえに  部屋の そうじを  して) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ は リムさんです。",
        "options": [
          "1. 人",
          "2. いる",
          "3. あそこで",
          "4. 話して"
        ],
        "correct": 2,
        "correctText": "いる",
        "explanation": "[3→4→2→1 (あそこで  話して  いる  人は) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ___ ★ ___ なりました。",
        "options": [
          "1. ように",
          "2. 少し",
          "3. 話せる",
          "4. 日本\n語が"
        ],
        "correct": 3,
        "correctText": "話せる",
        "explanation": "[4→2→3→1 (日本語が  少 し  話せる  ように) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "雨が ___ ___ ★ ___ しました。",
        "options": [
          "1. ことに",
          "2. 行かない",
          "3. ふって",
          "4.\nいるので"
        ],
        "correct": 2,
        "correctText": "行かない",
        "explanation": "[3→4→2→1 (ふって  いるので  行かない  ことに) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ います。",
        "options": [
          "1. まって",
          "2. 来るのを",
          "3. わたしは",
          "4.\n友だちが"
        ],
        "correct": 2,
        "correctText": "来るのを",
        "explanation": "[3→4→2→1 (わたしは  友だちが  来るのを  まって) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. なくなって",
          "2. なくなる",
          "3. なくなった",
          "4. なくなり"
        ],
        "correct": 1,
        "correctText": "なくなって",
        "explanation": "( なくなってしまいました  (hết sạch tiền))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. はじめよう",
          "2. はじめる",
          "3. はじめて",
          "4. はじめた"
        ],
        "correct": 1,
        "correctText": "はじめよう",
        "explanation": "( はじめようと思いました  (định bắt đầu))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. もらいました",
          "2. あげました",
          "3. やりました",
          "4. いきました"
        ],
        "correct": 1,
        "correctText": "もらいました",
        "explanation": "( 母に  教えてもらいました  (được mẹ dạy))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. つくる",
          "2. つくって",
          "3. つくった",
          "4. つくり"
        ],
        "correct": 1,
        "correctText": "つくる",
        "explanation": "( つくることができます  (có thể nấu))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. 新しい",
          "2. 新しさ",
          "3. 新しくて",
          "4. 新しいの"
        ],
        "correct": 1,
        "correctText": "新しい",
        "explanation": "( 新しい  りょうり  (món ăn mới))"
      }
    ]
  },
  {
    "index": 28,
    "code": "N4-03",
    "level": "N4",
    "title": "Đề N4-03: Hành động song song ながら , Thói quen ています  & し  (Bài 28) — Nguồn: Nihongo NET N4",
    "passage": "先週の 日曜日、父と 母と 海へ 行きました。電車が おくれたので、海まで 二時間【 16 】。天気が よくて、風も あまり【 17 】。ひるごはんは、海の 近くの 店で 魚を 食べました。とても【 18 】そうに 見えたので、二つも 注文しました。おな かが いっぱいに【 19 】しまいました。つかれましたが、楽しかったです。【 20 】また 行きたいです。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "来年 国へ( )と 思って います。",
        "options": [
          "1. 帰ろう",
          "2. 帰って",
          "3. 帰り",
          "4. 帰れ"
        ],
        "correct": 1,
        "correctText": "帰ろう",
        "explanation": "(V( よ ) うと思っています )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "この ボタンを( )と、きっぷが 出ます。",
        "options": [
          "1. おす",
          "2. おして",
          "3. おした",
          "4. おそ\nう"
        ],
        "correct": 1,
        "correctText": "おす",
        "explanation": "(Điều kiện tất yếu V る と )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "この ケーキは とても( )そうですね。",
        "options": [
          "1. おいし",
          "2. おいしさ",
          "3. おいしく",
          "4.\nおいしくて"
        ],
        "correct": 1,
        "correctText": "おいし",
        "explanation": "(Thị giác: A い (bỏ い ) + そうです )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "わたしが 病気の とき、友だちが 薬を 買って( )。",
        "options": [
          "1. くれました",
          "2. あげました",
          "3. やり\nました",
          "4. なりました"
        ],
        "correct": 1,
        "correctText": "くれました",
        "explanation": "( 友だちが(わたしに) V てくれました )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは 休みですから、早く( )。",
        "options": [
          "1. おきなくてもいいです",
          "2. おきなけれ\nばなりません",
          "3. おきるところです",
          "4.\nおきたばかりです"
        ],
        "correct": 1,
        "correctText": "おきな くてもいいです",
        "explanation": "(Không cần làm: V なくてもいいです )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "今日は 体の ぐあいが わるい( )、会社を 休みます。",
        "options": [
          "1. ので",
          "2. のに",
          "3. ほど",
          "4. ても"
        ],
        "correct": 1,
        "correctText": "ので",
        "explanation": "(Nguyên nhân lịch sự 〜ので )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "この ペンは 字が 書き( )です。いつも つかってい ます。",
        "options": [
          "1. やすい",
          "2. にくい",
          "3. すぎ",
          "4. たい"
        ],
        "correct": 1,
        "correctText": "やすい",
        "explanation": "(Dễ làm: V ます (bỏ ます ) + やすい )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "日本の 大学に 入る( )に、日本語を べんきょうして います。",
        "options": [
          "1. ため",
          "2. こと",
          "3. もの",
          "4. はず"
        ],
        "correct": 1,
        "correctText": "ため",
        "explanation": "(Mục đích ý chí: V るために )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "体に いいので、まいあさ 歩く( )しました。",
        "options": [
          "1. ことに",
          "2. ものに",
          "3. ところに",
          "4.\nはずに"
        ],
        "correct": 1,
        "correctText": "ことに",
        "explanation": "(Tự quyết định: V ることにしました )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "先生は もう うちへ( )か。",
        "options": [
          "1. お帰りになりました",
          "2. お帰りしまし\nた",
          "3. 帰ってあげました",
          "4. 帰られてい\nただきました"
        ],
        "correct": 1,
        "correctText": "お帰りになりました",
        "explanation": "(Tôn kính ngữ: お V になります )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 道を ___ ___ ★ ___、駅が あります。",
        "options": [
          "1. まがると",
          "2. 右に",
          "3. まっすぐ",
          "4.\n行って"
        ],
        "correct": 2,
        "correctText": "右に",
        "explanation": "[3→4→2→1 (まっすぐ  行って  右に  まがると) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "来月 ___ ___ ★ ___ と 思って います。",
        "options": [
          "1. 買おう",
          "2. 新しい",
          "3. じてんしゃを",
          "4. 自分の"
        ],
        "correct": 3,
        "correctText": "じてんしゃを",
        "explanation": "[4→2→3→1 (自分の  新しい  じてんしゃを  買おう) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 薬は ___ ___ ★ ___ です。",
        "options": [
          "1. にくい",
          "2. 飲み",
          "3. とても",
          "4. 大きす\nぎて"
        ],
        "correct": 2,
        "correctText": "飲み",
        "explanation": "[4→3→2→1 (大きすぎて  と ても  飲み  にくいです) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "富士山が ___ ___ ___ ★ 知っていますか。",
        "options": [
          "1. か",
          "2. どこ",
          "3. に",
          "4. ある"
        ],
        "correct": 1,
        "correctText": "か",
        "explanation": "[2→3→4→1 (どこ  に  ある  か  知っていますか) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "音楽を ___ ★ ___ ___ 飲みました。",
        "options": [
          "1. を",
          "2. ながら",
          "3. 聞き",
          "4. コーヒー"
        ],
        "correct": 2,
        "correctText": "ながら",
        "explanation": "[3→2→4→1 (音 楽を  聞き  ながら  コーヒーを) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. かかりました",
          "2. かかります",
          "3. かけました",
          "4. かけます"
        ],
        "correct": 1,
        "correctText": "かかりました",
        "explanation": "(Quá khứ: 二時間かかりました )"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. つよくなかったです",
          "2. つよかったです",
          "3. つよいでした",
          "4. つよくないでした"
        ],
        "correct": 1,
        "correctText": "つよくなかったです",
        "explanation": "( あまり + つよくなかったです )"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. おいし",
          "2. おいしい",
          "3. おいしく",
          "4. おいしくて"
        ],
        "correct": 1,
        "correctText": "おいし",
        "explanation": "( おいしそうに見えた  (trông ngon))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. なって",
          "2. なり",
          "3. なる",
          "4. なった"
        ],
        "correct": 1,
        "correctText": "なって",
        "explanation": "( なってしまいました  (đã no căng))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. ぜひ",
          "2. けっして",
          "3. あまり",
          "4. 少しも"
        ],
        "correct": 1,
        "correctText": "ぜひ",
        "explanation": "( ぜひ  また  行きたいです  (nhất định muốn đi lại))"
      }
    ]
  },
  {
    "index": 29,
    "code": "N4-04",
    "level": "N4",
    "title": "Đề N4-04: Trạng thái Tự động từ ています  & Hoàn tất てしまいました  (Bài 29) — Nguồn: Nihongo NET",
    "passage": "花や 木の 世話を することは けんこうに いいと【 16 】います。また、花は かざる【 17 】でも 体に いいそうです。花を 見ると 気持ちが【 18 】なります。花は 色に よって ちがう 働きが ある【 19 】です。たとえば 赤や ⻩色の 花は 人を 元 気に して【 20 】そうです。( GoJapan N4 Đề 7 )",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "「あした 行きますか。」「あなたが( )、わたしも 行 きます。」",
        "options": [
          "1. 行くなら",
          "2. 行くのに",
          "3. 行きなが\nら",
          "4. 行くほど"
        ],
        "correct": 1,
        "correctText": "行くなら",
        "explanation": "(Điều kiện V るなら )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "部屋の 電気が 消えて います。だれも( )ようです。",
        "options": [
          "1. いない",
          "2. いなく",
          "3. いなくて",
          "4.\nいません"
        ],
        "correct": 1,
        "correctText": "いない",
        "explanation": "(Suy đoán: V 普通形  + ようです )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 先生から さくぶんを なおして( )。",
        "options": [
          "1. もらいました",
          "2. あげました",
          "3. く\nれました",
          "4. いました"
        ],
        "correct": 1,
        "correctText": "もらいました",
        "explanation": "( わたしは  N に / から  V てもらいました )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "この 部屋は きんえんです。たばこを( )。",
        "options": [
          "1. すってはいけません",
          "2. すわなくても\nいいです",
          "3. すったことがあります",
          "4.\nすうようになりました"
        ],
        "correct": 1,
        "correctText": "すってはいけません",
        "explanation": "(Cấm đoán V てはいけま せん )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "薬を 飲んだ( )、まだ 頭が いたいです。",
        "options": [
          "1. のに",
          "2. ので",
          "3. ほど",
          "4. なら"
        ],
        "correct": 1,
        "correctText": "のに",
        "explanation": "(Nghịch lý trái kỳ vọng 〜のに )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "この 薬は 大きくて 飲み( )です。",
        "options": [
          "1. にくい",
          "2. やすい",
          "3. すぎ",
          "4. たい"
        ],
        "correct": 1,
        "correctText": "にくい",
        "explanation": "(Khó làm: V ます (bỏ ます ) + にくい )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "うしろの 人にも 聞こえる( )に、大きい 声で 話し てください。",
        "options": [
          "1. よう",
          "2. こと",
          "3. もの",
          "4. はず"
        ],
        "correct": 1,
        "correctText": "よう",
        "explanation": "(Mục đích khả năng: V るように )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "来月から 新しい 店で はたらく( )なりました。",
        "options": [
          "1. ことに",
          "2. ために",
          "3. ものに",
          "4. と\nころに"
        ],
        "correct": 1,
        "correctText": "ことに",
        "explanation": "(Được quyết định: V ることになりました )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "あそこに「さくら」( )名前の 店が あります。",
        "options": [
          "1. という",
          "2. といって",
          "3. といいながら",
          "4. といえば"
        ],
        "correct": 1,
        "correctText": "という",
        "explanation": "(Định danh: N1 という N2)"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "となりの 部屋から ピアノの 音が( )。",
        "options": [
          "1. きこえます",
          "2. きけます",
          "3. ききま\nす",
          "4. きかせます"
        ],
        "correct": 1,
        "correctText": "きこえます",
        "explanation": "(Tự nhiên nghe thấy: きこえます )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "雨が ___ ___ ★ ___ しました。",
        "options": [
          "1. ことに",
          "2. 行かない",
          "3. ふって",
          "4.\nいるので"
        ],
        "correct": 2,
        "correctText": "行かない",
        "explanation": "[3→4→2→1 (ふって  いるので  行かない  こ とに) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ います。",
        "options": [
          "1. まって",
          "2. 来るのを",
          "3. わたしは",
          "4.\n友だちが"
        ],
        "correct": 2,
        "correctText": "来るのを",
        "explanation": "[3→4→2→1 (わたしは  友だちが  来るのを  まって) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "毎日 ___ ★ ___ ___ ね。",
        "options": [
          "1. ふって",
          "2. ばかり",
          "3. 雨",
          "4. います"
        ],
        "correct": 2,
        "correctText": "ばかり",
        "explanation": "[3→2→1→4 (毎日  雨 ばかり  ふって  いますね) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "ゲーム ___ ★ ___ ___ 勉強しなさい。",
        "options": [
          "1. していない",
          "2. すこしは",
          "3. で",
          "4.\nばかり"
        ],
        "correct": 1,
        "correctText": "していない",
        "explanation": "[4→1→3→2 (ゲームばかり  していないで  すこしは) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "リーさんは だれか ★ ___ ___ ___ ぬすまれまし た。",
        "options": [
          "1. に",
          "2. ノートパソコン",
          "3. を",
          "4. 大\n事な"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "[1→4→2→3 (だれかに  大事な  ノートパソコンを) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. 言われて",
          "2. 言って",
          "3. 言わせて",
          "4. 言えて"
        ],
        "correct": 1,
        "correctText": "言われて",
        "explanation": "( 〜と言われています  (được cho là))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. だけ",
          "2. しか",
          "3. ほど",
          "4. ばかり"
        ],
        "correct": 1,
        "correctText": "だけ",
        "explanation": "( か ざるだけでも  (chỉ cần trang trí thôi cũng))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. よく",
          "2. いい",
          "3. よい",
          "4. よくて"
        ],
        "correct": 1,
        "correctText": "よく",
        "explanation": "( 気持ちが  よくなります  (tâm trạng tốt lên))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. そう",
          "2. よう",
          "3. はず",
          "4. つもり"
        ],
        "correct": 1,
        "correctText": "そう",
        "explanation": "( あるそ うです  (nghe nói là có))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. くれる",
          "2. あげる",
          "3. もらう",
          "4. やる"
        ],
        "correct": 1,
        "correctText": "くれる",
        "explanation": "( 元気にしてくれる  (làm cho mình khỏe khoắn))"
      }
    ]
  },
  {
    "index": 30,
    "code": "N4-05",
    "level": "N4",
    "title": "Đề N4-05: Trạng thái có chủ đích てあります  & Chuẩn bị ておきます  (Bài 30) — Nguồn: Nihongo NET N4",
    "passage": "日本の 夏は あつくて むしあついです。だから、エアコンを【 16 】まま 寝る 人が 多いです。【 17 】、体には あまり よく ありません。かぜを ひかない【 18 】に、寝る まえに タイマーを セットして【 19 】ほうが いいです。また、朝 起きたら コップ 一杯の 水を【 20 】ように しましょう。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "妹が わからないと 言ったので、わたしが 教えて ( )。",
        "options": [
          "1. あげました",
          "2. くれました",
          "3. もら\nいました",
          "4. いただきました"
        ],
        "correct": 1,
        "correctText": "あげました",
        "explanation": "( わたしが  N に  V てあげました )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは 試験ですから、今夜は べんきょうし( )。",
        "options": [
          "1. なければなりません",
          "2. なくてもいい\nです",
          "3. てはいけません",
          "4. ながらいま\nす"
        ],
        "correct": 1,
        "correctText": "なければなりませ ん",
        "explanation": "(Nghĩa vụ なければなりません )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "空が 暗く なりました。雨が ふる( )。",
        "options": [
          "1. かもしれません",
          "2. ことにしました",
          "3. はずでした",
          "4. ようになりました"
        ],
        "correct": 1,
        "correctText": "かもしれません",
        "explanation": "(Có lẽ: 〜かもしれません )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "ゆうべ ケーキを( )すぎて、おなかが いたく なりま した。",
        "options": [
          "1. 食べ",
          "2. 食べて",
          "3. 食べる",
          "4. 食べ\nた"
        ],
        "correct": 1,
        "correctText": "食べ",
        "explanation": "(Quá mức: V ます (bỏ ま す ) + すぎる )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "音楽を( )ながら、そうじを します。",
        "options": [
          "1. 聞き",
          "2. 聞いて",
          "3. 聞く",
          "4. 聞いた"
        ],
        "correct": 1,
        "correctText": "聞き",
        "explanation": "(Song song: V ます (bỏ ます ) + ながら )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "まいにち 練習して、およげる( )。",
        "options": [
          "1. ようになりました",
          "2. ことにしました",
          "3. ところです",
          "4. つもりです"
        ],
        "correct": 1,
        "correctText": "ようになりました",
        "explanation": "(Biến đổi năng lực: ようになり ました )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "リムさんは 今日 来ると 言っていましたから、もうすぐ 来る( )です。",
        "options": [
          "1. はず",
          "2. ため",
          "3. まま",
          "4. ながら"
        ],
        "correct": 1,
        "correctText": "はず",
        "explanation": "(Chắc chắn có căn cứ: V るはずです )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "「どうして おくれたんですか。」 ― 「バスが( )んで す。」",
        "options": [
          "1. 来なかった",
          "2. 来ませんでした",
          "3. 来\nないだ",
          "4. 来なくて"
        ],
        "correct": 1,
        "correctText": "来なかった",
        "explanation": "(Giải thích: V 普通形  + んです )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "この 店は 料理も おいしい( )、ねだんも やすいで す。",
        "options": [
          "1. し",
          "2. で",
          "3. から",
          "4. のに"
        ],
        "correct": 1,
        "correctText": "し",
        "explanation": "(Liệt kê đặc điểm/lý do 〜し )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "パーティーの まえに、ビールを( )おいて くださ い。",
        "options": [
          "1. ひやして",
          "2. ひえて",
          "3. あたためて",
          "4. わいて"
        ],
        "correct": 1,
        "correctText": "ひやして",
        "explanation": "(Chuẩn bị trước: ひやしておきます )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "富士山が ___ ___ ___ ★ 知っていますか。",
        "options": [
          "1. か",
          "2. どこ",
          "3. に",
          "4. ある"
        ],
        "correct": 1,
        "correctText": "か",
        "explanation": "[2→3→4→1 (どこ  に  ある  か 知っていますか) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "音楽を ___ ★ ___ ___ 飲みました。",
        "options": [
          "1. を",
          "2. ながら",
          "3. 聞き",
          "4. コーヒー"
        ],
        "correct": 2,
        "correctText": "ながら",
        "explanation": "[3→2→4→1 (音楽を  聞き  ながら  コーヒーを) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "私の ___ ___ ___ ★ よく 飲まれています。",
        "options": [
          "1. ワイン",
          "2. この",
          "3. が",
          "4. 国では"
        ],
        "correct": 3,
        "correctText": "が",
        "explanation": "[4→2→1→3 (私の  国 では  この  ワインが) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "今は ___ ★ ___ ___ です。",
        "options": [
          "1. ない",
          "2. 何",
          "3. も",
          "4. 食べたく"
        ],
        "correct": 3,
        "correctText": "も",
        "explanation": "[2→3→4→1 (今は  何も  食べたくないです) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "日本語で ___ ___ ★ ___ いいですか。",
        "options": [
          "1. どう",
          "2. 書きたいんですが",
          "3. 手紙を",
          "4. 書いたら"
        ],
        "correct": 1,
        "correctText": "どう",
        "explanation": "[3→2→1→4 (手紙を  書 きたいんですが  どう  書いたら) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. つけた",
          "2. つける",
          "3. つけて",
          "4. つき"
        ],
        "correct": 1,
        "correctText": "つけた",
        "explanation": "(V た  + まま  (để nguyên trạng thái bật))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. しかし",
          "2. ですから",
          "3. それに",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "しかし",
        "explanation": "( しかし  (tuy nhiên lại không tốt cho cơ thể))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. よう",
          "2. ため",
          "3. こと",
          "4. はず"
        ],
        "correct": 1,
        "correctText": "よう",
        "explanation": "( かぜをひかないように  (để không bị cảm))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. おいた",
          "2. あった",
          "3. みた",
          "4. いた"
        ],
        "correct": 1,
        "correctText": "おいた",
        "explanation": "( セットしておい たほうがいい  (nên hẹn giờ sẵn))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. 飲む",
          "2. 飲んだ",
          "3. 飲んで",
          "4. 飲み"
        ],
        "correct": 1,
        "correctText": "飲む",
        "explanation": "(V るようにしましょう  (hãy cố gắng duy trì))"
      }
    ]
  },
  {
    "index": 31,
    "code": "N4-06",
    "level": "N4",
    "title": "Đề N4-06: Thể ý chí ( 意向形 ), Dự định と思っています  & つもりです  (Bài 31) — Nguồn: Nihongo NET N4",
    "passage": "わたしは 去年の 春に 日本へ 来ました。はじめは 店の 人が 言った ことが わからなくて、【 16 】。それで、まいにち テレ ビを 見ながら、日本語を【 17 】ことに しました。半年 つづけたら、少しずつ 聞こえる【 18 】。今は 友だちと 日本語で 話せます。【 19 】、まだ 漢字は むずかしいです。来年は 日本の 大学に 入りたいです。【 20 】、これからも まいにち がん ばります。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは 休みですから、早く( )。",
        "options": [
          "1. おきなくてもいいです",
          "2. おきなけれ\nばなりません",
          "3. おきるところです",
          "4.\nおきたばかりです"
        ],
        "correct": 1,
        "correctText": "おきなくてもいいです",
        "explanation": "(Không cần làm: V なくてもいいです )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "今日は 体の ぐあいが わるい( )、会社を 休みます。",
        "options": [
          "1. ので",
          "2. のに",
          "3. ほど",
          "4. ても"
        ],
        "correct": 1,
        "correctText": "ので",
        "explanation": "(Nguyên nhân lịch sự 〜ので )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "この ペンは 字が 書き( )です。いつも つかってい ます。",
        "options": [
          "1. やすい",
          "2. にくい",
          "3. すぎ",
          "4. たい"
        ],
        "correct": 1,
        "correctText": "やすい",
        "explanation": "(Dễ làm: V ます (bỏ ます ) + やすい )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "日本の 大学に 入る( )に、日本語を べんきょうして います。",
        "options": [
          "1. ため",
          "2. こと",
          "3. もの",
          "4. はず"
        ],
        "correct": 1,
        "correctText": "ため",
        "explanation": "(Mục đích ý chí: V る ために )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "体に いいので、まいあさ 歩く( )しました。",
        "options": [
          "1. ことに",
          "2. ものに",
          "3. ところに",
          "4.\nはずに"
        ],
        "correct": 1,
        "correctText": "ことに",
        "explanation": "(Tự quyết định: V ることにしました )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "先生は もう うちへ( )か。",
        "options": [
          "1. お帰りになりました",
          "2. お帰りしまし\nた",
          "3. 帰ってあげました",
          "4. 帰られてい\nただきました"
        ],
        "correct": 1,
        "correctText": "お帰りになりました",
        "explanation": "(Tôn kính ngữ: お V になります )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "わたしの 部屋の まどから 富士山が( )。",
        "options": [
          "1. みえます",
          "2. みます",
          "3. みられます",
          "4. みせます"
        ],
        "correct": 1,
        "correctText": "みえます",
        "explanation": "(Tự nhiên nhìn thấy: みえます )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "この いすは( )いますから、すわらないで くださ い。",
        "options": [
          "1. こわれて",
          "2. こわして",
          "3. われて",
          "4.\nやぶれて"
        ],
        "correct": 1,
        "correctText": "こわれて",
        "explanation": "(Trạng thái tự động từ こわれています )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "来週の 会議は 金曜日に( )予定です。",
        "options": [
          "1. おこなう",
          "2. おこなって",
          "3. おこない",
          "4. おこなった"
        ],
        "correct": 1,
        "correctText": "おこなう",
        "explanation": "(Kế hoạch: V る  + 予定です )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "この マークは「たばこを すうな」( )いみです。",
        "options": [
          "1. という",
          "2. といって",
          "3. といった",
          "4.\nというと"
        ],
        "correct": 1,
        "correctText": "という",
        "explanation": "(Giải thích nghĩa: 〜といういみです )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "ゲーム ___ ★ ___ ___ 勉強しなさい。",
        "options": [
          "1. していない",
          "2. すこしは",
          "3. で",
          "4.\nばかり"
        ],
        "correct": 1,
        "correctText": "していない",
        "explanation": "[4→1→3→2 (ゲーム ばかり  していないで  すこしは) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "リーさんは だれか ★ ___ ___ ___ ぬすまれまし た。",
        "options": [
          "1. に",
          "2. ノートパソコン",
          "3. を",
          "4. 大\n事な"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "[1→4→2→3 (だれかに  大事な  ノートパソコンを) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "リーさんは 田中さんの ___ ___ ★ ___ 思ってい ます。",
        "options": [
          "1. を",
          "2. 聞かせて",
          "3. ほしいと",
          "4. 歌"
        ],
        "correct": 2,
        "correctText": "聞かせて",
        "explanation": "[4→1→2→3 (歌を  聞かせて  ほしいと) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "道が ___ ___ ★ ___ しまいました。",
        "options": [
          "1. 遅れて",
          "2. 会社に",
          "3. こんでいて",
          "4.\n電車が"
        ],
        "correct": 2,
        "correctText": "会社に",
        "explanation": "[3→4→2→1 (こんでいて  電車が  会社に  遅れて) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "田中さんに ___ ___ ★ ___ ください。",
        "options": [
          "1. と",
          "2. 始まる",
          "3. 会議が",
          "4. 伝えて"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "[3→2→1→4 (会議が  始まる  と  伝えて) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. こまってしまいました",
          "2. こまってあげました",
          "3. こまってくれました",
          "4. こまって\nみました"
        ],
        "correct": 1,
        "correctText": "こまってしまいました",
        "explanation": "( こまってしまいました  (lỡ lâm vào thế bí))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. 練習する",
          "2. 練習した",
          "3. 練習して",
          "4. 練習し"
        ],
        "correct": 1,
        "correctText": "練習する",
        "explanation": "(V ることにしました  (tự quyết định))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. ようになりました",
          "2. ことになりました",
          "3. ところでした",
          "4. はずでした"
        ],
        "correct": 1,
        "correctText": "ようになりました",
        "explanation": "( 聞こえるようになりました  (đã nghe được))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. しかし",
          "2. だから",
          "3. または",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "しかし",
        "explanation": "( しかし  (tuy nhiên))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. ですから",
          "2. しかし",
          "3. たとえば",
          "4. それでは"
        ],
        "correct": 1,
        "correctText": "ですから",
        "explanation": "( ですから  (vì vậy))"
      }
    ]
  },
  {
    "index": 32,
    "code": "N4-07",
    "level": "N4",
    "title": "Đề N4-07: Lời khuyên ほうがいいです  & Suy đoán でしょう‧かもしれません  (Bài 32) — Nguồn: Nihongo",
    "passage": "去年、わたしは 一人で 住む ように なりました。はじめは 毎日 べんとうを 買って いましたが、お金が【 16 】しまいまし た。それで、自分で 料理を【 17 】と 思いました。母に 電話を して、りょうりの しかたを 教えて【 18 】。今は やさいの りょうりを【 19 】ことが できます。来週は 友だちが 来ますから、【 20 】りょうりを ならって おきます。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "薬を 飲んだ( )、まだ 頭が いたいです。",
        "options": [
          "1. のに",
          "2. ので",
          "3. ほど",
          "4. なら"
        ],
        "correct": 1,
        "correctText": "のに",
        "explanation": "(Nghịch lý trái kỳ vọng 〜のに )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "この 薬は 大きくて 飲み( )です。",
        "options": [
          "1. にくい",
          "2. やすい",
          "3. すぎ",
          "4. たい"
        ],
        "correct": 1,
        "correctText": "にくい",
        "explanation": "(Khó làm: V ま す (bỏ ます ) + にくい )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "うしろの 人にも 聞こえる( )に、大きい 声で 話し てください。",
        "options": [
          "1. よう",
          "2. こと",
          "3. もの",
          "4. はず"
        ],
        "correct": 1,
        "correctText": "よう",
        "explanation": "(Mục đích khả năng: V るように )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "来月から 新しい 店で はたらく( )なりました。",
        "options": [
          "1. ことに",
          "2. ために",
          "3. ものに",
          "4. と\nころに"
        ],
        "correct": 1,
        "correctText": "ことに",
        "explanation": "(Được quyết định: V ることになりまし た )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "あそこに「さくら」( )名前の 店が あります。",
        "options": [
          "1. という",
          "2. といって",
          "3. といいながら",
          "4. といえば"
        ],
        "correct": 1,
        "correctText": "という",
        "explanation": "(Định danh: N1 という  N2)"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "となりの 部屋から ピアノの 音が( )。",
        "options": [
          "1. きこえます",
          "2. きけます",
          "3. ききま\nす",
          "4. きかせます"
        ],
        "correct": 1,
        "correctText": "きこえます",
        "explanation": "(Tự nhiên nghe thấy: きこえます )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "かべに カレンダーが( )あります。",
        "options": [
          "1. かけて",
          "2. かかって",
          "3. おいて",
          "4. は\nって"
        ],
        "correct": 1,
        "correctText": "かけて",
        "explanation": "(Trạng thái tha động từ かけてあります )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "ねつが ありますから、おふろに( )ほうが いいです よ。",
        "options": [
          "1. はいらない",
          "2. はいった",
          "3. はいる",
          "4. はいって"
        ],
        "correct": 1,
        "correctText": "はいらない",
        "explanation": "(Khuyên đừng làm: V ないほうがいいです )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "せつめいしょ( )とおりに、くみたてました。",
        "options": [
          "1. の",
          "2. な",
          "3. を",
          "4. に"
        ],
        "correct": 1,
        "correctText": "の",
        "explanation": "(N の  + とおりに (theo đúng như))"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "日本語は 勉強すれ( )するほど むずかしいです。",
        "options": [
          "1. ば",
          "2. たら",
          "3. と",
          "4. なら"
        ],
        "correct": 1,
        "correctText": "ば",
        "explanation": "(Càng... càng...: V ば V るほど )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "今は ___ ★ ___ ___ です。",
        "options": [
          "1. ない",
          "2. 何",
          "3. も",
          "4. 食べたく"
        ],
        "correct": 3,
        "correctText": "も",
        "explanation": "[2→3→4→1 (今は  何も  食べたくないです) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "日本語で ___ ___ ★ ___ いいですか。",
        "options": [
          "1. どう",
          "2. 書きたいんですが",
          "3. 手紙を",
          "4. 書いたら"
        ],
        "correct": 1,
        "correctText": "どう",
        "explanation": "[3→2→1→4 (手紙を  書きたいんですが  どう  書いたら) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "道が ___ ___ ★ ___ いいですよ。",
        "options": [
          "1. 行った",
          "2. 早く",
          "3. こむかもしれませ\nんから",
          "4. ほうが"
        ],
        "correct": 1,
        "correctText": "行った",
        "explanation": "[3→2→1→4 (こむかもしれませ んから  早く  行った  ほうが) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "家を ___ ___ ★ ___ います。",
        "options": [
          "1. ためて",
          "2. ために",
          "3. 買う",
          "4. お金\nを"
        ],
        "correct": 4,
        "correctText": "お金を",
        "explanation": "[3→2→4→1 (家を  買う  ために  お金を  ためて) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 本は ___ ___ ★ ___ できません。",
        "options": [
          "1. ことが",
          "2. 読む",
          "3. 小さくて",
          "4. 字\nが"
        ],
        "correct": 2,
        "correctText": "読む",
        "explanation": "[4→3→2→1 (字が  小さくて  読む  ことが  できません。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. なくなって",
          "2. なくなる",
          "3. なくなった",
          "4. なくなり"
        ],
        "correct": 1,
        "correctText": "なくなって",
        "explanation": "( なくなってしまいました  (hết sạch tiền))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. はじめよう",
          "2. はじめる",
          "3. はじめて",
          "4. はじめた"
        ],
        "correct": 1,
        "correctText": "はじめよう",
        "explanation": "( はじめようと思いました  (định bắt đầu))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. もらいました",
          "2. あげました",
          "3. やりました",
          "4. いきました"
        ],
        "correct": 1,
        "correctText": "もらいました",
        "explanation": "( 母に  教えてもらいました  (được mẹ dạy))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. つくる",
          "2. つくって",
          "3. つくった",
          "4. つくり"
        ],
        "correct": 1,
        "correctText": "つくる",
        "explanation": "( つくることができます  (có thể nấu))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. 新しい",
          "2. 新しさ",
          "3. 新しくて",
          "4. 新しいの"
        ],
        "correct": 1,
        "correctText": "新しい",
        "explanation": "( 新しい  りょうり  (món ăn mới))"
      }
    ]
  },
  {
    "index": 33,
    "code": "N4-08",
    "level": "N4",
    "title": "Đề N4-08: Thể mệnh lệnh, Cấm chỉ & Định nghĩa という‧という意味  (Bài 33) — Nguồn: Nihongo NET",
    "passage": "先週の 日曜日、父と 母と 海へ 行きました。電車が おくれたので、海まで 二時間【 16 】。天気が よくて、風も あまり【 17 】。ひるごはんは、海の 近くの 店で 魚を 食べました。とても【 18 】そうに 見えたので、二つも 注文しました。おな かが いっぱいに【 19 】しまいました。つかれましたが、楽しかったです。【 20 】また 行きたいです。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "音楽を( )ながら、そうじを します。",
        "options": [
          "1. 聞き",
          "2. 聞いて",
          "3. 聞く",
          "4. 聞いた"
        ],
        "correct": 1,
        "correctText": "聞き",
        "explanation": "(Song song: V ます (bỏ ます ) + ながら )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "まいにち 練習して、およげる( )。",
        "options": [
          "1. ようになりました",
          "2. ことにしました",
          "3. ところです",
          "4. つもりです"
        ],
        "correct": 1,
        "correctText": "ようになりまし た",
        "explanation": "(Biến đổi năng lực: ようになりました )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "リムさんは 今日 来ると 言っていましたから、もうすぐ 来る( )です。",
        "options": [
          "1. はず",
          "2. ため",
          "3. まま",
          "4. ながら"
        ],
        "correct": 1,
        "correctText": "はず",
        "explanation": "(Chắc chắn có căn cứ: V るはずです )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "「どうして おくれたんですか。」 ― 「バスが( )んで す。」",
        "options": [
          "1. 来なかった",
          "2. 来ませんでした",
          "3. 来\nないだ",
          "4. 来なくて"
        ],
        "correct": 1,
        "correctText": "来なかった",
        "explanation": "(Giải thích: V 普通形  + んです )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "この 店は 料理も おいしい( )、ねだんも やすいで す。",
        "options": [
          "1. し",
          "2. で",
          "3. から",
          "4. のに"
        ],
        "correct": 1,
        "correctText": "し",
        "explanation": "(Liệt kê đặc điểm/lý do 〜し )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "パーティーの まえに、ビールを( )おいて くださ い。",
        "options": [
          "1. ひやして",
          "2. ひえて",
          "3. あたためて",
          "4. わいて"
        ],
        "correct": 1,
        "correctText": "ひやして",
        "explanation": "(Chuẩn bị trước: ひやしておきます )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "くすりを( )ほうが いいですよ。",
        "options": [
          "1. のんだ",
          "2. のむ",
          "3. のんで",
          "4. のみ"
        ],
        "correct": 1,
        "correctText": "のんだ",
        "explanation": "(Khuyên nên làm: V たほうがいいです )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "けさは 朝ごはんを( )、学校へ 来ました。",
        "options": [
          "1. 食べないで",
          "2. 食べなくて",
          "3. 食べな\nい",
          "4. 食べず"
        ],
        "correct": 1,
        "correctText": "食べないで",
        "explanation": "(Làm V2 mà không làm V"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは まいにち 野菜を 食べる( )に していま す。",
        "options": [
          "1. よう",
          "2. こと",
          "3. もの",
          "4. ため"
        ],
        "correct": 1,
        "correctText": "よう",
        "explanation": "(Duy trì thói quen: V るようにしています )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "星を( )のは とても 楽しいです。",
        "options": [
          "1. みる",
          "2. みます",
          "3. みて",
          "4. みた"
        ],
        "correct": 1,
        "correctText": "みる",
        "explanation": "(Danh hóa động từ: V るのは )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "道が ___ ___ ★ ___ しまいました。",
        "options": [
          "1. 遅れて",
          "2. 会社に",
          "3. こんでいて",
          "4.\n電車が"
        ],
        "correct": 2,
        "correctText": "会社に",
        "explanation": "[3→4→2→1 (こ んでいて  電車が  会社に  遅れて) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "田中さんに ___ ___ ★ ___ ください。",
        "options": [
          "1. と",
          "2. 始まる",
          "3. 会議が",
          "4. 伝えて"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "[3→2→1→4 (会議が  始まる  と  伝えて) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは 友だちに ___ ___ ★ ___。",
        "options": [
          "1. 本を",
          "2. 新しい",
          "3. 買って",
          "4. あげ\nました"
        ],
        "correct": 3,
        "correctText": "買って",
        "explanation": "[2→1→3→4 (新しい  本を  買って  あげました。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "あしたは あさ 六時に ___ ___ ★ ___ なりませ ん。",
        "options": [
          "1. ので",
          "2. しなければ",
          "3. じゅんびを",
          "4. 出かける"
        ],
        "correct": 3,
        "correctText": "じゅんびを",
        "explanation": "[4→1→3→2 (出かけるので  じゅんびを  しなければ) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは 先生に ___ ___ ★ ___ もらいました。",
        "options": [
          "1. なおして",
          "2. 書いた",
          "3. まちがいを",
          "4. さくぶんの"
        ],
        "correct": 3,
        "correctText": "まちがいを",
        "explanation": "[2→4→3→1 (書いた  さくぶんの  まちがいを  なおして) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. かかりました",
          "2. かかります",
          "3. かけました",
          "4. かけます"
        ],
        "correct": 1,
        "correctText": "かかりました",
        "explanation": "(Quá khứ: 二時間かかりま した )"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. つよくなかったです",
          "2. つよかったです",
          "3. つよいでした",
          "4. つよくないでした"
        ],
        "correct": 1,
        "correctText": "つよくなかったです",
        "explanation": "( あまり  + つよくなかったです )"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. おいし",
          "2. おいしい",
          "3. おいしく",
          "4. おいしくて"
        ],
        "correct": 1,
        "correctText": "おいし",
        "explanation": "( おいしそうに見えた  (trông ngon))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. なって",
          "2. なり",
          "3. なる",
          "4. なった"
        ],
        "correct": 1,
        "correctText": "なって",
        "explanation": "( なってしまいました  (đã no căng))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. ぜひ",
          "2. けっして",
          "3. あまり",
          "4. 少しも"
        ],
        "correct": 1,
        "correctText": "ぜひ",
        "explanation": "( ぜひ  また  行きたいです  (nhất định muốn đi lại))"
      }
    ]
  },
  {
    "index": 34,
    "code": "N4-09",
    "level": "N4",
    "title": "Đề N4-09: Làm theo とおりに  & Sau khi たあとで‧ないで  (Bài 34) — Nguồn: Nihongo NET N4 Part 9",
    "passage": "花や 木の 世話を することは けんこうに いいと【 16 】います。また、花は かざる【 17 】でも 体に いいそうです。花を 見ると 気持ちが【 18 】なります。花は 色に よって ちがう 働きが ある【 19 】です。たとえば 赤や ⻩色の 花は 人を 元 気に して【 20 】そうです。( GoJapan N4 Đề 7 )",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "体に いいので、まいあさ 歩く( )しました。",
        "options": [
          "1. ことに",
          "2. ものに",
          "3. ところに",
          "4.\nはずに"
        ],
        "correct": 1,
        "correctText": "ことに",
        "explanation": "(Tự quyết định: V ることにしました )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "先生は もう うちへ( )か。",
        "options": [
          "1. お帰りになりました",
          "2. お帰りしまし\nた",
          "3. 帰ってあげました",
          "4. 帰られてい\nただきました"
        ],
        "correct": 1,
        "correctText": "お帰りになりま した",
        "explanation": "(Tôn kính ngữ: お V になります )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "わたしの 部屋の まどから 富士山が( )。",
        "options": [
          "1. みえます",
          "2. みます",
          "3. みられます",
          "4. みせます"
        ],
        "correct": 1,
        "correctText": "みえます",
        "explanation": "(Tự nhiên nhìn thấy: みえます )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "この いすは( )いますから、すわらないで くださ い。",
        "options": [
          "1. こわれて",
          "2. こわして",
          "3. われて",
          "4.\nやぶれて"
        ],
        "correct": 1,
        "correctText": "こわれて",
        "explanation": "(Trạng thái tự động từ こわれています )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "来週の 会議は 金曜日に( )予定です。",
        "options": [
          "1. おこなう",
          "2. おこなって",
          "3. おこない",
          "4. おこなった"
        ],
        "correct": 1,
        "correctText": "おこなう",
        "explanation": "(Kế hoạch: V る  + 予定です )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "この マークは「たばこを すうな」( )いみです。",
        "options": [
          "1. という",
          "2. といって",
          "3. といった",
          "4.\nというと"
        ],
        "correct": 1,
        "correctText": "という",
        "explanation": "(Giải thích nghĩa: 〜といういみです )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "天気が( )、向こうの 島が みえます。",
        "options": [
          "1. よければ",
          "2. いいば",
          "3. よいなら",
          "4.\nよくて"
        ],
        "correct": 1,
        "correctText": "よければ",
        "explanation": "(Thể điều kiện của いい  là よければ )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "この お酒は 米( )つくられて います。",
        "options": [
          "1. から",
          "2. で",
          "3. に",
          "4. を"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "(Nguyên liệu biến đổi chất dùng から )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "ゆうべ まどを( )のを わすれました。",
        "options": [
          "1. しめる",
          "2. しめた",
          "3. しめて",
          "4. し\nめ"
        ],
        "correct": 1,
        "correctText": "しめる",
        "explanation": "(Quên làm gì: V るのを  わすれました )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "会議が 何時に( )か、わかりません。",
        "options": [
          "1. おわる",
          "2. おわります",
          "3. おわれ",
          "4.\nおわろう"
        ],
        "correct": 1,
        "correctText": "おわる",
        "explanation": "(Câu hỏi gián tiếp: V 普通形  + か )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "家を ___ ___ ★ ___ います。",
        "options": [
          "1. ためて",
          "2. ために",
          "3. 買う",
          "4. お金\nを"
        ],
        "correct": 4,
        "correctText": "お金を",
        "explanation": "[3→2→4→1 (家を  買 う  ために  お金を  ためて) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 本は ___ ___ ★ ___ できません。",
        "options": [
          "1. ことが",
          "2. 読む",
          "3. 小さくて",
          "4. 字\nが"
        ],
        "correct": 2,
        "correctText": "読む",
        "explanation": "[4→3→2→1 (字が  小さくて  読む  ことが  できません。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "友だちが 来る ___ ___ ★ ___ おきました。",
        "options": [
          "1. して",
          "2. そうじを",
          "3. まえに",
          "4. 部\n屋の"
        ],
        "correct": 2,
        "correctText": "そうじを",
        "explanation": "[3→4→2→1 (まえに  部屋の  そうじを  して) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ は リムさんです。",
        "options": [
          "1. 人",
          "2. いる",
          "3. あそこで",
          "4. 話して"
        ],
        "correct": 2,
        "correctText": "いる",
        "explanation": "[3→4→2→1 (あそこで  話して  いる  人は) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ___ ★ ___ なりました。",
        "options": [
          "1. ように",
          "2. 少し",
          "3. 話せる",
          "4. 日本\n語が"
        ],
        "correct": 3,
        "correctText": "話せ る",
        "explanation": "[4→2→3→1 (日本語が  少し  話せる  ように) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. 言われて",
          "2. 言って",
          "3. 言わせて",
          "4. 言えて"
        ],
        "correct": 1,
        "correctText": "言われて",
        "explanation": "( 〜と言われています  (được cho là))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. だけ",
          "2. しか",
          "3. ほど",
          "4. ばかり"
        ],
        "correct": 1,
        "correctText": "だけ",
        "explanation": "( かざ るだけでも  (chỉ cần trang trí thôi cũng))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. よく",
          "2. いい",
          "3. よい",
          "4. よくて"
        ],
        "correct": 1,
        "correctText": "よく",
        "explanation": "( 気持ちが  よくなります  (tâm trạng tốt lên))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. そう",
          "2. よう",
          "3. はず",
          "4. つもり"
        ],
        "correct": 1,
        "correctText": "そう",
        "explanation": "( あるそう です  (nghe nói là có))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. くれる",
          "2. あげる",
          "3. もらう",
          "4. やる"
        ],
        "correct": 1,
        "correctText": "くれる",
        "explanation": "( 元気にしてくれる  (làm cho mình khỏe khoắn))"
      }
    ]
  },
  {
    "index": 35,
    "code": "N4-10",
    "level": "N4",
    "title": "Đề N4-10: Thể điều kiện ( 条件形  〜ば‧〜なら ) & ば〜ほど  (Bài 35) — Nguồn: Nihongo NET N4 Part 10",
    "passage": "日本の 夏は あつくて むしあついです。だから、エアコンを【 16 】まま 寝る 人が 多いです。【 17 】、体には あまり よく ありません。かぜを ひかない【 18 】に、寝る まえに タイマーを セットして【 19 】ほうが いいです。また、朝 起きたら コップ 一杯の 水を【 20 】ように しましょう。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "あそこに「さくら」( )名前の 店が あります。",
        "options": [
          "1. という",
          "2. といって",
          "3. といいながら",
          "4. といえば"
        ],
        "correct": 1,
        "correctText": "という",
        "explanation": "(Định danh: N1 という  N2)"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "となりの 部屋から ピアノの 音が( )。",
        "options": [
          "1. きこえます",
          "2. きけます",
          "3. ききま\nす",
          "4. きかせます"
        ],
        "correct": 1,
        "correctText": "きこえます",
        "explanation": "(Tự nhiên nghe thấy: きこえます )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "かべに カレンダーが( )あります。",
        "options": [
          "1. かけて",
          "2. かかって",
          "3. おいて",
          "4. は\nって"
        ],
        "correct": 1,
        "correctText": "かけて",
        "explanation": "(Trạng thái tha động từ かけてあります )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "ねつが ありますから、おふろに( )ほうが いいです よ。",
        "options": [
          "1. はいらない",
          "2. はいった",
          "3. はいる",
          "4. はいって"
        ],
        "correct": 1,
        "correctText": "はいらない",
        "explanation": "(Khuyên đừng làm: V ないほうがいいです )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "せつめいしょ( )とおりに、くみたてました。",
        "options": [
          "1. の",
          "2. な",
          "3. を",
          "4. に"
        ],
        "correct": 1,
        "correctText": "の",
        "explanation": "(N の  + とおりに  (theo đúng như))"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "日本語は 勉強すれ( )するほど むずかしいです。",
        "options": [
          "1. ば",
          "2. たら",
          "3. と",
          "4. なら"
        ],
        "correct": 1,
        "correctText": "ば",
        "explanation": "(Càng... càng...: V ば V るほど )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "出かけていた とき、弟に にっきを( )しまいまし た。",
        "options": [
          "1. 読まれて",
          "2. 読んで",
          "3. 読ませて",
          "4.\n読めて"
        ],
        "correct": 1,
        "correctText": "読まれて",
        "explanation": "(Bị động phiền toái: 読まれてしまいました )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "ニュースを( )、びっくりしました。",
        "options": [
          "1. 聞いて",
          "2. 聞くので",
          "3. 聞くと",
          "4.\n聞くから"
        ],
        "correct": 1,
        "correctText": "聞いて",
        "explanation": "(Nguyên nhân cảm xúc: V て、びっくりしました )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "この 話が ほんとう( )、しらべて みます。",
        "options": [
          "1. かどうか",
          "2. なのか",
          "3. だか",
          "4. か\nどう"
        ],
        "correct": 1,
        "correctText": "かどう か",
        "explanation": "(Câu hỏi nghi vấn có/không: かどうか )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "すみませんが、もう 一度 せつめいして( )ません か。",
        "options": [
          "1. いただけ",
          "2. くださり",
          "3. もらい",
          "4.\nあげ"
        ],
        "correct": 1,
        "correctText": "いただけ",
        "explanation": "(Nhờ lịch sự: V ていただけませんか )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "あしたは あさ 六時に ___ ___ ★ ___ なりませ ん。",
        "options": [
          "1. ので",
          "2. しなければ",
          "3. じゅんびを",
          "4. 出かける"
        ],
        "correct": 3,
        "correctText": "じゅんびを",
        "explanation": "[4→1→3→2 (出かけるので  じゅんびを  しなければ) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは 先生に ___ ___ ★ ___ もらいました。",
        "options": [
          "1. なおして",
          "2. 書いた",
          "3. まちがいを",
          "4. さくぶんの"
        ],
        "correct": 3,
        "correctText": "まちがいを",
        "explanation": "[2→4→3→1 (書いた  さくぶんの  まちがいを なおして) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 道を ___ ___ ★ ___、駅が あります。",
        "options": [
          "1. まがると",
          "2. 右に",
          "3. まっすぐ",
          "4.\n行って"
        ],
        "correct": 2,
        "correctText": "右に",
        "explanation": "[3→4→2→1 (まっすぐ  行って  右に  まがると) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "来月 ___ ___ ★ ___ と 思って います。",
        "options": [
          "1. 買おう",
          "2. 新しい",
          "3. じてんしゃを",
          "4. 自分の"
        ],
        "correct": 3,
        "correctText": "じてんしゃを",
        "explanation": "[4→2→3→1 (自分の 新しい  じてんしゃを  買おう) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 薬は ___ ___ ★ ___ です。",
        "options": [
          "1. にくい",
          "2. 飲み",
          "3. とても",
          "4. 大きす\nぎて"
        ],
        "correct": 2,
        "correctText": "飲み",
        "explanation": "[4→3→2→1 (大きすぎて  とても  飲み  にくいです) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. つけた",
          "2. つける",
          "3. つけて",
          "4. つき"
        ],
        "correct": 1,
        "correctText": "つけた",
        "explanation": "(V た  + まま  (để nguyên trạng thái bật))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. しかし",
          "2. ですから",
          "3. それに",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "しかし",
        "explanation": "( しかし  (tuy nhiên lại không tốt cho cơ thể))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. よう",
          "2. ため",
          "3. こと",
          "4. はず"
        ],
        "correct": 1,
        "correctText": "よう",
        "explanation": "( かぜをひかな いように  (để không bị cảm))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. おいた",
          "2. あった",
          "3. みた",
          "4. いた"
        ],
        "correct": 1,
        "correctText": "おいた",
        "explanation": "( セットしておいたほうがいい  (nên hẹn giờ sẵn))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. 飲む",
          "2. 飲んだ",
          "3. 飲んで",
          "4. 飲み"
        ],
        "correct": 1,
        "correctText": "飲む",
        "explanation": "(V るようにし ましょう  (hãy cố gắng duy trì))"
      }
    ]
  },
  {
    "index": 36,
    "code": "N4-11",
    "level": "N4",
    "title": "Đề N4-11: Mục đích ように  & Biến đổi năng lực ようになりました  (Bài 36) — Nguồn: Nihongo NET N4",
    "passage": "わたしは 去年の 春に 日本へ 来ました。はじめは 店の 人が 言った ことが わからなくて、【 16 】。それで、まいにち テレ ビを 見ながら、日本語を【 17 】ことに しました。半年 つづけたら、少しずつ 聞こえる【 18 】。今は 友だちと 日本語で 話せます。【 19 】、まだ 漢字は むずかしいです。来年は 日本の 大学に 入りたいです。【 20 】、これからも まいにち がん ばります。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "この 店は 料理も おいしい( )、ねだんも やすいで す。",
        "options": [
          "1. し",
          "2. で",
          "3. から",
          "4. のに"
        ],
        "correct": 1,
        "correctText": "し",
        "explanation": "(Liệt kê đặc điểm/lý do 〜し )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "パーティーの まえに、ビールを( )おいて くださ い。",
        "options": [
          "1. ひやして",
          "2. ひえて",
          "3. あたためて",
          "4. わいて"
        ],
        "correct": 1,
        "correctText": "ひやして",
        "explanation": "(Chuẩn bị trước: ひやしておきます )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "くすりを( )ほうが いいですよ。",
        "options": [
          "1. のんだ",
          "2. のむ",
          "3. のんで",
          "4. のみ"
        ],
        "correct": 1,
        "correctText": "のんだ",
        "explanation": "(Khuyên nên làm: V たほうがいいです )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "けさは 朝ごはんを( )、学校へ 来ました。",
        "options": [
          "1. 食べないで",
          "2. 食べなくて",
          "3. 食べな\nい",
          "4. 食べず"
        ],
        "correct": 1,
        "correctText": "食べないで",
        "explanation": "(Làm V2 mà không làm V"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは まいにち 野菜を 食べる( )に していま す。",
        "options": [
          "1. よう",
          "2. こと",
          "3. もの",
          "4. ため"
        ],
        "correct": 1,
        "correctText": "よう",
        "explanation": "(Duy trì thói quen: V るようにしています )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "星を( )のは とても 楽しいです。",
        "options": [
          "1. みる",
          "2. みます",
          "3. みて",
          "4. みた"
        ],
        "correct": 1,
        "correctText": "みる",
        "explanation": "(Danh hóa động từ: V るのは )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "地震( )ビルが たおれました。",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "(Nguyên nhân thiên tai/tai nạn: N で )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 部⻑に おみやげを( )。",
        "options": [
          "1. いただきました",
          "2. くださいました",
          "3. さしあげました",
          "4. もらいました"
        ],
        "correct": 1,
        "correctText": "いただきました",
        "explanation": "(Nhận từ cấp trên: いただきました )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "この はさみは 花を( )のに つかいます。",
        "options": [
          "1. 切る",
          "2. 切って",
          "3. 切り",
          "4. 切った"
        ],
        "correct": 1,
        "correctText": "切る",
        "explanation": "(Công dụng: V るのに  つかいます )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "音が 大きいですね。もう すこし( )して ください。",
        "options": [
          "1. 小さく",
          "2. 小さいに",
          "3. 小さくて",
          "4.\n小さい"
        ],
        "correct": 1,
        "correctText": "小さく",
        "explanation": "(Biến đổi tính chất: A い ( く ) + します )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ は リムさんです。",
        "options": [
          "1. 人",
          "2. いる",
          "3. あそこで",
          "4. 話して"
        ],
        "correct": 2,
        "correctText": "いる",
        "explanation": "[3→4→2→1 (あそこで 話して  いる  人は) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ___ ★ ___ なりました。",
        "options": [
          "1. ように",
          "2. 少し",
          "3. 話せる",
          "4. 日本\n語が"
        ],
        "correct": 3,
        "correctText": "話せる",
        "explanation": "[4→2→3→1 (日本語が  少し  話せる  ように) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "雨が ___ ___ ★ ___ しました。",
        "options": [
          "1. ことに",
          "2. 行かない",
          "3. ふって",
          "4.\nいるので"
        ],
        "correct": 2,
        "correctText": "行かない",
        "explanation": "[3→4→2→1 (ふ って  いるので  行かない  ことに) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ います。",
        "options": [
          "1. まって",
          "2. 来るのを",
          "3. わたしは",
          "4.\n友だちが"
        ],
        "correct": 2,
        "correctText": "来るのを",
        "explanation": "[3→4→2→1 (わたしは  友だちが  来るのを  まって) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "毎日 ___ ★ ___ ___ ね。",
        "options": [
          "1. ふって",
          "2. ばかり",
          "3. 雨",
          "4. います"
        ],
        "correct": 2,
        "correctText": "ばか り",
        "explanation": "[3→2→1→4 (毎日  雨  ばかり  ふって  いますね) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. こまってしまいました",
          "2. こまってあげました",
          "3. こまってくれました",
          "4. こまって\nみました"
        ],
        "correct": 1,
        "correctText": "こまってしまいました",
        "explanation": "( こまってしまいました  (lỡ lâm vào thế bí))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. 練習する",
          "2. 練習した",
          "3. 練習して",
          "4. 練習し"
        ],
        "correct": 1,
        "correctText": "練習する",
        "explanation": "(V ることにしました  (tự quyết định))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. ようになりました",
          "2. ことになりました",
          "3. ところでした",
          "4. はずでした"
        ],
        "correct": 1,
        "correctText": "ようになりました",
        "explanation": "( 聞こえるようになりました  (đã nghe được))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. しかし",
          "2. だから",
          "3. または",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "しかし",
        "explanation": "( しかし  (tuy nhiên))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. ですから",
          "2. しかし",
          "3. たとえば",
          "4. それでは"
        ],
        "correct": 1,
        "correctText": "ですから",
        "explanation": "( ですから  (vì vậy))"
      }
    ]
  },
  {
    "index": 37,
    "code": "N4-12",
    "level": "N4",
    "title": "Đề N4-12: Thể bị động ( 受身動詞  — Trực tiếp & Sở hữu — Bài 37) — Nguồn: Nihongo NET N4 Part 12",
    "passage": "去年、わたしは 一人で 住む ように なりました。はじめは 毎日 べんとうを 買って いましたが、お金が【 16 】しまいまし た。それで、自分で 料理を【 17 】と 思いました。母に 電話を して、りょうりの しかたを 教えて【 18 】。今は やさいの りょうりを【 19 】ことが できます。来週は 友だちが 来ますから、【 20 】りょうりを ならって おきます。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "来週の 会議は 金曜日に( )予定です。",
        "options": [
          "1. おこなう",
          "2. おこなって",
          "3. おこない",
          "4. おこなった"
        ],
        "correct": 1,
        "correctText": "おこなう",
        "explanation": "(Kế hoạch: V る  + 予定です )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "この マークは「たばこを すうな」( )いみです。",
        "options": [
          "1. という",
          "2. といって",
          "3. といった",
          "4.\nというと"
        ],
        "correct": 1,
        "correctText": "という",
        "explanation": "(Giải thích nghĩa: 〜といういみです )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "天気が( )、向こうの 島が みえます。",
        "options": [
          "1. よければ",
          "2. いいば",
          "3. よいなら",
          "4.\nよくて"
        ],
        "correct": 1,
        "correctText": "よければ",
        "explanation": "(Thể điều kiện của いい  là よければ )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "この お酒は 米( )つくられて います。",
        "options": [
          "1. から",
          "2. で",
          "3. に",
          "4. を"
        ],
        "correct": 1,
        "correctText": "から",
        "explanation": "(Nguyên liệu biến đổi chất dùng から )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "ゆうべ まどを( )のを わすれました。",
        "options": [
          "1. しめる",
          "2. しめた",
          "3. しめて",
          "4. し\nめ"
        ],
        "correct": 1,
        "correctText": "しめる",
        "explanation": "(Quên làm gì: V るのを  わすれました )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "会議が 何時に( )か、わかりません。",
        "options": [
          "1. おわる",
          "2. おわります",
          "3. おわれ",
          "4.\nおわろう"
        ],
        "correct": 1,
        "correctText": "おわる",
        "explanation": "(Câu hỏi gián tiếp: V 普通形  + か )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "先生の 奥さんが わたしに お茶を おしえて( )。",
        "options": [
          "1. くださいました",
          "2. いただきました",
          "3. さしあげました",
          "4. あげました"
        ],
        "correct": 1,
        "correctText": "くだ さいました",
        "explanation": "(Bề trên làm cho mình: V てくださいました )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "今にも 雨が( )そうです。かさを もって 行きましょ う。",
        "options": [
          "1. ふり",
          "2. ふる",
          "3. ふって",
          "4. ふった"
        ],
        "correct": 1,
        "correctText": "ふり",
        "explanation": "(Sắp xảy ra: V ます (bỏ ます ) + そうです )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "火事( )場合は、エレベーターを つかわないで くだ さい。",
        "options": [
          "1. の",
          "2. な",
          "3. だ",
          "4. に"
        ],
        "correct": 1,
        "correctText": "の",
        "explanation": "(N の  + 場合は  (trong trường hợp))"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "その ニュースは さっき 聞いた( )です。",
        "options": [
          "1. ばかり",
          "2. ところ",
          "3. はず",
          "4. つも\nり"
        ],
        "correct": 1,
        "correctText": "ばかり",
        "explanation": "(Vừa mới: V たばかりです )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "来月 ___ ___ ★ ___ と 思って います。",
        "options": [
          "1. 買おう",
          "2. 新しい",
          "3. じてんしゃを",
          "4. 自分の"
        ],
        "correct": 3,
        "correctText": "じてんしゃを",
        "explanation": "[4→2→3→1 (自分 の  新しい  じてんしゃを  買おう) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 薬は ___ ___ ★ ___ です。",
        "options": [
          "1. にくい",
          "2. 飲み",
          "3. とても",
          "4. 大きす\nぎて"
        ],
        "correct": 2,
        "correctText": "飲み",
        "explanation": "[4→3→2→1 (大きすぎて  とても  飲み  にくいです) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "富士山が ___ ___ ___ ★ 知っていますか。",
        "options": [
          "1. か",
          "2. どこ",
          "3. に",
          "4. ある"
        ],
        "correct": 1,
        "correctText": "か",
        "explanation": "[2→3→4→1 (どこ  に  ある  か  知っていますか) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "音楽を ___ ★ ___ ___ 飲みました。",
        "options": [
          "1. を",
          "2. ながら",
          "3. 聞き",
          "4. コーヒー"
        ],
        "correct": 2,
        "correctText": "ながら",
        "explanation": "[3→2→4→1 (音楽を  聞き  ながら  コーヒーを) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "私の ___ ___ ___ ★ よく 飲まれています。",
        "options": [
          "1. ワイン",
          "2. この",
          "3. が",
          "4. 国では"
        ],
        "correct": 3,
        "correctText": "が",
        "explanation": "[4→2→1→3 (私の  国では  この  ワインが) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. なくなって",
          "2. なくなる",
          "3. なくなった",
          "4. なくなり"
        ],
        "correct": 1,
        "correctText": "なくなって",
        "explanation": "( なくなってしまいました  (hết sạch tiền))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. はじめよう",
          "2. はじめる",
          "3. はじめて",
          "4. はじめた"
        ],
        "correct": 1,
        "correctText": "は じめよう",
        "explanation": "( はじめようと思いました  (định bắt đầu))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. もらいました",
          "2. あげました",
          "3. やりました",
          "4. いきました"
        ],
        "correct": 1,
        "correctText": "もらいました",
        "explanation": "( 母に  教えてもらいました  (được mẹ dạy))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. つくる",
          "2. つくって",
          "3. つくった",
          "4. つくり"
        ],
        "correct": 1,
        "correctText": "つくる",
        "explanation": "( つくることができます  (có thể nấu))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. 新しい",
          "2. 新しさ",
          "3. 新しくて",
          "4. 新しいの"
        ],
        "correct": 1,
        "correctText": "新しい",
        "explanation": "( 新しい  りょうり  (món ăn mới))"
      }
    ]
  },
  {
    "index": 38,
    "code": "N4-13",
    "level": "N4",
    "title": "Đề N4-13: Danh hóa mệnh đề bằng の  ( 〜のは‧〜のが‧〜のを  — Bài 38) — Nguồn: Nihongo NET N4",
    "passage": "先週の 日曜日、父と 母と 海へ 行きました。電車が おくれたので、海まで 二時間【 16 】。天気が よくて、風も あまり【 17 】。ひるごはんは、海の 近くの 店で 魚を 食べました。とても【 18 】そうに 見えたので、二つも 注文しました。おな かが いっぱいに【 19 】しまいました。つかれましたが、楽しかったです。【 20 】また 行きたいです。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "せつめいしょ( )とおりに、くみたてました。",
        "options": [
          "1. の",
          "2. な",
          "3. を",
          "4. に"
        ],
        "correct": 1,
        "correctText": "の",
        "explanation": "(N の  + とおりに  (theo đúng như))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "日本語は 勉強すれ( )するほど むずかしいです。",
        "options": [
          "1. ば",
          "2. たら",
          "3. と",
          "4. なら"
        ],
        "correct": 1,
        "correctText": "ば",
        "explanation": "(Càng... càng...: V ば V るほど )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "出かけていた とき、弟に にっきを( )しまいまし た。",
        "options": [
          "1. 読まれて",
          "2. 読んで",
          "3. 読ませて",
          "4.\n読めて"
        ],
        "correct": 1,
        "correctText": "読まれて",
        "explanation": "(Bị động phiền toái: 読まれてしまいました )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "ニュースを( )、びっくりしました。",
        "options": [
          "1. 聞いて",
          "2. 聞くので",
          "3. 聞くと",
          "4.\n聞くから"
        ],
        "correct": 1,
        "correctText": "聞いて",
        "explanation": "(Nguyên nhân cảm xúc: V て、びっ くりしました )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "この 話が ほんとう( )、しらべて みます。",
        "options": [
          "1. かどうか",
          "2. なのか",
          "3. だか",
          "4. か\nどう"
        ],
        "correct": 1,
        "correctText": "かどうか",
        "explanation": "(Câu hỏi nghi vấn có/không: かどうか )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "すみませんが、もう 一度 せつめいして( )ません か。",
        "options": [
          "1. いただけ",
          "2. くださり",
          "3. もらい",
          "4.\nあげ"
        ],
        "correct": 1,
        "correctText": "いただけ",
        "explanation": "(Nhờ lịch sự: V ていただけません か )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "ちょっと たばこを( )来ますから、待っていてくだ さい。",
        "options": [
          "1. 買って",
          "2. 買いに",
          "3. 買い",
          "4. 買う"
        ],
        "correct": 1,
        "correctText": "買って",
        "explanation": "(Đi làm rồi quay lại: V て来ます )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "日曜日は 休み( )のに、働かなければ なりません。",
        "options": [
          "1. な",
          "2. の",
          "3. だ",
          "4. で"
        ],
        "correct": 1,
        "correctText": "な",
        "explanation": "(Danh từ/A な  + な  + のに )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "玄関で( )が します。だれか 来たようです。",
        "options": [
          "1. 音",
          "2. 声",
          "3. におい",
          "4. 味"
        ],
        "correct": 1,
        "correctText": "音",
        "explanation": "(Cảm giác thính giác: 音 がします )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "社⻑は もう この ニュースを( )か。",
        "options": [
          "1. ご存じです",
          "2. 知っています",
          "3. お知\nりになります",
          "4. 存じています"
        ],
        "correct": 1,
        "correctText": "ご存じです",
        "explanation": "(Tôn kính ngữ của 知っています  là ご存じです )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ います。",
        "options": [
          "1. まって",
          "2. 来るのを",
          "3. わたしは",
          "4.\n友だちが"
        ],
        "correct": 2,
        "correctText": "来るのを",
        "explanation": "[3→4→2→1 (わたしは 友だちが  来るのを  まって) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "毎日 ___ ★ ___ ___ ね。",
        "options": [
          "1. ふって",
          "2. ばかり",
          "3. 雨",
          "4. います"
        ],
        "correct": 2,
        "correctText": "ばかり",
        "explanation": "[3→2→1→4 (毎日  雨  ばかり  ふって  いますね) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "ゲーム ___ ★ ___ ___ 勉強しなさい。",
        "options": [
          "1. していない",
          "2. すこしは",
          "3. で",
          "4.\nばかり"
        ],
        "correct": 1,
        "correctText": "していない",
        "explanation": "[4→1→3→2 (ゲームばかり  していないで  すこしは) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "リーさんは だれか ★ ___ ___ ___ ぬすまれまし た。",
        "options": [
          "1. に",
          "2. ノートパソコン",
          "3. を",
          "4. 大\n事な"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "[1→4→2→3 (だれかに  大事な  ノートパソコンを) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "リーさんは 田中さんの ___ ___ ★ ___ 思ってい ます。",
        "options": [
          "1. を",
          "2. 聞かせて",
          "3. ほしいと",
          "4. 歌"
        ],
        "correct": 2,
        "correctText": "聞かせて",
        "explanation": "[4→1→2→3 (歌を  聞かせて  ほしいと) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. かかりました",
          "2. かかります",
          "3. かけました",
          "4. かけます"
        ],
        "correct": 1,
        "correctText": "かかりました",
        "explanation": "(Quá khứ: 二時間かかりました )"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. つよくなかったです",
          "2. つよかったです",
          "3. つよいでした",
          "4. つよくないでした"
        ],
        "correct": 1,
        "correctText": "つよくなかったです",
        "explanation": "( あまり  + つよくなかったです )"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. おいし",
          "2. おいしい",
          "3. おいしく",
          "4. おいしくて"
        ],
        "correct": 1,
        "correctText": "おいし",
        "explanation": "( おいしそうに見えた  (trông ngon))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. なって",
          "2. なり",
          "3. なる",
          "4. なった"
        ],
        "correct": 1,
        "correctText": "なって",
        "explanation": "( なってしまいました  (đã no căng))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. ぜひ",
          "2. けっして",
          "3. あまり",
          "4. 少しも"
        ],
        "correct": 1,
        "correctText": "ぜひ",
        "explanation": "( ぜひ  また  行きたいです  (nhất định muốn đi lại))"
      }
    ]
  },
  {
    "index": 39,
    "code": "N4-14",
    "level": "N4",
    "title": "Đề N4-14: Nguyên nhân て‧くて‧で  & Liên từ ので  (Bài 39) — Nguồn: Nihongo NET N4 Part 14",
    "passage": "花や 木の 世話を することは けんこうに いいと【 16 】います。また、花は かざる【 17 】でも 体に いいそうです。花を 見ると 気持ちが【 18 】なります。花は 色に よって ちがう 働きが ある【 19 】です。たとえば 赤や ⻩色の 花は 人を 元 気に して【 20 】そうです。( GoJapan N4 Đề 7 )",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは まいにち 野菜を 食べる( )に していま す。",
        "options": [
          "1. よう",
          "2. こと",
          "3. もの",
          "4. ため"
        ],
        "correct": 1,
        "correctText": "よう",
        "explanation": "(Duy trì thói quen: V るようにしています )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "星を( )のは とても 楽しいです。",
        "options": [
          "1. みる",
          "2. みます",
          "3. みて",
          "4. みた"
        ],
        "correct": 1,
        "correctText": "みる",
        "explanation": "(Danh hóa động từ: V るのは )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "地震( )ビルが たおれました。",
        "options": [
          "1. で",
          "2. に",
          "3. を",
          "4. へ"
        ],
        "correct": 1,
        "correctText": "で",
        "explanation": "(Nguyên nhân thiên tai/tai nạn: N で )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 部⻑に おみやげを( )。",
        "options": [
          "1. いただきました",
          "2. くださいました",
          "3. さしあげました",
          "4. もらいました"
        ],
        "correct": 1,
        "correctText": "いただきました",
        "explanation": "(Nhận từ cấp trên: いただ きました )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "この はさみは 花を( )のに つかいます。",
        "options": [
          "1. 切る",
          "2. 切って",
          "3. 切り",
          "4. 切った"
        ],
        "correct": 1,
        "correctText": "切る",
        "explanation": "(Công dụng: V るのに  つかいます )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "音が 大きいですね。もう すこし( )して ください。",
        "options": [
          "1. 小さく",
          "2. 小さいに",
          "3. 小さくて",
          "4.\n小さい"
        ],
        "correct": 1,
        "correctText": "小さく",
        "explanation": "(Biến đổi tính chất: A い ( く ) + します )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "「もう 食べましたか。」 ― 「いいえ、今から( )とこ ろです。」",
        "options": [
          "1. 食べる",
          "2. 食べた",
          "3. 食べている",
          "4.\n食べよう"
        ],
        "correct": 1,
        "correctText": "食べ る",
        "explanation": "(Chuẩn bị làm: 今から  V るところです )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "部⻑は 田中さんを 大阪へ 出張( )ました。",
        "options": [
          "1. させ",
          "2. され",
          "3. し",
          "4. でき"
        ],
        "correct": 1,
        "correctText": "させ",
        "explanation": "(Sai khiến: 出張させました )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "先生は なんと( )ましたか。",
        "options": [
          "1. おっしゃい",
          "2. もうし",
          "3. いい",
          "4.\nうかがい"
        ],
        "correct": 1,
        "correctText": "おっしゃい",
        "explanation": "(Tôn kính ngữ của 言います  là おっしゃいます )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "タクシーで 行けば パーティーの 時間に( )そうで す。",
        "options": [
          "1. まにあい",
          "2. つき",
          "3. おくれ",
          "4. 行\nき"
        ],
        "correct": 1,
        "correctText": "まにあい",
        "explanation": "( まにあいそうです  (có vẻ sẽ kịp giờ))"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "音楽を ___ ★ ___ ___ 飲みました。",
        "options": [
          "1. を",
          "2. ながら",
          "3. 聞き",
          "4. コーヒー"
        ],
        "correct": 2,
        "correctText": "ながら",
        "explanation": "[3→2→4→1 (音楽 を  聞き  ながら  コーヒーを) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "私の ___ ___ ___ ★ よく 飲まれています。",
        "options": [
          "1. ワイン",
          "2. この",
          "3. が",
          "4. 国では"
        ],
        "correct": 3,
        "correctText": "が",
        "explanation": "[4→2→1→3 (私の  国では  この  ワインが) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "今は ___ ★ ___ ___ です。",
        "options": [
          "1. ない",
          "2. 何",
          "3. も",
          "4. 食べたく"
        ],
        "correct": 3,
        "correctText": "も",
        "explanation": "[2→3→4→1 (今は  何 も  食べたくないです) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "日本語で ___ ___ ★ ___ いいですか。",
        "options": [
          "1. どう",
          "2. 書きたいんですが",
          "3. 手紙を",
          "4. 書いたら"
        ],
        "correct": 1,
        "correctText": "どう",
        "explanation": "[3→2→1→4 (手紙を  書きたいんですが  どう  書いたら) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "道が ___ ___ ★ ___ いいですよ。",
        "options": [
          "1. 行った",
          "2. 早く",
          "3. こむかもしれませ\nんから",
          "4. ほうが"
        ],
        "correct": 1,
        "correctText": "行った",
        "explanation": "[3→2→1→4 (こむかもしれませんから  早く  行った  ほうが) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. 言われて",
          "2. 言って",
          "3. 言わせて",
          "4. 言えて"
        ],
        "correct": 1,
        "correctText": "言われて",
        "explanation": "( 〜と言われています  (được cho là))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. だけ",
          "2. しか",
          "3. ほど",
          "4. ばかり"
        ],
        "correct": 1,
        "correctText": "だけ",
        "explanation": "( かざるだけでも  (chỉ cần trang trí thôi cũng))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. よく",
          "2. いい",
          "3. よい",
          "4. よくて"
        ],
        "correct": 1,
        "correctText": "よく",
        "explanation": "( 気持ちが  よくなります  (tâm trạng tốt lên))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. そう",
          "2. よう",
          "3. はず",
          "4. つもり"
        ],
        "correct": 1,
        "correctText": "そ う",
        "explanation": "( あるそうです  (nghe nói là có))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. くれる",
          "2. あげる",
          "3. もらう",
          "4. やる"
        ],
        "correct": 1,
        "correctText": "くれる",
        "explanation": "( 元気にしてくれる  (làm cho mình khỏe khoắn))"
      }
    ]
  },
  {
    "index": 40,
    "code": "N4-15",
    "level": "N4",
    "title": "Đề N4-15: Câu hỏi gián tiếp か‧かどうか  & Làm thử てみます  (Bài 40) — Nguồn: Nihongo NET N4 Part",
    "passage": "日本の 夏は あつくて むしあついです。だから、エアコンを【 16 】まま 寝る 人が 多いです。【 17 】、体には あまり よく ありません。かぜを ひかない【 18 】に、寝る まえに タイマーを セットして【 19 】ほうが いいです。また、朝 起きたら コップ 一杯の 水を【 20 】ように しましょう。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "ゆうべ まどを( )のを わすれました。",
        "options": [
          "1. しめる",
          "2. しめた",
          "3. しめて",
          "4. し\nめ"
        ],
        "correct": 1,
        "correctText": "しめる",
        "explanation": "(Quên làm gì: V るのを  わすれました )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "会議が 何時に( )か、わかりません。",
        "options": [
          "1. おわる",
          "2. おわります",
          "3. おわれ",
          "4.\nおわろう"
        ],
        "correct": 1,
        "correctText": "おわる",
        "explanation": "(Câu hỏi gián tiếp: V 普通形  + か )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "先生の 奥さんが わたしに お茶を おしえて( )。",
        "options": [
          "1. くださいました",
          "2. いただきました",
          "3. さしあげました",
          "4. あげました"
        ],
        "correct": 1,
        "correctText": "くださいました",
        "explanation": "(Bề trên làm cho mình: V てくださいました )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "今にも 雨が( )そうです。かさを もって 行きましょ う。",
        "options": [
          "1. ふり",
          "2. ふる",
          "3. ふって",
          "4. ふった"
        ],
        "correct": 1,
        "correctText": "ふり",
        "explanation": "(Sắp xảy ra: V ます (bỏ ます ) + そうです )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "火事( )場合は、エレベーターを つかわないで くだ さい。",
        "options": [
          "1. の",
          "2. な",
          "3. だ",
          "4. に"
        ],
        "correct": 1,
        "correctText": "の",
        "explanation": "(N の  + 場合は  (trong trường hợp))"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "その ニュースは さっき 聞いた( )です。",
        "options": [
          "1. ばかり",
          "2. ところ",
          "3. はず",
          "4. つも\nり"
        ],
        "correct": 1,
        "correctText": "ばかり",
        "explanation": "(Vừa mới: V たばかりです )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "きょうは 気分が わるいので、早く( )いただけませ んか。",
        "options": [
          "1. 帰らせて",
          "2. 帰られて",
          "3. 帰って",
          "4.\n帰りて"
        ],
        "correct": 1,
        "correctText": "帰らせて",
        "explanation": "(Xin phép: V させていただけませんか )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "先生、お荷物を( )ましょうか。",
        "options": [
          "1. お持ちし",
          "2. お持ちになり",
          "3. 持た\nれ",
          "4. 持たせ"
        ],
        "correct": 1,
        "correctText": "お持ちし",
        "explanation": "(Khiêm nhường ngữ: お  + V ます (bỏ ます ) + します )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 一度も ひこうきに( )ことが ありません。",
        "options": [
          "1. のった",
          "2. のろう",
          "3. のって",
          "4. の\nり"
        ],
        "correct": 1,
        "correctText": "のった",
        "explanation": "(V たことがあります / ありません )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "明日 友だちが 来ますから、部屋を( )おきます。",
        "options": [
          "1. そうじして",
          "2. そうじした",
          "3. そうじ\nする",
          "4. そうじし"
        ],
        "correct": 1,
        "correctText": "そうじして",
        "explanation": "(V ておきます  (chuẩn bị trước))"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "リーさんは だれか ★ ___ ___ ___ ぬすまれまし た。",
        "options": [
          "1. に",
          "2. ノートパソコン",
          "3. を",
          "4. 大\n事な"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "[1→4→2→3 (だれかに  大事な  ノートパソコンを) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "リーさんは 田中さんの ___ ___ ★ ___ 思ってい ます。",
        "options": [
          "1. を",
          "2. 聞かせて",
          "3. ほしいと",
          "4. 歌"
        ],
        "correct": 2,
        "correctText": "聞かせて",
        "explanation": "[4→1→2→3 (歌を  聞かせて  ほしいと) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "道が ___ ___ ★ ___ しまいました。",
        "options": [
          "1. 遅れて",
          "2. 会社に",
          "3. こんでいて",
          "4.\n電車が"
        ],
        "correct": 2,
        "correctText": "会社に",
        "explanation": "[3→4→2→1 (こんでいて  電車が  会社に  遅れて) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "田中さんに ___ ___ ★ ___ ください。",
        "options": [
          "1. と",
          "2. 始まる",
          "3. 会議が",
          "4. 伝えて"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "[3→2→1→4 (会議が  始まる  と  伝えて) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは 友だちに ___ ___ ★ ___。",
        "options": [
          "1. 本を",
          "2. 新しい",
          "3. 買って",
          "4. あげ\nました"
        ],
        "correct": 3,
        "correctText": "買って",
        "explanation": "[2→1→3→4 (新しい  本を  買って  あげました。) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. つけた",
          "2. つける",
          "3. つけて",
          "4. つき"
        ],
        "correct": 1,
        "correctText": "つけた",
        "explanation": "(V た  + まま  (để nguyên trạng thái bật))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. しかし",
          "2. ですから",
          "3. それに",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "しかし",
        "explanation": "( しかし  (tuy nhiên lại không tốt cho cơ thể))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. よう",
          "2. ため",
          "3. こと",
          "4. はず"
        ],
        "correct": 1,
        "correctText": "よう",
        "explanation": "( かぜをひかないように  (để không bị cảm))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. おいた",
          "2. あった",
          "3. みた",
          "4. いた"
        ],
        "correct": 1,
        "correctText": "おいた",
        "explanation": "( セットしておいたほうがいい  (nên hẹn giờ sẵn))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. 飲む",
          "2. 飲んだ",
          "3. 飲んで",
          "4. 飲み"
        ],
        "correct": 1,
        "correctText": "飲む",
        "explanation": "(V るようにしましょう  (hãy cố gắng duy trì))"
      }
    ]
  },
  {
    "index": 41,
    "code": "N4-16",
    "level": "N4",
    "title": "Đề N4-16: Cho – Nhận Kính Ngữ いただきます‧くださいます‧やります  (Bài 41) — Nguồn: Nihongo NET",
    "passage": "わたしは 去年の 春に 日本へ 来ました。はじめは 店の 人が 言った ことが わからなくて、【 16 】。それで、まいにち テレ ビを 見ながら、日本語を【 17 】ことに しました。半年 つづけたら、少しずつ 聞こえる【 18 】。今は 友だちと 日本語で 話せます。【 19 】、まだ 漢字は むずかしいです。来年は 日本の 大学に 入りたいです。【 20 】、これからも まいにち がん ばります。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "この 話が ほんとう( )、しらべて みます。",
        "options": [
          "1. かどうか",
          "2. なのか",
          "3. だか",
          "4. か\nどう"
        ],
        "correct": 1,
        "correctText": "かどうか",
        "explanation": "(Câu hỏi nghi vấn có/không: かどうか )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "すみませんが、もう 一度 せつめいして( )ません か。",
        "options": [
          "1. いただけ",
          "2. くださり",
          "3. もらい",
          "4.\nあげ"
        ],
        "correct": 1,
        "correctText": "いただけ",
        "explanation": "(Nhờ lịch sự: V ていただけませんか )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "ちょっと たばこを( )来ますから、待っていてくだ さい。",
        "options": [
          "1. 買って",
          "2. 買いに",
          "3. 買い",
          "4. 買う"
        ],
        "correct": 1,
        "correctText": "買って",
        "explanation": "(Đi làm rồi quay lại: V て来ます )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "日曜日は 休み( )のに、働かなければ なりません。",
        "options": [
          "1. な",
          "2. の",
          "3. だ",
          "4. で"
        ],
        "correct": 1,
        "correctText": "な",
        "explanation": "(Danh từ/A な  + な  + のに )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "玄関で( )が します。だれか 来たようです。",
        "options": [
          "1. 音",
          "2. 声",
          "3. におい",
          "4. 味"
        ],
        "correct": 1,
        "correctText": "音",
        "explanation": "(Cảm giác thính giác: 音がします )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "社⻑は もう この ニュースを( )か。",
        "options": [
          "1. ご存じです",
          "2. 知っています",
          "3. お知\nりになります",
          "4. 存じています"
        ],
        "correct": 1,
        "correctText": "ご存じです",
        "explanation": "(Tôn kính ngữ của 知っています  là ご存じです )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "わたくしは 来月 お宅へ( )ます。",
        "options": [
          "1. うかがい",
          "2. いらっしゃい",
          "3. なさ\nい",
          "4. おっしゃい"
        ],
        "correct": 1,
        "correctText": "うか がい",
        "explanation": "(Khiêm nhường ngữ của 行きます  là うかがいます )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "日曜日は うちで 本を 読んだり 音楽を( )します。",
        "options": [
          "1. 聞いたり",
          "2. 聞いて",
          "3. 聞く",
          "4. 聞\nきながら"
        ],
        "correct": 1,
        "correctText": "聞いたり",
        "explanation": "(V たり V たりします )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "電車の 中に かさを( )しまいました。",
        "options": [
          "1. わすれて",
          "2. わすれる",
          "3. わすれた",
          "4. わすれ"
        ],
        "correct": 1,
        "correctText": "わすれて",
        "explanation": "(V てしま いました  (lỡ làm))"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "こんだ 電車の 中で となりの 人に 足を( )。",
        "options": [
          "1. ふまれました",
          "2. ふみました",
          "3. ふ\nんでいます",
          "4. ふるつもりです"
        ],
        "correct": 1,
        "correctText": "ふまれました",
        "explanation": "(Thể bị động ふまれました )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "日本語で ___ ___ ★ ___ いいですか。",
        "options": [
          "1. どう",
          "2. 書きたいんですが",
          "3. 手紙を",
          "4. 書いたら"
        ],
        "correct": 1,
        "correctText": "どう",
        "explanation": "[3→2→1→4 (手紙を  書きたいんです が  どう  書いたら) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "道が ___ ___ ★ ___ いいですよ。",
        "options": [
          "1. 行った",
          "2. 早く",
          "3. こむかもしれませ\nんから",
          "4. ほうが"
        ],
        "correct": 1,
        "correctText": "行った",
        "explanation": "[3→2→1→4 (こむかもしれませんから  早く  行った  ほうが) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "家を ___ ___ ★ ___ います。",
        "options": [
          "1. ためて",
          "2. ために",
          "3. 買う",
          "4. お金\nを"
        ],
        "correct": 4,
        "correctText": "お金を",
        "explanation": "[3→2→4→1 (家を  買う  ために  お金を  ためて) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 本は ___ ___ ★ ___ できません。",
        "options": [
          "1. ことが",
          "2. 読む",
          "3. 小さくて",
          "4. 字\nが"
        ],
        "correct": 2,
        "correctText": "読む",
        "explanation": "[4→3→2→1 (字が  小さくて  読む  ことが  できません。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "友だちが 来る ___ ___ ★ ___ おきました。",
        "options": [
          "1. して",
          "2. そうじを",
          "3. まえに",
          "4. 部\n屋の"
        ],
        "correct": 2,
        "correctText": "そうじを",
        "explanation": "[3→4→2→1 (まえに  部屋の  そうじを  して) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. こまってしまいました",
          "2. こまってあげました",
          "3. こまってくれました",
          "4. こまって\nみました"
        ],
        "correct": 1,
        "correctText": "こまってしまいました",
        "explanation": "( こまってしまいました  (lỡ lâm vào thế bí))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. 練習する",
          "2. 練習した",
          "3. 練習して",
          "4. 練習し"
        ],
        "correct": 1,
        "correctText": "練習する",
        "explanation": "(V ることにしました  (tự quyết định))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. ようになりました",
          "2. ことになりました",
          "3. ところでした",
          "4. はずでした"
        ],
        "correct": 1,
        "correctText": "ようになりました",
        "explanation": "( 聞こえるようになりま した  (đã nghe được))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. しかし",
          "2. だから",
          "3. または",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "しかし",
        "explanation": "( しかし  (tuy nhiên))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. ですから",
          "2. しかし",
          "3. たとえば",
          "4. それでは"
        ],
        "correct": 1,
        "correctText": "ですから",
        "explanation": "( ですから  (vì vậy))"
      }
    ]
  },
  {
    "index": 42,
    "code": "N4-17",
    "level": "N4",
    "title": "Đề N4-17: Mục đích ために  & Công dụng のに  (Bài 42) — Nguồn: Nihongo NET N4 Part 17",
    "passage": "去年、わたしは 一人で 住む ように なりました。はじめは 毎日 べんとうを 買って いましたが、お金が【 16 】しまいまし た。それで、自分で 料理を【 17 】と 思いました。母に 電話を して、りょうりの しかたを 教えて【 18 】。今は やさいの りょうりを【 19 】ことが できます。来週は 友だちが 来ますから、【 20 】りょうりを ならって おきます。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "この はさみは 花を( )のに つかいます。",
        "options": [
          "1. 切る",
          "2. 切って",
          "3. 切り",
          "4. 切った"
        ],
        "correct": 1,
        "correctText": "切る",
        "explanation": "(Công dụng: V るのに  つかいます )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "音が 大きいですね。もう すこし( )して ください。",
        "options": [
          "1. 小さく",
          "2. 小さいに",
          "3. 小さくて",
          "4.\n小さい"
        ],
        "correct": 1,
        "correctText": "小さく",
        "explanation": "(Biến đổi tính chất: A い ( く ) + します )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "「もう 食べましたか。」 ― 「いいえ、今から( )とこ ろです。」",
        "options": [
          "1. 食べる",
          "2. 食べた",
          "3. 食べている",
          "4.\n食べよう"
        ],
        "correct": 1,
        "correctText": "食べる",
        "explanation": "(Chuẩn bị làm: 今から  V るところです )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "部⻑は 田中さんを 大阪へ 出張( )ました。",
        "options": [
          "1. させ",
          "2. され",
          "3. し",
          "4. でき"
        ],
        "correct": 1,
        "correctText": "させ",
        "explanation": "(Sai khiến: 出張させました )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "先生は なんと( )ましたか。",
        "options": [
          "1. おっしゃい",
          "2. もうし",
          "3. いい",
          "4.\nうかがい"
        ],
        "correct": 1,
        "correctText": "おっしゃい",
        "explanation": "(Tôn kính ngữ của 言います  là おっしゃいます )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "タクシーで 行けば パーティーの 時間に( )そうで す。",
        "options": [
          "1. まにあい",
          "2. つき",
          "3. おくれ",
          "4. 行\nき"
        ],
        "correct": 1,
        "correctText": "まにあい",
        "explanation": "( まにあいそうです  (có vẻ sẽ kịp giờ))"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "手を( )から、ごはんを 食べます。",
        "options": [
          "1. 洗って",
          "2. 洗い",
          "3. 洗おう",
          "4. 洗え\nば"
        ],
        "correct": 1,
        "correctText": "洗って",
        "explanation": "(V てから  (sau khi làm V))"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "この 薬を 一度( )みて ください。",
        "options": [
          "1. 飲んで",
          "2. 飲む",
          "3. 飲んだ",
          "4. 飲み"
        ],
        "correct": 1,
        "correctText": "飲んで",
        "explanation": "(V てみます  (làm thử))"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "来年 国へ( )と 思って います。",
        "options": [
          "1. 帰ろう",
          "2. 帰って",
          "3. 帰り",
          "4. 帰れ"
        ],
        "correct": 1,
        "correctText": "帰ろう",
        "explanation": "(V( よ ) うと思っています )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "この ボタンを( )と、きっぷが 出ます。",
        "options": [
          "1. おす",
          "2. おして",
          "3. おした",
          "4. おそ\nう"
        ],
        "correct": 1,
        "correctText": "お す",
        "explanation": "(Điều kiện tất yếu V ると )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "田中さんに ___ ___ ★ ___ ください。",
        "options": [
          "1. と",
          "2. 始まる",
          "3. 会議が",
          "4. 伝えて"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "[3→2→1→4 (会議が  始まる  と  伝えて) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは 友だちに ___ ___ ★ ___。",
        "options": [
          "1. 本を",
          "2. 新しい",
          "3. 買って",
          "4. あげ\nました"
        ],
        "correct": 3,
        "correctText": "買って",
        "explanation": "[2→1→3→4 (新し い  本を  買って  あげました。) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "あしたは あさ 六時に ___ ___ ★ ___ なりませ ん。",
        "options": [
          "1. ので",
          "2. しなければ",
          "3. じゅんびを",
          "4. 出かける"
        ],
        "correct": 3,
        "correctText": "じゅんびを",
        "explanation": "[4→1→3→2 (出かけるので  じゅんびを  しなければ) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは 先生に ___ ___ ★ ___ もらいました。",
        "options": [
          "1. なおして",
          "2. 書いた",
          "3. まちがいを",
          "4. さくぶんの"
        ],
        "correct": 3,
        "correctText": "まち がいを",
        "explanation": "[2→4→3→1 (書いた  さくぶんの  まちがいを  なおして) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 道を ___ ___ ★ ___、駅が あります。",
        "options": [
          "1. まがると",
          "2. 右に",
          "3. まっすぐ",
          "4.\n行って"
        ],
        "correct": 2,
        "correctText": "右に",
        "explanation": "[3→4→2→1 (まっすぐ  行って  右に  ま がると) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. なくなって",
          "2. なくなる",
          "3. なくなった",
          "4. なくなり"
        ],
        "correct": 1,
        "correctText": "なくなって",
        "explanation": "( なくなってしまいました  (hết sạch tiền))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. はじめよう",
          "2. はじめる",
          "3. はじめて",
          "4. はじめた"
        ],
        "correct": 1,
        "correctText": "はじめよう",
        "explanation": "( はじめようと思いました  (định bắt đầu))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. もらいました",
          "2. あげました",
          "3. やりました",
          "4. いきました"
        ],
        "correct": 1,
        "correctText": "もらいました",
        "explanation": "( 母に  教えてもらいました  (được mẹ dạy))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. つくる",
          "2. つくって",
          "3. つくった",
          "4. つくり"
        ],
        "correct": 1,
        "correctText": "つくる",
        "explanation": "( つくることができます  (có thể nấu))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. 新しい",
          "2. 新しさ",
          "3. 新しくて",
          "4. 新しいの"
        ],
        "correct": 1,
        "correctText": "新しい",
        "explanation": "( 新しい  りょうり  (món ăn mới))"
      }
    ]
  },
  {
    "index": 43,
    "code": "N4-18",
    "level": "N4",
    "title": "Đề N4-18: Suy đoán thị giác そうです  & Đi rồi quay lại てきます  (Bài 43) — Nguồn: Nihongo NET N4 Part",
    "passage": "先週の 日曜日、父と 母と 海へ 行きました。電車が おくれたので、海まで 二時間【 16 】。天気が よくて、風も あまり【 17 】。ひるごはんは、海の 近くの 店で 魚を 食べました。とても【 18 】そうに 見えたので、二つも 注文しました。おな かが いっぱいに【 19 】しまいました。つかれましたが、楽しかったです。【 20 】また 行きたいです。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "火事( )場合は、エレベーターを つかわないで くだ さい。",
        "options": [
          "1. の",
          "2. な",
          "3. だ",
          "4. に"
        ],
        "correct": 1,
        "correctText": "の",
        "explanation": "(N の  + 場合は  (trong trường hợp))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "その ニュースは さっき 聞いた( )です。",
        "options": [
          "1. ばかり",
          "2. ところ",
          "3. はず",
          "4. つも\nり"
        ],
        "correct": 1,
        "correctText": "ばかり",
        "explanation": "(Vừa mới: V た ばかりです )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "きょうは 気分が わるいので、早く( )いただけませ んか。",
        "options": [
          "1. 帰らせて",
          "2. 帰られて",
          "3. 帰って",
          "4.\n帰りて"
        ],
        "correct": 1,
        "correctText": "帰らせて",
        "explanation": "(Xin phép: V させていただけませんか )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "先生、お荷物を( )ましょうか。",
        "options": [
          "1. お持ちし",
          "2. お持ちになり",
          "3. 持た\nれ",
          "4. 持たせ"
        ],
        "correct": 1,
        "correctText": "お持ちし",
        "explanation": "(Khiêm nhường ngữ: お  + V ます (bỏ ます ) + します )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 一度も ひこうきに( )ことが ありません。",
        "options": [
          "1. のった",
          "2. のろう",
          "3. のって",
          "4. の\nり"
        ],
        "correct": 1,
        "correctText": "のった",
        "explanation": "(V たことがあります / ありません )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "明日 友だちが 来ますから、部屋を( )おきます。",
        "options": [
          "1. そうじして",
          "2. そうじした",
          "3. そうじ\nする",
          "4. そうじし"
        ],
        "correct": 1,
        "correctText": "そうじして",
        "explanation": "(V ておきます  (chuẩn bị trước))"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "この 字は 小さすぎて、わたしには( )。",
        "options": [
          "1. 読めません",
          "2. 読みません",
          "3. 読んで\nいません",
          "4. 読みたくないです"
        ],
        "correct": 1,
        "correctText": "読 めません",
        "explanation": "(Thể khả năng 読めません )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "雨が( )、うちに いましょう。",
        "options": [
          "1. ふったら",
          "2. ふるのに",
          "3. ふりなが\nら",
          "4. ふるほど"
        ],
        "correct": 1,
        "correctText": "ふったら",
        "explanation": "(Điều kiện giả định V たら )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "「あした 行きますか。」「あなたが( )、わたしも 行 きます。」",
        "options": [
          "1. 行くなら",
          "2. 行くのに",
          "3. 行きなが\nら",
          "4. 行くほど"
        ],
        "correct": 1,
        "correctText": "行くなら",
        "explanation": "(Điều kiện V るなら )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "部屋の 電気が 消えて います。だれも( )ようです。",
        "options": [
          "1. いない",
          "2. いなく",
          "3. いなくて",
          "4.\nいません"
        ],
        "correct": 1,
        "correctText": "いない",
        "explanation": "(Suy đoán: V 普通形  + ようです )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 本は ___ ___ ★ ___ できません。",
        "options": [
          "1. ことが",
          "2. 読む",
          "3. 小さくて",
          "4. 字\nが"
        ],
        "correct": 2,
        "correctText": "読む",
        "explanation": "[4→3→2→1 (字が  小さくて  読む  ことが  できません。) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "友だちが 来る ___ ___ ★ ___ おきました。",
        "options": [
          "1. して",
          "2. そうじを",
          "3. まえに",
          "4. 部\n屋の"
        ],
        "correct": 2,
        "correctText": "そうじを",
        "explanation": "[3→4→2→1 (まえに  部屋の  そうじを  して) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ は リムさんです。",
        "options": [
          "1. 人",
          "2. いる",
          "3. あそこで",
          "4. 話して"
        ],
        "correct": 2,
        "correctText": "いる",
        "explanation": "[3→4→2→1 (あそこで  話して  いる  人 は) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ___ ★ ___ なりました。",
        "options": [
          "1. ように",
          "2. 少し",
          "3. 話せる",
          "4. 日本\n語が"
        ],
        "correct": 3,
        "correctText": "話せる",
        "explanation": "[4→2→3→1 (日本語が  少し  話せる  ように) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "雨が ___ ___ ★ ___ しました。",
        "options": [
          "1. ことに",
          "2. 行かない",
          "3. ふって",
          "4.\nいるので"
        ],
        "correct": 2,
        "correctText": "行かない",
        "explanation": "[3→4→2→1 (ふって  いるので 行かない  ことに) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. かかりました",
          "2. かかります",
          "3. かけました",
          "4. かけます"
        ],
        "correct": 1,
        "correctText": "かかりました",
        "explanation": "(Quá khứ: 二時間かかりました )"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. つよくなかったです",
          "2. つよかったです",
          "3. つよいでした",
          "4. つよくないでした"
        ],
        "correct": 1,
        "correctText": "つよくなかったです",
        "explanation": "( あまり  + つよくな かったです )"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. おいし",
          "2. おいしい",
          "3. おいしく",
          "4. おいしくて"
        ],
        "correct": 1,
        "correctText": "おいし",
        "explanation": "( おいしそうに見えた  (trông ngon))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. なって",
          "2. なり",
          "3. なる",
          "4. なった"
        ],
        "correct": 1,
        "correctText": "なって",
        "explanation": "( なってしまいました  (đã no căng))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. ぜひ",
          "2. けっして",
          "3. あまり",
          "4. 少しも"
        ],
        "correct": 1,
        "correctText": "ぜひ",
        "explanation": "( ぜひ  また  行きたいです  (nhất định muốn đi lại))"
      }
    ]
  },
  {
    "index": 44,
    "code": "N4-19",
    "level": "N4",
    "title": "Đề N4-19: Quá mức すぎる , Dễ/Khó やすい‧にくい  & Làm cho く / にします  (Bài 44) — Nguồn: Nihongo",
    "passage": "花や 木の 世話を することは けんこうに いいと【 16 】います。また、花は かざる【 17 】でも 体に いいそうです。花を 見ると 気持ちが【 18 】なります。花は 色に よって ちがう 働きが ある【 19 】です。たとえば 赤や ⻩色の 花は 人を 元 気に して【 20 】そうです。( GoJapan N4 Đề 7 )",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "玄関で( )が します。だれか 来たようです。",
        "options": [
          "1. 音",
          "2. 声",
          "3. におい",
          "4. 味"
        ],
        "correct": 1,
        "correctText": "音",
        "explanation": "(Cảm giác thính giác: 音がします )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "社⻑は もう この ニュースを( )か。",
        "options": [
          "1. ご存じです",
          "2. 知っています",
          "3. お知\nりになります",
          "4. 存じています"
        ],
        "correct": 1,
        "correctText": "ご存じです",
        "explanation": "(Tôn kính ngữ của 知っています  là ご存じです )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "わたくしは 来月 お宅へ( )ます。",
        "options": [
          "1. うかがい",
          "2. いらっしゃい",
          "3. なさ\nい",
          "4. おっしゃい"
        ],
        "correct": 1,
        "correctText": "うかがい",
        "explanation": "(Khiêm nhường ngữ của 行きます  là うかがいます )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "日曜日は うちで 本を 読んだり 音楽を( )します。",
        "options": [
          "1. 聞いたり",
          "2. 聞いて",
          "3. 聞く",
          "4. 聞\nきながら"
        ],
        "correct": 1,
        "correctText": "聞いたり",
        "explanation": "(V たり V たりします )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "電車の 中に かさを( )しまいました。",
        "options": [
          "1. わすれて",
          "2. わすれる",
          "3. わすれた",
          "4. わすれ"
        ],
        "correct": 1,
        "correctText": "わすれて",
        "explanation": "(V てしまいました  (lỡ làm))"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "こんだ 電車の 中で となりの 人に 足を( )。",
        "options": [
          "1. ふまれました",
          "2. ふみました",
          "3. ふ\nんでいます",
          "4. ふるつもりです"
        ],
        "correct": 1,
        "correctText": "ふまれました",
        "explanation": "(Thể bị động ふまれました )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "時間が( )、いっしょに えいがを 見ましょう。",
        "options": [
          "1. あれば",
          "2. あるのに",
          "3. ありながら",
          "4. あるほど"
        ],
        "correct": 1,
        "correctText": "あ れば",
        "explanation": "(Thể điều kiện あれば )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "天気よほうに よると、あしたは 雪が ふる( )。",
        "options": [
          "1. そうです",
          "2. ようでした",
          "3. ところ\nです",
          "4. はずでした"
        ],
        "correct": 1,
        "correctText": "そうです",
        "explanation": "(Truyền đạt V 普通形  + そうです )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "妹が わからないと 言ったので、わたしが 教えて ( )。",
        "options": [
          "1. あげました",
          "2. くれました",
          "3. もら\nいました",
          "4. いただきました"
        ],
        "correct": 1,
        "correctText": "あげました",
        "explanation": "( わたしが  N に  V てあげ ました )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは 試験ですから、今夜は べんきょうし( )。",
        "options": [
          "1. なければなりません",
          "2. なくてもいい\nです",
          "3. てはいけません",
          "4. ながらいま\nす"
        ],
        "correct": 1,
        "correctText": "なければなりません",
        "explanation": "(Nghĩa vụ なければなりません )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは 先生に ___ ___ ★ ___ もらいました。",
        "options": [
          "1. なおして",
          "2. 書いた",
          "3. まちがいを",
          "4. さくぶんの"
        ],
        "correct": 3,
        "correctText": "まちがいを",
        "explanation": "[2→4→3→1 (書いた  さくぶん の  まちがいを  なおして) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 道を ___ ___ ★ ___、駅が あります。",
        "options": [
          "1. まがると",
          "2. 右に",
          "3. まっすぐ",
          "4.\n行って"
        ],
        "correct": 2,
        "correctText": "右に",
        "explanation": "[3→4→2→1 (まっすぐ  行って  右に  まがると) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "来月 ___ ___ ★ ___ と 思って います。",
        "options": [
          "1. 買おう",
          "2. 新しい",
          "3. じてんしゃを",
          "4. 自分の"
        ],
        "correct": 3,
        "correctText": "じてんしゃを",
        "explanation": "[4→2→3→1 (自分の  新しい  じてんしゃを  買おう) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 薬は ___ ___ ★ ___ です。",
        "options": [
          "1. にくい",
          "2. 飲み",
          "3. とても",
          "4. 大きす\nぎて"
        ],
        "correct": 2,
        "correctText": "飲み",
        "explanation": "[4→3→2→1 (大きすぎて  とても  飲み  にくいです) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "富士山が ___ ___ ___ ★ 知っていますか。",
        "options": [
          "1. か",
          "2. どこ",
          "3. に",
          "4. ある"
        ],
        "correct": 1,
        "correctText": "か",
        "explanation": "[2→3→4→1 (どこ  に  ある  か  知っていますか) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. 言われて",
          "2. 言って",
          "3. 言わせて",
          "4. 言えて"
        ],
        "correct": 1,
        "correctText": "言われて",
        "explanation": "( 〜と言われています  (được cho là))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. だけ",
          "2. しか",
          "3. ほど",
          "4. ばかり"
        ],
        "correct": 1,
        "correctText": "だけ",
        "explanation": "( かざるだけでも  (chỉ cần trang trí thôi cũng))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. よく",
          "2. いい",
          "3. よい",
          "4. よくて"
        ],
        "correct": 1,
        "correctText": "よく",
        "explanation": "( 気持ちが  よくなります  (tâm trạng tốt lên))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. そう",
          "2. よう",
          "3. はず",
          "4. つもり"
        ],
        "correct": 1,
        "correctText": "そ う",
        "explanation": "( あるそうです  (nghe nói là có))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. くれる",
          "2. あげる",
          "3. もらう",
          "4. やる"
        ],
        "correct": 1,
        "correctText": "くれる",
        "explanation": "( 元気にしてくれる  (làm cho mình khỏe khoắn))"
      }
    ]
  },
  {
    "index": 45,
    "code": "N4-20",
    "level": "N4",
    "title": "Đề N4-20: Trường hợp 場合は  & Trái kỳ vọng のに  (Bài 45) — Nguồn: Nihongo NET N4 Part 20",
    "passage": "日本の 夏は あつくて むしあついです。だから、エアコンを【 16 】まま 寝る 人が 多いです。【 17 】、体には あまり よく ありません。かぜを ひかない【 18 】に、寝る まえに タイマーを セットして【 19 】ほうが いいです。また、朝 起きたら コップ 一杯の 水を【 20 】ように しましょう。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "先生は なんと( )ましたか。",
        "options": [
          "1. おっしゃい",
          "2. もうし",
          "3. いい",
          "4.\nうかがい"
        ],
        "correct": 1,
        "correctText": "おっしゃい",
        "explanation": "(Tôn kính ngữ của 言います  là おっしゃいます )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "タクシーで 行けば パーティーの 時間に( )そうで す。",
        "options": [
          "1. まにあい",
          "2. つき",
          "3. おくれ",
          "4. 行\nき"
        ],
        "correct": 1,
        "correctText": "まにあい",
        "explanation": "( まにあいそうです  (có vẻ sẽ kịp giờ))"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "手を( )から、ごはんを 食べます。",
        "options": [
          "1. 洗って",
          "2. 洗い",
          "3. 洗おう",
          "4. 洗え\nば"
        ],
        "correct": 1,
        "correctText": "洗って",
        "explanation": "(V てから  (sau khi làm V))"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "この 薬を 一度( )みて ください。",
        "options": [
          "1. 飲んで",
          "2. 飲む",
          "3. 飲んだ",
          "4. 飲み"
        ],
        "correct": 1,
        "correctText": "飲んで",
        "explanation": "(V てみます  (làm thử))"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "来年 国へ( )と 思って います。",
        "options": [
          "1. 帰ろう",
          "2. 帰って",
          "3. 帰り",
          "4. 帰れ"
        ],
        "correct": 1,
        "correctText": "帰ろう",
        "explanation": "(V( よ ) うと思っています )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "この ボタンを( )と、きっぷが 出ます。",
        "options": [
          "1. おす",
          "2. おして",
          "3. おした",
          "4. おそ\nう"
        ],
        "correct": 1,
        "correctText": "おす",
        "explanation": "(Điều kiện tất yếu V ると )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "この ケーキは とても( )そうですね。",
        "options": [
          "1. おいし",
          "2. おいしさ",
          "3. おいしく",
          "4.\nおいしくて"
        ],
        "correct": 1,
        "correctText": "おいし",
        "explanation": "(Thị giác: A い (bỏ い ) + そうです )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "わたしが 病気の とき、友だちが 薬を 買って( )。",
        "options": [
          "1. くれました",
          "2. あげました",
          "3. やり\nました",
          "4. なりました"
        ],
        "correct": 1,
        "correctText": "くれました",
        "explanation": "( 友だちが(わたしに) V てくれました )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは 休みですから、早く( )。",
        "options": [
          "1. おきなくてもいいです",
          "2. おきなけれ\nばなりません",
          "3. おきるところです",
          "4.\nおきたばかりです"
        ],
        "correct": 1,
        "correctText": "おきなくてもいいです",
        "explanation": "(Không cần làm: V なく てもいいです )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "今日は 体の ぐあいが わるい( )、会社を 休みます。",
        "options": [
          "1. ので",
          "2. のに",
          "3. ほど",
          "4. ても"
        ],
        "correct": 1,
        "correctText": "ので",
        "explanation": "(Nguyên nhân lịch sự 〜ので )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは ___ ___ ★ ___ なりました。",
        "options": [
          "1. ように",
          "2. 少し",
          "3. 話せる",
          "4. 日本\n語が"
        ],
        "correct": 3,
        "correctText": "話せる",
        "explanation": "[4→2→3→1 (日本語が  少し  話せる  ように) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "雨が ___ ___ ★ ___ しました。",
        "options": [
          "1. ことに",
          "2. 行かない",
          "3. ふって",
          "4.\nいるので"
        ],
        "correct": 2,
        "correctText": "行かない",
        "explanation": "[3→4→2→1 (ふって  いるので  行かない  ことに) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ います。",
        "options": [
          "1. まって",
          "2. 来るのを",
          "3. わたしは",
          "4.\n友だちが"
        ],
        "correct": 2,
        "correctText": "来るのを",
        "explanation": "[3→4→2→1 (わたしは  友だち が  来るのを  まって) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "毎日 ___ ★ ___ ___ ね。",
        "options": [
          "1. ふって",
          "2. ばかり",
          "3. 雨",
          "4. います"
        ],
        "correct": 2,
        "correctText": "ばかり",
        "explanation": "[3→2→1→4 (毎日  雨  ばかり  ふって  いますね) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "ゲーム ___ ★ ___ ___ 勉強しなさい。",
        "options": [
          "1. していない",
          "2. すこしは",
          "3. で",
          "4.\nばかり"
        ],
        "correct": 1,
        "correctText": "していない",
        "explanation": "[4→1→3→2 (ゲームばかり  していないで  すこしは) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. つけた",
          "2. つける",
          "3. つけて",
          "4. つき"
        ],
        "correct": 1,
        "correctText": "つけた",
        "explanation": "(V た  + まま  (để nguyên trạng thái bật))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. しかし",
          "2. ですから",
          "3. それに",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "しか し",
        "explanation": "( しかし  (tuy nhiên lại không tốt cho cơ thể))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. よう",
          "2. ため",
          "3. こと",
          "4. はず"
        ],
        "correct": 1,
        "correctText": "よう",
        "explanation": "( かぜをひかないように  (để không bị cảm))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. おいた",
          "2. あった",
          "3. みた",
          "4. いた"
        ],
        "correct": 1,
        "correctText": "おいた",
        "explanation": "( セットしておいたほうがいい  (nên hẹn giờ sẵn))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. 飲む",
          "2. 飲んだ",
          "3. 飲んで",
          "4. 飲み"
        ],
        "correct": 1,
        "correctText": "飲む",
        "explanation": "(V るようにしましょう  (hãy cố gắng duy trì))"
      }
    ]
  },
  {
    "index": 46,
    "code": "N4-21",
    "level": "N4",
    "title": "Đề N4-21: Thời điểm ところだ , Vừa mới たばかり  & Chắc chắn はずだ  (Bài 46) — Nguồn: Nihongo NET",
    "passage": "わたしは 去年の 春に 日本へ 来ました。はじめは 店の 人が 言った ことが わからなくて、【 16 】。それで、まいにち テレ ビを 見ながら、日本語を【 17 】ことに しました。半年 つづけたら、少しずつ 聞こえる【 18 】。今は 友だちと 日本語で 話せます。【 19 】、まだ 漢字は むずかしいです。来年は 日本の 大学に 入りたいです。【 20 】、これからも まいにち がん ばります。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 一度も ひこうきに( )ことが ありません。",
        "options": [
          "1. のった",
          "2. のろう",
          "3. のって",
          "4. の\nり"
        ],
        "correct": 1,
        "correctText": "のった",
        "explanation": "(V たことがあります / ありません )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "明日 友だちが 来ますから、部屋を( )おきます。",
        "options": [
          "1. そうじして",
          "2. そうじした",
          "3. そうじ\nする",
          "4. そうじし"
        ],
        "correct": 1,
        "correctText": "そうじして",
        "explanation": "(V てお きます  (chuẩn bị trước))"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "この 字は 小さすぎて、わたしには( )。",
        "options": [
          "1. 読めません",
          "2. 読みません",
          "3. 読んで\nいません",
          "4. 読みたくないです"
        ],
        "correct": 1,
        "correctText": "読めません",
        "explanation": "(Thể khả năng 読めません )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "雨が( )、うちに いましょう。",
        "options": [
          "1. ふったら",
          "2. ふるのに",
          "3. ふりなが\nら",
          "4. ふるほど"
        ],
        "correct": 1,
        "correctText": "ふったら",
        "explanation": "(Điều kiện giả định V たら )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "「あした 行きますか。」「あなたが( )、わたしも 行 きます。」",
        "options": [
          "1. 行くなら",
          "2. 行くのに",
          "3. 行きなが\nら",
          "4. 行くほど"
        ],
        "correct": 1,
        "correctText": "行くなら",
        "explanation": "(Điều kiện V るなら )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "部屋の 電気が 消えて います。だれも( )ようです。",
        "options": [
          "1. いない",
          "2. いなく",
          "3. いなくて",
          "4.\nいません"
        ],
        "correct": 1,
        "correctText": "いない",
        "explanation": "(Suy đoán: V 普通形  + ようです )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 先生から さくぶんを なおして( )。",
        "options": [
          "1. もらいました",
          "2. あげました",
          "3. く\nれました",
          "4. いました"
        ],
        "correct": 1,
        "correctText": "もらいました",
        "explanation": "( わたしは  N に / から  V てもらいました )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "この 部屋は きんえんです。たばこを( )。",
        "options": [
          "1. すってはいけません",
          "2. すわなくても\nいいです",
          "3. すったことがあります",
          "4.\nすうようになりました"
        ],
        "correct": 1,
        "correctText": "すってはいけません",
        "explanation": "(Cấm đoán V てはいけません )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "薬を 飲んだ( )、まだ 頭が いたいです。",
        "options": [
          "1. のに",
          "2. ので",
          "3. ほど",
          "4. なら"
        ],
        "correct": 1,
        "correctText": "のに",
        "explanation": "(Nghịch lý trái kỳ vọng 〜のに )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "この 薬は 大きくて 飲み( )です。",
        "options": [
          "1. にくい",
          "2. やすい",
          "3. すぎ",
          "4. たい"
        ],
        "correct": 1,
        "correctText": "にくい",
        "explanation": "(Khó làm: V ます (bỏ ます ) + にくい )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 薬は ___ ___ ★ ___ です。",
        "options": [
          "1. にくい",
          "2. 飲み",
          "3. とても",
          "4. 大きす\nぎて"
        ],
        "correct": 2,
        "correctText": "飲み",
        "explanation": "[4→3→2→1 (大きすぎて  とても  飲み  にくいです) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "富士山が ___ ___ ___ ★ 知っていますか。",
        "options": [
          "1. か",
          "2. どこ",
          "3. に",
          "4. ある"
        ],
        "correct": 1,
        "correctText": "か",
        "explanation": "[2→3→4→1 (どこ  に  ある  か  知っていますか) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "音楽を ___ ★ ___ ___ 飲みました。",
        "options": [
          "1. を",
          "2. ながら",
          "3. 聞き",
          "4. コーヒー"
        ],
        "correct": 2,
        "correctText": "ながら",
        "explanation": "[3→2→4→1 (音楽を  聞き  ながら  コーヒー を) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "私の ___ ___ ___ ★ よく 飲まれています。",
        "options": [
          "1. ワイン",
          "2. この",
          "3. が",
          "4. 国では"
        ],
        "correct": 3,
        "correctText": "が",
        "explanation": "[4→2→1→3 (私の  国では  この  ワインが) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "今は ___ ★ ___ ___ です。",
        "options": [
          "1. ない",
          "2. 何",
          "3. も",
          "4. 食べたく"
        ],
        "correct": 3,
        "correctText": "も",
        "explanation": "[2→3→4→1 (今は  何も  食べたくないです) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. こまってしまいました",
          "2. こまってあげました",
          "3. こまってくれました",
          "4. こまって\nみました"
        ],
        "correct": 1,
        "correctText": "こまってしまいました",
        "explanation": "( こまってしまいました  (lỡ lâm vào thế bí))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. 練習する",
          "2. 練習した",
          "3. 練習して",
          "4. 練習し"
        ],
        "correct": 1,
        "correctText": "練習する",
        "explanation": "(V ることにしました  (tự quyết định))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. ようになりました",
          "2. ことになりました",
          "3. ところでした",
          "4. はずでした"
        ],
        "correct": 1,
        "correctText": "ようになりました",
        "explanation": "( 聞こえるようになりました  (đã nghe được))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. しかし",
          "2. だから",
          "3. または",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "しかし",
        "explanation": "( しかし  (tuy nhiên))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. ですから",
          "2. しかし",
          "3. たとえば",
          "4. それでは"
        ],
        "correct": 1,
        "correctText": "ですから",
        "explanation": "( ですから  (vì vậy))"
      }
    ]
  },
  {
    "index": 47,
    "code": "N4-22",
    "level": "N4",
    "title": "Đề N4-22: Nghe nói そうです  & Hình như ようです  (Bài 47) — Nguồn: Nihongo NET N4 Part 22",
    "passage": "去年、わたしは 一人で 住む ように なりました。はじめは 毎日 べんとうを 買って いましたが、お金が【 16 】しまいまし た。それで、自分で 料理を【 17 】と 思いました。母に 電話を して、りょうりの しかたを 教えて【 18 】。今は やさいの りょうりを【 19 】ことが できます。来週は 友だちが 来ますから、【 20 】りょうりを ならって おきます。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "電車の 中に かさを( )しまいました。",
        "options": [
          "1. わすれて",
          "2. わすれる",
          "3. わすれた",
          "4. わすれ"
        ],
        "correct": 1,
        "correctText": "わすれて",
        "explanation": "(V てしまいました  (lỡ làm))"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "こんだ 電車の 中で となりの 人に 足を( )。",
        "options": [
          "1. ふまれました",
          "2. ふみました",
          "3. ふ\nんでいます",
          "4. ふるつもりです"
        ],
        "correct": 1,
        "correctText": "ふまれました",
        "explanation": "(Thể bị động ふまれました )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "時間が( )、いっしょに えいがを 見ましょう。",
        "options": [
          "1. あれば",
          "2. あるのに",
          "3. ありながら",
          "4. あるほど"
        ],
        "correct": 1,
        "correctText": "あれば",
        "explanation": "(Thể điều kiện あれば )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "天気よほうに よると、あしたは 雪が ふる( )。",
        "options": [
          "1. そうです",
          "2. ようでした",
          "3. ところ\nです",
          "4. はずでした"
        ],
        "correct": 1,
        "correctText": "そうです",
        "explanation": "(Truyền đạt V 普通形  + そうです )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "妹が わからないと 言ったので、わたしが 教えて ( )。",
        "options": [
          "1. あげました",
          "2. くれました",
          "3. もら\nいました",
          "4. いただきました"
        ],
        "correct": 1,
        "correctText": "あげま した",
        "explanation": "( わたしが  N に  V てあげました )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは 試験ですから、今夜は べんきょうし( )。",
        "options": [
          "1. なければなりません",
          "2. なくてもいい\nです",
          "3. てはいけません",
          "4. ながらいま\nす"
        ],
        "correct": 1,
        "correctText": "なければなりません",
        "explanation": "(Nghĩa vụ なければなりません )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "空が 暗く なりました。雨が ふる( )。",
        "options": [
          "1. かもしれません",
          "2. ことにしました",
          "3. はずでした",
          "4. ようになりました"
        ],
        "correct": 1,
        "correctText": "かもしれません",
        "explanation": "(Có lẽ: 〜かもしれません )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "ゆうべ ケーキを( )すぎて、おなかが いたく なりま した。",
        "options": [
          "1. 食べ",
          "2. 食べて",
          "3. 食べる",
          "4. 食べ\nた"
        ],
        "correct": 1,
        "correctText": "食べ",
        "explanation": "(Quá mức: V ます (bỏ ます ) + すぎる )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "音楽を( )ながら、そうじを します。",
        "options": [
          "1. 聞き",
          "2. 聞いて",
          "3. 聞く",
          "4. 聞いた"
        ],
        "correct": 1,
        "correctText": "聞き",
        "explanation": "(Song song: V ます (bỏ ます ) + な がら )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "まいにち 練習して、およげる( )。",
        "options": [
          "1. ようになりました",
          "2. ことにしました",
          "3. ところです",
          "4. つもりです"
        ],
        "correct": 1,
        "correctText": "ようになりました",
        "explanation": "(Biến đổi năng lực: ようになりました )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "毎日 ___ ★ ___ ___ ね。",
        "options": [
          "1. ふって",
          "2. ばかり",
          "3. 雨",
          "4. います"
        ],
        "correct": 2,
        "correctText": "ばかり",
        "explanation": "[3→2→1→4 (毎日  雨  ばかり  ふ って  いますね) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "ゲーム ___ ★ ___ ___ 勉強しなさい。",
        "options": [
          "1. していない",
          "2. すこしは",
          "3. で",
          "4.\nばかり"
        ],
        "correct": 1,
        "correctText": "していない",
        "explanation": "[4→1→3→2 (ゲームばかり  していないで  すこしは) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "リーさんは だれか ★ ___ ___ ___ ぬすまれまし た。",
        "options": [
          "1. に",
          "2. ノートパソコン",
          "3. を",
          "4. 大\n事な"
        ],
        "correct": 1,
        "correctText": "に",
        "explanation": "[1→4→2→3 (だれかに  大事な  ノートパソコンを) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "リーさんは 田中さんの ___ ___ ★ ___ 思ってい ます。",
        "options": [
          "1. を",
          "2. 聞かせて",
          "3. ほしいと",
          "4. 歌"
        ],
        "correct": 2,
        "correctText": "聞かせて",
        "explanation": "[4→1→2→3 (歌を  聞かせて  ほしいと) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "道が ___ ___ ★ ___ しまいました。",
        "options": [
          "1. 遅れて",
          "2. 会社に",
          "3. こんでいて",
          "4.\n電車が"
        ],
        "correct": 2,
        "correctText": "会社に",
        "explanation": "[3→4→2→1 (こんでいて  電車が  会社に  遅れて) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. なくなって",
          "2. なくなる",
          "3. なくなった",
          "4. なくなり"
        ],
        "correct": 1,
        "correctText": "なくなって",
        "explanation": "( なくなってしまいました  (hết sạch tiền))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. はじめよう",
          "2. はじめる",
          "3. はじめて",
          "4. はじめた"
        ],
        "correct": 1,
        "correctText": "は じめよう",
        "explanation": "( はじめようと思いました  (định bắt đầu))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. もらいました",
          "2. あげました",
          "3. やりました",
          "4. いきました"
        ],
        "correct": 1,
        "correctText": "もらいました",
        "explanation": "( 母に  教えてもらいました  (được mẹ dạy))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. つくる",
          "2. つくって",
          "3. つくった",
          "4. つくり"
        ],
        "correct": 1,
        "correctText": "つくる",
        "explanation": "( つくることができます  (có thể nấu))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. 新しい",
          "2. 新しさ",
          "3. 新しくて",
          "4. 新しいの"
        ],
        "correct": 1,
        "correctText": "新しい",
        "explanation": "( 新しい  りょうり  (món ăn mới))"
      }
    ]
  },
  {
    "index": 48,
    "code": "N4-23",
    "level": "N4",
    "title": "Đề N4-23: Thể sai khiến ( 使役動詞 ) & Xin phép させてください  (Bài 48) — Nguồn: Nihongo NET N4 Part",
    "passage": "先週の 日曜日、父と 母と 海へ 行きました。電車が おくれたので、海まで 二時間【 16 】。天気が よくて、風も あまり【 17 】。ひるごはんは、海の 近くの 店で 魚を 食べました。とても【 18 】そうに 見えたので、二つも 注文しました。おな かが いっぱいに【 19 】しまいました。つかれましたが、楽しかったです。【 20 】また 行きたいです。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "来年 国へ( )と 思って います。",
        "options": [
          "1. 帰ろう",
          "2. 帰って",
          "3. 帰り",
          "4. 帰れ"
        ],
        "correct": 1,
        "correctText": "帰ろう",
        "explanation": "(V( よ ) うと思っています )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "この ボタンを( )と、きっぷが 出ます。",
        "options": [
          "1. おす",
          "2. おして",
          "3. おした",
          "4. おそ\nう"
        ],
        "correct": 1,
        "correctText": "おす",
        "explanation": "(Điều kiện tất yếu V る と )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "この ケーキは とても( )そうですね。",
        "options": [
          "1. おいし",
          "2. おいしさ",
          "3. おいしく",
          "4.\nおいしくて"
        ],
        "correct": 1,
        "correctText": "おいし",
        "explanation": "(Thị giác: A い (bỏ い ) + そうです )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "わたしが 病気の とき、友だちが 薬を 買って( )。",
        "options": [
          "1. くれました",
          "2. あげました",
          "3. やり\nました",
          "4. なりました"
        ],
        "correct": 1,
        "correctText": "くれました",
        "explanation": "( 友だちが(わたしに) V てくれました )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは 休みですから、早く( )。",
        "options": [
          "1. おきなくてもいいです",
          "2. おきなけれ\nばなりません",
          "3. おきるところです",
          "4.\nおきたばかりです"
        ],
        "correct": 1,
        "correctText": "おきな くてもいいです",
        "explanation": "(Không cần làm: V なくてもいいです )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "今日は 体の ぐあいが わるい( )、会社を 休みます。",
        "options": [
          "1. ので",
          "2. のに",
          "3. ほど",
          "4. ても"
        ],
        "correct": 1,
        "correctText": "ので",
        "explanation": "(Nguyên nhân lịch sự 〜ので )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "この ペンは 字が 書き( )です。いつも つかってい ます。",
        "options": [
          "1. やすい",
          "2. にくい",
          "3. すぎ",
          "4. たい"
        ],
        "correct": 1,
        "correctText": "やすい",
        "explanation": "(Dễ làm: V ます (bỏ ます ) + やすい )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "日本の 大学に 入る( )に、日本語を べんきょうして います。",
        "options": [
          "1. ため",
          "2. こと",
          "3. もの",
          "4. はず"
        ],
        "correct": 1,
        "correctText": "ため",
        "explanation": "(Mục đích ý chí: V るために )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "体に いいので、まいあさ 歩く( )しました。",
        "options": [
          "1. ことに",
          "2. ものに",
          "3. ところに",
          "4.\nはずに"
        ],
        "correct": 1,
        "correctText": "ことに",
        "explanation": "(Tự quyết định: V ることにしました )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "先生は もう うちへ( )か。",
        "options": [
          "1. お帰りになりました",
          "2. お帰りしまし\nた",
          "3. 帰ってあげました",
          "4. 帰られてい\nただきました"
        ],
        "correct": 1,
        "correctText": "お帰りになりました",
        "explanation": "(Tôn kính ngữ: お V になります )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "私の ___ ___ ___ ★ よく 飲まれています。",
        "options": [
          "1. ワイン",
          "2. この",
          "3. が",
          "4. 国では"
        ],
        "correct": 3,
        "correctText": "が",
        "explanation": "[4→2→1→3 (私の  国では  この  ワインが) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "今は ___ ★ ___ ___ です。",
        "options": [
          "1. ない",
          "2. 何",
          "3. も",
          "4. 食べたく"
        ],
        "correct": 3,
        "correctText": "も",
        "explanation": "[2→3→4→1 (今は  何も  食べたくないです) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "日本語で ___ ___ ★ ___ いいですか。",
        "options": [
          "1. どう",
          "2. 書きたいんですが",
          "3. 手紙を",
          "4. 書いたら"
        ],
        "correct": 1,
        "correctText": "どう",
        "explanation": "[3→2→1→4 (手紙を  書きたいんですが  どう  書いた ら) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "道が ___ ___ ★ ___ いいですよ。",
        "options": [
          "1. 行った",
          "2. 早く",
          "3. こむかもしれませ\nんから",
          "4. ほうが"
        ],
        "correct": 1,
        "correctText": "行った",
        "explanation": "[3→2→1→4 (こむかもしれませんから  早く  行った  ほうが) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "家を ___ ___ ★ ___ います。",
        "options": [
          "1. ためて",
          "2. ために",
          "3. 買う",
          "4. お金\nを"
        ],
        "correct": 4,
        "correctText": "お金を",
        "explanation": "[3→2→4→1 (家を 買う  ために  お金を  ためて) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. かかりました",
          "2. かかります",
          "3. かけました",
          "4. かけます"
        ],
        "correct": 1,
        "correctText": "かかりました",
        "explanation": "(Quá khứ: 二時間かかりました )"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. つよくなかったです",
          "2. つよかったです",
          "3. つよいでした",
          "4. つよくないでした"
        ],
        "correct": 1,
        "correctText": "つよくなかったです",
        "explanation": "( あまり  + つよくなかったです )"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. おいし",
          "2. おいしい",
          "3. おいしく",
          "4. おいしくて"
        ],
        "correct": 1,
        "correctText": "おいし",
        "explanation": "( おいしそうに見えた  (trông ngon))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. なって",
          "2. なり",
          "3. なる",
          "4. なった"
        ],
        "correct": 1,
        "correctText": "なって",
        "explanation": "( なってしまいました  (đã no căng))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. ぜひ",
          "2. けっして",
          "3. あまり",
          "4. 少しも"
        ],
        "correct": 1,
        "correctText": "ぜひ",
        "explanation": "( ぜひ  また  行きたいです  (nhất định muốn đi lại))"
      }
    ]
  },
  {
    "index": 49,
    "code": "N4-24",
    "level": "N4",
    "title": "Đề N4-24: Tôn Kính Ngữ ( 尊敬語  — お〜になります‧ Đặc biệt — Bài 49) — Nguồn: Nihongo NET N4 Part",
    "passage": "花や 木の 世話を することは けんこうに いいと【 16 】います。また、花は かざる【 17 】でも 体に いいそうです。花を 見ると 気持ちが【 18 】なります。花は 色に よって ちがう 働きが ある【 19 】です。たとえば 赤や ⻩色の 花は 人を 元 気に して【 20 】そうです。( GoJapan N4 Đề 7 )",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "「あした 行きますか。」「あなたが( )、わたしも 行 きます。」",
        "options": [
          "1. 行くなら",
          "2. 行くのに",
          "3. 行きなが\nら",
          "4. 行くほど"
        ],
        "correct": 1,
        "correctText": "行くなら",
        "explanation": "(Điều kiện V るなら )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "部屋の 電気が 消えて います。だれも( )ようです。",
        "options": [
          "1. いない",
          "2. いなく",
          "3. いなくて",
          "4.\nいません"
        ],
        "correct": 1,
        "correctText": "いない",
        "explanation": "(Suy đoán: V 普通形  + ようです )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "わたしは 先生から さくぶんを なおして( )。",
        "options": [
          "1. もらいました",
          "2. あげました",
          "3. く\nれました",
          "4. いました"
        ],
        "correct": 1,
        "correctText": "もらいました",
        "explanation": "( わたしは  N に / から  V てもらいました )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "この 部屋は きんえんです。たばこを( )。",
        "options": [
          "1. すってはいけません",
          "2. すわなくても\nいいです",
          "3. すったことがあります",
          "4.\nすうようになりました"
        ],
        "correct": 1,
        "correctText": "すってはいけません",
        "explanation": "(Cấm đoán V てはいけま せん )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "薬を 飲んだ( )、まだ 頭が いたいです。",
        "options": [
          "1. のに",
          "2. ので",
          "3. ほど",
          "4. なら"
        ],
        "correct": 1,
        "correctText": "のに",
        "explanation": "(Nghịch lý trái kỳ vọng 〜のに )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "この 薬は 大きくて 飲み( )です。",
        "options": [
          "1. にくい",
          "2. やすい",
          "3. すぎ",
          "4. たい"
        ],
        "correct": 1,
        "correctText": "にくい",
        "explanation": "(Khó làm: V ます (bỏ ます ) + にくい )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "うしろの 人にも 聞こえる( )に、大きい 声で 話し てください。",
        "options": [
          "1. よう",
          "2. こと",
          "3. もの",
          "4. はず"
        ],
        "correct": 1,
        "correctText": "よう",
        "explanation": "(Mục đích khả năng: V るように )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "来月から 新しい 店で はたらく( )なりました。",
        "options": [
          "1. ことに",
          "2. ために",
          "3. ものに",
          "4. と\nころに"
        ],
        "correct": 1,
        "correctText": "ことに",
        "explanation": "(Được quyết định: V ることになりました )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "あそこに「さくら」( )名前の 店が あります。",
        "options": [
          "1. という",
          "2. といって",
          "3. といいながら",
          "4. といえば"
        ],
        "correct": 1,
        "correctText": "という",
        "explanation": "(Định danh: N1 という N2)"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "となりの 部屋から ピアノの 音が( )。",
        "options": [
          "1. きこえます",
          "2. きけます",
          "3. ききま\nす",
          "4. きかせます"
        ],
        "correct": 1,
        "correctText": "きこえます",
        "explanation": "(Tự nhiên nghe thấy: きこえます )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "リーさんは 田中さんの ___ ___ ★ ___ 思ってい ます。",
        "options": [
          "1. を",
          "2. 聞かせて",
          "3. ほしいと",
          "4. 歌"
        ],
        "correct": 2,
        "correctText": "聞かせて",
        "explanation": "[4→1→2→3 (歌を  聞かせて  ほしいと) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "道が ___ ___ ★ ___ しまいました。",
        "options": [
          "1. 遅れて",
          "2. 会社に",
          "3. こんでいて",
          "4.\n電車が"
        ],
        "correct": 2,
        "correctText": "会社に",
        "explanation": "[3→4→2→1 (こんでいて  電車が  会社に  遅れて) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "田中さんに ___ ___ ★ ___ ください。",
        "options": [
          "1. と",
          "2. 始まる",
          "3. 会議が",
          "4. 伝えて"
        ],
        "correct": 1,
        "correctText": "と",
        "explanation": "[3→2→1→4 (会議が  始まる  と  伝えて) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "わたしは 友だちに ___ ___ ★ ___。",
        "options": [
          "1. 本を",
          "2. 新しい",
          "3. 買って",
          "4. あげ\nました"
        ],
        "correct": 3,
        "correctText": "買って",
        "explanation": "[2→1→3→4 (新しい  本を  買って  あげました。) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "あしたは あさ 六時に ___ ___ ★ ___ なりませ ん。",
        "options": [
          "1. ので",
          "2. しなければ",
          "3. じゅんびを",
          "4. 出かける"
        ],
        "correct": 3,
        "correctText": "じゅんびを",
        "explanation": "[4→1→3→2 (出かけるので  じ ゅんびを  しなければ) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. 言われて",
          "2. 言って",
          "3. 言わせて",
          "4. 言えて"
        ],
        "correct": 1,
        "correctText": "言われて",
        "explanation": "( 〜と言われています  (được cho là))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. だけ",
          "2. しか",
          "3. ほど",
          "4. ばかり"
        ],
        "correct": 1,
        "correctText": "だけ",
        "explanation": "( かざるだけでも  (chỉ cần trang trí thôi cũng))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. よく",
          "2. いい",
          "3. よい",
          "4. よくて"
        ],
        "correct": 1,
        "correctText": "よく",
        "explanation": "( 気持ちが  よくなります  (tâm trạng tốt lên))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. そう",
          "2. よう",
          "3. はず",
          "4. つもり"
        ],
        "correct": 1,
        "correctText": "そう",
        "explanation": "( あるそうです  (nghe nói là có))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. くれる",
          "2. あげる",
          "3. もらう",
          "4. やる"
        ],
        "correct": 1,
        "correctText": "くれる",
        "explanation": "( 元気にしてくれる  (làm cho mình khỏe khoắn))"
      }
    ]
  },
  {
    "index": 50,
    "code": "N4-25",
    "level": "N4",
    "title": "Đề N4-25: Khiêm Nhường Ngữ ( 謙譲語 ) & Quyết Định ことになった  (Bài 50) — Nguồn: Nihongo NET N4",
    "passage": "日本の 夏は あつくて むしあついです。だから、エアコンを【 16 】まま 寝る 人が 多いです。【 17 】、体には あまり よく ありません。かぜを ひかない【 18 】に、寝る まえに タイマーを セットして【 19 】ほうが いいです。また、朝 起きたら コップ 一杯の 水を【 20 】ように しましょう。",
    "questions": [
      {
        "id": 1,
        "mondai": 1,
        "type": "M1",
        "question": "妹が わからないと 言ったので、わたしが 教えて ( )。",
        "options": [
          "1. あげました",
          "2. くれました",
          "3. もら\nいました",
          "4. いただきました"
        ],
        "correct": 1,
        "correctText": "あげました",
        "explanation": "( わたしが  N に  V てあげました )"
      },
      {
        "id": 2,
        "mondai": 1,
        "type": "M1",
        "question": "あしたは 試験ですから、今夜は べんきょうし( )。",
        "options": [
          "1. なければなりません",
          "2. なくてもいい\nです",
          "3. てはいけません",
          "4. ながらいま\nす"
        ],
        "correct": 1,
        "correctText": "なければなりませ ん",
        "explanation": "(Nghĩa vụ なければなりません )"
      },
      {
        "id": 3,
        "mondai": 1,
        "type": "M1",
        "question": "空が 暗く なりました。雨が ふる( )。",
        "options": [
          "1. かもしれません",
          "2. ことにしました",
          "3. はずでした",
          "4. ようになりました"
        ],
        "correct": 1,
        "correctText": "かもしれません",
        "explanation": "(Có lẽ: 〜かもしれません )"
      },
      {
        "id": 4,
        "mondai": 1,
        "type": "M1",
        "question": "ゆうべ ケーキを( )すぎて、おなかが いたく なりま した。",
        "options": [
          "1. 食べ",
          "2. 食べて",
          "3. 食べる",
          "4. 食べ\nた"
        ],
        "correct": 1,
        "correctText": "食べ",
        "explanation": "(Quá mức: V ます (bỏ ま す ) + すぎる )"
      },
      {
        "id": 5,
        "mondai": 1,
        "type": "M1",
        "question": "音楽を( )ながら、そうじを します。",
        "options": [
          "1. 聞き",
          "2. 聞いて",
          "3. 聞く",
          "4. 聞いた"
        ],
        "correct": 1,
        "correctText": "聞き",
        "explanation": "(Song song: V ます (bỏ ます ) + ながら )"
      },
      {
        "id": 6,
        "mondai": 1,
        "type": "M1",
        "question": "まいにち 練習して、およげる( )。",
        "options": [
          "1. ようになりました",
          "2. ことにしました",
          "3. ところです",
          "4. つもりです"
        ],
        "correct": 1,
        "correctText": "ようになりました",
        "explanation": "(Biến đổi năng lực: ようになり ました )"
      },
      {
        "id": 7,
        "mondai": 1,
        "type": "M1",
        "question": "リムさんは 今日 来ると 言っていましたから、もうすぐ 来る( )です。",
        "options": [
          "1. はず",
          "2. ため",
          "3. まま",
          "4. ながら"
        ],
        "correct": 1,
        "correctText": "はず",
        "explanation": "(Chắc chắn có căn cứ: V るはずです )"
      },
      {
        "id": 8,
        "mondai": 1,
        "type": "M1",
        "question": "「どうして おくれたんですか。」 ― 「バスが( )んで す。」",
        "options": [
          "1. 来なかった",
          "2. 来ませんでした",
          "3. 来\nないだ",
          "4. 来なくて"
        ],
        "correct": 1,
        "correctText": "来なかった",
        "explanation": "(Giải thích: V 普通形  + んです )"
      },
      {
        "id": 9,
        "mondai": 1,
        "type": "M1",
        "question": "この 店は 料理も おいしい( )、ねだんも やすいで す。",
        "options": [
          "1. し",
          "2. で",
          "3. から",
          "4. のに"
        ],
        "correct": 1,
        "correctText": "し",
        "explanation": "(Liệt kê đặc điểm/lý do 〜し )"
      },
      {
        "id": 10,
        "mondai": 1,
        "type": "M1",
        "question": "パーティーの まえに、ビールを( )おいて くださ い。",
        "options": [
          "1. ひやして",
          "2. ひえて",
          "3. あたためて",
          "4. わいて"
        ],
        "correct": 1,
        "correctText": "ひやして",
        "explanation": "(Chuẩn bị trước: ひやしておきます )"
      },
      {
        "id": 11,
        "mondai": 2,
        "type": "M2 ★",
        "question": "道が ___ ___ ★ ___ いいですよ。",
        "options": [
          "1. 行った",
          "2. 早く",
          "3. こむかもしれませ\nんから",
          "4. ほうが"
        ],
        "correct": 1,
        "correctText": "行った",
        "explanation": "[3→2→1→4 (こむかも しれませんから  早く  行った  ほうが) ]"
      },
      {
        "id": 12,
        "mondai": 2,
        "type": "M2 ★",
        "question": "家を ___ ___ ★ ___ います。",
        "options": [
          "1. ためて",
          "2. ために",
          "3. 買う",
          "4. お金\nを"
        ],
        "correct": 4,
        "correctText": "お金を",
        "explanation": "[3→2→4→1 (家を  買う  ために  お金を  ためて) ]"
      },
      {
        "id": 13,
        "mondai": 2,
        "type": "M2 ★",
        "question": "この 本は ___ ___ ★ ___ できません。",
        "options": [
          "1. ことが",
          "2. 読む",
          "3. 小さくて",
          "4. 字\nが"
        ],
        "correct": 2,
        "correctText": "読む",
        "explanation": "[4→3→2→1 (字が  小さくて  読む  ことが  できません。) ]"
      },
      {
        "id": 14,
        "mondai": 2,
        "type": "M2 ★",
        "question": "友だちが 来る ___ ___ ★ ___ おきました。",
        "options": [
          "1. して",
          "2. そうじを",
          "3. まえに",
          "4. 部\n屋の"
        ],
        "correct": 2,
        "correctText": "そうじを",
        "explanation": "[3→4→2→1 (まえに  部屋の  そうじを  し て) ]"
      },
      {
        "id": 15,
        "mondai": 2,
        "type": "M2 ★",
        "question": "___ ___ ★ ___ は リムさんです。",
        "options": [
          "1. 人",
          "2. いる",
          "3. あそこで",
          "4. 話して"
        ],
        "correct": 2,
        "correctText": "いる",
        "explanation": "[3→4→2→1 (あそこで  話して  いる  人は) ]"
      },
      {
        "id": 16,
        "mondai": 3,
        "type": "M3",
        "question": "【 16 】",
        "options": [
          "1. つけた",
          "2. つける",
          "3. つけて",
          "4. つき"
        ],
        "correct": 1,
        "correctText": "つけた",
        "explanation": "(V た  + まま  (để nguyên trạng thái bật))"
      },
      {
        "id": 17,
        "mondai": 3,
        "type": "M3",
        "question": "【 17 】",
        "options": [
          "1. しかし",
          "2. ですから",
          "3. それに",
          "4. たとえば"
        ],
        "correct": 1,
        "correctText": "しかし",
        "explanation": "( しかし  (tuy nhiên lại không tốt cho cơ thể))"
      },
      {
        "id": 18,
        "mondai": 3,
        "type": "M3",
        "question": "【 18 】",
        "options": [
          "1. よう",
          "2. ため",
          "3. こと",
          "4. はず"
        ],
        "correct": 1,
        "correctText": "よう",
        "explanation": "( かぜをひかないように  (để không bị cảm))"
      },
      {
        "id": 19,
        "mondai": 3,
        "type": "M3",
        "question": "【 19 】",
        "options": [
          "1. おいた",
          "2. あった",
          "3. みた",
          "4. いた"
        ],
        "correct": 1,
        "correctText": "おいた",
        "explanation": "( セットしておいたほうがいい  (nên hẹn giờ sẵn))"
      },
      {
        "id": 20,
        "mondai": 3,
        "type": "M3",
        "question": "【 20 】",
        "options": [
          "1. 飲む",
          "2. 飲んだ",
          "3. 飲んで",
          "4. 飲み"
        ],
        "correct": 1,
        "correctText": "飲む",
        "explanation": "(V るようにしましょう  (hãy cố gắng duy trì))"
      }
    ]
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EXAMS_N4_DATA;
  } else {
    root.EXAMS_N4_DATA = EXAMS_N4_DATA;
  }
})(typeof window !== 'undefined' ? window : global);
