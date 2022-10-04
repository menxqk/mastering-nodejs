var http = require('http');
var formidable = require('formidable');

http.createServer(function (request, response) {
    var rm = request.method.toLowerCase();

    if (request.url === '/upload' && rm === 'post') {
        var form = formidable({ multiples: true });
        form.parse(request, function (err, fields, files) {
            if (err) {
                response.writeHead(err.http || 400, { 'Content-Type': 'text/plain' });
                response.end(String(err));
                return;
            }
            response.writeHead(200, { 'Content-Type': 'application/json' });
            var json = JSON.stringify({ fields, files }, null, 2);
            console.log(json);
            response.end(json);
        });
    }

    return;
}).listen(8080);
