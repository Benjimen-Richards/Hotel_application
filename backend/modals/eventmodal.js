const mongoose = require("mongoose");
const eventschma = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  description: {
    type: String,
  },
  venue: {
    type: String,
  },
  img: {
    type: String,
  },
});
const eventdata = mongoose.model("events", eventschma);
module.exports = eventdata;
