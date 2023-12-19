const mongoose = require("mongoose");

const configDefault = require("config");

module.exports = () => {
  mongoose
    .connect(configDefault.get("db.mongodb.uri"))
    .then(() => console.log("Connected"));

  return mongoose;
};
