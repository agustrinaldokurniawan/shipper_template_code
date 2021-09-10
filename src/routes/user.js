const express = require("express");
const UserController = require("../controllers/user");
const route = express.Router();

route.post("/create-user", UserController.create);

module.exports = route;
