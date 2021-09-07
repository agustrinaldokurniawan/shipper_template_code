const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const merchantSchema = new Schema(
    {
        name: {
            type: String
        },
        shipment: {
            type: Schema.Types.ObjectId,
            ref: "Shipment"
        }
    }
);

const Merchant = mongoose.model("Merchant", merchantSchema);

module.exports = Merchant;