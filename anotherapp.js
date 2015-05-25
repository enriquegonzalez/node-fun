var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("<p>Dog is running!</p>");
  setTimeout(function(){
    response.end("<p>Dog is done!</p>");
  }, 5000);
});

server.on('close', function(){
  console.log("Closing down the server...");
});

server.listen(8080);

console.log("Listening on port 8080. . .");
