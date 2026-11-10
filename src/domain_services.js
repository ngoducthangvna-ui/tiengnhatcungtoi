/**
 * Domain Services Module (Minna no Nihongo N5-N4 Master Suite V4 Pro)
 * Strictly adheres to 4-Phase Linear Function Anatomy:
 *  - Phase 1: Guard Clauses & Fail-Fast (early returns, validations)
 *  - Phase 2: Data Normalization (canonical schemas, type coercion)
 *  - Phase 3: Pure Deterministic Core (zero I/O, no mutation, CC <= 7, max nesting depth <= 2, function length <= 35 lines)
 *  - Phase 4: Output Formatting & Canonical DTOs
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    let refHub = null;
    let conjEng = null;
    let analyticsEng = null;
    try {
      refHub = require('../data/reference_hub_data.js');
      conjEng = require('./conjugation_engine.js');
      analyticsEng = require('./analytics_streak_engine.js');
    } catch (_e) {
      // Fallback in isolated contexts
    }
    module.exports = factory(refHub, conjEng, analyticsEng);
  } else {
    root.DomainServices = factory(
      root.REFERENCE_HUB_DATA,
      root.ConjugationEngine,
      root.AnalyticsStreakEngine
    );
  }
})(typeof self !== 'undefined' ? self : this, function (refHub, conjEng, analyticsEng) {
  'use strict';

  // =========================================================================
  // SECTION 1: DOMAIN CONSTANTS & CANONICAL SPECIFICATIONS
  // =========================================================================

  const VERB_FORM_SPECS = [
    {
      key: 'masu',
      label: 'Thể ます (Lịch sự)',
      formula: 'Nhóm 1: Đổi cột う sang cột い + ます | Nhóm 2: Bỏ る + ます | Nhóm 3: きます / します',
      usage: 'Dùng trong giao tiếp lịch sự chuẩn mực hằng ngày, thể hiện hiện tại và tương lai.',
      exampleJp: '毎朝 6時に 起きます。',
      exampleVi: 'Mỗi sáng tôi thức dậy lúc 6 giờ.'
    },
    {
      key: 'te',
      label: 'Thể て (Nối câu / Yêu cầu)',
      formula: 'Nhóm 1: う,つ,る→って; む,ぶ,ぬ→んで; く→いて (いく→いって); ぐ→いで; す→して | Nhóm 2: Bỏ る + て | Nhóm 3: きて / して',
      usage: 'Dùng nối các hành động liên tiếp, kết hợp làm câu yêu cầu (〜てください), tiếp diễn (〜ています), xin phép (〜てもいいです).',
      exampleJp: '朝ご飯を 食べて、学校へ 行きます。',
      exampleVi: 'Tôi ăn sáng xong rồi đi đến trường.'
    },
    {
      key: 'nai',
      label: 'Thể ない (Phủ định ngắn)',
      formula: 'Nhóm 1: Đổi cột う sang cột あ + ない (riêng う→わ) | Nhóm 2: Bỏ る + ない | Nhóm 3: こない / しない',
      usage: 'Thể phủ định thông thường thân mật, dùng trong các mẫu cấm đoán nhẹ (〜ないでください) hoặc bắt buộc (〜なければなりません).',
      exampleJp: 'ここで 写真を 撮らないでください。',
      exampleVi: 'Xin đừng chụp ảnh ở đây.'
    },
    {
      key: 'ta',
      label: 'Thể た (Quá khứ ngắn)',
      formula: 'Quy tắc tương tự thể て: て→た, で→だ (って→った, んで→んだ, いて→いた, いで→いだ, して→した)',
      usage: 'Thể quá khứ thông thường thân mật, dùng để kể chuyện hoặc nói về trải nghiệm kinh nghiệm (〜たことがあります).',
      exampleJp: '富士山に 登ったことが あります。',
      exampleVi: 'Tôi đã từng leo núi Phú Sĩ.'
    },
    {
      key: 'potential',
      label: 'Thể Khả năng (〜られる/える)',
      formula: 'Nhóm 1: Đổi cột う sang cột え + る | Nhóm 2: Bỏ る + られる | Nhóm 3: こられる / できる',
      usage: 'Diễn tả năng lực bản thân hoặc điều kiện hoàn cảnh cho phép thực hiện hành động. Trợ từ を thường đổi thành が.',
      exampleJp: '日本語の 新聞が 読めます。',
      exampleVi: 'Tôi có thể đọc được báo tiếng Nhật.'
    },
    {
      key: 'volitional',
      label: 'Thể Ý chí (〜よう/おう)',
      formula: 'Nhóm 1: Đổi cột う sang cột お + う | Nhóm 2: Bỏ る + よう | Nhóm 3: こよう / しよう',
      usage: 'Thể hiện ý chí quyết tâm hoặc rủ rê thân mật (tương đương 〜ましょう trong văn thân mật), đi cùng 〜と思っています.',
      exampleJp: '週末 一緒に 映画を 見よう。',
      exampleVi: 'Cuối tuần cùng đi xem phim nhé!'
    },
    {
      key: 'imperative',
      label: 'Thể Mệnh lệnh (〜ろ/え)',
      formula: 'Nhóm 1: Đổi cột う sang cột え | Nhóm 2: Bỏ る + ろ | Nhóm 3: こい / しろ',
      usage: 'Ra lệnh dứt khoát hoặc cổ vũ mạnh mẽ (がんばれ!), biển báo chỉ dẫn khẩn cấp (止まれ).',
      exampleJp: '最後まで がんばれ！',
      exampleVi: 'Hãy cố gắng cho đến phút cuối cùng!'
    },
    {
      key: 'prohibitive',
      label: 'Thể Cấm chỉ (〜るな)',
      formula: 'Tất cả các nhóm: Thể từ điển (辞書形) + な',
      usage: 'Cấm đoán trực tiếp không được làm việc gì, thường thấy trên các biển báo cấm (入るな) hoặc chỉ huy nam giới.',
      exampleJp: '芝生に 入るな。',
      exampleVi: 'Không được giẫm vào bãi cỏ!'
    },
    {
      key: 'passive',
      label: 'Thể Bị động (〜られる/あれる)',
      formula: 'Nhóm 1: Đổi cột う sang cột あ + れる (riêng う→われる) | Nhóm 2: Bỏ る + られる | Nhóm 3: こられる / される',
      usage: 'Diễn tả hành động bị tác động bởi chủ thể khác, hoặc bị động gián tiếp gây phiền toái, mệt mỏi cho người nói.',
      exampleJp: '雨に 降られて、服が 濡れました。',
      exampleVi: 'Bị mắc mưa nên quần áo ướt hết cả.'
    },
    {
      key: 'causative',
      label: 'Thể Sai khiến (〜させる/あせる)',
      formula: 'Nhóm 1: Đổi cột う sang cột あ + せる (riêng う→わせる) | Nhóm 2: Bỏ る + させる | Nhóm 3: こさせる / させる',
      usage: 'Bắt buộc hoặc cho phép người khác làm việc gì, kết hợp 〜てください để xin phép được làm việc gì.',
      exampleJp: '先生は 生徒に 漢字を 覚えさせます。',
      exampleVi: 'Thầy giáo yêu cầu học sinh học thuộc chữ Hán.'
    }
  ];

  const ADJ_FORM_SPECS = [
    {
      key: 'present',
      label: 'Hiện tại khẳng định',
      formula: 'Tính từ い: Giữ nguyên [〜い] | Tính từ な: Thêm [〜だ/です]',
      usage: 'Nêu đặc điểm, tính chất hiện tại ở thể khẳng định.',
      exampleI: { jp: 'この りんごは 甘いです。', vi: 'Quả táo này ngọt.' },
      exampleNa: { jp: 'この 部屋は 静かです。', vi: 'Căn phòng này yên tĩnh.' }
    },
    {
      key: 'negative',
      label: 'Hiện tại phủ định',
      formula: 'Tính từ い: Bỏ い + [〜くない] (riêng いい→よくない) | Tính từ な: Thêm [〜ではない/じゃない]',
      usage: 'Phủ định tính chất ở hiện tại hoặc tương lai.',
      exampleI: { jp: '今日は あまり 寒くないです。', vi: 'Hôm nay không lạnh lắm.' },
      exampleNa: { jp: 'この 町は あまり にぎやかではない。', vi: 'Thị trấn này không nhộn nhịp lắm.' }
    },
    {
      key: 'past',
      label: 'Quá khứ khẳng định',
      formula: 'Tính từ い: Bỏ い + [〜かった] (riêng いい→よかった) | Tính từ な: Thêm [〜だった/でした]',
      usage: 'Diễn tả tính chất, trạng thái đã diễn ra trong quá khứ.',
      exampleI: { jp: '昨日の パーティーは 楽しかったです。', vi: 'Bữa tiệc hôm qua rất vui.' },
      exampleNa: { jp: '昔 ここは とても 静かでした。', vi: 'Ngày xưa nơi đây rất yên tĩnh.' }
    },
    {
      key: 'pastNegative',
      label: 'Quá khứ phủ định',
      formula: 'Tính từ い: Bỏ い + [〜くなかった] (riêng いい→よくなかった) | Tính từ な: Thêm [〜ではなかった/じゃなかった]',
      usage: 'Phủ định tính chất trong quá khứ.',
      exampleI: { jp: '昨日の 試験は 難しくなかったです。', vi: 'Kỳ thi hôm qua không khó.' },
      exampleNa: { jp: '昨日は 暇ではありませんでした。', vi: 'Hôm qua tôi không hề rảnh rỗi.' }
    },
    {
      key: 'te',
      label: 'Thể nối câu (て/で)',
      formula: 'Tính từ い: Bỏ い + [〜くて] | Tính từ な: Thêm [〜で]',
      usage: 'Nối hai hay nhiều tính từ chỉ đặc điểm hoặc nối câu với nguyên nhân kết quả.',
      exampleI: { jp: '安くて おいしい 料理です。', vi: 'Món ăn vừa rẻ lại vừa ngon.' },
      exampleNa: { jp: '親切で きれいな 先生です。', vi: 'Một cô giáo vừa tốt bụng lại vừa đẹp.' }
    },
    {
      key: 'adverb',
      label: 'Phó từ hóa (く/に)',
      formula: 'Tính từ い: Bỏ い + [〜く] (như 早く) | Tính từ な: Thêm [〜に] (như 静かに)',
      usage: 'Biến tính từ thành phó từ bổ nghĩa trực tiếp cho động từ phía sau.',
      exampleI: { jp: '毎朝 早く 起きます。', vi: 'Mỗi sáng tôi thức dậy sớm.' },
      exampleNa: { jp: '静かに ドアを 閉めてください。', vi: 'Xin hãy đóng cửa lại một cách khẽ khàng.' }
    }
  ];

  const GODAN_CONJUGATION_TABLE = {
    'う': { i: 'い', a: 'わ', e: 'え', o: 'お', te: 'って', ta: 'った' },
    'く': { i: 'き', a: 'か', e: 'け', o: 'こ', te: 'いて', ta: 'いた' },
    'ぐ': { i: 'ぎ', a: 'が', e: 'げ', o: 'ご', te: 'いで', ta: 'いだ' },
    'す': { i: 'し', a: 'さ', e: 'せ', o: 'そ', te: 'して', ta: 'した' },
    'つ': { i: 'ち', a: 'た', e: 'て', o: 'と', te: 'って', ta: 'った' },
    'ぬ': { i: 'に', a: 'な', e: 'ね', o: 'の', te: 'んで', ta: 'んだ' },
    'ぶ': { i: 'び', a: 'ば', e: 'べ', o: 'ぼ', te: 'んで', ta: 'んだ' },
    'む': { i: 'み', a: 'ま', e: 'め', o: 'も', te: 'んで', ta: 'んだ' },
    'る': { i: 'り', a: 'ら', e: 'れ', o: 'ろ', te: 'って', ta: 'った' }
  };

  const RANK_TIERS = [
    { min: 0, max: 99, level: 1, title: 'Tập sự Hiragana', badge: '🌱', next: 100 },
    { min: 100, max: 299, level: 2, title: 'Học đồ Minna N5', badge: '⚡', next: 300 },
    { min: 300, max: 699, level: 3, title: 'Võ Sĩ Đạo Kanji N4', badge: '🛡️', next: 700 },
    { min: 700, max: 1499, level: 4, title: 'Chiến Binh Shogun JLPT', badge: '⚔️', next: 1500 },
    { min: 1500, max: Infinity, level: 5, title: 'Đại Kiện Tướng JLPT Master', badge: '👑', next: 1500 }
  ];

  // =========================================================================
  // SECTION 2: PURE CONJUGATION MATRIX SERVICE
  // =========================================================================

  function buildPureGodanForms(stem, lastChar, isIku) {
    // Phase 1 & 2: Guard & Normalization
    const row = GODAN_CONJUGATION_TABLE[lastChar] || GODAN_CONJUGATION_TABLE['る'];
    const teSuffix = isIku ? 'って' : row.te;
    const taSuffix = isIku ? 'った' : row.ta;

    // Phase 3 & 4: Pure Output Map
    return {
      masu: { result: stem + row.i + 'ます', stem: stem + row.i, suffix: 'ます' },
      te: { result: stem + teSuffix, stem, suffix: teSuffix },
      nai: { result: stem + row.a + 'ない', stem: stem + row.a, suffix: 'ない' },
      ta: { result: stem + taSuffix, stem, suffix: taSuffix },
      potential: { result: stem + row.e + 'る', stem: stem + row.e, suffix: 'る' },
      volitional: { result: stem + row.o + 'う', stem: stem + row.o, suffix: 'う' },
      imperative: { result: stem + row.e, stem, suffix: row.e },
      prohibitive: { result: stem + lastChar + 'な', stem: stem + lastChar, suffix: 'な' },
      passive: { result: stem + row.a + 'れる', stem: stem + row.a, suffix: 'れる' },
      causative: { result: stem + row.a + 'せる', stem: stem + row.a, suffix: 'せる' }
    };
  }

  function buildPureIchidanForms(stem, fullReading) {
    // Phase 1 & 2: Guard & Normalization
    const baseStem = fullReading.endsWith('る') ? fullReading.slice(0, -1) : stem;

    // Phase 3 & 4: Pure Output Map
    return {
      masu: { result: baseStem + 'ます', stem: baseStem, suffix: 'ます' },
      te: { result: baseStem + 'て', stem: baseStem, suffix: 'て' },
      nai: { result: baseStem + 'ない', stem: baseStem, suffix: 'ない' },
      ta: { result: baseStem + 'た', stem: baseStem, suffix: 'た' },
      potential: { result: baseStem + 'られる', stem: baseStem, suffix: 'られる' },
      volitional: { result: baseStem + 'よう', stem: baseStem, suffix: 'よう' },
      imperative: { result: baseStem + 'ろ', stem: baseStem, suffix: 'ろ' },
      prohibitive: { result: fullReading + 'な', stem: fullReading, suffix: 'な' },
      passive: { result: baseStem + 'られる', stem: baseStem, suffix: 'られる' },
      causative: { result: baseStem + 'させる', stem: baseStem, suffix: 'させる' }
    };
  }

  function buildPureIrregularForms(clean) {
    // Phase 1 & 2: Fail-Fast & Normalization
    if (clean === 'くる' || clean.endsWith('くる')) {
      const p = clean.slice(0, -2);
      return {
        masu: { result: p + 'きます', stem: p + 'き', suffix: 'ます' },
        te: { result: p + 'きて', stem: p + 'き', suffix: 'て' },
        nai: { result: p + 'こない', stem: p + 'こ', suffix: 'ない' },
        ta: { result: p + 'きた', stem: p + 'き', suffix: 'た' },
        potential: { result: p + 'こられる', stem: p + 'こ', suffix: 'られる' },
        volitional: { result: p + 'こよう', stem: p + 'こ', suffix: 'よう' },
        imperative: { result: p + 'こい', stem: p + 'こ', suffix: 'い' },
        prohibitive: { result: clean + 'な', stem: clean, suffix: 'な' },
        passive: { result: p + 'こられる', stem: p + 'こ', suffix: 'られる' },
        causative: { result: p + 'こさせる', stem: p + 'こ', suffix: 'させる' }
      };
    }
    const p = clean.endsWith('する') ? clean.slice(0, -2) : '';
    return {
      masu: { result: p + 'します', stem: p + 'し', suffix: 'ます' },
      te: { result: p + 'して', stem: p + 'し', suffix: 'て' },
      nai: { result: p + 'しない', stem: p + 'し', suffix: 'ない' },
      ta: { result: p + 'した', stem: p + 'し', suffix: 'た' },
      potential: { result: p + 'できる', stem: p, suffix: 'できる' },
      volitional: { result: p + 'しよう', stem: p + 'し', suffix: 'よう' },
      imperative: { result: p + 'しろ', stem: p + 'し', suffix: 'ろ' },
      prohibitive: { result: clean + 'な', stem: clean, suffix: 'な' },
      passive: { result: p + 'される', stem: p + 'さ', suffix: 'れる' },
      causative: { result: p + 'させる', stem: p + 'さ', suffix: 'せる' }
    };
  }

  function conjugateVerbPure(reading, group = 1, targetForm = null) {
    // Phase 1: Guard Clauses
    if (typeof reading !== 'string' || !reading.trim()) return null;
    const clean = reading.trim();
    const grp = Number(group) || 1;
    if (![1, 2, 3].includes(grp)) return null;

    // Phase 2 & 3: Deterministic Mapping
    let formMap = null;
    if (grp === 1) {
      const stem = clean.slice(0, -1);
      const lastChar = clean.slice(-1);
      const isIku = clean === 'いく' || clean.endsWith('いく');
      formMap = buildPureGodanForms(stem, lastChar, isIku);
    } else if (grp === 2) {
      formMap = buildPureIchidanForms(clean.slice(0, -1), clean);
    } else {
      formMap = buildPureIrregularForms(clean);
    }

    // Phase 4: Output Shell
    if (targetForm) {
      return formMap[targetForm]
        ? { dict: clean, group: grp, form: targetForm, result: formMap[targetForm].result, stem: formMap[targetForm].stem, suffix: formMap[targetForm].suffix }
        : null;
    }
    const summary = { dict: clean, group: grp };
    VERB_FORM_SPECS.forEach(function (f) {
      summary[f.key] = formMap[f.key].result;
    });
    return summary;
  }

  function conjugateAdjectivePure(reading, adjType = 'i', targetForm = null) {
    // Phase 1: Guard Clauses
    if (typeof reading !== 'string' || !reading.trim()) return null;
    const clean = reading.trim();
    const type = adjType === 'na' ? 'na' : 'i';

    // Phase 2 & 3: Deterministic Computation
    let forms = null;
    if (type === 'i') {
      const isIi = clean === 'いい' || clean === 'よい';
      const stem = isIi ? 'よ' : (clean.endsWith('い') ? clean.slice(0, -1) : clean);
      forms = {
        present: clean,
        negative: stem + 'くない',
        past: stem + 'かった',
        pastNegative: stem + 'くなかった',
        te: stem + 'くて',
        adverb: stem + 'く'
      };
    } else {
      const stem = clean.endsWith('な') ? clean.slice(0, -1) : clean;
      forms = {
        present: stem + 'だ',
        negative: stem + 'ではない',
        past: stem + 'だった',
        pastNegative: stem + 'ではなかった',
        te: stem + 'で',
        adverb: stem + 'に'
      };
    }

    // Phase 4: Canonical DTO
    if (targetForm) {
      return forms[targetForm] ? { dict: clean, adjType: type, form: targetForm, result: forms[targetForm] } : null;
    }
    return Object.assign({ dict: clean, adjType: type }, forms);
  }

  function getVerbRuleExplanation(reading, group, formKey, result) {
    // Phase 1: Guard Clauses
    if (!reading || !formKey) return '';
    const clean = reading.trim();
    const grp = Number(group) || 1;

    // Phase 2: Exception Checks
    if ((clean === 'いく' || clean.endsWith('いく')) && (formKey === 'te' || formKey === 'ta')) {
      return `${clean} (Nhóm 1 bất quy tắc) → Đuôi [く] biến đổi xúc âm đặc biệt thành [${formKey === 'te' ? 'って' : 'った'}] = ${result}`;
    }

    // Phase 3 & 4: Group Explanations
    if (grp === 1) {
      const last = clean.slice(-1);
      const row = GODAN_CONJUGATION_TABLE[last] || {};
      if (formKey === 'masu') return `${clean} (Nhóm 1) → Đổi đuôi [${last}] sang cột い [${row.i}] + ます = ${result}`;
      if (formKey === 'te') return `${clean} (Nhóm 1) → Đuôi [${last}] biến đổi âm thành [${row.te}] = ${result}`;
      if (formKey === 'nai') return `${clean} (Nhóm 1) → Đổi đuôi [${last}] sang cột あ [${row.a}] + ない = ${result}`;
      if (formKey === 'ta') return `${clean} (Nhóm 1) → Đuôi [${last}] biến đổi thành [${row.ta}] = ${result}`;
      if (formKey === 'potential') return `${clean} (Nhóm 1) → Đổi đuôi [${last}] sang cột え [${row.e}] + る = ${result}`;
      if (formKey === 'volitional') return `${clean} (Nhóm 1) → Đổi đuôi [${last}] sang cột お [${row.o}] + う = ${result}`;
      if (formKey === 'imperative') return `${clean} (Nhóm 1) → Đổi đuôi [${last}] sang cột え [${row.e}] = ${result}`;
      if (formKey === 'prohibitive') return `${clean} (Nhóm 1) → Giữ nguyên thể từ điển + な = ${result}`;
      if (formKey === 'passive') return `${clean} (Nhóm 1) → Đổi đuôi [${last}] sang cột あ [${row.a}] + れる = ${result}`;
      return `${clean} (Nhóm 1) → Đổi đuôi [${last}] sang cột あ [${row.a}] + せる = ${result}`;
    }
    if (grp === 2) {
      return `${clean} (Nhóm 2 Ichidan) → Bỏ đuôi [る] + tiếp vĩ ngữ [${formKey}] = ${result}`;
    }
    return `${clean} (Nhóm 3 Bất quy tắc) → Biến đổi âm đặc biệt của động từ sang [${result}]`;
  }

  function buildVerbConjugationMatrix(reading, group = 1, kanji = null, meaning = '') {
    // Phase 1 & 2: Guard Clauses & Normalization
    if (!reading || typeof reading !== 'string') return null;
    const cleanReading = reading.trim();
    const grp = Number(group) || 1;
    const cleanKanji = kanji || cleanReading;

    // Phase 3: Pure Transformation across 10 Forms
    const matrix = VERB_FORM_SPECS.map(function (spec) {
      const conj = conjugateVerbPure(cleanReading, grp, spec.key);
      const explanation = getVerbRuleExplanation(cleanReading, grp, spec.key, conj.result);
      return {
        formKey: spec.key,
        label: spec.label,
        formula: spec.formula,
        result: conj.result,
        stem: conj.stem,
        suffix: conj.suffix,
        usage: spec.usage,
        exampleJp: spec.exampleJp,
        exampleVi: spec.exampleVi,
        explanation
      };
    });

    // Phase 4: Output Shell
    return {
      dict: cleanReading,
      kanji: cleanKanji,
      group: grp,
      meaning,
      formsCount: matrix.length,
      matrix
    };
  }

  function buildAdjectiveConjugationMatrix(reading, adjType = 'i', kanji = null, meaning = '') {
    // Phase 1 & 2: Guard & Normalization
    if (!reading || typeof reading !== 'string') return null;
    const cleanReading = reading.trim();
    const type = adjType === 'na' ? 'na' : 'i';
    const cleanKanji = kanji || cleanReading;
    const fullConj = conjugateAdjectivePure(cleanReading, type);

    // Phase 3: Pure Transformation across 6 Forms
    const matrix = ADJ_FORM_SPECS.map(function (spec) {
      const result = fullConj[spec.key];
      const ex = type === 'i' ? spec.exampleI : spec.exampleNa;
      return {
        formKey: spec.key,
        label: spec.label,
        formula: spec.formula,
        result,
        usage: spec.usage,
        exampleJp: ex.jp,
        exampleVi: ex.vi
      };
    });

    // Phase 4: Output Shell
    return {
      dict: cleanReading,
      kanji: cleanKanji,
      adjType: type,
      meaning,
      formsCount: matrix.length,
      matrix
    };
  }

  // =========================================================================
  // SECTION 3: MULTI-MODE DRILL GENERATOR SERVICE
  // =========================================================================

  function buildDistractorOptions(correct, candidates, maxOptions = 4) {
    // Phase 1: Guard Clauses
    if (!correct) return [];
    const pool = Array.isArray(candidates) ? candidates : [];

    // Phase 2 & 3: Filter distinct distractors
    const filtered = pool
      .filter(function (item) {
        return item && item !== correct;
      })
      .filter(function (val, idx, arr) {
        return arr.indexOf(val) === idx;
      })
      .slice(0, maxOptions - 1);

    // Phase 4: Collate & Sort
    const combined = [correct, ...filtered];
    return combined.sort(function (a, b) {
      return a.localeCompare(b, 'ja');
    });
  }

  function createVerbDrillItem(verb, formSpec, idIndex) {
    // Phase 1: Guard Clauses
    if (!verb || !formSpec) return null;

    // Phase 2: Normalization
    const reading = verb.reading || verb.dict || '';
    const kanji = verb.kanji || reading;
    const grp = Number(verb.group) || 1;
    const allForms = conjugateVerbPure(reading, grp);

    // Phase 3: Core Computation & Distractors
    const correct = allForms[formSpec.key];
    const candidatePool = VERB_FORM_SPECS.map(function (s) {
      return allForms[s.key];
    });
    const options = buildDistractorOptions(correct, candidatePool);
    const ruleExplanation = getVerbRuleExplanation(reading, grp, formSpec.key, correct);

    // Phase 4: Canonical DTO
    return {
      id: `drill_v_${idIndex}`,
      drillType: 'verb',
      kanji,
      reading,
      group: grp,
      adjType: null,
      targetForm: formSpec.key,
      targetLabel: formSpec.label,
      prompt: `Chia động từ 「${kanji} (${reading})」 sang ${formSpec.label}:`,
      answer: correct,
      options,
      ruleExplanation,
      formula: formSpec.formula
    };
  }

  function createAdjectiveDrillItem(adj, formSpec, idIndex) {
    // Phase 1: Guard Clauses
    if (!adj || !formSpec) return null;

    // Phase 2: Normalization
    const reading = adj.reading || adj.dict || '';
    const kanji = adj.kanji || reading;
    const type = adj.adjType || adj.type || 'i';
    const allForms = conjugateAdjectivePure(reading, type);

    // Phase 3: Pure Computation & Distractors
    const correct = allForms[formSpec.key];
    const candidatePool = ADJ_FORM_SPECS.map(function (s) {
      return allForms[s.key];
    });
    const options = buildDistractorOptions(correct, candidatePool);

    // Phase 4: Canonical DTO
    return {
      id: `drill_a_${idIndex}`,
      drillType: 'adj',
      kanji,
      reading,
      group: null,
      adjType: type,
      targetForm: formSpec.key,
      targetLabel: formSpec.label,
      prompt: `Chia tính từ 「${kanji} (${reading})」 sang ${formSpec.label}:`,
      answer: correct,
      options,
      ruleExplanation: formSpec.formula,
      formula: formSpec.formula
    };
  }

  function createCounterDrillItem(counter, item, idIndex) {
    // Phase 1: Guard Clauses
    if (!counter || !item) return null;

    // Phase 2: Normalization
    const pool = (counter.items || []).map(function (it) {
      return it.reading;
    });
    const options = buildDistractorOptions(item.reading, pool);

    // Phase 3: Pure Explanation
    let ruleExplanation = 'Quy tắc đếm số thông thường (không biến âm).';
    if (item.isIrregular) {
      ruleExplanation = `Biến âm ngữ âm học bất quy tắc: 「${item.kanji}」 đọc là 「${item.reading}」. Hãy ghi nhớ để phản xạ nhanh!`;
    }

    // Phase 4: Canonical DTO
    return {
      id: `drill_c_${idIndex}`,
      drillType: 'counter',
      counterId: counter.id,
      counterName: counter.kanji,
      kanji: item.kanji,
      num: item.num,
      reading: item.reading,
      group: null,
      adjType: null,
      targetForm: 'counter',
      targetLabel: 'Cách đọc lượng từ',
      isIrregular: Boolean(item.isIrregular),
      prompt: `Cách đọc đúng của 「${item.kanji}」 (${counter.meaning}) là gì?`,
      answer: item.reading,
      options,
      ruleExplanation,
      formula: counter.usage || 'Đếm lượng từ tiếng Nhật'
    };
  }

  function generateMultiModeDrill(options = {}) {
    // Phase 1: Guard Clauses & Input Normalization
    const opts = (options && typeof options === 'object') ? options : {};
    const mode = typeof opts.mode === 'string' ? opts.mode.toLowerCase() : 'all';
    const targetCount = Math.max(1, Math.min(50, Number(opts.count) || 10));

    // Phase 2: Resolve Data Sources
    const verbs = opts.verbs || (refHub && refHub.verbBank) || [
      { kanji: '書く', reading: 'かく', group: 1, meaning: 'Viết' },
      { kanji: '行く', reading: 'いく', group: 1, meaning: 'Đi' },
      { kanji: '食べる', reading: 'たべる', group: 2, meaning: 'Ăn' },
      { kanji: '来る', reading: 'くる', group: 3, meaning: 'Đến' },
      { kanji: 'する', reading: 'する', group: 3, meaning: 'Làm' }
    ];
    const adjectives = opts.adjectives || (refHub && refHub.adjectiveBank) || [
      { kanji: '大きい', reading: 'おおきい', type: 'i', meaning: 'To lớn' },
      { kanji: 'いい', reading: 'いい', type: 'i', meaning: 'Tốt' },
      { kanji: '静か', reading: 'しずか', type: 'na', meaning: 'Yên tĩnh' },
      { kanji: '元気', reading: 'げんき', type: 'na', meaning: 'Khỏe mạnh' }
    ];
    const counters = opts.counters || (refHub && refHub.counters) || [];

    // Phase 3: Pure Deterministic Drill Generation
    const drills = [];
    for (let i = 0; i < targetCount; i++) {
      let chosenType = mode;
      if (mode === 'all') {
        chosenType = (i % 3 === 0) ? 'verb' : (i % 3 === 1) ? 'adj' : 'counter';
      }

      if (chosenType === 'verb' && verbs.length > 0) {
        const v = verbs[i % verbs.length];
        const spec = VERB_FORM_SPECS[i % VERB_FORM_SPECS.length];
        drills.push(createVerbDrillItem(v, spec, i + 1));
      } else if (chosenType === 'adj' && adjectives.length > 0) {
        const a = adjectives[i % adjectives.length];
        const spec = ADJ_FORM_SPECS[i % ADJ_FORM_SPECS.length];
        drills.push(createAdjectiveDrillItem(a, spec, i + 1));
      } else if (counters.length > 0) {
        const c = counters[i % counters.length];
        const items = c.items || [];
        const item = items[(i * 3) % items.length];
        drills.push(createCounterDrillItem(c, item, i + 1));
      }
    }

    // Phase 4: Output Shell
    return drills;
  }

  // =========================================================================
  // SECTION 4: ENCYCLOPEDIC 5-TOPIC HUB REPOSITORY SERVICE
  // =========================================================================

  function getEncyclopedicTopic(topicKey) {
    // Phase 1: Guard Clauses
    if (!topicKey || typeof topicKey !== 'string') return null;
    const cleanKey = topicKey.trim().toLowerCase();

    // Phase 2 & 3: Pure Mapping
    if (cleanKey === 'kana') {
      return {
        topic: 'kana',
        title: 'Bảng Chữ Cái & Âm Tiết Toàn Thư (92 Chữ + 25 Đục + 33 Ghép)',
        hiragana: (refHub && refHub.hiragana) || [],
        katakana: (refHub && refHub.katakana) || [],
        dakuon: (refHub && refHub.dakuon) || [],
        yoon: (refHub && refHub.yoon) || []
      };
    }

    if (cleanKey === 'counters') {
      return {
        topic: 'counters',
        title: '10 Nhóm Lượng Từ Kinh Điển & Hộp Quy Tắc Rendaku',
        counters: (refHub && refHub.counters) || [],
        rendakuRules: (refHub && refHub.rendakuRules) || null
      };
    }

    if (cleanKey === 'particles') {
      return {
        topic: 'particles',
        title: '8 Cặp Trợ Từ Đối Chiếu Gốc & 4 Cặp Nâng Cao N4',
        standardPairs: (refHub && refHub.particles) || [],
        extraPairs: (refHub && refHub.extraParticles) || [],
        focusedAdvancedPairs: (refHub && refHub.focusedAdvancedParticles) || []
      };
    }

    if (cleanKey === 'time') {
      return {
        topic: 'time',
        title: 'Ma Trận Thời Gian, 10 Phó Từ Tần Suất & 8 Nghi Vấn Từ 5W1H',
        matrix: (refHub && refHub.timeAdverbsMatrix) || null
      };
    }

    if (cleanKey === 'keigo') {
      return {
        topic: 'keigo',
        title: '12 Động Từ Kính Ngữ N4 & 12 Cặp Tự/Tha Động Từ',
        keigoVerbs: (refHub && refHub.keigoTable) || [],
        transitivityPairs: (refHub && refHub.transitivityPairs) || []
      };
    }

    // Phase 4: Fallback
    return null;
  }

  function queryEncyclopedicHub(searchTerm) {
    // Phase 1: Guard Clauses
    if (typeof searchTerm !== 'string' || !searchTerm.trim()) return [];
    const term = searchTerm.trim().toLowerCase();

    // Phase 2 & 3: Multi-topic O(N) In-memory search
    const results = [];
    if (refHub && refHub.verbBank) {
      refHub.verbBank.forEach(function (v) {
        if (v.kanji.includes(term) || v.reading.includes(term) || v.meaning.toLowerCase().includes(term)) {
          results.push({ category: 'verb', item: v });
        }
      });
    }
    if (refHub && refHub.adjectiveBank) {
      refHub.adjectiveBank.forEach(function (a) {
        if (a.kanji.includes(term) || a.reading.includes(term) || a.meaning.toLowerCase().includes(term)) {
          results.push({ category: 'adj', item: a });
        }
      });
    }
    if (refHub && refHub.counters) {
      refHub.counters.forEach(function (c) {
        if (c.kanji.includes(term) || c.meaning.toLowerCase().includes(term)) {
          results.push({ category: 'counter', item: c });
        }
      });
    }

    // Phase 4: Output Shell
    return results;
  }

  // =========================================================================
  // SECTION 5: JLPT RANK PROFILE & RADAR DIAGNOSTICS SERVICE
  // =========================================================================

  function calculateJlptRankProfile(xpInput) {
    // Phase 1: Guard Clauses & Fail-Fast
    const safeXp = Math.max(0, Math.floor(Number(xpInput) || 0));

    // Phase 2: Data Normalization with Tiers
    let currentTier = RANK_TIERS[0];
    for (let i = 0; i < RANK_TIERS.length; i++) {
      if (safeXp >= RANK_TIERS[i].min && safeXp <= RANK_TIERS[i].max) {
        currentTier = RANK_TIERS[i];
        break;
      }
    }

    // Phase 3: Pure Deterministic Progress Computation
    const span = Math.max(1, currentTier.next - currentTier.min);
    const progressInTier = Math.min(span, safeXp - currentTier.min);
    const progressPercent = currentTier.level === 5 ? 100 : Math.min(100, Math.round((progressInTier / span) * 100));
    const xpNeededForNext = currentTier.level === 5 ? 0 : Math.max(0, currentTier.next - safeXp);

    // Phase 4: Canonical DTO
    return {
      currentXp: safeXp,
      level: currentTier.level,
      rankTitle: currentTier.title,
      badgeIcon: currentTier.badge,
      progressPercent,
      nextLevelXp: currentTier.next,
      xpNeededForNext,
      isMaxLevel: currentTier.level === 5
    };
  }

  function calculateRadarDiagnostics(scoresInput = {}) {
    // Phase 1: Guard Clauses & Default Normalization
    const raw = (scoresInput && typeof scoresInput === 'object') ? scoresInput : {};
    const axes = [
      { key: 'vocabulary', label: 'Từ vựng', score: Math.max(0, Math.min(100, Number(raw.vocabulary) || 50)) },
      { key: 'grammar', label: 'Ngữ pháp', score: Math.max(0, Math.min(100, Number(raw.grammar) || 50)) },
      { key: 'kanji', label: 'Kanji', score: Math.max(0, Math.min(100, Number(raw.kanji) || 50)) },
      { key: 'listening', label: 'Nghe/Kaiwa', score: Math.max(0, Math.min(100, Number(raw.listening) || 50)) },
      { key: 'reading', label: 'Đọc hiểu', score: Math.max(0, Math.min(100, Number(raw.reading) || 50)) }
    ];

    // Phase 2 & 3: Pure Statistics, Sorting & Gap Diagnostics
    const sum = axes.reduce(function (acc, a) { return acc + a.score; }, 0);
    const averageScore = Math.round(sum / axes.length);
    const sorted = axes.slice().sort(function (a, b) { return b.score - a.score; });
    const strongestAxis = sorted[0];
    const weakestAxis = sorted[sorted.length - 1];
    const deficitDelta = Math.max(0, averageScore - weakestAxis.score);

    // Phase 4: Output Shell & Actionable Recommendations
    let recommendation = `Điểm mạnh nổi bật: [${strongestAxis.label}] đạt ${strongestAxis.score}%. `;
    if (weakestAxis.score < 60) {
      recommendation += `Cần khẩn trương bù đắp trục [${weakestAxis.label}] (chỉ đạt ${weakestAxis.score}%, tụt ${deficitDelta}% so với trung bình). Nên tập trung làm các bài phản xạ và sổ tay để đạt chuẩn JLPT.`;
    } else {
      recommendation += `Năng lực 5 trục tương đối đồng đều. Hãy duy trì nhịp độ ôn luyện và tăng cường phản xạ cho [${weakestAxis.label}] (${weakestAxis.score}%) để bứt phá điểm số tối đa!`;
    }

    return {
      averageScore,
      strongestAxis: { key: strongestAxis.key, label: strongestAxis.label, score: strongestAxis.score },
      weakestAxis: { key: weakestAxis.key, label: weakestAxis.label, score: weakestAxis.score },
      deficitDelta,
      recommendation,
      axes
    };
  }

  function generateRadarSvgMarkup(scoresInput = {}, size = 260) {
    // Phase 1: Guard Clauses
    const safeSize = Math.max(180, Math.min(500, Number(size) || 260));
    const diag = calculateRadarDiagnostics(scoresInput);

    // Phase 2: Coordinates Setup
    const cx = safeSize / 2;
    const cy = safeSize / 2;
    const maxR = safeSize * 0.34;
    const toCoord = function (idx, ratio) {
      const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / 5;
      const x = (cx + maxR * ratio * Math.cos(angle)).toFixed(1);
      const y = (cy + maxR * ratio * Math.sin(angle)).toFixed(1);
      return `${x},${y}`;
    };

    // Phase 3: Pure SVG Assembly
    const gridRings = [0.25, 0.5, 0.75, 1].map(function (r) {
      const pts = diag.axes.map(function (_, i) { return toCoord(i, r); }).join(' ');
      return `<polygon points="${pts}" fill="none" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/>`;
    }).join('');

    const dataPts = diag.axes.map(function (a, i) { return toCoord(i, a.score / 100); }).join(' ');
    const vertices = diag.axes.map(function (a, i) {
      const [vx, vy] = toCoord(i, a.score / 100).split(',');
      return `<circle cx="${vx}" cy="${vy}" r="4" fill="#ff5a36" stroke="#ffffff" stroke-width="1.5"/>`;
    }).join('');

    const labels = diag.axes.map(function (a, i) {
      const [lx, ly] = toCoord(i, 1.25).split(',');
      return `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="currentColor">${a.label} (${a.score}%)</text>`;
    }).join('');

    // Phase 4: Output Shell
    return `<svg class="ms-radar-svg" viewBox="0 0 ${safeSize} ${safeSize}" width="${safeSize}" height="${safeSize}" role="img" aria-label="Biểu đồ năng lực 5 trục JLPT">${gridRings}<polygon points="${dataPts}" fill="rgba(255, 90, 54, 0.28)" stroke="#ff5a36" stroke-width="2.2"/><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="3" fill="#ff5a36"/>${vertices}${labels}</svg>`;
  }

  // =========================================================================
  // PUBLIC EXPORTS INTERFACE
  // =========================================================================

  return {
    // Specs & Constants
    VERB_FORM_SPECS,
    ADJ_FORM_SPECS,
    RANK_TIERS,

    // Conjugation Matrix Services
    conjugateVerbPure,
    conjugateAdjectivePure,
    getVerbRuleExplanation,
    buildVerbConjugationMatrix,
    buildAdjectiveConjugationMatrix,

    // Multi-Mode Drill Services
    createVerbDrillItem,
    createAdjectiveDrillItem,
    createCounterDrillItem,
    generateMultiModeDrill,

    // Encyclopedic Hub Services
    getEncyclopedicTopic,
    queryEncyclopedicHub,

    // Analytics, Rank & Diagnostics Services
    calculateJlptRankProfile,
    calculateRadarDiagnostics,
    generateRadarSvgMarkup
  };
});
