const mongoose = require("mongoose");

const chaptersSchema = new mongoose.Schema({
  chapterName: { type: String },
});

const chapters = mongoose.model("chapters", chaptersSchema);
module.exports = chapters;
