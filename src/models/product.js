const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  ownerId: {
    type: "ObjectId",
    ref: "Merchant",
  },
  productCoreInfo: {
    productName: {
      type: String,
      default: "",
    },
    productUrl: {
      type: String,
      default: "",
    },
    productBrand: {
      type: String,
      default: "",
    },
    productVideoUrl: {
      type: String,
      default: "",
    },
  },
  productDetail: {
    productCondition: {
      type: String,
      enum: ["New", "Used"],
    },
    productWeight: {
      type: Number,
      min: 0,
      default: 0,
      max: 100000,
    },
    showcase: {
      type: "ObjectId",
      ref: "Showcase",
    },
    productDescription: {
      type: String,
    },
    deliveredFrom: {
      type: String,
    },
    availableStock: {
      type: Number,
      min: 0,
      max: 100000,
      default: 1,
    },
    minimumOrder: {
      type: Number,
      min: 1,
      max: 100000,
      default: 1,
    },
  },
  productCategories: {
    parentCategory: {
      // type: String,
      type: 'ObjectId',
      ref: 'ParentCategory'
    },
    mainCategory: {
      // type: String,
      type: 'ObjectId',
      ref: 'MainCategory'
    },
    subCategory: {
      // type: String,
      type: 'ObjectId',
      ref: 'SubCategory'
    },
    completeCategory: {
      type: String,
    },
  },
  productPrice: {
    textAmount: {
      type: String,
    },
    currency: {
      type: String,
    },
    priceInt: {
      type: Number,
      min: 1,
      max: 100000000000,
    },
  },
  productWholeSalePrice: {
    isHaveWholeSalePrice: {
      type: Boolean,
      default: false,
    },
    minimumQuantity: {
      type: Number,
      min: 1,
      max: 500,
      default: 1,
    },
    wholeSalePrice: {
      type: Number,
      min: 1,
      max: 100000000000,
      default: 1,
    },
  },
  productDiscount: {
    isDiscount: {
      type: Boolean,
      default: false,
    },
    discountPercentage: {
      type: Number,
      min: 0,
      max: 100,
    },
    discountPrice: {
      type: String,
    },
    discountPriceInt: {
      type: Number,
      min: 0,
      max: 100000000000,
    },
  },
  preOrderInfo: {
    isPreorderProduct: {
      type: Boolean,
      default: false,
    },
    preOrderDuration: {
      type: Number,
      min: 1,
      max: 90,
    },
  },
  importanceNotes: {
    producNotesTitle: {
      type: String,
    },
    productNotesBody: {
      type: String,
    },
  },
  performance: {
    productVisited: {
      type: Number,
      min: 0,
      max: 100000000000,
      default: 0,
    },
    productRatings: {
      type: Number,
      min: 1,
      max: 100,
    },
    productReviewCount: {
      type: Number,
      min: 0,
      max: 100000000000,
      default: 0,
    },
    productTotalSold: {
      type: Number,
      min: 0,
      max: 100000000000,
      default: 0,
    },
  },
  comissionInfo: {
    comissionProductPercentage: {
      type: Number,
      min: 0,
      max: 100,
    },
    comissionAfterSuccessPayment: {
      type: Number,
      min: 0,
      max: 100000000000,
    },
  },
  mustUsingShipmentInsurance: {
    type: Boolean,
    default: false,
  },
  productStatus: {
    type: String,
    enum: ["ACTIVE", "DEACTIVE", "OUT_OF_STOCK", "PRE_ORDERS"],
  },
  productImage: [
    {
      type: String,
    },
  ],
  productVarian: [
    {
      type: "ObjectId",
      ref: "ProductVariant",
    },
  ],
  availableShipping: [
    {
      type: "ObjectId",
      ref: "Shipment",
    },
  ],
  availableCampaign: [
    {
      type: "ObjectId",
      ref: "Campaign",
    },
  ],
  koziiCampaign: [
    {
      type: "ObjectId",
      ref: "Campaign",
    },
  ],
  availableShipment: [
    {
      type: "ObjectId",
      ref: "Shipment",
    },
  ],
  review: [
    {
      type: "ObjectId",
      ref: "Review",
    },
  ],
});

const Product = mongoose.model("Product", productSchema, "Product");

module.exports = Product;
