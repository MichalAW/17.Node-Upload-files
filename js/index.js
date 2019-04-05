var fs = require('fs');

fs.stat('./cat.jpg', function(err, stats) {
    console.log(stats);
});