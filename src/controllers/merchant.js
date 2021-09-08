const Merchant = require("../models/merchant");

class merchantController {
    static async createMerchant(req, res) {
        try {
            if (!req.body) {
                throw {
                    message: "Content can not be empty"
                }
            };

            const createMerchant = await Merchant.create(req.body);

            const resPayload = {
                statusCode: 200,
                statusText: "success",
                message: "Merchant is created",
                data: createMerchant
            };

            res.json(resPayload).status(200);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async updateMerchant(req, res) {
        try {
            const id = req.params.id;
            const data = await Merchant.findOne(id);

            if (!data) {
                throw {
                    message: "Merchant is not found"
                }
            };

            const update = await Merchant.findByIdAndUpdate(id, {...req.body}, {new: true});

            const resPayload = {
                statusCode: 200,
                statusText: "success",
                message: "Merchant is updated",
                data: update
            };

            res.json(resPayload).status(200);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async getMerchant(req, res) {
        try {
            const id = req.params.id;

            const merchant = await Merchant.findById(id)
                .populate("Shipment");

            const resPayload = {
                statusCode: 200,
                statusText: "success",
                message: "Merchant is updated",
                data: merchant
            };

            res.json(resPayload).status(200);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};

module.exports = merchantController;