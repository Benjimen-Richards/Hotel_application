const mongoose = require("mongoose");
// const mongourl = "mongodb://localhost:27017/kinderpass";
const mongourl =
  "mongodb+srv://benjimen:richards@cluster0.36l95.mongodb.net/kinderpass?retryWrites=true&w=majority";

mongoose.connect(
  mongourl,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongodb connection success");
  }
);
module.exports = mongoose;
