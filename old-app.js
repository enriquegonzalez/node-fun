var http = require('http');  //How we require modules

http.createServer(function(request, response) {

response.writeHead(200); //Successful status code in header
response.write("Hello this is dog!"); //The response body
response.end(); //Close the connection

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
