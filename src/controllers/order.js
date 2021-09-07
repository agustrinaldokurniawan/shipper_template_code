const axios = require("axios").default;
const baseURL = "https://merchant-api-sandbox.shipper.id";
const ShipperKey = process.env.SHIPPER_KEY;

const { create, getById, deleteById } = require("../dummy/order");
class OrderController {
  static async create(req, res) {
    try {
      const {
        merchantId,
        userId,
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

      //   {
      //     "merchantId":"9219482340275843",
      //     "userId":"wye7785345",
      //   "courier": {
      //     "cod": false,
      //     "rate_id": 15,
      //     "use_insurance": true
      //   },
      //   "coverage": "domestic",
      //   "destination": {
      //     "address": "Jalan Kenangan",
      //     "area_id": 12212,
      //     "lat": "-6.123123123",
      //     "lng": "104.12312312"
      //   },
      //   "external_id": "KRN12311231211",
      //   "origin": {
      //     "address": "Jalan Menteng Dalam",
      //     "area_id": 4711,
      //     "lat": "-6.2197608",
      //     "lng": "106.8266873"
      //   },
      //   "package_user": {
      //     "height": 60,
      //     "items": [
      //       {
      //         "name": "Baju Baju",
      //         "price": 120000,
      //         "qty": 12
      //       }
      //     ],
      //     "length": 30,
      //     "package_type": 2,
      //     "price": 122000,
      //     "weight": 1.1231,
      //     "width": 40
      //   },
      //   "payment_type": "postpay"
      // }

      // if flow using merchantID and userID
      // if (!merchantId) throw { message: "Merchant ID is needed" };
      // if (!userId) throw { message: "User ID is needed" };

      // const merchant = await Merchant.findById(merchantId).populate("defaultAddress").lean();
      // if (!mercahnt) throw { message: "Merchant not found" };

      //dummy data merchant
      const merchant = await {
        merchantCoreInfo: {
          storeName: "Toko Jaya Abadi",
          phoneNumber: "62812345678901",
        },
      };

      if (!merchant.merchantCoreInfo.storeName)
        throw { message: "Merchant Store Name is required" };
      if (!merchant.merchantCoreInfo.phoneNumber)
        throw { message: "Merchant Phone number is required" };

      // // const user = await User.findById(userId).lean();
      // // if (!user) throw { message: "User not found" };

      // //dummy data user
      const user = await {
        userCoreInfo: {
          fullName: "Agust Rinaldo Kurniawan",
          phoneNumber: "6289638672690",
        },
      };

      if (!user.userCoreInfo.fullName)
        throw { message: "User Name Receiver is required" };
      if (!user.userCoreInfo.phoneNumber)
        throw { message: "User Phone number is required" };

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

      // // pengirim
      const merchantConsignee = await {
        name: merchant.merchantCoreInfo.storeName,
        phone_number: merchant.merchantCoreInfo.phoneNumber,
      };

      // // penerima
      const userConsigner = await {
        name: user.userCoreInfo.fullName,
        phone_number: user.userCoreInfo.phoneNumber,
      };

      const orderPayload = {
        consignee: merchantConsignee,
        consigner: userConsigner,
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

      // return res.json({ package_user: package_user.price });

      const url = `${baseURL}/v3/order`;
      const orderResponse = await axios({
        method: "POST",
        url,
        data: orderPayload,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-Key": ShipperKey,
        },
      })
        .then((response) => {
          //   {
          //     "metadata": {
          //         "path": "/v3/order",
          //         "http_status_code": 201,
          //         "http_status": "Created",
          //         "timestamp": 1631004305
          //     },
          //     "data": {
          //         "coverage": "domestic",
          //         "external_id": "KRN12311231211",
          //         "order_id": "219PE62KWMMNX",
          //         "payment_type": "cash",
          //         "courier": {
          //             "rate_id": 15,
          //             "amount": 84000,
          //             "use_insurance": true,
          //             "insurance_amount": 7200,
          //             "cod": false
          //         },
          //         "consignee": {
          //             "name": "Toko Jaya Abadi",
          //             "phone_number": "62812345678901"
          //         },
          //         "consigner": {
          //             "name": "Agust Rinaldo Kurniawan",
          //             "phone_number": "6289638672690"
          //         },
          //         "destination": {
          //             "address": "Jalan Kenangan",
          //             "area_id": 12212,
          //             "area_name": "Margaasih",
          //             "city_id": 75,
          //             "city_name": "Bandung, Kab.",
          //             "country_id": 228,
          //             "country_name": "INDONESIA",
          //             "lat": "-6.123123123",
          //             "lng": "104.12312312",
          //             "postcode": "40351",
          //             "province_id": 9,
          //             "province_name": "Jawa Barat",
          //             "suburb_id": 1242,
          //             "suburb_name": "Margaasih"
          //         },
          //         "origin": {
          //             "address": "Jalan Menteng Dalam",
          //             "area_id": 4711,
          //             "area_name": "Karet Kuningan",
          //             "city_id": 41,
          //             "city_name": "Jakarta Selatan",
          //             "country_id": 228,
          //             "country_name": "INDONESIA",
          //             "lat": "-6.2197608",
          //             "lng": "106.8266873",
          //             "postcode": "12940",
          //             "province_id": 6,
          //             "province_name": "DKI Jakarta",
          //             "suburb_id": 482,
          //             "suburb_name": "Setia Budi"
          //         },
          //         "package": {
          //             "package_type": 2,
          //             "weight": 1.1231,
          //             "length": 30,
          //             "width": 40,
          //             "height": 60,
          //             "price": 1440000,
          //             "items": [
          //                 {
          //                     "id": 717898,
          //                     "name": "Baju Baju",
          //                     "qty": 12,
          //                     "price": 120000
          //                 }
          //             ]
          //         }
          //     }
          // }

          return response.data;
        })
        .catch((error) => {
          console.log({ error });
          throw {
            error: error,
            data: error.response.data,
            message: "Error while creating order",
          };
        });

      return res.json(orderResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getAvaliableOrder(req, res) {
    try {
      const url = `${baseURL}/v3/order`;

      const orderResponse = await axios
        .get(url, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": ShipperKey,
          },
        })
        .then((response) => {
          //   {
          //     "metadata": {
          //         "path": "/v3/order/215VKK6KQYEX2?%3Aorder_id=215VKK6KQYEX2&",
          //         "http_status_code": 200,
          //         "http_status": "OK",
          //         "timestamp": 1622192522
          //     },
          //     "data": {
          //         "consignee": {
          //             "name": "Pengirim",
          //             "phone_number": "62852280038095"
          //         },
          //         "consigner": {
          //             "name": "Penerima",
          //             "phone_number": "62852280038095"
          //         },
          //         "origin": {
          //             "id": 4466605,
          //             "stop_id": 50,
          //             "address": "Jalan Kenangan",
          //             "direction": "",
          //             "postcode": "12940",
          //             "area_id": 4711,
          //             "area_name": "Karet Kuningan",
          //             "suburb_id": 482,
          //             "suburb_name": "Setia Budi",
          //             "city_id": 41,
          //             "city_name": "Jakarta Selatan",
          //             "province_id": 6,
          //             "province_name": "DKI Jakarta",
          //             "country_id": 228,
          //             "country_name": "INDONESIA",
          //             "lat": "-6.2197608",
          //             "lng": "106.8266873"
          //         },
          //         "destination": {
          //             "id": 0,
          //             "stop_id": 4327,
          //             "address": "Jalan Kenangan",
          //             "direction": "",
          //             "postcode": "12940",
          //             "area_id": 4711,
          //             "area_name": "Karet Kuningan",
          //             "suburb_id": 482,
          //             "suburb_name": "Setia Budi",
          //             "city_id": 41,
          //             "city_name": "Jakarta Selatan",
          //             "province_id": 6,
          //             "province_name": "DKI Jakarta",
          //             "country_id": 228,
          //             "country_name": "INDONESIA",
          //             "lat": "-6.2197608",
          //             "lng": "106.8266860"
          //         },
          //         "external_id": "KRN123111",
          //         "order_id": "215VKK6KQYEX2",
          //         "courier": {
          //             "rate_id": 4,
          //             "amount": 108000,
          //             "use_insurance": true,
          //             "insurance_amount": 7880,
          //             "cod": false,
          //             "min_day": 1,
          //             "max_day": 2
          //         },
          //         "package": {
          //             "weight": 1.1231,
          //             "length": 30,
          //             "width": 40,
          //             "height": 60,
          //             "volume_weight": 12,
          //             "package_type": 2,
          //             "items": [
          //                 {
          //                     "id": 717898,
          //                     "name": "Baju Baju",
          //                     "price": 120000,
          //                     "qty": 12
          //                 }
          //             ]
          //         },
          //         "payment_type": "postpay",
          //         "driver": {
          //             "name": "",
          //             "phone": "",
          //             "vehicle_type": "",
          //             "vehicle_number": ""
          //         },
          //         "label_check_sum": "7742142f6d65ce36275b85cc16e5ffbd",
          //         "creation_date": "2021-05-28T08:16:21Z",
          //         "last_updated_date": "2021-05-28T08:16:33Z",
          //         "awb_number": "",
          //         "trackings": [
          //             {
          //                 "shipper_status": {
          //                     "code": 1000,
          //                     "name": "Paket sedang dipersiapkan",
          //                     "description": "Paket sedang dipersiapkan"
          //                 },
          //                 "logistic_status": {
          //                     "code": 1,
          //                     "name": "Order Masuk ke sistem",
          //                     "description": "Data order sudah masuk ke sistem"
          //                 },
          //                 "created_date": "2021-05-28T08:16:21Z"
          //             },
          //             {
          //                 "shipper_status": {
          //                     "code": 1000,
          //                     "name": "Paket sedang dipersiapkan",
          //                     "description": "Paket sedang dipersiapkan"
          //                 },
          //                 "logistic_status": {
          //                     "code": 1,
          //                     "name": "Order Masuk ke sistem",
          //                     "description": "Data order sudah masuk ke sistem"
          //                 },
          //                 "created_date": "2021-05-28T08:16:33Z"
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
            message: "Error while getting order by Id",
          };
        });

      return res.json(orderResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getById(req, res) {
    try {
      const { order_id } = await req.params;

      const url = `${baseURL}/v3/order/${order_id}`;

      const orderResponse = await axios
        .get(url, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": ShipperKey,
          },
        })
        .then((response) => {
          //   {
          //     "metadata": {
          //         "path": "/v3/order/219PE62KWMMNX?%3Aorder_id=219PE62KWMMNX&",
          //         "http_status_code": 200,
          //         "http_status": "OK",
          //         "timestamp": 1631004364
          //     },
          //     "data": {
          //         "consignee": {
          //             "name": "Toko Jaya Abadi",
          //             "phone_number": "62812345678901"
          //         },
          //         "consigner": {
          //             "name": "Agust Rinaldo Kurniawan",
          //             "phone_number": "6289638672690"
          //         },
          //         "origin": {
          //             "id": 4473188,
          //             "stop_id": 50,
          //             "address": "Jalan Menteng Dalam",
          //             "direction": "",
          //             "postcode": "12940",
          //             "area_id": 4711,
          //             "area_name": "Karet Kuningan",
          //             "suburb_id": 482,
          //             "suburb_name": "Setia Budi",
          //             "city_id": 41,
          //             "city_name": "Jakarta Selatan",
          //             "province_id": 6,
          //             "province_name": "DKI Jakarta",
          //             "country_id": 228,
          //             "country_name": "INDONESIA",
          //             "lat": "-6.2197608",
          //             "lng": "106.8266873"
          //         },
          //         "destination": {
          //             "id": 0,
          //             "stop_id": 5087,
          //             "address": "Jalan Kenangan",
          //             "direction": "",
          //             "postcode": "40351",
          //             "area_id": 12212,
          //             "area_name": "Margaasih",
          //             "suburb_id": 1242,
          //             "suburb_name": "Margaasih",
          //             "city_id": 75,
          //             "city_name": "Bandung, Kab.",
          //             "province_id": 9,
          //             "province_name": "Jawa Barat",
          //             "country_id": 228,
          //             "country_name": "INDONESIA",
          //             "lat": "-6.123123123",
          //             "lng": "104.12312312"
          //         },
          //         "external_id": "KRN12311231211",
          //         "order_id": "219PE62KWMMNX",
          //         "courier": {
          //             "name": "Wahana",
          //             "rate_id": 15,
          //             "rate_name": "Regular",
          //             "amount": 84000,
          //             "use_insurance": true,
          //             "insurance_amount": 7200,
          //             "cod": false,
          //             "min_day": 3,
          //             "max_day": 3
          //         },
          //         "package": {
          //             "weight": 1.1231,
          //             "length": 30,
          //             "width": 40,
          //             "height": 60,
          //             "volume_weight": 12,
          //             "package_type": 2,
          //             "items": [
          //                 {
          //                     "id": 717898,
          //                     "name": "Baju Baju",
          //                     "price": 120000,
          //                     "qty": 12
          //                 }
          //             ]
          //         },
          //         "payment_type": "cash",
          //         "driver": {
          //             "name": "",
          //             "phone": "",
          //             "vehicle_type": "",
          //             "vehicle_number": ""
          //         },
          //         "label_check_sum": "62266b8cd5bb9de88319e40513ebea6e",
          //         "creation_date": "2021-09-07T08:45:05Z",
          //         "last_updated_date": "2021-09-07T08:45:05Z",
          //         "awb_number": "",
          //         "trackings": [
          //             {
          //                 "shipper_status": {
          //                     "code": 1000,
          //                     "name": "Paket sedang dipersiapkan",
          //                     "description": "Paket sedang dipersiapkan"
          //                 },
          //                 "logistic_status": {
          //                     "code": 99,
          //                     "name": "Order Masuk ke sistem",
          //                     "description": "Data order sudah masuk ke sistem"
          //                 },
          //                 "created_date": "2021-09-07T08:45:05Z"
          //             }
          //         ],
          //         "is_active": false,
          //         "is_hubless": false,
          //         "pickup_code": "",
          //         "pickup_time": "",
          //         "shipment_status": {
          //             "name": "Order Masuk ke sistem",
          //             "description": "Data order sudah masuk ke sistem",
          //             "code": 1,
          //             "updated_by": "SHIPPER_API",
          //             "updated_date": "2021-09-07T08:45:05Z",
          //             "track_url": "",
          //             "reason": "",
          //             "created_date": "2021-09-07T08:45:05Z"
          //         }
          //     }
          // }

          return response.data;
        })
        .catch((error) => {
          console.log({ error });
          throw {
            error: error,
            message: "Error while getting order by Id",
          };
        });

      return res.json(orderResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async cancelOrder(req, res, next) {
    try {
      const { order_id, reason } = await req.body;

      const url = await `${baseURL}/v3/order/${order_id}`;

      const orderResponse = await axios({
        method: "DELETE",
        url,
        data: { reason },
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": ShipperKey,
        },
      })
        .then((response) => {
          //   {
          //     "metadata": {
          //         "path": "/v3/order/219Z7YDYJ7RDP?%3Aorder_id=219Z7YDYJ7RDP&",
          //         "http_status_code": 200,
          //         "http_status": "OK",
          //         "timestamp": 1631010743
          //     },
          //     "data": {
          //         "cancel_order": {
          //             "order_id": "219Z7YDYJ7RDP",
          //             "cancel": true
          //         }
          //     }
          // }

          return response.data;
        })
        .catch((error) => {
          console.log({ error });
          throw {
            error: error,
            data: error.response.data,
            message: "Error while delete order by Id",
          };
        });

      return res.json(orderResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async webhookShipper(req, res) {
    try {
      const { body } = req;
      console.log({ body });
      //dijemput
      // {
      //   auth: 'ad97928e842f176ab5e87935c6ccff7e',
      //   order_id: '61372e46f668083030bdc088',
      //   tracking_id: '2197WKG8ZWKQK',
      //   order_tracking_id: '61372eb8d3d1ea2b319dd00d',
      //   external_id: 'KRN123112312113',
      //   status_date: '2021-09-07T09:19:52+00:00',
      //   internal: {
      //     id: 3,
      //     name: 'Dijemput Driver',
      //     description: 'Paket Anda sudah dijemput oleh Shipperu Duraivu'
      //   },
      //   external: {
      //     id: 99,
      //     name: 'Dijemput Driver',
      //     description: 'Paket Anda sudah dijemput oleh Shipperu Duraivu'
      //   },
      //   internal_status: { code: 1030, name: 'Aktif', description: 'Aktif' },
      //   external_status: {
      //     code: 1030,
      //     name: 'Proses Penjemputan',
      //     description: 'Paket dalam proses penjemputan oleh driver [driver_name]'
      //   },
      //   awb: ''
      // }

      //Dijemput - Sorting Center
      // {
      //   auth: 'ad97928e842f176ab5e87935c6ccff7e',
      //   order_id: '61372e46f668083030bdc088',
      //   tracking_id: '2197WKG8ZWKQK',
      //   order_tracking_id: '61372ee2d3d1ea3f279dd00e',
      //   external_id: 'KRN123112312113',
      //   status_date: '2021-09-07T09:20:34+00:00',
      //   internal: {
      //     id: 4,
      //     name: 'Sampai di Gudang',
      //     description: 'Paket Anda sudah tiba di gudang'
      //   },
      //   external: {
      //     id: 99,
      //     name: 'Sampai di Gudang',
      //     description: 'Paket Anda sudah tiba di gudang'
      //   },
      //   internal_status: {
      //     code: 1070,
      //     name: 'Order Check In oleh HUB',
      //     description: 'Order Check In oleh HUB'
      //   },
      //   external_status: {
      //     code: 1060,
      //     name: 'Sortir Barang',
      //     description: 'Paket Menuju Gudang Sorting [warehouse_location]'
      //   },
      //   awb: ''
      // }

      //dikirim ke partnerships {
      //   auth: 'ad97928e842f176ab5e87935c6ccff7e',
      //   order_id: '61372e46f668083030bdc088',
      //   tracking_id: '2197WKG8ZWKQK',
      //   order_tracking_id: '61372f01d3d1eaebad9dd00f',
      //   external_id: 'KRN123112312113',
      //   status_date: '2021-09-07T09:21:05+00:00',
      //   internal: {
      //     id: 5,
      //     name: 'Dikirim ke Partner',
      //     description: 'Paket Anda sudah dalam perjalanan ke JNE'
      //   },
      //   external: {
      //     id: 99,
      //     name: 'Dikirim ke Partner',
      //     description: 'Paket Anda sudah dalam perjalanan ke JNE'
      //   },
      //   internal_status: {
      //     code: 1140,
      //     name: 'Order Check Out oleh Sorting HUB',
      //     description: 'Order Check Out oleh Sorting HUB'
      //   },
      //   external_status: {
      //     code: 1070,
      //     name: 'Dikirim ke [3pl_name]',
      //     description: 'Paket Dikirim ke [3pl_name]'
      //   },
      //   awb: ''
      // }

      //berhasil
      // {
      //   auth: 'ad97928e842f176ab5e87935c6ccff7e',
      //   order_id: '61372e46f668083030bdc088',
      //   tracking_id: '2197WKG8ZWKQK',
      //   order_tracking_id: '61372f6ad3d1ea35769dd010',
      //   external_id: 'KRN123112312113',
      //   status_date: '2021-09-07T09:22:50+00:00',
      //   internal: {
      //     id: 9,
      //     name: 'Berhasil Dikirim',
      //     description: 'Paket Anda sudah diterima - [receiver_name]'
      //   },
      //   external: {
      //     id: 8,
      //     name: 'DELIVERED TO receiver_name',
      //     description: 'DELIVERED TO [receiver_name | 17-07-2020 11:05 | DESTINATION_LOCATION ]'
      //   },
      //   internal_status: {
      //     code: 2000,
      //     name: 'Order Terkirim - [receiver_name]',
      //     description: 'Order Terkirim - [receiver_name]'
      //   },
      //   external_status: {
      //     code: 1090,
      //     name: 'Paket Terkirim',
      //     description: 'Paket terkirim dan diterima oleh [receiver_name]'
      //   },
      //   awb: ''
      // }
      return res.json(body);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = OrderController;
