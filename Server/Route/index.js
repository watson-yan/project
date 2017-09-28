/**
 * 路由配置
 * 可以模块化，具体参考app.js中的routes(app)
 * 本方法接收一个express的实例，将路由绑定到该实例上
 */
 
module.exports = function (app) {
  app.get('/', function(req, res) {
    res.send('Hello world')
  })

}