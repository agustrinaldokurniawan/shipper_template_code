const express = require("express");
const merchantController = require("../controllers/merchant");
const route = express.Router();

route
    .post("/create", merchantController.createMerchant)
    .put("/update/:id", merchantController.updateMerchant)
    .get("/:id", merchantController.getMerchant);

module.exports = route;