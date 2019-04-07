var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

// fs.stat('./img/cat.jpeg', function(error, stats) {
//  var statMode = new StatMode(stats);
//  console.log(statMode.toString());
// });

// fs.readFile('./tekst.txt', function(error, data) {
//  console.log(data);
// });

fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt',
function(error) {
    if (error) throw error; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!');
});

fs.readFile('./tekst.txt', 'utf-8', function(error, data) {
    console.log('Dane przed zapisem!'.red);
    console.log(data);
    fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(error) {
        if (error) throw error;
        console.log('Zapisano!'.red);
        fs.readFile('./tekst.txt', 'utf-8', function(error, data) {
            console.log('Dane po zapisie'.red)
            console.log(data);
        });
    });
});