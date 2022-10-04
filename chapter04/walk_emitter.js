var fs = require('fs');
var EventEmitter = require('events').EventEmitter;

var walk = function (dir, done, emitter) {
    var results = {};
    emitter = emitter || new EventEmitter();

    fs.readdir(dir, function (err, list) {
        var pending = list.length;

        if (err || !pending) {
            return done(err, results);
        }

        list.forEach(function (file) {
            var dfile = dir + '/' + file;
            fs.stat(dfile, function (err, stat) {
                if (stat.isDirectory()) {
                    emitter.emit('directory', dfile, stat);
                    return walk(dfile, function (err, res) {
                        results[file] = res;
                        !--pending && done(null, results);
                    }, emitter);
                }
                emitter.emit('file', dfile, stat);
                results[file] = stat;
                !--pending && done(null, results);
            });
        });
    });

    return emitter;
};

walk("..", function (err, res) {

}).on('directory', function (path, stat) {
    console.log("Directory: " + path + " - " + stat.size);
}).on('file', function (path, stat) {
    console.log("File: " + path + " - " + stat.size);
});
