const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shipmentSchema = new Schema(
    {
        name: {
            type: String
        },
        rate_id: {
            type: Number
        }
    }
);

const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports = Shipment;