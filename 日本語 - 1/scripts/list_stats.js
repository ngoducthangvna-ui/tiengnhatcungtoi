const fs = require('fs');

const lessonFiles = [
  'data/lessons_26_30.js',
  'data/lessons_31_35.js',
  'data/lessons_36_40.js',
  'data/lessons_41_45.js',
  'data/lessons_46_50.js'
];

lessonFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  eval(content.replace(/const\s+(\w+)\s*=/, 'global["$1"] ='));
});

['lessons_26_30', 'lessons_31_35', 'lessons_36_40', 'lessons_41_45', 'lessons_46_50'].forEach(key => {
  global[key].forEach(l => {
    console.log(`${l.id.padEnd(8)} | ${l.title.split(':')[0].padEnd(8)} | ${String(l.vocabulary.length).padStart(2)} từ vựng | ${l.grammar.length} điểm ngữ pháp`);
  });
});
