const mongoose = require("mongoose");
const DB_CONNECT_URI = process.env.MONGO_URI;
const client = mongoose
  .connect(DB_CONNECT_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => {
    console.log(err);
  });

module.exports = client;
