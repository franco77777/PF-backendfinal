const express = require("express")
const app = express()
const router = require("./routes")
const cors = require("cors")

require("dotenv").config()
require("./database/db")
const corseoptions = {
  credentials: true,
  origin: process.env.PATHHEROKU || "*",
}
app.use(cors(corseoptions))
app.use(express.json())
app.use("/", router)
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3001

app.listen(port, () => console.log("funcionando" + port))
