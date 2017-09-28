var express = require('express'),
   routes = require('./Route/index')

var app = express()
routes(app)

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})