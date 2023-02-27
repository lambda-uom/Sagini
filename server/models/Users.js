const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  userRoleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userRoles",
    required: true,
  },
  empId: { type: String, required: true, default: "001A" },
  firstName: { type: String },
  lastName: { type: String },
  jobPosition: { type: mongoose.Schema.Types.ObjectId, ref: "departments" },
  badges: [
    {
      badgeValue: { type: String },
      earnedOn: { type: Date },
    },
  ],
  earnedScoresByQuiz: {
    numOfQuizzesDone: { type: Number },
    totalScoresEarned: { type: Number },
  },
});

const users = mongoose.model("users", usersSchema);
module.exports = users;
