const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  role: String,
  requiredSkills: [String]
});

module.exports = mongoose.model("Skill", skillSchema);