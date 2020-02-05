const mongoose = require('mongoose')

const schema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   userName: {
      type: String,
      required: true,
      unique: true
   },
   email: {
      type: String,
      required: true,
      unique: true,
      match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   },
   password: {
      type: String,
      required: true,
      match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_\$%\^&\*])(?=.{6,})/
   },
   externalId: String,
   provider: String,
   createdAt: Date,
   updatedAt: Date,
   lastVisited: Date
})

const user = mongoose.model('users', schema)

module.exports = user