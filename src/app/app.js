const express = require('express')
const passport = require('passport')

/** import middlewares */
const cors = require('cors')
const session = require('express-session')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

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
   .use(session({
      secret: process.env.SESSION_SECRET,
      saveUninitialized: true,
      resave: false,
      cookie: { secure: true }
   }))
   // passport
   .use(passport.initialize())
   .use(passport.session())

   /** view engine */
   .set('view engine', 'pug')

   /** static route */
   .get("/", (_, res) => res.send("/index"))

   /** routes */
   .use("/auth", router.auth)

/** app export */
module.exports = app