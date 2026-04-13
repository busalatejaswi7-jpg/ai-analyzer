const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  company: String,
  role: String,
  status: {
    type: String,
    enum: ["Applied", "Interview", "Rejected", "Selected"],
    default: "Applied"
  },
  date: {
    type: Date,
    default: Date.now
  },
  notes: String
});

module.exports = mongoose.model("Application", applicationSchema);