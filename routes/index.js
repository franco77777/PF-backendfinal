const { Router } = require("express")

const {
  adminLogin,
  adminCreate,
  adminDelete,
  adminUpdate,
  adminGet,
} = require("./../controllers/adminController")

const {
  userCreate,
  userGet,
  userDelete,
  userUpdate,
} = require("./../controllers/userController")

const {
  flightsGet,
  flightsUpdate,
  flightsDelete,
  flightsCreate,
} = require("../controllers/flightController")

const {
  flights2Get,
  flights2Update,
  flights2Delete,
  flights2Create,
} = require("../controllers/flightController2")

const {
  flightsAvailableGet,
  flightsAvailableUpdate,
  flightsAvailableDelete,
  flightsAvailableCreate,
} = require("../controllers/flightsAvailableController")

const login = require("../controllers/loginController")

const personalChange = require("../controllers/personalController")

const router = Router()

router.put("/change/:id", personalChange)

router.get("/login", login)

router.get("/user", userGet)
router.post("/user", userCreate)
router.put("/user/:id", userUpdate)
router.delete("/user/:id", userDelete)

router.get("/admin", adminGet)
router.post("/admin", adminCreate)
router.put("/admin/:id", adminUpdate)
router.delete("/admin/:id", adminDelete)

router.get("/flights", flightsGet)
router.post("/flights", flightsCreate)
router.put("/flights/:id", flightsUpdate)
router.delete("/flights/:id", flightsDelete)

router.get("/flights2", flights2Get)
router.post("/flights2", flights2Create)
router.put("/flights2/:id", flights2Update)
router.delete("/flights2/:id", flights2Delete)

router.get("/flightsAvailable", flightsAvailableGet)
router.post("/flightsAvailable", flightsAvailableCreate)
router.put("/flightsAvailable/:id", flightsAvailableUpdate)
router.delete("/flightsAvailable/:id", flightsAvailableDelete)

module.exports = router
