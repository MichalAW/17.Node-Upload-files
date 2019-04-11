var http = require('http');
var server = http.createServer();
server.on('request', function (request, response) {
// here something is happening :)
});
server.listen(9000);

server.on('request', function (request, response) {
    response.write('Hello world!');
    response.end();
});

response.write('Hello world');
response.write('<h1>This is awesome!</h1>');
response.write('<body>');
response.write('<h1>Hello world!</h1>');
response.write('</body>');
response.end();

var http = require('http')
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
        response.end();
    } else {
        response.statusCode = 404;
        response.write('<h1>404: Zła ścieżka!</h1>');
        response.end();
    }
});

server.listen(8080);