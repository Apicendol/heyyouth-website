const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'assets', 'Style', 'tailwind.css');
if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    if (css.includes('display:block;vertical-align:middle')) {
        css = css.replace(/display:block;vertical-align:middle/g, 'display:block');
        fs.writeFileSync(cssPath, css, 'utf8');
        console.log('Cleaned display:block;vertical-align:middle from tailwind.css');
    }
}
