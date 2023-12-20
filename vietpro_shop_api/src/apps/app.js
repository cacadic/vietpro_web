const express = require("express");
const app = express();
const configDefault = require("config");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(
  configDefault.app.prefixApiVersion,
  require(`${__dirname}/../routers/web`)
);

module.exports = app;
