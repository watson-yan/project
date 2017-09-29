var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = function (app) {
  app.get('/api/user/show', function(req, res) {
    User.find({}, function(err, docs) {
      if(err) {
        res.end('Error')
          return next()
        }
        res.json(docs)
    })
  })
  app.get('/api/user/save', function(req, res) {
    console.log(req)
    var user = new User ({
      uid: 1,
      userName: 'watson',
      createTime: new Date(),
      lastLogin: new Date()
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