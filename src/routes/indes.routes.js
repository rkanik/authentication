const router = require('express').Router()

/** Other router exports */
exports.auth = require("./auth/auth.router")

const { ensure } = require("../passport/auth.passport")

/** Root routes */
router.get("/", (req, res) => {
   console.log(req.user)
   res.json({ msg: "Welcome" })
})

// Profile
router.get('/profile', ensure, (req, res) => {
   res.json(req.user)
})

exports.root = router