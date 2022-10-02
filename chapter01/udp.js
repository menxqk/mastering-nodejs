var dgram = require('dgram');

if (process.argv.length < 3) {
    console.log('Provide [message]');
    process.exit(1);
}

var client = dgram.createSocket('udp4');
var server = dgram.createSocket('udp4')

var message = process.argv[2];

message = Buffer.from(message);

server.on('message', function (msg) {
    process.stdout.write("Got message: " + msg + "\n");
    process.exit(0);
}).bind(41234);

client.send(message, 0, message.length, 41234, 'localhost');
