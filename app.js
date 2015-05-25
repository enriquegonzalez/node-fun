var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

server.on('close', function(){
  console.log("Closing down the server...");
});

server.listen(8080);

console.log("Listening on port 8080. . .");


// to run the server
// node app.js #-> "Listening on port 8080"

// to hit the server via command line
// curl http://localhost:8080
// #-> "Hello this is dog!"

// to hit the server via browser
// http://localhost:8080
// #-> "Hello this is dog!"
