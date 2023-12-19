const app = require("../apps/app.js");
const configDefault = require("../../config/default.js");

const server = app.listen((port = configDefault.app.port), () => {
  console.log(`Server running on port ${port}`);
});
