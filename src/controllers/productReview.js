const ProductReview = require("../models/productReview");
class ProductReviewController {
  static async create(req, res) {
    try {
      const { productId, userId, message, reviewImageURL, isAnonymous, rating } = await req.body;

      const createReview = await ProductReview.create({...req.body});

      const resPayload = {
        statusCode: 200,
        statusText: "success",
        message: "Create a review",
        data: createReview
      };

      res.json(resPayload).status(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  static async getOne(req, res) {
    try {
      const id = req.params.id;
      const getReview = await movie.findById(id)
        .populate("productId")
        .populate("userId");

      const resPayload = {
        statusCode: 200,
        statusText: "success",
        message: "Get a review",
        data: getReview
      };

      res.json(resPayload).status(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  static async update(req, res) {
    try {
      const id = req.params.id;
      const updateReview = await ProductReview.findByIdAndUpdate(id, req.body);

      const resPayload = {
        statusCode: 200,
        statusText: "success",
        message: "Update a review",
        data: updateReview
      };

      res.json(resPayload).status(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  static async delete(req, res) {}
  static async getProductReviews(req, res) {}
  static async getAll(req, res) {}
}
