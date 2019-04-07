var fs = require('fs');
var StatMode = require('stat-mode');

// fs.stat('./cat.jpg', function(err, stats) {
//  var statMode = new StatMode(stats);
//  console.log(statMode.toString());
// });

// fs.readFile('./tekst.txt', function(err, data) {
//  console.log(data);
// });

fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt',
function(err) {
    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!');
});


fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!');
    console.log(data);
    fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!');
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie')
            console.log(data);
        });
    });
});