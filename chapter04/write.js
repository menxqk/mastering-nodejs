var fs = require('fs');

var buffer = Buffer.alloc(8675);

fs.open("index.html", "w", function (err, fd) {
    fs.write(fd, buffer, 309, 8366, 100, function (err, writtenBytes, buffer) {
        if (err) {
            throw err;
        }
        console.log("Wrote " + writtenBytes + " bytes to file");
    });
});
