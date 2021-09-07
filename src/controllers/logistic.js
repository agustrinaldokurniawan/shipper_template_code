const axios = require("axios").default;
const baseURL = "https://merchant-api-sandbox.shipper.id";
const ShipperKey = process.env.SHIPPER_KEY;

class LogisticControllers {
  static async getLogistics(req, res) {
    try {
      const url = `https://merchant-api-sandbox.shipper.id/v3/logistic`;

      const logisticResponse = await axios
        .get(url, {
          headers: {
            Accept: "application/json",
            "X-API-KEY": ShipperKey,
          },
        })
        .then((response) => {
          //   {
          //     "metadata": {
          //         "path": "/v3/logistic",
          //         "http_status_code": 200,
          //         "http_status": "OK",
          //         "timestamp": 1630987967
          //     },
          //     "data": [
          //         {
          //             "logistic": {
          //                 "id": 7,
          //                 "name": "Alfatrex",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/alfatrex.240x90.png",
          //                 "code": "ATX"
          //             },
          //             "id": 266,
          //             "name": "RGS",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 30
          //         },
          //         {
          //             "logistic": {
          //                 "id": 7,
          //                 "name": "Alfatrex",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/alfatrex.240x90.png",
          //                 "code": "ATX"
          //             },
          //             "id": 332,
          //             "name": "ECS",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 30
          //         },
          //         {
          //             "logistic": {
          //                 "id": 7,
          //                 "name": "Alfatrex",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/alfatrex.240x90.png",
          //                 "code": "ATX"
          //             },
          //             "id": 333,
          //             "name": "NDS",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 30
          //         },
          //         {
          //             "logistic": {
          //                 "id": 39,
          //                 "name": "Anteraja",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/anteraja.240x90.png",
          //                 "code": "ANT"
          //             },
          //             "id": 562,
          //             "name": "Regular",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 50
          //         },
          //         {
          //             "logistic": {
          //                 "id": 39,
          //                 "name": "Anteraja",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/anteraja.240x90.png",
          //                 "code": "ANT"
          //             },
          //             "id": 563,
          //             "name": "Same Day",
          //             "type_name": "Same Day",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 5
          //         },
          //         {
          //             "logistic": {
          //                 "id": 39,
          //                 "name": "Anteraja",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/anteraja.240x90.png",
          //                 "code": "ANT"
          //             },
          //             "id": 564,
          //             "name": "Next Day",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 50
          //         },
          //         {
          //             "logistic": {
          //                 "id": 24,
          //                 "name": "DPEX",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/dpex.240x90.png",
          //                 "code": "DPX"
          //             },
          //             "id": 326,
          //             "name": "EXPRESS DOCUMENT",
          //             "type_name": "",
          //             "volumetric": 5000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 24,
          //                 "name": "DPEX",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/dpex.240x90.png",
          //                 "code": "DPX"
          //             },
          //             "id": 327,
          //             "name": "EXPRESS PARCEL",
          //             "type_name": "International",
          //             "volumetric": 5000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 25,
          //                 "name": "GO-SEND",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/gosend.240x90.png",
          //                 "code": "GSN"
          //             },
          //             "id": 328,
          //             "name": "Same Day (Bulk)",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 5
          //         },
          //         {
          //             "logistic": {
          //                 "id": 25,
          //                 "name": "GO-SEND",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/gosend.240x90.png",
          //                 "code": "GSN"
          //             },
          //             "id": 329,
          //             "name": "Instant",
          //             "type_name": "Instant",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 20
          //         },
          //         {
          //             "logistic": {
          //                 "id": 25,
          //                 "name": "GO-SEND",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/gosend.240x90.png",
          //                 "code": "GSN"
          //             },
          //             "id": 336,
          //             "name": "Same Day (Direct)",
          //             "type_name": "Same Day",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 5
          //         },
          //         {
          //             "logistic": {
          //                 "id": 38,
          //                 "name": "Indah Cargo",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/indah-cargo.240x90.png",
          //                 "code": "IND"
          //             },
          //             "id": 560,
          //             "name": "Darat",
          //             "type_name": "Trucking",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 38,
          //                 "name": "Indah Cargo",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/indah-cargo.240x90.png",
          //                 "code": "IND"
          //             },
          //             "id": 561,
          //             "name": "Laut",
          //             "type_name": "Trucking",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 9,
          //                 "name": "J&T",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/jnt.240x90.png",
          //                 "code": "JNT"
          //             },
          //             "id": 57,
          //             "name": "Express",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 1,
          //                 "name": "JNE",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          //                 "code": "JNE"
          //             },
          //             "id": 1,
          //             "name": "REG",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 150
          //         },
          //         {
          //             "logistic": {
          //                 "id": 1,
          //                 "name": "JNE",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          //                 "code": "JNE"
          //             },
          //             "id": 2,
          //             "name": "YES",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 69
          //         },
          //         {
          //             "logistic": {
          //                 "id": 1,
          //                 "name": "JNE",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          //                 "code": "JNE"
          //             },
          //             "id": 3,
          //             "name": "OKE",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 69
          //         },
          //         {
          //             "logistic": {
          //                 "id": 1,
          //                 "name": "JNE",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          //                 "code": "JNE"
          //             },
          //             "id": 4,
          //             "name": "CTC",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 69
          //         },
          //         {
          //             "logistic": {
          //                 "id": 1,
          //                 "name": "JNE",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          //                 "code": "JNE"
          //             },
          //             "id": 10,
          //             "name": "CTCYES",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 69
          //         },
          //         {
          //             "logistic": {
          //                 "id": 1,
          //                 "name": "JNE",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          //                 "code": "JNE"
          //             },
          //             "id": 312,
          //             "name": "JTR",
          //             "type_name": "Trucking",
          //             "volumetric": 4000,
          //             "min_kg": 0,
          //             "max_kg": 400
          //         },
          //         {
          //             "logistic": {
          //                 "id": 1,
          //                 "name": "JNE",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          //                 "code": "JNE"
          //             },
          //             "id": 314,
          //             "name": "JTR250",
          //             "type_name": "",
          //             "volumetric": 4000,
          //             "min_kg": 10,
          //             "max_kg": 30
          //         },
          //         {
          //             "logistic": {
          //                 "id": 1,
          //                 "name": "JNE",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          //                 "code": "JNE"
          //             },
          //             "id": 315,
          //             "name": "JTR<150",
          //             "type_name": "",
          //             "volumetric": 4000,
          //             "min_kg": 10,
          //             "max_kg": 30
          //         },
          //         {
          //             "logistic": {
          //                 "id": 1,
          //                 "name": "JNE",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          //                 "code": "JNE"
          //             },
          //             "id": 316,
          //             "name": "JTR>250",
          //             "type_name": "",
          //             "volumetric": 4000,
          //             "min_kg": 10,
          //             "max_kg": 30
          //         },
          //         {
          //             "logistic": {
          //                 "id": 1,
          //                 "name": "JNE",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          //                 "code": "JNE"
          //             },
          //             "id": 317,
          //             "name": "INTL",
          //             "type_name": "International",
          //             "volumetric": 5000,
          //             "min_kg": 0,
          //             "max_kg": 30
          //         },
          //         {
          //             "logistic": {
          //                 "id": 1,
          //                 "name": "JNE",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          //                 "code": "JNE"
          //             },
          //             "id": 378,
          //             "name": "JNE OKE",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 63
          //         },
          //         {
          //             "logistic": {
          //                 "id": 27,
          //                 "name": "Lalamove",
          //                 "logo_url": "http://cdn.shipper.cloud/logistic/small/LAL.png",
          //                 "code": "LAL"
          //             },
          //             "id": 331,
          //             "name": "Same Day",
          //             "type_name": "Same Day",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 20
          //         },
          //         {
          //             "logistic": {
          //                 "id": 27,
          //                 "name": "Lalamove",
          //                 "logo_url": "http://cdn.shipper.cloud/logistic/small/LAL.png",
          //                 "code": "LAL"
          //             },
          //             "id": 361,
          //             "name": "Same Day - MPV",
          //             "type_name": "Same Day",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 350
          //         },
          //         {
          //             "logistic": {
          //                 "id": 27,
          //                 "name": "Lalamove",
          //                 "logo_url": "http://cdn.shipper.cloud/logistic/small/LAL.png",
          //                 "code": "LAL"
          //             },
          //             "id": 362,
          //             "name": "Same Day - VAN",
          //             "type_name": "Same Day",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 600
          //         },
          //         {
          //             "logistic": {
          //                 "id": 16,
          //                 "name": "Lion Parcel",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/lion-parcel.240x90.png",
          //                 "code": "LPA"
          //             },
          //             "id": 42,
          //             "name": "ONEPACK",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 16,
          //                 "name": "Lion Parcel",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/lion-parcel.240x90.png",
          //                 "code": "LPA"
          //             },
          //             "id": 44,
          //             "name": "REGPACK",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 15,
          //                 "name": "Ninja Xpress",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/ninja.240x90.png",
          //                 "code": "NIN"
          //             },
          //             "id": 227,
          //             "name": "Next Day",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 15,
          //                 "name": "Ninja Xpress",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/ninja.240x90.png",
          //                 "code": "NIN"
          //             },
          //             "id": 228,
          //             "name": "Standard",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 26,
          //                 "name": "Paxel",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/paxel.240x90.png",
          //                 "code": "PXL"
          //             },
          //             "id": 330,
          //             "name": "Same Day",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 10
          //         },
          //         {
          //             "logistic": {
          //                 "id": 26,
          //                 "name": "Paxel",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/paxel.240x90.png",
          //                 "code": "PXL"
          //             },
          //             "id": 367,
          //             "name": "Same Day",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 10
          //         },
          //         {
          //             "logistic": {
          //                 "id": 26,
          //                 "name": "Paxel",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/paxel.240x90.png",
          //                 "code": "PXL"
          //             },
          //             "id": 368,
          //             "name": "Same Day",
          //             "type_name": "Same Day",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 10
          //         },
          //         {
          //             "logistic": {
          //                 "id": 26,
          //                 "name": "Paxel",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/paxel.240x90.png",
          //                 "code": "PXL"
          //             },
          //             "id": 566,
          //             "name": "Next Day",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 10
          //         },
          //         {
          //             "logistic": {
          //                 "id": 4,
          //                 "name": "POS Indonesia",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/pos-indonesia.240x90.png",
          //                 "code": "POS"
          //             },
          //             "id": 49,
          //             "name": "Paket Kilat Khusus",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 4,
          //                 "name": "POS Indonesia",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/pos-indonesia.240x90.png",
          //                 "code": "POS"
          //             },
          //             "id": 50,
          //             "name": "Express Sameday",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 4,
          //                 "name": "POS Indonesia",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/pos-indonesia.240x90.png",
          //                 "code": "POS"
          //             },
          //             "id": 51,
          //             "name": "Paketpost Dangerous Goods",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 4,
          //                 "name": "POS Indonesia",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/pos-indonesia.240x90.png",
          //                 "code": "POS"
          //             },
          //             "id": 53,
          //             "name": "Paketpost Valuable Goods",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 4,
          //                 "name": "POS Indonesia",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/pos-indonesia.240x90.png",
          //                 "code": "POS"
          //             },
          //             "id": 56,
          //             "name": "Express Next Day",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 4,
          //                 "name": "POS Indonesia",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/pos-indonesia.240x90.png",
          //                 "code": "POS"
          //             },
          //             "id": 210,
          //             "name": "EMS",
          //             "type_name": "International",
          //             "volumetric": 5000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 4,
          //                 "name": "POS Indonesia",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/pos-indonesia.240x90.png",
          //                 "code": "POS"
          //             },
          //             "id": 291,
          //             "name": "Surat Kilat Khusus",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 4,
          //                 "name": "POS Indonesia",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/pos-indonesia.240x90.png",
          //                 "code": "POS"
          //             },
          //             "id": 292,
          //             "name": "Express Next Day Dokumen",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 36,
          //                 "name": "Recommended by Shipper",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/shipper.240x90.png",
          //                 "code": "RBS"
          //             },
          //             "id": 365,
          //             "name": "Regular",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 30
          //         },
          //         {
          //             "logistic": {
          //                 "id": 36,
          //                 "name": "Recommended by Shipper",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/shipper.240x90.png",
          //                 "code": "RBS"
          //             },
          //             "id": 366,
          //             "name": "Express",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 30
          //         },
          //         {
          //             "logistic": {
          //                 "id": 3,
          //                 "name": "RPX",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/rpx.240x90.png",
          //                 "code": "RPX"
          //             },
          //             "id": 7,
          //             "name": "REP",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 3,
          //                 "name": "RPX",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/rpx.240x90.png",
          //                 "code": "RPX"
          //             },
          //             "id": 8,
          //             "name": "RGP",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 3,
          //                 "name": "RPX",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/rpx.240x90.png",
          //                 "code": "RPX"
          //             },
          //             "id": 9,
          //             "name": "ERP",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 3,
          //                 "name": "RPX",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/rpx.240x90.png",
          //                 "code": "RPX"
          //             },
          //             "id": 11,
          //             "name": "NDP",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 3,
          //                 "name": "RPX",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/rpx.240x90.png",
          //                 "code": "RPX"
          //             },
          //             "id": 567,
          //             "name": "PSS",
          //             "type_name": "Same Day",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 3
          //         },
          //         {
          //             "logistic": {
          //                 "id": 3,
          //                 "name": "RPX",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/rpx.240x90.png",
          //                 "code": "RPX"
          //             },
          //             "id": 571,
          //             "name": "PSN",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 3
          //         },
          //         {
          //             "logistic": {
          //                 "id": 3,
          //                 "name": "RPX",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/rpx.240x90.png",
          //                 "code": "RPX"
          //             },
          //             "id": 572,
          //             "name": "PSR",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 33,
          //                 "name": "SAP",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/sap-express.240x90.png",
          //                 "code": "SAP"
          //             },
          //             "id": 349,
          //             "name": "Reguler",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 30
          //         },
          //         {
          //             "logistic": {
          //                 "id": 33,
          //                 "name": "SAP",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/sap-express.240x90.png",
          //                 "code": "SAP"
          //             },
          //             "id": 350,
          //             "name": "One Day Service",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 30
          //         },
          //         {
          //             "logistic": {
          //                 "id": 33,
          //                 "name": "SAP",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/sap-express.240x90.png",
          //                 "code": "SAP"
          //             },
          //             "id": 351,
          //             "name": "Same Day Service",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 1,
          //             "max_kg": 30
          //         },
          //         {
          //             "logistic": {
          //                 "id": 40,
          //                 "name": "Shopee Express",
          //                 "logo_url": "",
          //                 "code": "SHOPEX"
          //             },
          //             "id": 569,
          //             "name": "REG",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 75
          //         },
          //         {
          //             "logistic": {
          //                 "id": 5,
          //                 "name": "SiCepat",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/sicepat.240x90.png",
          //                 "code": "SCP"
          //             },
          //             "id": 58,
          //             "name": "REG",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 5,
          //                 "name": "SiCepat",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/sicepat.240x90.png",
          //                 "code": "SCP"
          //             },
          //             "id": 59,
          //             "name": "BEST",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 5,
          //                 "name": "SiCepat",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/sicepat.240x90.png",
          //                 "code": "SCP"
          //             },
          //             "id": 363,
          //             "name": "Cargo Udara",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 350
          //         },
          //         {
          //             "logistic": {
          //                 "id": 5,
          //                 "name": "SiCepat",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/sicepat.240x90.png",
          //                 "code": "SCP"
          //             },
          //             "id": 364,
          //             "name": "Cargo Darat",
          //             "type_name": "",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 350
          //         },
          //         {
          //             "logistic": {
          //                 "id": 5,
          //                 "name": "SiCepat",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/sicepat.240x90.png",
          //                 "code": "SCP"
          //             },
          //             "id": 565,
          //             "name": "GOKIL",
          //             "type_name": "Trucking",
          //             "volumetric": 6000,
          //             "min_kg": 10,
          //             "max_kg": 350
          //         },
          //         {
          //             "logistic": {
          //                 "id": 5,
          //                 "name": "SiCepat",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/sicepat.240x90.png",
          //                 "code": "SCP"
          //             },
          //             "id": 570,
          //             "name": "HALU",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 100
          //         },
          //         {
          //             "logistic": {
          //                 "id": 6,
          //                 "name": "Tiki",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/tiki.240x90.png",
          //                 "code": "TIK"
          //             },
          //             "id": 52,
          //             "name": "ONS",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 75
          //         },
          //         {
          //             "logistic": {
          //                 "id": 6,
          //                 "name": "Tiki",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/tiki.240x90.png",
          //                 "code": "TIK"
          //             },
          //             "id": 54,
          //             "name": "REG",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 75
          //         },
          //         {
          //             "logistic": {
          //                 "id": 6,
          //                 "name": "Tiki",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/tiki.240x90.png",
          //                 "code": "TIK"
          //             },
          //             "id": 298,
          //             "name": "TDS",
          //             "type_name": "Express",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 75
          //         },
          //         {
          //             "logistic": {
          //                 "id": 6,
          //                 "name": "Tiki",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/tiki.240x90.png",
          //                 "code": "TIK"
          //             },
          //             "id": 568,
          //             "name": "ECO",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 75
          //         },
          //         {
          //             "logistic": {
          //                 "id": 13,
          //                 "name": "Wahana",
          //                 "logo_url": "https://global-cdn.shipper.id/images/png/logistic/wahana.240x90.png",
          //                 "code": "WHN"
          //             },
          //             "id": 15,
          //             "name": "Regular",
          //             "type_name": "Regular",
          //             "volumetric": 6000,
          //             "min_kg": 0,
          //             "max_kg": 50
          //         }
          //     ]
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

      return res.json(logisticResponse);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = LogisticControllers;
