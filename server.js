const http = require('http')
const https = require('https')

const fs = require('fs')
require('dotenv').config()
const app = require('./src')

const PRIV_KEY = fs.readFileSync("./server.key", 'utf8')
const CERT_KEY = fs.readFileSync("./server.cert", 'utf8')
const credentials = { key: PRIV_KEY, cert: CERT_KEY };

const PORT = process.env.PORT || 3875

http.createServer(app).listen(PORT, () => console.log(`http://localhost:${PORT}`))
https.createServer(credentials, app).listen(PORT + 1, () => console.log(`https://localhost:${PORT + 1}`))

require("./src/db/mongo.connection")