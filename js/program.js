process.stdin.on('readable', function() {
// the .read () method is to read what the user has given at the input
    var input = process.stdin.read();
    var instruction = input.toString().trim();
    var inputForSwitch = (input !== null);
    var instructionForCase = (instruction === '/exit');
    switch (inputForSwitch) {
        case (instructionForCase) :
            process.stdout.write('Quitting app!\n');
            process.exit();
        default : 
        process.stderr.write('Wrong instruction!');
    }
});

console.log('version node.js: ' + global.process.version);
console.log('LANG system: ' + global.process.env.LANG);