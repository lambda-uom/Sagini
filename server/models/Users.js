const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
  empId: { type: String, required: true, default: "001A" },
  firstName: { type: String },
  lastName: { type: String },
  jobPosition: { type: String },
});

const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;
