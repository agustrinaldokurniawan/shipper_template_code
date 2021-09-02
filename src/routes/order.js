const express = require("express");
const OrderController = require("../controllers/order");
const route = express.Router();

route
  .post("/create", OrderController.create)
  .get("/:order_id", OrderController.getById)
  .delete("/cancel", OrderController.cancelOrder);

module.exports = route;
