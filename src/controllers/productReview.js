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
