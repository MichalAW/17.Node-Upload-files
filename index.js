var server = require('./modules/server');

function css(request, response) {
  if (request.url === '/styles.css') {
    response.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('./css/style.css', {encoding: 'utf8'});
    response.write(fileContents);
  }
} 

server.start();