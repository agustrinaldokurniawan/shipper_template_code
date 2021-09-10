const express = require("express");
const ProductReviewController = require("../controllers/productReview");
const route = express.Router();

route
  .post("/create-review", ProductReviewController.create)
  .get("/get-by-id/:id", ProductReviewController.getOne)
  .get("/", ProductReviewController.getAll)
  .get("/rating/:productId", ProductReviewController.getProductRating)
  .get("/product-with-review", ProductReviewController.getProductWithReview)
  .put("/update/:id", ProductReviewController.update)
  .delete("/delete/:id", ProductReviewController.delete);

module.exports = route;
