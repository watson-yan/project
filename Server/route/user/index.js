var mongoose = require('mongoose')
var Crypt = require('../util/crypt')
var User = mongoose.model('User')

module.exports = function (app) {
  app.get('/api/user/show', function(req, res) {
    console.log(req.session)
    User.find({}, function(err, docs) {
      if(err) {
        res.end('Error')
          return next()
        }
        res.json(docs)
    })
  })
  app.post('/api/user/save', function(req, res) {
    var user = new User ({
      userName: req.query.username,
      gender: req.query.gender || '未知',
      birth: req.query.birth,
      email: req.query.email,
      phone: req.query.phone,
      createTime: new Date(),
      lastLogin: new Date(),
      password: Crypt.aesEncrypt(req.query.password, 'mixin')
    })
    user.save(function(err) {
      if (err) {
        res.end(err)
        return next()
      }
      res.json({
        success: true
      })
    })
  })
}