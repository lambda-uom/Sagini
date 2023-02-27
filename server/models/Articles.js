const mongoose = require("mongoose");
const articlesSchema = new mongoose.Schema({
  articleName: { type: String },
  overallRating: { type: String },
  overallQuality: { type: String },
  overallComm: { type: String },
  overallClarity: { type: String },
  overallKnowledgeAndSkill: { type: String },
});
