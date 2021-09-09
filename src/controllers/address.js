const axios = require("axios").default;
const baseURL = "https://merchant-api-sandbox.shipper.id";
const ShipperKey = process.env.SHIPPER_KEY;

const MerchantAddress = require("../models/merchantAddress");

class AddressController {
  static async addMerchantAddress(req, res) {
    try {
      const {
        suburb_id,
        area_ids,
        limit,
        page,
        lng,
        lat,
        ownerId,
        addressDetail,
        addressName,
      } = req.body;

      //   {
      //     "suburb_id":482,
      //     "area_ids":4707,
      //     "ownerId":"6139cdfdae481efa1f6ed463",
      //     "lng":"-6.9387843",
      //     "lat":"109.89743843",
      //     "addressDetail":"Jalan patimura rt 10 rw 9 nomor 20d",
      //     "addressName":"Rumah Antoni"
      // }

      const url = `${baseURL}/v3/location/suburb/${suburb_id}/areas?limit=${
        limit || 30
      }&page=${page || 1}&area_ids=${area_ids}`;

      const locationResponse = await axios
        .get(url, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": ShipperKey,
          },
        })
        .then((response) => {
          return response.data.data[0];
        })
        .catch((err) => {
          throw {
            error: err,
            data: err.response.data,
            message: "Error while getting location",
          };
        });

      const { suburb, city, province, country, id, name, postcode } =
        locationResponse;

      const newAddressMerchant = new MerchantAddress({
        owner: ownerId,
        country: {
          id: country.id,
          name: country.name,
        },
        province: {
          id: province.id,
          name: province.name,
        },
        city: {
          id: city.id,
          name: city.name,
        },
        district: {
          id: suburb.id,
          name: suburb.name,
        },
        subDistrict: {
          id: id,
          name: name,
        },
        lat,
        lng,
        postalcode: postcode,
        addressDetail,
        fullAddress: `${addressDetail}, ${suburb.name}/${name}, ${province.name}, ${city.name}, ${postcode}`,
        addressName,
      });

      //   {
      //     "owner": "6139cdfdae481efa1f6ed463",
      //     "_id": "6139cea55b51e63726aafa89",
      //     "country": {
      //         "id": 228,
      //         "name": "INDONESIA"
      //     },
      //     "city": {
      //         "id": 41,
      //         "name": "Jakarta Selatan"
      //     },
      //     "province": {
      //         "id": 6,
      //         "name": "DKI Jakarta"
      //     },
      //     "district": {
      //         "id": 482,
      //         "name": "Setia Budi"
      //     },
      //     "subDistrict": {
      //         "id": 4707,
      //         "name": "Pasar Manggis"
      //     },
      //     "lat": "109.89743843",
      //     "lng": "-6.9387843",
      //     "postalcode": "12970",
      //     "addressDetail": "Jalan patimura rt 10 rw 9 nomor 20d",
      //     "fullAddress": "Jalan patimura rt 10 rw 9 nomor 20d, Setia Budi/Pasar Manggis, DKI Jakarta, Jakarta Selatan, 12970",
      //     "addressName": "Rumah Antoni",
      //     "__t": "MerchantAddress"
      // }

      await newAddressMerchant.save();

      return res.json(newAddressMerchant);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = AddressController;
