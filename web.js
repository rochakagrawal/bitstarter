var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = new Buffer(100);

var read_contents = fs.readFileSync('index.html');
var display_contents = buf.toString();

console.log(display_contents);

app.get('/', function(request, response) {
  response.send(display_contents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
