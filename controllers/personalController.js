const Admin = require("./../models/admin")
const User = require("../models/users")

const personalChange = async (req, res) => {
  const { id } = req.params
  const isAdmin = await Admin.findById(id)
  const isUser = await User.findById(id)
  if (isAdmin) {
    const create = new User({
      name: isAdmin.name,
      password: isAdmin.password,
      _id: isAdmin._id,
    })
    await create.save()
    await Admin.findByIdAndDelete(id)
    return res.send("you are now a user")
  }
  if (isUser) {
    const create = new Admin({
      name: isUser.name,
      password: isUser.password,
      _id: isUser._id,
    })
    await create.save()
    await User.findByIdAndDelete(id)
    return res.send("you are now an administrator")
  }
  return res.send("error")
}

module.exports = personalChange
