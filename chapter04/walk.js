var fs = require('fs');
var inspect = require('util').inspect;

var walk = function (dir, done) {
    var results = {};

    fs.readdir(dir, function (err, list) {
        var pending = list.length;

        if (err || !pending) {
            return done(err, results);
        }

        list.forEach(function (file) {
            var dfile = dir + '/' + file;
            fs.stat(dfile, function (err, stat) {
                if (stat.isDirectory()) {
                    return walk(dfile, function (err, res) {
                        results[file] = res;
                        !--pending && done(null, results);
                    });
                }
                results[file] = stat;
                !--pending && done(null, results);
            });
        });
    });
};

walk(".", function (err, res) {
    console.log(inspect(res, { depth: null }));
});
