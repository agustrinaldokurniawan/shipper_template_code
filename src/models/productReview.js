const mongoose = require("mongoose");

const productReviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
  },
  reviewDate: {
    type: Date,
    default: Date.now(),
  },
  isAnonymous: {
    type: Boolean,
    required: true,
    default: false,
  },
  reviewImageURL: [
    {
      _id: false,
      type: String,
    },
  ],
  rating: {
    type: Number,
    min: [1, "Rating minimum should be 1"],
    max: [5, "Rating maximum should be 5"],
  },
});

productReviewSchema.pre("save", async function (next) {
  next();
});

const ProductReview =
  mongoose.models.ProductReview ||
  mongoose.model("ProductReview", productReviewSchema);

module.exports = ProductReview;
