const express = require("express");
const LogisticControllers = require("../controllers/logistic");
const route = express.Router();

route.get("/", LogisticControllers.getLogistics);

module.exports = route;
