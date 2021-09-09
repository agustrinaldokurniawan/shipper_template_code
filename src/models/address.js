const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  country: {
    id: {
      type: Number,
      default: 228,
    },
    name: {
      type: String,
      default: "",
    },
  },
  city: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      default: "",
    },
  },
  province: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      default: "",
    },
  },
  district: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      default: "",
    },
  },
  subDistrict: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      default: "",
    },
  },
  lat: {
    type: String,
  },
  lng: {
    type: String,
  },
  postalcode: {
    //11020
    type: String,
    default: "",
  },
  addressDetail: {
    // Jalan Sahid Sudirman
    type: String,
    default: "",
  },
  fullAddress: {
    // `${addressDetail}, ${district}/${subDistrict}, ${province}, ${city}, ${postalCode}`
    type: String,
    default: "",
  },
  addressName: {
    //cth Rumah mas Yoko
    type: String,
    default: "",
  },
});
const Address = mongoose.model("Address", addressSchema, "Address");

module.exports = Address;
