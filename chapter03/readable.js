var stream = require('stream');

var readable = new stream.Readable({
    encoding: 'utf8',
    highWaterMark: 16000,
    objectMode: true
});

readable._read = function () { }

readable.on('data', function (data) {
    console.log(data.toString());
    // readable.removeAllListeners();
});

setTimeout(function () {
    readable.emit('data', 'Some data');
}, 1500);
