var stream = require('stream');

var readable = new stream.Readable({ objectMode: true });

var prices = [
    { price: 1 },
    { price: 2 },
    { price: 3 },
    { price: 4 },
    { price: 5 }
];

readable._read = function () {
    if (prices.length) {
        return readable.push(prices.shift());
    }
    return readable.push(null);
}

readable.on('data', function (data) {
    console.log(data);
});
