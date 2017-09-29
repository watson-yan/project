var mongoose = require('mongoose')
var config = require('./config')
var models = require('../models/index')

module.exports = function() {
  var db = mongoose.connection.openUri(config.mongodb)
  models()
  return db
}