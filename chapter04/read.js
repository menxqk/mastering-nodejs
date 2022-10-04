var fs = require('fs');

var filename = './path.js';

fs.open(filename, 'r', function (err, fd) {

    fs.stat(filename, function (err, stats) {
        var totalBytes = stats.size;
        var buffer = Buffer.alloc(totalBytes);
        var bytesRead = 0;

        var read = function (chunkSize) {
            fs.read(fd, buffer, bytesRead, chunkSize, bytesRead, function (err, numBytes, bufRef) {
                if ((bytesRead += numBytes) < totalBytes) {
                    return read(Math.min(512, totalBytes - bytesRead));
                }
                fs.close(fd);
                console.log("File read complete. Total bytes read: " + totalBytes);
                console.log(bufRef.toString());
            });
        }

        read(Math.min(512, totalBytes));
    });
});
