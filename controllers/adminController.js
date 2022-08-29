const Admin = require("./../models/admin")
const bcrypt = require("bcryptjs")
const User = require("./../models/users")

const adminLogin = async (req, res) => {
  try {
    const { name, password,status } = req.body
    const exist = await Admin.findOne({ name: name })
    console.log(exist)
    if (!exist) return res.json([false, "nonexistent admin name"])
    if (!(await exist.comparesPassword(password))) {
      return res.json([false, "Incorrect password"])
    }
    return res.json(true)
  } catch (error) {
    return res.send(console.log("error login admin", error))
  }
}

const adminGet = async (req, res) => {
  try {
    const resultado = await Admin.find().lean()
    return res.json(resultado)
  } catch (error) {
    console.log("error at get admins", error)
  }
}

const adminCreate = async (req, res) => {
  try {
    const { name } = req.body
    const exist = await User.findOne({ name })
    if (exist) {
      return res.send("user name already exist")
    }
    const newAdmin = new Admin(req.body)
    await newAdmin.save()
    return res.send("admin created")
  } catch (error) {
    return res.send(console.log("error at admin creacion", error))
  }
}

const adminDelete = async (req, res) => {
  try {
    const { id } = req.params
    await Admin.findByIdAndDelete(id)
    return res.json("admin deleted")
  } catch (error) {
    return res.send("error at delete admin", error)
  }
}

const adminUpdate = async (req, res) => {
  try {
    const { id } = req.params
    const { password, name } = req.body
    const exist = await User.findOne({ name: name })
    if (exist) {
      return res.send("name already exist")
    }
    if (password) {
      const salt = await bcrypt.genSalt(5)
      const dos = await bcrypt.hash(password, salt)
      await Admin.findByIdAndUpdate(id, { name: name, password: dos })
      return res.send("admin updated")
    }
    await Admin.findByIdAndUpdate(id, req.body)
    return res.send("admin updated")
  } catch (error) {
    return res.send("error at update admin", error)
  }
}

module.exports = { adminLogin, adminCreate, adminUpdate, adminDelete, adminGet }
