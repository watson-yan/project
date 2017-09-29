var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  id: Number,
  userName: String,
  password: String,
  email: String,
  phone: String,
  address: String,
  createTime: Date,
  lastLogin: Date,
  gender: String,
  birth: Date
})

mongoose.model('User', UserSchema)