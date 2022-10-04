var fs = require('fs');

var line1 = "A string\n";
var line2 = Buffer.from("A buffer of data\n");

fs.writeFile('test.txt', line1 + line2, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("File has been written...");
});
