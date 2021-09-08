// import mongoose from 'mongoose';

// const variantCategorySchema = new mongoose.Schema({
//     categoryName: {
//         type: String,
//         requireda: true
//     }
// })

// variantCategorySchema.pre('save', async function (next) {
//     next();
// });

// const VariantCategory = mongoose.models.VariantCategory || mongoose.model('VariantCategory', variantCategorySchema);
// export default VariantCategory;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const variantCategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
  },
});

const VariantCategory = mongoose.model(
  "VariantCategory",
  variantCategorySchema,
  "VariantCategory"
);

module.exports = VariantCategory;
