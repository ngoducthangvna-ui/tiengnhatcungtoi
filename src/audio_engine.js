/**
 * JAPANESE AUDIO SYNTHESIS & EXPRESSIVE PROSODY ENGINE
 * src/audio_engine.js
 * --------------------------------------------------------------------------
 * Động cơ phát âm tiếng Nhật chuẩn cao cấp (Decoupled Logic Layer):
 * 1. Thuật toán làm sạch văn bản phát âm (khử triệt để thẻ <ruby>/<rt> và furigana,
 *    bảo toàn âm đọc chính xác cho số phòng, số đếm và từ viết tắt Latinh).
 * 2. Động cơ điều phối ngữ điệu & ngắt nghỉ sinh học (Contextual Micro-Pauses,
 *    tự động chuyển dấu câu hỏi か。 -> か？ để tạo ngữ điệu vút lên ↗ tự nhiên).
 * 3. Bộ phân tích cảm xúc từng vế câu (Clause Emotion & Prosody Analyzer):
 *    nhận diện 6 sắc thái (question, hesitation, exclamation, greeting_gratitude,
 *    empathy_apology, statement) để điều biến Pitch & Rate mềm mại như người thật.
 */
(function(root) {
  'use strict';

  // Giọng mặc định toàn trang = giọng nhân vật Hội thoại (chị Sato - Nanami Neural)
  const SPEECHGEN_VOICE = 'Nanami';
  const SPEECHGEN_MODEL = 'ja-JP-NanamiNeural';
  const DEFAULT_SPEAKER_ID = 'sato';

  let currentAudio = null;
  let hasUserInteracted = false;
  let cachedJpVoice = null;

  function markUserInteraction() {
    hasUserInteracted = true;
  }
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('click', markUserInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', markUserInteraction, { once: true, passive: true });
  }

  // Ma trận hồ sơ giọng 25 nhân vật (13 mô hình giọng Neural độc lập + biên độ Pitch tự nhiên [0.93 - 1.05])
  const CHARACTER_VOICE_PROFILES = {
    sato:      { gender: 'female', voice: 'ja-JP-NanamiNeural',             speechGenVoice: 'Nanami',    pitch: 1.00, rate: 0.95, voiceHints: /nanami|kyoko|google\s*日本語/i, voiceName: 'Nanami (Nữ công sở chuẩn Tokyo)' },
    karina:    { gender: 'female', voice: 'en-US-EmmaMultilingualNeural',   speechGenVoice: 'Emma',      pitch: 1.18, rate: 1.04, voiceHints: /haruka|sayaka|ayumi|aoi|mayu|emma/i, voiceName: 'Emma (Nữ sinh viên trẻ trung)' },
    maria:     { gender: 'female', voice: 'en-US-AvaMultilingualNeural',    speechGenVoice: 'Ava',       pitch: 0.90, rate: 0.94, voiceHints: /shiori|ava|mizuki/i, voiceName: 'Ava (Nữ đằm thắm, ấm áp)' },
    kimura:    { gender: 'female', voice: 'de-DE-SeraphinaMultilingualNeural', speechGenVoice: 'Seraphina', pitch: 1.04, rate: 0.97, voiceName: 'Seraphina (Nữ phát thanh viên)' },
    suzuki:    { gender: 'female', voice: 'fr-FR-VivienneMultilingualNeural',  speechGenVoice: 'Vivienne',  pitch: 1.03, rate: 0.96, voiceName: 'Vivienne (Nữ đồng nghiệp)' },
    watanabe:  { gender: 'female', voice: 'pt-BR-ThalitaMultilingualNeural',   speechGenVoice: 'Thalita',   pitch: 0.99, rate: 0.95, voiceName: 'Thalita (Nữ thanh lịch)' },
    clerk:     { gender: 'female', voice: 'en-US-EmmaMultilingualNeural',   speechGenVoice: 'Emma',      pitch: 1.05, rate: 0.97, voiceName: 'Emma-Service (Nhân viên quầy)' },
    staff:     { gender: 'female', voice: 'ja-JP-NanamiNeural',             speechGenVoice: 'Nanami',    pitch: 1.03, rate: 0.95, voiceName: 'Nanami-Reception (Lễ tân hướng dẫn)' },
    kanrinin:  { gender: 'female', voice: 'de-DE-SeraphinaMultilingualNeural', speechGenVoice: 'Seraphina', pitch: 0.95, rate: 0.92, voiceName: 'Seraphina-Calm (Quản lý điềm đạm)' },
    barber:    { gender: 'female', voice: 'ja-JP-NanamiNeural',             speechGenVoice: 'Nanami',    pitch: 1.04, rate: 0.97, voiceName: 'Nanami-Stylist (Thợ salon thân thiện)' },
    lee:       { gender: 'female', voice: 'pt-BR-ThalitaMultilingualNeural',   speechGenVoice: 'Thalita',   pitch: 1.00, rate: 0.95, voiceName: 'Thalita-Scholar (Nữ nghiên cứu viên)' },
    yamada:    { gender: 'male',   voice: 'ja-JP-KeitaNeural',              speechGenVoice: 'Keita',     pitch: 0.86, rate: 0.93, voiceHints: /keita|otoya|ichiro/i, voiceName: 'Keita (Nam công sở chuẩn Tokyo)' },
    miller:    { gender: 'male',   voice: 'en-US-BrianMultilingualNeural',  speechGenVoice: 'Brian',     pitch: 1.06, rate: 1.02, voiceHints: /takumi|daichi|naoki|brian/i, voiceName: 'Brian (Nam thanh niên trẻ)' },
    santos:    { gender: 'male',   voice: 'en-US-AndrewMultilingualNeural', speechGenVoice: 'Andrew',    pitch: 0.80, rate: 0.92, voiceHints: /hattori|andrew/i, voiceName: 'Andrew (Nam trầm ấm)' },
    wang:      { gender: 'male',   voice: 'ko-KR-HyunsuMultilingualNeural', speechGenVoice: 'Hyunsu',    pitch: 1.02, rate: 0.95, voiceName: 'Hyunsu (Bác sĩ trẻ điềm tĩnh)' },
    watt:      { gender: 'male',   voice: 'en-AU-WilliamMultilingualNeural', speechGenVoice: 'William',   pitch: 0.94, rate: 0.93, voiceName: 'William (Giáo sư đĩnh đạc)' },
    matsumoto: { gender: 'male',   voice: 'en-AU-WilliamMultilingualNeural', speechGenVoice: 'William',   pitch: 0.93, rate: 0.92, voiceName: 'William-Senior (Trưởng phòng uy nghiêm)' },
    tanaka:    { gender: 'male',   voice: 'ko-KR-HyunsuMultilingualNeural', speechGenVoice: 'Hyunsu',    pitch: 1.01, rate: 0.96, voiceName: 'Hyunsu-Pro (Nam đồng nghiệp)' },
    kobayashi: { gender: 'male',   voice: 'de-DE-FlorianMultilingualNeural', speechGenVoice: 'Florian',   pitch: 0.97, rate: 0.95, voiceName: 'Florian (Nam lịch thiệp)' },
    doctor:    { gender: 'male',   voice: 'de-DE-FlorianMultilingualNeural', speechGenVoice: 'Florian',   pitch: 0.94, rate: 0.93, voiceName: 'Florian-Doctor (Bác sĩ ân cần)' },
    driver:    { gender: 'male',   voice: 'ja-JP-KeitaNeural',              speechGenVoice: 'Keita',     pitch: 0.96, rate: 0.97, voiceName: 'Keita-Driver (Tài xế năng động)' },
    realtor:   { gender: 'male',   voice: 'ja-JP-KeitaNeural',              speechGenVoice: 'Keita',     pitch: 0.98, rate: 0.96, voiceName: 'Keita-Realtor (Chuyên viên tư vấn)' },
    schmidt:   { gender: 'male',   voice: 'de-DE-FlorianMultilingualNeural', speechGenVoice: 'Florian',   pitch: 0.95, rate: 0.94, voiceName: 'Florian-Engineer (Kỹ sư trầm chắc)' },
    gupta:     { gender: 'male',   voice: 'fr-FR-RemyMultilingualNeural',   speechGenVoice: 'Remy',      pitch: 1.03, rate: 0.96, voiceName: 'Remy (Nam nhiệt tình)' },
    thang:     { gender: 'male',   voice: 'it-IT-GiuseppeMultilingualNeural', speechGenVoice: 'Giuseppe',  pitch: 1.05, rate: 0.97, voiceName: 'Giuseppe (Nam kỹ sư trẻ)' }
  };

  // Danh sách 6 nhân vật cốt lõi cho chế độ "Lớp học Minna (Tự động xoay tua đa giọng)"
  const ROTATION_CHARACTERS = ['sato', 'miller', 'karina', 'yamada', 'maria', 'santos'];

  // Mẫu giọng Studio Neural thật (cắt từ Audio Sprite Kaiwa) dùng cho nút "Nghe thử" trong bảng Cài đặt giọng
  const VOICE_PREVIEW_SAMPLES = {
    rotate: { src: 'audio/kaiwa/lesson_1.mp3',  start: 0,    end: 3.41, text: 'みなさん、こんにちは！マイク・ミラーです。' },
    sato:   { src: 'audio/kaiwa/lesson_6.mp3',  start: 2.81, end: 5.06, text: 'あした 友だちと お花見を します。' },
    karina: { src: 'audio/kaiwa/lesson_14.mp3', start: 0,    end: 1.87, text: '梅田まで 行って ください。' },
    maria:  { src: 'audio/kaiwa/lesson_3.mp3',  start: 0,    end: 2.81, text: 'すみません。ワイン売り場は どこですか。' },
    yamada: { src: 'audio/kaiwa/lesson_1.mp3',  start: 3.41, end: 6.41, text: '佐藤さん、こちらは マイク・ミラーさんです。' },
    miller: { src: 'audio/kaiwa/lesson_4.mp3',  start: 2.64, end: 6.6,  text: 'すみません。そちらは 何時から 何時までですか。' },
    santos: { src: 'audio/kaiwa/lesson_2.mp3',  start: 4.54, end: 6.62, text: 'こんにちは。サントスです。' }
  };

  // Bảng ánh xạ phong cách cảm xúc biểu cảm (Neural Expressive Styles) theo từng nhân vật
  const CHARACTER_EXPRESSIVE_STYLES = {
    karina: { style: 'cheerful', styledegree: '1.2' },
    sato:   { style: 'calm',     styledegree: '1.0' },
    maria:  { style: 'calm',     styledegree: '1.0' },
    miller: { style: 'chat',     styledegree: '1.1' },
    yamada: { style: 'chat',     styledegree: '1.1' },
    santos: { style: 'friendly', styledegree: '1.0' }
  };

  function getProsodyRules() {
    if (typeof root !== 'undefined' && root.AUDIO_PROSODY_RULES) return root.AUDIO_PROSODY_RULES;
    if (typeof window !== 'undefined' && window.AUDIO_PROSODY_RULES) return window.AUDIO_PROSODY_RULES;
    if (typeof global !== 'undefined' && global.AUDIO_PROSODY_RULES) return global.AUDIO_PROSODY_RULES;
    if (typeof require === 'function') {
      try {
        return require('../data/audio_prosody_rules.js');
      } catch (e) {}
    }
    return null;
  }

  const AudioEngine = {
    VOICE: SPEECHGEN_VOICE,
    MODEL: SPEECHGEN_MODEL,
    CHARACTER_VOICE_PROFILES,
    VOICE_PREVIEW_SAMPLES,
    ROTATION_CHARACTERS,

    /**
     * Thuật toán phân vai tự động xoay tua (Round-Robin Deterministic Mapping)
     * Xác định nhân vật phát âm dựa trên băm chuỗi văn bản, giúp mỗi từ vựng / câu có một "giáo viên" cố định, sinh động
     */
    getRotatingSpeaker(text) {
      const clean = String(text || '').trim();
      if (!clean) return 'sato';
      let hash = 0;
      for (let i = 0; i < clean.length; i++) {
        hash = ((hash << 5) - hash) + clean.charCodeAt(i);
        hash |= 0;
      }
      const idx = Math.abs(hash) % ROTATION_CHARACTERS.length;
      return ROTATION_CHARACTERS[idx];
    },

    /**
     * Lấy mẫu giọng Studio Neural thật của nhân vật (null nếu không có)
     */
    getVoicePreviewSample(speakerId) {
      const key = String(speakerId || '').toLowerCase().trim();
      return VOICE_PREVIEW_SAMPLES[key] || null;
    },

    /**
     * Truy xuất hồ sơ giọng chuẩn của nhân vật hội thoại theo speakerId hoặc giới tính
     */
    getCharacterVoiceProfile(speakerId, fallbackGender = null) {
      const key = String(speakerId || '').toLowerCase().trim();
      if (key === 'rotate') {
        return CHARACTER_VOICE_PROFILES.sato;
      }
      if (key && CHARACTER_VOICE_PROFILES[key]) {
        return CHARACTER_VOICE_PROFILES[key];
      }
      if (fallbackGender === 'male') {
        return CHARACTER_VOICE_PROFILES.yamada;
      }
      return CHARACTER_VOICE_PROFILES.sato;
    },

    /**
     * Bóc tách và làm sạch văn bản trước khi đưa vào bộ đọc âm thanh.
     * Khử triệt để thẻ Furigana <ruby>漢字<rt>かんじ</rt></ruby> để không đọc lặp 2 lần,
     * đồng thời giữ âm đọc Katakana cho các từ viết tắt Latinh (như IMC -> アイエムシー).
     */
    cleanSpeechText(raw) {
      if (!raw) return '';
      let text = String(raw).trim();

      // Với từ viết tắt chữ cái in hoa (IMC, AKC, CD...) có gắn ruby Katakana, ưu tiên lấy âm Katakana trong <rt>
      text = text.replace(/<ruby[^>]*>\s*([A-Z]{2,})\s*<rt[^>]*>(.*?)<\/rt>\s*<\/ruby>/g, '$2');

      // Với từ nghi vấn đặc biệt <ruby>何<rt>いく</rt></ruby>つ, ưu tiên lấy âm いく trong <rt>
      text = text.replace(/<ruby[^>]*>\s*何\s*<rt[^>]*>(いく)<\/rt>\s*<\/ruby>/g, '$1');

      // Bóc tách thẻ ruby thông thường: chỉ giữ lại kanji gốc
      text = text.replace(/<ruby[^>]*>(.*?)<rt[^>]*>.*?<\/rt><\/ruby>/gi, '$1');
      text = text.replace(/<[^>]+>/g, '');

      // Khử các ghi chú trong ngoặc đơn tiếng Việt: (nghĩa là...)
      text = text.replace(/\([^)]*[a-zA-ZÀ-ỹ][^)]*\)/g, '');
      text = text.replace(/（[^）]*[a-zA-ZÀ-ỹ][^）]*）/g, '');

      // Khử chú thích Hán tự trùng âm đứng ngay sau ngoặc kép như 「たちいりきんし」(立入禁止)
      text = text.replace(/(「[^」]+」)\s*[\(（][一-龯々]+[\)）]/g, '$1');

      // Khử chú thích loại từ của tính từ đuôi な như かんたん（な） hoặc きれい(な)
      text = text.replace(/[\(（]\s*な\s*[\)）]/g, '');

      // Khử ký hiệu tiền tố/hậu tố ngữ pháp ～ hoặc ~ ở đầu/cuối từ vựng (như ～にん, ～さい)
      text = text.replace(/^[～~]+|[～~]+$/g, '');

      // Khử các tiền tố đánh số ví dụ: 1., 2., a., b.
      text = text.replace(/^\s*\d+[\.\、\)]\s*/, '');

      // Khử các khoảng trắng thừa
      text = text.replace(/\s+/g, ' ').trim();
      return text;
    },

    /**
     * Chuẩn hóa phát âm ngữ cảnh cho số phòng, số đếm và ký hiệu đặc biệt (Phonetic Naturalizer)
     */
    naturalizePhonetics(text) {
      if (!text || typeof text !== 'string') return '';
      let s = text;
      const rules = getProsodyRules();
      const replacements = (rules && rules.phoneticContextReplacements) || [
        { pattern: '408の', replacement: 'よんまるはちの' },
        { pattern: '305号室', replacement: 'さんまるごごうしつ' },
        { pattern: '5…0…0…0…0…？', replacement: 'ご、ゼロ、ゼロ、ゼロ、ゼロ？' },
        { pattern: '03-3589-6721', replacement: 'ゼロさんの、さんごはちきゅうの、ろくななにいち' },
        { pattern: '06-6451-8902', replacement: 'ゼロろくの、ろくよんごいちの、はちきゅうゼロに' },
        { pattern: '078-231-5500', replacement: 'ゼロななはちの、にさんいちの、ごごゼロゼロ' },
        { pattern: '1日 休ませて', replacement: 'いちにち やすませて' },
        { pattern: '1日休ませて', replacement: 'いちにちやすませて' },
        { pattern: '何つ目', replacement: 'いくつめ' },
        { pattern: '地下1階', replacement: 'ちかいっかい' },
        { pattern: '1人', replacement: 'ひとり' },
        { pattern: '2人', replacement: 'ふたり' },
        { pattern: '1つ目', replacement: 'ひとつめ' },
        { pattern: '2つ目', replacement: 'ふたつめ' },
        { pattern: '3つ目', replacement: 'みっつめ' }
      ];
      for (let i = 0; i < replacements.length; i++) {
        const item = replacements[i];
        if (item && item.pattern && s.includes(item.pattern)) {
          s = s.split(item.pattern).join(item.replacement);
        }
      }
      return s;
    },

    /**
     * Chọn giọng đọc tiếng Nhật tự nhiên nhất (Ưu tiên giọng Neural / Natural / Google / Kyoko / Otoya)
     * Hỗ trợ phân vai theo giới tính (male/female) và mã nhân vật (speakerId).
     */
    selectBestJapaneseVoice(voices, preferredGender = null, speakerId = null) {
      if (!Array.isArray(voices) || voices.length === 0) return null;
      const profile = speakerId ? AudioEngine.getCharacterVoiceProfile(speakerId, preferredGender) : null;
      const targetGender = preferredGender || (profile && profile.gender) || null;
      const preferredVoiceHint = profile && profile.speechGenVoice ? profile.speechGenVoice.toLowerCase() : '';
      const exactModelHint = profile && profile.voice ? profile.voice.toLowerCase() : '';

      // Chấp nhận cả các giọng tiếng Nhật bản địa (ja-JP) và các giọng Multilingual Neural khớp với nhân vật
      const candidateVoices = voices.filter(v => {
        if (!v || !v.name) return false;
        const lang = String(v.lang || '').toLowerCase();
        const nameLower = String(v.name || '').toLowerCase();
        if (lang === 'ja-jp' || lang === 'ja_jp' || lang.startsWith('ja')) return true;
        if (preferredVoiceHint && nameLower.includes(preferredVoiceHint) && /multilingual|natural|online|neural/i.test(nameLower)) {
          return true;
        }
        return false;
      });
      if (candidateVoices.length === 0) return null;

      const scoreVoice = (v) => {
        const name = String(v.name || '');
        const lower = name.toLowerCase();
        let score = 0;
        if (v.lang === 'ja-JP' || v.lang === 'ja_JP') score += 20;
        if (/natural|online|neural|chirp|leda|wavenet|siri/i.test(name)) score += 60;
        if (/nanami|keita|google\s*日本語|kyoko|otoya|haruka|ichiro|ayumi|sayaka|hattori|daichi|naoki|aoi|mayu|shiori|takumi|brian|andrew|william|hyunsu|florian|remy|giuseppe|emma|ava|seraphina|vivienne|thalita/i.test(name)) score += 35;
        if (v.localService === false) score += 10;

        if (exactModelHint && lower.includes(exactModelHint)) {
          score += 45;
        } else if (preferredVoiceHint && lower.includes(preferredVoiceHint)) {
          score += 38;
        }
        // Ưu tiên sub-voice riêng của nhân vật để 2 nhân vật cùng giới tính không trùng giọng
        if (profile && profile.voiceHints && profile.voiceHints.test(name)) score += 75;

        if (targetGender === 'male') {
          if (/keita|otoya|ichiro|hattori|daichi|naoki|male|takumi|brian|andrew|william|hyunsu|florian|remy|giuseppe/i.test(lower)) score += 25;
          if (/nanami|kyoko|haruka|ayumi|sayaka|aoi|mayu|shiori|female|emma|ava|seraphina|vivienne|thalita/i.test(lower)) score -= 15;
        } else if (targetGender === 'female') {
          if (/nanami|kyoko|haruka|ayumi|sayaka|aoi|mayu|shiori|google\s*日本語|female|mizuki|emma|ava|seraphina|vivienne|thalita/i.test(lower)) score += 25;
          if (/keita|otoya|ichiro|hattori|daichi|naoki|male|brian|andrew|william|hyunsu|florian|remy|giuseppe/i.test(lower)) score -= 15;
        }
        return score;
      };

      return candidateVoices.slice().sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] || candidateVoices[0];
    },

    /**
     * Nhận diện câu hỏi tiếng Nhật (bao gồm câu hỏi nghi vấn có trợ từ か/の và câu hỏi tỉnh lược trong hội thoại)
     * Loại trừ câu phản hồi xác nhận "そうですか。" (À thế à ↘)
     */
    isQuestionClause(clauseText) {
      if (!clauseText) return false;
      const clean = String(clauseText).replace(/<[^>]+>/g, '').replace(/[。、！？\s「」『』（）]/g, '');
      if (!clean) return false;
      if (/？|\?/.test(clauseText)) return true;
      // "そうですか" / "そうなんですか" / "そうだったんですか" khi đứng riêng thường là câu cảm thán xác nhận (hạ hoặc ngang giọng),
      // trừ khi đi kèm từ để hỏi
      if (/^(?:ああ|あ|ええ|はい|えっ|へえ|ほう)?(?:そうですか|そうなんですか|そうだったんですか)$/.test(clean)) {
        return false;
      }
      if (/(?:ですか|ますか|でしょうか|ませんか|ましょうか|ないか|んですか|のですか|ますかね|ですかね|かい|だい)$/.test(clean)) {
        return true;
      }
      if (/(?:だれ|誰|どなた|なに|なん|何|どこ|いつ|どう|どの|どれ|どちら|いくら|いくつ|なぜ|どうして).*か$/.test(clean)) {
        return true;
      }
      if (/(?:行くの|あるの|するの|いいの|なの|行かない)$/.test(clean)) {
        return true;
      }
      return false;
    },

    /**
     * Phân tích cảm xúc & sắc thái ngữ điệu của một câu hoặc mệnh đề hội thoại (Clause Emotion Analyzer)
     * Trả về: 'question' | 'hesitation' | 'exclamation' | 'greeting_gratitude' | 'empathy_apology' | 'statement'
     */
    classifyClauseEmotion(clauseText) {
      if (!clauseText) return 'statement';
      const s = String(clauseText).trim();
      const clean = s.replace(/[。、！？\s]/g, '');

      // 1. Câu ngập ngừng, mở lời dè dặt hoặc từ chối khéo (Kết thúc bằng … hoặc bắt đầu bằng あのう、実は、それが…)
      if (/…|\.\.\./.test(s) || /^(?:あのう|あの|ええと|えーと|うーん|実は|それが|ちょっと都合が|残念ですが)/.test(clean)) {
        return 'hesitation';
      }

      // 2. Câu hỏi / Xác nhận (lên giọng cuối câu ↗)
      if (AudioEngine.isQuestionClause(s)) {
        return 'question';
      }

      // 3. Câu cảm thán / Ngạc nhiên / Vui mừng (chỉ bắt chữ あれ khi đi kèm dấu phẩy/chấm cảm, tránh nhầm với đại từ あれは)
      if (/！|!/.test(s) || /^あれ[、！？]/.test(s) || /^(?:わあ|えっ|へえ|ああよかった|よかった|すごい|ほんとうですか|本当ですか|いいですね)/.test(clean)) {
        return 'exclamation';
      }

      // 4. Lời chào hỏi / Cảm ơn / Đón khách tươi sáng
      if (/(?:おはようございます|こんにちは|こんばんは|はじめまして|初めまして|ありがとうございます|ありがとうございました|いらっしゃいませ|いらっしゃい|どうぞよろしく|いただきます|ごちそうさま)/.test(clean)) {
        return 'greeting_gratitude';
      }

      // 5. Lời xin lỗi / Chia sẻ / Quan tâm ân cần / Đau ốm mệt mỏi
      if (/(?:すみません|申し訳ありません|ごめんなさい|失礼します|お大事に|大変でしたね|大変ですね|残念ですね|残念でした|心配ですね|さびしくなりますね|頭が痛い|せきが出る|疲れました|負けました|困りました)/.test(clean)) {
        return 'empathy_apology';
      }

      return 'statement';
    },

    /**
     * Phân tích cảm xúc đặt trong Ngữ cảnh Cuộc hội thoại (Contextual Dialogue Emotion Analyzer)
     * Kết hợp nội dung câu hiện tại với lượt lời liền trước (prevText) và bối cảnh (sceneType).
     */
    classifyContextualEmotion(clauseText, contextMeta = null) {
      if (!clauseText) return 'statement';
      const s = AudioEngine.cleanSpeechText(clauseText);
      const clean = s.replace(/[。、！？\s「」『』（）]/g, '');
      const baseEmotion = AudioEngine.classifyClauseEmotion(s);

      const rules = getProsodyRules();
      const ctxRules = (rules && rules.contextualSentimentRules) || {};
      const aizuchiRe = ctxRules.contextSensitiveAizuchiPattern ||
        /^(?:ああ|あ|ええ|はい|へえ|ほう|うーん|うん)?(?:そうですか|そうなんですか|そうだったんですか|なるほど|そうですね|ええ|はい|わかりました|かしこまりました)$/;

      const empatheticList = ctxRules.empatheticTriggerKeywords || [
        '痛い', '熱', 'せき', '病気', 'インフルエンザ', '風邪', '疲れ', '大変', '残念',
        '負け', '忘れ', 'なくし', '落とし', '壊れ', '故障', '困り', '心配', 'さびし',
        '無理', '別れ', '死に', '亡くな', '事故', '遅れ', '間違え', 'だめ'
      ];
      const positiveList = ctxRules.positiveTriggerKeywords || [
        '喜び', '喜ん', 'うれしい', '楽し', 'おもしろい', '強くなっ', '上手', 'きれい',
        'すてき', 'おいしい', 'お土産', 'お祝い', 'プレゼント', '合格', '勝った', '勝ち',
        'よかった', '元気', '便利', '親切', '助け', 'ありがとう', 'ぜひ', 'すばらしい'
      ];

      // Nếu là câu phản hồi ngắn (như そうですか。 / ええ。 / なるほど。) và có ngữ cảnh câu trước đó
      if (contextMeta && contextMeta.prevText && (baseEmotion === 'statement' || aizuchiRe.test(clean))) {
        const prevClean = AudioEngine.cleanSpeechText(contextMeta.prevText);
        if (empatheticList.some(kw => prevClean.includes(kw))) {
          return 'empathy_apology';
        }
        if (positiveList.some(kw => prevClean.includes(kw))) {
          return 'greeting_gratitude';
        }
      }

      if (baseEmotion !== 'statement') {
        return baseEmotion;
      }

      // Nhận diện bổ sung các câu đồng thuận ấm áp, khích lệ hoặc hiếu khách trong ngữ cảnh hội thoại
      if (/(?:わたしもそう思います|ぜひ行きましょう|こちらこそ|それはよかったです|お帰りなさい|よくわかりました|喜びますね|ご案内します|ご案内いたします|かしこまりました|お召し上がりください|お先にどうぞ|はいどうぞ|ええどうぞ|とても便利|使いやすい|おいしそう|いいにおい|すてきな|いいですね)/.test(clean)) {
        return 'greeting_gratitude';
      }

      if (empatheticList.some(kw => clean.includes(kw))) {
        return 'empathy_apology';
      }

      return 'statement';
    },

    /**
     * Tách một câu hội thoại thành các mệnh đề diễn xuất vi mô (Micro-Acted Sub-clauses)
     * Ví dụ: "わあ、すごい人ですね。" -> ["わあ、" (exclamation, nghỉ 168ms), "すごい人ですね。" (exclamation)]
     *        "そうですね。静かで、駅から近いところがいいんですが。" -> ["そうですね。" (hesitation, nghỉ 240ms), ...]
     */
    splitExpressiveSubClauses(rawText, contextMeta = null) {
      if (!rawText) return [];
      const clean = AudioEngine.cleanSpeechText(rawText);
      const naturalized = AudioEngine.naturalizePhonetics(clean);
      const paced = AudioEngine.prepareProsodyPacedJapaneseSpeech(naturalized);
      if (!paced) return [];

      const rules = getProsodyRules();
      const emotionMap = (rules && rules.emotionProsodyProfiles) || {};
      const pauseTiming = (rules && rules.pauseTimingMs) || {};

      // Nếu câu bắt đầu bằng "そうですね。" hoặc "あのう。" (có dấu chấm câu ngay sau từ suy nghĩ)
      // thì gộp thành mảng câu nhưng nhận diện đúng opener ngập ngừng
      const rawSentences = paced.match(/[^。！？]+[。！？]?/g) || [paced];
      const subClauses = [];

      for (let i = 0; i < rawSentences.length; i++) {
        const sent = rawSentences[i].trim();
        if (!sent) continue;
        const sentClean = sent.replace(/[。、！？\s]/g, '');

        // Trường hợp câu đơn đầu tiên chỉ là cụm suy nghĩ/ngập ngừng ngắn: "そうですね。" / "あのう。" / "うーん。"
        if (i === 0 && rawSentences.length > 1 && /^(?:そうですね|あのう|あの|ええと|えーと|うーん|実は)$/.test(sentClean)) {
          const prof = emotionMap.hesitation || {};
          subClauses.push({
            text: sent,
            emotion: 'hesitation',
            pitchDeltaHz: prof.pitchDeltaHz !== undefined ? prof.pitchDeltaHz : -8,
            rateDeltaPct: prof.rateDeltaPct !== undefined ? prof.rateDeltaPct : -13,
            volumeDeltaPct: prof.volumeDeltaPct !== undefined ? prof.volumeDeltaPct : -5,
            pauseAfterMs: pauseTiming.intraClauseHesitation || 240
          });
          continue;
        }

        // Trường hợp đầu câu có thán từ cảm thán: "わあ、すごい人ですね。" / "あ、どうも。" / "えっ、ほんとうですか？"
        const exclamOpener = sent.match(/^(わあ、|えっ、|あれ、|へえ、|まあ、|あ、|ああ、)(.+)$/);
        if (exclamOpener && exclamOpener[2].trim().length >= 2) {
          const opProf = emotionMap.exclamation || {};
          subClauses.push({
            text: exclamOpener[1],
            emotion: 'exclamation',
            pitchDeltaHz: (opProf.pitchDeltaHz || 14) + 2,
            rateDeltaPct: opProf.rateDeltaPct || 6,
            volumeDeltaPct: opProf.volumeDeltaPct || 8,
            pauseAfterMs: pauseTiming.intraClauseShort || 168
          });
          const restText = exclamOpener[2].trim();
          const restEmo = AudioEngine.classifyContextualEmotion(restText, contextMeta);
          const restProf = emotionMap[restEmo] || {};
          subClauses.push({
            text: restText,
            emotion: restEmo,
            pitchDeltaHz: restProf.pitchDeltaHz || 0,
            rateDeltaPct: restProf.rateDeltaPct || 0,
            volumeDeltaPct: restProf.volumeDeltaPct || 0,
            pauseAfterMs: pauseTiming.intraSentenceBreak || 264
          });
          continue;
        }

        // Trường hợp đầu câu có từ đệm ngập ngừng: "あのう、これ、ほんの気持ちです。" / "そうですね、きょうは..."
        const hesitOpener = sent.match(/^(あのう、|あの、|ええと、|えーと、|うーん、|そうですね、|実は、|それが、|すみません、|失礼ですが、)(.+)$/);
        if (hesitOpener && hesitOpener[2].trim().length >= 3) {
          const opProf = emotionMap.hesitation || {};
          subClauses.push({
            text: hesitOpener[1],
            emotion: 'hesitation',
            pitchDeltaHz: opProf.pitchDeltaHz !== undefined ? opProf.pitchDeltaHz : -8,
            rateDeltaPct: opProf.rateDeltaPct !== undefined ? opProf.rateDeltaPct : -13,
            volumeDeltaPct: opProf.volumeDeltaPct !== undefined ? opProf.volumeDeltaPct : -5,
            pauseAfterMs: pauseTiming.intraClauseHesitation || 240
          });
          const restText = hesitOpener[2].trim();
          const restEmo = AudioEngine.classifyContextualEmotion(restText, contextMeta);
          const restProf = emotionMap[restEmo] || {};
          subClauses.push({
            text: restText,
            emotion: restEmo,
            pitchDeltaHz: restProf.pitchDeltaHz || 0,
            rateDeltaPct: restProf.rateDeltaPct || 0,
            volumeDeltaPct: restProf.volumeDeltaPct || 0,
            pauseAfterMs: pauseTiming.intraSentenceBreak || 264
          });
          continue;
        }

        const emo = AudioEngine.classifyContextualEmotion(sent, contextMeta);
        const prof = emotionMap[emo] || {};
        subClauses.push({
          text: sent,
          emotion: emo,
          pitchDeltaHz: prof.pitchDeltaHz || 0,
          rateDeltaPct: prof.rateDeltaPct || 0,
          volumeDeltaPct: prof.volumeDeltaPct || 0,
          pauseAfterMs: pauseTiming.intraSentenceBreak || 264
        });
      }

      if (subClauses.length > 0) {
        subClauses[subClauses.length - 1].pauseAfterMs = 0;
      }
      return subClauses;
    },

    /**
     * Tính toán hệ số điều chỉnh Pitch & Rate cho câu hội thoại dựa trên hồ sơ nhân vật + cảm xúc ngữ cảnh
     */
    computeExpressiveProsody(text, speakerId = DEFAULT_SPEAKER_ID, slowAudio = false, contextMeta = null) {
      const profile = AudioEngine.getCharacterVoiceProfile(speakerId);
      const emotionKey = contextMeta
        ? AudioEngine.classifyContextualEmotion(text, contextMeta)
        : AudioEngine.classifyClauseEmotion(text);
      const rules = getProsodyRules();
      const emotionMap = (rules && rules.emotionProsodyProfiles) || {};
      const emo = emotionMap[emotionKey] || { webPitchFactor: 1.0, webRateFactor: 1.0, pitchDeltaHz: 0, rateDeltaPct: 0, volumeDeltaPct: 0 };

      const baseRate = slowAudio ? 0.78 : (profile.rate || 0.96);
      const basePitch = profile.pitch || 1.0;

      const finalRate = Math.max(0.70, Math.min(1.18, Number((baseRate * (emo.webRateFactor || 1.0)).toFixed(3))));
      const finalPitch = Math.max(0.72, Math.min(1.28, Number((basePitch * (emo.webPitchFactor || 1.0)).toFixed(3))));

      return {
        emotion: emotionKey,
        rate: finalRate,
        pitch: finalPitch,
        pitchDeltaHz: emo.pitchDeltaHz || 0,
        rateDeltaPct: emo.rateDeltaPct || 0,
        volumeDeltaPct: emo.volumeDeltaPct || 0
      };
    },

    /**
     * Bổ sung các điểm ngắt nghỉ tự nhiên (Prosody Pause Engine),
     * chuyển dấu chấm ở câu nghi vấn (か。 -> か？) để kích hoạt ngữ điệu hỏi ↗,
     * và loại bỏ khoảng trắng sách giáo khoa giữa các từ tiếng Nhật để tránh đứt gãy ngữ điệu.
     */
    prepareProsodyPacedJapaneseSpeech(rawText) {
      if (!rawText || typeof rawText !== 'string') return '';
      let str = rawText.trim();

      // Chuẩn hóa dấu câu half-width sang full-width tiếng Nhật
      str = str.replace(/,/g, '、')
               .replace(/\.(?!\d)/g, '。')
               .replace(/\?/g, '？')
               .replace(/!/g, '！');

      str = str.replace(/([、。！？])\s+/g, '$1')
               .replace(/\s+([、。！？])/g, '$1');

      const rawClean = str.replace(/[、。！？\s]/g, '');
      const isQuestion = AudioEngine.isQuestionClause(str);
      const hasMultipleClauses = /[ぁ-んァ-ヶ一-龥]+(?:は|が|を|に|で|へ|と|も)\s*[ぁ-んァ-ヶ一-龥]+/.test(str);
      const hasSpaces = /\s/.test(str);

      if (rawClean.length <= 6 && !isQuestion && !hasMultipleClauses && !hasSpaces && !/[、。！？]/.test(str)) {
        return str;
      }

      // 1. Thán từ / Liên từ đầu câu (lấy từ data/audio_prosody_rules.js)
      const discourseWords = (typeof window !== 'undefined' && window.DISCOURSE_PAUSE_WORDS)
        || (typeof global !== 'undefined' && global.DISCOURSE_PAUSE_WORDS)
        || ['そして', 'それから', 'それに', 'ですから', 'しかし', 'でも', 'では', 'はい', 'いいえ', 'すみません', 'あのう', 'あ', 'ええ'];

      const sortedDiscourse = discourseWords.slice().sort((a, b) => b.length - a.length);
      const discoursePattern = new RegExp(
        `(^|[。！？\\n])\\s*(${sortedDiscourse.join('|')})(?:\\s+|(?=[ぁ-んァ-ヶ一-龥A-Za-z0-9]))(?![、。！？…』」）\\)]|$)`,
        'g'
      );
      str = str.replace(discoursePattern, (match, prefix, word, offset, fullStr) => {
        // Tránh chèn dấu phẩy vào giữa từ đơn bắt đầu bằng あ/ええ (như あした, あそこ, あまり, ありがとう, ええと)
        const afterIdx = offset + match.length;
        const nextChar = String(fullStr || '').slice(afterIdx, afterIdx + 4);
        if ((word === 'あ' || word === 'ええ' || word === 'うん') && !/\s/.test(match.slice(prefix.length + word.length))) {
          return match;
        }
        if (word === 'あの' && /^(?:人|方|う|子|本|店|ビル|信号|花屋|緑)/.test(nextChar)) {
          return match;
        }
        return `${prefix}${word}、`;
      });

      // 2. Mệnh đề điều kiện (たら, なら, えば)
      str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(たら|だら)(?!(?:[、。！？』」）\\)]|$))(?=\s*[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
      str = str.replace(/(?!さようなら|さよなら)([ぁ-んァ-ヶ一-龥]{2,})(なら)(?!(?:[、。！？』」）\\)]|$))(?=\s*[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]+)(えば|けば|せば|てば|ねば|べば|めば|れば)(?!(?:[、。！？』」）\\)]|$))(?=\s*[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');

      // 3. Mệnh đề chỉ lý do & nhượng bộ (から, ので, のに, ですが, ますが, ても, でも, けど, けれど)
      str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ます|ません|です|ました|でした|だ|た|ない|る|い|かった))から(?!(?:です|だ|ね|よ|[、。！？』」）\\)]|$))(?=\s*[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1から、');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})ので(?!(?:す|だ|[、。！？』」）\\)]|$))(?=\s*[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1ので、');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})のに(?!(?:[、。！？』」）\\)]|$))(?=\s*[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1のに、');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(ても|でも)(?!(?:[、。！？』」）\\)]|$))(?=\s*[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]+)(けど|けれど|けれども)(?!(?:[、。！？』」）\\)]|$))(?=\s*[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1$2、');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ですが|ますが|でしたが|ましたが))(?!(?:[、。！？…』」）\\)]|$))(?=\s*[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, '$1、');

      // 3b. Chèn dấu ngắt nghỉ '、' sau trợ từ chỉ chủ đề 'は' trong các câu văn dài đa mệnh đề
      // để trình duyệt ngắt hơi tự nhiên khi phát âm offline qua Web Speech.
      // BẤT BIẾN TƯƠNG THÍCH NGƯỢC: Tuyệt đối KHÔNG chèn '、' vào câu ngắn đơn giản (như お国はどちらですか？, わたしはがくせいですか？)
      if (rawClean.length >= 18 && !isQuestion) {
        str = str.replace(/(?<=[一-龯々]|[ぁ-んァ-ヶ]{2,})は(?!(?:い|は|ず|な|し|たら|ち|る|じ|こ|つ|っ|ん|れ|[、。！？…』」）\)]|$))(?=\s*[ぁ-んァ-ヶ一-龥A-Za-z0-9])/g, 'は、');
      }

      // 4. Khử khoảng trắng sách giáo khoa giữa các ký tự tiếng Nhật để câu đọc liền mạch tự nhiên
      str = str.replace(/([ぁ-んァ-ヶー一-龯々。、！？「」『』（）])\s+(?=[ぁ-んァ-ヶー一-龯々0-9A-Za-z「『（])/g, '$1');
      str = str.replace(/([0-9A-Za-z])\s+(?=[ぁ-んァ-ヶー一-龯々])/g, '$1');

      // 5. Tự động chuyển dấu chấm tròn (。) ở cuối các mệnh đề câu hỏi thực sự sang dấu hỏi (？)
      // để bộ tổng hợp giọng nói nâng cao độ cuối câu (↗) tự nhiên như người Nhật
      str = str.replace(/([^。！？]+)。/g, (fullClause, body) => {
        if (AudioEngine.isQuestionClause(body)) {
          return body + '？';
        }
        return fullClause;
      });

      // 6. Dấu kết thúc câu
      if (!/[。！？…]$/.test(str)) {
        str += isQuestion ? '？' : '。';
      }

      // Dọn dẹp dấu câu trùng lặp
      str = str.replace(/、+/g, '、')
               .replace(/、([。！？])/g, '$1')
               .trim();

      return str;
    },

    /**
     * Chuẩn hóa toàn diện văn bản tiếng Nhật theo chuẩn Kaiwa (4-Phase Unified Prosody Pipeline):
     * - Phase 1: Guard Clauses (kiểm tra rỗng)
     * - Phase 2: Data Normalization (cleanSpeechText + naturalizePhonetics)
     * - Phase 3: Pure Prosody & Pacing (prepareProsodyPacedJapaneseSpeech - xóa khoảng trắng SGK, đổi か。 -> か？)
     * - Phase 4: Return chuỗi sẵn sàng đưa vào bộ tổng hợp giọng nói
     */
    buildNaturalSpeechText(rawText) {
      if (!rawText) return '';
      const clean = AudioEngine.cleanSpeechText(rawText);
      if (!clean) return '';
      const naturalized = AudioEngine.naturalizePhonetics(clean);
      return AudioEngine.prepareProsodyPacedJapaneseSpeech(naturalized);
    },

    /**
     * Alias chuẩn hóa ngữ điệu cho toàn bộ các phân hệ (Từ vựng, Ngữ pháp, Bài tập, Đọc hiểu, Master Suite)
     */
    applyProsody(rawText) {
      return AudioEngine.buildNaturalSpeechText(rawText);
    },

    /**
     * Định dạng phần thân SSML biểu cảm (Pure Functional Prosody Core):
     * - Chèn ngắt lấy hơi ngắn 160ms (<break time="160ms"/>) sau trợ từ chỉ chủ đề/chủ ngữ (は, が).
     * - Chèn ngắt vế 260ms (<break time="260ms"/>) sau liên từ & mệnh đề (から, ので, たら, ても, けど, 、).
     * - Uốn cong ngữ điệu câu hỏi (+18% pitch) ở âm tiết nghi vấn cuối cùng (<prosody pitch="+18%">か？</prosody>).
     * - Phòng thủ tuyệt đối chống ngắt nhầm từ ghép (はい, はは, めがね, てがみ, がくせい...).
     */
    formatExpressiveSSMLBody(naturalizedText) {
      if (!naturalizedText || typeof naturalizedText !== 'string') return '';
      const isQuestion = AudioEngine.isQuestionClause(naturalizedText);
      let str = naturalizedText.trim();

      // Chuẩn hóa dấu câu half-width sang full-width
      str = str.replace(/,/g, '、')
               .replace(/\.(?!\d)/g, '。')
               .replace(/\?/g, '？')
               .replace(/!/g, '！');

      // Khử khoảng trắng SGK giữa các ký tự tiếng Nhật
      str = str.replace(/([ぁ-んァ-ヶー一-龯々。、！？「」『』（）])\s+(?=[ぁ-んァ-ヶー一-龯々0-9A-Za-z「『（])/g, '$1')
               .replace(/([0-9A-Za-z])\s+(?=[ぁ-んァ-ヶー一-龯々])/g, '$1');

      // Escape an toàn ký tự XML đặc biệt
      str = str.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
               .replace(/"/g, '&quot;');

      // 1. Liên từ / Thán từ dẫn nhập đầu câu (260ms)
      str = str.replace(/(^|[。！？\n])\s*(そして|それから|それに|ですから|だから|しかし|でも|では)(?!(?:[、。！？…』」）\)]|<break|$))/g, '$1$2<break time="260ms"/>');

      // 2. Mệnh đề nguyên nhân, điều kiện, nhượng bộ (260ms)
      str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ます|ません|です|ました|でした|だ|た|ない|る|い|かった))から(?!(?:です|だ|ね|よ|[、。！？』」）\)]|<break|$))/g, '$1から<break time="260ms"/>');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})ので(?!(?:す|だ|[、。！？』」）\)]|<break|$))/g, '$1ので<break time="260ms"/>');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(たら|だら)(?!(?:[、。！？』」）\)]|<break|$))/g, '$1$2<break time="260ms"/>');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]{2,})(ても|でも)(?!(?:[、。！？』」）\)]|<break|$))/g, '$1$2<break time="260ms"/>');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]+)(けど|けれど|けれども)(?!(?:[、。！？』」）\)]|<break|$))/g, '$1$2<break time="260ms"/>');
      str = str.replace(/([ぁ-んァ-ヶ一-龥]+(?:ですが|ますが|でしたが|ましたが))(?!(?:[、。！？…』」）\)]|<break|$))/g, '$1<break time="260ms"/>');

      // 3. Dấu phẩy '、' bổ sung ngắt nghỉ 260ms
      str = str.replace(/、(?!\s*<break)/g, '、<break time="260ms"/>');

      // 4. Trợ từ chủ đề 'は' & chủ ngữ 'が' (160ms breath pause)
      // Negative lookahead/lookbehind chống ngắt nhầm từ ghép (はい, はは, はじめまして, めがね, てがみ, がくせい...)
      str = str.replace(/(?<=[一-龯々]|[ぁ-んァ-ヶ]{2,})は(?!(?:い|は|ず|な|し|たら|ち|る|じ|こ|つ|っ|ん|れ|[、。！？…』」）\)]|<break|$))/g, 'は<break time="160ms"/>');
      str = str.replace(/(?<=[一-龯々]|[ぁ-んァ-ヶ]{2,})が(?!(?:っ|く|ね|み|ら|り|る|ん|な|い|つ|が|わ|き|を|に|で|と|の|は|も|へ|[、。！？…』」）\)]|<break|$))/g, 'が<break time="160ms"/>');

      // 5. Gom gọn các thẻ break lân cận
      str = str.replace(/(?:<break time="[^"]*"\/>\s*)+/g, (match) => match.includes('260ms') ? '<break time="260ms"/>' : '<break time="160ms"/>');

      // 6. Ngữ điệu câu hỏi: Âm tiết nghi vấn cuối cùng nâng cao độ +18%
      if (isQuestion) {
        if (/か[。？\?]?$/.test(str)) {
          str = str.replace(/か[。？\?]?$/, '<prosody pitch="+18%">か？</prosody>');
        } else if (/[。！？]$/.test(str)) {
          str = str.replace(/。$/, '？');
        } else {
          str += '？';
        }
      } else if (!/[。！？…]$/.test(str)) {
        str += '。';
      }

      // Xóa break nằm ngay trước dấu kết câu
      str = str.replace(/<break time="[^"]*"\/>(?=[。！？])/g, '').trim();

      return str;
    },

    /**
     * Tạo chuỗi SSML biểu cảm hoàn chỉnh chuẩn Azure / Edge Neural TTS (4-Phase Linear Function Anatomy):
     * - Phase 1: Guard Clauses & Fail-Fast (rỗng, không phải chuỗi -> return '')
     * - Phase 2: Data Normalization (Phân giải nhân vật, hồ sơ giọng, phong cách cảm xúc, clean + naturalize)
     * - Phase 3: Pure Prosody Core (Bunsetsu Phrasing & Question Pitch Contour)
     * - Phase 4: Imperative Shell (Đóng gói thẻ XML <speak> <voice> <mstts:express-as> <prosody>)
     */
    buildExpressiveSSML(text, speakerId, speed, pitch) {
      // Phase 1: Guard Clauses & Fail-Fast
      if (!text || typeof text !== 'string' || !text.trim()) {
        return '';
      }

      // Phase 2: Data Normalization
      let resolvedSpeaker = speakerId || 'sato';
      if (resolvedSpeaker === 'rotate') {
        resolvedSpeaker = (typeof AudioEngine.getRotatingSpeaker === 'function')
          ? AudioEngine.getRotatingSpeaker(text)
          : 'sato';
      }
      const profile = AudioEngine.getCharacterVoiceProfile(resolvedSpeaker) || AudioEngine.getCharacterVoiceProfile('sato');
      const voiceName = (profile && profile.voice) || 'ja-JP-NanamiNeural';
      const styleObj = CHARACTER_EXPRESSIVE_STYLES[resolvedSpeaker] || { style: 'chat', styledegree: '1.0' };

      const clean = AudioEngine.cleanSpeechText(text);
      if (!clean) return '';
      const naturalized = AudioEngine.naturalizePhonetics(clean);

      // Phase 3: Pure Prosody Core
      const ssmlBody = AudioEngine.formatExpressiveSSMLBody(naturalized);

      const rateVal = (speed !== undefined && speed !== null) ? speed : ((profile && profile.rate) || 0.96);
      const ratePercent = Math.round((rateVal - 1.0) * 100);
      const rateStr = ratePercent >= 0 ? `+${ratePercent}%` : `${ratePercent}%`;

      const pitchVal = (pitch !== undefined && pitch !== null) ? pitch : ((profile && profile.pitch) || 1.0);
      const pitchPercent = Math.round((pitchVal - 1.0) * 100);
      const pitchStr = pitchPercent >= 0 ? `+${pitchPercent}%` : `${pitchPercent}%`;

      // Phase 4: Imperative Shell (XML Assembly)
      return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xml:lang="ja-JP">` +
        `<voice name="${voiceName}">` +
        `<mstts:express-as style="${styleObj.style}" styledegree="${styleObj.styledegree}">` +
        `<prosody rate="${rateStr}" pitch="${pitchStr}">` +
        ssmlBody +
        `</prosody>` +
        `</mstts:express-as>` +
        `</voice>` +
        `</speak>`;
    },

    /**
     * Phát âm tiếng Nhật với cơ chế điều biến ngữ điệu cảm xúc & fallback trực tiếp
     */
    speakJapanese(text, onEnd = null, event = null, speakerId = DEFAULT_SPEAKER_ID) {
      if (!text) return;
      const clean = AudioEngine.cleanSpeechText(text);
      if (!clean) return;

      const naturalized = AudioEngine.naturalizePhonetics(clean);
      const paced = AudioEngine.prepareProsodyPacedJapaneseSpeech(naturalized);

      // Đồng bộ ngắt toàn diện trước khi phát
      if (typeof root.stopAllSpeechAudio === 'function') {
        try { root.stopAllSpeechAudio(); } catch (e) {}
      } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }

      // Thử phát qua Web Speech API trước nếu có giọng tiếng Nhật
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        try {
          const utter = new SpeechSynthesisUtterance(paced);
          const profile = AudioEngine.getCharacterVoiceProfile(speakerId || DEFAULT_SPEAKER_ID);
          const prosody = AudioEngine.computeExpressiveProsody(paced, speakerId || DEFAULT_SPEAKER_ID, false);
          utter.lang = 'ja-JP';
          utter.rate = prosody.rate;
          utter.pitch = prosody.pitch;
          if (onEnd) utter.onend = onEnd;

          utter.onerror = function(err) {
            const errCode = (err && err.error) || '';
            if (errCode === 'interrupted' || errCode === 'canceled') {
              if (onEnd) onEnd();
              return;
            }
            if (onEnd) onEnd();
          };

          const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
          const jpVoice = AudioEngine.selectBestJapaneseVoice(voices, profile.gender, speakerId || DEFAULT_SPEAKER_ID);
          if (jpVoice) {
            utter.voice = jpVoice;
          }

          // Micro-delay an toàn cho Safari WebKit & Android
          setTimeout(function() {
            try {
              if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
              }
              window.speechSynthesis.speak(utter);
            } catch (err) {
              if (onEnd) onEnd();
            }
          }, 16);
          return;
        } catch (e) {
          console.warn('[AudioEngine] Web Speech API không khả dụng, chuyển sang chế độ dự phòng:', e);
        }
      }

      if (onEnd) {
        setTimeout(onEnd, 1200);
      }
    }
  };

  AudioEngine.CHARACTER_EXPRESSIVE_STYLES = CHARACTER_EXPRESSIVE_STYLES;

  // Bảo đảm tương thích toàn cầu
  if (typeof window !== 'undefined') window.AudioEngine = AudioEngine;
  if (typeof global !== 'undefined') global.AudioEngine = AudioEngine;
  if (typeof module !== 'undefined' && module.exports) module.exports = AudioEngine;
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
