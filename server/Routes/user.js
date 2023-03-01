const express = require("express");
const user = express.Router();

const users = require("../models/users");
const userRoles = require("../models/userRoles");
const departments = require("../models/departments");

user.get("/users", async (req, res) => {
  let userWithUserRoles = [];
  let jobTitle;
  let department;
  let finalData = [];
  //add userRole into users collection
  let usersData = await users.find();
  for (let user of usersData) {
    let { userRoleValue } = await userRoles.findOne({ _id: user.userRoleId });
    let addUserRole = {
      ...user.toObject(),
      userRoleValue,
    };
    userWithUserRoles.push(addUserRole);
  }
  //add jobTitle into users collection
  for (let userUserRole of userWithUserRoles) {
    let deptCollection = await departments.findOne({
      _id: userUserRole.department,
    });
    for (let i = 0; i < deptCollection.jobTitles.length; i++) {
      jobTitle = deptCollection.jobTitles[i].jobTitle;
    }
    department = deptCollection.depName;

    let addJobTitle = {
      ...userUserRole,
      jobTitle,
      department,
    };
    finalData.push(addJobTitle);
  }
  res.json(finalData);
});

module.exports = user;

// user.post("/users/new", (req, res) => {
//   const badges = [];
//   for (let i = 0; i < req.body["badges[][badgeValue]"].length; i++) {
//     badges.push({
//       badgeValue: req.body["badges[][badgeValue]"][i],
//       earnedOn: req.body["badges[][earnedOn]"][i],
//     });
//   }
//   let {
//     empId,
//     firstName,
//     lastName,
//     jobPosition,
//     userRoleId,
//     numOfQuizzesDone,
//     totalScoresEarned,
//   } = req.body;
//   const user = new Users({
//     empId,
//     firstName,
//     lastName,
//     jobPosition,
//     userRoleId,
//     badges,
//     earnedScoresByQuiz: {
//       numOfQuizzesDone,
//       totalScoresEarned,
//     },
//   });
//   user.save();
//   res.json(user);
// });

// user.get("/users", async (req, res) => {
//   let userWithUserRoles = [];
//   let users = await Users.find();
//   for (let user of users) {
//     let { jobTitle } = await JobTitle.findOne({ _id: user.jobPosition });
//     let doc = {
//       ...user.toObject(),
//       jobTitle,
//     };

//     userWithUserRoles.push(doc);
//   }
//   res.json(userWithUserRoles);
// });
