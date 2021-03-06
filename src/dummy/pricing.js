exports.domestic = {
  metadata: {
    path: "/v3/pricing/domestic",
    http_status_code: 200,
    http_status: "OK",
    timestamp: 1621416968,
  },
  data: {
    origin: {
      area_id: 4711,
      area_name: "Karet Kuningan",
      suburb_id: 482,
      suburb_name: "Setia Budi",
      city_id: 41,
      city_name: "Jakarta Selatan",
      province_id: 6,
      province_name: "DKI Jakarta",
      country_id: 228,
      country_name: "INDONESIA",
      lat: -6.2197608,
      lng: 106.8266873,
    },
    destination: {
      area_id: 4711,
      area_name: "Karet Kuningan",
      suburb_id: 482,
      suburb_name: "Setia Budi",
      city_id: 41,
      city_name: "Jakarta Selatan",
      province_id: 6,
      province_name: "DKI Jakarta",
      country_id: 228,
      country_name: "INDONESIA",
      lat: -6.2197608,
      lng: 106.8266873,
    },
    pricings: [
      {
        logistic: {
          id: 13,
          name: "Wahana",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/wahana.240x90.png",
          code: "WHN",
          company_name: "PT Wahana Prestasi Logistik",
        },
        rate: {
          id: 15,
          name: "Regular",
          type: "Regular",
          description: "Regular",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 2,
        max_day: 2,
        unit_price: 5000,
        total_price: 5000,
        discount: 0,
        discount_value: 0,
        discounted_price: 5000,
        insurance_fee: 200,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 5000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 16,
          name: "Lion Parcel",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/lion-parcel.240x90.png",
          code: "LPA",
          company_name: "PT Lion Express",
        },
        rate: {
          id: 44,
          name: "REGPACK",
          type: "Regular",
          description: "Regular Rate",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 3,
        max_day: 5,
        unit_price: 8500,
        total_price: 8500,
        discount: 0,
        discount_value: 0,
        discounted_price: 8500,
        insurance_fee: 100,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 8500,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 15,
          name: "Ninja Xpress",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/ninja.240x90.png",
          code: "NIN",
          company_name: "PT Andiarta Muzizat",
        },
        rate: {
          id: 228,
          name: "Standard",
          type: "Regular",
          description: "Standard",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 2,
        unit_price: 9000,
        total_price: 9000,
        discount: 0,
        discount_value: 0,
        discounted_price: 9000,
        insurance_fee: 2750,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 9000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 7,
          name: "Alfatrex",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/alfatrex.240x90.png",
          code: "ATX",
          company_name: "PT Sumber Wahana Sejahtera",
        },
        rate: {
          id: 266,
          name: "RGS",
          type: "Regular",
          description: "Regular Day Service",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 2,
        max_day: 2,
        unit_price: 9000,
        total_price: 9000,
        discount: 0,
        discount_value: 0,
        discounted_price: 9000,
        insurance_fee: 100,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 9000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 1,
          name: "JNE",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          code: "JNE",
          company_name: "PT Tiki Jalur Nugraha Ekakurir",
        },
        rate: {
          id: 4,
          name: "CTC",
          type: "Regular",
          description: "Regular",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 2,
        unit_price: 9000,
        total_price: 9000,
        discount: 0,
        discount_value: 0,
        discounted_price: 9000,
        insurance_fee: 5080,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 9000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 3,
          name: "RPX",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/rpx.240x90.png",
          code: "RPX",
          company_name: "PT Repex Perdana International",
        },
        rate: {
          id: 8,
          name: "RGP",
          type: "Regular",
          description: "Regular Package (RGP)",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 2,
        max_day: 2,
        unit_price: 9000,
        total_price: 9000,
        discount: 0,
        discount_value: 0,
        discounted_price: 9000,
        insurance_fee: 200,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 9000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 6,
          name: "Tiki",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/tiki.240x90.png",
          code: "TIK",
          company_name: "PT Citra Van Titipan Kilat",
        },
        rate: {
          id: 54,
          name: "REG",
          type: "Regular",
          description: "Regular",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 2,
        unit_price: 9000,
        total_price: 9000,
        discount: 0,
        discount_value: 0,
        discounted_price: 9000,
        insurance_fee: 90,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 9000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 5,
          name: "SiCepat",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/sicepat.240x90.png",
          code: "SCP",
          company_name: "PT SiCepat Ekspres Indonesia",
        },
        rate: {
          id: 58,
          name: "REG",
          type: "Regular",
          description: "Regular",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 2,
        unit_price: 10000,
        total_price: 10000,
        discount: 0.05,
        discount_value: 500,
        discounted_price: 9500,
        insurance_fee: 5080,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 9500,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 36,
          name: "Recommended by Shipper",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/shipper.240x90.png",
          code: "RBS",
          company_name: "PT SHIPPINDO TEKNOLOGI LOGISTIK",
        },
        rate: {
          id: 365,
          name: "Regular",
          type: "Regular",
          description: "",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 2,
        unit_price: 10000,
        total_price: 10000,
        discount: 0,
        discount_value: 0,
        discounted_price: 10000,
        insurance_fee: 0,
        must_use_insurance: true,
        liability_value: 40000,
        final_price: 10000,
        currency: "IDR",
        insurance_applied: true,
      },
      {
        logistic: {
          id: 5,
          name: "SiCepat",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/sicepat.240x90.png",
          code: "SCP",
          company_name: "PT SiCepat Ekspres Indonesia",
        },
        rate: {
          id: 59,
          name: "BEST",
          type: "Express",
          description: "Besok Sampai Tujuan",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 1,
        unit_price: 13000,
        total_price: 13000,
        discount: 0,
        discount_value: 0,
        discounted_price: 13000,
        insurance_fee: 5080,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 13000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 3,
          name: "RPX",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/rpx.240x90.png",
          code: "RPX",
          company_name: "PT Repex Perdana International",
        },
        rate: {
          id: 11,
          name: "NDP",
          type: "Express",
          description: "Next Day Package (NDP)",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 1,
        unit_price: 14500,
        total_price: 14500,
        discount: 0,
        discount_value: 0,
        discounted_price: 14500,
        insurance_fee: 200,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 14500,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 7,
          name: "Alfatrex",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/alfatrex.240x90.png",
          code: "ATX",
          company_name: "PT Sumber Wahana Sejahtera",
        },
        rate: {
          id: 333,
          name: "NDS",
          type: "Express",
          description: "Next Day Service",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 1,
        unit_price: 18000,
        total_price: 18000,
        discount: 0,
        discount_value: 0,
        discounted_price: 18000,
        insurance_fee: 100,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 18000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 6,
          name: "Tiki",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/tiki.240x90.png",
          code: "TIK",
          company_name: "PT Citra Van Titipan Kilat",
        },
        rate: {
          id: 52,
          name: "ONS",
          type: "Express",
          description: "One Night Service",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 1,
        unit_price: 18000,
        total_price: 18000,
        discount: 0,
        discount_value: 0,
        discounted_price: 18000,
        insurance_fee: 90,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 18000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 1,
          name: "JNE",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          code: "JNE",
          company_name: "PT Tiki Jalur Nugraha Ekakurir",
        },
        rate: {
          id: 10,
          name: "CTCYES",
          type: "Express",
          description: "Yakin Esok Sampai",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 1,
        unit_price: 18000,
        total_price: 18000,
        discount: 0,
        discount_value: 0,
        discounted_price: 18000,
        insurance_fee: 5080,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 18000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 1,
          name: "JNE",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          code: "JNE",
          company_name: "PT Tiki Jalur Nugraha Ekakurir",
        },
        rate: {
          id: 312,
          name: "JTR",
          type: "Trucking",
          description: "JNE Trucking",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.25,
        final_weight: 1,
        min_day: 3,
        max_day: 4,
        unit_price: 25000,
        total_price: 25000,
        discount: 0,
        discount_value: 0,
        discounted_price: 25000,
        insurance_fee: 5080,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 25000,
        currency: "IDR",
        insurance_applied: false,
      },
    ],
  },
  pagination: {
    current_page: 1,
    current_elements: 15,
    total_pages: 1,
    total_elements: 15,
    sort_by: ["final_price"],
  },
};
exports.domesticRateType = {
  metadata: {
    path: "/v3/pricing/domestic/regular?%3Arate_type=regular&",
    http_status_code: 200,
    http_status: "OK",
    timestamp: 1622180735,
  },
  data: {
    origin: {
      area_id: 4711,
      area_name: "Karet Kuningan",
      suburb_id: 482,
      suburb_name: "Setia Budi",
      city_id: 41,
      city_name: "Jakarta Selatan",
      province_id: 6,
      province_name: "DKI Jakarta",
      country_id: 228,
      country_name: "INDONESIA",
      lat: -6.2197608,
      lng: 106.8266873,
    },
    destination: {
      area_id: 4711,
      area_name: "Karet Kuningan",
      suburb_id: 482,
      suburb_name: "Setia Budi",
      city_id: 41,
      city_name: "Jakarta Selatan",
      province_id: 6,
      province_name: "DKI Jakarta",
      country_id: 228,
      country_name: "INDONESIA",
      lat: -6.2197608,
      lng: 106.8266873,
    },
    pricings: [
      {
        logistic: {
          id: 13,
          name: "Wahana",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/wahana.240x90.png",
          code: "WHN",
          company_name: "PT Wahana Prestasi Logistik",
        },
        rate: {
          id: 15,
          name: "Regular",
          type: "Regular",
          description: "Regular",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 2,
        max_day: 2,
        unit_price: 5000,
        total_price: 5000,
        discount: 0,
        discount_value: 0,
        discounted_price: 5000,
        insurance_fee: 200,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 5000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 33,
          name: "SAP",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/sap-express.240x90.png",
          code: "SAP",
          company_name: "SAP Logistic",
        },
        rate: {
          id: 349,
          name: "Reguler",
          type: "Regular",
          description: "Regular",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 3,
        max_day: 7,
        unit_price: 7000,
        total_price: 7000,
        discount: 0,
        discount_value: 0,
        discounted_price: 7000,
        insurance_fee: 120,
        must_use_insurance: false,
        liability_value: 0,
        final_price: 7000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 6,
          name: "Tiki",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/tiki.240x90.png",
          code: "TIK",
          company_name: "PT Citra Van Titipan Kilat",
        },
        rate: {
          id: 54,
          name: "REG",
          type: "Regular",
          description: "Regular",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 2,
        max_day: 2,
        unit_price: 8000,
        total_price: 8000,
        discount: 0,
        discount_value: 0,
        discounted_price: 8000,
        insurance_fee: 90,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 8000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 16,
          name: "Lion Parcel",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/lion-parcel.240x90.png",
          code: "LPA",
          company_name: "PT Lion Express",
        },
        rate: {
          id: 44,
          name: "REGPACK",
          type: "Regular",
          description: "Regular Rate",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 3,
        max_day: 5,
        unit_price: 8500,
        total_price: 8500,
        discount: 0,
        discount_value: 0,
        discounted_price: 8500,
        insurance_fee: 100,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 8500,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 3,
          name: "RPX",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/rpx.240x90.png",
          code: "RPX",
          company_name: "PT Repex Perdana International",
        },
        rate: {
          id: 8,
          name: "RGP",
          type: "Regular",
          description: "Regular Package (RGP)",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 2,
        max_day: 2,
        unit_price: 9000,
        total_price: 9000,
        discount: 0,
        discount_value: 0,
        discounted_price: 9000,
        insurance_fee: 200,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 9000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 9,
          name: "J&T",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/jnt.240x90.png",
          code: "JNT",
          company_name: "PT Global Jet Express",
        },
        rate: {
          id: 57,
          name: "Express",
          type: "Regular",
          description: "Express Rate",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 3,
        unit_price: 9000,
        total_price: 9000,
        discount: 0,
        discount_value: 0,
        discounted_price: 9000,
        insurance_fee: 5100,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 9000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 1,
          name: "JNE",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/jne.240x90.png",
          code: "JNE",
          company_name: "PT Tiki Jalur Nugraha Ekakurir",
        },
        rate: {
          id: 4,
          name: "CTC",
          type: "Regular",
          description: "Regular",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 2,
        unit_price: 9000,
        total_price: 9000,
        discount: 0,
        discount_value: 0,
        discounted_price: 9000,
        insurance_fee: 5080,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 9000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 15,
          name: "Ninja Xpress",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/ninja.240x90.png",
          code: "NIN",
          company_name: "PT Andiarta Muzizat",
        },
        rate: {
          id: 228,
          name: "Standard",
          type: "Regular",
          description: "Standard",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 2,
        unit_price: 9500,
        total_price: 9500,
        discount: 0,
        discount_value: 0,
        discounted_price: 9500,
        insurance_fee: 2750,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 9500,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 5,
          name: "SiCepat",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/sicepat.240x90.png",
          code: "SCP",
          company_name: "PT SiCepat Ekspres Indonesia",
        },
        rate: {
          id: 58,
          name: "REG",
          type: "Regular",
          description: "Regular",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 2,
        unit_price: 10000,
        total_price: 10000,
        discount: 0,
        discount_value: 0,
        discounted_price: 10000,
        insurance_fee: 5080,
        must_use_insurance: false,
        liability_value: 40000,
        final_price: 10000,
        currency: "IDR",
        insurance_applied: false,
      },
      {
        logistic: {
          id: 36,
          name: "Recommended by Shipper",
          logo_url:
            "https://global-cdn.shipper.id/images/png/logistic/shipper.240x90.png",
          code: "RBS",
          company_name: "PT SHIPPINDO TEKNOLOGI LOGISTIK",
        },
        rate: {
          id: 365,
          name: "Regular",
          type: "Regular",
          description: "",
          full_description: "",
        },
        weight: 0.5,
        volume: 1000,
        volume_weight: 0.167,
        final_weight: 1,
        min_day: 1,
        max_day: 2,
        unit_price: 10000,
        total_price: 10000,
        discount: 0,
        discount_value: 0,
        discounted_price: 10000,
        insurance_fee: 0,
        must_use_insurance: true,
        liability_value: 40000,
        final_price: 10000,
        currency: "IDR",
        insurance_applied: true,
      },
    ],
  },
  pagination: {
    current_page: 1,
    current_elements: 10,
    total_pages: 1,
    total_elements: 10,
    sort_by: ["final_price"],
  },
};
