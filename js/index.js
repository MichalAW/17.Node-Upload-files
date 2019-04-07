var os = require('os');
var colors = require('colors');
var OSinfo = require('../modules/OSinfo');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
            case '/sayhello':
                process.stdout.write('hello!\n');
            break;
            var os = require('os');

            function getOSinfo() {
                var type = os.type();
                if(type === 'Darwin') {
                    type = 'OSX';
                } else if(type === 'Windows_NT') {
                    type = 'Windows';
                }
                var release = os.release();
                var cpu = os.cpus()[0].model;
                var uptime = os.uptime();
                var userInfo = os.userInfo();
                console.log('System:'.grey, type);
                console.log('Release:'.red, release);
                console.log('CPU model:'.blue, cpu);
                console.log('Uptime: ~'.green, (uptime / 60).toFixed(0), 'min');
                console.log('User name:'.yellow, userInfo.username);
                console.log('Home dir:'.cyan, userInfo.homedir);
            }
            exports.print = getOSinfo;
        };
    }
});
