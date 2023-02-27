const mongoose = require("mongoose");

const departmentsSchema = new mongoose.Schema({
  depName: { type: String },
  jobTitles: [{ jobTitle: { type: String } }],
});

const departments = mongoose.model("departments", departmentsSchema);
module.exports = departments;
