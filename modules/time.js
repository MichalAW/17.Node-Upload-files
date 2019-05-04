var os = require('os');

function timeConvertion(numSec) {
    // Caluculation
    var h = parseInt(numSec / 3600);
    var s = (numSec % 3600);
    var min = parseInt(s / 60);
    var sec = s % 60;
    
    var result = sec + 'sec';
    
    if (min > 0) {
        result = min + 'min ' + result;
    }

    if (h > 0) {
        result = h + 'h ' + result;
    }
    // var result = h + 'h ' + min + 'min ' + sec + 'sec'; 
    return result; // score of calculation
}

exports.timeConvertion = timeConvertion;