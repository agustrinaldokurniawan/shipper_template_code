const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const variantSubCatSchema = new Schema({
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "VariantCategory",
  },
  SubCategoryName: {
    type: String,
    required: true,
  },
});

const VariantSubCategory = mongoose.model(
  "VariantSubCategory",
  variantSubCatSchema,
  "VariantSubCategory"
);

module.exports = VariantSubCategory;
