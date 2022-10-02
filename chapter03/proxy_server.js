var http = require('http');

var server = new http.Server();

server.on('request', function (request, socket) {
    http.request({
        host: 'www.google.com',
        port: 80,
        method: 'GET',
        path: '/'
    }, function (response) {
        response.pipe(socket);
    }).end();
});

server.listen(8080);
