var http = require('http');
var colors = require('colors');
var handlers = require('./handlers'); // our module

function start() {
  function onRequest(request, response) {
    console.log("Odebrano zapytanie.".green);
    console.log("Zapytanie " + request.url + " odebrane.");

    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

    switch (request.url) { // switch for diffrent questions
        case '/':
        case '/start':
            handlers.welcome(request, response);
            break;
        // case '/style':
        //     handlers.apperance(request, response);
        //     break;
        case '/upload':
            handlers.upload(request, response);
            break;
        case '/show':
		    handlers.show(request, response);
		    break;
        default:
            handlers.error(request, response);
    	}
	}

  	http.createServer(onRequest).listen(9000);

  	console.log("Uruchomiono serwer!".green);
}

exports.start = start;
