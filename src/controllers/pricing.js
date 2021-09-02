const axios = require("axios").default;
const baseURL = "https://merchant-api-sandbox.shipper.id";
const ShipperKey = "";

const { domestic, domesticRateType } = require("../dummy/pricing");

class PricingController {
  static async domestic(req, res) {
    try {
      const {
        origin,
        destination,
        height,
        length,
        width,
        weight,
        item_value,
        limit,
        page,
        sort_by,
      } = await req.body;

      let for_order = true;

      if (!origin) {
        throw {
          message: "Origin is required",
        };
      }

      if (!destination) {
        throw { message: "Destination is required" };
      }

      if (!height || !length || !width || !weight) {
        throw {
          message: "Dimension: height, width, weight, and length are required",
        };
      }

      if (!item_value) {
        throw { message: "Item Value or Item Price is required" };
      }

      //   const url = `${baseURL}/v3/pricing/domestic`;

      const pricingPayload = {
        origin,
        destination,
        height,
        length,
        width,
        weight,
        item_value,
        limit,
        page,
        sort_by,
      };

      //   const locationResponse = await axios
      //     .post(url,
      //      {...pricingPayload},
      //      {
      //       headers: {
      //         "Content-Type": "application/json",
      //          Authorization: ShipperKey
      //       },
      //     })
      //     .then((response) => {
      //       return response;
      //     })
      //     .catch((error) => {
      //       console.log({ error });
      //       throw {
      //         error: error,
      //         message: "Error while getting pricing",
      //       };
      //     });

      // This is dummy response object
      const pricingResponse = await domestic;

      return res.json(pricingResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async domesticRateType(req, res) {
    try {
      const {
        origin,
        destination,
        height,
        length,
        width,
        weight,
        item_value,
        limit,
        page,
        sort_by,
      } = await req.body;

      const { rateType } = await req.params;

      //       rate_type	string
      // "instant", "regular" , "express" "trucking" , "same-day"	The type of services that want to be displayed

      let for_order = true;

      if (!origin) {
        throw {
          message: "Origin is required",
        };
      }

      if (!destination) {
        throw { message: "Destination is required" };
      }

      if (!height || !length || !width || !weight) {
        throw {
          message: "Dimension: height, width, weight, and length are required",
        };
      }

      if (!item_value) {
        throw { message: "Item Value or Item Price is required" };
      }
      //   const url = `${baseURL}/v3/pricing/domestic/${rateType}`;

      const pricingPayload = {
        origin,
        destination,
        height,
        length,
        width,
        weight,
        item_value,
        limit,
        page,
        sort_by,
      };

      //   const locationResponse = await axios
      //     .post(url,
      //      {...pricingPayload},
      //      {
      //       headers: {
      //         "Content-Type": "application/json",
      //          Authorization: ShipperKey
      //       },
      //     })
      //     .then((response) => {
      //       return response;
      //     })
      //     .catch((error) => {
      //       console.log({ error });
      //       throw {
      //         error: error,
      //         message: "Error while getting pricing",
      //       };
      //     });

      // This is dummy response object

      const pricingResponse = await domesticRateType;

      return res.json(pricingResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = PricingController;
