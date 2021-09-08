const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productVariantSchema = new Schema({
  owner: {
    type: "ObjectId",
    ref: "Product",
  },
  variantName: {
    type: String,
    required: [true, "Variant Must be Included"],
  },
  variantCategories: {
    category: {
      type: "ObjectId",
      ref: "variantCategory",
    },
    subCategory: {
      type: "ObjectId",
      ref: "variantSubCategory",
    },
  },
  variantDetails: {
    variantPrice: {
      type: String,
    },
    variantPriceInt: {
      type: Number,
      min: 1,
      max: 100000000000,
    },
    currency: {
      type: String,
    },
    variantStock: {
      type: Number,
      min: 0,
      max: 100000000000,
      default: 0,
    },
  },
  variantDiscountPrice: {
    isDiscount: {
      type: Boolean,
      default: false,
    },
    discountPercentage: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    discountPrice: {
      type: String,
    },
    discountPriceInt: {
      type: Number,
      min: 1,
      max: 100000000000,
    },
  },
  variantImageUrl: {
    type: String,
  },
});

const ProductVariant = mongoose.model(
  "ProductVariant",
  productVariantSchema,
  "ProductVariant"
);

module.exports = ProductVariant;
