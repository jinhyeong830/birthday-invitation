const mongoose = require("mongoose");

const PresentSchema = new mongoose.Schema({
  index: {
    type: Number,
    required: true,
    unique: true,
  },
  presentName: {
    type: String,
    required: true,
  },
  presentSrc: {
    type: String,
    required: true,
  },
  limitPerson: {
    type: Number,
    required: true,
  },
});
