var http = require('http');
var url = require('url');

function getCookie(name, value) {
    var expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 1);
    var cookieText = name + '=' + value + ';expires=' + expiryDate.toUTCString() + ';';
    return cookieText;
}

var server = http.createServer(function (request, response) {
    var cookies = request.headers.cookie;

    if (!cookies) {
        cookieText = getCookie("session", "123456");
        response.setHeader('Set-Cookie', cookieText);
        response.writeHead(302, { 'Location': '/' });
        return response.end();
    }

    cookies.split(';').forEach(function (cookie) {
        var m = cookie.match(/(.*?)=(.*)$/);
        cookies[m[1].trim()] = (m[2] || '').trim();
    });

    cookieText = getCookie("session", "123456");
    response.setHeader('Set-Cookie', cookieText);

    response.end("Cookie set: " + cookies.toString() + '\n');
}).listen(8080);

