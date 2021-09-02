const express = require("express");
const PickupControllers = require("../controllers/pickup");
const route = express.Router();

route
  .post("/create", PickupControllers.createPickup)
  .patch("/cancel/:pickup_Code", PickupControllers.cancelPickup);

module.exports = route;
