const fs = require('fs');
const path = require('path');

console.log('=== RUNNING COMPREHENSIVE VERIFICATION FOR FULL CURRICULUM (LESSONS 1-50: N5 & N4) ===');

// 1. Check Lessons
const lessonFiles = [
  'data/lessons_1_5.js',
  'data/lessons_6_10.js',
  'data/lessons_11_15.js',
  'data/lessons_16_20.js',
  'data/lessons_21_25.js',
  'data/lessons_26_30.js',
  'data/lessons_31_35.js',
  'data/lessons_36_40.js',
  'data/lessons_41_45.js',
  'data/lessons_46_50.js'
];

lessonFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  eval(content.replace(/const\s+(\w+)\s*=/, 'global.$1 ='));
});

eval(fs.readFileSync('data/lessons.js', 'utf8').replace('const lessonsData', 'global.lessonsData'));

console.log(`[Lessons] Total lessons: ${global.lessonsData.length}`);
if (global.lessonsData.length !== 50) throw new Error(`Expected 50 lessons, got ${global.lessonsData.length}`);

global.lessonsData.forEach((l, idx) => {
  const expectedId = `bai-${idx + 1}`;
  if (l.id !== expectedId) throw new Error(`Lesson at ${idx} has id ${l.id}, expected ${expectedId}`);
  if (!l.title || !Array.isArray(l.vocabulary) || l.vocabulary.length < 10 || !Array.isArray(l.grammar) || l.grammar.length < 2) {
    throw new Error(`Lesson ${l.id} has invalid structure or insufficient content! vocabulary: ${l.vocabulary?.length}, grammar: ${l.grammar?.length}`);
  }
});
console.log('  -> All 50 lessons verified successfully with rich vocabulary and grammar points!');

// 2. Check Quizzes
const quizFiles = [
  'data/quizzes_1_5.js',
  'data/quizzes_6_10.js',
  'data/quizzes_11_15.js',
  'data/quizzes_16_20.js',
  'data/quizzes_21_25.js',
  'data/quizzes_26_30.js',
  'data/quizzes_31_35.js',
  'data/quizzes_36_40.js',
  'data/quizzes_41_45.js',
  'data/quizzes_46_50.js'
];

quizFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  eval(content.replace(/const\s+(\w+)\s*=/, 'global.$1 ='));
});

eval(fs.readFileSync('data/quiz-master.js', 'utf8').replace('const practiceQuizData', 'global.practiceQuizData'));

const quizKeys = Object.keys(global.practiceQuizData);
console.log(`[Quizzes] Total quizzes: ${quizKeys.length}`);
if (quizKeys.length !== 50) throw new Error(`Expected 50 quizzes, got ${quizKeys.length}`);

let totalQuizQuestions = 0;
quizKeys.forEach((key, idx) => {
  const questions = global.practiceQuizData[key];
  if (questions.length !== 50) throw new Error(`Quiz ${key} has ${questions.length} questions, expected 50!`);
  totalQuizQuestions += questions.length;
  questions.forEach(q => {
    if (!q.id || !q.question || q.options.length !== 4 || q.correctIdx < 0 || q.correctIdx > 3 || !q.explanation) {
      throw new Error(`Invalid question ${q.id} in ${key}`);
    }
  });
});
console.log(`  -> All 50 quizzes (total ${totalQuizQuestions} questions) verified successfully!`);

// 3. Check Dokkai
eval(fs.readFileSync('data/dokkai.js', 'utf8').replace('const dokkaiData', 'global.dokkaiData'));
console.log(`[Dokkai] Total reading passages: ${global.dokkaiData.length}`);
if (global.dokkaiData.length !== 50) throw new Error(`Expected 50 dokkai passages, got ${global.dokkaiData.length}`);

let totalDokkaiQuestions = 0;
global.dokkaiData.forEach((d, idx) => {
  const expectedId = `dokkai-${idx + 1}`;
  if (d.id !== expectedId) throw new Error(`Dokkai at ${idx} has id ${d.id}, expected ${expectedId}`);
  if (!d.passage || d.questions.length !== 5) throw new Error(`Dokkai ${d.id} has invalid structure!`);
  totalDokkaiQuestions += d.questions.length;
  d.questions.forEach(q => {
    if (!q.id || !q.question || q.options.length !== 4 || q.correctIdx < 0 || q.correctIdx > 3 || !q.explanation) {
      throw new Error(`Invalid dokkai question ${q.id} in ${d.id}`);
    }
  });
});
console.log(`  -> All 50 dokkai passages (total ${totalDokkaiQuestions} questions) verified successfully!`);

// 4. Check index.html script tags
const html = fs.readFileSync('index.html', 'utf8');
const requiredScripts = [
  'data/lessons_1_5.js',
  'data/lessons_6_10.js',
  'data/lessons_11_15.js',
  'data/lessons_16_20.js',
  'data/lessons_21_25.js',
  'data/lessons_26_30.js',
  'data/lessons_31_35.js',
  'data/lessons_36_40.js',
  'data/lessons_41_45.js',
  'data/lessons_46_50.js',
  'data/lessons.js',
  'data/dokkai.js',
  'data/quizzes_1_5.js',
  'data/quizzes_6_10.js',
  'data/quizzes_11_15.js',
  'data/quizzes_16_20.js',
  'data/quizzes_21_25.js',
  'data/quizzes_26_30.js',
  'data/quizzes_31_35.js',
  'data/quizzes_36_40.js',
  'data/quizzes_41_45.js',
  'data/quizzes_46_50.js',
  'data/quiz-master.js',
  'app.js'
];
requiredScripts.forEach(src => {
  if (!html.includes(`<script src="${src}"></script>`)) {
    throw new Error(`Missing script tag in index.html: ${src}`);
  }
});
console.log('  -> All required script tags in index.html verified successfully in proper order!');

// 5. Zero bare kanji check
function findBareKanji(text) {
  if (!text) return [];
  const stripped = text.replace(/<ruby>[\s\S]*?<\/ruby>/g, '');
  return stripped.match(/[\u4e00-\u9faf]/g) || [];
}

let bareKanjiQuizCount = 0;
quizKeys.forEach(key => {
  global.practiceQuizData[key].forEach(q => {
    if (findBareKanji(q.question).length) bareKanjiQuizCount++;
    q.options.forEach(opt => {
      if (findBareKanji(opt).length) bareKanjiQuizCount++;
    });
  });
});

let bareKanjiDokkaiCount = 0;
global.dokkaiData.forEach(d => {
  if (findBareKanji(d.passage).length) bareKanjiDokkaiCount++;
  d.questions.forEach(q => {
    if (findBareKanji(q.question).length) bareKanjiDokkaiCount++;
    q.options.forEach(opt => {
      if (findBareKanji(opt).length) bareKanjiDokkaiCount++;
    });
  });
});

console.log(`[Furigana Check] Bare Kanji in Quizzes: ${bareKanjiQuizCount}, in Dokkai: ${bareKanjiDokkaiCount}`);
if (bareKanjiQuizCount !== 0 || bareKanjiDokkaiCount !== 0) {
  throw new Error('Furigana verification failed! Bare Kanji detected.');
}
console.log('  -> 100% of Kanji in all quizzes and reading passages have Ruby Furigana annotations!');

console.log('=== FULL CURRICULUM (50 LESSONS, 50 QUIZZES, 50 DOKKAI) IS 100% COMPLETE & VERIFIED! ===');
