var fs = require('fs');

fs.readdir('.', function (err, files) {
    console.log(files);
});

(function (dir) {
    fs.readdir(dir, function (err, list) {
        list.forEach(function (file) {
            fs.stat(dir + '/' + file, function (err, stat) {
                if (stat.isDirectory()) {
                    return console.log("Found directory: " + file);
                }
                console.log("Found file: " + file);
            });
        });
    });
})(".");