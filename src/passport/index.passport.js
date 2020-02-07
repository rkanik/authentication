/** Strategies */
const strategies = require("./strategies/index.strategies")
const User = require("../models/user.model")

const { linkedIn } = require("./strategies.passport")

module.exports = passport => {

   passport.use(strategies.local)
   passport.use(strategies.google)
   passport.use(strategies.facebook)
   passport.use(strategies.github)
   passport.use(linkedIn)

   passport.serializeUser((user, done) => {
      done(null, user._id);
   });

   passport.deserializeUser((_id, done) => {
      User.findById(_id, (err, user) => {
         done(err, user);
      });
   });
}