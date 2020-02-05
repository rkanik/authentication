const { User } = require("../../models")
const bCript = require('bcryptjs')

exports.createUser = async (req, res) => {
   await User.init()
   let user = new User({
      ...req.body,
      userName: req.body.userName.toLowerCase(),
      email: req.body.email.toLowerCase()
   })
   let validationError = user.validateSync()
   if (validationError !== undefined) {
      res.status(500).json({
         error: true,
         message: validationError.message,
         errors: [...Object.keys(validationError.errors).map(key => (validationError.errors[key].message))],
      })
   } else {
      /** Hashing password */
      let salt = bCript.genSaltSync(10)
      user.password = bCript.hashSync(user.password, salt)
      user.save().then(doc => {
         res.status(201).json({
            error: false,
            message: "User created successfully!",
            data: doc._doc
         })
      }).catch(err => {
         res.status(500).json({
            error: true,
            errorCode: err.code,
            message: err.errmsg
         })
      })
   }
}

exports.loginUser = async (username, password, done) => {
   /** username should be like this
    * {"$or":[{"userName":"rkanik"},{"email":"rkanik"}]} 
    * {"$or":[{"userName":"rkanik773@gmail.com"},{"email":"rkanik773@gmail.com"}]}
    */
   let orCondition = JSON.parse(username)
   let user = await User.findOne(orCondition).select("-__v")
   if (user) {
      done(null, user)
   } else {
      done(true, null, "User not found!")
   }
}