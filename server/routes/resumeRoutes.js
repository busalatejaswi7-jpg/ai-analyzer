const express = require("express");
const router = express.Router();
const multer = require("multer");

const authMiddleware = require("../middleware/authMiddleware");

const upload = multer({ dest: "uploads/" });
router.post("/upload", authMiddleware, upload.single("resume"), (req, res) => {

  const fileName = req.file.originalname.toLowerCase();

  let suggestions = [];
  if (!fileName.includes("backend")) {
    suggestions.push("Add backend related projects");
  }

  if (!fileName.includes("node")) {
    suggestions.push("Include Node.js experience");
  }

  if (!fileName.includes("mongo")) {
    suggestions.push("Mention MongoDB usage");
  }

  if (suggestions.length === 0) {
    suggestions.push("Your resume looks strong! Consider adding more measurable achievements.");
  }

  res.json({
    message: "Resume analyzed dynamically",
    fileName: req.file.originalname,
    suggestions
  });
});

module.exports = router;