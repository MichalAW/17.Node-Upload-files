var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var inputforSwitch = (input !== null);
    var instruction = input.trim();
    
    switch (iinputforSwitch) {
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            break;
            case '/sayhello':
                process.stdout.write('hello!\n');
            break;
            case '/getOSinfo':
            // system information
                OSinfo.print();
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    break;
    }
});