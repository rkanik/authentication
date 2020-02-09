const router = require('express').Router()
const passport = require('passport')
const { auth } = require('../../controllers')

router.get("/login", (req, res) => {
   res.render("pages/login")
})

// Login
router.post('/login', (req, res, next) => {
   req.body.username = JSON.stringify({
      $or: [{ userName: req.body.username },
      { email: req.body.username }]
   })
   passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/auth/login',
      failureFlash: true
   })(req, res, next);
});

router.post("/register", auth.createUser)

const providers = ["google", "facebook", "github", "linkedin", "outlook"]
providers.forEach(provider => {
   router.get(`/${provider}`, passport.authenticate(provider))
   router.get(`/${provider}/callback`,
      passport.authenticate(provider, {
         failureRedirect: "/auth/login",
         successRedirect: '/profile'
      }),
   )
})

module.exports = router