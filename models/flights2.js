const mongoose = require("mongoose")
const { Schema } = mongoose

const flights2Schema = new Schema(
  {
    destination: {
      type: String,
      required: true,
    },
    airport: {
      type: String,
      required: true,
    },
    gate: {
      type: String,
      required: true,
    },
    departs: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    flightID: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model("flights2", flights2Schema)
