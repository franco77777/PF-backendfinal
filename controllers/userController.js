const User = require("./../models/users")
const bcrypt = require("bcryptjs")

const userGet = async (req, res) => {
  try {
    const users = await User.find().lean()
    return res.json(users)
  } catch (error) {
    return res.send("error to get users", error)
  }
}

const userCreate = async (req, res) => {
  try {
    const { name } = req.body
    const exist = await User.findOne({ name })
    if (exist) {
      return res.send("user already exist")
    }
    const create = new User(req.body)
    await create.save()
    return res.send("user created")
  } catch (error) {
    return res.send("error at create user", error)
  }
}

const userDelete = async (req, res) => {
  try {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    return res.json("user deleted")
  } catch (error) {
    return res.send("error at delete user", error)
  }
}

const userUpdate = async (req, res) => {
  try {
    const { id } = req.params
    const { password, name } = req.body

    if (password) {
      const salt = await bcrypt.genSalt(5)
      const dos = await bcrypt.hash(password, salt)
      await User.findByIdAndUpdate(id, { name: name, password: dos })
      return res.send("user updated")
    }
    await User.findByIdAndUpdate(id, req.body)
    return res.send("listo")
  } catch (error) {
    return res.send("error at update user", error)
  }
}

module.exports = { userCreate, userGet, userDelete, userUpdate }
