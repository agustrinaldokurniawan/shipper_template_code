const Shipment = require("../models/shipment");

class shipmentController {
    static async createShipments(req, res) {
        try {
            if (!req.body) {
                throw {
                    message: "Content can not be empty"
                }
            };

            const createShipment = await Shipment.create(req.body);

            const resPayload = {
                statusCode: 200,
                statusText: "success",
                message: "Shipment is created",
                data: createShipment
            };

            res.json(resPayload).status(200);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async getAllShipment(req, res) {
        try {
            const shipments = await Shipment.find();

            const resPayload = {
                statusCode: 200,
                statusText: "success",
                message: "Get all shipments",
                data: shipments
            };

            res.json(resPayload).status(200);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};

module.exports = shipmentController;