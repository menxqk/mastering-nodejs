var stream = require('stream');

var writable = new stream.Writable({
    decodeStrings: false
});

writable._write = function (chunk, encoding, callback) {
    console.log('chunk:', chunk);
    callback();
}

var w = writable.write(Buffer.alloc(100));
writable.end();
console.log(w);
