//manually listening for the 'readable' event on the Readable stream

var fs = require('fs');

//File Read Stream
var file = fs.createReadStream('fruits.txt');

//listen to the readable event on the newly created stream and give it a callback.
file.on('readable', function(){
  //read the data chunks from the stream and print them to the console using
  var chunk = null;
  while(null !== (chunk = file.read())){
    console.log(chunk.toString());
  }
});
