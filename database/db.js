const mongoose = require("mongoose")
const flightsDb = require("./fligthsDb")
const availableFlights = require("./flightsAvailable")

mongoose
  .connect(process.env.URI)
  .then(availableFlights())
  .then(flightsDb())
  .then(() => console.log("db conectada"))
  .catch(e => console.log("fallo la conexion" + e))
