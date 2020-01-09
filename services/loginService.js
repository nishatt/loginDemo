const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const db = require('../connection')
const config = require('../config')

module.exports = {

  async userRegisteration(reqData) {
    let con = await db()
    let user = await con.query(`SELECT * FROM users WHERE email='${reqData.email}'`)
    if (user.length) {
      throw new Error("User already exist!")
    }
    let hash = await bcrypt.hash(reqData.password, 10)
    await con.query(`INSERT INTO users (name, password, email)
      VALUES ('${reqData.name}', '${hash}', '${reqData.email}')`)
  },

  async userlogin(reqData) {

    let con = await db()
    let user = await con.query(`SELECT * FROM users WHERE email='${reqData.email}'`)
    if (!user.length) {
      throw new Error("User doesn't exist")
    }
    let userObj = user[0]
    let bcryptFlag = await bcrypt.compare(reqData.password, userObj.password)
    if (!bcryptFlag) {
      throw new Error("Invalid Password!")
    }
    const payload = {
      id: userObj.userId,
      name: userObj.name,
      email: userObj.email
    }
    return token = await jwt.sign(
      payload,
      config.JWT_SECRET,
      { expiresIn: 3600 }
    )
  }
}