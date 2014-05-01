var express = require('express');
var app = express ();
var fs = require ('fs');
//var logger = require ('morgan');
//var app = express.createServer(l);

app.get('/', function(request, response) {
    //  response.send('Hello World 2!');
    var buf = fs.readFileSync("index.html");
    var resp = buf.toString();
    response.send(resp);
});

var server = app.listen(8080, function() {
  console.log("Listening on port %d", server.address().port);
});