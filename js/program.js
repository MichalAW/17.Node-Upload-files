process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    var instruction = input.toString().trim();
    switch (input !== null) {
        case (instruction === '/exit') :
            process.stdout.write('Quitting app!\n');
            process.exit();
        default : 
        process.stderr.write('Wrong instruction!');
    }
});

console.log('version node.js: ' + global.process.version);
console.log('LANG system: ' + global.process.env.LANG);