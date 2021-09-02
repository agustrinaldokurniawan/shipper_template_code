const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const locationRoute = require("./routes/location");
app.use("/location", locationRoute);

const server = () =>
  app.listen(4000, () => {
    console.log("App listening on port 4000!");
  });

server();
