/**
 * QUY TẮC NGẮT NGHỈ, NGỮ ĐIỆU CẢM XÚC & CHUẨN HÓA PHÁT ÂM TIẾNG NHẬT (AUDIO PROSODY & EXPRESSIVE RULES)
 * data/audio_prosody_rules.js
 * --------------------------------------------------------------------------
 * Tầng dữ liệu độc lập (Decoupled Data Layer) cung cấp:
 * 1. Danh sách thán từ, từ đệm hội thoại (Aizuchi) và liên từ ngắt nhịp.
 * 2. Bảng chuẩn hóa phát âm ngữ cảnh (số phòng 408 -> よんまるはち, 305号室 -> さんまるごごうしつ, đếm số, chữ cái).
 * 3. Quy tắc biến thiên Cao độ (Pitch Contour) & Tốc độ (Rate Contour) theo 6 sắc thái cảm xúc câu.
 * 4. Quy tắc tính khoảng nghỉ chuyển lượt đối thoại tự nhiên (Contextual Turn-Taking Silence).
 */
(function(root) {
  'use strict';

  // 1. Danh sách từ nối, thán từ và từ đệm mở đầu câu cần ngắt nhịp thở (Micro-pause)
  const DISCOURSE_PAUSE_WORDS = [
    'そして', 'それから', 'それに', 'それで', 'ですから', 'だから',
    'しかし', 'でも', 'けれども', 'だけど', 'また', 'あるいは', 'または',
    'では', 'それでは', 'じゃ', 'ところで', 'たとえば', '例えば',
    '実は', 'じつは', 'まず', 'つぎに', '次に', 'さいごに', '最後に',
    'はい', 'いいえ', 'ええ', 'うん', 'ううん',
    'すみません', 'すいません', 'ごめんなさい', '申し訳ありません',
    'おはようございます', 'こんにちは', 'こんばんは', 'はじめまして', '初めまして',
    'どうぞ', 'あのう', 'あの', 'ええと', 'えーと', 'うーん',
    'あ', 'ああ', 'あっ', 'えっ', 'わあ', 'へえ', 'まあ', 'あれ',
    'もしもし', 'なるほど', 'そうですね', 'そうですか', 'もちろん'
  ];

  // 2. Bảng chuẩn hóa phát âm đặc thù trong ngữ cảnh Hội thoại Minna no Nihongo (Phonetic Naturalizer)
  const PHONETIC_CONTEXT_REPLACEMENTS = [
    // Số phòng căn hộ đọc từng chữ số với 0 = まる chuẩn người Nhật bản xứ
    { pattern: '408の', replacement: 'よんまるはちの' },
    { pattern: '305号室', replacement: 'さんまるごごうしつ' },
    // Cách đọc máy ATM nhấn từng phím số trong Bài 16
    { pattern: '5…0…0…0…0…？', replacement: 'ご、ゼロ、ゼロ、ゼロ、ゼロ？' },
    { pattern: '5...0...0...0...0...?', replacement: 'ご、ゼロ、ゼロ、ゼロ、ゼロ？' },
    // Từ nghi vấn đếm thứ tự bến xe buýt trong Bài 23
    { pattern: '何つ目', replacement: 'いくつめ' },
    // Chuẩn hóa đọc số điện thoại trong Luyện tập C Bài 4 (ngắt nhịp của『の』chuẩn người Nhật)
    { pattern: '03-3589-6721', replacement: 'ゼロさんの、さんごはちきゅうの、ろくななにいち' },
    { pattern: '06-6451-8902', replacement: 'ゼロろくの、ろくよんごいちの、はちきゅうゼロに' },
    { pattern: '078-231-5500', replacement: 'ゼロななはちの、にさんいちの、ごごゼロゼロ' },
    // Chuẩn hóa đọc số tiền, giờ giấc, ngày tháng, lượng từ đếm (Bài 1 - 50 & 練習C)
    { pattern: '8万3千円', replacement: 'はちまんさんぜんえん' },
    { pattern: '10万円', replacement: 'じゅうまんえん' },
    { pattern: '5万円', replacement: 'ごまんえん' },
    { pattern: '8万円', replacement: 'はちまんえん' },
    { pattern: '18,000円', replacement: 'いちまんはっせんえん' },
    { pattern: '8,200円', replacement: 'はっせんにひゃくえん' },
    { pattern: '7,600円', replacement: 'ななせんろっぴゃくえん' },
    { pattern: '4,500円', replacement: 'よんせんごひゃくえん' },
    { pattern: '3,450円', replacement: 'さんぜんよんひゃくごじゅうえん' },
    { pattern: '3,200円', replacement: 'さんぜんにひゃくえん' },
    { pattern: '2,500円', replacement: 'にせんごひゃくえん' },
    { pattern: '1,800円', replacement: 'せんはっぴゃくえん' },
    { pattern: '1,680円', replacement: 'せんろっぴゃくはちじゅうえん' },
    { pattern: '980円', replacement: 'きゅうひゃくはちじゅうえん' },
    { pattern: '700円', replacement: 'ななひゃくえん' },
    { pattern: '500円', replacement: 'ごひゃくえん' },
    { pattern: '400円', replacement: 'よんひゃくえん' },
    { pattern: '350円', replacement: 'さんびゃくごじゅうえん' },
    { pattern: '240円', replacement: 'にひゃくよんじゅうえん' },
    { pattern: '80円の', replacement: 'はちじゅうえんの' },
    { pattern: '300年', replacement: 'さんびゃくねん' },
    { pattern: '1時間半', replacement: 'いちじかんはん' },
    { pattern: '6時半', replacement: 'ろくじはん' },
    { pattern: '7時半', replacement: 'しちじはん' },
    { pattern: '5時半', replacement: 'ごじはん' },
    { pattern: '9時から', replacement: 'くじから' },
    { pattern: '9時に', replacement: 'くじに' },
    { pattern: '7時から', replacement: 'しちじから' },
    { pattern: '7時に', replacement: 'しちじに' },
    { pattern: '6時から', replacement: 'ろくじから' },
    { pattern: '6時に', replacement: 'ろくじに' },
    { pattern: '5時まで', replacement: 'ごじまで' },
    { pattern: '5時に', replacement: 'ごじに' },
    { pattern: '4時まで', replacement: 'よじまで' },
    { pattern: '4時に', replacement: 'よじに' },
    { pattern: '4時ごろ', replacement: 'よじごろ' },
    { pattern: '3時から', replacement: 'さんじから' },
    { pattern: '3時に', replacement: 'さんじに' },
    { pattern: '3時まで', replacement: 'さんじまで' },
    { pattern: '8時に', replacement: 'はちじに' },
    { pattern: '10時に', replacement: 'じゅうじに' },
    { pattern: '10時ごろ', replacement: 'じゅうじごろ' },
    { pattern: '12時', replacement: 'じゅうにじ' },
    { pattern: '10時', replacement: 'じゅうじ' },
    { pattern: '9時', replacement: 'くじ' },
    { pattern: '8時', replacement: 'はちじ' },
    { pattern: '7時', replacement: 'しちじ' },
    { pattern: '6時', replacement: 'ろくじ' },
    { pattern: '5時', replacement: 'ごじ' },
    { pattern: '4時', replacement: 'よじ' },
    { pattern: '3時', replacement: 'さんじ' },
    { pattern: '30分', replacement: 'さんじゅっぷん' },
    { pattern: '15分', replacement: 'じゅうごふん' },
    { pattern: '10分', replacement: 'じゅっぷん' },
    { pattern: '5分ぐらい', replacement: 'ごふんぐらい' },
    { pattern: '5番線', replacement: 'ごばんせん' },
    { pattern: '12番', replacement: 'じゅうにばん' },
    { pattern: '9月 15日', replacement: 'くがつじゅうごにち' },
    { pattern: '9月15日', replacement: 'くがつじゅうごにち' },
    { pattern: '4月 20日', replacement: 'しがつはつか' },
    { pattern: '4月20日', replacement: 'しがつはつか' },
    { pattern: '12月 8日', replacement: 'じゅうにがつようか' },
    { pattern: '12月8日', replacement: 'じゅうにがつようか' },
    { pattern: '1日 休ませて', replacement: 'いちにち やすませて' },
    { pattern: '1日休ませて', replacement: 'いちにちやすませて' },
    { pattern: '3日前', replacement: 'みっかまえ' },
    { pattern: '20日', replacement: 'はつか' },
    { pattern: '15日', replacement: 'じゅうごにち' },
    { pattern: '10日から', replacement: 'とおかから' },
    { pattern: '12日まで', replacement: 'じゅうににちまで' },
    { pattern: '8日', replacement: 'ようか' },
    { pattern: '7日ぐらい', replacement: 'なのかぐらい' },
    { pattern: '3か月ぐらい', replacement: 'さんかげつぐらい' },
    { pattern: '3か月', replacement: 'さんかげつ' },
    { pattern: '2か月ぐらい', replacement: 'にかげつぐらい' },
    { pattern: '12月', replacement: 'じゅうにがつ' },
    { pattern: '11月', replacement: 'じゅういちがつ' },
    { pattern: '9月', replacement: 'くがつ' },
    { pattern: '8月', replacement: 'はちがつ' },
    { pattern: '5月', replacement: 'ごがつ' },
    { pattern: '4月', replacement: 'しがつ' },
    { pattern: '2週間', replacement: 'にしゅうかん' },
    { pattern: '2年半', replacement: 'にねんはん' },
    { pattern: '2年間', replacement: 'にねんかん' },
    { pattern: '3年前', replacement: 'さんねんまえ' },
    { pattern: '5年', replacement: 'ごねん' },
    { pattern: '1年', replacement: 'いちねん' },
    { pattern: '16世紀', replacement: 'じゅうろくせいき' },
    { pattern: '8世紀', replacement: 'はっせいき' },
    { pattern: '500字', replacement: 'ごひゃくじ' },
    { pattern: '200メートル', replacement: 'にひゃくメートル' },
    { pattern: '100メートル', replacement: 'ひゃくメートル' },
    { pattern: '20部', replacement: 'にじゅうぶ' },
    { pattern: '3センチ', replacement: 'さんセンチ' },
    { pattern: '2段目', replacement: 'にだんめ' },
    { pattern: '10枚', replacement: 'じゅうまい' },
    { pattern: '5枚', replacement: 'ごまい' },
    { pattern: '3枚', replacement: 'さんまい' },
    { pattern: '2枚', replacement: 'にまい' },
    { pattern: '2回', replacement: 'にかい' },
    { pattern: 'ここの「5」', replacement: 'ここの「ご」' },
    // Chuẩn hóa đọc số tầng, số người, thứ tự đặc biệt tránh TTS đọc sai âm Kun/On
    { pattern: '地下1階', replacement: 'ちかいっかい' },
    { pattern: '1階', replacement: 'いっかい' },
    { pattern: '3階', replacement: 'さんがい' },
    { pattern: '7階', replacement: 'ななかい' },
    { pattern: '1人', replacement: 'ひとり' },
    { pattern: '2人', replacement: 'ふたり' },
    { pattern: '3人', replacement: 'さんにん' },
    { pattern: '4人', replacement: 'よにん' },
    { pattern: '5人', replacement: 'ごにん' },
    { pattern: '1つ目', replacement: 'ひとつめ' },
    { pattern: '2つ目', replacement: 'ふたつめ' },
    { pattern: '3つ目', replacement: 'みっつめ' },
    { pattern: '1つ', replacement: 'ひとつ' },
    { pattern: '2つ', replacement: 'ふたつ' },
    { pattern: '3つ', replacement: 'みっつ' },
    // Giải thích từ vựng trùng âm trong Bài 33 (tránh đọc lặp 2 lần chữ たちいりきんし trong ngoặc)
    { pattern: '「たちいりきんし」(立入禁止)', replacement: '「たちいりきんし」' },
    { pattern: '「たちいりきんし」（立入禁止）', replacement: '「たちいりきんし」' }
  ];

  // 3. Ma trận điều biến Ngữ điệu Cảm xúc theo từng mệnh đề & ngữ cảnh (Clause & Context Emotion Prosody Matrix)
  // ΔPitch (Hz cho Edge Neural / hệ số cho Web Speech), ΔRate (% cho Edge Neural / hệ số cho Web Speech) & ΔVolume (%)
  const EMOTION_PROSODY_PROFILES = {
    question: {
      id: 'question',
      description: 'Câu hỏi / Xác nhận tò mò (lên giọng tự nhiên ở cuối câu ↗)',
      pitchDeltaHz: 10,
      rateDeltaPct: 3,
      volumeDeltaPct: 3,
      webPitchFactor: 1.06,
      webRateFactor: 1.02
    },
    hesitation: {
      id: 'hesitation',
      description: 'Ngập ngừng / Suy nghĩ / Xin phép / Từ chối khéo (あのう、実は、そうですね、残念ですが…)',
      pitchDeltaHz: -8,
      rateDeltaPct: -13,
      volumeDeltaPct: -5,
      webPitchFactor: 0.94,
      webRateFactor: 0.89
    },
    exclamation: {
      id: 'exclamation',
      description: 'Ngạc nhiên / Vui mừng / Hào hứng / Trầm trồ (わあ、えっ、ああよかった、すごいですね！)',
      pitchDeltaHz: 14,
      rateDeltaPct: 6,
      volumeDeltaPct: 8,
      webPitchFactor: 1.09,
      webRateFactor: 1.05
    },
    greeting_gratitude: {
      id: 'greeting_gratitude',
      description: 'Chào hỏi / Cảm ơn / Đón khách tươi tắn / Chia vui (おはようございます、ありがとうございます、いらっしゃいませ、いいですね)',
      pitchDeltaHz: 9,
      rateDeltaPct: 4,
      volumeDeltaPct: 5,
      webPitchFactor: 1.05,
      webRateFactor: 1.02
    },
    empathy_apology: {
      id: 'empathy_apology',
      description: 'Chia sẻ / Đồng cảm / Xin lỗi / Quan tâm lo lắng (お大事に、大変でしたね、申し訳ありません、痛いんです)',
      pitchDeltaHz: -8,
      rateDeltaPct: -10,
      volumeDeltaPct: -4,
      webPitchFactor: 0.94,
      webRateFactor: 0.91
    },
    statement: {
      id: 'statement',
      description: 'Câu trần thuật chuẩn mực (hạ nhẹ giọng tự nhiên ở cuối câu ↘)',
      pitchDeltaHz: 0,
      rateDeltaPct: 0,
      volumeDeltaPct: 0,
      webPitchFactor: 1.00,
      webRateFactor: 1.00
    }
  };

  // 4. Quy tắc Ngữ cảnh Đối thoại (Turn-by-Turn Contextual Sentiment & Aizuchi Adaptation)
  // Giúp các câu phản hồi ngắn như 「そうですか。」「ええ。」「はい。」「なるほど。」 tự động biến đổi
  // sắc thái cảm xúc theo nội dung lượt lời liền trước và bối cảnh bài học (sceneType)
  const CONTEXTUAL_SENTIMENT_RULES = {
    // Các câu đáp ngắn nhạy cảm với ngữ cảnh câu nói trước đó
    contextSensitiveAizuchiPattern: /^(?:ああ|あ|ええ|はい|へえ|ほう|うーん|うん)?(?:そうですか|そうなんですか|そうだったんですか|なるほど|そうですね|ええ|はい|わかりました|かしこまりました)$/,
    // Từ khóa báo hiệu lượt lời trước mang sắc thái buồn / đau ốm / sự cố / tiếc nuối -> người nghe đáp lại bằng giọng trầm đồng cảm (empathy_apology)
    empatheticTriggerKeywords: [
      '痛い', '熱', 'せき', '病気', 'インフルエンザ', '風邪', '疲れ', '大変', '残念',
      '負け', '忘れ', 'なくし', '落とし', '壊れ', '故障', '困り', '心配', 'さびし',
      '寂し', '無理', '別れ', '死に', '亡くな', '事故', '遅れ', '間違え', 'だめ', '都合が悪い',
      '不便', '飲みすぎ', '長すぎ', '来ない', '元気がありません', '暗くなりました'
    ],
    // Từ khóa báo hiệu lượt lời trước mang sắc thái tin vui / khen ngợi / quà tặng / hào hứng -> người nghe đáp lại bằng giọng tươi sáng ấm áp (greeting_gratitude)
    positiveTriggerKeywords: [
      '喜び', '喜ん', '喜ばせ', 'うれしい', '楽し', 'おもしろい', '強くなっ', '上手', 'きれい',
      'すてき', 'おいしい', 'おいしそう', 'お土産', 'お祝い', 'プレゼント', '合格', '勝った', '勝ち',
      'よかった', '元気', '便利', '使いやすい', '役に立', 'いいにおい', 'いい場所', '親切', '助け', 'ありがとう', 'ぜひ', 'すばらしい'
    ],
    // Các từ/cụm mở đầu câu cần tách thành mệnh đề diễn xuất riêng (Micro-acted Sub-clause Openers)
    expressiveOpeners: [
      { pattern: /^(わあ、|えっ、|あれ、|へえ、|まあ、|あ、|ああ、)/, emotion: 'exclamation', pauseAfterMs: 168 },
      { pattern: /^(あのう、|あの、|ええと、|えーと、|うーん、|そうですね[、。]|実は、|それが、|すみません[、。]|失礼ですが、)/, emotion: 'hesitation', pauseAfterMs: 240 },
      { pattern: /^(はい[、。]|ええ[、。]|いいえ[、。]|もちろん[、。]|なるほど[、。])/, emotion: 'statement', pauseAfterMs: 168 }
    ]
  };

  // 5. Khoảng nghỉ sinh học giữa các vế trong cùng 1 lượt nói và giữa 2 nhân vật (ms)
  const PAUSE_TIMING_MS = {
    intraClauseShort: 168,      // Nghỉ ngắn lấy hơi sau thán từ (あ、/ わあ、/ はい、/ ええ、)
    intraClauseHesitation: 240, // Nghỉ ngập ngừng suy nghĩ sau (あのう、/ そうですね… / 実は、)
    intraSentenceBreak: 264,    // Nghỉ giữa 2 câu đơn trong cùng 1 lượt lời (。 / ？ / ！)
    turnGapQuickGreeting: 336,  // Đáp lời chào / Aizuchi ngắn (おはようございます -> おはようございます)
    turnGapQuestionAnswer: 456, // Trả lời sau câu hỏi (？ -> câu trả lời)
    turnGapTopicShift: 504,     // Chuyển ý hoặc ngập ngừng trước khi mở lời
    turnGapStandard: 384        // Chuyển lượt đối thoại thông thường
  };

  const AUDIO_PROSODY_RULES = {
    discourseWords: DISCOURSE_PAUSE_WORDS,
    subordinateConjunctions: ['たら', 'だら', 'なら', 'えば', 'けば', 'せば', 'てば', 'ねば', 'べば', 'めば', 'れば', 'いれば', 'ければ'],
    causeConjunctions: ['から', 'ので', 'のに'],
    phoneticContextReplacements: PHONETIC_CONTEXT_REPLACEMENTS,
    emotionProsodyProfiles: EMOTION_PROSODY_PROFILES,
    contextualSentimentRules: CONTEXTUAL_SENTIMENT_RULES,
    pauseTimingMs: PAUSE_TIMING_MS
  };

  // Bảo đảm tương thích toàn cầu (Browser & Node.js)
  if (typeof window !== 'undefined') {
    window.DISCOURSE_PAUSE_WORDS = DISCOURSE_PAUSE_WORDS;
    window.AUDIO_PROSODY_RULES = AUDIO_PROSODY_RULES;
  }
  if (typeof global !== 'undefined') {
    global.DISCOURSE_PAUSE_WORDS = DISCOURSE_PAUSE_WORDS;
    global.AUDIO_PROSODY_RULES = AUDIO_PROSODY_RULES;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUDIO_PROSODY_RULES;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
