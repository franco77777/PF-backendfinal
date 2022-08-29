const mongoose = require("mongoose")
const { Schema } = mongoose
const bcrypt = require("bcryptjs")

const usersSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["user", "admin"],
    required: true,
    default: "user",
  },
})

usersSchema.pre("save", async function (next) {
  const user = this
  // if (!user.isModified("password")) return next()
  try {
    const salt = await bcrypt.genSalt(5)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
  } catch (error) {
    console.log("no se pudo hashear user", error)
    next()
  }
})

usersSchema.methods.comparesPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

module.exports = mongoose.model("users", usersSchema)
