var http = require('http');  //How we require modules
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html' }); //Successful status code in header
  response.end("<html><p>Hello, this is Dog</p></html>");
}).listen(8080); //Listen for connections on this port

console.log("Listening on port 8080");

// to run the server
// node app.js #-> "Listening on port 8080"

// to hit the server via command line
// curl http://localhost:8080
// #-> "Hello this is dog!"

// to hit the server via browser
// http://localhost:8080
// #-> "Hello this is dog!"
