const fs = require('fs');
const path = require('path');

// Simple HTML formatter for the exported files
function formatHTML(html) {
  // Basic formatting - add newlines after major tags
  return html
    .replace(/></g, '>\n<')
    .replace(/\n\s*\n/g, '\n')
    .split('\n')
    .map(line => {
      // Basic indentation
      const depth = (line.match(/<\//g) || []).length - (line.match(/<\w/g) || []).length;
      return '  '.repeat(Math.max(0, depth)) + line.trim();
    })
    .join('\n');
}

const outDir = path.join(__dirname, 'out');
const files = ['index.html', '404.html'];

files.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const formatted = formatHTML(content);
    fs.writeFileSync(filePath, formatted, 'utf8');
    console.log(`Formatted ${file}`);
  }
});

console.log('HTML formatting complete!');


