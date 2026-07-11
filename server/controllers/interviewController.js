const {
  generateInterviewQuestions,
  evaluateInterview,
} = require("../services/aiService");

// Generate Interview Questions
const generateQuestions = async (req, res) => {
  console.log("==================================");
  console.log("Interview API Called");
  console.log(req.body);
  console.log("==================================");

  try {
    const aiResponse = await generateInterviewQuestions(req.body);

    console.log("AI Raw Response:");
    console.log(aiResponse);

    const cleaned = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    console.log("=====Gemini response=====");
    console.log(cleaned);
    console.log("====================");
    const questions = JSON.parse(cleaned);

    res.status(200).json({
      success: true,
      questions,
    });

  } catch (error) {
    console.log("Question Generation Error:");
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Evaluate Interview Answers
const submitInterview = async (req, res) => {
  try {
    const { questions, answers } = req.body;

    const aiResponse = await evaluateInterview(questions, answers);

    console.log("Evaluation Response:");
    console.log(aiResponse);

    const cleaned = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const report = JSON.parse(cleaned);

    res.status(200).json({
      success: true,
      report,
    });

  } catch (error) {
    console.log("Interview Evaluation Error:");
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  generateQuestions,
  submitInterview,
};