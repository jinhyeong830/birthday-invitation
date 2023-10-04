const mongoose = require("mongoose");
const DB_CONNECT_URI = process.env.MONGO_URI;
const client = mongoose
  .connect(DB_CONNECT_URI, {
    dbName: "invitation",
  })
  .then(() => {
    console.log("mongoDB connected.....");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = client;
