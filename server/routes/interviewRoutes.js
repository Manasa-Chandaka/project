const express = require("express");
const router = express.Router();

const {
  generateQuestions,
  submitInterview,
} = require("../controllers/interviewController");

// Generate AI Questions
router.post("/generate", generateQuestions);

// Evaluate Answers
router.post("/submit", submitInterview);

module.exports = router;