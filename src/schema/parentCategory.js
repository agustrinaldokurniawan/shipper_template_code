const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const parentCategorySchema = new Schema({
  categoryName: {
    type: String,
    required: [true, "Category Name Cannot be Empty"],
  },
});

const ParentCategory = mongoose.model(
  "ParentCategory",
  parentCategorySchema,
  "ParentCategory"
);

module.exports = ParentCategory;
