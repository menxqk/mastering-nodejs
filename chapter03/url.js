var url = require('url');

console.log(url.parse("http://www.example.org", null, true));
console.log(url.format({
    protocol: 'http:',
    host: 'www.example.org'
}));
console.log(url.resolve("http://example.org/a/b", "c/d"));
console.log(url.resolve("http://example.org/a/b", "/c/d"));
console.log(url.resolve("http://example.org", "http://google.com"));
