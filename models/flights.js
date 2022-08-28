const mongoose = require("mongoose")
const { Schema } = mongoose

const flightsSchema = new Schema({
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
  },
  departs: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  flight: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model("flights", flightsSchema)
