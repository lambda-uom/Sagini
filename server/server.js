const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/NETS")
  .then(() => console.log("Connected successfully"))
  .catch((error) => console.log(error));

const { urlencoded } = require("express");

const userRoute = require("./Routes/userRoute");

app.use(userRoute);

app.listen(3001, () => console.log("Server is connected on 3001"));
