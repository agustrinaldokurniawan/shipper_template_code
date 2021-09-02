const axios = require("axios").default;
const baseURL = "https://merchant-api-sandbox.shipper.id";
const ShipperKey = "";

const {
  locationKeyword,
  locationCountry,
  locationProvince,
  locationCity,
  locationSuburbs,
} = require("../dummy/locationResponse");

class LocationController {
  static async searchByKeyword(req, res) {
    try {
      const { adm_level, keyword } = await req.query;

      //adm_level (optional) is integer = Location Administrative Level [1=country, 2=province, 3=city, 4=suburb, 5=area] integer example: 1 (default: show all)
      //keyword (required) string >= 3 characters = Input Location Keyword [Min: 3 character] example: jakarta

      if (!keyword) {
        throw {
          message: "Invalid Keyword",
        };
      }

      //   const url = `${baseURL}/v3/location?adm_level=${
      //     adm_level || 3
      //   }&keyword=${keyword}`;

      //   const locationResponse = await axios
      //     .get(url, {
      //       headers: {
      //         Accept: "application/json",
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
      //         message: "Error while getting location",
      //       };
      //     });

      // This is dummy response object
      const locationResponse = await location;

      return res.json(locationResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getCountries(req, res) {
    try {
      const { country_id, limit, page } = await req.query;

      //         country_id =	integer =	Shipper’s Country ID integer (default: 228)
      // limit =	integer =	Limit data for each page, integer example:30 (default: 30)
      // page = integer =	Page Number integer example: 1 (default: 1)

      //   const url = `${baseURL}/v3/location/countries?country_id=${
      //     country_id}&limit=${limit}&page={page}`;

      //   const locationResponse = await axios
      //     .get(url, {
      //       headers: {
      //         Accept: "application/json",
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
      //         message: "Error while getting location",
      //       };
      //     });

      // This is dummy response object
      const locationResponse = await locationCountry;

      return res.json(locationResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getProvince(req, res) {
    try {
      const { country_id, limit, page } = await req.query;

      if (!country_id) {
        throw {
          message: "Country ID must be provided",
        };
      }

      //   country_id
      //   (required)	integer	Shipper’s Country ID integer example:228

      //   limit	integer	Limit data for each page, integer example:30 (default: 30)

      //   page	integer	Page Number integer example: 1 (default: 1)

      //   province_id	integer	Shipper’s Province ID integer example: 6 (default: show all)

      //   const url = `${baseURL}/v3/location/country/${country_id}/provinces?limit=${limit}&page=${page}`;

      //   const locationResponse = await axios
      //     .get(url, {
      //       headers: {
      //         Accept: "application/json",
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
      //         message: "Error while getting location",
      //       };
      //     });

      // This is dummy response object
      const locationResponse = await locationProvince;

      return res.json(locationResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getCity(req, res) {
    try {
      const { province_id, limit, page } = await req.query;

      if (!province_id) {
        throw {
          message: "Province ID must be provided",
        };
      }

      //   province_id
      //   (required)	integer	Shipper’s Province ID integer example: 6

      //   city_ids	string	Array of Shipper’s City ID as a string w/o square brackets example: 41,42,43,44 (default: show all)
      //   limit	integer	Limit data for each page, integer example: 30 (default: 30)
      //   page	integer	Page Number integer example: 1 (default: 1)

      //   const url = `${baseURL}/v3/location/province/${province_id}/cities?limit=${limit}&page={page}`;

      //   const locationResponse = await axios
      //     .get(url, {
      //       headers: {
      //         Accept: "application/json",
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
      //         message: "Error while getting location",
      //       };
      //     });

      // This is dummy response object
      const locationResponse = await locationCity;

      return res.json(locationResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getSuburbs(req, res) {
    try {
      const { city_id, limit, page } = await req.query;

      if (!city_id) {
        throw {
          message: "City ID must be provided",
        };
      }

      //   city_id required	integer	Shipper’s City ID integer example: 41
      //   suburb_ids	string	Array of Shipper’s Suburb ID as a string w/o square brackets, example: 482,483,484 (default: show all)
      //   limit	integer	Limit data for each page, integer example: 30 (default: 30)
      //   page	integer	Page Number integer example: 1 (default: 1)

      //   const url = `${baseURL}/v3/location/city/${city_id}/suburbs?limit=${limit}&page={page}`;

      //   const locationResponse = await axios
      //     .get(url, {
      //       headers: {
      //         Accept: "application/json",
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
      //         message: "Error while getting location",
      //       };
      //     });

      // This is dummy response object
      const locationResponse = await locationSuburbs;

      return res.json(locationResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = LocationController;
