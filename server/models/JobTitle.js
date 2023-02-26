const mongoose = require("mongoose");
const JobTitleSchema = new mongoose.Schema({
  jobTitle: { type: "String", required: true },
});

const JobTitle = mongoose.model("JobTitle", JobTitleSchema);
module.exports = JobTitle;
