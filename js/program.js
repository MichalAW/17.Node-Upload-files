process.stdin.on('readable', function() {
// the .read () method is to read what the user has given at the input
    var input = process.stdin.read();
    var instruction = input.toString().trim();
    // input must be 'true'
    if (!input) {
        return;
    };
    //case only need a value
    switch(instruction) {
        case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
        default : 
            process.stderr.write('Wrong instruction!');
            break;       
    }
});

console.log('version node.js: ' + global.process.version);
console.log('LANG system: ' + global.process.env.LANG);