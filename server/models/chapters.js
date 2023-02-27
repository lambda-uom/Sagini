const mongoose = require("mongoose");

const chaptersSchema = new mongoose.Schema({
  chapterName: { type: String },
  unitsOffer: [{ type: mongoose.Types.ObjectId, ref: "units" }],
});

const chapters = mongoose.model("chapters", chaptersSchema);
module.exports = chapters;
