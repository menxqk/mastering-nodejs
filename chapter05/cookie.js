var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/mycookie', function (request, response) {
    var node_cookie = request.cookies.node_cookie || "";
    response.end(node_cookie);
});

app.get('/', function (request, response) {
    response.cookie('node_cookie', Math.floor(Math.random() * 10e10));
    response.end('Cookie set');
});

app.listen(8080);
