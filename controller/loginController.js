const loginService = require('../services/loginService')
const loginValidation = require('../validation/userValidation')

module.exports = {

  async userRegisteration(req, res) {
    try {
      const { error } = await loginValidation.userRegisteration(req.body)
      if(!error){
        let data = await loginService.userRegisteration(req.body)
        return res.json({ status: true, message: "registered successfully" })
      }
      return res.json({status: false, message:"validation error", error: error.details})
      // if (error.isJoi && Array.isArray(error.details) && error.details.length > 0) {
      //   const invalidItem = error.details[0];
      //   return res.send(`Data Validation Error. Schema violation. <${invalidItem.path}> \nDetails: ${JSON.stringify(error.details)}`)
      // }
    } catch (error) {
      return res.json({ status: false, error: error.message })
    }
  },
  async userlogin(req, res) {
    try {
      const { error } = await loginValidation.userlogin(req.body)
      if(!error){
        let data = await loginService.userlogin(req.body)
        return res.json({ status: true, message: "login successfully", data: data })
      }
      return res.json({status: false, message:"validation error", error: error.details})
    } catch (error) {
      return res.json({ status: false, error: error.message })
    }
  }

}