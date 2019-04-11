var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	if (request.method === 'GET' && request.url === '/hello') {
		// First I want to read the file
		fs.readFile('../index.html', function (error, data) {
		    if (error) throw error;
		    response.write(data);
			response.end();
		});
	} else {
		fs.readFile('../images/cat.jpg', function (error, data) {
		  	if (error) throw error;
		    response.statusCode = 404;
		  	response.write('<html><body><img src="data:image/jpg;base64,')
		  	response.write(Buffer.from(data).toString('base64'));
		  	response.end('"/></body></html>');
		});
	}
});

server.listen(8080);