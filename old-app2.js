var http = require('http');  //How we require modules
var fs = require('fs');

http.createServer(function(request, response) {

response.writeHead(200, {'Content-Type': 'text/html' }); //Successful status code in header


fs.readFile('index.html', 'utf-8', function(error, contents){ // the function is a callback
  if (error) throw error;
  response.write(contents);

  //Close the connection. It needs to be inside the readFile so that the connection isn't closed before the file read is finished. Remember this is non-blocking code.
  response.end();
});

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
