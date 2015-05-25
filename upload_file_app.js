var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
  var newFile = fs.createWriteStream('readme_copy.md');
  request.pipe(newFile);

  request.on('end', function(){
    response.end('Uploaded!');
  });
}).listen(8080);

console.log("Listening on port 8080. . .");
