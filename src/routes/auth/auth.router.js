
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

router.get("/google", passport.authenticate('google'))
router.get("/google/callback", passport.authenticate('google', {
   successRedirect: "/profile",
   failureRedirect: "/auth/login"
}))

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback',
   passport.authenticate('facebook', { failureRedirect: '/auth/login' }),
   function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
   });

router.get("/github", passport.authenticate('github', { scope: ['user:email'] }))
router.get("/github/callback",
   passport.authenticate('github', { failureRedirect: '/auth/login' }),
   function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/profile');
   }
)

module.exports = router