const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const options = { discriminatorKey: "addressType" };

const addressSchema = new Schema(
  {
    country: { //Indonesia
      type: String,
      default: "",
    },
    city: { //Jakarta
      type: String,
      default: "",
    },
    province: { //DKI Jakarta
      type: String,
      default: "",
    },
    district: { // Tanah Abang
      type: String,
      default: "",
    },
    subDistrict: { //Karet
      type: String,
      default: "",
    },
    postalcode: { //11020
      type: String,
      default: "",
    },
    addressDetail: { // Jalan Sahid Sudirman
      type: String,
      default: ''
    },
    fullAddress: { // `${addressDetail}, ${district}/${subDistrict}, ${province}, ${city}, ${postalCode}`
      type: String,
      default: "",
    },
    addressName: { //cth Rumah mas Yoko
      type: String,
      default: "",
    },
  },
  options
);
const Address = mongoose.model("Address", addressSchema, "Address");

module.exports = Address;
