const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'CMS', 'Dashboard.html');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

console.log("Lines 1395 to 1420 in Dashboard.html:");
for (let i = 1394; i < 1420; i++) {
  if (lines[i] !== undefined) {
    console.log(`${i + 1}: ${lines[i]}`);
  }
}
