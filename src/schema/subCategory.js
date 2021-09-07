const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const subCategorySchema = new Schema({
  parentCategoryName: {
    type: "ObjectId",
    ref: "ParentCategory",
  },
  mainCategoryName: {
    type: "ObjectId",
    ref: "MainCategory",
  },
  categoryName: {
    type: "String",
    required: [true, "Category Name Must Not Be Blank"],
  },
});

const SubCategory = mongoose.model(
  "SubCategory",
  subCategorySchema,
  "SubCategory"
);
module.exports = SubCategory;
