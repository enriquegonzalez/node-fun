var fs = require('fs');

//docs - http://nodejs.org/docs/v0.4.8/api/fs.html#fs.readFile
//fs.readFile(filename, [encoding], [callback])
//If no encoding is specified, then the raw buffer is returned.
fs.readFile('index.html', 'utf-8', function(error, contents){ // the function is a callback
  if (error) throw error;
  console.log(contents);
});
