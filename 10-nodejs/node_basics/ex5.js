
var http = require('http');

function app(request, response) {

  var path = request.url

  if (path === '/') {
    // response.write('you are not welcome');
    response.end('<p>first line</p><p>second line</p>');
  } else {
    // response.write('go back to the home page')
    response.end('go back to the home page');    
  }

}

var server = http.createServer(app);

server.listen(8080, function() {
  console.log('my first server listening at 8080')
});




