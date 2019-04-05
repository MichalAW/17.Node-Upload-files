// var event = require('events');
// var EventEmitter = event.EventEmitter;
// Jako, że z modułu event potrzebujemy jedynie klasy EventEmitter, możemy nieco uprościć powyższy kod:


var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('beforeCommand', function(instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand', function() {
console.log('Finished command');
});

// Oba callbacki wyglądają bardzo podobnie do jQuery'owego .on czy do klasycznego .addEventListener(). Pierwszy parametr to nazwa zdarzenia, a drugi to funkcja, która wykona się na jego wystąpienie.
// Ostatnim krokiem będzie wywołanie zdarzeń w odpowiednich miejscach. Całość powinna wyglądać tak:

var EventEmitter = require("events").EventEmitter;
var OSinfo = require('./modules/OSinfo');

var emitter = new EventEmitter();
emitter.on("beforeCommand", function (instruction) {
    console.log('You wrote: ' + instruction + ', trying to run command');
});
emitter.on("afterCommand", function () {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        // odpalanie zdarzenia beforeCommand (z parametrem)
        emitter.emit('beforeCommand', instruction);
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quiting app!');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                OSinfo.get();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
        // emitowanie zdarzenia afterCommand (bez parametru)
        emitter.emit('afterCommand');
    }
});

// Jest pewna sytuacja, w której zdarzenie afterCommand nie zostanie wyemitowane - potrafisz wskazać która? :)
// To jest podstawowy przykład użycia publish/subscribe. Oczywiście tak jak w przypadku innych modułów wbudowanych w Node, tak i w tym istnieje bogata dokumentacja, która omawia poszczególne fragmenty modułu. W trakcie tworzenia aplikacji będziemy jeszcze wracać do tematu zdarzeń wiele razy!
