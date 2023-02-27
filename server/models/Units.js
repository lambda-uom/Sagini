const mongoose = require("mongoose");

const unitsSchema = new mongoose.Schema({
  unitName: { type: String },
});

const units = mongoose.model("units", unitsSchema);
module.exports = units;
