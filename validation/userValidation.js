const Joi = require('@hapi/joi')

module.exports = {
  async userRegisteration(data){
    console.log("ggg", data)
    const userSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.string().required().valid(Joi.ref('password'))
    })
    return await userSchema.validate(data)
  },
  async userlogin(data){
    let userSchema = Object.keys({
      email: Joi.email().required(),
      password: Joi.string().required(),
    })
    return await Joi.validate(data, userSchema)
  }
}