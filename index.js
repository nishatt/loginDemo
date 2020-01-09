const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userRoute = require('./router')
const db = require('./connection')
const config = require('./config')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// route
app.use('/user', userRoute)

// listen port for connectivity
let port = config.PORT || '3003'
app.listen(port, () => {
  console.log(`app is listening ${port}`)
})