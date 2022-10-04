var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
    input: fs.createReadStream("path.js"),
    terminal: false
});

var arr = [];
rl.on('line', function (ln) {
    var line = ln.trim();
    arr.push(line);
});

rl.on('close', function () {
    console.log(arr);
});
