const fs = require('fs');
const path = require('path');

// Paths
const outDir = path.join(__dirname, 'out');
const rootDir = path.join(__dirname, '..');

// Check if out directory exists
if (!fs.existsSync(outDir)) {
  console.error('Error: out directory does not exist. Please run "next build" first.');
  process.exit(1);
}

// Copy all files from out to root
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy contents of out directory to root
console.log('Copying build output to project root...');
const outContents = fs.readdirSync(outDir);

outContents.forEach(item => {
  const srcPath = path.join(outDir, item);
  const destPath = path.join(rootDir, item);
  
  // Remove existing file/directory in root if it exists
  if (fs.existsSync(destPath)) {
    const stats = fs.statSync(destPath);
    if (stats.isDirectory()) {
      fs.rmSync(destPath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(destPath);
    }
  }
  
  copyRecursive(srcPath, destPath);
});

console.log('Build output copied to project root successfully!');

