const ProductReview = require("../models/productReview");

class ProductReviewController {
  static async create(req, res) {
    const { productId, userId, message, reviewImageURL, isAnonymous, rating } =
      await req.body;
  }
  static async getOne(req, res) {}
  static async update(req, res) {}
  static async delete(req, res) {
    try {
      const { userId, reviewId } = await req.body;

      const responseDelete = await ProductReview.findOneAndDelete({
        _id: reviewId,
        userId: userId,
      }).catch((err) => {
        throw { message: "Your are not allow to delete this review" };
      });
    } catch (error) {
      return res.status(500).json(error);
    }

    return res.json(responseDelete);
  }
  static async getProductReviews(req, res) {
    try {
      const { productId } = await req.params;

      const reviews = await ProductReview.aggregate([
        { $group: { productId, averageRating: { $avg: "$rating" } } },
      ])
        .lean()
        .catch((error) => {
          throw { message: "Error while aggregate reviews", error };
        });

      return res.json(reviews);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  static async getAll(req, res) {
    try {
      const reviews = await ProductReview.find({})
        .lean()
        .catch((error) => {
          throw {
            message: "Error while fetching reviews from database",
            error: error,
          };
        });

      return res.json(reviews);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
