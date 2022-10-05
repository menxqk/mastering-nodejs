var spawn = require('child_process').spawn;

var ls = spawn('ls', ['-lh', '.']);

ls.stdout.on('readable', function () {
    var d = this.read();
    d && console.log(d.toString());
});

ls.on('close', function (code) {
    console.log('child process exited with code ' + code);
});
