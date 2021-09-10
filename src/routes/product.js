const express = require("express");
const ProductController = require("../controllers/product");
const route = express.Router();

route.post("/create-product", ProductController.create);

module.exports = route;
