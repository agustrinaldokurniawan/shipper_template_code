const AddressModel = require("./address");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const merchantAddressSchema = new Schema({
  owner: {
    type: "ObjectId",
    ref: "Merchant",
  },
});
const MerchantAddress = AddressModel.discriminator(
  "MerchantAddress",
  merchantAddressSchema,
  "MerchantAddress"
);
module.exports = MerchantAddress;
