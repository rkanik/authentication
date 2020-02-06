const express = require('express')
const passport = require('passport')

/** import middlewares */
const cors = require('cors')
const session = require('express-session')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const flash = require("connect-flash")

/** import router */
const router = require("../routes/indes.routes")

/** initializing app */
const app = express()

/** setting-up passport */
require("../passport/index.passport")(passport)

/** use middlewares */
app
   .use(cors())
   .use(morgan('dev'))
   .use(cookieParser())
   .use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: true }))
   .use(session({
      secret: process.env.SESSION_SECRET,
      saveUninitialized: true,
      resave: true,
      cookie: { secure: false }
   }))

   /** Flash */
   .use(flash())
   .use((req, res, next) => {
      res.locals.success_msg = req.flash('success_msg');
      res.locals.error_msg = req.flash('error_msg');
      res.locals.error = req.flash('error');
      next();
   })

   // passport
   .use(passport.initialize())
   .use(passport.session())

   /** view engine */
   .set('view engine', 'pug')

   /** root routes */
   .use("/", router.root)

   /** other routes */
   .use("/auth", router.auth)

/** app export */
module.exports = app