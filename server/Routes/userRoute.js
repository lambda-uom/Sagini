const express = require("express");
const userRoute = express.Router();

const Users = require("../models/Users");
const JobTitle = require("../models/JobTitle");

userRoute.get("/users", async (req, res) => {
  let data = [];
  let users = await Users.find();
  for (let user of users) {
    let { jobTitle } = await JobTitle.findOne({ _id: user.jobPosition });
    let doc = {
      ...user.toObject(),
      jobTitle,
    };

    data.push(doc);
  }
  res.json(data);
});

userRoute.post("/users/new", (req, res) => {
  let { empId, firstName, lastName, jobPosition } = req.body;
  const user = new Users({
    empId,
    firstName,
    lastName,
    jobPosition,
  });
  user.save();
  res.json(user);
});

module.exports = userRoute;
