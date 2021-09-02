const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const locationRoute = require("./routes/location");
const pricingRoute = require("./routes/pricing");
const orderRoute = require("./routes/order");
const pickupRoute = require("./routes/pickup");

app.use("/location", locationRoute);
app.use("/pricing", pricingRoute);
app.use("/order", orderRoute);
app.use("/pickup", pickupRoute);

const server = () =>
  app.listen(4000, () => {
    console.log("App listening on port 4000!");
  });

server();
