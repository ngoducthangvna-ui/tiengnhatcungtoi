const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Giả lập môi trường trình duyệt hoàn chỉnh (DOM & Browser APIs)
const domElements = new Map();

function createFakeElement(tag = 'div') {
  return {
    tagName: tag.toUpperCase(),
    className: '',
    id: '',
    innerHTML: '',
    style: {},
    attributes: {},
    classList: {
      add: function(c) { this._classes = this._classes || new Set(); this._classes.add(c); },
      remove: function(c) { if (this._classes) this._classes.delete(c); },
      contains: function(c) { return this._classes ? this._classes.has(c) : false; },
      toggle: function(c) { if (this.contains(c)) this.remove(c); else this.add(c); }
    },
    setAttribute: function(k, v) { this.attributes[k] = String(v); },
    getAttribute: function(k) { return this.attributes[k] || null; },
    addEventListener: function() {},
    appendChild: function(child) {
      this.children = this.children || [];
      this.children.push(child);
      return child;
    },
    querySelectorAll: function(sel) {
      // Mock selector for cards, svg, paths
      if (sel === '.radical-card') {
        const matches = [];
        const cardRegex = /<article class="radical-card" id="([^"]+)" data-id="([^"]+)">/g;
        let m;
        while ((m = cardRegex.exec(this.innerHTML)) !== null) {
          const cardEl = createFakeElement('article');
          cardEl.id = m[1];
          cardEl.setAttribute('data-id', m[2]);
          cardEl.innerHTML = this.innerHTML;
          matches.push(cardEl);
        }
        return matches;
      }
      if (sel === '.animated-strokes .stroke-path') {
        const pathRegex = /<path class="stroke-path" data-stroke="(\d+)" d="([^"]+)" \/>/g;
        const matches = [];
        let m;
        while ((m = pathRegex.exec(this.innerHTML)) !== null) {
          const p = createFakeElement('path');
          p.setAttribute('data-stroke', m[1]);
          p.setAttribute('d', m[2]);
          p.getTotalLength = () => 120;
          matches.push(p);
        }
        return matches;
      }
      return [];
    },
    querySelector: function(sel) {
      if (sel === '.radical-stroke-svg') {
        const svg = createFakeElement('svg');
        svg.innerHTML = this.innerHTML;
        return svg;
      }
      return createFakeElement('div');
    }
  };
}

const mockDocument = {
  getElementById: (id) => {
    if (!domElements.has(id)) {
      const el = createFakeElement();
      el.id = id;
      domElements.set(id, el);
    }
    return domElements.get(id);
  },
  createElement: (tag) => createFakeElement(tag),
  querySelectorAll: (sel) => [],
  addEventListener: () => {},
  body: {
    contains: () => true
  }
};

const mockWindow = {
  document: mockDocument,
  localStorage: {
    getItem: () => null,
    setItem: () => {}
  },
  addEventListener: () => {},
  innerWidth: 1024,
  location: { hash: '' }
};

const sandbox = {
  window: mockWindow,
  document: mockDocument,
  localStorage: mockWindow.localStorage,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  console: console
};

vm.createContext(sandbox);

// 1. Nạp tất cả dữ liệu
const dataFiles = [
  'data/lessons_1_5.js', 'data/lessons_6_10.js', 'data/lessons_11_15.js', 'data/lessons_16_20.js', 'data/lessons_21_25.js',
  'data/lessons_26_30.js', 'data/lessons_31_35.js', 'data/lessons_36_40.js', 'data/lessons_41_45.js', 'data/lessons_46_50.js',
  'data/lessons.js',
  'data/dokkai.js',
  'data/quizzes_1_5.js', 'data/quizzes_6_10.js', 'data/quizzes_11_15.js', 'data/quizzes_16_20.js', 'data/quizzes_21_25.js',
  'data/quizzes_26_30.js', 'data/quizzes_31_35.js', 'data/quizzes_36_40.js', 'data/quizzes_41_45.js', 'data/quizzes_46_50.js',
  'data/quiz-master.js',
  'data/radicals_data.js'
];

for (const file of dataFiles) {
  const code = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
  vm.runInContext(code, sandbox);
}

// 2. Nạp app.js
const appCode = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
vm.runInContext(appCode, sandbox);

console.log('--- BẮT ĐẦU KIỂM THỬ MODULE BỘ THỦ TIẾNG NHẬT (NGỌC TIỆP MINATO) ---');

// Kiểm tra radicalsData
const radicalsData = vm.runInContext('radicalsData', sandbox);
console.log(`Số nhóm bộ thủ: ${radicalsData.length}`);
if (radicalsData.length !== 17) {
  throw new Error(`Kỳ vọng 17 nhóm bộ thủ, nhưng nhận được ${radicalsData.length}`);
}

let totalRadicals = 0;
radicalsData.forEach(g => {
  totalRadicals += g.items.length;
  console.log(` - ${g.id} (${g.title}): ${g.items.length} bộ thủ`);
});
console.log(`Tổng số bộ thủ đã tích hợp: ${totalRadicals} bộ`);

// Kiểm thử renderContent cho từng nhóm bộ thủ
const renderContent = vm.runInContext('renderContent', sandbox);
const searchEverything = vm.runInContext('searchEverything', sandbox);
const renderSidebar = vm.runInContext('renderSidebar', sandbox);

for (const group of radicalsData) {
  renderContent(group.id);
  const contentEl = mockDocument.getElementById('lesson-content');
  const html = contentEl.innerHTML;

  // Kiểm tra 4 thành phần bắt buộc cho mỗi bộ thủ
  for (const rad of group.items) {
    if (!html.includes(rad.name)) {
      throw new Error(`Thiếu Tên bộ [${rad.name}] trong nhóm ${group.id}`);
    }
    if (!html.includes(rad.meaning)) {
      throw new Error(`Thiếu Ý nghĩa bộ thủ [${rad.meaning}] trong nhóm ${group.id}`);
    }
    if (!html.includes(rad.kanjiMeaning)) {
      throw new Error(`Thiếu Ý nghĩa trong Kanji cho bộ [${rad.name}] trong nhóm ${group.id}`);
    }
    if (!html.includes('radical-stroke-box') || !html.includes('radical-stroke-svg')) {
      throw new Error(`Thiếu Ô Cách viết vẽ nét cho bộ [${rad.name}] trong nhóm ${group.id}`);
    }
  }
  console.log(`-> Nhóm [${group.title}] render 100% đầy đủ 4 trường chuẩn format!`);
}

// Kiểm thử tìm kiếm nhanh bộ thủ
const testSearchKeywords = ['Nhất', 'Đao', 'Thủy', 'Bộ thủ'];
for (const kw of testSearchKeywords) {
  const res = searchEverything(kw);
  const found = res.some(r => r.category === 'Bộ Thủ');
  console.log(`Tìm kiếm từ khóa "${kw}": tìm thấy ${res.length} kết quả (Có mục Bộ Thủ: ${found ? 'ĐẠT' : 'KHÔNG ĐẠT'})`);
  if (!found) {
    throw new Error(`Tìm kiếm "${kw}" không trả về kết quả bộ thủ nào!`);
  }
}

// Kiểm thử sidebar render
renderSidebar();
const sidebarMenu = mockDocument.getElementById('sidebar-menu');
console.log(`Sidebar groups render thành công! Children count: ${sidebarMenu.children ? sidebarMenu.children.length : 0}`);

console.log('=== KIỂM THỬ BỘ THỦ TIẾNG NHẬT HOÀN TOÀN THÀNH CÔNG 100%! ===');
