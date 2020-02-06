require('dotenv').config()
const app = require('./src')

const PORT = process.env.PORT || 3875

app.listen(PORT, () => {
   console.log("Server started...")
   console.log(`http://localhost:${PORT}`)
})

require("./src/db/mongo.connection")