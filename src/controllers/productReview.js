const ProductReview = require("../models/productReview");
const Product = require("../models/product");
const mongoose = require("mongoose");

class ProductReviewController {
  static async create(req, res) {
    try {
      const {
        productId,
        userId,
        message,
        reviewImageURL,
        isAnonymous,
        rating,
      } = await req.body;

      //   {
      //     "productId":"613aff2ffa00457d289a86d1",
      //     "userId":"613afe59fa00457d289a86cd",
      //     "message":"Enak",
      //     "rating":5
      // }

      const product = await Product.findById(productId).exec();
      if (!product) throw { message: "Product not found" };

      const newReview = await {
        productId: productId,
        userId: userId,
        message: message,
        reviewImageURL: reviewImageURL,
        isAnonymous: isAnonymous,
        rating: rating,
      };

      const createReview = await ProductReview.create(newReview).catch(
        (err) => {
          throw {
            error: err,
            message: "Error while creating review",
          };
        }
      );

      //   {
      //     "productId": "613aff2ffa00457d289a86d1",
      //     "userId": "613afe59fa00457d289a86cd",
      //     "message": "Enak",
      //     "reviewDate": "2021-09-10T06:52:02.457Z",
      //     "isAnonymous": false,
      //     "reviewImageURL": [],
      //     "rating": 5,
      //     "_id": "613b009303862422e0d971bf",
      //     "__v": 0
      // }

      await product.review.push(createReview._id);
      await product.save().catch((error) => {
        throw { message: "Error while pushing review", error };
      });

      res.json(createReview).status(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  static async getOne(req, res) {
    try {
      const { params } = await req;

      const getReview = await ProductReview.findById(params.id)
        .lean()
        .catch((error) => {
          throw { error, message: "Error while getting review" };
        });

      res.json(getReview).status(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id;
      const updateReview = await ProductReview.findByIdAndUpdate(
        id,
        req.body
      ).catch((error) => {
        throw {
          error,
          message: "Error while updating review",
        };
      });

      res.json(updateReview).status(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  static async delete(req, res) {
    try {
      const { id } = await req.params;

      const responseDelete = await ProductReview.findOneAndDelete({
        _id: id,
      }).catch((err) => {
        throw {
          message: "Your are not allow to delete this review",
          error: err,
        };
      });

      return res.json(responseDelete);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  //get Rating
  static async getProductRating(req, res) {
    try {
      const { productId, limit, skip } = await req.params;

      const reviews = await ProductReview.aggregate([
        { $match: { productId: mongoose.Types.ObjectId(productId) } },
        {
          $facet: {
            average: [
              {
                $group: {
                  _id: { product: "$productId" },
                  average: { $avg: "$rating" },
                  count: { $sum: 1 },
                },
              },
            ],
            stars: [
              {
                $group: {
                  _id: { rating: "$rating" },
                  count: { $sum: 1 },
                },
              },
            ],
          },
        },
      ]).catch((error) => {
        console.log(error);
        throw { message: "Error while aggregate reviews", error };
      });

      //   [
      //     {
      //         "average": [
      //             {
      //                 "_id": {
      //                     "product": "613b0b5ea4a128b808b28338"
      //                 },
      //                 "average": 3,
      //                 "count": 5
      //             }
      //         ],
      //         "stars": [
      //             {
      //                 "_id": {
      //                     "rating": 1
      //                 },
      //                 "count": 2
      //             },
      //             {
      //                 "_id": {
      //                     "rating": 3
      //                 },
      //                 "count": 1
      //             },
      //             {
      //                 "_id": {
      //                     "rating": 5
      //                 },
      //                 "count": 2
      //             }
      //         ]
      //     }
      // ]

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

  static async getProductWithReview(req, res) {
    try {
      const { query } = await req;

      const productIds = await query.productId.split(",").map((e) => {
        return mongoose.Types.ObjectId(e);
      });

      const product = await Product.aggregate([
        {
          $match: {
            _id: { $in: productIds },
          },
        },
        {
          $lookup: {
            from: "productreviews",
            let: { idReview: "$review" },
            pipeline: [
              { $match: { $expr: { $in: ["$_id", "$$idReview"] } } },
              { $skip: Number(query.skip) },
              { $limit: Number(query.limit) },
            ],
            as: "review",
          },
        },
        {
          $project: {
            _id: "$_id",
            productCoreInfo: 1,
            review: 1,
          },
        },
      ]).catch((error) => {
        console.log(error);
        throw { error };
      });

      return res.json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = ProductReviewController;
