var mongoose = require('./config/mongoose.js'),
    db = mongoose()
    mongoose.Promise = global.Promise

var express = require('express'), 
    session = require('express-session'),
    routes = require('./route/index')

var app = express()
app.use(session({
  secret: 'secret', //为了安全性的考虑设置secret属性
  cookie: {maxAge: 60 * 1000 * 30}, //设置过期时间
  resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
  saveUninitialized: false, //
}))
routes(app)

var server = app.listen(3000, function() {
//   var host = server.address().address;
  var port = server.address().port;
//   console.log(host)
  console.log('Example app listening port:%s', port);
})