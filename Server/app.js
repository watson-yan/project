var mongoose = require('./config/mongoose.js'),
    db = mongoose()

var express = require('express'), 
    routes = require('./route/index')

var app = express()
routes(app)

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host)
  console.log('Example app listening at http://%s:%s', host, port);
})