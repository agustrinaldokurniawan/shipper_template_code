const axios = require("axios").default;
const baseURL = "https://merchant-api-sandbox.shipper.id";
const ShipperKey = process.env.SHIPPER_KEY;

const { createPickup, cancelPickup } = require("../dummy/pickup");
class PickupControllers {
  static async createPickup(req, res) {
    try {
      const { data } = await req.body;

      //   {
      //     "data": {
      //         "order_activation": {
      //             "order_id": [
      //                 "219Z7YDYJ7RDP"
      //             ],
      //             "pickup_time": "2021-09-27T17:58:00+07:00"
      //         }
      //     }
      // }

      if (!data) {
        throw { message: "Data is required" };
      }

      //       data.order_activation.
      // order_id	Array of Strings	The ID of the order(s)

      // data.order_activation.
      // pickup_time	RFC3339	Time of order(s) to be collected

      const url = `${baseURL}/v3/pickup`;

      const pickupPayload = {
        data,
      };

      const pickupResponse = await axios
        .post(url, pickupPayload, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": ShipperKey,
          },
        })
        .then((response) => {
          //   {
          //     "metadata": {
          //         "path": "/v3/pickup",
          //         "http_status_code": 200,
          //         "http_status": "OK",
          //         "timestamp": 1631005173
          //     },
          //     "data": {
          //         "order_activations": [
          //             {
          //                 "order_id": "219Z7YDYJ7RDP",
          //                 "pickup_code": "P2109181I7J",
          //                 "is_activate": true,
          //                 "pickup_time": "2021-09-27T17:58:00+07:00"
          //             }
          //         ]
          //     }
          // }

          return response.data;
        })
        .catch((error) => {
          console.log({ error });
          throw {
            error: error,
            data: error.response.data,
            message: "Error while creating pickup",
          };
        });

      // // This is dummy response object
      // const pickupResponse = await createPickup;

      return res.json(pickupResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async cancelPickup(req, res) {
    try {
      const { pickup_Code } = await req.params;

      // pickup_Code = P2109181I7J

      if (!pickup_Code) {
        throw { message: "Pickup Code is required" };
      }

      const url = `${baseURL}/v3/pickup/cancel`;

      const pickupPayload = {
        pickup_Code,
      };

      const pickupResponse = await axios
        .patch(url, pickupPayload, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": ShipperKey,
          },
        })
        .then((response) => {
          // {
          //   "metadata": {
          //       "path": "/v3/pickup/cancel",
          //       "http_status_code": 200,
          //       "http_status": "OK",
          //       "timestamp": 1631005297
          //   }
          // }

          return response.data;
        })
        .catch((error) => {
          console.log({ error });
          throw {
            error: error,
            data: error.response.data,
            message: "Error while cancel pickup",
          };
        });

      return res.json(pickupResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = PickupControllers;
