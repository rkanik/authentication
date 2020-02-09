const GithubStrategy = require('passport-github2').Strategy
const { onGithubSignin } = require("../../controllers/auth/auth.controller")
const { github } = require('../providers.passport')

const config = {
   clientID: github.client_id,
   clientSecret: github.client_secret,
   callbackURL: github.redirect_uris[1]
}

module.exports = new GithubStrategy(config, onGithubSignin)