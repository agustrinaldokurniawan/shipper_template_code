const express = require("express");
const AddressController = require("../controllers/address");
const route = express.Router();

route.post(
  "/add-merchant-address/:merchantId",
  AddressController.AddMerchantAddress
);

module.exports = route;
