const mongoose = require("mongoose");

const finalProjectAssignmentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  projScore: { type: Number, required: true, default: 0 },
  feedback: { type: String },
  gradedOn: { type: Date },
  gradedBy: { type: String },
  submittedDate: { type: Date },
  submittedFile: { type: File }, //Need to check mongoDB compass
  status: { type: Boolean, default: false },
});
