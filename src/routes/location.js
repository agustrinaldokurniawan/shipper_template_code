const express = require("express");
const LocationController = require("../controllers/location");
const route = express.Router();

route
  .get("/", LocationController.searchByKeyword)
  .get("/country", LocationController.getCountries)
  .get("/province", LocationController.getProvince)
  .get("/city", LocationController.getCity)
  .get("/suburbs", LocationController.getSuburbs)
  .get("/areas", LocationController.getAreas);

module.exports = route;
