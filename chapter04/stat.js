var fs = require('fs');

fs.stat('stat.js', function (err, stats) {
    console.log(stats);
});
