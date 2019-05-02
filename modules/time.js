var os = require('os');

function newTime() {
    var uptime = os.uptime();

    var h = parseInt(uptime / 3600);
    var s = (uptime % 3600);
    var min = parseInt(s / 60);
    var s = parseInt(s % 60);

    if (min > 0) {
        if (h > 0) {
            {
                console.log('Uptime: ${h } h ${min} min ${s} s')
            }
        } else {
            {
                console.log('Uptime: ${min} mins ${s} s')
            }
        }
    } else {
        console.log('Uptime: ${s} s')
    }
}

exports.newTime = newTime;