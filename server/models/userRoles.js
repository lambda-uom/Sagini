const mongoose = require("mongoose");

const userRoleSchema = new mongoose.Schema({
  userRoleValue: { type: String },
});

const userRoles = mongoose.model("userRoles", userRoleSchema);
module.exports = userRoles;
