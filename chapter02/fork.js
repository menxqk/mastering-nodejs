var cp = require('child_process');
var child = cp.fork(__dirname + '/lovechild.js');

var message = 'hello, child!'
var count = 1;

child.on('message', function (msg) {
    console.log(`child message: ${msg.message} ${msg.count}`);
});

child.on('close', function (code, signal) {
    console.log(`close: ${code} ${signal}`);
});

child.on('exit', function (code, signal) {
    console.log(`exit: ${code} ${signal}`);
});

child.on('error', function (err) {
    console.log(`error: ${err}`);
});

child.send({ message, count });
