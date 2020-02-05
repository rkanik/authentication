
//const passport = require('passport')

/** Strategies */
const LocalStategy = require('./strategies/passport-local')

module.exports = passport => {

   passport.use(LocalStategy)

   passport.serializeUser(function (user, done) {
      done(null, user.id);
   });

   passport.deserializeUser(function (id, done) {
      User.findById(id, function (err, user) {
         done(err, user);
      });
   });

}