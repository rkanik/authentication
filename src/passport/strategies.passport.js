const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy
const configs = require("./providers.passport")
const { onGoogleSignin } = require("../controllers/auth/auth.controller")

exports.linkedIn = new LinkedInStrategy(configs.linkedin, onGoogleSignin)