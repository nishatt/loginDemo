const express = require('express')
const route = express.Router()
const loginController = require('./controller/loginController')

route.get('/', (req, res) => {
  return res.json({
    success: "hi nishat"
  })
})
route.post('/register', loginController.userRegisteration)
route.post('/login', loginController.userlogin)

module.exports = route