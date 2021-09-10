const User = require("../models/user");

class UserController {
  static async create(req, res) {
    try {
      const { phoneNumber, email, password } = await req.body;

      const newUser = new User({
        userCoreInfo: {
          phoneNumber: phoneNumber,
        },
        loginInfo: {
          email,
          password,
        },
      });

      await newUser.save().catch((error) => {
        throw { error, message: "Error while creating new user" };
      });

      return res.json(newUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = UserController;
