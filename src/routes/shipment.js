const express = require("express");
const shipmentController = require("../controllers/shipment");
const route = express.Router();

route
    .get("/get", shipmentController.getAllShipment)
    .post("/create", shipmentController.createShipments);

module.exports = route;