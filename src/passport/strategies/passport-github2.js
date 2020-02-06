const GithubStrategy = require('passport-github2').Strategy
const { github } = require('../providers.passport')

module.exports = new GithubStrategy({
   clientID: github.client_id,
   clientSecret: github.client_secret,
   callbackURL: github.redirect_uris[0]
}, (a, b, c, d) => {
   console.log(a, c)
})