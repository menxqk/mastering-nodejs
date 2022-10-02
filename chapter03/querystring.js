var qs = require('querystring');

console.log(qs.parse('foo=bar&bingo=bango'));
console.log(qs.stringify({ foo: 'bar', bingo: 'bango' }));
