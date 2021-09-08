const AddressModel = require("./address");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAddressSchema = new Schema({
  recipientsName: {
    type: String,
    required: true,
  },
  recipientPhone: {
    type: String,
    required: true,
  },
  owner: {
    type: "ObjectId",
    ref: "User",
  },
});
const UserAddress = AddressModel.discriminator(
  "UserAddress",
  userAddressSchema,
  "UserAddress"
);
module.exports = UserAddress;
