var fs = require('fs');

var file = fs.createReadStream('fruits.txt');
var destFile = fs.createWriteStream('fruit_destination.txt');

file.pipe(destFile, { end: false });

file.on('end', function(){
  destFile.end('Finished!');
});
