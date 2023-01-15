const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const { default: mongoose } = require("mongoose");
const app = express();
const CORS = require("cors")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(CORS());



mongoose.connect("mongodb+srv://suman:oHy9PfeRXPQ2lfhu@cluster0.xzzuzad.mongodb.net/urlshortner",{ useNewUrlParser: true,})
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});