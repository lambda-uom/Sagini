const mongoose = require("mongoose");

const unitsSchema = new mongoose.Schema({
  unitName: { type: String },
  belongsToChapter: { type: mongoose.Types.ObjectId, ref: "chapters" },
});

const units = mongoose.model("units", unitsSchema);
module.exports = units;
