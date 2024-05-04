const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes/index')

// middlewares
app.use(express.json()) // middleware que sirve para que la informacion, que llega como objeto desde una api-rest, la pueda usar en el backend (server) con los metodos http.
app.use(cors())
app.use(router)

module.exports = app