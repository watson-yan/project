var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  id: Number,
  userName: String,
  createTime: Date,
  lastLogin: Date
})

mongoose.model('User', UserSchema)