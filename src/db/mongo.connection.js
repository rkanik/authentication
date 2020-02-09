const mongoose = require('mongoose')

const config = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true
}
const connectionUri = process.env.MONGO_LOCAL

mongoose.connect(connectionUri, config, error => {
   if (error) {
      console.log(error)
   } else {
      console.log('Database connected')
   }
})
