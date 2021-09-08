const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shipmentSchema = new Schema({
  isAvailable: {
    type: Boolean,
    default: true,
  },
  shippingId: {
    type: String,
  },
  shippingRateId: {
    type: String,
  },
  shippingName: {
    type: String,
    required: [true, "Shipping Name Must be Included"],
  },
  shippingType: {
    type: String,
  },
  shippingImageUrl: {
    type: String,
  },
});

const Shipment = mongoose.model("Shipment", shipmentSchema, "Shipment");
module.exports = Shipment;
