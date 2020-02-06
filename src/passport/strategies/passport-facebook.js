const FacebookStrategy = require('passport-facebook').Strategy
const { facebook } = require("../providers.passport")

module.exports = new FacebookStrategy({
   clientID: facebook.client_id,
   clientSecret: facebook.client_secret,
   callbackURL: facebook.redirect_uris[0],
   authorizationURL: facebook.auth_uri
}, function (accessToken, refreshToken, profile, cb) {
   //User.findOrCreate({ facebookId: profile.id }, function (err, user) {
   return cb(err, profile);
   //});
})