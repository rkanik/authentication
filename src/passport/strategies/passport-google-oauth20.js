
const GoogleStrategy = require("passport-google-oauth20").Strategy
const { onGoogleSignin } = require("../../controllers/auth/auth.controller")
const { google } = require("../providers.passport")

const googleConfig = {
   clientID: google.client_id,
   clientSecret: google.client_secret,
   callbackURL: google.redirect_uris[0],
   authorizationURL: google.auth_uri,
   scope: google.scopes
}

module.exports = new GoogleStrategy(googleConfig,
   (accessToken, refreshToken, profile, done) => { onGoogleSignin(accessToken, refreshToken, profile, done) }
)