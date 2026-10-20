// Test script for Japanese prosody & grammatical pauses
const testSentences = [
  // 1. Single vocab words (must NOT be modified with commas!)
  { in: "わたし", expected: "わたし" },
  { in: "食べます", expected: "食べます" },
  { in: "あたま", expected: "あたま" },
  { in: "こんにちは", expected: "こんにちは" },
  { in: "すみません", expected: "すみません" },

  // 2. Short sentences (must NOT insert comma after は!)
  { in: "これはペンです", expected: "これはペンです。" },
  { in: "私は学生です", expected: "私は学生です。" },
  { in: "ミラーさんはアメリカ人です", expected: "ミラーさんはアメリカ人です。" },
  { in: "お元気ですか", expected: "お元気ですか？" },

  // 3. Discourse markers & conjunctions at start of sentence
  { in: "はい、会社員です。", expected: "はい、会社員です。" },
  { in: "はい 会社員です", expected: "はい、会社員です。" },
  { in: "いいえ、学生ではありません。", expected: "いいえ、学生ではありません。" },
  { in: "いいえ学生ではありません", expected: "いいえ、学生ではありません。" },
  { in: "すみません トイレはどこですか", expected: "すみません、トイレはどこですか？" },
  { in: "そして 私は東京へ行きました", expected: "そして、私は東京へ行きました。" },
  { in: "ですから 傘を持って行きます", expected: "ですから、傘を持って行きます。" },

  // 4. Subordinate clauses: たら, から, ので, のに, ても, けど, ながら, てから
  { in: "もし1億円あったら世界旅行をしたいです", expected: "もし1億円あったら、世界旅行をしたいです。" },
  { in: "時間が合ったら映画を見ます", expected: "時間が合ったら、映画を見ます。" },
  { in: "雨が降っていますから傘を持って行きます", expected: "雨が降っていますから、傘を持って行きます。" },
  { in: "暑いのでエアコンをつけました", expected: "暑いので、エアコンをつけました。" },
  { in: "約束したのに来ませんでした", expected: "約束したのに、来ませんでした。" },
  { in: "雨が降っても行きます", expected: "雨が降っても、行きます。" },
  { in: "高いですけど買いました", expected: "高いですけど、買いました。" },
  { in: "音楽を聞きながら勉強します", expected: "音楽を聞きながら、勉強します。" },
  { in: "ご飯を食べてから出かけます", expected: "ご飯を食べてから、出かけます。" },
  { in: "大変だと思いますがおもしろいです", expected: "大変だと思いますが、おもしろいです。" },
  { in: "失礼ですがお名前は何ですか", expected: "失礼ですが、お名前は何ですか？" },

  // 5. Indefinite pronouns with でも (must NOT add comma!)
  { in: "いつでも電話してください", expected: "いつでも電話してください。" },
  { in: "どこでもドアがあります", expected: "どこでもドアがあります。" },
  { in: "だれでも知っています", expected: "だれでも知っています。" },

  // 6. Quotation: 「...」と言いました
  { in: "ミラーさんは「来週東京へ出張します」と言いました。", expected: "ミラーさんは「来週東京へ出張します」と、言いました。" },

  // 7. Compound topic phrases (については, というのは)
  { in: "この問題については後で話し合いましょう", expected: "この問題については、後で話し合いましょう。" },

  // 8. Punctuation normalization
  { in: "はい, そうです. ", expected: "はい、そうです。" },

  // 9. Multi-sentence & Greetings
  { in: "はじめまして。ミラーです。アメリカから来ました。どうぞよろしくお願いします。", expected: "はじめまして。ミラーです。アメリカから来ました。どうぞ、よろしくお願いします。" },
  { in: "先生、おはようございます。", expected: "先生、おはようございます。" },

  // 10. Complex clauses: たり, ば, てから, とき
  { in: "休みの日は本を読んだり音楽を聞いたりします", expected: "休みの日は本を読んだり、音楽を聞いたりします。" },
  { in: "手を洗ってからご飯を食べます", expected: "手を洗ってから、ご飯を食べます。" },
  { in: "頭が痛いので早く帰ります", expected: "頭が痛いので、早く帰ります。" },
  { in: "安ければ買います", expected: "安ければ、買います。" },
  { in: "日本へ行ったときは写真を撮りました", expected: "日本へ行ったときは、写真を撮りました。" }
];

function formatJapaneseGrammarSpeech(text) {
  if (!text) return '';
  let str = String(text).trim();

  // 1. Loại bỏ các thẻ HTML / Ruby
  str = str.replace(/<rt>.*?<\/rt>/g, '').replace(/<[^>]*>/g, '');
  // Loại bỏ ký tự escape không cần thiết
  str = str.replace(/['"\\]/g, ' ');

  // 2. Chuẩn hóa dấu câu half-width sang full-width tiếng Nhật
  str = str.replace(/,/g, '、')
           .replace(/\.(?!\d)/g, '。')
           .replace(/\?/g, '？')
           .replace(/!/g, '！')
           .replace(/;/g, '、')
           .replace(/:/g, '：');

  // Chuẩn hóa khoảng trắng sau dấu câu
  str = str.replace(/([、。！？])\s+/g, '$1')
           .replace(/\s+([、。！？])/g, '$1');

  // Đơn từ rất ngắn (từ vựng đơn lẻ <= 6 ký tự không phải câu ghép hay câu hỏi): giữ nguyên phát âm chuẩn từ vựng
  const rawClean = str.replace(/[、。！？\s]/g, '');
  const isQuestion = /(?:か|ですか|ますか|でしょうか)$/.test(rawClean);
  const hasMultipleClausesOrParticles = /[ぁ-んァ-ヶ一-龥]+(?:は|が|を|に|で|へ|と|も)\s*[ぁ-んァ-ヶ一-龥]+/.test(str);
  const hasSpaces = /\s/.test(str);

  if (rawClean.length <= 6 && !isQuestion && !hasMultipleClausesOrParticles && !hasSpaces && !/[、。！？]/.test(str)) {
    return str;
  }

  // 3. Ngắt nghỉ sau liên từ / thán từ ở đầu câu hoặc sau dấu chấm câu
  const discourseWords = [
    'そして', 'それから', 'それに', 'それで', 'ですから', 'だから',
    'しかし', 'でも', 'けれども', 'だけど', 'また', 'あるいは', 'または',
    'では', 'それでは', 'じゃ', 'ところで', 'たとえば', '例えば',
    '実は', 'じつは', 'まず', 'つぎに', '次に', 'さいごに', '最後に',
    'はい', 'いいえ', 'ええ', 'すみません', 'すいません', 'ごめんなさい',
    'おはようございます', 'こんにちは', 'こんばんは', 'はじめまして',
    'どうぞ', 'あのう', 'ええと'
  ];
  const discoursePattern = new RegExp(
    `(^|[。！？\\n])\\s*(${discourseWords.join('|')})(?:\\s*|(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9]))(?!([、。！？』」）\\)]|$))`,
    'g'
  );
  str = str.replace(discoursePattern, '$1$2、');

  // 4. Ngắt nghỉ sau các liên từ nối mệnh đề phụ (Subordinate clause conjunctions)
  // 4.1. Điều kiện: 〜たら / 〜だら (loại trừ từ vựng đơn)
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(たら|だら)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');

  // 4.2. Điều kiện: 〜なら (loại trừ さようなら, さよなら)
  str = str.replace(/(?!さようなら|さよなら)([ぁ-んァ-ヶ一-龥]{2,})(なら)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');

  // 4.3. Điều kiện thể 〜ば
  str = str.replace(/([ぁ-んァ-ヶ一-龥]+)(えば|けば|せば|てば|ねば|べば|めば|れば|いれば|ければ)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');

  // 4.4. Mốc thời gian / hoàn cảnh: 〜ときは / 〜時は / 〜場合は (ưu tiên chuỗi dài hơn trước)
  str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ときは|ときに|とき|場合は|場合))(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9]{3,})/g, '$1、');

  // 4.5. Nguyên nhân: 〜から (sau vị ngữ thể ngắn hoặc です/ます), loại trừ からです / からだ
  str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ます|です|ました|でした|だ|た|かった|ない|たい|る|う|く|い))から(?!(?:です|だ|でした|だろう|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1から、');

  // 4.5. Nguyên nhân: 〜ので (loại trừ のです / のですか / のだ)
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})ので(?!(?:す|すか|だ|である|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1ので、');

  // 4.6. Trái ngược / nhượng bộ: 〜のに (mặc dù)
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})のに(?!(?:に|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1のに、');

  // 4.7. Trái ngược / nhượng bộ: 〜ても / 〜でも (loại trừ đại từ phiếm chỉ: いつでも, どこでも, だれでも, なんでも...)
  str = str.replace(/(?<![ぁ-んァ-ヶ一-龥])(?!いつでも|どこでも|だれでも|誰でも|何でも|なんでも|どちらでも|どれでも|いくらでも|そうでも)([ぁ-んァ-ヶ一-龥]{2,})(ても|でも)(?!(?:も|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{3,})(ても|でも)(?!(?:も|[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, (match, p1, p2) => {
    if (/^(?:いつでも|どこでも|だれでも|誰でも|何でも|なんでも|どちらでも|どれでも|いくらでも|そうでも)$/.test(p1 + p2)) {
      return match;
    }
    return p1 + p2 + '、';
  });

  // 4.8. Nhượng bộ ngắn: 〜けど / 〜けれど / 〜けれども
  str = str.replace(/(けど|けれど|けれども)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1、');

  // 4.9. Liên kết nhượng bộ lịch sự: 〜ですが / 〜ますが / 〜ましたが
  str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ですが|ますが|でしたが|ましたが|思いますが))(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1、');

  // 4.10. Hành động đồng thời: 〜ながら
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})ながら(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1ながら、');

  // 4.11. Hành động tuần tự: 〜てから / 〜でから
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(てから|でから)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');

  // 4.12. Liệt kê hành động: 〜たり、〜たり
  str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(たり|だり)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥]+(?:たり|だり))/g, '$1$2、');

  // 5. Ngắt sau cấu trúc chủ đề phức hợp (compound topic markers)
  str = str.replace(/(については|というのは|にとっては|に対しては|においては)(?!(?:[、。！？』」）\\)]|$))(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9]{3,})/g, '$1、');

  // 6. Ngắt sau dấu trích dẫn「...」với trợ từ trích dẫn と
  str = str.replace(/([」』])と(?!(?:[、。！？』」）\\)]|$))(?=(?:言い|いい|聞き|きき|思い|おもい|答え|こたえ|書い|かい|話|叫び))/g, '$1と、');

  // 7. Dọn dẹp dấu trùng lặp và khoảng trắng dư
  str = str.replace(/、+/g, '、')
           .replace(/。+/g, '。')
           .replace(/、([。！？])/g, '$1')
           .replace(/([。！？])、/g, '$1')
           .replace(/\s+/g, ' ')
           .trim();

  // 8. Thêm dấu câu ngắt câu tự nhiên ở cuối nếu là câu hoàn chỉnh
  if (!/[。！？]$/.test(str)) {
    if (/(?:か|でしょうか|ですか|ますか|のか|かい)$/.test(str)) {
      str += '？';
    } else if (str.length >= 6 || /(?:です|ます|だ|でした|ました|ません|だった|ではない|じゃない|ですよ|ですね|ますよ|ますね|のだ|んだ)$/.test(str)) {
      str += '。';
    }
  }

  return str;
}

console.log("=== RUNNING TEST CASES ===");
let passed = 0;
testSentences.forEach((tc, idx) => {
  const result = formatJapaneseGrammarSpeech(tc.in);
  const ok = result === tc.expected;
  if (ok) {
    passed++;
    console.log(`[PASS] Case #${idx + 1}: "${tc.in}" -> "${result}"`);
  } else {
    console.log(`[FAIL] Case #${idx + 1}: "${tc.in}"`);
    console.log(`       Got:      "${result}"`);
    console.log(`       Expected: "${tc.expected}"`);
  }
});
console.log(`\nResult: ${passed}/${testSentences.length} passed.`);
