const mongoose = require("mongoose")
const { Schema } = mongoose
const bcrypt = require("bcryptjs")

const adminSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
})

adminSchema.pre("save", async function (next) {
  const admin = this
  //if (!admin.isModified("password")) return next()
  try {
    const salt = await bcrypt.genSalt(5)
    const hash = await bcrypt.hash(admin.password, salt)
    admin.password = hash
  } catch (error) {
    console.log("no se pudo hashear admin", error)
    next()
  }
})

adminSchema.methods.comparesPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

module.exports = mongoose.model("admin", adminSchema)
