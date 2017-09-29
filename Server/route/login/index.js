var mongoose = require('mongoose')
var Crypt = require('../util/crypt.js')
var User = mongoose.model('User')

module.exports = function(app) {
  app.post('/api/login', function(req, res) {
    var password = req.query.password
    var username = req.query.username
    if (!password || !username) {
      res.send({success: false, message: '用户名或者密码不能为空'})
    }
    password = Crypt.aesEncrypt(password, 'mixin')
    User.find({
      userName: username, 
      password: password
    }, function(err, users) {
      if (err) {
        res.end(err)
        return next()
      }
      
      if (users.length > 0) {
        var user = users[0]
        req.session.userName = user.userName
        res.json({success: true})
      } else {
        res.json({success: false, message: '用户不存在'})
      }
    })
  })
}