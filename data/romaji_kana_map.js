/**
 * BẢNG ÁNH XẠ CHUYỂN ĐỔI KÝ TỰ LA-TINH SANG CHỮ THUẦN NHẬT (ROMAJI TO HIRAGANA MAP)
 * data/romaji_kana_map.js
 * --------------------------------------------------------------------------
 * Bao quát 100% nguyên âm, phụ âm, âm ghép (Youon), âm đục (Dakuon),
 * âm bán đục (Handakuon) và quy tắc gõ tắt.
 */
(function(root) {
  'use strict';

  const ROMAJI_TO_HIRAGANA_MAP = {
    kya: 'きゃ', kyu: 'きゅ', kyo: 'きょ',
    sha: 'しゃ', shu: 'しゅ', sho: 'しょ',
    cha: 'ちゃ', chu: 'ちゅ', cho: 'ちょ',
    nya: 'にゃ', nyu: 'にゅ', nyo: 'にょ',
    hya: 'ひゃ', hyu: 'ひゅ', hyo: 'ひょ',
    mya: 'みゃ', myu: 'みゅ', myo: 'みょ',
    rya: 'りゃ', ryu: 'りゅ', ryo: 'りょ',
    gya: 'ぎゃ', gyu: 'ぎゅ', gyo: 'ぎょ',
    ja: 'じゃ', ju: 'じゅ', jo: 'じょ',
    bya: 'びゃ', byu: 'びゅ', byo: 'びょ',
    pya: 'ぴゃ', pyu: 'ぴゅ', pyo: 'ぴょ',
    tsu: 'つ', shi: 'し', chi: 'ち',
    ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ',
    sa: 'さ', si: 'し', su: 'す', se: 'せ', so: 'そ',
    ta: 'た', ti: 'ち', tu: 'つ', te: 'て', to: 'と',
    na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の',
    ha: 'は', hi: 'ひ', fu: 'ふ', hu: 'ふ', he: 'へ', ho: 'ほ',
    ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も',
    ya: 'や', yu: 'ゆ', yo: 'よ',
    ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ',
    wa: 'わ', wo: 'を', nn: 'ん',
    ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご',
    za: 'ざ', zi: 'じ', ji: 'じ', zu: 'ず', ze: 'ぜ', zo: 'ぞ',
    da: 'だ', di: 'ぢ', du: 'づ', de: 'で', do: 'ど',
    ba: 'ば', bi: 'び', bu: 'ぶ', be: 'べ', bo: 'ぼ',
    pa: 'ぱ', pi: 'ぴ', pu: 'ぷ', pe: 'ぺ', po: 'ぽ',
    a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お'
  };

  // Bảo đảm tương thích toàn cầu
  if (typeof window !== 'undefined') window.ROMAJI_TO_HIRAGANA_MAP = ROMAJI_TO_HIRAGANA_MAP;
  if (typeof global !== 'undefined') global.ROMAJI_TO_HIRAGANA_MAP = ROMAJI_TO_HIRAGANA_MAP;
  if (typeof module !== 'undefined' && module.exports) module.exports = ROMAJI_TO_HIRAGANA_MAP;
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
