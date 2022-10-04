var fs = require('fs');

fs.readFile('/etc/passwd', function (err, fileData) {
    if (err) {
        throw err;
    }
    console.log(fileData);
});
