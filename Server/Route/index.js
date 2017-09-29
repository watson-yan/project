/**
 * 路由配置
 * 可以模块化，具体参考app.js中的routes(app)
 * 本方法接收一个express的实例，将路由绑定到该实例上
*/
var login = require('./login/index')
var user = require('./user/index')

var routes = [
  user, login
]

module.exports = function (app) {
  registRoute(app, routes)
}

// 注册路由
function registRoute(app, arr) {
  app.get('/', function(req, res) {
    res.send('Hello world')
  })
  arr.forEach(function(route) {
    if (typeof route === 'function') {
      route(app)
    }
  })
}


