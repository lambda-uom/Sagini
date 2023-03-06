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

const user = require("./Routes/user");
const unit = require("./Routes/unit");
const chapter = require("./Routes/chapter");
const quizSubmission = require("./Routes/quizSubmission");

app.use(user);
app.use(unit);
app.use(chapter);
app.use(quizSubmission);

app.listen(8080, () => console.log("Server is connected on 8080"));
