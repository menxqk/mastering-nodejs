var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    if (request.method !== "GET") {
        return response.end('Simple file server only does GET');
    }

    var filename = path.join(__dirname, request.url);
    fs.stat(filename, function (err, stat) {
        if (err) {
            throw err;
        }

        if (!stat.isFile()) {
            return response.end(`Could not get: ${request.url}\n`);
        }

        var rs = fs.createReadStream(path.join(__dirname, request.url));
        rs.pipe(response);
    });
}).listen(8080);
