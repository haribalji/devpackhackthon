const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentNoteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  classNumber: { type: String, required: true },
  subject: { type: String, required: true },
  chapter: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("StudentNote", StudentNoteSchema);
