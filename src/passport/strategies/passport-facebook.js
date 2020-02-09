const FacebookStrategy = require('passport-facebook').Strategy
const { onFacebookSignin } = require("../../controllers/auth/auth.controller")
const { facebook } = require("../providers.passport")

const config = {
   clientID: facebook.client_id,
   clientSecret: facebook.client_secret,
   callbackURL: facebook.redirect_uris[0],
   authorizationURL: facebook.auth_uri,
   scope: facebook.scopes
}

module.exports = new FacebookStrategy(config, onFacebookSignin)