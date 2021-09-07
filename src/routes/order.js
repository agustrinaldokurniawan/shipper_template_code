const express = require("express");
const OrderController = require("../controllers/order");
const route = express.Router();

route
  .post("/create", OrderController.create)
  .get("/getById/:order_id", OrderController.getById)
  .get("/available", OrderController.getAvaliableOrder)
  .delete("/cancel", OrderController.cancelOrder)
  .post("/webhookShipper", OrderController.webhookShipper);

module.exports = route;
