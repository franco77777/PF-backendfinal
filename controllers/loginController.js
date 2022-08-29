const Admin = require("./../models/admin")
const User = require("../models/users")
const Login = async (req, res) => {
  try {
    const { name, password } = req.body
    const adminExist = await Admin.findOne({ name })
    const userExist = await User.findOne({ name })

    if (adminExist) {
      if (!(await adminExist.comparesPassword(password))) {
        return res.json("Incorrect Password")
      }
      return res.send("admin")
    }

    if (userExist) {
      if (!(await userExist.comparesPassword(password))) {
        return res.json("Incorrect Password")
      }
      return res.send("user")
    }
    return res.json("Invalid User")
  } catch (error) {
    return res.send(console.log("error at login", error))
  }
}

module.exports = Login
