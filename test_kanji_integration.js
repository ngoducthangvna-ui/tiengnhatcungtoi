const fs = require('fs');

global.window = global;
global.localStorage = {
  _data: {},
  getItem: (k) => global.localStorage._data[k] || null,
  setItem: (k, v) => { global.localStorage._data[k] = String(v); },
  removeItem: (k) => { delete global.localStorage._data[k]; }
};

class ElementMock {
  constructor(tag = 'div', id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.innerHTML = '';
    this.textContent = '';
    this.children = [];
    this.classList = {
      _classes: new Set(),
      add: (c) => this.classList._classes.add(c),
      remove: (c) => this.classList._classes.delete(c),
      contains: (c) => this.classList._classes.has(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (this.classList._classes.has(c)) this.classList._classes.delete(c);
          else this.classList._classes.add(c);
        } else if (force) {
          this.classList._classes.add(c);
        } else {
          this.classList._classes.delete(c);
        }
      }
    };
    this.style = {};
    this.attributes = {};
  }
  setAttribute(k, v) { this.attributes[k] = v; }
  getAttribute(k) { return this.attributes[k] || null; }
  addEventListener() {}
  removeEventListener() {}
  querySelectorAll(sel) { return []; }
  querySelector(sel) { return null; }
  appendChild(el) { this.children.push(el); }
  getBoundingClientRect() { return { top: 0, bottom: 0, height: 0, width: 0 }; }
  focus() {}
}

const elements = {
  'sidebar': new ElementMock('aside', 'sidebar'),
  'sidebar-menu': new ElementMock('nav', 'sidebar-menu'),
  'lesson-content': new ElementMock('div', 'lesson-content'),
  'main-content': new ElementMock('main', 'main-content'),
  'quick-search-input': new ElementMock('input', 'quick-search-input'),
  'search-dropdown': new ElementMock('div', 'search-dropdown'),
  'search-results-list': new ElementMock('div', 'search-results-list'),
  'search-count-label': new ElementMock('span', 'search-count-label'),
  'header-goal-subtitle': new ElementMock('span', 'header-goal-subtitle'),
  'header-progress-fill': new ElementMock('div', 'header-progress-fill'),
  'theme-toggle-btn': new ElementMock('button', 'theme-toggle-btn'),
  'btn-reset-progress': new ElementMock('button', 'btn-reset-progress'),
  'toast-notification': new ElementMock('div', 'toast-notification')
};

global.document = {
  getElementById: (id) => elements[id] || new ElementMock('div', id),
  createElement: (tag) => new ElementMock(tag),
  querySelector: () => new ElementMock(),
  querySelectorAll: () => [],
  addEventListener: () => {},
  body: new ElementMock('body'),
  documentElement: new ElementMock('html')
};

// Load data files
const lessonRanges = ["1_5", "6_10", "11_15", "16_20", "21_25", "26_30", "31_35", "36_40", "41_45", "46_50"];
lessonRanges.forEach(r => {
  eval(fs.readFileSync(`data/lessons_${r}.js`, 'utf8').replace(`const lessons_${r}`, `global.lessons_${r}`));
});
eval(fs.readFileSync('data/lessons.js', 'utf8').replace('const lessonsData', 'global.lessonsData'));
eval(fs.readFileSync('data/dokkai.js', 'utf8').replace('const dokkaiData', 'global.dokkaiData'));

lessonRanges.forEach(r => {
  eval(fs.readFileSync(`data/quizzes_${r}.js`, 'utf8').replace(`const quizzes_${r}`, `global.quizzes_${r}`));
});
eval(fs.readFileSync('data/quiz-master.js', 'utf8').replace('const practiceQuizData', 'global.practiceQuizData'));
eval(fs.readFileSync('data/radicals_data.js', 'utf8').replace('const radicalsData', 'global.radicalsData'));
eval(fs.readFileSync('data/kanji_data.js', 'utf8').replace('const kanjiLessonsData', 'global.kanjiLessonsData'));

console.log('--- ALL DATA LOADED SUCCESSFULLY ---');
console.log('Kanji lessons loaded:', global.kanjiLessonsData.length);

// Load app.js
const appCode = fs.readFileSync('app.js', 'utf8');
eval(appCode);

console.log('--- APP.JS LOADED SUCCESSFULLY ---');

// Test Sidebar rendering
renderSidebar();
const sidebarMenu = elements['sidebar-menu'];
console.log('Sidebar groups rendered:', sidebarMenu.children.length);
sidebarMenu.children.forEach(c => {
  console.log('Group id:', c.id);
});

// Test Kanji rendering for Lesson 1, 25, 50
['kanji-1', 'kanji-25', 'kanji-50'].forEach(id => {
  renderContent(id);
  const html = elements['lesson-content'].innerHTML;
  console.log(`\nTesting ${id}:`);
  console.log('  Rendered HTML length:', html.length);
  console.log('  Contains module-sync-bar:', html.includes('module-sync-bar'));
  console.log('  Contains kanji-cards-container:', html.includes('kanji-cards-container'));
  console.log('  Contains kcard-top-section:', html.includes('kcard-top-section'));
  console.log('  Contains kcard-bottom-section:', html.includes('kcard-bottom-section'));
  console.log('  Contains Mẹo Ghi Nhớ:', html.includes('Mẹo Ghi Nhớ'));
  console.log('  Contains Âm On / Âm Kun:', html.includes('Âm On (Onyomi)'));
});

// Test Quick Search
console.log('\n--- TESTING QUICK SEARCH ---');
const queries = ['Tư', '私', 'Cây lúa', 'kanji', 'Bài 1'];
queries.forEach(q => {
  const results = searchEverything(q);
  const kanjiResults = results.filter(r => r.category === 'Chữ Hán & Mẹo Nhớ');
  console.log(`Query "${q}": found ${results.length} total, ${kanjiResults.length} kanji results.`);
  if (kanjiResults.length > 0) {
    console.log('  Sample kanji result:', kanjiResults[0]);
  }
});
