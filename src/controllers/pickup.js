const axios = require("axios").default;
const baseURL = "https://merchant-api-sandbox.shipper.id";
const ShipperKey = "";

const { createPickup, cancelPickup } = require("../dummy/pickup");
class PickupControllers {
  static async createPickup(req, res) {
    try {
      const { data } = await req.body;

      if (!data) {
        throw { message: "Data is required" };
      }

      //       data.order_activation.
      // order_id	Array of Strings	The ID of the order(s)

      // data.order_activation.
      // pickup_time	RFC3339	Time of order(s) to be collected

      //   const url = `${baseURL}/v3/pickup`;

      const pickupPayload = {
        data,
      };

      //   const locationResponse = await axios
      //     .post(url,
      //         pickupPayload,
      //   {
      //       headers: {
      //         Accept: "application/json",
      //          "X-API-KEY": ShipperKey
      //       },
      //     })
      //     .then((response) => {
      //       return response;
      //     })
      //     .catch((error) => {
      //       console.log({ error });
      //       throw {
      //         error: error,
      //         message: "Error while creating pickup",
      //       };
      //     });

      // This is dummy response object
      const pickupResponse = await createPickup;

      return res.json(pickupResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async cancelPickup(req, res) {
    try {
      const { pickup_Code } = await req.params;

      if (!pickup_Code) {
        throw { message: "Pickup Code is required" };
      }

      //   const url = `${baseURL}/v3/pickup/cancel`;

      const pickupPayload = {
        pickup_Code,
      };

      //   const locationResponse = await axios
      //     .patch(url,
      //         pickupPayload,
      //   {
      //       headers: {
      //         Accept: "application/json",
      //          "X-API-KEY": ShipperKey
      //       },
      //     })
      //     .then((response) => {
      //       return response;
      //     })
      //     .catch((error) => {
      //       console.log({ error });
      //       throw {
      //         error: error,
      //         message: "Error while cancel pickup",
      //       };
      //     });

      // This is dummy response object
      const pickupResponse = await cancelPickup;

      return res.json(pickupResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = PickupControllers;
