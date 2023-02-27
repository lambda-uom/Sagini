const mongoose = require("mongoose");

const userRoleSchema = new mongoose.Schema({
  userRoleValue: { type: String, required: true, default: "Hired Employee" },
});

const userRoles = mongoose.model("userRoles", userRoleSchema);
module.exports = userRoles;
