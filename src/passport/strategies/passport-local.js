
const LocalStrategy = require('passport-local').Strategy
const { loginUser } = require("../../controllers/auth/auth.controller")

module.exports = new LocalStrategy(loginUser)