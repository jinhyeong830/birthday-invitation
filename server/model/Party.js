const mongoose = require("mongoose");

const PartySchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    partyDate: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Party", PartySchema);
