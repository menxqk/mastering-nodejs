var stream = require('stream');

var transformer = new stream.Transform();
transformer._transform = function (data, encoding, cb) {
    var message = data.toString().trim();
    var numbers = [];

    for (var i = 0; i < message.length; i++) {
        numbers.push(message[i].charCodeAt(0));
    }

    this.push(message + "\t[" + numbers.join(" ") + "]" + "\n");
    cb();
};

process.stdin.pipe(transformer).pipe(process.stdout);
