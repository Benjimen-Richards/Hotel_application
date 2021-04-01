const express = require("express");
const parser = require("body-parser");
const eventroute = require("./routes/eventroutes");
const eventdata = require("./modals/eventmodal");
require("./database");
const app = express();
require("dotenv").config();
const port = process.env.port;
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.get("/all", (req, res) => {
  eventdata.find({}).then((r) => res.send(r));
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API runnning");
  });
}
app.use("/event", eventroute);
app.listen(port, () => {
  console.log(`port is on ${port}`);
});
