const mongoose = require("mongoose");

const quizSubmissionsSchema = new mongoose.Schema({
  chapterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chapters",
    required: true,
  },
  unitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "units",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  score: { type: Number },
  attemptedTime: { type: Date },
  submittedTime: { type: Date },
  questions: [
    {
      questionValue: { type: String },
      answers: [{ type: String }],
      correctAnswer: { type: Number },
      submittedAnswer: { type: Number },
    },
  ],
});

const quizSubmissions = mongoose.model(
  "quizSubmissions",
  quizSubmissionsSchema
);
module.exports = quizSubmissions;
