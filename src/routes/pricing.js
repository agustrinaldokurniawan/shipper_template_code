const express = require("express");
const PricingController = require("../controllers/pricing");
const route = express.Router();

route
  .post("/domestic", PricingController.domestic)
  .post("/domestic/:rateType", PricingController.domesticRateType);

module.exports = route;
