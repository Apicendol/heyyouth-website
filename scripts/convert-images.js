const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, '..', 'assets', 'img');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (['.png', '.jpg', '.jpeg'].includes(ext)) {
    const dirName = path.dirname(filePath);
    const baseName = path.basename(filePath, ext);
    const destPath = path.join(dirName, `${baseName}.webp`);

    console.log(`Converting: ${filePath} -> ${destPath}`);
    try {
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(destPath);
      console.log(`Successfully converted to WebP: ${destPath}`);
    } catch (err) {
      console.error(`Error converting ${filePath}:`, err);
    }
  }
}

async function main() {
  console.log(`Scanning directory: ${imgDir}`);
  const files = [];
  walkDir(imgDir, (filePath) => {
    files.push(filePath);
  });

  for (const file of files) {
    await convertImage(file);
  }
  console.log('Conversion process finished!');
}

main();
