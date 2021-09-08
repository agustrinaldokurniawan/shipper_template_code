const express = require("express");
const LogisticControllers = require("../controllers/logistic");
const route = express.Router();

route
  .get("/", LogisticControllers.getLogistics)
  .get(
    "/active-logistics-merchant/:ownerId",
    LogisticControllers.getActiveLogisticMerchant
  )
  .post(
    "/add-active-logistic-merchant",
    LogisticControllers.addActiveLogisticMerchant
  )
  .delete(
    "/delete-active-logistic-merchant",
    LogisticControllers.removeActiveLogistic
  );

module.exports = route;
