var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/hello') {
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        // First I want to read the file
        fs.readFile('./index.html', function (error, data) {
            if (error) throw error;
            response.write(data);
            response.end();
        });
    }   else {
        response.setHeader('Content-Type', 'image/png; charset=utf-8');
        fs.readFile('./cat.png', function (error, data) {
            if (error) throw error;
            response.statusCode = 404;
            response.write(data);
            response.end();
        });
    }
});

server.listen(8080);
