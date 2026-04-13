const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { getSkillGap } = require("../controllers/skillController");

router.get("/gap", authMiddleware, getSkillGap);

module.exports = router;

