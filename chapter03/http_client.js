var http = require('http');

http.request({
    host: 'localhost',
    port: 8080,
    method: 'GET',
    path: '/'
}, function (response) {
    response.setEncoding('utf8');
    response.on('readable', function () {
        console.log('read: ' + response.read());
    });
}).end();
