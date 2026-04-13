const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  addApplication,
  getApplications,
  updateApplication,
  deleteApplication
} = require("../controllers/applicationController");

// PROTECTED ROUTES
router.post("/", authMiddleware, addApplication);
router.get("/", authMiddleware, getApplications);
router.put("/:id", authMiddleware, updateApplication);
router.delete("/:id", authMiddleware, deleteApplication);

module.exports = router;