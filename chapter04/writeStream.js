var fs = require('fs');

var writer = fs.createWriteStream('novel.txt', { encoding: 'utf8', flags: 'w' });
process.stdin.pipe(writer);
