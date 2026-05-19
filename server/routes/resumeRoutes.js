const express = require("express");

const router = express.Router();

const multer = require("multer");

const fs = require("fs");

const pdf = require("pdf-parse");

const authMiddleware =
  require("../middleware/authMiddleware");

const upload = multer({
  dest: "uploads/"
});

router.post(
  "/upload",

  authMiddleware,

  upload.single("resume"),

  async (req, res) => {

    try {

      if (!req.file) {

        return res.status(400).json({
          message: "No file uploaded"
        });

      }

      const dataBuffer =
        fs.readFileSync(req.file.path);

      const pdfData =
        await pdf(dataBuffer);

      const text =
        pdfData.text.toLowerCase();

      const jobDesc =
        req.body.jobDesc?.toLowerCase() || "";

      const role =
        req.body.role;

      let suggestions = [];

      let strengths = [];

      let missingSkills = [];

      let atsScore = 100;

      let matchScore = 0;

      let requiredSkills = [];

      if (
        role === "Frontend Developer"
      ) {

        requiredSkills = [
          "react",
          "javascript",
          "css",
          "html",
          "redux",
          "api"
        ];

      }

      else if (
        role === "Backend Developer"
      ) {

        requiredSkills = [
          "node",
          "express",
          "mongodb",
          "sql",
          "api",
          "jwt"
        ];

      }

      else {

        requiredSkills = [
          "react",
          "node",
          "mongodb",
          "javascript",
          "express",
          "git",
          "api"
        ];

      }

      requiredSkills.forEach((skill) => {

        if (text.includes(skill)) {

          strengths.push(skill);

        } else {

          missingSkills.push(skill);

          atsScore -= 8;

        }

      });

      requiredSkills.forEach((skill) => {

        if (
          jobDesc.includes(skill) &&
          text.includes(skill)
        ) {

          matchScore += 10;

        }

      });

      if (text.includes("project")) {

        strengths.push(
          "Projects Section"
        );

      } else {

        suggestions.push(
          "Add strong project descriptions"
        );

        atsScore -= 10;

      }

      if (
        text.includes("intern") ||
        text.includes("experience")
      ) {

        strengths.push(
          "Experience Section"
        );

      } else {

        suggestions.push(
          "Add internship or experience details"
        );

        atsScore -= 10;

      }

      if (
        text.includes("%") ||
        text.includes("improved") ||
        text.includes("developed")
      ) {

        strengths.push(
          "Impact Statements"
        );

      } else {

        suggestions.push(
          "Add measurable achievements"
        );

        atsScore -= 10;

      }

      if (atsScore < 0) {

        atsScore = 0;

      }

      if (missingSkills.length > 0) {

        suggestions.push(
          `Missing skills: ${missingSkills.join(", ")}`
        );

      }

      let summary = "";

      if (atsScore >= 85) {

        summary =
          "Excellent resume with strong technical relevance and ATS optimization.";

      }

      else if (atsScore >= 65) {

        summary =
          "Good resume overall, but there are some missing technical skills and improvements needed.";

      }

      else {

        summary =
          "Resume needs significant improvement in technical skills, project descriptions, and ATS optimization.";

      }

      res.json({

        message:
          "Resume analyzed successfully",

        atsScore,

        matchScore,

        summary,

        strengths,

        missingSkills,

        suggestions,

        extractedText:
          text.substring(0, 700)

      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: "Analysis failed"
      });

    }

  }
);

module.exports = router;