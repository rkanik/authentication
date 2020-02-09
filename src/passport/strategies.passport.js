/**
 * Strategies
 */
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy
const OutlookStrategy = require("passport-outlook2")

const configs = require("./providers.passport")
const { onGoogleSignin } = require("../controllers/auth/auth.controller")

const User = require('../models/user.model')

exports.linkedIn = new LinkedInStrategy(configs.linkedin, onGoogleSignin)
exports.outlook = new OutlookStrategy(configs.outlook,
   (req, token, refreshToken, profile, done) => {
      console.log("TOKEN => ", token)
      console.log("PROFILE => ", profile._json)
      let user = new User(profile)
      profile._id = user._id
      return done(null, user)
   })