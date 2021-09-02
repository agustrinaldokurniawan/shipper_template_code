const axios = require("axios").default;
const baseURL = "https://merchant-api-sandbox.shipper.id";
const ShipperKey = "";

const { create, getById, deleteById } = require("../dummy/order");
class OrderController {
  static async create(req, res) {
    try {
      const {
        cosignee,
        cosigner,
        courier,
        coverage,
        origin,
        destination,
        external_id,
        package_user,
        payment_type,
        service_type,
        best_price,
      } = await req.body;

      if (!coverage) {
        throw { message: "Coverage is required" };
      }
      if (!origin) {
        throw { message: "Origin is required" };
      }
      if (!destination) {
        throw { message: "Destination is required" };
      }
      if (!package_user) {
        throw { message: "Package is required" };
      }
      if (!payment_type) {
        throw { message: "Payment type is required" };
      }

      //   const url = `${baseURL}/v3/order`;

      const orderPayload = {
        cosignee,
        cosigner,
        courier,
        coverage,
        origin,
        destination,
        external_id,
        package: package_user,
        payment_type,
        service_type,
        best_price,
      };

      //   const locationResponse = await axios
      //     .post(url,
      //      {...pricingPayload},
      //      {
      //       headers: {
      //         "Content-Type": "application/json",
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
      //         message: "Error while creating order",
      //       };
      //     });

      // This is dummy response object
      const orderResponse = await create;

      return res.json(orderResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getById(req, res) {
    try {
      const { order_id } = await req.params;

      //   const url = `${baseURL}/v3/order/${order_id}`;

      //   const locationResponse = await axios
      //     .get(url, {
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
      //         message: "Error while getting order by Id",
      //       };
      //     });

      // This is dummy response object
      const orderResponse = await getById;

      return res.json(orderResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async cancelOrder(req, res, next) {
    try {
      const { order_id, reason } = await req.body;

      //   const url = `${baseURL}/v3/order/${order_id}`;

      //   const locationResponse = await axios
      //     .delete(url,
      // {reason}
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
      //         message: "Error while delete order by Id",
      //       };
      //     });

      // This is dummy response object
      const orderResponse = await deleteById;

      return res.json(orderResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = OrderController;
