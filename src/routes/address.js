const express = require("express");
const AddressController = require("../controllers/address");
const route = express.Router();

route.post("/add-merchant-address", AddressController.addMerchantAddress);

module.exports = route;
