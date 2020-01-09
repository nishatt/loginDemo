const loginService = require('../services/loginService')
module.exports = {

  async userRegisteration(req, res) {
    try {
      let data = await loginService.userRegisteration(req.body)
      return res.json({ status: true, message: "registered successfully" })
    } catch (error) {
      console.log(error)
      return res.json({ status: false, error: error.message })
    }
  },
  async userlogin(req, res) {
    try {
      let data = await loginService.userlogin(req.body)
      return res.json({ status: true, message: "login successfully", data: data })
    } catch (error) {
      return res.json({ status: false, error: error.message })
    }
  }

}