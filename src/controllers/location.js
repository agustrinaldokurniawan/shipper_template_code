const axios = require("axios").default;
const baseURL = "https://merchant-api-sandbox.shipper.id";
const ShipperKey = process.env.SHIPPER_KEY;

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

      const url = `${baseURL}/v3/location?keyword=${keyword}`;

      const locationResponse = await axios
        .get(url, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": ShipperKey,
          },
        })
        .then((response) => {
          //   {
          //     "metadata": {
          //         "path": "/v3/location?adm_level=5&keyword=menteng+atas",
          //         "http_status_code": 200,
          //         "http_status": "OK",
          //         "timestamp": 1630914657
          //     },
          //     "data": [
          //         {
          //             "adm_level_1": {
          //                 "id": 228,
          //                 "level": 1,
          //                 "type": "country",
          //                 "name": "INDONESIA",
          //                 "code": "ID"
          //             },
          //             "adm_level_2": {
          //                 "id": 6,
          //                 "level": 2,
          //                 "type": "province",
          //                 "name": "DKI Jakarta"
          //             },
          //             "adm_level_3": {
          //                 "id": 41,
          //                 "level": 3,
          //                 "type": "city",
          //                 "name": "Jakarta Selatan",
          //                 "geo_coord": {
          //                     "lat": -6.2614927,
          //                     "lng": 106.8105998
          //                 }
          //             },
          //             "adm_level_4": {
          //                 "id": 482,
          //                 "level": 4,
          //                 "type": "suburb",
          //                 "name": "Setia Budi",
          //                 "geo_coord": {
          //                     "lat": -6.2195686,
          //                     "lng": 106.8325872
          //                 }
          //             },
          //             "adm_level_5": {
          //                 "id": 4710,
          //                 "level": 5,
          //                 "type": "area",
          //                 "name": "Menteng Atas",
          //                 "geo_coord": {
          //                     "lat": -6.2180511,
          //                     "lng": 106.8399623
          //                 },
          //                 "postcode": "12960"
          //             },
          //             "adm_level_cur": {
          //                 "id": 4710,
          //                 "level": 5,
          //                 "type": "area",
          //                 "name": "Menteng Atas",
          //                 "geo_coord": {
          //                     "lat": -6.2180511,
          //                     "lng": 106.8399623
          //                 },
          //                 "postcode": "12960"
          //             },
          //             "display_txt": "12960, Menteng Atas, Setia Budi, Jakarta Selatan, DKI Jakarta, INDONESIA",
          //             "postcodes": [
          //                 "12960"
          //             ]
          //         }
          //     ],
          //     "pagination": {
          //         "current_page": 1,
          //         "current_elements": 1,
          //         "total_pages": 1,
          //         "total_elements": 1
          //     }
          // }

          return response.data;
        })
        .catch((error) => {
          console.log({ error });
          throw {
            error: error,
            message: "Error while getting location",
          };
        });

      // This is dummy response object
      // const locationResponse = await location;

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

      const url = `${baseURL}/v3/location/countries?country_id=${
        country_id || 228
      }&limit=${limit || 30}&page=${page || 1}`;

      const locationResponse = await axios
        .get(url, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": ShipperKey,
          },
        })
        .then((response) => {
          //   {
          //     "metadata": {
          //         "path": "/v3/location/countries?country_id=228&limit=5&page=1",
          //         "http_status_code": 200,
          //         "http_status": "OK",
          //         "timestamp": 1631002129
          //     },
          //     "data": [
          //         {
          //             "id": 228,
          //             "name": "INDONESIA",
          //             "code": "ID"
          //         }
          //     ],
          //     "pagination": {
          //         "current_page": 1,
          //         "current_elements": 1,
          //         "total_pages": 1,
          //         "total_elements": 1
          //     }
          // }

          return response.data;
        })
        .catch((error) => {
          console.log({ error });
          throw {
            error: error,
            data: error.response.data,
            message: "Error while getting location",
          };
        });

      // This is dummy response object
      // const locationResponse = await locationCountry;

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

      const url = `${baseURL}/v3/location/country/${country_id}/provinces?limit=${
        limit || 30
      }&page=${page || 1}`;

      const locationResponse = await axios
        .get(url, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": ShipperKey,
          },
        })
        .then((response) => {
          //   {
          //     "metadata": {
          //         "path": "/v3/location/country/228/provinces?%3Acountry_id=228&limit=2&page=1",
          //         "http_status_code": 200,
          //         "http_status": "OK",
          //         "timestamp": 1631002180
          //     },
          //     "data": [
          //         {
          //             "id": 1,
          //             "name": "Bali",
          //             "lat": -8.4095178,
          //             "lng": 115.188916,
          //             "country": {
          //                 "id": 228,
          //                 "name": "INDONESIA",
          //                 "code": "ID"
          //             }
          //         },
          //         {
          //             "id": 2,
          //             "name": "Bangka Belitung",
          //             "lat": -2.7410513,
          //             "lng": 106.4405872,
          //             "country": {
          //                 "id": 228,
          //                 "name": "INDONESIA",
          //                 "code": "ID"
          //             }
          //         }
          //     ],
          //     "pagination": {
          //         "current_page": 1,
          //         "current_elements": 2,
          //         "total_pages": 17,
          //         "total_elements": 34
          //     }
          // }

          return response.data;
        })
        .catch((error) => {
          console.log({ error });
          throw {
            error: error,
            message: "Error while getting location",
          };
        });

      // This is dummy response object
      // const locationResponse = await locationProvince;

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

      const url = `${baseURL}/v3/location/province/${province_id}/cities?limit=${
        limit || 30
      }&page=${page || 1}`;

      const locationResponse = await axios
        .get(url, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": ShipperKey,
          },
        })
        .then((response) => {
          //   {
          //     "metadata": {
          //         "path": "/v3/location/province/6/cities?%3Aprovince_id=6&limit=2&page=1",
          //         "http_status_code": 200,
          //         "http_status": "OK",
          //         "timestamp": 1631002221
          //     },
          //     "data": [
          //         {
          //             "province": {
          //                 "id": 6,
          //                 "name": "DKI Jakarta",
          //                 "lat": -6.1744651,
          //                 "lng": 106.822745
          //             },
          //             "country": {
          //                 "id": 228,
          //                 "name": "INDONESIA",
          //                 "code": "ID"
          //             },
          //             "id": 38,
          //             "name": "Kepulauan Seribu",
          //             "lat": -5.7985265,
          //             "lng": 106.5071981
          //         },
          //         {
          //             "province": {
          //                 "id": 6,
          //                 "name": "DKI Jakarta",
          //                 "lat": -6.1744651,
          //                 "lng": 106.822745
          //             },
          //             "country": {
          //                 "id": 228,
          //                 "name": "INDONESIA",
          //                 "code": "ID"
          //             },
          //             "id": 39,
          //             "name": "Jakarta Utara",
          //             "lat": -6.1384145,
          //             "lng": 106.863956
          //         }
          //     ],
          //     "pagination": {
          //         "current_page": 1,
          //         "current_elements": 2,
          //         "total_pages": 3,
          //         "total_elements": 6
          //     }
          // }

          return response.data;
        })
        .catch((error) => {
          console.log({ error });
          throw {
            error: error,
            message: "Error while getting location",
          };
        });

      // This is dummy response object
      // const locationResponse = await locationCity;

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

      const url = `${baseURL}/v3/location/city/${city_id}/suburbs?limit=${
        limit || 30
      }&page=${page || 1}`;

      const locationResponse = await axios
        .get(url, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": ShipperKey,
          },
        })
        .then((response) => {
          //   {
          //     "metadata": {
          //         "path": "/v3/location/city/6/suburbs?%3Acity_id=6&limit=2&page=1",
          //         "http_status_code": 200,
          //         "http_status": "OK",
          //         "timestamp": 1631002297
          //     },
          //     "data": [
          //         {
          //             "id": 37,
          //             "name": "Tembuku",
          //             "lat": -8.4058202,
          //             "lng": 115.3904215,
          //             "city": {
          //                 "id": 6,
          //                 "name": "Bangli",
          //                 "lat": -8.2975884,
          //                 "lng": 115.3548713
          //             },
          //             "province": {
          //                 "id": 1,
          //                 "name": "Bali",
          //                 "lat": -8.4095178,
          //                 "lng": 115.188916
          //             },
          //             "country": {
          //                 "id": 228,
          //                 "name": "INDONESIA",
          //                 "code": "ID"
          //             }
          //         },
          //         {
          //             "id": 38,
          //             "name": "Susut",
          //             "lat": -8.4145123,
          //             "lng": 115.3370947,
          //             "city": {
          //                 "id": 6,
          //                 "name": "Bangli",
          //                 "lat": -8.2975884,
          //                 "lng": 115.3548713
          //             },
          //             "province": {
          //                 "id": 1,
          //                 "name": "Bali",
          //                 "lat": -8.4095178,
          //                 "lng": 115.188916
          //             },
          //             "country": {
          //                 "id": 228,
          //                 "name": "INDONESIA",
          //                 "code": "ID"
          //             }
          //         }
          //     ],
          //     "pagination": {
          //         "current_page": 1,
          //         "current_elements": 2,
          //         "total_pages": 2,
          //         "total_elements": 4
          //     }
          // }

          return response.data;
        })
        .catch((error) => {
          console.log({ error });
          throw {
            error: error,
            data: error.response.data,
            message: "Error while getting location",
          };
        });

      // This is dummy response object
      // const locationResponse = await locationSuburbs;

      return res.json(locationResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getAreas(req, res) {
    try {
      const { suburb_id, limit, page } = await req.query;

      if (!suburb_id) {
        throw {
          message: "Suburb ID must be provided",
        };
      }

      //   city_id required	integer	Shipper’s City ID integer example: 41
      //   suburb_ids	string	Array of Shipper’s Suburb ID as a string w/o square brackets, example: 482,483,484 (default: show all)
      //   limit	integer	Limit data for each page, integer example: 30 (default: 30)
      //   page	integer	Page Number integer example: 1 (default: 1)

      const url = `${baseURL}/v3/location/suburb/${suburb_id}/areas?limit=${
        limit || 30
      }&page=${page || 1}`;

      const locationResponse = await axios
        .get(url, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": ShipperKey,
          },
        })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log({ error });
          throw {
            error: error,
            data: error.response.data,
            message: "Error while getting location",
          };
        });

      // This is dummy response object
      // const locationResponse = await locationSuburbs;

      return res.json(locationResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = LocationController;
