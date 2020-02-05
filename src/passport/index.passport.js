/** Strategies */
const strategies = require("./strategies/index.strategies")

module.exports = passport => {
   passport.use(strategies.local)
   passport.use(strategies.google)

   passport.serializeUser(function (user, done) {
      done(null, user.id);
   });

   passport.deserializeUser(function (id, done) {
      User.findById(id, function (err, user) {
         done(err, user);
      });
   });
}