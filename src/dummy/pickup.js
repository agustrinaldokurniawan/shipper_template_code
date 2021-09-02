exports.createPickup = {
  metadata: {
    path: "/v3/pickup",
    http_status_code: 200,
    http_status: "OK",
    timestamp: 1622045027,
  },
  data: {
    order_activations: [
      {
        order_id: "215GRRV8Y55VQ",
        pickup_code: "P21051927D8",
        is_activate: true,
        pickup_time: "2021-05-27T17:58:00+07:00",
      },
    ],
  },
};
exports.cancelPickup = {
  metadata: {
    path: "/v3/pickup/cancel",
    http_status_code: 200,
    http_status: "OK",
    timestamp: 1621435696,
  },
};
