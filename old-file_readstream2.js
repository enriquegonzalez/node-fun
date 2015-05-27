var fs = require('fs');
var file = fs.createReadStream('fruits.txt');

//use pipe to read from the stream and write directly to process.stdout
file.pipe(process.stdout);
