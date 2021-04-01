const express = require("express");
const eventdata = require("../modals/eventmodal");
const eventroute = express.Router();

eventroute.post("/add", (req, res) => {
  const data = { ...req.body };
  const event = new eventdata(data);
  event.save();
  res.send(true);
});

module.exports = eventroute;
