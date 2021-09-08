const ShipmentModel = require("./shipment");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const merchantShipmentSchema = new Schema({
  owner: {
    type: "ObjectId",
    ref: "Merchant",
  },
});
const MerchantShipment = ShipmentModel.discriminator(
  "MerchantShipment",
  merchantShipmentSchema,
  "MerchantShipment"
);
module.exports = MerchantShipment;
