/**
 * Conjugation & Number Reflex Engine (Minna no Nihongo N5-N4 Master Suite)
 * Strictly adheres to 4-Phase Linear Function Anatomy (Zero Arrowhead Nesting, CC <= 7, <= 35 lines).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    let refData = null;
    try {
      refData = require('../data/reference_hub_data.js');
    } catch (_e) {
      refData = null;
    }
    module.exports = factory(refData);
  } else {
    root.ConjugationEngine = factory(root.REFERENCE_HUB_DATA);
  }
})(typeof self !== 'undefined' ? self : this, function (refData) {
  'use strict';

  const VERB_FORMS = [
    {
      key: 'masu',
      label: 'Thể ます (Lịch sự)',
      desc: 'Dạng lịch sự hiện tại/tương lai',
      formula: 'Nhóm 1: Cột う → い + ます | Nhóm 2: Bỏ る + ます | Nhóm 3: きます / します',
      usageTip: 'Dùng trong giao tiếp lịch sự thường nhật, tương đương hiện tại và tương lai.'
    },
    {
      key: 'te',
      label: 'Thể て (Nối câu / Yêu cầu)',
      desc: 'Dùng để nối hành động, xin phép, tiếp diễn',
      formula: 'Nhóm 1: う,つ,る→って; む,ぶ,ぬ→んで; く→いて (いく→いって); ぐ→いで; す→して | Nhóm 2: Bỏ る + て | Nhóm 3: きて / して',
      usageTip: 'Dùng nối các vế câu hành động, kết hợp 〜てください, 〜てもいいです, 〜ています.'
    },
    {
      key: 'nai',
      label: 'Thể ない (Phủ định ngắn)',
      desc: 'Phủ định thông thường hiện tại',
      formula: 'Nhóm 1: Cột う → あ + ない (riêng う→わ) | Nhóm 2: Bỏ る + ない | Nhóm 3: こない / しない',
      usageTip: 'Dùng trong văn thân mật, kết hợp mẫu câu 〜ないでください, 〜なければなりません.'
    },
    {
      key: 'ta',
      label: 'Thể た (Quá khứ ngắn)',
      desc: 'Quá khứ thông thường hoặc kinh nghiệm',
      formula: 'Quy tắc đuôi giống thể て: て→た, で→だ (VD: って→った, んで→んだ, いて→いた)',
      usageTip: 'Dùng kể lại việc đã qua, kết hợp 〜たことがあります, 〜たほうがいいです.'
    },
    {
      key: 'potential',
      label: 'Thể Khả năng (〜られる/える)',
      desc: 'Diễn tả năng lực hoặc điều kiện có thể làm',
      formula: 'Nhóm 1: Cột う → え + る | Nhóm 2: Bỏ る + られる | Nhóm 3: こられる / できる',
      usageTip: 'Diễn tả năng lực bản thân hoặc điều kiện cho phép, trợ từ を thường chuyển thành が.'
    },
    {
      key: 'volitional',
      label: 'Thể Ý chí (〜よう/おう)',
      desc: 'Rủ rê hoặc thể hiện ý định thực hiện',
      formula: 'Nhóm 1: Cột う → お + う | Nhóm 2: Bỏ る + よう | Nhóm 3: こよう / しよう',
      usageTip: 'Dạng thân mật của 〜ましょう, thường đi cùng 〜と思っています (dự định làm).'
    },
    {
      key: 'imperative',
      label: 'Thể Mệnh lệnh (〜ろ/え)',
      desc: 'Ra lệnh hoặc cổ vũ mạnh mẽ',
      formula: 'Nhóm 1: Cột う → え | Nhóm 2: Bỏ る + ろ | Nhóm 3: こい / しろ',
      usageTip: 'Mệnh lệnh dứt khoát hoặc cổ vũ (がんばれ!), biển báo khẩn cấp (止まれ).'
    },
    {
      key: 'prohibitive',
      label: 'Thể Cấm chỉ (〜るな)',
      desc: 'Cấm đoán trực tiếp (Không được làm!)',
      formula: 'Tất cả các nhóm: Thể từ điển (辞書形) + な',
      usageTip: 'Cấm đoán trực tiếp không được thực hiện hành động, thường gặp ở biển báo (入るな).'
    },
    {
      key: 'passive',
      label: 'Thể Bị động (〜られる/あれる)',
      desc: 'Bị/được tác động bởi chủ thể khác',
      formula: 'Nhóm 1: Cột う → あ + れる (う→われる) | Nhóm 2: Bỏ る + られる | Nhóm 3: こられる / される',
      usageTip: 'Diễn đạt hành động bị tác động bởi người khác, hoặc bị động gián tiếp gây phiền toái.'
    },
    {
      key: 'causative',
      label: 'Thể Sai khiến (〜させる/あせる)',
      desc: 'Bắt buộc hoặc cho phép ai làm gì',
      formula: 'Nhóm 1: Cột う → あ + せる (う→わせる) | Nhóm 2: Bỏ る + させる | Nhóm 3: こさせる / させる',
      usageTip: 'Bắt buộc hoặc cho phép người khác làm việc gì, đi cùng 〜てください để xin phép.'
    }
  ];
  VERB_FORMS.forEach((f) => {
    f.id = f.id || f.key;
    f.name = f.name || f.label;
  });

  const ADJ_FORMS = [
    { key: 'present', label: 'Hiện tại khẳng định', formula: 'Tính từ い: Giữ nguyên [〜い] | Tính từ な: Thêm [〜だ]' },
    { key: 'negative', label: 'Hiện tại phủ định', formula: 'Tính từ い: Bỏ い + [〜くない] (いい→よくない) | Tính từ な: Thêm [〜ではない]' },
    { key: 'past', label: 'Quá khứ khẳng định', formula: 'Tính từ い: Bỏ い + [〜かった] (いい→よかった) | Tính từ な: Thêm [〜だった]' },
    { key: 'pastNegative', label: 'Quá khứ phủ định', formula: 'Tính từ い: Bỏ い + [〜くなかった] | Tính từ な: Thêm [〜ではなかった]' },
    { key: 'te', label: 'Thể nối câu (て/で)', formula: 'Tính từ い: Bỏ い + [〜くて] | Tính từ な: Thêm [〜で]' },
    { key: 'adverb', label: 'Phó từ hóa (く/に)', formula: 'Tính từ い: Bỏ い + [〜く] (như 早く) | Tính từ な: Thêm [〜に] (như 静かに)' }
  ];

  const GODAN_TABLE = {
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

  const DEFAULT_ADJ_BANK = [
    { kanji: '大きい', reading: 'おおきい', type: 'i', meaning: 'To lớn' },
    { kanji: '小さい', reading: 'ちいさい', type: 'i', meaning: 'Nhỏ bé' },
    { kanji: '新しい', reading: 'あたらしい', type: 'i', meaning: 'Mới' },
    { kanji: '古い', reading: 'ふるい', type: 'i', meaning: 'Cũ' },
    { kanji: 'いい', reading: 'いい', type: 'i', meaning: 'Tốt/Hay' },
    { kanji: '暑い', reading: 'あつい', type: 'i', meaning: 'Nóng' },
    { kanji: '静か', reading: 'しずか', type: 'na', meaning: 'Yên tĩnh' },
    { kanji: '元気', reading: 'げんき', type: 'na', meaning: 'Khỏe mạnh' },
    { kanji: '親切', reading: 'しんせつ', type: 'na', meaning: 'Tốt bụng' },
    { kanji: '有名', reading: 'ゆうめい', type: 'na', meaning: 'Nổi tiếng' },
    { kanji: '便利', reading: 'べんり', type: 'na', meaning: 'Tiện lợi' }
  ];

  function buildGodanForms(reading) {
    const stem = reading.slice(0, -1);
    const lastChar = reading.slice(-1);
    const map = GODAN_TABLE[lastChar];
    if (!map) return null;
    const isIku = reading === 'いく' || reading.endsWith('いく');
    return {
      masu: { stem: stem + map.i, suffix: 'ます', result: stem + map.i + 'ます' },
      te: { stem, suffix: isIku ? 'って' : map.te, result: stem + (isIku ? 'って' : map.te) },
      nai: { stem: stem + map.a, suffix: 'ない', result: stem + map.a + 'ない' },
      ta: { stem, suffix: isIku ? 'った' : map.ta, result: stem + (isIku ? 'った' : map.ta) },
      potential: { stem: stem + map.e, suffix: 'る', result: stem + map.e + 'る' },
      volitional: { stem: stem + map.o, suffix: 'う', result: stem + map.o + 'う' },
      imperative: { stem, suffix: map.e, result: stem + map.e },
      prohibitive: { stem: reading, suffix: 'な', result: reading + 'な' },
      passive: { stem: stem + map.a, suffix: 'れる', result: stem + map.a + 'れる' },
      causative: { stem: stem + map.a, suffix: 'せる', result: stem + map.a + 'せる' }
    };
  }

  function buildIchidanForms(reading) {
    const stem = reading.endsWith('る') ? reading.slice(0, -1) : reading;
    return {
      masu: { stem, suffix: 'ます', result: stem + 'ます' },
      te: { stem, suffix: 'て', result: stem + 'て' },
      nai: { stem, suffix: 'ない', result: stem + 'ない' },
      ta: { stem, suffix: 'た', result: stem + 'た' },
      potential: { stem, suffix: 'られる', result: stem + 'られる' },
      volitional: { stem, suffix: 'よう', result: stem + 'よう' },
      imperative: { stem, suffix: 'ろ', result: stem + 'ろ' },
      prohibitive: { stem: reading, suffix: 'な', result: reading + 'な' },
      passive: { stem, suffix: 'られる', result: stem + 'られる' },
      causative: { stem, suffix: 'させる', result: stem + 'させる' }
    };
  }

  function buildIrregularForms(reading) {
    if (reading === 'くる' || reading.endsWith('くる')) {
      const prefix = reading.slice(0, -2);
      return {
        masu: { stem: prefix + 'き', suffix: 'ます', result: prefix + 'きます' },
        te: { stem: prefix + 'き', suffix: 'て', result: prefix + 'きて' },
        nai: { stem: prefix + 'こ', suffix: 'ない', result: prefix + 'こない' },
        ta: { stem: prefix + 'き', suffix: 'た', result: prefix + 'きた' },
        potential: { stem: prefix + 'こ', suffix: 'られる', result: prefix + 'こられる' },
        volitional: { stem: prefix + 'こ', suffix: 'よう', result: prefix + 'こよう' },
        imperative: { stem: prefix + 'こ', suffix: 'い', result: prefix + 'こい' },
        prohibitive: { stem: reading, suffix: 'な', result: reading + 'な' },
        passive: { stem: prefix + 'こ', suffix: 'られる', result: prefix + 'こられる' },
        causative: { stem: prefix + 'こ', suffix: 'させる', result: prefix + 'こさせる' }
      };
    }
    const prefix = reading.endsWith('する') ? reading.slice(0, -2) : '';
    return {
      masu: { stem: prefix + 'し', suffix: 'ます', result: prefix + 'します' },
      te: { stem: prefix + 'し', suffix: 'て', result: prefix + 'して' },
      nai: { stem: prefix + 'し', suffix: 'ない', result: prefix + 'しない' },
      ta: { stem: prefix + 'し', suffix: 'た', result: prefix + 'した' },
      potential: { stem: prefix, suffix: 'できる', result: prefix + 'できる' },
      volitional: { stem: prefix + 'し', suffix: 'よう', result: prefix + 'しよう' },
      imperative: { stem: prefix + 'し', suffix: 'ろ', result: prefix + 'しろ' },
      prohibitive: { stem: reading, suffix: 'な', result: reading + 'な' },
      passive: { stem: prefix + 'さ', suffix: 'れる', result: prefix + 'される' },
      causative: { stem: prefix + 'さ', suffix: 'せる', result: prefix + 'させる' }
    };
  }

  function conjugateVerb(reading, group = 1, targetForm = null) {
    // Phase 1: Guard Clauses
    if (typeof reading !== 'string' || !reading.trim()) return null;
    const clean = reading.trim();
    const grp = Number(group) || 1;
    if (![1, 2, 3].includes(grp)) return null;

    // Phase 2 & 3: Pure Computation
    let formMap = null;
    if (grp === 1) formMap = buildGodanForms(clean);
    else if (grp === 2) formMap = buildIchidanForms(clean);
    else formMap = buildIrregularForms(clean);
    if (!formMap) return null;

    if (targetForm) {
      const entry = formMap[targetForm];
      if (!entry) return null;
      return { dict: clean, group: grp, form: targetForm, result: entry.result, stem: entry.stem, suffix: entry.suffix };
    }

    const summary = { dict: clean, group: grp };
    for (const f of VERB_FORMS) {
      summary[f.key] = formMap[f.key].result;
    }
    return summary;
  }

  function conjugateAdjective(reading, adjType = 'i', targetForm = null) {
    // Phase 1: Guard Clauses
    if (typeof reading !== 'string' || !reading.trim()) return null;
    const clean = reading.trim();
    const type = adjType === 'na' ? 'na' : 'i';

    // Phase 2 & 3: Pure Computation
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

    if (targetForm) {
      return forms[targetForm] ? { dict: clean, adjType: type, form: targetForm, result: forms[targetForm] } : null;
    }
    return Object.assign({ dict: clean, adjType: type }, forms);
  }

  function getGodanExplanation(clean, target, lastChar, map, res) {
    if (target === 'masu') return `${clean} (Nhóm 1) → Đổi đuôi [${lastChar}] sang cột い [${map.i}] + ます = ${res}`;
    if (target === 'te') return `${clean} (Nhóm 1) → Đuôi [${lastChar}] biến đổi âm thành [${map.te}] = ${res}`;
    if (target === 'nai') return `${clean} (Nhóm 1) → Đổi đuôi [${lastChar}] sang cột あ [${map.a}] + ない = ${res}`;
    if (target === 'ta') return `${clean} (Nhóm 1) → Đuôi [${lastChar}] biến đổi thành [${map.ta}] = ${res}`;
    if (target === 'potential') return `${clean} (Nhóm 1) → Đổi đuôi [${lastChar}] sang cột え [${map.e}] + る = ${res}`;
    if (target === 'volitional') return `${clean} (Nhóm 1) → Đổi đuôi [${lastChar}] sang cột お [${map.o}] + う = ${res}`;
    if (target === 'imperative') return `${clean} (Nhóm 1) → Đổi đuôi [${lastChar}] sang cột え [${map.e}] = ${res}`;
    if (target === 'prohibitive') return `${clean} (Nhóm 1) → Giữ nguyên thể từ điển + な = ${res}`;
    if (target === 'passive') return `${clean} (Nhóm 1) → Đổi đuôi [${lastChar}] sang cột あ [${map.a}] + れる = ${res}`;
    if (target === 'causative') return `${clean} (Nhóm 1) → Đổi đuôi [${lastChar}] sang cột あ [${map.a}] + せる = ${res}`;
    return `${clean} (Nhóm 1) → Chia sang ${target} = ${res}`;
  }

  function getIchidanExplanation(clean, target, res) {
    if (target === 'masu') return `${clean} (Nhóm 2) → Bỏ đuôi る + ます = ${res}`;
    if (target === 'te') return `${clean} (Nhóm 2) → Bỏ đuôi る + て = ${res}`;
    if (target === 'nai') return `${clean} (Nhóm 2) → Bỏ đuôi る + ない = ${res}`;
    if (target === 'ta') return `${clean} (Nhóm 2) → Bỏ đuôi る + た = ${res}`;
    if (target === 'potential') return `${clean} (Nhóm 2) → Bỏ đuôi る + られる = ${res}`;
    if (target === 'volitional') return `${clean} (Nhóm 2) → Bỏ đuôi る + よう = ${res}`;
    if (target === 'imperative') return `${clean} (Nhóm 2) → Bỏ đuôi る + ろ = ${res}`;
    if (target === 'prohibitive') return `${clean} (Nhóm 2) → Giữ nguyên thể từ điển + な = ${res}`;
    if (target === 'passive') return `${clean} (Nhóm 2) → Bỏ đuôi る + られる = ${res}`;
    if (target === 'causative') return `${clean} (Nhóm 2) → Bỏ đuôi る + させる = ${res}`;
    return `${clean} (Nhóm 2) → Chia sang ${target} = ${res}`;
  }

  function getVerbFormulaDetail(reading, group = 1, targetForm = 'masu') {
    // Phase 1: Guard Clauses
    if (typeof reading !== 'string' || !reading.trim()) return '';
    const clean = reading.trim();
    const grp = Number(group) || 1;
    const target = targetForm || 'masu';

    // Phase 2: Canonical Lookup
    const conj = conjugateVerb(clean, grp, target);
    if (!conj) return '';

    // Phase 3: Pure Explanation
    if (clean === 'いく' || clean.endsWith('いく')) {
      if (target === 'te') return `${clean} (Nhóm 1 bất quy tắc) → Đuôi く biến đổi đặc biệt thành って = ${conj.result}`;
      if (target === 'ta') return `${clean} (Nhóm 1 bất quy tắc) → Đuôi く biến đổi đặc biệt thành った = ${conj.result}`;
    }

    if (grp === 1) {
      const lastChar = clean.slice(-1);
      const map = GODAN_TABLE[lastChar] || {};
      return getGodanExplanation(clean, target, lastChar, map, conj.result);
    }
    if (grp === 2) {
      return getIchidanExplanation(clean, target, conj.result);
    }
    if (clean === 'くる' || clean.endsWith('くる')) {
      return `${clean} (Nhóm 3 bất quy tắc) → Biến đổi âm thành ${conj.result}`;
    }
    return `${clean} (Nhóm 3 する) → Biến đổi gốc thành ${conj.result}`;
  }

  function getGodanContextualFormula(reading, lastChar, formKey, map) {
    if (reading === 'いく' || reading.endsWith('いく')) {
      if (formKey === 'te') return 'Nhóm 1 bất quy tắc (いく): Đuôi く đổi thành って (không phải いて)';
      if (formKey === 'ta') return 'Nhóm 1 bất quy tắc (いく): Đuôi く đổi thành った (không phải いた)';
    }
    if (formKey === 'te') {
      if (lastChar === 'く') return 'Nhóm 1 (đuôi く): Đổi く → いて (Riêng いく → いって)';
      if (lastChar === 'ぐ') return 'Nhóm 1 (đuôi ぐ): Đổi ぐ → いで';
      if (lastChar === 'す') return 'Nhóm 1 (đuôi す): Đổi す → して';
      if (['う', 'つ', 'る'].includes(lastChar)) return `Nhóm 1 (đuôi ${lastChar}): Đổi ${lastChar} → って`;
      if (['む', 'ぶ', 'ぬ'].includes(lastChar)) return `Nhóm 1 (đuôi ${lastChar}): Đổi ${lastChar} → んで`;
      return `Nhóm 1 (đuôi ${lastChar}): Đổi ${lastChar} → ${map.te || 'て'}`;
    }
    if (formKey === 'ta') {
      if (lastChar === 'く') return 'Nhóm 1 (đuôi く): Đổi く → いた (Riêng いく → いった)';
      if (lastChar === 'ぐ') return 'Nhóm 1 (đuôi ぐ): Đổi ぐ → いだ';
      if (lastChar === 'す') return 'Nhóm 1 (đuôi す): Đổi す → した';
      if (['う', 'つ', 'る'].includes(lastChar)) return `Nhóm 1 (đuôi ${lastChar}): Đổi ${lastChar} → った`;
      if (['む', 'ぶ', 'ぬ'].includes(lastChar)) return `Nhóm 1 (đuôi ${lastChar}): Đổi ${lastChar} → んだ`;
      return `Nhóm 1 (đuôi ${lastChar}): Đổi ${lastChar} → ${map.ta || 'た'}`;
    }
    if (formKey === 'masu') return `Nhóm 1 (đuôi ${lastChar}): Cột う [${lastChar}] → Cột い [${map.i}] + ます`;
    if (formKey === 'nai') return `Nhóm 1 (đuôi ${lastChar}): Cột う [${lastChar}] → Cột あ [${map.a}] + ない`;
    if (formKey === 'potential') return `Nhóm 1 (đuôi ${lastChar}): Cột う [${lastChar}] → Cột え [${map.e}] + る`;
    if (formKey === 'volitional') return `Nhóm 1 (đuôi ${lastChar}): Cột う [${lastChar}] → Cột お [${map.o}] + う`;
    if (formKey === 'imperative') return `Nhóm 1 (đuôi ${lastChar}): Cột う [${lastChar}] → Cột え [${map.e}]`;
    if (formKey === 'prohibitive') return `Nhóm 1: Thể từ điển (${reading}) + な`;
    if (formKey === 'passive') return `Nhóm 1 (đuôi ${lastChar}): Cột う [${lastChar}] → Cột あ [${map.a}] + れる`;
    if (formKey === 'causative') return `Nhóm 1 (đuôi ${lastChar}): Cột う [${lastChar}] → Cột あ [${map.a}] + せる`;
    return `Nhóm 1: Chia theo quy tắc ${formKey}`;
  }

  function getIchidanContextualFormula(reading, formKey) {
    if (formKey === 'masu') return 'Nhóm 2: Bỏ る + ます';
    if (formKey === 'te') return 'Nhóm 2: Bỏ る + て';
    if (formKey === 'nai') return 'Nhóm 2: Bỏ る + ない';
    if (formKey === 'ta') return 'Nhóm 2: Bỏ る + た';
    if (formKey === 'potential') return 'Nhóm 2: Bỏ る + られる';
    if (formKey === 'volitional') return 'Nhóm 2: Bỏ る + よう';
    if (formKey === 'imperative') return 'Nhóm 2: Bỏ る + ろ';
    if (formKey === 'prohibitive') return `Nhóm 2: Thể từ điển (${reading}) + な`;
    if (formKey === 'passive') return 'Nhóm 2: Bỏ る + られる';
    if (formKey === 'causative') return 'Nhóm 2: Bỏ る + させる';
    return 'Nhóm 2: Bỏ る + đuôi thể';
  }

  function getIrregularContextualFormula(reading, formKey) {
    const isKuru = reading === 'くる' || reading.endsWith('くる');
    const isSuru = reading === 'する' || reading.endsWith('する');
    if (!isKuru && !isSuru) {
      if (formKey === 'te') return 'Nhóm 3: くる → きて | する → して';
      if (formKey === 'masu') return 'Nhóm 3: くる → きます | する → します';
      if (formKey === 'nai') return 'Nhóm 3: くる → こない | する → しない';
      if (formKey === 'ta') return 'Nhóm 3: くる → きた | する → した';
      return 'Nhóm 3: Bất quy tắc (くる / する)';
    }
    if (isKuru) {
      if (formKey === 'masu') return 'Nhóm 3 (くる): くる → きます';
      if (formKey === 'te') return 'Nhóm 3: くる → きて | する → して';
      if (formKey === 'nai') return 'Nhóm 3 (くる): くる → こない';
      if (formKey === 'ta') return 'Nhóm 3 (くる): くる → きた';
      if (formKey === 'potential') return 'Nhóm 3 (くる): くる → こられる';
      if (formKey === 'volitional') return 'Nhóm 3 (くる): くる → こよう';
      if (formKey === 'imperative') return 'Nhóm 3 (くる): くる → こい';
      if (formKey === 'prohibitive') return 'Nhóm 3: くる + な';
      if (formKey === 'passive') return 'Nhóm 3 (くる): くる → こられる';
      if (formKey === 'causative') return 'Nhóm 3 (くる): くる → こさせる';
    }
    if (formKey === 'masu') return 'Nhóm 3 (する): する → します';
    if (formKey === 'te') return 'Nhóm 3: くる → きて | する → して';
    if (formKey === 'nai') return 'Nhóm 3 (する): する → しない';
    if (formKey === 'ta') return 'Nhóm 3 (する): する → した';
    if (formKey === 'potential') return 'Nhóm 3 (する): する → できる';
    if (formKey === 'volitional') return 'Nhóm 3 (する): する → しよう';
    if (formKey === 'imperative') return 'Nhóm 3 (する): する → しろ';
    if (formKey === 'prohibitive') return 'Nhóm 3: する + な';
    if (formKey === 'passive') return 'Nhóm 3 (する): する → される';
    if (formKey === 'causative') return 'Nhóm 3 (する): する → させる';
    return 'Nhóm 3: Bất quy tắc (くる / する)';
  }

  function getAdjContextualFormula(reading, adjType, formKey) {
    const isI = adjType !== 'na';
    const isIi = reading === 'いい' || reading === 'よい';

    if (isI) {
      if (formKey === 'present') return 'Đuôi い: Giữ nguyên [〜い]';
      if (formKey === 'negative') return isIi ? 'Đuôi い: Bỏ い + くない (Riêng いい → よくない)' : 'Đuôi い: Bỏ い + くない (Riêng いい → よくない)';
      if (formKey === 'past') return isIi ? 'Đuôi い: Bỏ い + かった (Riêng いい → よかった)' : 'Đuôi い: Bỏ い + かった (Riêng いい → よかった)';
      if (formKey === 'pastNegative') return isIi ? 'Đuôi い: Bỏ い + くなかった (Riêng いい → よくなかった)' : 'Đuôi い: Bỏ い + くなかった';
      if (formKey === 'te') return isIi ? 'Đuôi い: Bỏ い + くて (Riêng いい → よくて)' : 'Đuôi い: Bỏ い + くて';
      if (formKey === 'adverb') return isIi ? 'Đuôi い: Bỏ い + く (Riêng いい → よく)' : 'Đuôi い: Bỏ い + く';
      return 'Đuôi い: Biến đổi theo quy tắc tính từ đuôi -i';
    }

    if (formKey === 'present') return 'Đuôi な: Thêm だ';
    if (formKey === 'negative') return 'Đuôi な: Giữ nguyên + ではない / じゃない';
    if (formKey === 'past') return 'Đuôi な: Thêm だった';
    if (formKey === 'pastNegative') return 'Đuôi な: Thêm ではなかった / じゃなかった';
    if (formKey === 'te') return 'Đuôi な: Thêm で';
    if (formKey === 'adverb') return 'Đuôi な: Thêm に';
    return 'Đuôi な: Biến đổi theo quy tắc tính từ đuôi -na';
  }

  function getContextualFormula(word, formKey, isVerb = true) {
    // Phase 1: Guard Clauses
    if (!word || !formKey) return '';
    const cleanKey = String(formKey).trim();
    if (!cleanKey) return '';

    // Phase 2: Data Normalization
    const isVerbMode = Boolean(isVerb);
    let reading = '';
    let grp = 1;
    let adjType = 'i';

    if (typeof word === 'string') {
      reading = word.trim();
    } else if (typeof word === 'object') {
      reading = String(word.reading || word.kanji || word.dict || '').trim();
      grp = Number(word.group) || 1;
      adjType = String(word.adjType || word.type || 'i').trim().toLowerCase();
    }

    // Phase 3: Pure Deterministic Resolution
    if (isVerbMode) {
      if (grp === 1) {
        const lastChar = reading.slice(-1);
        const map = GODAN_TABLE[lastChar] || {};
        return getGodanContextualFormula(reading, lastChar, cleanKey, map);
      }
      if (grp === 2) {
        return getIchidanContextualFormula(reading, cleanKey);
      }
      return getIrregularContextualFormula(reading, cleanKey);
    }

    return getAdjContextualFormula(reading, adjType, cleanKey);
  }

  function generateConjugationDrill(count = 10, customBank = null) {
    const safeCount = Math.max(1, Math.min(50, Number(count) || 10));
    const bank = Array.isArray(customBank) && customBank.length > 0
      ? customBank
      : (refData && Array.isArray(refData.verbBank) ? refData.verbBank : [
          { kanji: '書く', reading: 'かく', group: 1, meaning: 'Viết' },
          { kanji: '行く', reading: 'いく', group: 1, meaning: 'Đi' },
          { kanji: '食べる', reading: 'たべる', group: 2, meaning: 'Ăn' },
          { kanji: '来る', reading: 'くる', group: 3, meaning: 'Đến' },
          { kanji: 'する', reading: 'する', group: 3, meaning: 'Làm' }
        ]);

    const drills = [];
    for (let i = 0; i < safeCount; i++) {
      const verb = bank[i % bank.length];
      const formSpec = VERB_FORMS[i % VERB_FORMS.length];
      const allForms = conjugateVerb(verb.reading, verb.group);
      const correct = allForms[formSpec.key];
      const distractors = VERB_FORMS
        .filter((f) => f.key !== formSpec.key)
        .map((f) => allForms[f.key])
        .filter((val, idx, arr) => val !== correct && arr.indexOf(val) === idx)
        .slice(0, 3);
      const options = [correct, ...distractors].sort((a, b) => a.localeCompare(b, 'ja'));
      drills.push({
        id: `conj_q_${i + 1}`,
        drillType: 'verb',
        kanji: verb.kanji || verb.reading,
        reading: verb.reading,
        meaning: verb.meaning || '',
        group: verb.group,
        adjType: null,
        targetForm: formSpec.key,
        targetLabel: formSpec.label,
        prompt: `Chia động từ 「${verb.kanji || verb.reading} (${verb.reading})」 sang ${formSpec.label}:`,
        answer: correct,
        options,
        ruleExplanation: getVerbFormulaDetail(verb.reading, verb.group, formSpec.key)
      });
    }
    return drills;
  }

  function generateAdjectiveDrill(count = 10, customBank = null) {
    const safeCount = Math.max(1, Math.min(50, Number(count) || 10));
    const bank = Array.isArray(customBank) && customBank.length > 0 ? customBank : DEFAULT_ADJ_BANK;
    const drills = [];

    for (let i = 0; i < safeCount; i++) {
      const adj = bank[i % bank.length];
      const formSpec = ADJ_FORMS[i % ADJ_FORMS.length];
      const allForms = conjugateAdjective(adj.reading, adj.type);
      const correct = allForms[formSpec.key];
      const distractors = ADJ_FORMS
        .filter((f) => f.key !== formSpec.key)
        .map((f) => allForms[f.key])
        .filter((val, idx, arr) => val !== correct && arr.indexOf(val) === idx)
        .slice(0, 3);
      const options = [correct, ...distractors].sort((a, b) => a.localeCompare(b, 'ja'));
      drills.push({
        id: `adj_q_${i + 1}`,
        drillType: 'adj',
        kanji: adj.kanji || adj.reading,
        reading: adj.reading,
        meaning: adj.meaning || '',
        group: null,
        adjType: adj.type,
        targetForm: formSpec.key,
        targetLabel: formSpec.label,
        prompt: `Chia tính từ 「${adj.kanji || adj.reading} (${adj.reading})」 sang ${formSpec.label}:`,
        answer: correct,
        options,
        ruleExplanation: formSpec.formula
      });
    }
    return drills;
  }

  function generateNumberReflexDrill(count = 10) {
    const safeCount = Math.max(1, Math.min(50, Number(count) || 10));
    const counters = refData && Array.isArray(refData.counters) ? refData.counters : [];
    if (counters.length === 0) return [];

    const drills = [];
    for (let i = 0; i < safeCount; i++) {
      const counter = counters[i % counters.length];
      const item = counter.items[(i * 3) % counter.items.length];
      const distractors = counter.items
        .filter((it) => it.reading !== item.reading)
        .slice(0, 3)
        .map((it) => it.reading);
      const options = [item.reading, ...distractors].sort((a, b) => a.localeCompare(b, 'ja'));
      drills.push({
        id: `num_q_${i + 1}`,
        drillType: 'counter',
        counterId: counter.id,
        counterName: counter.kanji,
        kanji: item.kanji,
        num: item.num,
        reading: item.reading,
        meaning: counter.meaning,
        group: null,
        adjType: null,
        targetForm: 'counter',
        targetLabel: 'Cách đọc lượng từ',
        isIrregular: Boolean(item.isIrregular),
        prompt: `Cách đọc chuẩn của 「${item.kanji}」 (${counter.meaning}) là gì?`,
        answer: item.reading,
        options,
        ruleExplanation: item.isIrregular ? 'Biến âm bất quy tắc trong đếm số' : 'Đếm số quy tắc thông thường'
      });
    }
    return drills;
  }

  function generateMasterReflexDrill(count = 10, mode = 'all') {
    const safeCount = Math.max(1, Math.min(50, Number(count) || 10));
    const safeMode = typeof mode === 'string' ? mode.toLowerCase() : 'all';

    if (safeMode === 'verb') return generateConjugationDrill(safeCount);
    if (safeMode === 'adj') return generateAdjectiveDrill(safeCount);
    if (safeMode === 'counter') return generateNumberReflexDrill(safeCount);

    const verbList = generateConjugationDrill(safeCount);
    const adjList = generateAdjectiveDrill(safeCount);
    const counterList = generateNumberReflexDrill(safeCount);
    const mixed = [];

    for (let i = 0; i < safeCount; i++) {
      const mod = i % 3;
      if (mod === 0 && verbList.length > 0) {
        mixed.push(verbList[i % verbList.length]);
      } else if (mod === 1 && adjList.length > 0) {
        mixed.push(adjList[i % adjList.length]);
      } else if (counterList.length > 0) {
        mixed.push(counterList[i % counterList.length]);
      } else if (verbList.length > 0) {
        mixed.push(verbList[i % verbList.length]);
      }
    }
    return mixed.map((item, idx) => Object.assign({}, item, { id: `master_q_${idx + 1}` }));
  }

  return {
    VERB_FORMS,
    ADJ_FORMS,
    conjugateVerb,
    conjugateAdjective,
    getVerbFormulaDetail,
    getContextualFormula,
    generateConjugationDrill,
    generateAdjectiveDrill,
    generateNumberReflexDrill,
    generateMasterReflexDrill
  };
});
