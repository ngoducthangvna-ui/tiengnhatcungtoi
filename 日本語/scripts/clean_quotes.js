const fs = require('fs');

const files = fs.readdirSync('scripts').filter(f => f.startsWith('update_lessons_'));
files.forEach(f => {
  const p = 'scripts/' + f;
  let text = fs.readFileSync(p, 'utf8');
  text = text.split('jp":').join('jp:');
  text = text.split('rawJp":').join('rawJp:');
  text = text.split('vi":').join('vi:');
  fs.writeFileSync(p, text, 'utf8');
  console.log(`Cleaned ${p}`);
});
