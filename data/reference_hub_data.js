/**
 * Reference Hub Data (Minna no Nihongo N5-N4 Master Suite V4 Pro)
 * Canonical Reference Tables:
 *  - 46 Hiragana & 46 Katakana (with strokeHints & romaji)
 *  - 25 Dakuon & Handakuon (が, ざ, だ, ば, ぱ rows with sample words & readings)
 *  - 33 Yoon (拗音: きゃ, しゃ, ちゃ... ぎゃ, じゃ, びゃ, ぴゃ with sample words)
 *  - 10 JLPT Counters (with phonetic irregularities & complete 1-10 counting sets)
 *  - 8 Confusing Particle Comparison Pairs (with formula, key rules & furigana readings)
 *  - 4 Advanced N4 Particle Comparison Pairs (dake vs shika, tameni vs youni, kara vs noni, tara vs temo)
 *  - timeAdverbsMatrix (timeTable 6 rows, frequencyAdverbs 10 items, questionWords 8 items)
 *  - keigoTable (12 Core N4 Keigo Verbs: Sonkeigo, Kenjougo, Teineigo)
 *  - transitivityPairs (12 Classic N4 Jidoushi vs Tadoushi Pairs)
 *  - verbBank (42 Core N5-N4 Verbs across Group 1/2/3 with example sentences)
 *  - adjectiveBank (16 Core N5-N4 Adjectives: 8 い-adj + 8 な-adj with example sentences)
 *  - O(1) Fast Lookup Maps & Utility Query Methods
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.REFERENCE_HUB_DATA = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // 1. HIRAGANA (46 Chữ Cơ Bản)
  const hiragana = [
    { char: 'あ', romaji: 'a', row: 'a', strokeHint: '3 nét: ngang, sổ cong, vòng phải' },
    { char: 'い', romaji: 'i', row: 'a', strokeHint: '2 nét: móc trái dài, phẩy phải ngắn' },
    { char: 'う', romaji: 'u', row: 'a', strokeHint: '2 nét: chấm trên, cong tròn dưới' },
    { char: 'え', romaji: 'e', row: 'a', strokeHint: '2 nét: chấm trên, ngang gập uốn sóng' },
    { char: 'お', romaji: 'o', row: 'a', strokeHint: '3 nét: ngang, sổ vòng tròn, chấm phải' },
    { char: 'か', romaji: 'ka', row: 'ka', strokeHint: '3 nét: cong móc, sổ phẩy, chấm phải' },
    { char: 'き', romaji: 'ki', row: 'ka', strokeHint: '4 nét: hai ngang nghiêng, sổ cong, đáy tròn' },
    { char: 'く', romaji: 'ku', row: 'ka', strokeHint: '1 nét: gập góc nhọn như mỏ chim' },
    { char: 'け', romaji: 'ke', row: 'ka', strokeHint: '3 nét: sổ móc trái, ngang, sổ phẩy phải' },
    { char: 'こ', romaji: 'ko', row: 'ka', strokeHint: '2 nét: ngang trên móc nhẹ, ngang dưới bo' },
    { char: 'さ', romaji: 'sa', row: 'sa', strokeHint: '3 nét: một ngang nghiêng, sổ cong, đáy tròn' },
    { char: 'し', romaji: 'shi', row: 'sa', strokeHint: '1 nét: sổ thẳng uốn móc lên phải' },
    { char: 'す', romaji: 'su', row: 'sa', strokeHint: '2 nét: ngang, sổ thắt nút xoắn tròn' },
    { char: 'せ', romaji: 'se', row: 'sa', strokeHint: '3 nét: ngang dài, sổ móc ngắn, sổ cong đáy' },
    { char: 'そ', romaji: 'so', row: 'sa', strokeHint: '1 nét: zíc zắc trên nối bụng cong dưới' },
    { char: 'た', romaji: 'ta', row: 'ta', strokeHint: '4 nét: ngang, sổ phẩy, hai nét こ bên phải' },
    { char: 'ち', romaji: 'chi', row: 'ta', strokeHint: '2 nét: ngang ngắn, sổ uốn bụng tròn như số 5' },
    { char: 'つ', romaji: 'tsu', row: 'ta', strokeHint: '1 nét: cong vòm rộng từ trái sang phải' },
    { char: 'て', romaji: 'te', row: 'ta', strokeHint: '1 nét: ngang kéo dài rồi uốn cong bụng chữ C' },
    { char: 'と', romaji: 'to', row: 'ta', strokeHint: '2 nét: phẩy chéo ngắn, vòng cung ôm dưới' },
    { char: 'な', romaji: 'na', row: 'na', strokeHint: '4 nét: ngang, phẩy trái, chấm phải, sổ thắt nút' },
    { char: 'に', romaji: 'ni', row: 'na', strokeHint: '3 nét: sổ móc trái, hai nét ngang こ bên phải' },
    { char: 'ぬ', romaji: 'nu', row: 'na', strokeHint: '2 nét: phẩy cong trái, vòng tròn lớn thắt đuôi' },
    { char: 'ね', romaji: 'ne', row: 'na', strokeHint: '2 nét: sổ thẳng, nét zíc zắc vòng thắt nút đuôi' },
    { char: 'の', romaji: 'no', row: 'na', strokeHint: '1 nét: sổ nghiêng vòng tròn từ tâm cuốn ra' },
    { char: 'は', romaji: 'ha', row: 'ha', strokeHint: '3 nét: sổ móc trái, ngang phải, sổ thắt nút' },
    { char: 'ひ', romaji: 'hi', row: 'ha', strokeHint: '1 nét: ngang ngắn uốn lõm sâu như chiếc túi' },
    { char: 'ふ', romaji: 'fu', row: 'ha', strokeHint: '4 nét: chấm đỉnh, cong bụng giữa, hai chấm hai bên' },
    { char: 'へ', romaji: 'he', row: 'ha', strokeHint: '1 nét: lên dốc ngắn rồi thoải dài xuống phải' },
    { char: 'ほ', romaji: 'ho', row: 'ha', strokeHint: '4 nét: sổ móc trái, hai ngang phải, sổ thắt nút' },
    { char: 'ま', romaji: 'ma', row: 'ma', strokeHint: '3 nét: hai ngang song song, sổ giữa thắt nút' },
    { char: 'み', romaji: 'mi', row: 'ma', strokeHint: '2 nét: ngang gập thắt vòng, phẩy cắt chéo phải' },
    { char: 'む', romaji: 'mu', row: 'ma', strokeHint: '3 nét: ngang ngắn, sổ thắt tròn kéo đáy, chấm phải' },
    { char: 'め', romaji: 'me', row: 'ma', strokeHint: '2 nét: phẩy cong trái, vòng tròn lớn không thắt nút' },
    { char: 'も', romaji: 'mo', row: 'ma', strokeHint: '3 nét: sổ uốn móc lên, hai nét ngang cắt ngang' },
    { char: 'や', romaji: 'ya', row: 'ya', strokeHint: '3 nét: cong móc phải, chấm ngắn trên, sổ chéo dài' },
    { char: 'ゆ', romaji: 'yu', row: 'ya', strokeHint: '2 nét: sổ vòng bụng rộng, sổ cong cắt giữa' },
    { char: 'よ', romaji: 'yo', row: 'ya', strokeHint: '2 nét: ngang ngắn phải, sổ thẳng thắt nút đáy' },
    { char: 'ら', romaji: 'ra', row: 'ra', strokeHint: '2 nét: chấm trên, sổ ngắn uốn bụng tròn' },
    { char: 'り', romaji: 'ri', row: 'ra', strokeHint: '2 nét: sổ móc ngắn trái, sổ cong dài phải' },
    { char: 'る', romaji: 'ru', row: 'ra', strokeHint: '1 nét: ngang gập chéo uốn bụng và thắt nút tròn' },
    { char: 'れ', romaji: 're', row: 'ra', strokeHint: '2 nét: sổ thẳng, nét zíc zắc hất đuôi ra ngoài' },
    { char: 'ろ', romaji: 'ro', row: 'ra', strokeHint: '1 nét: ngang gập chéo uốn bụng tròn không thắt nút' },
    { char: 'わ', romaji: 'wa', row: 'wa', strokeHint: '2 nét: sổ thẳng, nét zíc zắc uốn vòng bụng rộng' },
    { char: 'を', romaji: 'wo', row: 'wa', strokeHint: '3 nét: ngang, gập móc giữa, vòng cung ôm dưới' },
    { char: 'ん', romaji: 'n', row: 'wa', strokeHint: '1 nét: phẩy chéo dài rồi uốn lượn sóng lên phải' }
  ];

  // 2. KATAKANA (46 Chữ Cơ Bản)
  const katakana = [
    { char: 'ア', romaji: 'a', row: 'a', strokeHint: '2 nét: ngang gập phẩy ngắn, phẩy cong xuống' },
    { char: 'イ', romaji: 'i', row: 'a', strokeHint: '2 nét: phẩy chéo dài trên, sổ thẳng dưới' },
    { char: 'ウ', romaji: 'u', row: 'a', strokeHint: '3 nét: chấm đỉnh, sổ ngắn trái, ngang gập phẩy' },
    { char: 'エ', romaji: 'e', row: 'a', strokeHint: '3 nét: ngang trên, sổ giữa, ngang đáy dài' },
    { char: 'オ', romaji: 'o', row: 'a', strokeHint: '3 nét: ngang, sổ móc, phẩy chéo trái' },
    { char: 'カ', romaji: 'ka', row: 'ka', strokeHint: '2 nét: ngang gập móc góc cạnh, phẩy trái' },
    { char: 'キ', romaji: 'ki', row: 'ka', strokeHint: '3 nét: hai ngang nghiêng, một sổ chéo cắt qua' },
    { char: 'ク', romaji: 'ku', row: 'ka', strokeHint: '2 nét: phẩy ngắn trái, ngang gập phẩy dài' },
    { char: 'ケ', romaji: 'ke', row: 'ka', strokeHint: '3 nét: phẩy ngắn trái, ngang, phẩy cong giữa' },
    { char: 'コ', romaji: 'ko', row: 'ka', strokeHint: '2 nét: ngang gập sổ phải, ngang đáy khép góc' },
    { char: 'サ', romaji: 'sa', row: 'sa', strokeHint: '3 nét: ngang dài, sổ ngắn trái, sổ phẩy phải' },
    { char: 'シ', romaji: 'shi', row: 'sa', strokeHint: '3 nét: hai chấm xếp dọc, nét hất từ dưới lên' },
    { char: 'ス', romaji: 'su', row: 'sa', strokeHint: '2 nét: ngang gập phẩy dài, chấm chéo chân phải' },
    { char: 'セ', romaji: 'se', row: 'sa', strokeHint: '2 nét: ngang gập móc ngắn, sổ gập ngang đáy' },
    { char: 'ソ', romaji: 'so', row: 'sa', strokeHint: '2 nét: chấm ngắn dọc trên, phẩy dài từ trên xuống' },
    { char: 'タ', romaji: 'ta', row: 'ta', strokeHint: '3 nét: phẩy ngắn, ngang gập phẩy, chấm giữa bụng' },
    { char: 'チ', romaji: 'chi', row: 'ta', strokeHint: '3 nét: phẩy ngang trên, ngang giữa, sổ phẩy giữa' },
    { char: 'ツ', romaji: 'tsu', row: 'ta', strokeHint: '3 nét: hai chấm xếp ngang trên, phẩy dài từ trên xuống' },
    { char: 'テ', romaji: 'te', row: 'ta', strokeHint: '3 nét: ngang ngắn trên, ngang dài giữa, sổ phẩy' },
    { char: 'ト', romaji: 'to', row: 'ta', strokeHint: '2 nét: sổ thẳng, chấm chéo sang phải' },
    { char: 'ナ', romaji: 'na', row: 'na', strokeHint: '2 nét: ngang thẳng, sổ phẩy cắt giữa' },
    { char: 'ニ', romaji: 'ni', row: 'na', strokeHint: '2 nét: ngang ngắn trên, ngang dài dưới' },
    { char: 'ヌ', romaji: 'nu', row: 'na', strokeHint: '2 nét: ngang gập phẩy dài, chấm chéo cắt ngang' },
    { char: 'ネ', romaji: 'ne', row: 'na', strokeHint: '4 nét: chấm đỉnh, ngang gập phẩy, sổ giữa, chấm phải' },
    { char: 'ノ', romaji: 'no', row: 'na', strokeHint: '1 nét: phẩy cong mượt từ trên phải xuống dưới trái' },
    { char: 'ハ', romaji: 'ha', row: 'ha', strokeHint: '2 nét: phẩy trái, chấm dài nghiêng phải' },
    { char: 'ヒ', romaji: 'hi', row: 'ha', strokeHint: '2 nét: ngang ngắn phải, sổ gập ngang bo đáy' },
    { char: 'フ', romaji: 'fu', row: 'ha', strokeHint: '1 nét: ngang thẳng gập phẩy cong xuống' },
    { char: 'ヘ', romaji: 'he', row: 'ha', strokeHint: '1 nét: gập đỉnh nhọn và kéo thoải sang phải' },
    { char: 'ホ', romaji: 'ho', row: 'ha', strokeHint: '4 nét: ngang, sổ móc giữa, hai chấm hai bên' },
    { char: 'マ', romaji: 'ma', row: 'ma', strokeHint: '2 nét: ngang gập phẩy chéo, chấm đỡ ở đáy' },
    { char: 'ミ', romaji: 'mi', row: 'ma', strokeHint: '3 nét: ba vạch nghiêng song song từ trên xuống' },
    { char: 'ム', romaji: 'mu', row: 'ma', strokeHint: '2 nét: phẩy gập ngang tạo tam giác hở, chấm phải' },
    { char: 'メ', romaji: 'me', row: 'ma', strokeHint: '2 nét: phẩy cong dài, chấm chéo ngắn cắt giữa' },
    { char: 'モ', romaji: 'mo', row: 'ma', strokeHint: '3 nét: hai ngang song song, sổ gập ngang đáy' },
    { char: 'ヤ', romaji: 'ya', row: 'ya', strokeHint: '2 nét: ngang gập móc ngắn, sổ chéo dài cắt qua' },
    { char: 'ユ', romaji: 'yu', row: 'ya', strokeHint: '2 nét: ngang gập sổ, ngang đáy kéo dài hơn' },
    { char: 'ヨ', romaji: 'yo', row: 'ya', strokeHint: '3 nét: ngang gập sổ, ngang giữa, ngang đáy' },
    { char: 'ラ', romaji: 'ra', row: 'ra', strokeHint: '2 nét: ngang ngắn trên, ngang dưới gập phẩy' },
    { char: 'リ', romaji: 'ri', row: 'ra', strokeHint: '2 nét: sổ ngắn trái, sổ phẩy dài phải' },
    { char: 'ル', romaji: 'ru', row: 'ra', strokeHint: '2 nét: sổ phẩy trái, sổ gập hất lên phải' },
    { char: 'レ', romaji: 're', row: 'ra', strokeHint: '1 nét: sổ thẳng gập góc hất chéo lên phải' },
    { char: 'ロ', romaji: 'ro', row: 'ra', strokeHint: '3 nét: sổ trái, ngang gập sổ phải, ngang đáy khép kín' },
    { char: 'ワ', romaji: 'wa', row: 'wa', strokeHint: '2 nét: sổ ngắn trái, ngang gập phẩy cong' },
    { char: 'ヲ', romaji: 'wo', row: 'wa', strokeHint: '3 nét: hai ngang trên, phẩy cong từ đầu nét trên' },
    { char: 'ン', romaji: 'n', row: 'wa', strokeHint: '2 nét: một chấm trên, nét hất cong từ dưới lên' }
  ];

  // 3. DAKUON & HANDAKUON (25 Âm Đục & Bán Đục)
  const dakuon = [
    // Hàng が (ga) - Dakuon
    { hira: 'が', kata: 'ガ', romaji: 'ga', type: 'dakuon', sampleJp: '外国人', sampleReading: 'がいこくじん', sampleVi: 'Người nước ngoài' },
    { hira: 'ぎ', kata: 'ギ', romaji: 'gi', type: 'dakuon', sampleJp: '銀行', sampleReading: 'ぎんこう', sampleVi: 'Ngân hàng' },
    { hira: 'ぐ', kata: 'グ', romaji: 'gu', type: 'dakuon', sampleJp: '具合', sampleReading: 'ぐあい', sampleVi: 'Tình trạng (sức khỏe/máy móc)' },
    { hira: 'げ', kata: 'ゲ', romaji: 'ge', type: 'dakuon', sampleJp: '元気', sampleReading: 'げんき', sampleVi: 'Khỏe mạnh' },
    { hira: 'ご', kata: 'ゴ', romaji: 'go', type: 'dakuon', sampleJp: 'ご飯', sampleReading: 'ごはん', sampleVi: 'Cơm, bữa ăn' },
    // Hàng ざ (za) - Dakuon
    { hira: 'ざ', kata: 'ザ', romaji: 'za', type: 'dakuon', sampleJp: '雑誌', sampleReading: 'ざっし', sampleVi: 'Tạp chí' },
    { hira: 'じ', kata: 'ジ', romaji: 'ji', type: 'dakuon', sampleJp: '時間', sampleReading: 'じかん', sampleVi: 'Thời gian' },
    { hira: 'ず', kata: 'ズ', romaji: 'zu', type: 'dakuon', sampleJp: '地図', sampleReading: 'ちず', sampleVi: 'Bản đồ' },
    { hira: 'ぜ', kata: 'ゼ', romaji: 'ze', type: 'dakuon', sampleJp: '全部', sampleReading: 'ぜんぶ', sampleVi: 'Toàn bộ, tất cả' },
    { hira: 'ぞ', kata: 'ゾ', romaji: 'zo', type: 'dakuon', sampleJp: '家族', sampleReading: 'かぞく', sampleVi: 'Gia đình' },
    // Hàng だ (da) - Dakuon
    { hira: 'だ', kata: 'ダ', romaji: 'da', type: 'dakuon', sampleJp: '大学', sampleReading: 'だいがく', sampleVi: 'Trường đại học' },
    { hira: 'ぢ', kata: 'ヂ', romaji: 'ji', type: 'dakuon', sampleJp: '鼻血', sampleReading: 'はなぢ', sampleVi: 'Chảy máu cam' },
    { hira: 'づ', kata: 'ヅ', romaji: 'zu', type: 'dakuon', sampleJp: '続く', sampleReading: 'つづく', sampleVi: 'Tiếp tục' },
    { hira: 'で', kata: 'デ', romaji: 'de', type: 'dakuon', sampleJp: '電話', sampleReading: 'でんわ', sampleVi: 'Điện thoại' },
    { hira: 'ど', kata: 'ド', romaji: 'do', type: 'dakuon', sampleJp: '友達', sampleReading: 'ともだち', sampleVi: 'Bạn bè' },
    // Hàng ば (ba) - Dakuon
    { hira: 'ば', kata: 'バ', romaji: 'ba', type: 'dakuon', sampleJp: '場所', sampleReading: 'ばしょ', sampleVi: 'Địa điểm, nơi chốn' },
    { hira: 'び', kata: 'ビ', romaji: 'bi', type: 'dakuon', sampleJp: '病院', sampleReading: 'びょういん', sampleVi: 'Bệnh viện' },
    { hira: 'ぶ', kata: 'ブ', romaji: 'bu', type: 'dakuon', sampleJp: '豚肉', sampleReading: 'ぶたにく', sampleVi: 'Thịt lợn' },
    { hira: 'べ', kata: 'ベ', romaji: 'be', type: 'dakuon', sampleJp: '勉強', sampleReading: 'べんきょう', sampleVi: 'Học tập' },
    { hira: 'ぼ', kata: 'ボ', romaji: 'bo', type: 'dakuon', sampleJp: '貿易', sampleReading: 'ぼうえき', sampleVi: 'Thương mại' },
    // Hàng ぱ (pa) - Handakuon
    { hira: 'ぱ', kata: 'パ', romaji: 'pa', type: 'handakuon', sampleJp: '乾杯', sampleReading: 'かんぱい', sampleVi: 'Cạn ly, nâng cốc' },
    { hira: 'ぴ', kata: 'ピ', romaji: 'pi', type: 'handakuon', sampleJp: '鉛筆', sampleReading: 'えんぴつ', sampleVi: 'Bút chì' },
    { hira: 'ぷ', kata: 'プ', romaji: 'pu', type: 'handakuon', sampleJp: '切符', sampleReading: 'きっぷ', sampleVi: 'Vé (tàu, xe)' },
    { hira: 'ぺ', kata: 'ペ', romaji: 'pe', type: 'handakuon', sampleJp: 'ぺこぺこ', sampleReading: 'ぺこぺこ', sampleVi: 'Đói bụng cồn cào' },
    { hira: 'ぽ', kata: 'ポ', romaji: 'po', type: 'handakuon', sampleJp: '散歩', sampleReading: 'さんぽ', sampleVi: 'Đi dạo' }
  ];

  // 4. YOON (33 Âm Ghép 拗音)
  const yoon = [
    // Hàng き (ki)
    { hira: 'きゃ', kata: 'キャ', romaji: 'kya', sampleJp: 'お客さん', sampleReading: 'おきゃくさん', sampleVi: 'Khách hàng' },
    { hira: 'きゅ', kata: 'キュ', romaji: 'kyu', sampleJp: '野球', sampleReading: 'やきゅう', sampleVi: 'Bóng chày' },
    { hira: 'きょ', kata: 'キョ', romaji: 'kyo', sampleJp: '今日', sampleReading: 'きょう', sampleVi: 'Hôm nay' },
    // Hàng し (shi)
    { hira: 'しゃ', kata: 'シャ', romaji: 'sha', sampleJp: '写真', sampleReading: 'しゃしん', sampleVi: 'Bức ảnh' },
    { hira: 'しゅ', kata: 'シュ', romaji: 'shu', sampleJp: '趣味', sampleReading: 'しゅみ', sampleVi: 'Sở thích' },
    { hira: 'しょ', kata: 'ショ', romaji: 'sho', sampleJp: '食堂', sampleReading: 'しょくどう', sampleVi: 'Nhà ăn, căng tin' },
    // Hàng ち (chi)
    { hira: 'ちゃ', kata: 'チャ', romaji: 'cha', sampleJp: 'お茶', sampleReading: 'おちゃ', sampleVi: 'Trà xanh' },
    { hira: 'ちゅ', kata: 'チュ', romaji: 'chu', sampleJp: '注意', sampleReading: 'ちゅうい', sampleVi: 'Chú ý, cẩn thận' },
    { hira: 'ちょ', kata: 'チョ', romaji: 'cho', sampleJp: 'ちょっと', sampleReading: 'ちょっと', sampleVi: 'Một chút, một lát' },
    // Hàng に (ni)
    { hira: 'にゃ', kata: 'ニャ', romaji: 'nya', sampleJp: 'こんにゃく', sampleReading: 'こんにゃく', sampleVi: 'Củ nưa (món konnyaku)' },
    { hira: 'にゅ', kata: 'ニュ', romaji: 'nyu', sampleJp: '入国', sampleReading: 'にゅうこく', sampleVi: 'Nhập cảnh' },
    { hira: 'にょ', kata: 'ニョ', romaji: 'nyo', sampleJp: '女房', sampleReading: 'にょうぼう', sampleVi: 'Vợ (nhà tôi)' },
    // Hàng ひ (hi)
    { hira: 'ひゃ', kata: 'ヒャ', romaji: 'hya', sampleJp: '百', sampleReading: 'ひゃく', sampleVi: 'Một trăm' },
    { hira: 'ひゅ', kata: 'ヒュ', romaji: 'hyu', sampleJp: 'ヒューマン', sampleReading: 'ひゅーまん', sampleVi: 'Con người (Human)' },
    { hira: 'ひょ', kata: 'ヒョ', romaji: 'hyo', sampleJp: '表現', sampleReading: 'ひょうげん', sampleVi: 'Biểu hiện, diễn đạt' },
    // Hàng み (mi)
    { hira: 'みゃ', kata: 'ミャ', romaji: 'mya', sampleJp: '脈', sampleReading: 'みゃく', sampleVi: 'Mạch (mạch máu)' },
    { hira: 'みゅ', kata: 'ミュ', romaji: 'myu', sampleJp: 'ミュージアム', sampleReading: 'みゅーじあむ', sampleVi: 'Bảo tàng' },
    { hira: 'みょ', kata: 'ミョ', romaji: 'myo', sampleJp: '名字', sampleReading: 'みょうじ', sampleVi: 'Họ (tên họ)' },
    // Hàng り (ri)
    { hira: 'りゃ', kata: 'リャ', romaji: 'rya', sampleJp: '略語', sampleReading: 'りゃくご', sampleVi: 'Từ viết tắt' },
    { hira: 'りゅ', kata: 'リュ', romaji: 'ryu', sampleJp: '留学', sampleReading: 'りゅうがく', sampleVi: 'Du học' },
    { hira: 'りょ', kata: 'リョ', romaji: 'ryo', sampleJp: '旅行', sampleReading: 'りょこう', sampleVi: 'Du lịch' },
    // Hàng ぎ (gi)
    { hira: 'ぎゃ', kata: 'ギャ', romaji: 'gya', sampleJp: '逆', sampleReading: 'ぎゃく', sampleVi: 'Ngược lại' },
    { hira: 'ぎゅ', kata: 'ギュ', romaji: 'gyu', sampleJp: '牛肉', sampleReading: 'ぎゅうにく', sampleVi: 'Thịt bò' },
    { hira: 'ぎょ', kata: 'ギョ', romaji: 'gyo', sampleJp: '金魚', sampleReading: 'きんぎょ', sampleVi: 'Cá vàng' },
    // Hàng じ (ji)
    { hira: 'じゃ', kata: 'ジャ', romaji: 'ja', sampleJp: 'お邪魔します', sampleReading: 'おじゃまします', sampleVi: 'Xin lỗi vì đã làm phiền' },
    { hira: 'じゅ', kata: 'ジュ', romaji: 'ju', sampleJp: '準備', sampleReading: 'じゅんび', sampleVi: 'Chuẩn bị' },
    { hira: 'じょ', kata: 'ジョ', romaji: 'jo', sampleJp: '女性', sampleReading: 'じょせい', sampleVi: 'Phụ nữ' },
    // Hàng び (bi)
    { hira: 'びゃ', kata: 'ビャ', romaji: 'bya', sampleJp: '白夜', sampleReading: 'びゃくや', sampleVi: 'Đêm trắng' },
    { hira: 'びゅ', kata: 'ビュ', romaji: 'byu', sampleJp: 'インタビュー', sampleReading: 'いんたびゅー', sampleVi: 'Phỏng vấn' },
    { hira: 'びょ', kata: 'ビョ', romaji: 'byo', sampleJp: '病院', sampleReading: 'びょういん', sampleVi: 'Bệnh viện' },
    // Hàng ぴ (pi)
    { hira: 'ぴゃ', kata: 'ピャ', romaji: 'pya', sampleJp: '六百', sampleReading: 'ろっぴゃく', sampleVi: 'Sáu trăm' },
    { hira: 'ぴゅ', kata: 'ピュ', romaji: 'pyu', sampleJp: 'コンピューター', sampleReading: 'こんぴゅーたー', sampleVi: 'Máy vi tính' },
    { hira: 'ぴょ', kata: 'ピョ', romaji: 'pyo', sampleJp: '発表', sampleReading: 'はっぴょう', sampleVi: 'Phát biểu, thuyết trình' }
  ];

  // 5. JLPT COUNTERS (10 Bộ Đếm Cốt Lõi)
  const counters = [
    {
      id: 'tsu',
      kanji: '〜つ',
      reading: 'つ',
      meaning: 'Đếm đồ vật chung (Thuần Nhật 1-10)',
      usage: 'Dùng cho đồ vật nói chung, tuổi của trẻ nhỏ hoặc khái niệm trừu tượng',
      isIrregular: true,
      items: [
        { num: 1, kanji: '一つ', reading: 'ひとつ', romaji: 'hitotsu', isIrregular: true },
        { num: 2, kanji: '二つ', reading: 'ふたつ', romaji: 'futatsu', isIrregular: true },
        { num: 3, kanji: '三つ', reading: 'みっつ', romaji: 'mittsu', isIrregular: true },
        { num: 4, kanji: '四つ', reading: 'よっつ', romaji: 'yottsu', isIrregular: true },
        { num: 5, kanji: '五つ', reading: 'いつつ', romaji: 'itsutsu', isIrregular: true },
        { num: 6, kanji: '六つ', reading: 'むっつ', romaji: 'muttsu', isIrregular: true },
        { num: 7, kanji: '七つ', reading: 'ななつ', romaji: 'nanatsu', isIrregular: true },
        { num: 8, kanji: '八つ', reading: 'やっつ', romaji: 'yattsu', isIrregular: true },
        { num: 9, kanji: '九つ', reading: 'ここのつ', romaji: 'kokonotsu', isIrregular: true },
        { num: 10, kanji: '十', reading: 'とお', romaji: 'too', isIrregular: true }
      ]
    },
    {
      id: 'nin',
      kanji: '〜人',
      reading: 'にん',
      meaning: 'Đếm người',
      usage: 'Lưu ý đặc biệt: 1 người (ひとり), 2 người (ふたり), 4 người (よにん)',
      isIrregular: true,
      items: [
        { num: 1, kanji: '一人', reading: 'ひとり', romaji: 'hitori', isIrregular: true },
        { num: 2, kanji: '二人', reading: 'ふたり', romaji: 'futari', isIrregular: true },
        { num: 3, kanji: '三人', reading: 'さんにん', romaji: 'sannin', isIrregular: false },
        { num: 4, kanji: '四人', reading: 'よにん', romaji: 'yonin', isIrregular: true },
        { num: 5, kanji: '五人', reading: 'ごにん', romaji: 'gonin', isIrregular: false },
        { num: 6, kanji: '六人', reading: 'ろくにん', romaji: 'rokunin', isIrregular: false },
        { num: 7, kanji: '七人', reading: 'ななにん', romaji: 'nananin', isIrregular: false },
        { num: 8, kanji: '八人', reading: 'はちにん', romaji: 'hachinin', isIrregular: false },
        { num: 9, kanji: '九人', reading: 'きゅうにん', romaji: 'kyuunin', isIrregular: false },
        { num: 10, kanji: '十人', reading: 'じゅうにん', romaji: 'juunin', isIrregular: false }
      ]
    },
    {
      id: 'hon',
      kanji: '〜本',
      reading: 'ほん / ぽん / ぼん',
      meaning: 'Đếm vật thon dài (bút, chai, ô, cây, tàu)',
      usage: 'Biến âm tại 1, 6, 8, 10 (っぽん) và 3 (ぼん)',
      isIrregular: true,
      items: [
        { num: 1, kanji: '一本', reading: 'いっぽん', romaji: 'ippon', isIrregular: true },
        { num: 2, kanji: '二本', reading: 'にほん', romaji: 'nihon', isIrregular: false },
        { num: 3, kanji: '三本', reading: 'さんぼん', romaji: 'sanbon', isIrregular: true },
        { num: 4, kanji: '四本', reading: 'よんほん', romaji: 'yonhon', isIrregular: false },
        { num: 5, kanji: '五本', reading: 'ごほん', romaji: 'gohon', isIrregular: false },
        { num: 6, kanji: '六本', reading: 'ろっぽん', romaji: 'roppon', isIrregular: true },
        { num: 7, kanji: '七本', reading: 'ななほん', romaji: 'nanahon', isIrregular: false },
        { num: 8, kanji: '八本', reading: 'はっぽん', romaji: 'happon', isIrregular: true },
        { num: 9, kanji: '九本', reading: 'きゅうほん', romaji: 'kyuuhon', isIrregular: false },
        { num: 10, kanji: '十本', reading: 'じゅっぽん', romaji: 'juppon', isIrregular: true }
      ]
    },
    {
      id: 'mai',
      kanji: '〜枚',
      reading: 'まい',
      meaning: 'Đếm vật mỏng dẹt (giấy, áo, đĩa, vé, ảnh)',
      usage: 'Không có biến âm phức tạp, giữ nguyên まい từ 1 đến 10',
      isIrregular: false,
      items: [
        { num: 1, kanji: '一枚', reading: 'いちまい', romaji: 'ichimai', isIrregular: false },
        { num: 2, kanji: '二枚', reading: 'にまい', romaji: 'nimai', isIrregular: false },
        { num: 3, kanji: '三枚', reading: 'さんまい', romaji: 'sanmai', isIrregular: false },
        { num: 4, kanji: '四枚', reading: 'よんまい', romaji: 'yonmai', isIrregular: false },
        { num: 5, kanji: '五枚', reading: 'ごまい', romaji: 'gomai', isIrregular: false },
        { num: 6, kanji: '六枚', reading: 'ろくまい', romaji: 'rokumai', isIrregular: false },
        { num: 7, kanji: '七枚', reading: 'ななまい', romaji: 'nanamai', isIrregular: false },
        { num: 8, kanji: '八枚', reading: 'はちまい', romaji: 'hachimai', isIrregular: false },
        { num: 9, kanji: '九枚', reading: 'きゅうまい', romaji: 'kyuumai', isIrregular: false },
        { num: 10, kanji: '十枚', reading: 'じゅうまい', romaji: 'juumai', isIrregular: false }
      ]
    },
    {
      id: 'hiki',
      kanji: '〜匹',
      reading: 'ひき / ぴき / びき',
      meaning: 'Đếm động vật nhỏ (chó, mèo, cá, côn trùng)',
      usage: 'Biến âm tại 1, 6, 8, 10 (っぴき) và 3 (びき)',
      isIrregular: true,
      items: [
        { num: 1, kanji: '一匹', reading: 'いっぴき', romaji: 'ippiki', isIrregular: true },
        { num: 2, kanji: '二匹', reading: 'にひき', romaji: 'nihiki', isIrregular: false },
        { num: 3, kanji: '三匹', reading: 'さんびき', romaji: 'sanbiki', isIrregular: true },
        { num: 4, kanji: '四匹', reading: 'よんひき', romaji: 'yonhiki', isIrregular: false },
        { num: 5, kanji: '五匹', reading: 'ごひき', romaji: 'gohiki', isIrregular: false },
        { num: 6, kanji: '六匹', reading: 'ろっぴき', romaji: 'roppiki', isIrregular: true },
        { num: 7, kanji: '七匹', reading: 'ななひき', romaji: 'nanahiki', isIrregular: false },
        { num: 8, kanji: '八匹', reading: 'はっぴき', romaji: 'happiki', isIrregular: true },
        { num: 9, kanji: '九匹', reading: 'きゅうひき', romaji: 'kyuuhiki', isIrregular: false },
        { num: 10, kanji: '十匹', reading: 'じゅっぴき', romaji: 'juppiki', isIrregular: true }
      ]
    },
    {
      id: 'satsu',
      kanji: '〜冊',
      reading: 'さつ',
      meaning: 'Đếm sách, vở, tạp chí, từ điển',
      usage: 'Biến âm xúc âm tại 1, 8, 10 (っさつ)',
      isIrregular: true,
      items: [
        { num: 1, kanji: '一冊', reading: 'いっさつ', romaji: 'issatsu', isIrregular: true },
        { num: 2, kanji: '二冊', reading: 'にさつ', romaji: 'nisatsu', isIrregular: false },
        { num: 3, kanji: '三冊', reading: 'さんさつ', romaji: 'sansatsu', isIrregular: false },
        { num: 4, kanji: '四冊', reading: 'よんさつ', romaji: 'yonsatsu', isIrregular: false },
        { num: 5, kanji: '五冊', reading: 'ごさつ', romaji: 'gosatsu', isIrregular: false },
        { num: 6, kanji: '六冊', reading: 'ろくさつ', romaji: 'rokusatsu', isIrregular: false },
        { num: 7, kanji: '七冊', reading: 'ななさつ', romaji: 'nanasatsu', isIrregular: false },
        { num: 8, kanji: '八冊', reading: 'はっさつ', romaji: 'hassatsu', isIrregular: true },
        { num: 9, kanji: '九冊', reading: 'きゅうさつ', romaji: 'kyuusatsu', isIrregular: false },
        { num: 10, kanji: '十冊', reading: 'じゅっさつ', romaji: 'jussatsu', isIrregular: true }
      ]
    },
    {
      id: 'dai',
      kanji: '〜台',
      reading: 'だい',
      meaning: 'Đếm máy móc, xe cộ, thiết bị điện tử',
      usage: 'Không biến âm, giữ nguyên だい từ 1 đến 10',
      isIrregular: false,
      items: [
        { num: 1, kanji: '一台', reading: 'いちだい', romaji: 'ichidai', isIrregular: false },
        { num: 2, kanji: '二台', reading: 'にだい', romaji: 'nidai', isIrregular: false },
        { num: 3, kanji: '三台', reading: 'さんだい', romaji: 'sandai', isIrregular: false },
        { num: 4, kanji: '四台', reading: 'よんだい', romaji: 'yondai', isIrregular: false },
        { num: 5, kanji: '五台', reading: 'ごだい', romaji: 'godai', isIrregular: false },
        { num: 6, kanji: '六台', reading: 'ろくだい', romaji: 'rokudai', isIrregular: false },
        { num: 7, kanji: '七台', reading: 'ななだい', romaji: 'nanadai', isIrregular: false },
        { num: 8, kanji: '八台', reading: 'はちだい', romaji: 'hachidai', isIrregular: false },
        { num: 9, kanji: '九台', reading: 'きゅうだい', romaji: 'kyuudai', isIrregular: false },
        { num: 10, kanji: '十台', reading: 'じゅうだい', romaji: 'juudai', isIrregular: false }
      ]
    },
    {
      id: 'kai_floor',
      kanji: '〜階',
      reading: 'かい / がい',
      meaning: 'Đếm tầng lầu của tòa nhà',
      usage: 'Biến âm tại 1, 6, 8, 10 (っかい) và 3 (さんがい)',
      isIrregular: true,
      items: [
        { num: 1, kanji: '一階', reading: 'いっかい', romaji: 'ikkai', isIrregular: true },
        { num: 2, kanji: '二階', reading: 'にかい', romaji: 'nikai', isIrregular: false },
        { num: 3, kanji: '三階', reading: 'さんがい', romaji: 'sangai', isIrregular: true },
        { num: 4, kanji: '四階', reading: 'よんかい', romaji: 'yonkai', isIrregular: false },
        { num: 5, kanji: '五階', reading: 'ごかい', romaji: 'gokai', isIrregular: false },
        { num: 6, kanji: '六階', reading: 'ろっかい', romaji: 'rokkai', isIrregular: true },
        { num: 7, kanji: '七階', reading: 'ななかい', romaji: 'nanakai', isIrregular: false },
        { num: 8, kanji: '八階', reading: 'はっかい', romaji: 'hakkai', isIrregular: true },
        { num: 9, kanji: '九階', reading: 'きゅうかい', romaji: 'kyuukai', isIrregular: false },
        { num: 10, kanji: '十階', reading: 'じゅっかい', romaji: 'jukkai', isIrregular: true }
      ]
    },
    {
      id: 'kai_times',
      kanji: '〜回',
      reading: 'かい',
      meaning: 'Đếm số lần, lượt',
      usage: 'Biến âm xúc âm tại 1, 6, 8, 10 (っかい). Lưu ý: 3 lần là さんかい (không đọc がい)',
      isIrregular: true,
      items: [
        { num: 1, kanji: '一回', reading: 'いっかい', romaji: 'ikkai', isIrregular: true },
        { num: 2, kanji: '二回', reading: 'にかい', romaji: 'nikai', isIrregular: false },
        { num: 3, kanji: '三回', reading: 'さんかい', romaji: 'sankai', isIrregular: false },
        { num: 4, kanji: '四回', reading: 'よんかい', romaji: 'yonkai', isIrregular: false },
        { num: 5, kanji: '五回', reading: 'ごかい', romaji: 'gokai', isIrregular: false },
        { num: 6, kanji: '六回', reading: 'ろっかい', romaji: 'rokkai', isIrregular: true },
        { num: 7, kanji: '七回', reading: 'ななかい', romaji: 'nanakai', isIrregular: false },
        { num: 8, kanji: '八回', reading: 'はっかい', romaji: 'hakkai', isIrregular: true },
        { num: 9, kanji: '九回', reading: 'きゅうかい', romaji: 'kyuukai', isIrregular: false },
        { num: 10, kanji: '十回', reading: 'じゅっかい', romaji: 'jukkai', isIrregular: true }
      ]
    },
    {
      id: 'fun',
      kanji: '〜分',
      reading: 'ふん / ぷん',
      meaning: 'Đếm phút (thời gian)',
      usage: 'Biến âm tại 1, 3, 4, 6, 8, 10 (ぷん / っぷん)',
      isIrregular: true,
      items: [
        { num: 1, kanji: '一分', reading: 'いっぷん', romaji: 'ippun', isIrregular: true },
        { num: 2, kanji: '二分', reading: 'にふん', romaji: 'nifun', isIrregular: false },
        { num: 3, kanji: '三分', reading: 'さんぷん', romaji: 'sanpun', isIrregular: true },
        { num: 4, kanji: '四分', reading: 'よんぷん', romaji: 'yonpun', isIrregular: true },
        { num: 5, kanji: '五分', reading: 'ごふん', romaji: 'gofun', isIrregular: false },
        { num: 6, kanji: '六分', reading: 'ろっぷん', romaji: 'roppun', isIrregular: true },
        { num: 7, kanji: '七分', reading: 'ななふん', romaji: 'nanafun', isIrregular: false },
        { num: 8, kanji: '八分', reading: 'はっぷん', romaji: 'happun', isIrregular: true },
        { num: 9, kanji: '九分', reading: 'きゅうふん', romaji: 'kyuufun', isIrregular: false },
        { num: 10, kanji: '十分', reading: 'じゅっぷん', romaji: 'juppun', isIrregular: true }
      ]
    }
  ];

  // 5.1 RENDAKU RULES (Hộp Quy Tắc Biến Âm Rendaku & Đếm Số Lượng Từ)
  const rendakuRules = {
    title: 'Hộp Quy Tắc Biến Âm Rendaku (連濁) & Đếm Số Lượng Từ',
    summary: 'Quy luật biến âm ngữ âm học trong tiếng Nhật khi ghép số đếm với lượng từ (1, 3, 6, 8, 10)',
    rules: [
      {
        id: 'r_h_to_p',
        title: 'Hàng H biến thành P (Bán đục + Xúc âm)',
        counter: '〜本, 〜匹, 〜杯',
        reading: 'ほん, ひき, はい',
        baseSound: 'Hàng H (h-)',
        changes: '1, 6, 8, 10 + [H] → いっ / ろっ / はっ / じゅっ + [P]',
        mnemonic: 'Số 1, 6, 8, 10 biến thành âm ngắt xúc âm [っ] và bán đục [p]',
        condition: 'Đi sau số 1 (いち), 6 (ろく), 8 (はち), 10 (じゅう)',
        phonetics: 'Âm [h] đổi thành [p], đuôi số đếm rút gọn thành xúc âm ngắt [っ]',
        formula: '1, 6, 8, 10 + [H] → いっ / ろっ / はっ / じゅっ + [P]',
        examples: '1本 = いっぽん, 6本 = ろっぽん, 8本 = はっぽん, 10本 = じゅっぽん | 1匹 = いっぴき, 6匹 = ろっぴき, 8匹 = はっぴき, 10匹 = じゅっぴき'
      },
      {
        id: 'r_h_to_b',
        title: 'Hàng H biến thành B (Âm đục Rendaku)',
        counter: '〜本, 〜匹',
        reading: 'ほん, ひき',
        baseSound: 'Hàng H (h-)',
        changes: '3, 何 + [H] → さん / なん + [B]',
        mnemonic: 'Sau số 3 (さん) hoặc 何 (なん), âm [h] hóa đục thành [b]',
        condition: 'Đi sau số 3 (さん) hoặc 何 (なん)',
        phonetics: 'Âm [h] hóa đục thành [b] do hiện tượng đồng hóa âm mũi sau [ん]',
        formula: '3 / なん + [H] → さん / なん + [B]',
        examples: '3本 = さんぼん (san-bon), 3匹 = さんびき (san-biki), 何本 = なんぼん'
      },
      {
        id: 'r_k_to_g',
        title: 'Hàng K biến thành G (Âm đục Rendaku)',
        counter: '〜階',
        reading: 'かい',
        baseSound: 'Hàng K (k-)',
        changes: '3 + かい → さんがい',
        mnemonic: 'Tầng 3 là さんがい (sangai), phân biệt với 3 lần さんかい',
        condition: 'Đi sau số 3 (さん) với lượng từ tầng lầu (〜階)',
        phonetics: 'Âm [k] hóa đục thành [g]',
        formula: '3 + かい → さんがい (sangai)',
        examples: '3階 = さんがい (Lưu ý: 3回 = さんかい không đục để phân biệt số lần và tầng)'
      },
      {
        id: 'r_sokuon',
        title: 'Xúc âm hóa Sokuonka [っ] trước hàng K, S',
        counter: '〜回, 〜冊, 〜軒, 〜通',
        reading: 'かい, さつ, けん, つう',
        baseSound: 'Hàng K, S, T',
        changes: '1, 8, 10 + [K, S] → いっ / はっ / じゅっ + [K, S]',
        mnemonic: '1, 8, 10 ngắt âm thành [っ] trước các phụ âm k, s, t',
        condition: 'Đi sau 1 (いち), 8 (はち), 10 (じゅう) với lượng từ bắt đầu bằng phụ âm [K, S]',
        phonetics: 'Đuôi số đếm biến thành âm ngắt [っ]',
        formula: '1, 8, 10 + [K, S] → いっ / はっ / じゅっ + [K, S]',
        examples: '1回 = いっかい, 8回 = はっかい, 10回 = じゅっかい | 1冊 = いっさつ, 8冊 = はっさつ, 10冊 = じゅっさつ'
      },
      {
        id: 'r_fun_pun',
        title: 'Quy tắc đếm Phút (〜分 fun / pun)',
        counter: '〜分',
        reading: 'ふん / ぷん',
        baseSound: 'Hàng F/P',
        changes: '1,6,8,10 → っぷん | 3,4 → ぷん | 2,5,7,9 → ふん',
        mnemonic: '1, 6, 8, 10 có xúc âm (っぷん); 3, 4 bán đục (ぷん); còn lại đọc ふん',
        condition: '1, 3, 4, 6, 8, 10 đi với 〜分',
        phonetics: '1, 6, 8, 10 đọc là っぷん; 3, 4 đọc là ぷん (sanpun, yonpun); 2, 5, 7, 9 đọc là ふん',
        formula: '1,6,8,10 → っぷん | 3,4 → ぷん | 2,5,7,9 → ふん',
        examples: '1分 (いっぷん), 2分 (にふん), 3分 (さんぷん), 4分 (よんぷん), 5分 (ごふん), 6分 (ろっぷん), 7分 (ななふん), 8分 (はっぷん), 9分 (きゅうふん), 10分 (じゅっぷん)'
      }
    ]
  };

  // 6. CONFUSING PARTICLES (8 Cặp Đối Chiếu Gốc - Bổ Sung Formula & Furigana Readings)
  const particles = [
    {
      id: 'wa_vs_ga',
      pairTitle: 'は (wa) vs が (ga)',
      formula: 'N + は + [Thông tin mới/Vị ngữ] vs N + が + [Hành động/Tính chất cụ thể]',
      p1: { name: 'は', coreRole: 'Nêu chủ đề câu, nhấn mạnh phần vị ngữ phía sau hoặc so sánh đối chiếu.' },
      p2: { name: 'が', coreRole: 'Xác định chủ thể mới, nhấn mạnh chính danh từ đứng trước hoặc đi với tính từ chỉ cảm xúc/năng lực.' },
      keyRule: 'は hướng trọng tâm về sau; が hướng trọng tâm vào từ đứng ngay trước nó.',
      examples: [
        { jp: 'わたしは 田中です。', reading: 'わたしは たなかです。', vi: 'Tôi là Tanaka. (Chủ đề là "tôi")' },
        { jp: 'だれが 来ましたか。— 田中さんが 来ました。', reading: 'だれが きましたか。— たなかさんが きました。', vi: 'Ai đã đến vậy? — Anh Tanaka đã đến. (Xác định chủ thể)' }
      ]
    },
    {
      id: 'ni_vs_de',
      pairTitle: 'に (ni) vs で (de)',
      formula: 'Địa điểm + に + あります/います (Tồn tại) vs Địa điểm + で + Hành động (Hoạt động)',
      p1: { name: 'に', coreRole: 'Chỉ điểm tồn tại tĩnh (có ở đâu) hoặc đích đến của sự di chuyển/gắn kết.' },
      p2: { name: 'で', coreRole: 'Chỉ địa điểm diễn ra hành động động hoặc phương tiện/công cụ thực hiện.' },
      keyRule: 'Tồn tại tĩnh (あります/います/住んでいます) dùng に; Hành động diễn ra (食べます/勉強します) dùng で.',
      examples: [
        { jp: '部屋に 机が あります。', reading: 'へやに つくえが あります。', vi: 'Trong phòng có cái bàn. (Tồn tại tĩnh)' },
        { jp: '部屋で 勉強します。', reading: 'へやで べんきょうします。', vi: 'Tôi học bài ở trong phòng. (Nơi diễn ra hành động)' }
      ]
    },
    {
      id: 'ni_vs_he',
      pairTitle: 'に (ni) vs へ (e)',
      formula: 'Địa điểm + に + 到着する/着く (Đích đến) vs Địa điểm + へ + 行く/向かう (Hướng đi)',
      p1: { name: 'に', coreRole: 'Nhấn mạnh đích đến cụ thể và điểm chạm cuối cùng (và dùng cho cả thời gian/người nhận).' },
      p2: { name: 'へ', coreRole: 'Nhấn mạnh phương hướng di chuyển (đi về phía nào), chỉ đi với động từ di chuyển.' },
      keyRule: 'Với 行きます/来ます/帰ります cả hai thay thế được nhau, nhưng に nhấn đích đến còn へ nhấn hướng đi.',
      examples: [
        { jp: '東京に 着きました。', reading: 'とうきょうに つきました。', vi: 'Đã đến chạm đất Tokyo. (Chỉ dùng に, không dùng へ)' },
        { jp: '週末、海へ 行きます。', reading: 'しゅうまつ、うみへ いきます。', vi: 'Cuối tuần tôi đi về phía biển.' }
      ]
    },
    {
      id: 'wo_vs_de',
      pairTitle: 'を (o) vs で (de) (với địa điểm)',
      formula: 'Địa điểm + を + 渡る/散歩する (Băng qua) vs Địa điểm + で + 行動 (Hoạt động tại chỗ)',
      p1: { name: 'を', coreRole: 'Chỉ điểm xuất phát rời khỏi (出る/降りる) hoặc không gian băng qua/di chuyển dọc theo (歩く/走る/渡る).' },
      p2: { name: 'で', coreRole: 'Chỉ phạm vi giới hạn nơi một hoạt động diễn ra.' },
      keyRule: 'Băng qua/Dạo quanh (公園を散歩する) dùng を; Thực hiện hoạt động tại chỗ (公園で遊ぶ) dùng で.',
      examples: [
        { jp: '公園を 散歩します。', reading: 'こうえんを さんぽします。', vi: 'Đi dạo xuyên qua công viên.' },
        { jp: '公園で 写真を 撮ります。', reading: 'こうえんで しゃしんを とります。', vi: 'Chụp ảnh tại công viên.' }
      ]
    },
    {
      id: 'kara_vs_made',
      pairTitle: 'から (kara) vs まで (made)',
      formula: 'Mốc A + から + Mốc B + まで (Từ điểm A đến điểm B)',
      p1: { name: 'から', coreRole: 'Điểm bắt đầu (từ lúc/từ nơi) hoặc nguyên nhân/nguyên liệu cấu tạo.' },
      p2: { name: 'まで', coreRole: 'Điểm kết thúc hoặc giới hạn tối đa (cho đến lúc/đến nơi).' },
      keyRule: 'から mở đầu mốc thời gian/không gian; まで khép lại mốc giới hạn.',
      examples: [
        { jp: '9時から 5時まで 働きます。', reading: 'くじから ごじまで はたらきます。', vi: 'Làm việc từ 9 giờ đến 5 giờ.' },
        { jp: '駅から 家まで 歩きます。', reading: 'えきから うちまで あるきます。', vi: 'Đi bộ từ nhà ga về đến nhà.' }
      ]
    },
    {
      id: 'to_vs_ya',
      pairTitle: 'と (to) vs や (ya)',
      formula: 'A と B (Liệt kê trọn vẹn đầy đủ) vs A や B (など) (Liệt kê tiêu biểu đại diện)',
      p1: { name: 'と', coreRole: 'Liệt kê đầy đủ toàn bộ các đối tượng (A và B).' },
      p2: { name: 'や', coreRole: 'Liệt kê tiêu biểu đại diện (A, B v.v...), thường đi kèm など.' },
      keyRule: 'Liệt kê hết sạch dùng と; Kể vài thứ đại diện trong nhiều thứ dùng や.',
      examples: [
        { jp: '机の上に 本と ペンが あります。', reading: 'つくえの うえに ほんと ぺんが あります。', vi: 'Trên bàn có sách và bút (chỉ có đúng 2 thứ này).' },
        { jp: '机の上に 本や ペンなどが あります。', reading: 'つくえの うえに ほんや ぺんなどが あります。', vi: 'Trên bàn có những thứ như sách, bút v.v...' }
      ]
    },
    {
      id: 'mo_vs_dake',
      pairTitle: 'も (mo) vs だけ (dake)',
      formula: 'N + も (Cũng/Đến mức...) vs N + だけ (Chỉ có...)',
      p1: { name: 'も', coreRole: 'Bổ sung tương đồng ("cũng") hoặc nhấn mạnh số lượng nhiều ngoài mong đợi.' },
      p2: { name: 'だけ', coreRole: 'Giới hạn phạm vi ("chỉ có"), không mang hàm ý phủ định tiêu cực như しか.' },
      keyRule: 'も cộng thêm đối tượng tương tự; だけ khoanh vùng giới hạn duy nhất.',
      examples: [
        { jp: 'わたしも 日本語を 勉強しています。', reading: 'わたしも にほんごを べんきょうしています。', vi: 'Tôi cũng đang học tiếng Nhật.' },
        { jp: '日曜日だけ 休みます。', reading: 'にちようびだけ やすみます。', vi: 'Tôi chỉ nghỉ vào mỗi Chủ nhật.' }
      ]
    },
    {
      id: 'yori_vs_hodo',
      pairTitle: 'より (yori) vs ほど (hodo)',
      formula: 'A は B より [Tính từ] (A hơn B) vs A は B ほど [Tính từ] ない (A không bằng B)',
      p1: { name: 'より', coreRole: 'Làm chuẩn so sánh hơn (A は B より ... : A hơn B).' },
      p2: { name: 'ほど', coreRole: 'Đi với thể phủ định để chỉ mức độ không bằng (A は B ほど ... ない : A không bằng B).' },
      keyRule: 'Khẳng định so sánh hơn dùng より; Phủ định so sánh kém dùng ほど + ない.',
      examples: [
        { jp: '飛行機は 新幹線より 速いです。', reading: 'ひこうきは しんかんせんより はやいです。', vi: 'Máy bay thì nhanh hơn tàu Shinkansen.' },
        { jp: '今年は 去年ほど 寒くないです。', reading: 'ことしは きょねんほど さむくないです。', vi: 'Năm nay không lạnh bằng năm ngoái.' }
      ]
    }
  ];

  // 7. EXTRA PARTICLES (4 Cặp Trợ Từ Nâng Cao N4 Hay Bẫy)
  const extraParticles = [
    {
      id: 'dake_vs_shika',
      pairTitle: 'だけ (dake) vs しか (shika)',
      formula: 'N + だけ + V (Khẳng định/Trung tính) vs N + しか + V-ない (Phủ định/Tiếc nuối)',
      p1: { name: 'だけ', coreRole: 'Giới hạn phạm vi mang nghĩa khẳng định (chỉ có A, đủ hoặc vừa lòng với A).' },
      p2: { name: 'しか', coreRole: 'Giới hạn tuyệt đối luôn đi với vị ngữ PHỦ ĐỊNH (chỉ có A, cảm giác thiếu thốn, tiếc nuối).' },
      keyRule: 'だけ đi được cả khẳng định lẫn phủ định; しか BẮT BUỘC đi với thể phủ định (しか〜ない).',
      examples: [
        { jp: '1000円だけ あります。', reading: 'せんえんだけ あります。', vi: 'Tôi chỉ có 1000 yên. (Nêu sự thật trung tính, đủ mua đồ nhẹ)' },
        { jp: '1000円しか ありません。', reading: 'せんえんしか ありません。', vi: 'Tôi chỉ còn vỏn vẹn 1000 yên. (Cảm giác thiếu thốn, không đủ tiêu)' }
      ]
    },
    {
      id: 'tameni_vs_youni',
      pairTitle: 'ために (tame ni) vs ように (you ni)',
      formula: 'V-る / Nの + ために (Mục đích chủ ý) vs V-khả năng / V-ない + ように (Trạng thái/khả năng)',
      p1: { name: 'ために', coreRole: 'Chỉ mục đích hành động có ý chí chủ quan (với động từ thể từ điển có ý chí, chủ ngữ 2 vế đồng nhất).' },
      p2: { name: 'ように', coreRole: 'Chỉ mục đích hướng tới trạng thái, khả năng hoặc sự việc tự nhiên (với thể khả năng, thể ない, động từ không ý chí).' },
      keyRule: 'V ý chí + ために (chủ ngữ 2 vế đồng nhất); V khả năng/không ý chí/V-ない + ように.',
      examples: [
        { jp: '家を 買うために、貯金しています。', reading: 'いえを かうために、ちょきんしています。', vi: 'Để mua nhà, tôi đang tiết kiệm tiền. (Ý chí rõ rệt)' },
        { jp: 'よく 見えるように、前に 座ります。', reading: 'よく みえるように、まえに すわります。', vi: 'Để có thể nhìn rõ, tôi ngồi phía trước. (Mục đích hướng tới trạng thái khả năng)' }
      ]
    },
    {
      id: 'kara_vs_noni',
      pairTitle: 'から (kara) vs のに (noni)',
      formula: 'Mệnh đề A + から + Kết quả hợp lý vs Mệnh đề A (thông thường) + のに + Kết quả trái ngược',
      p1: { name: 'から', coreRole: 'Chỉ nguyên nhân lý do chủ quan dẫn đến kết quả hợp lý.' },
      p2: { name: 'のに', coreRole: 'Chỉ sự tương phản, nghịch lý bất ngờ ("mặc dù... thế mà") kèm cảm xúc thất vọng, ngạc nhiên.' },
      keyRule: 'から nêu lý do hiển nhiên/nhờ vả; のに nêu sự trái ngược đi ngược lại kỳ vọng thông thường.',
      examples: [
        { jp: '雨が 降っていますから、傘を 持って行きます。', reading: 'あめが ふっていますから、かさを もっていきます。', vi: 'Vì trời đang mưa nên tôi mang theo ô.' },
        { jp: '薬を 飲んだのに、熱が 下がりません。', reading: 'くすりを のんだのに、ねつが さがりません。', vi: 'Mặc dù đã uống thuốc rồi thế mà cơn sốt vẫn không hạ.' }
      ]
    },
    {
      id: 'tara_vs_temo',
      pairTitle: 'たら (tara) vs ても (temo)',
      formula: 'V-たら / A-かったら (Điều kiện giả định) vs V-ても / A-くても (Nhượng bộ)',
      p1: { name: 'たら', coreRole: 'Giả định điều kiện nếu xảy ra thì làm gì, hoặc sau khi hoàn tất việc A thì làm B.' },
      p2: { name: 'ても', coreRole: 'Nhượng bộ nghịch lý: cho dù có xảy ra việc A thì việc B vẫn tiếp diễn.' },
      keyRule: 'たら: Nếu A thì B (A xảy ra -> B diễn ra); ても: Dù cho có A thì B vẫn thế (A không làm thay đổi B).',
      examples: [
        { jp: '時間が あったら、映画を 見ます。', reading: 'じかんが あったら、えいがを みます。', vi: 'Nếu có thời gian, tôi sẽ xem phim.' },
        { jp: '雨が 降っても、サッカーを します。', reading: 'あめが ふっても、さっかーを します。', vi: 'Dù trời có mưa, chúng tôi vẫn chơi bóng đá.' }
      ]
    }
  ];

  // 7.1 FOCUSED ADVANCED PARTICLES (4 Cặp Trợ Từ Trọng Điểm: de/ni, to/ni, made/madeni, dake/shika)
  const focusedAdvancedParticles = [
    {
      id: 'adv_de_vs_ni',
      pair: 'で vs に',
      pairTitle: 'で (de) vs に (ni) (Địa điểm hành động vs Tồn tại/Đích đến)',
      formula: 'Địa điểm + で + Hành động động vs Địa điểm + に + Tồn tại tĩnh / Đích đến',
      p1: { name: 'で', coreRole: 'Chỉ nơi chốn diễn ra hành động động (ăn, học, chơi) hoặc công cụ, phương tiện thực hiện.' },
      p2: { name: 'に', coreRole: 'Chỉ điểm tồn tại tĩnh (có người/vật), đích đến của sự dịch chuyển hoặc thời điểm cụ thể.' },
      keyRule: 'Hành động động (ăn, đọc, làm việc) dùng で; Trạng thái tĩnh (ở, có, sinh sống) hoặc điểm chạm đích đến dùng に.',
      examples: [
        { jp: '図書館で 本を 読みます。', reading: 'としょかんで ほんを よみます。', vi: 'Tôi đọc sách ở thư viện. (Hành động diễn ra)' },
        { jp: '部屋に 机が あります。', reading: 'へやに つくえが あります。', vi: 'Trong phòng có một cái bàn. (Tồn tại tĩnh)' }
      ]
    },
    {
      id: 'adv_to_vs_ni',
      pair: 'と vs に',
      pairTitle: 'と (to) vs に (ni) (Tương hỗ 2 chiều vs Tác động 1 chiều)',
      formula: 'Đối tác + と + V (Hành động tương hỗ 2 chiều) vs Đối tượng + に + V (Tác động 1 chiều hướng tới)',
      p1: { name: 'と', coreRole: 'Chỉ đối tác cùng tham gia hành động tương hỗ 2 chiều (hai bên bình đẳng: bàn bạc, kết hôn, cãi nhau).' },
      p2: { name: 'に', coreRole: 'Chỉ đối tượng tiếp nhận tác động 1 chiều (hướng về phía đối phương: chào hỏi, diện kiến, xin ý kiến).' },
      keyRule: 'Hành động 2 chiều tương tác (cùng bàn bạc, cùng kết hôn) dùng と; Tác động 1 chiều (chào hỏi, gặp gỡ kính trọng) dùng に.',
      examples: [
        { jp: '友達と 相談します。', reading: 'ともだちと そうだんします。', vi: 'Tôi cùng thảo luận với bạn bè. (Tương hỗ 2 bên)' },
        { jp: '先生に 相談します。', reading: 'せんせいに そうだんします。', vi: 'Tôi xin ý kiến tham vấn từ thầy giáo. (1 chiều hướng về thầy)' }
      ]
    },
    {
      id: 'adv_made_vs_madeni',
      pair: 'まで vs までに',
      pairTitle: 'まで (made) vs までに (madeni) (Liên tục vs Hạn chót Deadline)',
      formula: 'Thời điểm + まで + V liên tục (Kéo dài) vs Thời điểm + までに + V dứt điểm (Hạn chót)',
      p1: { name: 'まで', coreRole: 'Chỉ sự việc hoặc hành động diễn ra liên tục, kéo dài không gián đoạn cho đến mốc thời gian.' },
      p2: { name: 'までに', coreRole: 'Chỉ hạn chót (deadline), hành động dứt điểm phải hoàn thành trước hoặc muộn nhất tại thời điểm đó.' },
      keyRule: 'Hành động kéo dài liên tục (làm việc, ngủ, đợi) dùng まで; Hành động dứt điểm (nộp bài, trả tiền, hoàn tất) dùng までに.',
      examples: [
        { jp: '5時まで 勉強します。', reading: 'ごじまで べんきょうします。', vi: 'Tôi học bài liên tục cho đến 5 giờ.' },
        { jp: '5時までに レポートを 出します。', reading: 'ごじまでに れぽーとを だします。', vi: 'Tôi phải nộp báo cáo trước hoặc chậm nhất là 5 giờ.' }
      ]
    },
    {
      id: 'adv_dake_vs_shika',
      pair: 'だけ vs しか',
      pairTitle: 'だけ (dake) vs しか (shika) (Giới hạn trung tính vs Phủ định tiếc nuối)',
      formula: 'N + だけ + V (Khẳng định/Trung tính) vs N + しか + V-ない (Phủ định/Tiếc nuối)',
      p1: { name: 'だけ', coreRole: 'Giới hạn phạm vi trung tính, đủ hoặc hài lòng với số lượng hiện có, đi được cả khẳng định lẫn phủ định.' },
      p2: { name: 'しか', coreRole: 'Giới hạn tuyệt đối luôn đi với vị ngữ PHỦ ĐỊNH, mang hàm ý thiếu thốn, than phiền, không đủ như mong đợi.' },
      keyRule: 'だけ đi với khẳng định/trung tính; しか BẮT BUỘC đi kèm vị ngữ phủ định (しか〜ない).',
      examples: [
        { jp: '1000円だけ あります。', reading: 'せんえんだけ あります。', vi: 'Tôi chỉ có 1000 yên. (Trung tính, đủ mua đồ ăn nhẹ)' },
        { jp: '1000円しか ありません。', reading: 'せんえんしか ありません。', vi: 'Tôi chỉ còn vỏn vẹn 1000 yên. (Thiếu thốn, không đủ tiêu)' }
      ]
    }
  ];

  // 8. TIME ADVERBS MATRIX (Bảng Ma Trận Thời Gian, Phó Từ & Nghi Vấn Từ)
  const timeAdverbsMatrix = {
    timeTable: [
      {
        rowTitle: 'Ngày (日)',
        twoAgo: { kanji: '一昨日', reading: 'おととい', vi: 'Hôm kia' },
        oneAgo: { kanji: '昨日', reading: 'きのう', vi: 'Hôm qua' },
        current: { kanji: '今日', reading: 'きょう', vi: 'Hôm nay' },
        oneAhead: { kanji: '明日', reading: 'あした', vi: 'Ngày mai' },
        twoAhead: { kanji: '明後日', reading: 'あさって', vi: 'Ngày kia' }
      },
      {
        rowTitle: 'Tuần (週)',
        twoAgo: { kanji: '先々週', reading: 'せんせんしゅう', vi: 'Tuần trước nữa' },
        oneAgo: { kanji: '先週', reading: 'せんしゅう', vi: 'Tuần trước' },
        current: { kanji: '今週', reading: 'こんしゅう', vi: 'Tuần này' },
        oneAhead: { kanji: '来週', reading: 'らいしゅう', vi: 'Tuần sau' },
        twoAhead: { kanji: '再来週', reading: 'さらいしゅう', vi: 'Tuần sau nữa' }
      },
      {
        rowTitle: 'Tháng (月)',
        twoAgo: { kanji: '先々月', reading: 'せんせんげつ', vi: 'Tháng trước nữa' },
        oneAgo: { kanji: '先月', reading: 'せんげつ', vi: 'Tháng trước' },
        current: { kanji: '今月', reading: 'こんげつ', vi: 'Tháng này' },
        oneAhead: { kanji: '来月', reading: 'らいげつ', vi: 'Tháng sau' },
        twoAhead: { kanji: '再来月', reading: 'さらいげつ', vi: 'Tháng sau nữa' }
      },
      {
        rowTitle: 'Năm (年)',
        twoAgo: { kanji: '一昨年', reading: 'おととし', vi: 'Năm kia' },
        oneAgo: { kanji: '去年', reading: 'きょねん', vi: 'Năm ngoái' },
        current: { kanji: '今年', reading: 'ことし', vi: 'Năm nay' },
        oneAhead: { kanji: '来年', reading: 'らいねん', vi: 'Năm sau' },
        twoAhead: { kanji: '再来年', reading: 'さらいねん', vi: 'Năm sau nữa' }
      },
      {
        rowTitle: 'Buổi sáng (朝)',
        twoAgo: { kanji: '一昨日の朝', reading: 'おとといのあさ', vi: 'Sáng hôm kia' },
        oneAgo: { kanji: '昨日の朝', reading: 'きのうのあさ', vi: 'Sáng hôm qua' },
        current: { kanji: '今朝', reading: 'けさ', vi: 'Sáng nay' },
        oneAhead: { kanji: '明日の朝', reading: 'あしたのあさ', vi: 'Sáng mai' },
        twoAhead: { kanji: '明後日の朝', reading: 'あさってのあさ', vi: 'Sáng ngày kia' }
      },
      {
        rowTitle: 'Buổi tối (晩/夜)',
        twoAgo: { kanji: '一昨日の晩', reading: 'おとといのばん', vi: 'Tối hôm kia' },
        oneAgo: { kanji: '昨夜/昨晩', reading: 'ゆうべ / さくばん', vi: 'Tối hôm qua' },
        current: { kanji: '今晩/今夜', reading: 'こんばん / こんや', vi: 'Tối nay' },
        oneAhead: { kanji: '明日の晩', reading: 'あしたのばん', vi: 'Tối mai' },
        twoAhead: { kanji: '明後日の晩', reading: 'あさってのばん', vi: 'Tối ngày kia' }
      }
    ],
    frequencyAdverbs: [
      { jp: 'いつも', reading: 'いつも', meaning: 'Luôn luôn (100%)', usage: 'Đi với thể khẳng định', exampleJp: '朝 いつも コーヒーを 飲みます。', exampleVi: 'Buổi sáng tôi luôn luôn uống cà phê.' },
      { jp: 'よく', reading: 'よく', meaning: 'Thường xuyên (~80%)', usage: 'Chỉ thói quen thường làm', exampleJp: '休みの日に よく 本を 読みます。', exampleVi: 'Vào ngày nghỉ tôi thường đọc sách.' },
      { jp: 'ときどき', reading: 'ときどき', meaning: 'Thỉnh thoảng (~50%)', usage: 'Hành động lặp lại ngắt quãng', exampleJp: 'ときどき 日本料理を 食べます。', exampleVi: 'Thỉnh thoảng tôi ăn món ăn Nhật.' },
      { jp: 'あまり〜ない', reading: 'あまり〜ない', meaning: 'Ít khi, không... lắm (~20%)', usage: 'BẮT BUỘC đi kèm thể phủ định', exampleJp: 'お酒は あまり 飲みません。', exampleVi: 'Tôi ít khi uống rượu.' },
      { jp: 'ぜんぜん〜ない', reading: 'ぜんぜん〜ない', meaning: 'Hoàn toàn không (0%)', usage: 'BẮT BUỘC đi kèm thể phủ định', exampleJp: 'フランス語が ぜんぜん 分かりません。', exampleVi: 'Tôi hoàn toàn không hiểu tiếng Pháp.' },
      { jp: 'とても', reading: 'とても', meaning: 'Rất', usage: 'Bổ nghĩa mức độ cao cho tính từ/động từ', exampleJp: 'この 料理は とても おいしいです。', exampleVi: 'Món ăn này rất ngon.' },
      { jp: 'すこし', reading: 'すこし', meaning: 'Một chút, một ít', usage: 'Bổ nghĩa mức độ nhỏ hoặc số lượng', exampleJp: '日本語が すこし 話せます。', exampleVi: 'Tôi có thể nói được một chút tiếng Nhật.' },
      { jp: 'ちょうど', reading: 'ちょうど', meaning: 'Vừa đúng, đúng lúc', usage: 'Chỉ thời gian hoặc kích thước vừa vặn', exampleJp: '今 ちょうど 12時です。', exampleVi: 'Bây giờ vừa đúng 12 giờ.' },
      { jp: 'もう', reading: 'もう', meaning: 'Đã, rồi', usage: 'Hành động đã hoàn tất trong quá khứ', exampleJp: 'もう 宿題を 終わりました。', exampleVi: 'Tôi đã hoàn thành xong bài tập về nhà rồi.' },
      { jp: 'まだ', reading: 'まだ', meaning: 'Vẫn còn / Vẫn chưa', usage: 'Đi với khẳng định (vẫn đang) hoặc phủ định (vẫn chưa)', exampleJp: 'まだ 昼ご飯を 食べていません。', exampleVi: 'Tôi vẫn chưa ăn cơm trưa.' }
    ],
    questionWords: [
      { jp: 'なに / なん', reading: 'なに / なん', meaning: 'Cái gì (What)', exampleJp: 'これは 何ですか。', exampleVi: 'Cái này là cái gì thế?' },
      { jp: 'だれ / どなた', reading: 'だれ / どなた', meaning: 'Ai (Who, どなた là kính ngữ)', exampleJp: 'あの方は どなたですか。', exampleVi: 'Vị kia là ai thế ạ?' },
      { jp: 'どこ / どちら', reading: 'どこ / どちら', meaning: 'Ở đâu, hướng nào (Where, どちら là lịch sự)', exampleJp: 'お手洗いは どこですか。', exampleVi: 'Nhà vệ sinh ở đâu ạ?' },
      { jp: 'いつ', reading: 'いつ', meaning: 'Khi nào, bao giờ (When)', exampleJp: '日本へ いつ 行きますか。', exampleVi: 'Khi nào bạn sẽ đi Nhật Bản?' },
      { jp: 'どうして / なぜ', reading: 'どうして / なぜ', meaning: 'Tại sao, vì sao (Why)', exampleJp: 'どうして 昨日 学校を 休みましたか。', exampleVi: 'Tại sao hôm qua bạn nghỉ học?' },
      { jp: 'どうやって', reading: 'どうやって', meaning: 'Bằng cách nào, làm sao (How)', exampleJp: '大学まで どうやって 行きますか。', exampleVi: 'Đi đến trường đại học bằng cách nào?' },
      { jp: 'どのくらい / どれくらい', reading: 'どのくらい / どれくらい', meaning: 'Bao lâu / Khoảng bao nhiêu (How long / How much)', exampleJp: '日本語を どのくらい 勉強しましたか。', exampleVi: 'Bạn đã học tiếng Nhật được bao lâu rồi?' },
      { jp: 'いくつ / いくら', reading: 'いくつ / いくら', meaning: 'Mấy cái (tuổi) / Bao nhiêu tiền (How many / How much money)', exampleJp: 'この リンゴは いくらですか。', exampleVi: 'Quả táo này giá bao nhiêu tiền ạ?' }
    ]
  };

  // 9. KEIGO TABLE (12 Động Từ Kính Ngữ Cốt Lõi N4)
  const keigoTable = [
    {
      id: 'k01',
      dict: '行く / 来る',
      meaning: 'Đi / Đến',
      sonkeigo: 'いらっしゃる / おいでになる',
      kenjougo: '参る (まいる)',
      teineigo: '行きます / 来ます',
      exampleJp: '先生は 明日 研究室に いらっしゃいます。',
      exampleVi: 'Thầy giáo ngày mai sẽ có mặt ở phòng nghiên cứu.'
    },
    {
      id: 'k02',
      dict: 'いる',
      meaning: 'Ở, có mặt (người)',
      sonkeigo: 'いらっしゃる / おいでになる',
      kenjougo: 'おる',
      teineigo: 'います',
      exampleJp: '社長は 今 会議室に いらっしゃいます。',
      exampleVi: 'Giám đốc hiện đang ở phòng họp.'
    },
    {
      id: 'k03',
      dict: '食べる / 飲む',
      meaning: 'Ăn / Uống',
      sonkeigo: '召し上がる (めしあがる)',
      kenjougo: 'いただく',
      teineigo: '食べます / 飲みます',
      exampleJp: 'どうぞ お茶を 召し上がってください。',
      exampleVi: 'Xin mời thầy/quý khách dùng trà ạ.'
    },
    {
      id: 'k04',
      dict: '見る',
      meaning: 'Xem, nhìn',
      sonkeigo: 'ご覧になる (ごらんになる)',
      kenjougo: '拝見する (はいけんする)',
      teineigo: '見ます',
      exampleJp: 'その 資料を もう ご覧になりましたか。',
      exampleVi: 'Quý khách đã xem tài liệu đó chưa ạ?'
    },
    {
      id: 'k05',
      dict: '言う',
      meaning: 'Nói',
      sonkeigo: 'おっしゃる',
      kenjougo: '申す (もうす) / 申し上げる',
      teineigo: '言います',
      exampleJp: '田中と 申します。よろしく お願いします。',
      exampleVi: 'Tôi tên là Tanaka. Rất mong được giúp đỡ.'
    },
    {
      id: 'k06',
      dict: 'する',
      meaning: 'Làm',
      sonkeigo: 'なさる',
      kenjougo: 'いたす',
      teineigo: 'します',
      exampleJp: '週末は 何を なさいますか。',
      exampleVi: 'Cuối tuần quý ngài sẽ làm gì ạ?'
    },
    {
      id: 'k07',
      dict: '知る',
      meaning: 'Biết',
      sonkeigo: 'ご存じです (ごぞんじです)',
      kenjougo: '存じております (ぞんじております)',
      teineigo: '知っています',
      exampleJp: 'あの 先生を ご存じですか。',
      exampleVi: 'Quý vị có biết vị giáo viên đó không ạ?'
    },
    {
      id: 'k08',
      dict: '聞く / 尋ねる',
      meaning: 'Nghe / Hỏi / Thăm',
      sonkeigo: 'お聞きになる (おききになる)',
      kenjougo: '伺う (うかがう) / 拝聴する',
      teineigo: '聞きます',
      exampleJp: '明日 先生の お宅へ 伺います。',
      exampleVi: 'Ngày mai em xin phép đến thăm nhà thầy ạ.'
    },
    {
      id: 'k09',
      dict: 'あげる',
      meaning: 'Tặng, cho người khác',
      sonkeigo: '—',
      kenjougo: '差し上げる (さしあげる)',
      teineigo: 'あげます',
      exampleJp: '先生に お土産を 差し上げました。',
      exampleVi: 'Em đã kính tặng thầy quà lưu niệm.'
    },
    {
      id: 'k10',
      dict: 'もらう',
      meaning: 'Nhận được',
      sonkeigo: '—',
      kenjougo: 'いただく',
      teineigo: 'もらいます',
      exampleJp: '社長から 記念品を いただきました。',
      exampleVi: 'Tôi đã vinh dự nhận được quà lưu niệm từ giám đốc.'
    },
    {
      id: 'k11',
      dict: 'くれる',
      meaning: 'Ai cho tôi / người phía tôi',
      sonkeigo: 'くださる',
      kenjougo: '—',
      teineigo: 'くれます',
      exampleJp: '先生が 本を 貸してくださいました。',
      exampleVi: 'Thầy giáo đã ưu ái cho em mượn cuốn sách.'
    },
    {
      id: 'k12',
      dict: '会う',
      meaning: 'Gặp gỡ',
      sonkeigo: 'お会いになる (おあいになる)',
      kenjougo: 'お目にかかる (おめにかかる)',
      teineigo: '会います',
      exampleJp: '昨日 社長に お目にかかりました。',
      exampleVi: 'Hôm qua tôi đã có vinh dự được diện kiến giám đốc.'
    }
  ];

  // 10. TRANSITIVITY PAIRS (12 Cặp Tự Động Từ vs Tha Động Từ Kinh Điển N4)
  const transitivityPairs = [
    {
      id: 't01',
      meaning: 'Mở (cửa...)',
      intransitive: { jp: '開く', reading: 'あく', particle: 'が', example: 'ドアが 開きます。' },
      transitive: { jp: '開ける', reading: 'あける', particle: 'を', example: 'ドアを 開けます。' },
      ruleHint: '〜く (tự động từ, G1) vs 〜ける (tha động từ, G2)'
    },
    {
      id: 't02',
      meaning: 'Đóng (cửa...)',
      intransitive: { jp: '閉まる', reading: 'しまる', particle: 'が', example: '窓が 閉まります。' },
      transitive: { jp: '閉める', reading: 'しめる', particle: 'を', example: '窓を 閉めます。' },
      ruleHint: '〜ある (tự động từ, G1) vs 〜える (tha động từ, G2)'
    },
    {
      id: 't03',
      meaning: 'Bật / Sáng (đèn, điện)',
      intransitive: { jp: 'つく', reading: 'つく', particle: 'が', example: '電気が つきます。' },
      transitive: { jp: 'つける', reading: 'つける', particle: 'を', example: '電気を つけます。' },
      ruleHint: '〜く (tự động từ, G1) vs 〜ける (tha động từ, G2)'
    },
    {
      id: 't04',
      meaning: 'Tắt / Biến mất (lửa, điện)',
      intransitive: { jp: '消える', reading: 'きえる', particle: 'が', example: '火が 消えます。' },
      transitive: { jp: '消す', reading: 'けす', particle: 'を', example: '火を 消します。' },
      ruleHint: '〜える (tự động từ, G2) vs 〜す (tha động từ, G1)'
    },
    {
      id: 't05',
      meaning: 'Vào / Cho vào, đút vào',
      intransitive: { jp: '入る', reading: 'はいる', particle: 'が', example: '猫が 箱に 入ります。' },
      transitive: { jp: '入れる', reading: 'いれる', particle: 'を', example: '財布を かばんに 入れます。' },
      ruleHint: '〜る (tự động từ, G1) vs 〜れる (tha động từ, G2)'
    },
    {
      id: 't06',
      meaning: 'Ra / Lấy ra, nộp',
      intransitive: { jp: '出る', reading: 'でる', particle: 'が', example: '涙が 出ます。' },
      transitive: { jp: '出す', reading: 'だす', particle: 'を', example: '宿題を 出します。' },
      ruleHint: '〜る (tự động từ, G2) vs 〜す (tha động từ, G1)'
    },
    {
      id: 't07',
      meaning: 'Bắt đầu',
      intransitive: { jp: '始まる', reading: 'はじまる', particle: 'が', example: '授業が 始まります。' },
      transitive: { jp: '始める', reading: 'はじめる', particle: 'を', example: '授業を 始めます。' },
      ruleHint: '〜ある (tự động từ, G1) vs 〜える (tha động từ, G2)'
    },
    {
      id: 't08',
      meaning: 'Kết thúc, hoàn tất',
      intransitive: { jp: '終わる', reading: 'おわる', particle: 'が', example: '仕事が 終わります。' },
      transitive: { jp: '終える', reading: 'おえる', particle: 'を', example: '仕事を 終えます。' },
      ruleHint: '〜ある (tự động từ, G1) vs 〜える (tha động từ, G2)'
    },
    {
      id: 't09',
      meaning: 'Dừng lại / Làm dừng xe',
      intransitive: { jp: '止まる', reading: 'とまる', particle: 'が', example: '車が 止まります。' },
      transitive: { jp: '止める', reading: 'とめる', particle: 'を', example: '車を 止めます。' },
      ruleHint: '〜ある (tự động từ, G1) vs 〜える (tha động từ, G2)'
    },
    {
      id: 't10',
      meaning: 'Hỏng / Làm hỏng, phá vỡ',
      intransitive: { jp: '壊れる', reading: 'こわれる', particle: 'が', example: '時計が 壊れました。' },
      transitive: { jp: '壊す', reading: 'こわす', particle: 'を', example: '時計を 壊しました。' },
      ruleHint: '〜れる (tự động từ, G2) vs 〜す (tha động từ, G1)'
    },
    {
      id: 't11',
      meaning: 'Bẩn / Làm vấy bẩn',
      intransitive: { jp: '汚れる', reading: 'よごれる', particle: 'が', example: '服が 汚れました。' },
      transitive: { jp: '汚す', reading: 'よごす', particle: 'を', example: '服を 汚しました。' },
      ruleHint: '〜れる (tự động từ, G2) vs 〜す (tha động từ, G1)'
    },
    {
      id: 't12',
      meaning: 'Rơi / Đánh rơi',
      intransitive: { jp: '落ちる', reading: 'おちる', particle: 'が', example: '財布が 落ちました。' },
      transitive: { jp: '落とす', reading: 'おとす', particle: 'を', example: '財布を 落としました。' },
      ruleHint: '〜る (tự động từ, G2) vs 〜す (tha động từ, G1)'
    }
  ];

  // 11. VERB BANK (42 Động Từ Cốt Lõi N5-N4)
  const verbBank = [
    { id: 'v01', kanji: '書く', reading: 'かく', group: 1, meaning: 'Viết', jlpt: 'N5', exampleJp: '手紙を 書きます。', exampleVi: 'Tôi viết thư.' },
    { id: 'v02', kanji: '聞く', reading: 'きく', group: 1, meaning: 'Nghe, hỏi', jlpt: 'N5', exampleJp: '音楽を 聞きます。', exampleVi: 'Tôi nghe nhạc.' },
    { id: 'v03', kanji: '行く', reading: 'いく', group: 1, meaning: 'Đi (Bất quy tắc âm て/た: いって/いった)', jlpt: 'N5', exampleJp: 'スーパーへ 行きます。', exampleVi: 'Tôi đi đến siêu thị.' },
    { id: 'v04', kanji: '泳ぐ', reading: 'およぐ', group: 1, meaning: 'Bơi', jlpt: 'N5', exampleJp: 'プールで 泳ぎます。', exampleVi: 'Tôi bơi ở hồ bơi.' },
    { id: 'v05', kanji: '急ぐ', reading: 'いそぐ', group: 1, meaning: 'Vội vàng, gấp gáp', jlpt: 'N5', exampleJp: '急いで 駅へ 行きます。', exampleVi: 'Tôi vội vàng đi tới nhà ga.' },
    { id: 'v06', kanji: '話す', reading: 'はなす', group: 1, meaning: 'Nói chuyện', jlpt: 'N5', exampleJp: '友達と 日本語で 話します。', exampleVi: 'Tôi nói chuyện bằng tiếng Nhật với bạn.' },
    { id: 'v07', kanji: '貸す', reading: 'かす', group: 1, meaning: 'Cho mượn', jlpt: 'N5', exampleJp: '友達に ペンを 貸します。', exampleVi: 'Tôi cho bạn mượn bút.' },
    { id: 'v08', kanji: '待つ', reading: 'まつ', group: 1, meaning: 'Chờ đợi', jlpt: 'N5', exampleJp: 'バスを 待ちます。', exampleVi: 'Tôi đứng chờ xe buýt.' },
    { id: 'v09', kanji: '持つ', reading: 'もつ', group: 1, meaning: 'Cầm, mang, có', jlpt: 'N5', exampleJp: '傘を 持っています。', exampleVi: 'Tôi đang có mang theo ô.' },
    { id: 'v10', kanji: '死ぬ', reading: 'しぬ', group: 1, meaning: 'Chết, mất', jlpt: 'N5', exampleJp: '魚が 死にました。', exampleVi: 'Con cá đã chết.' },
    { id: 'v11', kanji: '遊ぶ', reading: 'あそぶ', group: 1, meaning: 'Chơi, giải trí', jlpt: 'N5', exampleJp: '公園で 友達と 遊びます。', exampleVi: 'Tôi chơi cùng bạn bè ở công viên.' },
    { id: 'v12', kanji: '呼ぶ', reading: 'よぶ', group: 1, meaning: 'Gọi, mời', jlpt: 'N5', exampleJp: 'タクシーを 呼びます。', exampleVi: 'Tôi gọi một chiếc taxi.' },
    { id: 'v13', kanji: '読む', tally: 1, kanjiText: '読む', reading: 'よむ', group: 1, meaning: 'Đọc', jlpt: 'N5', exampleJp: '新聞を 読みます。', exampleVi: 'Tôi đọc báo.' },
    { id: 'v14', kanji: '飲む', reading: 'のむ', group: 1, meaning: 'Uống', jlpt: 'N5', exampleJp: 'お茶を 飲みます。', exampleVi: 'Tôi uống trà.' },
    { id: 'v15', kanji: '帰る', reading: 'かえる', group: 1, meaning: 'Về (nhà)', jlpt: 'N5', exampleJp: 'うちへ 帰ります。', exampleVi: 'Tôi trở về nhà.' },
    { id: 'v16', kanji: '作る', reading: 'つくる', group: 1, meaning: 'Làm, chế tạo', jlpt: 'N5', exampleJp: '料理を 作ります。', exampleVi: 'Tôi nấu ăn.' },
    { id: 'v17', kanji: '買う', reading: 'かう', group: 1, meaning: 'Mua', jlpt: 'N5', exampleJp: 'パンを 買います。', exampleVi: 'Tôi mua bánh mì.' },
    { id: 'v18', kanji: '会う', reading: 'あう', group: 1, meaning: 'Gặp gỡ', jlpt: 'N5', exampleJp: '駅で 友達に 会います。', exampleVi: 'Tôi gặp bạn ở nhà ga.' },
    { id: 'v19', kanji: '食べる', reading: 'たべる', group: 2, meaning: 'Ăn', jlpt: 'N5', exampleJp: 'ご飯を 食べます。', exampleVi: 'Tôi ăn cơm.' },
    { id: 'v20', kanji: '見る', reading: 'みる', group: 2, meaning: 'Xem, nhìn', jlpt: 'N5', exampleJp: '映画を 見ます。', exampleVi: 'Tôi xem phim.' },
    { id: 'v21', kanji: '起きる', reading: 'おきる', group: 2, meaning: 'Thức dậy', jlpt: 'N5', exampleJp: '朝 6時に 起きます。', exampleVi: 'Tôi thức dậy lúc 6 giờ sáng.' },
    { id: 'v22', kanji: '寝る', reading: 'ねる', group: 2, meaning: 'Ngủ', jlpt: 'N5', exampleJp: '夜 11時に 寝ます。', exampleVi: 'Tôi đi ngủ lúc 11 giờ đêm.' },
    { id: 'v23', kanji: '教える', reading: 'おしえる', group: 2, meaning: 'Dạy, chỉ bảo', jlpt: 'N5', exampleJp: '英語を 教えます。', exampleVi: 'Tôi dạy tiếng Anh.' },
    { id: 'v24', kanji: '来る', reading: 'くる', group: 3, meaning: 'Đến', jlpt: 'N5', exampleJp: '日本へ 来ました。', exampleVi: 'Tôi đã đến Nhật Bản.' },
    { id: 'v25', kanji: 'する', reading: 'する', group: 3, meaning: 'Làm', jlpt: 'N5', exampleJp: '宿題を します。', exampleVi: 'Tôi làm bài tập về nhà.' },
    { id: 'v26', kanji: '勉強する', reading: 'べんきょうする', group: 3, meaning: 'Học tập', jlpt: 'N5', exampleJp: '毎日 勉強します。', exampleVi: 'Tôi học tập mỗi ngày.' },
    // Mở rộng v27..v42 (Các động từ cốt lõi N5-N4)
    { id: 'v27', kanji: '走る', reading: 'はしる', group: 1, meaning: 'Chạy (Động từ nhóm 1 đuôi る)', jlpt: 'N5', exampleJp: '毎朝 公園を 走ります。', exampleVi: 'Mỗi sáng tôi chạy bộ quanh công viên.' },
    { id: 'v28', kanji: '歩く', reading: 'あるく', group: 1, meaning: 'Đi bộ', jlpt: 'N5', exampleJp: '駅から うちまで 歩きます。', exampleVi: 'Tôi đi bộ từ nhà ga về nhà.' },
    { id: 'v29', kanji: '送る', reading: 'おくる', group: 1, meaning: 'Gửi (thư, hàng)', jlpt: 'N5', exampleJp: '荷物を 国へ 送ります。', exampleVi: 'Tôi gửi bưu kiện về nước.' },
    { id: 'v30', kanji: '使う', reading: 'つかう', group: 1, meaning: 'Sử dụng, dùng', jlpt: 'N5', exampleJp: 'パソコンを 使います。', exampleVi: 'Tôi sử dụng máy tính.' },
    { id: 'v31', kanji: '洗う', reading: 'あらう', group: 1, meaning: 'Rửa, giặt', jlpt: 'N5', exampleJp: 'ご飯の前に 手を 洗います。', exampleVi: 'Tôi rửa tay trước bữa ăn.' },
    { id: 'v32', kanji: '歌う', reading: 'うたう', group: 1, meaning: 'Hát', jlpt: 'N5', exampleJp: 'カラオケで 歌を 歌います。', exampleVi: 'Tôi hát bài hát ở quán karaoke.' },
    { id: 'v33', kanji: '弾く', reading: 'ひく', group: 1, meaning: 'Chơi nhạc cụ (đàn, piano)', jlpt: 'N5', exampleJp: 'ピアノを 弾きます。', exampleVi: 'Tôi chơi đàn piano.' },
    { id: 'v34', kanji: '立つ', reading: 'たつ', group: 1, meaning: 'Đứng', jlpt: 'N5', exampleJp: 'ドアの 前に 立ちます。', exampleVi: 'Tôi đứng trước cửa.' },
    { id: 'v35', kanji: '座る', reading: 'すわる', group: 1, meaning: 'Ngồi', jlpt: 'N5', exampleJp: 'いすに 座ってください。', exampleVi: 'Xin mời ngồi vào ghế.' },
    { id: 'v36', kanji: '借りる', reading: 'かりる', group: 2, meaning: 'Mượn, vay', jlpt: 'N5', exampleJp: '図書館で 本を 借ります。', exampleVi: 'Tôi mượn sách ở thư viện.' },
    { id: 'v37', kanji: '開ける', reading: 'あける', group: 2, meaning: 'Mở (cửa sổ, hộp)', jlpt: 'N5', exampleJp: '窓を 開けます。', exampleVi: 'Tôi mở cửa sổ.' },
    { id: 'v38', kanji: '閉める', reading: 'しめる', group: 2, meaning: 'Đóng (cửa)', jlpt: 'N5', exampleJp: 'ドアを 閉めます。', exampleVi: 'Tôi đóng cửa lại.' },
    { id: 'v39', kanji: '忘れる', reading: 'わすれる', group: 2, meaning: 'Quên', jlpt: 'N5', exampleJp: '傘を 電車に 忘れました。', exampleVi: 'Tôi để quên ô trên tàu điện.' },
    { id: 'v40', kanji: '覚える', reading: 'おぼえる', group: 2, meaning: 'Ghi nhớ, nhớ thuộc', jlpt: 'N5', exampleJp: '新しい 漢字を 覚えます。', exampleVi: 'Tôi học thuộc chữ Hán mới.' },
    { id: 'v41', kanji: '散歩する', reading: 'さんぽする', group: 3, meaning: 'Đi dạo', jlpt: 'N5', exampleJp: '夕方 犬と 散歩します。', exampleVi: 'Buổi chiều tôi đi dạo cùng cún cưng.' },
    { id: 'v42', kanji: '結婚する', reading: 'けっこんする', group: 3, meaning: 'Kết hôn', jlpt: 'N4', exampleJp: '来年 彼女と 結婚します。', exampleVi: 'Sang năm tôi sẽ kết hôn với cô ấy.' }
  ];

  // 12. ADJECTIVE BANK (16 Tính Từ Cốt Lõi: 8 い + 8 な)
  const adjectiveBank = [
    { id: 'a01', kanji: '高い', reading: 'たかい', adjType: 'i', meaning: 'Cao, đắt', jlpt: 'N5', exampleJp: '富士山は とても 高いです。', exampleVi: 'Núi Phú Sĩ rất cao.' },
    { id: 'a02', kanji: '安い', reading: 'やすい', adjType: 'i', meaning: 'Rẻ', jlpt: 'N5', exampleJp: 'この りんごは 安いです。', exampleVi: 'Quả táo này rẻ.' },
    { id: 'a03', kanji: '大きい', reading: 'おおきい', adjType: 'i', meaning: 'To, lớn', jlpt: 'N5', exampleJp: '大きい 部屋が 好きです。', exampleVi: 'Tôi thích căn phòng rộng lớn.' },
    { id: 'a04', kanji: 'いい', reading: 'いい', adjType: 'i', meaning: 'Tốt (Bất quy tắc: よくない / よかった)', jlpt: 'N5', exampleJp: '天気が いいです。', exampleVi: 'Thời tiết đẹp/tốt.' },
    { id: 'a05', kanji: '静か', reading: 'しずか', adjType: 'na', meaning: 'Yên tĩnh', jlpt: 'N5', exampleJp: '図書館は 静かです。', exampleVi: 'Thư viện rất yên tĩnh.' },
    { id: 'a06', kanji: '元気', reading: 'げんき', adjType: 'na', meaning: 'Khỏe mạnh', jlpt: 'N5', exampleJp: 'お元気ですか。', exampleVi: 'Bạn có khỏe không?' },
    { id: 'a07', kanji: '便利', reading: 'べんり', adjType: 'na', meaning: 'Tiện lợi', jlpt: 'N5', exampleJp: 'スマホは とても 便利です。', exampleVi: 'Điện thoại thông minh rất tiện lợi.' },
    { id: 'a08', kanji: 'きれい', reading: 'きれい', adjType: 'na', meaning: 'Đẹp, sạch sẽ', jlpt: 'N5', exampleJp: '桜の 花が きれいです。', exampleVi: 'Hoa anh đào thật đẹp.' },
    // Mở rộng a09..a16 (8 tính từ N5-N4 phong phú)
    { id: 'a09', kanji: '新しい', reading: 'あたらしい', adjType: 'i', meaning: 'Mới', jlpt: 'N5', exampleJp: '新しい 車を 買いました。', exampleVi: 'Tôi đã mua một chiếc xe ô tô mới.' },
    { id: 'a10', kanji: '古い', reading: 'ふるい', adjType: 'i', meaning: 'Cũ', jlpt: 'N5', exampleJp: 'この 時計は 古いです。', exampleVi: 'Chiếc đồng hồ này đã cũ.' },
    { id: 'a11', kanji: '難しい', reading: 'むずかしい', adjType: 'i', meaning: 'Khó', jlpt: 'N5', exampleJp: '日本語の 漢字は 難しいです。', exampleVi: 'Chữ Hán tiếng Nhật rất khó.' },
    { id: 'a12', kanji: '優しい', reading: 'やさしい', adjType: 'i', meaning: 'Dễ dãi, hiền lành, tốt bụng', jlpt: 'N5', exampleJp: '先生は とても 優しくて 親切です。', exampleVi: 'Thầy giáo rất hiền từ và chu đáo.' },
    { id: 'a13', kanji: '忙しい', reading: 'いそがしい', adjType: 'i', meaning: 'Bận rộn', jlpt: 'N5', exampleJp: '今日は 仕事で 忙しいです。', exampleVi: 'Hôm nay tôi bận rộn với công việc.' },
    { id: 'a14', kanji: '楽しい', reading: 'たのしい', adjType: 'i', meaning: 'Vui vẻ, thú vị', jlpt: 'N5', exampleJp: '旅行は とても 楽しかったです。', exampleVi: 'Chuyến du lịch đã rất vui vẻ.' },
    { id: 'a15', kanji: '有名', reading: 'ゆうめい', adjType: 'na', meaning: 'Nổi tiếng', jlpt: 'N5', exampleJp: '京都は 寺で 有名です。', exampleVi: 'Kyoto nổi tiếng với nhiều ngôi chùa.' },
    { id: 'a16', kanji: '親切', reading: 'しんせつ', adjType: 'na', meaning: 'Thân thiện, tử tế, chu đáo', jlpt: 'N5', exampleJp: '町の 人は みんな 親切です。', exampleVi: 'Người dân trong thị trấn đều rất thân thiện.' }
  ];

  // 13. O(1) LOOKUP MAPS (Tier-2 Data Access Optimization)
  const verbMap = Object.freeze(
    verbBank.reduce(function (acc, v) {
      acc[v.id] = v;
      acc[v.kanji] = v;
      acc[v.reading] = v;
      return acc;
    }, {})
  );

  const adjectiveMap = Object.freeze(
    adjectiveBank.reduce(function (acc, a) {
      acc[a.id] = a;
      acc[a.kanji] = a;
      acc[a.reading] = a;
      return acc;
    }, {})
  );

  const counterMap = Object.freeze(
    counters.reduce(function (acc, c) {
      acc[c.id] = c;
      return acc;
    }, {})
  );

  const particleMap = Object.freeze(
    particles.concat(extraParticles, focusedAdvancedParticles).reduce(function (acc, p) {
      acc[p.id] = p;
      return acc;
    }, {})
  );

  // Helper query methods
  function getVerbById(id) {
    return verbMap[id] || null;
  }

  function getAdjectiveById(id) {
    return adjectiveMap[id] || null;
  }

  function getCounterById(id) {
    return counterMap[id] || null;
  }

  function getParticleById(id) {
    return particleMap[id] || null;
  }

  function getAllParticles() {
    return particles.concat(extraParticles, focusedAdvancedParticles);
  }

  // Canonical normalization: ensure id & kana aliases exist for all kana tables
  hiragana.forEach(function (k, idx) {
    if (!k.id) k.id = 'hira_' + (k.romaji || idx);
    if (!k.kana) k.kana = k.char;
  });
  katakana.forEach(function (k, idx) {
    if (!k.id) k.id = 'kata_' + (k.romaji || idx);
    if (!k.kana) k.kana = k.char;
  });
  dakuon.forEach(function (d, idx) {
    if (!d.id) d.id = 'dak_' + (d.romaji || idx);
    if (!d.kana) d.kana = d.hira;
  });
  yoon.forEach(function (y, idx) {
    if (!y.id) y.id = 'yoon_' + (y.romaji || idx);
    if (!y.kana) y.kana = y.hira;
  });
  counters.forEach(function (c) {
    if (!c.name) c.name = c.kanji || c.meaning;
  });

  return {
    hiragana,
    katakana,
    dakuon,
    yoon,
    counters,
    rendakuRules: Object.freeze(rendakuRules),
    counterPhoneticRules: Object.freeze(rendakuRules),
    particles,
    extraParticles,
    focusedAdvancedParticles,
    timeAdverbsMatrix,
    keigoTable,
    transitivityPairs,
    verbBank,
    adjectiveBank,
    // O(1) Maps & Accessors
    verbMap,
    adjectiveMap,
    counterMap,
    particleMap,
    getVerbById,
    getAdjectiveById,
    getCounterById,
    getParticleById,
    getAllParticles
  };
});
