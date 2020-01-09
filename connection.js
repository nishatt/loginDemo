const mysql = require('promise-mysql')
const config = require('./config')

module.exports = async() => {
  try {
    let con = await mysql.createPool({
      host: config.DB_HOST,
      user: config.DB_USER,
      password: config.DB_PASS,
      database: config.DB_NAME
    });
    console.log('Connection created successfully')
    return con;
  } catch (ex) {
    console.log(ex)
    throw ex
  }
}
