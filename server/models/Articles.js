const mongoose = require("mongoose");
const articlesSchema = new mongoose.Schema({
  articleName: { type: String },
  overallRating: { type: String },
  overallQuality: { type: String },
  overallComm: { type: String },
  overallClarity: { type: String },
  overallKnowledgeAndSkill: { type: String },
  createdBy: { type: mongoose.Types.ObjectId, ref: "users" },
});
const articles = mongoose.model("articles", articlesSchema);
module.exports = articles;
