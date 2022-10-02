var https = require('https');
var fs = require('fs');

https.createServer({
    key: fs.readFileSync('./server-key.pem'),
    cert: fs.readFileSync('./server-cert.pem')
}, function (req, res) {
    res.write('https request\n');
    res.end();
}).listen(1443);
