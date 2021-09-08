const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mainCategorySchema = new Schema({
  parentCategoryName: {
    type: "ObjectId",
    ref: "ParentCategory",
  },
  categoryName: {
    type: String,
    required: [true, "Category Name Cannot be Empty"],
  },
});

const MainCategory = mongoose.model(
  "MainCategory",
  mainCategorySchema,
  "MainCategory"
);

module.exports = MainCategory;
