const mongoose = require("mongoose");

const KTSessionsSchema = new mongoose.Schema({
  belongsToUnit: { type: mongoose.Schema.Types.ObjectId, ref: "units" },
  belongsToChapter: { type: mongoose.Schema.Types.ObjectId, ref: "chapters" },
  sessionName: { type: String },
  overallRating: { type: Number },
  overallQuality: { type: Number },
  overallComm: { type: Number },
  overallClarity: { type: Number },
  overallKnowledgeAndSkill: { type: Number },
});

const KTSessions = mongoose.model("KTSessions", KTSessionsSchema);
module.exports = KTSessions;
