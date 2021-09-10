const Product = require("../models/product");

class ProductController {
  static async create(req, res) {
    try {
      const { ownerId, productName } = await req.body;

      const newProduct = await new Product({
        ownerId: ownerId,
        productCoreInfo: {
          productName: productName,
        },
      });

      await newProduct.save().catch((error) => {
        throw {
          error,
          message: "Error while creating new prodouct",
        };
      });

      return res.json(newProduct);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = ProductController;
