const axios = require("axios").default;
const baseURL = "https://merchant-api-sandbox.shipper.id";
const ShipperKey = process.env.SHIPPER_KEY;

const MerchantAddress = require("../models/merchantAddress");
const Merchant = require("../models/merchant");

class AddressController {
  static async AddMerchantAddress(req, res) {
    try {
      const { params, body } = req;
      const merchantExist = await Merchant.exists({ _id: params.merchantId });
      if (!merchantExist) throw new Error("Merchant Does Not Exist");
      const merchantData = await Merchant.findOne({ _id: params.merchantId })
        .select("merchantAddress")
        .exec();

      const addressQuery = {
        country: {
          id: "",
          name: "",
        },
        city: {
          id: "",
          name: "",
        },
        province: {
          id: "",
          name: "",
        },
        district: {
          id: "",
          name: "",
        },
        subDistrict: {
          id: "",
          name: "",
        },
        lat: "",
        lng: "",
        postalCode: "",
        addressDetail: "",
        fullAddress: "",
        addressName: "",
        longitude: "",
        latitude: "",
        merchantId: merchantData._id,
        senderName: "",
      };
      addressQuery.country.name = "Indonesia";
      addressQuery.country.id = 228;
      if (body.city) addressQuery.city.name = body.city;
      if (body.cityId) addressQuery.city.id = body.cityId;
      if (body.province) addressQuery.province.name = body.province;
      if (body.provinceId) addressQuery.province.id = body.provinceId;
      if (body.district) addressQuery.district.name = body.district;
      if (body.districtId) addressQuery.district.id = body.districtId;
      if (body.subDistrict) addressQuery.subDistrict.name = body.subDistrict;
      if (body.subDistrictId) addressQuery.subDistrict.id = body.subDistrictId;
      if (body.postalCode) addressQuery.postalCode = body.postalCode;
      if (body.addressDetail) addressQuery.addressDetail = body.addressDetail;
      if (body.addressName) addressQuery.addressName = body.addressName;
      if (body.longitude) addressQuery.longitude = body.longitude;
      if (body.latitude) addressQuery.latitude = body.latitude;
      if (body.senderName) addressQuery.senderName = body.senderName;
      if (body.lat) addressQuery.lat = body.lat;
      if (body.lng) addressQuery.lng = body.lng;
      addressQuery.fullAddress = `${addressQuery.addressDetail}, ${addressQuery.district.name}/${addressQuery.subDistrict.name}, ${addressQuery.province.name}, ${addressQuery.city.name}, ${addressQuery.postalCode}`;

      const dummyPayload = {
        cod: false,
        origin: {
          area_id: Number(body.subDistrictId),
          lat: String(body.lat),
          lng: String(body.lng),
          suburb_id: Number(body.districtId),
        },
        destination: {
          area_id: Number(body.subDistrictId),
          lat: String(body.lat),
          lng: String(body.lng),
          suburb_id: Number(body.districtId),
        },
        height: 30,
        weight: 1,
        width: 30,
        length: 30,
        item_value: 200000,
        limit: 10,
        page: 1,
        sort_by: ["final_price"],
      };

      //check coverage by checking pricing from shipper
      await axios({
        method: "POST",
        url: `${baseURL}/v3/pricing/domestic`,
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": ShipperKey,
        },
        data: dummyPayload,
      }).catch((error) => {
        if (error.response.data.metadata.errors[0].code === 31006) {
          //   {
          //     "message": "Add Merchant Address Failed",
          //     "error": "Your area is not supported by shipment"
          // }

          throw new Error("Your area is not supported by shipment");
        }
        throw new Error("Something wrong while checking coverage");
      });

      const data = await MerchantAddress.create(addressQuery);
      merchantData.merchantAddress.push(data._id);
      await merchantData.save();

      return res.status(201).json({
        message: "Add Merchant Address Success",
        data,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Add Merchant Address Failed",
        error: error.message,
      });
    }
  }
}

module.exports = AddressController;
