var http = require('http');
var qs = require('querystring');

http.createServer(function (request, response) {
    var body = '';

    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        return response.end('<form action="/submit" method="post">'
            + '<input type="text" name="sometext">'
            + '<input type="submit" value="Upload">'
            + '</form>');
    }

    if (request.url === '/submit') {
        request.on('readable', function () {
            var data = request.read();
            if (data) {
                body += data;
            }
        });
        request.on('end', function () {
            console.log(body);
            var fields = qs.parse(body);
            response.end('Thanks!');
            console.log(fields);
            console.log(Object.entries(fields));
        });
    }
}).listen(8080);
