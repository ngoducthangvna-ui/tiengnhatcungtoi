const fs = require('path');
const fsModule = require('fs');

const fullDict = JSON.parse(fsModule.readFileSync('scripts/full_ruby_dict.json', 'utf8'));

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
  for (let i = 0; i < fullDict.length; i++) {
    const word = fullDict[i][0];
    const rubyTag = fullDict[i][1];
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

// 25 Dokkai items for Lessons 26 to 50
const rawDokkai = [
  // Bài 26: 引っ越しと ゴミの 出し方
  {
    id: "dokkai-26",
    lessonId: "bai-26",
    title: "Bài Đọc Hiểu - Bài 26 Minna",
    subTitle: "新しい アパートと ゴミの 出し方 (Căn hộ mới và cách đổ rác)",
    description: "Đoạn văn kể về trải nghiệm chuyển đến khu nhà mới, hỏi thăm người quản lý về quy định phân loại rác và sử dụng cấu trúc 〜んです.",
    passage: "先週、新しい アパートへ 引っ越したんです。部屋は 駅から 近くて、とても 便利なんです。\nでも、一つ 困った ことが ありました。ゴミの 出し方が よく 分からないんです。\nそれで、アパートの 管理人さんに 聞きに 行きました。\n「すみません、燃える ゴミは いつ 出せば いいですか」と 聞きました。\n管理人さんは 親切に 教えて くれました。「燃える ゴミは 火曜日と 金曜日の 朝 8時までに 出して ください。カンや ビンは 水曜日の 朝ですよ」\n日本の 生活は ルールが 多いですが、管理人さんが 親切なので、安心しました。",
    questions: [
      {
        id: "dk26-1",
        question: "筆者は 先週 何を しましたか。",
        options: ["新しい アパートへ 引っ越した", "国へ 帰った", "車を 買った", "仕事を 辞めた"],
        correctIdx: 0,
        explanation: "Trong bài:「先週、新しい アパートへ 引っ越したんです。」"
      },
      {
        id: "dk26-2",
        question: "アパートの 部屋は どうですか。",
        options: ["駅から 近くて 便利", "駅から 遠くて 不便", "狭くて 暗い", "家賃が 高すぎる"],
        correctIdx: 0,
        explanation: "Trong bài:「部屋は 駅から 近くて、とても 便利なんです。」"
      },
      {
        id: "dk26-3",
        question: "筆者は 何に 困って いましたか。",
        options: ["ゴミの 出し方が 分からないこと", "鍵を なくしたこと", "お金が ないこと", "電気が つかないこと"],
        correctIdx: 0,
        explanation: "Trong bài:「ゴミの 出し方が よく 分からないんです。」"
      },
      {
        id: "dk26-4",
        question: "燃える ゴミは いつ 出しますか。",
        options: ["火曜日と 金曜日の 朝", "水曜日の 昼", "土曜日の 夜", "毎日の 朝"],
        correctIdx: 0,
        explanation: "Trong bài:「燃える ゴミは 火曜日と 金曜日の 朝 8時までに 出して ください。」"
      },
      {
        id: "dk26-5",
        question: "管理人さんは どんな 人ですか。",
        options: ["親切な 人", "怖い 人", "厳しい 人", "静かな 人"],
        correctIdx: 0,
        explanation: "Trong bài:「管理人さんは 親切に 教えて くれました。」"
      }
    ]
  },

  // Bài 27: 日本の 温泉
  {
    id: "dokkai-27",
    lessonId: "bai-27",
    title: "Bài Đọc Hiểu - Bài 27 Minna",
    subTitle: "温泉で できること (Những trải nghiệm tại suối nước nóng)",
    description: "Đoạn văn miêu tả chuyến đi suối nước nóng ngắm cảnh núi Phú Sĩ ứng dụng thể khả năng 可能形.",
    passage: "日本には たくさんの 温泉が あります。先月、私は 箱根の 温泉へ 行きました。\n露天風呂からは 富士山が はっきりと 見えました。お湯は 温かくて、とても 気持ちが よかったです。\nこの 旅館では、夜 8時まで 広い 部屋で おいしい 料理が 食べられます。\nまた、近くの 川では 鳥の 声が 聞こえて、静かに 過ごす ことが できました。\n忙しい 毎日ですが、温泉に 行くと、疲れを 取る ことが できます。外国人でも 簡単に 予約が できますから、皆さんも ぜひ 行って みてください。",
    questions: [
      {
        id: "dk27-1",
        question: "筆者は 先月 どこへ 行きましたか。",
        options: ["箱根の 温泉", "京都の お寺", "東京タワー", "北海道の スキー場"],
        correctIdx: 0,
        explanation: "Trong bài:「先月、私は 箱根の 温泉へ 行きました。」"
      },
      {
        id: "dk27-2",
        question: "露天風呂から 何が 見えましたか。",
        options: ["富士山", "海", "新幹線", "星空"],
        correctIdx: 0,
        explanation: "Trong bài:「露天風呂からは 富士山が はっきりと 見えました。」"
      },
      {
        id: "dk27-3",
        question: "川からは 何が 聞こえましたか。",
        options: ["鳥の 声", "電車の 音", "車の 音", "人の 話し声"],
        correctIdx: 0,
        explanation: "Trong bài:「近くの 川では 鳥の 声が 聞こえて...」"
      },
      {
        id: "dk27-4",
        question: "この 旅館では 何時まで 料理が 食べられますか。",
        options: ["夜 8時まで", "夜 10時まで", "夕方 5時まで", "朝 9時まで"],
        correctIdx: 0,
        explanation: "Trong bài:「夜 8時まで 広い 部屋で おいしい 料理が 食べられます。」"
      },
      {
        id: "dk27-5",
        question: "温泉に 行くと どうなりますか。",
        options: ["疲れを 取る ことが できる", "風邪を 引く", "眠れなく なる", "お腹が すく"],
        correctIdx: 0,
        explanation: "Trong bài:「温泉に 行くと、疲れを 取る ことが できます。」"
      }
    ]
  },

  // Bài 28: アルバイトと 勉強
  {
    id: "dokkai-28",
    lessonId: "bai-28",
    title: "Bài Đọc Hiểu - Bài 28 Minna",
    subTitle: "留学生の 忙しい 毎日 (Cuộc sống bận rộn của du học sinh)",
    description: "Đoạn văn miêu tả cuộc sống vừa học vừa làm thêm của du học sinh ứng dụng cấu trúc 〜ながら và 〜し、〜し.",
    passage: "私は ベトナムから 来た 留学生です。日本に 来てから 1年に なります。\n平日は 大学で 経済を 勉強しながら、夜は コンビニで アルバイトを して います。\nアルバイトの 仕事は レジ打ちや 品出しなど、やることが たくさん あります。\n店長は 優しいし、給料も いいし、同僚も 親切なので、とても 働きやすいです。\n週末は 日本の 音楽を 聞きながら、部屋の 掃除を します。大変ですが、自分の 将来の ために 頑張って います。",
    questions: [
      {
        id: "dk28-1",
        question: "筆者は 昼間 大学で 何を して いますか。",
        options: ["経済を 勉強して いる", "日本語を 教えて いる", "寝て いる", "運動して いる"],
        correctIdx: 0,
        explanation: "Trong bài:「平日は 大学で 経済を 勉強しながら...」"
      },
      {
        id: "dk28-2",
        question: "夜は どこで アルバイトを して いますか。",
        options: ["コンビニ", "レストラン", "ホテル", "スーパー"],
        correctIdx: 0,
        explanation: "Trong bài:「夜は コンビニで アルバイトを して います。」"
      },
      {
        id: "dk28-3",
        question: "コンビニで 働く 理由として 正しいものは どれですか。",
        options: ["店長が 優しいし、給料も いいし、同僚も 親切だから", "家から 近いから だけ", "仕事が 全然 ないから", "友達が いるから だけ"],
        correctIdx: 0,
        explanation: "Trong bài:「店長は 優しいし、給料も いいし、同僚も 親切なので...」"
      },
      {
        id: "dk28-4",
        question: "週末は どんな ことを して いますか。",
        options: ["音楽を 聞きながら 掃除を して いる", "旅行に 行って いる", "ずっと 寝て いる", "一日中 買い物して いる"],
        correctIdx: 0,
        explanation: "Trong bài:「週末は 日本の 音楽を 聞きながら、部屋の 掃除を します。」"
      },
      {
        id: "dk28-5",
        question: "筆者は どんな 気持ちで 毎日を 過ごして いますか。",
        options: ["大変だが 将来の ために 頑張って いる", "嫌で 帰国したい", "暇で 退屈して いる", "諦めて いる"],
        correctIdx: 0,
        explanation: "Trong bài:「大変ですが、自分の 将来の ために 頑張って います。」"
      }
    ]
  },

  // Bài 29: 電車に 忘れた かばん
  {
    id: "dokkai-29",
    lessonId: "bai-29",
    title: "Bài Đọc Hiểu - Bài 29 Minna",
    subTitle: "落とし物と 駅員さん (Đồ bỏ quên và nhân viên nhà ga)",
    description: "Đoạn văn kể về sự cố để quên cặp trên tàu điện và nhận lại được đồ nhờ nhân viên ga ứng dụng tự động từ và 〜てしまいました.",
    passage: "昨日、私は 大変な 失敗を して しまいました。電車の中に かばんを 忘れて しまったんです。\n駅の 改札を 出た 時、財布や パスポートが 入った かばんが ない ことに 気が つきました。\n急いで 駅員さんの ところへ 行って、「かばんを 電車に 忘れて しまいました」と 言いました。\n駅員さんは 電車の 時間や かばんの 色を 丁寧に 聞いて くれました。\n30分後、駅員さんから「次の 駅で かばんが 見つかりましたよ」と 連絡が ありました。\n中を 確認すると、お金も パスポートも 全部 そのまま 入って いました。日本の 駅員さんに 心から 感謝しました。",
    questions: [
      {
        id: "dk29-1",
        question: "筆者は 昨日 どんな 失敗を しましたか。",
        options: ["電車の中に かばんを 忘れた", "電車に 乗り遅れた", "財布を 落として なくした", "切符を 買い忘れた"],
        correctIdx: 0,
        explanation: "Trong bài:「電車の中に かばんを 忘れて しまったんです。」"
      },
      {
        id: "dk29-2",
        question: "かばんの中に 何が 入って いましたか。",
        options: ["財布や パスポート", "服や 靴", "本と ノート だけ", "カメラ だけ"],
        correctIdx: 0,
        explanation: "Trong bài:「財布や パスポートが 入った かばんが ない...」"
      },
      {
        id: "dk29-3",
        question: "筆者は 誰の ところへ 相談に 行きましたか。",
        options: ["駅員さん", "警察官", "友達", "先生"],
        correctIdx: 0,
        explanation: "Trong bài:「急いで 駅員さんの ところへ 行って...」"
      },
      {
        id: "dk29-4",
        question: "かばんは どうなりましたか。",
        options: ["次の 駅で 見つかった", "見つからなかった", "盗まれて お金が なくなった", "川に 落ちて いた"],
        correctIdx: 0,
        explanation: "Trong bài:「次の 駅で かばんが 見つかりましたよ」"
      },
      {
        id: "dk29-5",
        question: "かばんの 中身は どうでしたか。",
        options: ["全部 そのまま 入って いた", "お金だけ なくなって いた", "パスポートが 汚れて いた", "中が 空だった"],
        correctIdx: 0,
        explanation: "Trong bài:「お金も パスポートも 全部 そのまま 入って いました。」"
      }
    ]
  },

  // Bài 30: 旅行の 準備
  {
    id: "dokkai-30",
    lessonId: "bai-30",
    title: "Bài Đọc Hiểu - Bài 30 Minna",
    subTitle: "北海道旅行の 計画と 準備 (Kế hoạch và sự chuẩn bị cho chuyến đi Hokkaido)",
    description: "Đoạn văn kể về các bước chuẩn bị kỹ lưỡng trước khi đi du lịch Hokkaido ứng dụng ngữ pháp 〜てあります và 〜ておきます.",
    passage: "来週から 友達と 3日間、北海道へ 旅行に 行きます。\nホテルは もう インターネットで 予約して ありますし、飛行機の 切符も 買って あります。\n北海道は まだ 寒いですから、暖かい 上着を 準備して おかなければ なりません。\n部屋の 壁には 北海道の 地図が はって あります。行きたい 観光地に 赤い ペンで 印が つけて あります。\n出発する 前に、カメラの 充電を して おきます。おいしい ラーメンを 食べるのが とても 楽しみです。",
    questions: [
      {
        id: "dk30-1",
        question: "筆者は 来週 どこへ 行きますか。",
        options: ["北海道", "沖縄", "京都", "東京"],
        correctIdx: 0,
        explanation: "Trong bài:「来週から 友達と 3日間、北海道へ 旅行に 行きます。」"
      },
      {
        id: "dk30-2",
        question: "ホテルや 飛行機の 切符は どうして ありますか。",
        options: ["もう 予約したり 買ったり して ある", "まだ 準備して いない", "旅行会社に 頼む つもりだ", "来週 買う 予定だ"],
        correctIdx: 0,
        explanation: "Trong bài:「ホテルは もう インターネットで 予約して ありますし、飛行機の 切符も 買って あります。」"
      },
      {
        id: "dk30-3",
        question: "部屋の 壁には 何が して ありますか。",
        options: ["北海道の 地図が はって ある", "カレンダーが はって ある", "写真が かけて ある", "時計が 置いて ある"],
        correctIdx: 0,
        explanation: "Trong bài:「部屋の 壁には 北海道の 地図が はって あります。」"
      },
      {
        id: "dk30-4",
        question: "出発する 前に 何を して おきますか。",
        options: ["カメラの 充電を して おく", "新しい 靴を 買う", "部屋を 引っ越す", "髪を 切る"],
        correctIdx: 0,
        explanation: "Trong bài:「出発する 前に、カメラの 充電を して おきます。」"
      },
      {
        id: "dk30-5",
        question: "筆者が 楽しみに して いる ことは 何ですか。",
        options: ["おいしい ラーメンを 食べること", "スキーを すること", "温泉に 入ること だけ", "お土産を 売ること"],
        correctIdx: 0,
        explanation: "Trong bài:「おいしい ラーメンを 食べるのが とても 楽しみです。」"
      }
    ]
  },

  // Bài 31: 将来の 夢
  {
    id: "dokkai-31",
    lessonId: "bai-31",
    title: "Bài Đọc Hiểu - Bài 31 Minna",
    subTitle: "私の 夢と 計画 (Ước mơ và kế hoạch tương lai của tôi)",
    description: "Đoạn văn kể về ước mơ mở một quán ăn Việt Nam tại Nhật Bản ứng dụng thể ý chí 意向形 và 〜つもりです / 〜予定です.",
    passage: "大学を 卒業したら、私は 日本の レストランで 3年間 働こうと 思って います。\n日本の 料理の 作り方や 接客の マナーを しっかり 学ぶ つもりです。\nそれから、30歳までに 自分の ベトナム料理の 店を 開く 予定です。\n店では フォーや 生春巻きなど、おいしい 本場の 料理を 出そうと 考えて います。\n夢を かなえる ために、今から 毎月 貯金を しようと 思って います。どんなに 大変でも、決して 諦めない つもりです。",
    questions: [
      {
        id: "dk31-1",
        question: "大学を 卒業したら、まず 何を しようと 思って いますか。",
        options: ["日本の レストランで 3年間 働く", "すぐに 国へ 帰る", "大学院に 進む", "世界旅行に 出かける"],
        correctIdx: 0,
        explanation: "Trong bài:「大学を 卒業したら、私は 日本の レストランで 3年間 働こうと 思って います。」"
      },
      {
        id: "dk31-2",
        question: "レストランで 何を 学ぶ つもりですか。",
        options: ["料理の 作り方や 接客の マナー", "英語の 会話", "コンピューターの 技術", "車の 運転"],
        correctIdx: 0,
        explanation: "Trong bài:「日本の 料理の 作り方や 接客の マナーを しっかり 学ぶ つもりです。」"
      },
      {
        id: "dk31-3",
        question: "何歳までに 自分の 店を 開く 予定ですか。",
        options: ["30歳までに", "25歳までに", "35歳までに", "40歳までに"],
        correctIdx: 0,
        explanation: "Trong bài:「それから、30歳までに 自分の ベトナム料理の 店を 開く 予定です。」"
      },
      {
        id: "dk31-4",
        question: "自分の 店で どんな 料理を 出そうと 考えて いますか。",
        options: ["フォーや 生春巻きなどの ベトナム料理", "すしや 天ぷら", "ピザや パスタ", "ハンバーガー"],
        correctIdx: 0,
        explanation: "Trong bài:「店では フォーや 生春巻きなど、おいしい 本場の 料理を 出そうと 考えて います。」"
      },
      {
        id: "dk31-5",
        question: "夢を かなえる ために、今 何を しようと して いますか。",
        options: ["毎月 貯金を しようと 思って いる", "新しい 家を 買おうと して いる", "仕事を 休もうと して いる", "友達と 遊んで いる"],
        correctIdx: 0,
        explanation: "Trong bài:「夢を かなえる ために、今から 毎月 貯金を しようと 思って います。」"
      }
    ]
  },

  // Bài 32: 健康的な 生活
  {
    id: "dokkai-32",
    lessonId: "bai-32",
    title: "Bài Đọc Hiểu - Bài 32 Minna",
    subTitle: "医者からの アドバイス (Lời khuyên bổ ích từ bác sĩ)",
    description: "Đoạn văn kể về lời khuyên duy trì sức khỏe khi bị căng thẳng, mệt mỏi ứng dụng cấu trúc 〜ほうがいいです và 〜かもしれません.",
    passage: "最近、仕事が 忙しくて、夜 なかなか 眠れませんでした。頭も 痛かったので、病院へ 行きました。\nお医者さんは 私に いくつか アドバイスを して くれました。\n「夜 遅くまで スマホを 見ない ほうが いいですよ。お風呂に ゆっくり 入って、体を 温めた ほうが いいでしょう。\nまた、寝る 前に 温かい 牛乳を 飲むと、よく 眠れるかも しれません」と 言いました。\n家に 帰ってから、先生の 言った とおりに すると、ぐっすり 眠る ことが できました。健康が 一番 大切ですね。",
    questions: [
      {
        id: "dk32-1",
        question: "筆者は どうして 病院へ 行きましたか。",
        options: ["夜 眠れなくて、頭も 痛かったから", "足を 怪我したから", "風邪を 引いて 咳が 止まらなかったから", "薬を もらいに 行った だけ"],
        correctIdx: 0,
        explanation: "Trong bài:「夜 なかなか 眠れませんでした。頭も 痛かったので、病院へ 行きました。」"
      },
      {
        id: "dk32-2",
        question: "お医者さんは スマホについて 何と 言いましたか。",
        options: ["夜 遅くまで 見ない ほうが いい", "一日中 使った ほうが いい", "新しい スマホを 買った ほうが いい", "何も 言わなかった"],
        correctIdx: 0,
        explanation: "Trong bài:「夜 遅くまで スマホを 見ない ほうが いいですよ。」"
      },
      {
        id: "dk32-3",
        question: "体を 温める ために 何を した ほうが いいと 言われましたか。",
        options: ["お風呂に ゆっくり 入る", "激しい 運動を する", "冷たい 水を 浴びる", "薬を たくさん 飲む"],
        correctIdx: 0,
        explanation: "Trong bài:「お風呂に ゆっくり 入って、体を 温めた ほうが いいでしょう。」"
      },
      {
        id: "dk32-4",
        question: "寝る 前に 何を 飲むと よく 眠れるかも しれませんか。",
        options: ["温かい 牛乳", "冷たい ビール", "濃い コーヒー", "熱い お茶"],
        correctIdx: 0,
        explanation: "Trong bài:「寝る 前に 温かい 牛乳を 飲むと、よく 眠れるかも しれません」"
      },
      {
        id: "dk32-5",
        question: "先生のアドバイスを 実行した後、筆者は どうなりましたか。",
        options: ["ぐっすり 眠る ことが できた", "まだ 眠れなかった", "頭痛が ひどく なった", "熱が 出た"],
        correctIdx: 0,
        explanation: "Trong bài:「先生の 言った とおりに すると、ぐっすり 眠る ことが できました。」"
      }
    ]
  },

  // Bài 33: 工場の 標識と 安全
  {
    id: "dokkai-33",
    lessonId: "bai-33",
    title: "Bài Đọc Hiểu - Bài 33 Minna",
    subTitle: "工場での 安全標識と ルール (Quy tắc an toàn và biển báo trong nhà máy)",
    description: "Đoạn văn kể về ngày đầu học việc tại xưởng sản xuất cơ khí ứng dụng thể mệnh lệnh, cấm chỉ và 〜という意味です.",
    passage: "私は 自動車の 部品を 作る 工場で 働いて います。\n工場の中には いろいろな 標識が あります。例えば、黄色い 看板に「立入禁止」と 書いて あります。\nこれは「ここへ 入るな」という 意味です。機械が 動いて いて 危ないからです。\nまた、赤い 看板の「火気厳禁」は「ここで タバコを 吸ったり、火を 使ったり しては いけない」という 意味です。\n毎朝の 朝礼で、班長は「指差し確認を しろ」「安全第一で 働け」と 言って います。事故を 起こさないように、ルールを 守る ことが 大切です。",
    questions: [
      {
        id: "dk33-1",
        question: "筆者は どんな 工場で 働いて いますか。",
        options: ["自動車の 部品を 作る 工場", "食品を 加工する 工場", "服を 縫う 工場", "薬を 作る 工場"],
        correctIdx: 0,
        explanation: "Trong bài:「私は 自動車の 部品を 作る 工場で 働いて います。」"
      },
      {
        id: "dk33-2",
        question: "「立入禁止」は どういう 意味ですか。",
        options: ["ここへ 入るな という 意味", "静かに しろ という 意味", "走れ という 意味", "靴を 脱げ という 意味"],
        correctIdx: 0,
        explanation: "Trong bài:「これは「ここへ 入るな」という 意味です。」"
      },
      {
        id: "dk33-3",
        question: "「火気厳禁」の 場所で 何を しては いけませんか。",
        options: ["タバコを 吸ったり、火を 使ったり しては いけない", "写真を 撮っては いけない", "大声で 話しては いけない", "食事を しては いけない"],
        correctIdx: 0,
        explanation: "Trong bài:「火気厳禁」は「ここで タバコを 吸ったり、火を 使ったり しては いけない」という 意味です。"
      },
      {
        id: "dk33-4",
        question: "班長は 朝礼で 何と 言って いますか。",
        options: ["「指差し確認を しろ」「安全第一で 働け」", "「早く 帰れ」", "「休まず 働け」", "「歌を 歌え」"],
        correctIdx: 0,
        explanation: "Trong bài:「班長は「指差し確認を しろ」「安全第一で 働け」と 言って います。」"
      },
      {
        id: "dk33-5",
        question: "工場で 働く ときに 最も 大切な ことは 何ですか。",
        options: ["事故を 起こさないように ルールを 守ること", "誰よりも 早く 作ること", "残業を たくさん すること", "お金を 稼ぐこと"],
        correctIdx: 0,
        explanation: "Trong bài:「事故を 起こさないように、ルールを 守る ことが 大切です。」"
      }
    ]
  },

  // Bài 34: 茶道の 体験
  {
    id: "dokkai-34",
    lessonId: "bai-34",
    title: "Bài Đọc Hiểu - Bài 34 Minna",
    subTitle: "初めての お茶会 (Lần đầu tham gia tiệc trà đạo)",
    description: "Đoạn văn kể về buổi trải nghiệm văn hóa trà đạo Nhật Bản ứng dụng ngữ pháp 〜とおりに và 〜あとで.",
    passage: "先週、大学の 日本文化体験で、初めて 茶道を 体験しました。\n先生が「私の やる とおりに、お茶を 点てて ください」と 言いました。\nまず、お菓子を 食べた あとで、お茶を いただきます。甘い お菓子を 食べた あとだと、苦い お茶が とても おいしく 感じられます。\nお茶碗を 手に 取ったら、時計の 針の 向きに 2回 回してから 飲みます。\n最初、正座を して 足が 痛く なりましたが、先生の 説明の とおりに やると、上手に できました。日本の 伝統文化は 奥が 深いです。",
    questions: [
      {
        id: "dk34-1",
        question: "筆者は 先週 何を 体験しましたか。",
        options: ["茶道 (お茶会)", "柔道", "歌舞伎", "着付け"],
        correctIdx: 0,
        explanation: "Trong bài:「初めて 茶道を 体験しました。」"
      },
      {
        id: "dk34-2",
        question: "お茶を 飲む 前に 何を しましたか。",
        options: ["甘い お菓子を 食べた", "ご飯を 食べた", "歌を 歌った", "外を 散歩した"],
        correctIdx: 0,
        explanation: "Trong bài:「まず、お菓子を 食べた あとで、お茶を いただきます。」"
      },
      {
        id: "dk34-3",
        question: "お菓子を 食べた あとで お茶を 飲むと、どう 感じられますか。",
        options: ["苦い お茶が とても おいしく 感じられる", "まずく 感じる", "甘すぎて 飲めない", "何も 感じない"],
        correctIdx: 0,
        explanation: "Trong bài:「甘い お菓子を 食べた あとだと、苦い お茶が とても おいしく 感じられます。」"
      },
      {
        id: "dk34-4",
        question: "お茶碗は 飲む 前に どうしますか。",
        options: ["時計の 針の 向きに 2回 回す", "反対向きに 3回 回す", "すぐに 一気に 飲む", "机の 上に 置く"],
        correctIdx: 0,
        explanation: "Trong bài:「時計の 針の 向きに 2回 回してから 飲みます。」"
      },
      {
        id: "dk34-5",
        question: "茶道を 体験して 筆者は どう 思いましたか。",
        options: ["日本の 伝統文化は 奥が 深いと 思った", "もう 二度と やりたくないと 思った", "つまらなかった", "簡単すぎると 思った"],
        correctIdx: 0,
        explanation: "Trong bài:「日本の 伝統文化は 奥が 深いです。」"
      }
    ]
  },

  // Bài 35: 日本の 四季と 祭り
  {
    id: "dokkai-35",
    lessonId: "bai-35",
    title: "Bài Đọc Hiểu - Bài 35 Minna",
    subTitle: "日本の 四季と 旅の アドバイス (Bốn mùa tươi đẹp và gợi ý du lịch Nhật Bản)",
    description: "Đoạn văn giới thiệu các mùa trong năm tại Nhật ứng dụng thể điều kiện 〜ば và なら.",
    passage: "日本には 春、夏、秋、冬の 四つの 季節が あります。\n春に なれば、桜が 咲いて、町中が ピンク色に なります。花見を するなら、京都や 奈良が おすすめです。\n夏は 蒸し暑いですが、各地で 花火大会や 祭りが 開かれます。涼しい 所へ 行きたければ、北海道へ 行くと いいでしょう。\n秋は 紅葉が きれいですし、食べ物も おいしいです。天気が よければ、山登りを 楽しむ ことが できます。\n冬になれば、雪が 降ります。スキーを するなら、長野や 新潟へ 行けば、素晴らしい 雪景色が 楽しめます。",
    questions: [
      {
        id: "dk35-1",
        question: "春に なれば 何が 咲きますか。",
        options: ["桜", "ひまわり", "紅葉", "梅"],
        correctIdx: 0,
        explanation: "Trong bài:「春に なれば、桜が 咲いて...」"
      },
      {
        id: "dk35-2",
        question: "花見を するなら どこが おすすめですか。",
        options: ["京都や 奈良", "沖縄", "北海道", "富士山の 頂上"],
        correctIdx: 0,
        explanation: "Trong bài:「花見を するなら、京都や 奈良が おすすめです。」"
      },
      {
        id: "dk35-3",
        question: "夏に 涼しい 所へ 行きたければ どこが いいですか。",
        options: ["北海道", "九州", "沖縄", "東京"],
        correctIdx: 0,
        explanation: "Trong bài:「涼しい 所へ 行きたければ、北海道へ 行くと いいでしょう。」"
      },
      {
        id: "dk35-4",
        question: "秋の 魅力として 書かれて いるものは どれですか。",
        options: ["紅葉が きれいで、食べ物が おいしい", "毎日 雪が 降る", "桜が 満開に なる", "海で 泳げる"],
        correctIdx: 0,
        explanation: "Trong bài:「秋は 紅葉が きれいですし、食べ物も おいしいです。」"
      },
      {
        id: "dk35-5",
        question: "スキーを するなら どこへ 行けば いいですか。",
        options: ["長野や 新潟", "大阪や 神戸", "広島や 岡山", "沖縄や 鹿児島"],
        correctIdx: 0,
        explanation: "Trong bài:「スキーを するなら、長野や 新潟へ 行けば...」"
      }
    ]
  },

  // Bài 36: 日本語の 勉強の 変化
  {
    id: "dokkai-36",
    lessonId: "bai-36",
    title: "Bài Đọc Hiểu - Bài 36 Minna",
    subTitle: "私の 日本語の 上達 (Sự tiến bộ trong tiếng Nhật của tôi)",
    description: "Đoạn văn kể về hành trình kiên trì học tiếng Nhật ứng dụng 〜ように なりました và 〜ように しています.",
    passage: "日本に 来た ばかりの ころは、日本語が 全然 話せませんでした。\nでも、毎日 諦めずに 勉強して、今では 日本語で 簡単な 日常会話が できるように なりました。\n最近は 日本の アニメも 字幕なしで 見られるように なりました。\n私は 毎日、新しい 漢字を 5つ 覚えるように して います。\nまた、分からない 言葉が あったら、すぐに 辞書で 調べるように して います。\n来年は JLPT N2に 合格できるように、これからも 一生懸命 努力を 続ける つもりです。",
    questions: [
      {
        id: "dk36-1",
        question: "日本に 来た ばかりの ころ、筆者は どうでしたか。",
        options: ["日本語が 全然 話せなかった", "日本語が とても 上手だった", "通訳の 仕事を して いた", "漢字を 全部 知って いた"],
        correctIdx: 0,
        explanation: "Trong bài:「日本に 来た ばかりの ころは、日本語が 全然 話せませんでした。」"
      },
      {
        id: "dk36-2",
        question: "今では どんな ことが できるように なりましたか。",
        options: ["簡単な 日常会話や 字幕なしで アニメを 見ること", "日本語の 小説を 書くこと", "ニュースの 原稿を 読むこと", "大学で 講義を すること"],
        correctIdx: 0,
        explanation: "Trong bài:「簡単な 日常会話が できるように なりました。最近は 日本の アニメも 字幕なしで 見られるように なりました。」"
      },
      {
        id: "dk36-3",
        question: "筆者は 毎日 どんな ことを するように して いますか。",
        options: ["新しい 漢字を 5つ 覚えるように して いる", "漢字を 100字 書いて いる", "一日中 テレビを 見て いる", "英語を 勉強して いる"],
        correctIdx: 0,
        explanation: "Trong bài:「私は 毎日、新しい 漢字を 5つ 覚えるように して います。」"
      },
      {
        id: "dk36-4",
        question: "分からない 言葉が あったら どうしますか。",
        options: ["すぐに 辞書で 調べるように して いる", "そのまま 忘れて しまう", "友達に 全部 聞く", "無視する"],
        correctIdx: 0,
        explanation: "Trong bài:「分からない 言葉が あったら、すぐに 辞書で 調べるように して います。」"
      },
      {
        id: "dk36-5",
        question: "来年の 目標は 何ですか。",
        options: ["JLPT N2に 合格すること", "帰国すること", "車を 買うこと", "会社を 辞めること"],
        correctIdx: 0,
        explanation: "Trong bài:「来年は JLPT N2に 合格できるように、これからも 一生懸命 努力を 続ける つもりです。」"
      }
    ]
  },

  // Bài 37: インスタントラーメンの 歴史
  {
    id: "dokkai-37",
    lessonId: "bai-37",
    title: "Bài Đọc Hiểu - Bài 37 Minna",
    subTitle: "世界中で 愛される ラーメン (Món mì ramen được yêu thích khắp thế giới)",
    description: "Đoạn văn kể về lịch sử ra đời của mì gói ăn liền tại Nhật ứng dụng thể bị động 受身形.",
    passage: "お湯を 注ぐだけで 食べられる インスタントラーメンは、日本で 発明されました。\n1958年に 安藤百福という 人によって、世界で 初めての チキンラーメンが 作られました。\n当時、人々は 手軽に おいしい ラーメンが 食べられると 言って、とても 驚きました。\nその後、1971年には カップヌードルが 発売され、世界中に 輸出されるように なりました。\n今では アジアだけでなく、アメリカや ヨーロッパなど、世界中の 人々に 毎日 たくさん 食べられて います。日本の 素晴らしい 発明の 一つです。",
    questions: [
      {
        id: "dk37-1",
        question: "インスタントラーメンは どこで 発明されましたか。",
        options: ["日本", "中国", "アメリカ", "イタリア"],
        correctIdx: 0,
        explanation: "Trong bài:「インスタントラーメンは、日本で 発明されました。」"
      },
      {
        id: "dk37-2",
        question: "世界で 初めての チキンラーメンは 誰によって 作られましたか。",
        options: ["安藤百福", "松下幸之助", "本田宗一郎", "豊田喜一郎"],
        correctIdx: 0,
        explanation: "Trong bài:「1958年に 安藤百福という 人によって... 作られました。」"
      },
      {
        id: "dk37-3",
        question: "チキンラーメンが 発売されたのは 何年ですか。",
        options: ["1958年", "1971年", "1945年", "2000年"],
        correctIdx: 0,
        explanation: "Trong bài:「1958年に 安藤百福という 人によって...」"
      },
      {
        id: "dk37-4",
        question: "カップヌードルが 発売されたのは 何年ですか。",
        options: ["1971年", "1958年", "1980年", "1990年"],
        correctIdx: 0,
        explanation: "Trong bài:「その後、1971年には カップヌードルが 発売され...」"
      },
      {
        id: "dk37-5",
        question: "現在、インスタントラーメンは どこで 食べられて いますか。",
        options: ["アジアや アメリカ、ヨーロッパなど 世界中", "日本だけで", "アジアの一部だけで", "宇宙だけで"],
        correctIdx: 0,
        explanation: "Trong bài:「今では アジアだけでなく、アメリカや ヨーロッパなど、世界中の 人々に...」"
      }
    ]
  },

  // Bài 38: ボランティアの 活動
  {
    id: "dokkai-38",
    lessonId: "bai-38",
    title: "Bài Đọc Hiểu - Bài 38 Minna",
    subTitle: "地域の ボランティア (Hoạt động tình nguyện tại khu dân cư)",
    description: "Đoạn văn kể về việc tham gia câu lạc bộ dọn dẹp vệ sinh công viên ứng dụng danh từ hóa V-の.",
    passage: "私は 週末に 地域の 清掃ボランティアに 参加して います。\n朝 8時に 公園に 集まって、ゴミを 拾うのが 私たちの 活動です。\n公園を きれいに することは、気持ちが いいだけでなく、近所の 人たちと 交流するのにも 役立ちます。\n先週は 子どもたちも 一緒に 参加して くれました。子どもたちが 一生懸命 ゴミを 拾って いるのを 見るのは、とても 嬉しいです。\n活動の あとで、みんなで お茶を 飲むのが 楽しみです。これからも 地域の ために 続けたいです。",
    questions: [
      {
        id: "dk38-1",
        question: "筆者は 週末に どんな ボランティアに 参加して いますか。",
        options: ["地域の 清掃ボランティア", "日本語を 教える ボランティア", "お年寄りの 介護ボランティア", "動物を 育てる ボランティア"],
        correctIdx: 0,
        explanation: "Trong bài:「私は 週末に 地域の 清掃ボランティアに 参加して います。」"
      },
      {
        id: "dk38-2",
        question: "ボランティアの 活動内容は 何ですか。",
        options: ["公園に 集まって ゴミを 拾うこと", "木を 植えること", "花を 売ること", "料理を 作ること"],
        correctIdx: 0,
        explanation: "Trong bài:「朝 8時に 公園に 集まって、ゴミを 拾うのが 私たちの 活動です。」"
      },
      {
        id: "dk38-3",
        question: "公園を きれいに することは 何に 役立ちますか。",
        options: ["近所の 人たちと 交流するのにも 役立つ", "お金を 稼ぐのに 役立つ", "有名に なるのに 役立つ", "宿題を 終わらせるのに 役立つ"],
        correctIdx: 0,
        explanation: "Trong bài:「近所の 人たちと 交流するのにも 役立ちます。」"
      },
      {
        id: "dk38-4",
        question: "筆者が 嬉しく 感じたのは どんな 時ですか。",
        options: ["子どもたちが 一生懸命 ゴミを 拾って いるのを 見た時", "お金を もらった時", "早く 終わった時", "褒められた時"],
        correctIdx: 0,
        explanation: "Trong bài:「子どもたちが 一生懸命 ゴミを 拾って いるのを 見るのは、とても 嬉しいです。」"
      },
      {
        id: "dk38-5",
        question: "活動の あとの 楽しみは 何ですか。",
        options: ["みんなで お茶を 飲むこと", "すぐ 帰って 寝ること", "お酒を 飲むこと", "買い物に 行くこと"],
        correctIdx: 0,
        explanation: "Trong bài:「活動の あとで、みんなで お茶を 飲むのが 楽しみです。」"
      }
    ]
  },

  // Bài 39: 台風の 被害と 対策
  {
    id: "dokkai-39",
    lessonId: "bai-39",
    title: "Bài Đọc Hiểu - Bài 39 Minna",
    subTitle: "大型台風と 交通の 乱れ (Cơn bão lớn và giao thông tê liệt)",
    description: "Đoạn văn kể về cơn bão nhiệt đới đổ bộ vào Tokyo gây ảnh hưởng đi lại ứng dụng 〜て/で và 〜ので chỉ nguyên nhân khách quan.",
    passage: "昨日、日本に 非常に 強い 台風が 上陸しました。\n強い 風と 大雨で、多くの 電車が 止まって しまいました。\n木が 倒れて 道路を ふさいだので、バスも 走る ことが できませんでした。\n学校は 休みになり、会社員も 家で リモートワークを 行いました。\n私の アパートも 停電して、電気が つかなくて 困りましたが、懐中電灯や 水を 準備して あったので、無事でした。\n自然災害が 多い 日本では、日頃から 備えて おく ことが 大切だと 実感しました。",
    questions: [
      {
        id: "dk39-1",
        question: "昨日 日本に 何が 来ましたか。",
        options: ["非常に 強い 台風", "大地震", "大雪", "火事"],
        correctIdx: 0,
        explanation: "Trong bài:「昨日、日本に 非常に 強い 台風が 上陸しました。」"
      },
      {
        id: "dk39-2",
        question: "電車が 止まった 原因は 何ですか。",
        options: ["強い 風と 大雨", "事故", "機械の 故障", "運転手の ストライキ"],
        correctIdx: 0,
        explanation: "Trong bài:「強い 風と 大雨で、多くの 電車が 止まって しまいました。」"
      },
      {
        id: "dk39-3",
        question: "バスが 走れなかったのは なぜですか。",
        options: ["木が 倒れて 道路を ふさいだので", "ガソリンが なくなったので", "祝日だったから", "雪が 積もったから"],
        correctIdx: 0,
        explanation: "Trong bài:「木が 倒れて 道路を ふさいだので、バスも 走る ことが できませんでした。」"
      },
      {
        id: "dk39-4",
        question: "筆者の アパートで 何が 起きましたか。",
        options: ["停電して 電気が つかなかった", "水漏れが 起きた", "窓ガラスが 割れた", "火事が 起きた"],
        correctIdx: 0,
        explanation: "Trong bài:「私の アパートも 停電して、電気が つかなくて 困りましたが...」"
      },
      {
        id: "dk39-5",
        question: "どうして 停電でも 無事でしたか。",
        options: ["懐中電灯や 水を 準備して あったので", "すぐに ホテルへ 逃げたので", "友達の 家へ 行ったので", "電気が すぐ 復旧したので"],
        correctIdx: 0,
        explanation: "Trong bài:「懐中電灯や 水を 準備して あったので、無事でした。」"
      }
    ]
  },

  // Bài 40: 宇宙への 挑戦
  {
    id: "dokkai-40",
    lessonId: "bai-40",
    title: "Bài Đọc Hiểu - Bài 40 Minna",
    subTitle: "宇宙飛行士の 訓練と 夢 (Huấn luyện phi hành gia và giấc mơ bay vào không gian)",
    description: "Đoạn văn kể về các bài kiểm tra khắc nghiệt để trở thành phi hành gia ứng dụng 〜か / 〜かどうか và 〜てみます.",
    passage: "子どもの ころから、私は 宇宙に 行って みたいと 思って いました。\n宇宙飛行士に なるためには、過酷な 試験や 訓練に 合格しなければ なりません。\n狭い 部屋で 1週間 仲間と トラブルなく 過ごせるかどうか、精神力も 試されます。\nまた、無重力状態の中で 正しく 機械を 操作できるか、何度も 実験を して みます。\n宇宙から 地球を 見たら、どんなに 美しいでしょうか。自分の 夢が かなうかどうか 分かりませんが、全力で 挑戦して みます。",
    questions: [
      {
        id: "dk40-1",
        question: "筆者は 子どもの ころから どこへ 行って みたいと 思って いましたか。",
        options: ["宇宙", "北極", "深海", "無人島"],
        correctIdx: 0,
        explanation: "Trong bài:「子どもの ころから、私は 宇宙に 行って みたいと 思って いました。」"
      },
      {
        id: "dk40-2",
        question: "狭い 部屋の 試験では 何が 試されますか。",
        options: ["仲間と 過ごせるかどうか、精神力", "視力の 良さ", "料理の 腕前", "足の 速さ"],
        correctIdx: 0,
        explanation: "Trong bài:「狭い 部屋で 1週間 仲間と トラブルなく 過ごせるかどうか、精神力も 試されます。」"
      },
      {
        id: "dk40-3",
        question: "無重力状態で 何を して みますか。",
        options: ["正しく 機械を 操作できるか、実験", "ダンスの 練習", "歌の 録音", "睡眠の 測定"],
        correctIdx: 0,
        explanation: "Trong bài:「無重力状態の中で 正しく 機械を 操作できるか、何度も 実験を して みます。」"
      },
      {
        id: "dk40-4",
        question: "筆者は 宇宙から 何を 見たいと 思って いますか。",
        options: ["美しい 地球", "他の 惑星", "巨大な 星", "人工衛星"],
        correctIdx: 0,
        explanation: "Trong bài:「宇宙から 地球を 見たら、どんなに 美しいでしょうか。」"
      },
      {
        id: "dk40-5",
        question: "筆者の 姿勢として 正しいものは どれですか。",
        options: ["夢が かなうか 分からないが 全力で 挑戦する", "無理だから 諦める", "友達に 代わって もらう", "試験を 受けない"],
        correctIdx: 0,
        explanation: "Trong bài:「自分の 夢が かなうかどうか 分かりませんが、全力で 挑戦して みます。」"
      }
    ]
  },

  // Bài 41: 日本の 贈答文化
  {
    id: "dokkai-41",
    lessonId: "bai-41",
    title: "Bài Đọc Hiểu - Bài 41 Minna",
    subTitle: "お中元と お歳暮の 習慣 (Phong tục tặng quà Ochugen và Oseibo)",
    description: "Đoạn văn giới thiệu nét đẹp văn hóa biếu tặng quà tri ân người trên tại Nhật ứng dụng いただきます, くださいます, やります.",
    passage: "日本には お世話に なった 方に 贈り物を する 習慣が あります。\n夏には「お中元」、冬の 終わりには「お歳暮」と 言って、日頃の 感謝の 気持ちを 伝えます。\n先週、私は お世話に なって いる 会社の 部長から、新鮮な フルーツを いただきました。\n部長は いつも 私の 仕事を 丁寧に 教えて くださいます。\nお正月に なると、大人は 子どもたちに お年玉を やります。子どもたちは その お金で 好きなおもちゃを 買います。\n贈り物を 通して 感謝を 伝え合うのは、日本の 素晴らしい 文化だと 思います。",
    questions: [
      {
        id: "dk41-1",
        question: "夏に 贈る ギフトを 何と 言いますか。",
        options: ["お中元", "お歳暮", "お年玉", "お見舞い"],
        correctIdx: 0,
        explanation: "Trong bài:「夏には「お中元」... と 言って」"
      },
      {
        id: "dk41-2",
        question: "筆者は 先週 部長から 何を いただきましたか。",
        options: ["新鮮な フルーツ", "高級な お酒", "お菓子", "商品券"],
        correctIdx: 0,
        explanation: "Trong bài:「先週、私は お世話に なって いる 会社の 部長から、新鮮な フルーツを いただきました。」"
      },
      {
        id: "dk41-3",
        question: "部長は 普段 筆者に どんな ことを して くださいますか。",
        options: ["仕事を 丁寧に 教えて くださる", "車を 運転して くださる", "ご飯を 作って くださる", "本を 買って くださる"],
        correctIdx: 0,
        explanation: "Trong bài:「部長は いつも 私の 仕事を 丁寧に 教えて くださいます。」"
      },
      {
        id: "dk41-4",
        question: "お正月に 大人は 子どもに 何を やりますか。",
        options: ["お年玉", "お中元", "お歳暮", "お土産"],
        correctIdx: 0,
        explanation: "Trong bài:「お正月に なると、大人は 子どもたちに お年玉を やります。」"
      },
      {
        id: "dk41-5",
        question: "筆者は この 贈答文化について どう 思って いますか。",
        options: ["感謝を 伝え合う 素晴らしい 文化だと 思う", "面倒で 廃止すべきだと 思う", "お金の 無駄遣いだと 思う", "意味が ないと 思う"],
        correctIdx: 0,
        explanation: "Trong bài:「贈り物を 通して 感謝を 伝え合うのは、日本の 素晴らしい 文化だと 思います。」"
      }
    ]
  },

  // Bài 42: 将来の ために
  {
    id: "dokkai-42",
    lessonId: "bai-42",
    title: "Bài Đọc Hiểu - Bài 42 Minna",
    subTitle: "弁護士を 目指す 留学生 (Du học sinh với mục tiêu trở thành luật sư)",
    description: "Đoạn văn kể về nỗ lực học tập để cống hiến vì xã hội ứng dụng 〜ために và 〜のに.",
    passage: "私は 困って いる 人たちを 助ける ために、弁護士に なろうと 決心しました。\n日本の 法律は 難しいですが、毎日 一生懸命 勉強して います。\n日本の 大学を 卒業するのには、たくさんの 時間と お金が かかります。\nですから、学費を 払う ために、週末は レストランで アルバイトを して います。\nこの 厚い 法律の 本は、判例を 調べるのに とても 役に立ちます。\n自分の 夢を 実現する ために、どんなに 苦しくても 諦めずに 歩み続けます。",
    questions: [
      {
        id: "dk42-1",
        question: "筆者は 何の ために 弁護士を 目指して いますか。",
        options: ["困って いる 人たちを 助ける ために", "大金持ちに なる ために", "有名に なる ために", "親に 自慢する ために"],
        correctIdx: 0,
        explanation: "Trong bài:「困って いる 人たちを 助ける ために、弁護士に なろうと 決心しました。」"
      },
      {
        id: "dk42-2",
        question: "日本の 大学を 卒業するのには 何が かかりますか。",
        options: ["たくさんの 時間と お金", "たくさんの 友達", "車と 家", "強い 体力 だけ"],
        correctIdx: 0,
        explanation: "Trong bài:「日本の 大学を 卒業するのには、たくさんの 時間と お金が かかります。」"
      },
      {
        id: "dk42-3",
        question: "学費を 払う ために 週末 何を して いますか。",
        options: ["レストランで アルバイトを して いる", "旅行に 行って いる", "家で 寝て いる", "スポーツを して いる"],
        correctIdx: 0,
        explanation: "Trong bài:「ですから、学費を 払う ために、週末は レストランで アルバイトを して います。」"
      },
      {
        id: "dk42-4",
        question: "厚い 法律の 本は 何に 役に立ちますか。",
        options: ["判例を 調べるのに", "枕に するのに", "部屋を 飾るのに", "重しに するのに"],
        correctIdx: 0,
        explanation: "Trong bài:「この 厚い 法律の 本は、判例を 調べるのに とても 役に立ちます。」"
      },
      {
        id: "dk42-5",
        question: "筆者の 決意として 正しいものは どれですか。",
        options: ["夢を 実現する ために 諦めずに 歩み続ける", "来年 国へ 帰る", "別の 仕事を 探す", "勉強を やめる"],
        correctIdx: 0,
        explanation: "Trong bài:「自分の 夢を 実現する ために、どんなに 苦しくても 諦めずに 歩み続けます。」"
      }
    ]
  },

  // Bài 43: 季節の 変わり目
  {
    id: "dokkai-43",
    lessonId: "bai-43",
    title: "Bài Đọc Hiểu - Bài 43 Minna",
    subTitle: "秋から 冬への 移り変わり (Khúc giao mùa từ thu sang đông)",
    description: "Đoạn văn miêu tả sự biến đổi của thời tiết và cảnh sắc ứng dụng cấu trúc 〜そうです trông có vẻ và 〜て来ます.",
    passage: "11月に 入ると、風が 冷たく なって、冬が 近づいて 来ました。\n空を 見上げると、厚い 雲が 広がって いて、今にも 雨が 降りそうです。\n公園の 木々の 葉も 黄色や 赤に 変わり、風が 吹くと 散りそうです。\n八百屋の 店先には、おいしそうな みかんや りんごが たくさん 並んで います。\n寒そうなので、私は コートを 着て、近くの コンビニへ 温かい お茶を 買って 来ました。\n季節の 変わり目は 風邪を 引きやすいですから、健康に 気をつけたいです。",
    questions: [
      {
        id: "dk43-1",
        question: "11月に なると どうなって 来ましたか。",
        options: ["風が 冷たく なって、冬が 近づいて 来た", "暑く なって 夏が 来た", "雪が 溶けて 春が 来た", "毎日 晴天が 続いた"],
        correctIdx: 0,
        explanation: "Trong bài:「風が 冷たく なって、冬が 近づいて 来ました。」"
      },
      {
        id: "dk43-2",
        question: "空の 様子から 天気は どう なりそうですか。",
        options: ["今にも 雨が 降りそう", "晴れそう", "台風が 来そう", "虹が 出そう"],
        correctIdx: 0,
        explanation: "Trong bài:「厚い 雲が 広がって いて、今にも 雨が 降りそうです。」"
      },
      {
        id: "dk43-3",
        question: "八百屋の 店先には どんな 果物が 並んで いますか。",
        options: ["おいしそうな みかんや りんご", "すいかや ぶどう", "バナナや マンゴー", "メロンや いちご"],
        correctIdx: 0,
        explanation: "Trong bài:「おいしそうな みかんや りんごが たくさん 並んで います。」"
      },
      {
        id: "dk43-4",
        question: "筆者は コンビニへ 何を しに 行って 来ましたか。",
        options: ["温かい お茶を 買って 来た", "雑誌を 立ち読みして 来た", "お金を 振り込んで 来た", "傘を 借りて 来た"],
        correctIdx: 0,
        explanation: "Trong bài:「近くの コンビニへ 温かい お茶を 買って 来ました。」"
      },
      {
        id: "dk43-5",
        question: "季節の 変わり目に どうして 気をつけますか。",
        options: ["風邪を 引きやすいから", "太りやすいから", "眠く なるから", "忘れ物を しやすいから"],
        correctIdx: 0,
        explanation: "Trong bài:「季節の 変わり目は 風邪を 引きやすいですから、健康に 気をつけたいです。」"
      }
    ]
  },

  // Bài 44: 日本での 初めての 一人暮らし
  {
    id: "dokkai-44",
    lessonId: "bai-44",
    title: "Bài Đọc Hiểu - Bài 44 Minna",
    subTitle: "一人暮らしの 失敗と 工夫 (Những bỡ ngỡ và mẹo khi sống một mình)",
    description: "Đoạn văn kể về những kinh nghiệm nấu ăn, sinh hoạt khi bắt đầu sống tự lập ứng dụng 〜すぎます, 〜やすい, 〜にくい, A-くします.",
    passage: "日本で 一人暮らしを 始めた ころ、たくさんの 失敗を しました。\n初めて カレーを 作った 時、辛い スパイスを 入れすぎて、辛すぎて 食べられませんでした。\nそれで、味を 薄く するために、牛乳を 入れて 調節しました。\nまた、新しい 部屋の 冷蔵庫は 小さすぎて、食材が あまり 入りません。\nでも、駅の 近くは スーパーが 多くて、買い物しやすくて 便利です。\n部屋を 広く 使うために、不要な 物を 捨てて、部屋を きれいに しました。失敗を 重ねて、少しずつ 生活が 楽しく なって きました。",
    questions: [
      {
        id: "dk44-1",
        question: "初めて カレーを 作った 時、どうして 食べられませんでしたか。",
        options: ["スパイスを 入れすぎて 辛すぎたから", "焦げて しまったから", "塩が 足りなかったから", "冷たかったから"],
        correctIdx: 0,
        explanation: "Trong bài:「辛い スパイスを 入れすぎて、辛すぎて 食べられませんでした。」"
      },
      {
        id: "dk44-2",
        question: "カレーの 味を 薄く するために 何を しましたか。",
        options: ["牛乳を 入れて 調節した", "砂糖を 大量に 入れた", "水を たくさん 飲んだ", "捨てて 新しく 買った"],
        correctIdx: 0,
        explanation: "Trong bài:「味を 薄く するために、牛乳を 入れて 調節しました。」"
      },
      {
        id: "dk44-3",
        question: "新しい 部屋の 冷蔵庫は どうですか。",
        options: ["小さすぎて 食材が 入らない", "大きすぎて 邪魔だ", "壊れて 冷えない", "音が うるさすぎる"],
        correctIdx: 0,
        explanation: "Trong bài:「冷蔵庫は 小さすぎて、食材が あまり 入りません。」"
      },
      {
        id: "dk44-4",
        question: "駅の 近くは どうして 便利ですか。",
        options: ["スーパーが 多くて 買い物しやすいから", "病院が 近いから", "友達の 家が あるから", "静かだから"],
        correctIdx: 0,
        explanation: "Trong bài:「駅の 近くは スーパーが 多くて、買い物しやすくて 便利です。」"
      },
      {
        id: "dk44-5",
        question: "部屋を 広く 使うために 何を しましたか。",
        options: ["不要な 物を 捨てて きれいに した", "大きな 家具を 買った", "壁を 壊した", "友達を 呼んだ"],
        correctIdx: 0,
        explanation: "Trong bài:「不要な 物を 捨てて、部屋を きれいに しました。」"
      }
    ]
  },

  // Bài 45: 緊急時の 対応
  {
    id: "dokkai-45",
    lessonId: "bai-45",
    title: "Bài Đọc Hiểu - Bài 45 Minna",
    subTitle: "もしもの 時の 防災訓練 (Diễn tập phòng chống thiên tai)",
    description: "Đoạn văn kể về buổi diễn tập cứu hộ động đất và hỏa hoạn ứng dụng 〜場合は và 〜のに.",
    passage: "昨日、町内で 防災訓練が 行われました。\n消防署の 人が「火事や 地震の 場合は、慌てずに 行動して ください」と 説明しました。\n「煙が 出て いる 場合は、ハンカチで 鼻と 口を 覆って、体を 低く して 逃げて ください」\n雨が 降って いたのに、近所の 人たちが たくさん 訓練に 集まりました。\n消火器の 使い方は、何度も 説明を 聞いたのに、実際に 使って みると 難しかったです。\n緊急の 場合は 正しい 知識が 命を 救いますから、とても 有意義な 訓練でした。",
    questions: [
      {
        id: "dk45-1",
        question: "昨日 町内で 何が 行われましたか。",
        options: ["防災訓練", "夏祭り", "運動会", "音楽会"],
        correctIdx: 0,
        explanation: "Trong bài:「昨日、町内で 防災訓練が 行われました。」"
      },
      {
        id: "dk45-2",
        question: "火事や 地震の 場合は どうしなければ なりませんか。",
        options: ["慌てずに 行動する", "大声を 出して 走る", "エレベーターに 乗る", "荷物を 全部 持つ"],
        correctIdx: 0,
        explanation: "Trong bài:「火事や 地震の 場合は、慌てずに 行動して ください」"
      },
      {
        id: "dk45-3",
        question: "煙が 出て いる 場合は どうやって 逃げますか。",
        options: ["ハンカチで 鼻と 口を 覆い 体を 低く する", "窓を 全部 開ける", "走って 階段を 飛び降りる", "水槽に 飛び込む"],
        correctIdx: 0,
        explanation: "Trong bài:「ハンカチで 鼻と 口を 覆って、体を 低く して 逃げて ください」"
      },
      {
        id: "dk45-4",
        question: "天気が どうだったのに、たくさんの 人が 集まりましたか。",
        options: ["雨が 降って いたのに", "風が 強かったのに", "雪が 積もって いたのに", "とても 寒かったのに"],
        correctIdx: 0,
        explanation: "Trong bài:「雨が 降って いたのに、近所の 人たちが たくさん 訓練に 集まりました。」"
      },
      {
        id: "dk45-5",
        question: "消火器を 実際に 使って みて どうでしたか。",
        options: ["何度も 聞いたのに 難しかった", "とても 簡単だった", "重すぎて 持てなかった", "壊れて 水が 出なかった"],
        correctIdx: 0,
        explanation: "Trong bài:「何度も 説明を 聞いたのに、実際に 使って みると 難しかったです。」"
      }
    ]
  },

  // Bài 46: 新幹線の 出発
  {
    id: "dokkai-46",
    lessonId: "bai-46",
    title: "Bài Đọc Hiểu - Bài 46 Minna",
    subTitle: "正確な 新幹線と 出張 (Chuyến công tác và độ chính xác của tàu Shinkansen)",
    description: "Đoạn văn kể về sự chuẩn xác đến từng giây của mạng lưới tàu cao tốc Nhật Bản ứng dụng 〜ところです, 〜ばかりです, 〜はずです.",
    passage: "私は 今、東京駅の ホームに います。新大阪行きの 新幹線が ちょうど 入って 来た ところです。\n日本の 新幹線は 時間が 正確ですから、10時ちょうどに 発車する はずです。\n先週 入社した ばかりの 後輩と 一緒に、大阪の 支社へ 出張に 行きます。\n後輩は「新幹線に 乗るのは 初めてです」と 言って、とても 楽しみに して います。\nたった今、お弁当とお茶を 買った ところなので、座席に 座って ゆっくり 出発を 待ちます。\n定刻通りに 着くはずですから、午後の 会議にも 余裕で 間に合うでしょう。",
    questions: [
      {
        id: "dk46-1",
        question: "筆者は 今 どこに いますか。",
        options: ["東京駅の ホーム", "新大阪駅の 改札", "飛行機の中", "ホテルの ロビー"],
        correctIdx: 0,
        explanation: "Trong bài:「私は 今、東京駅の ホームに います。」"
      },
      {
        id: "dk46-2",
        question: "新幹線は 何時に 発車する はずですか。",
        options: ["10時ちょうど", "9時30分", "11時15分", "12時"],
        correctIdx: 0,
        explanation: "Trong bài:「10時ちょうどに 発車する はずです。」"
      },
      {
        id: "dk46-3",
        question: "一緒に行く 後輩は どんな 人ですか。",
        options: ["先週 入社した ばかりの 人", "10年前からの ベテラン", "外国人の 友達", "大学の 教授"],
        correctIdx: 0,
        explanation: "Trong bài:「先週 入社した ばかりの 後輩と 一緒に...」"
      },
      {
        id: "dk46-4",
        question: "筆者は たった今 何を した ところですか。",
        options: ["お弁当とお茶を 買った ところ", "切符を なくした ところ", "電話を かけた ところ", "荷物を 預けた ところ"],
        correctIdx: 0,
        explanation: "Trong bài:「たった今、お弁当とお茶を 買った ところなので...」"
      },
      {
        id: "dk46-5",
        question: "午後の 会議は どうなりそうですか。",
        options: ["定刻通り 着くはずなので 余裕で 間に合う", "遅刻して しまう", "中止に なる", "欠席しなければ ならない"],
        correctIdx: 0,
        explanation: "Trong bài:「定刻通りに 着くはずですから、午後の 会議にも 余裕で 間に合うでしょう。」"
      }
    ]
  },

  // Bài 47: 日本人の 挨拶と 習慣
  {
    id: "dokkai-47",
    lessonId: "bai-47",
    title: "Bài Đọc Hiểu - Bài 47 Minna",
    subTitle: "日本人の お辞儀と 挨拶 (Cúi chào và nét văn hóa giao tiếp của người Nhật)",
    description: "Đoạn văn tìm hiểu về phong tục cúi chào (ojigi) và lời đồn trong giao tiếp ứng dụng 〜そうです nghe nói và 〜ようです hình như.",
    passage: "日本人は 挨拶する ときに、頭を 下げて お辞儀を します。\n本に よると、お辞儀には 角度によって「会釈」「敬礼」「最敬礼」という 3つの 種類が あるそうです。\nビジネスの 場面では、30度から 45度くらい 深く 頭を 下げるのが 一般的だそうです。\nオフィスを 見ると、社員たちが 丁寧な お辞儀を しながら 挨拶して います。とても 礼儀正しい ようです。\n外から 鳥の いい 声が して、爽やかな 朝が 始まりました。私も 笑顔で「おはようございます」と 挨拶したいです。",
    questions: [
      {
        id: "dk47-1",
        question: "日本人は 挨拶する ときに 何を しますか。",
        options: ["頭を 下げて お辞儀を する", "握手を する", "ハグを する", "手を 振る"],
        correctIdx: 0,
        explanation: "Trong bài:「日本人は 挨拶する ときに、頭を 下げて お辞儀を します。」"
      },
      {
        id: "dk47-2",
        question: "本に よると お辞儀には 何種類の 形式が あるそうですか。",
        options: ["3つの 種類", "1つ だけ", "5つの 種類", "10の 種類"],
        correctIdx: 0,
        explanation: "Trong bài:「お辞儀には 角度によって「会釈」「敬礼」「最敬礼」という 3つの 種類が あるそうです。」"
      },
      {
        id: "dk47-3",
        question: "ビジネスの 場面では 何度くらい 頭を 下げるそうですか。",
        options: ["30度から 45度くらい", "10度くらい", "90度 直角に", "全く 下げない"],
        correctIdx: 0,
        explanation: "Trong bài:「ビジネスの 場面では、30度から 45度くらい 深く 頭を 下げるのが 一般的だそうです。」"
      },
      {
        id: "dk47-4",
        question: "社員たちを 見て 筆者は どう 感じましたか。",
        options: ["とても 礼儀正しい ようだと 感じた", "不親切な ようだと 感じた", "やる気が なさそうだと 思った", "怒って いるようだと 思った"],
        correctIdx: 0,
        explanation: "Trong bài:「とても 礼儀正しい ようです。」"
      },
      {
        id: "dk47-5",
        question: "外から どんな 音が 聞こえましたか。",
        options: ["鳥の いい 声", "車の 騒音", "雨の 音", "警報の 音"],
        correctIdx: 0,
        explanation: "Trong bài:「外から 鳥の いい 声が して、爽やかな 朝が 始まりました。」"
      }
    ]
  },

  // Bài 48: 子どもの 習い事
  {
    id: "dokkai-48",
    lessonId: "bai-48",
    title: "Bài Đọc Hiểu - Bài 48 Minna",
    subTitle: "子どもの 個性と 習い事 (Năng khiếu của con trẻ và việc học ngoại khóa)",
    description: "Đoạn văn kể về quan điểm giáo dục con cái tự do khám phá ứng dụng thể sai khiến 使役形.",
    passage: "日本では、たくさんの 小学生が ピアノや 水泳、英語などを 習って います。\n私の 友人の 山田さんは、息子に 毎週 サッカーを 習わせています。\nしかし、山田さんは「親が 無理に 習わせるのは よくない」と 言って います。\n子どもが 興味を 持った ことを 自由に やらせて あげることが 大切だと 考えて います。\n「すみません、今日は 息子の 試合が あるので、早く 帰らせて いただけませんか」と 部長に 相談して、応援に 行きました。\n子どもの 笑顔を 見るのが 親にとって 一番の 幸せです。",
    questions: [
      {
        id: "dk48-1",
        question: "山田さんは 息子に 何を 習わせていますか。",
        options: ["サッカー", "ピアノ", "水泳", "習字"],
        correctIdx: 0,
        explanation: "Trong bài:「息子に 毎週 サッカーを 習わせています。」"
      },
      {
        id: "dk48-2",
        question: "山田さんの 教育方針として 正しいものは どれですか。",
        options: ["子どもが 興味を 持った ことを 自由に やらせる", "親が 決めた 習い事を 強制する", "何一つ 習わせない", "勉強だけ させる"],
        correctIdx: 0,
        explanation: "Trong bài:「子どもが 興味を 持った ことを 自由に やらせて あげることが 大切だと 考えて います。」"
      },
      {
        id: "dk48-3",
        question: "山田さんは 部長に 何と お願いしましたか。",
        options: ["早く 帰らせて いただけませんか", "給料を 上げて いただけませんか", "休みを 1ヶ月 ください", "息子を 採用して ください"],
        correctIdx: 0,
        explanation: "Trong bài:「今日は 息子の 試合が あるので、早く 帰らせて いただけませんか」"
      },
      {
        id: "dk48-4",
        question: "早く 帰って どこへ 行きましたか。",
        options: ["息子の 試合の 応援", "病院", "買い物", "旅行"],
        correctIdx: 0,
        explanation: "Trong bài:「相談して、応援に 行きました。」"
      },
      {
        id: "dk48-5",
        question: "親にとって 一番の 幸せは 何ですか。",
        options: ["子どもの 笑顔を 見ること", "お金を 稼ぐこと", "昇進すること", "贅沢な ご飯を 食べること"],
        correctIdx: 0,
        explanation: "Trong bài:「子どもの 笑顔を 見るのが 親にとって 一番の 幸せです。」"
      }
    ]
  },

  // Bài 49: 伝統工芸の 匠への インタビュー
  {
    id: "dokkai-49",
    lessonId: "bai-49",
    title: "Bài Đọc Hiểu - Bài 49 Minna",
    subTitle: "陶芸作家の 先生への インタビュー (Phỏng vấn nghệ nhân gốm sứ)",
    description: "Đoạn văn phỏng vấn nghệ nhân gốm sứ nổi tiếng ứng dụng tôn kính ngữ 尊敬語.",
    passage: "昨日、私は 有名な 陶芸家の 佐藤先生の 工房を 訪ねました。\n先生は 毎朝 6時に 起きられて、夜 遅くまで 作品を お作りに なります。\n「先生、この 美しい お皿は どちらで ご覧に なれますか」と 伺うと、\n先生は 笑顔で「来月、東京の デパートで 個展を 開きますから、ぜひ お越し ください」と おっしゃいました。\n先生は 日本だけでなく、海外の 展示会にも 招待されて いらっしゃいます。\n伝統を 守りながら、新しい 技法に 挑戦なさる 姿に、深く 感動しました。",
    questions: [
      {
        id: "dk49-1",
        question: "佐藤先生は 何の 作家ですか。",
        options: ["陶芸作家 (陶芸家)", "絵の 先生", "写真家", "小説家"],
        correctIdx: 0,
        explanation: "Trong bài:「有名な 陶芸家の 佐藤先生の 工房を 訪ねました。」"
      },
      {
        id: "dk49-2",
        question: "佐藤先生は 毎朝 何時に 起きられますか。",
        options: ["朝 6時", "朝 5時", "朝 8時", "朝 7時"],
        correctIdx: 0,
        explanation: "Trong bài:「先生は 毎朝 6時に 起きられて...」"
      },
      {
        id: "dk49-3",
        question: "作品は 来月 どこで 見られますか。",
        options: ["東京の デパートの 個展", "京都の お寺", "パリの ルーヴル美術館", "先生の 自宅 だけ"],
        correctIdx: 0,
        explanation: "Trong bài:「来月、東京の デパートで 個展を 開きますから、ぜひ お越し ください」"
      },
      {
        id: "dk49-4",
        question: "佐藤先生は 日本の ほかに どこへ 招待されて いらっしゃいますか。",
        options: ["海外の 展示会", "宇宙ステーション", "無人島", "国会"],
        correctIdx: 0,
        explanation: "Trong bài:「海外の 展示会にも 招待されて いらっしゃいます。」"
      },
      {
        id: "dk49-5",
        question: "筆者は 先生の どんな 姿に 感動しましたか。",
        options: ["伝統を 守りながら 新しい 技法に 挑戦なさる 姿", "お金持ちな 姿", "お酒を たくさん 飲む 姿", "テレビに 出演する 姿"],
        correctIdx: 0,
        explanation: "Trong bài:「伝統を 守りながら、新しい 技法に 挑戦なさる 姿に、深く 感動しました。」"
      }
    ]
  },

  // Bài 50: 訪問の マナーと 自己紹介
  {
    id: "dokkai-50",
    lessonId: "bai-50",
    title: "Bài Đọc Hiểu - Bài 50 Minna",
    subTitle: "取引先への 初訪問と ご挨拶 (Chuyến thăm đối tác và phép tắc giao tiếp kinh doanh)",
    description: "Đoạn văn kể về buổi gặp gỡ làm việc đầu tiên với công ty đối tác Nhật Bản ứng dụng khiêm nhường ngữ 謙譲語 và lịch sự ngữ 丁寧語.",
    passage: "本日 午前 10時に、私は 上司と 一緒に 取引先の パワー電気へ 伺いました。\n受付で「グエンと 申します。10時に 山田部長とお約束を いただいて おります」と 伝えました。\n応接室に ご案内いただき、しばらく お待ちして おりました。\n山田部長が 来られた 時、「初めまして。IMCの グエンと 申します。本日は お時間を いただき、心から 感謝いたします」と 挨拶いたしました。\n持参した 新しい カタログを 拝見して いただき、新商品の 特徴を ご説明いたしました。\nビジネスの 現場で 正しい 敬語を 使うのは 緊張しますが、とても 良い 経験に なりました。",
    questions: [
      {
        id: "dk50-1",
        question: "筆者は 今日 どこへ 伺いましたか。",
        options: ["取引先の パワー電気", "大学の 研究室", "病院の 診察室", "警察署"],
        correctIdx: 0,
        explanation: "Trong bài:「本日 午前 10時に、私は 上司と 一緒に 取引先の パワー電気へ 伺いました。」"
      },
      {
        id: "dk50-2",
        question: "受付で 自分の 名前を 何と 言いましたか。",
        options: ["「グエンと 申します」", "「グエン様だ」", "「グエンと おっしゃいます」", "「グエンで いらっしゃる」"],
        correctIdx: 0,
        explanation: "Trong bài:「受付で「グエンと 申します」と 伝えました。」"
      },
      {
        id: "dk50-3",
        question: "誰とお約束を いただいて いましたか。",
        options: ["山田部長", "社長", "課長", "田中さん"],
        correctIdx: 0,
        explanation: "Trong bài:「10時に 山田部長とお約束を いただいて おります」"
      },
      {
        id: "dk50-4",
        question: "山田部長に 何を ご説明いたしましたか。",
        options: ["カタログを 拝見して いただき、新商品の 特徴を 説明した", "会社の 愚痴を 話した", "プライベートの 旅行の 話を した", "ベトナムの 観光案内を した"],
        correctIdx: 0,
        explanation: "Trong bài:「持参した 新しい カタログを 拝見して いただき、新商品の 特徴を ご説明いたしました。」"
      },
      {
        id: "dk50-5",
        question: "筆者は ビジネスの 敬語について どう 感じましたか。",
        options: ["緊張するが、とても 良い 経験に なった", "簡単すぎて つまらなかった", "意味が 分からなくて 怒られた", "二度と 使いたくないと 思った"],
        correctIdx: 0,
        explanation: "Trong bài:「ビジネスの 現場で 正しい 敬語を 使うのは 緊張しますが、とても 良い 経験に なりました。」"
      }
    ]
  }
];

// Annotate all passages, questions, and options with ruby
const processedDokkai = rawDokkai.map(item => {
  return {
    id: item.id,
    lessonId: item.lessonId,
    title: item.title,
    subTitle: item.subTitle,
    description: item.description,
    passage: annotateRuby(item.passage),
    questions: item.questions.map(q => ({
      id: q.id,
      question: annotateRuby(q.question),
      options: q.options.map(opt => annotateRuby(opt)),
      correctIdx: q.correctIdx,
      explanation: q.explanation
    }))
  };
});

// Load existing data/dokkai.js
const dokkaiPath = 'data/dokkai.js';
const existingContent = fsModule.readFileSync(dokkaiPath, 'utf8');
let existingArr;
eval(existingContent.replace('const dokkaiData =', 'existingArr ='));

console.log(`Current dokkai length: ${existingArr.length}`);

// Merge existing with new 25 dokkai items
const mergedDokkai = [...existingArr, ...processedDokkai];

console.log(`New total dokkai length: ${mergedDokkai.length}`);

// Write back to data/dokkai.js
const newFileContent = `// Dữ liệu 50 bài đọc hiểu theo giáo trình Minna no Nihongo (Bài 1 - 50)
const dokkaiData = ${JSON.stringify(mergedDokkai, null, 2)};
`;

fsModule.writeFileSync(dokkaiPath, newFileContent, 'utf8');
console.log('Successfully written data/dokkai.js with 50 reading comprehension passages!');
