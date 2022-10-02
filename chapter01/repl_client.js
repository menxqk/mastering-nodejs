var net = require('net');

var socket = net.connect(8080);
process.stdin.pipe(socket);
socket.pipe(process.stdout);
