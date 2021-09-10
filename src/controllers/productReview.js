const ProductReview = require("../models/productReview");
class ProductReviewController {
  static async create(req, res) {
    const { productId, userId, message, reviewImageURL, isAnonymous, rating } =
      await req.body;
  }
  static async getOne(req, res) {}
  static async update(req, res) {}
  static async delete(req, res) {}
  static async getProductReviews(req, res) {}
  static async getAll(req, res) {}
}
