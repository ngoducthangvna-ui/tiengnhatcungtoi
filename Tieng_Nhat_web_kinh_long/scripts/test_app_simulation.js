const fs = require('fs');

global.window = global;
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};

class ElementMock {
  constructor(tag = 'div', id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.innerHTML = '';
    this.classList = {
      add: () => {},
      remove: () => {},
      contains: () => false,
      toggle: () => {}
    };
    this.style = {};
    this.attributes = {};
  }
  setAttribute(k, v) { this.attributes[k] = v; }
  getAttribute(k) { return this.attributes[k] || null; }
  addEventListener() {}
  removeEventListener() {}
  querySelectorAll() { return []; }
  querySelector() { return null; }
  getBoundingClientRect() { return { top: 0, bottom: 0, height: 0, width: 0 }; }
  focus() {}
}

const elements = {
  'sidebar': new ElementMock('aside', 'sidebar'),
  'lesson-content': new ElementMock('div', 'lesson-content'),
  'main-content': new ElementMock('main', 'main-content'),
  'quick-search-input': new ElementMock('input', 'quick-search-input'),
  'search-dropdown': new ElementMock('div', 'search-dropdown'),
  'search-results-list': new ElementMock('div', 'search-results-list'),
  'search-count-label': new ElementMock('span', 'search-count-label'),
  'theme-toggle-btn': new ElementMock('button', 'theme-toggle-btn'),
  'btn-reset-progress': new ElementMock('button', 'btn-reset-progress'),
  'toast-notification': new ElementMock('div', 'toast-notification')
};

global.document = {
  getElementById: (id) => elements[id] || new ElementMock('div', id),
  querySelector: () => new ElementMock(),
  querySelectorAll: () => [],
  addEventListener: () => {},
  body: new ElementMock('body'),
  documentElement: new ElementMock('html')
};

// 1. Lessons
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

let lessonsCode = fs.readFileSync('data/lessons.js', 'utf8')
  .replace('const lessonsData =', 'global.lessonsData =')
  .replace(/lessons_(\d+)_(\d+)/g, 'global.lessons_$1_$2');
eval(lessonsCode);

// 2. Dokkai
eval(fs.readFileSync('data/dokkai.js', 'utf8').replace('const dokkaiData =', 'global.dokkaiData ='));

// 3. Quizzes
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

let quizMasterCode = fs.readFileSync('data/quiz-master.js', 'utf8')
  .replace('const practiceQuizData =', 'global.practiceQuizData =')
  .replace(/quizzes_(\d+)_(\d+)/g, 'global.quizzes_$1_$2');
eval(quizMasterCode);

// 4. App logic
eval(fs.readFileSync('app.js', 'utf8'));

console.log('Testing renderContent for all 50 lessons...');
for (let i = 1; i <= 50; i++) {
  renderContent(`bai-${i}`);
  const html = elements['lesson-content'].innerHTML;
  if (!html || !html.includes(`Bài ${i}`)) {
    throw new Error(`Failed rendering bai-${i}`);
  }
}
console.log('-> All 50 lessons rendered cleanly in DOM simulation!');

console.log('Testing renderContent for all 50 quizzes...');
for (let i = 1; i <= 50; i++) {
  renderContent(`quiz-${i}`);
  const html = elements['lesson-content'].innerHTML;
  if (!html || !html.includes(`Bài Tập - Bài ${i}`)) {
    throw new Error(`Failed rendering quiz-${i}`);
  }
}
console.log('-> All 50 quizzes rendered cleanly in DOM simulation!');

console.log('Testing renderContent for all 50 dokkai passages...');
for (let i = 1; i <= 50; i++) {
  renderContent(`dokkai-${i}`);
  const html = elements['lesson-content'].innerHTML;
  if (!html || !html.includes(`Bài Đọc Hiểu - Bài ${i}`)) {
    throw new Error(`Failed rendering dokkai-${i}`);
  }
}
console.log('-> All 50 dokkai passages rendered cleanly in DOM simulation!');

console.log('Testing quick search on full 50-lesson curriculum...');
const searchResKyoto = searchEverything('kyoto');
console.log('Search "kyoto" results count:', searchResKyoto.length);
if (searchResKyoto.length === 0) throw new Error('Search for "kyoto" returned 0 results!');

const searchResQuiz = searchEverything('bai tap');
const quizOnly = searchResQuiz.filter(r => r.category === "Luyện Tập");
console.log('Quiz category count:', quizOnly.length);
if (quizOnly.length !== 50) throw new Error(`Expected 50 quiz search results, got ${quizOnly.length}`);

console.log('=== ALL APP LOGIC, RENDERERS & SEARCH TESTS PASSED FOR 50 LESSONS WITH 100% SUCCESS! ===');
