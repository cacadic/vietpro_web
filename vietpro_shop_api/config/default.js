require("dotenv").config();

module.exports = {
  app: require("./app.js"),
  db: require("./db.js"),
  mail: require("./mail.js"),
};
