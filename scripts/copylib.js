var fs = require('fs-extra');
console.log(process.cwd())
fs.copySync('lib', '../../lib');
