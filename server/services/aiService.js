const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

// Generate Interview Questions
const generateInterviewQuestions = async (profile) => {
  try {
    const prompt = `
You are an AI Interviewer.

Generate 10 interview questions for the following candidate.

Candidate Profile:

Role: ${profile.role}
Skills: ${profile.skills}
Experience: ${profile.experience}
Difficulty: ${profile.difficulty}
Language: ${profile.language}

Rules:
1. Generate exactly 10 questions.
2. Include:
   - 3 HR questions
   - 5 Technical questions
   - 2 Behavioral questions
3. Questions must match the candidate's role and experience.
4. Return ONLY a valid JSON array.

Example:

[
  "Tell me about yourself.",
  "Explain React Hooks.",
  "What is Virtual DOM?"
]
`;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return response;

  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};

// Evaluate Interview Answers
const evaluateInterview = async (questions, answers) => {
  try {
    const prompt = `
You are an expert technical interviewer.

Evaluate the following interview.

Questions:

${JSON.stringify(questions, null, 2)}

Answers:

${JSON.stringify(answers, null, 2)}

Return ONLY JSON.

Example:

{
  "overallScore":85,
  "technicalScore":82,
  "communicationScore":90,
  "strengths":[
      "Good React knowledge",
      "Clear communication"
  ],
  "improvements":[
      "Improve JavaScript concepts"
  ],
  "feedback":"Overall good performance."
}
`;

    const result = await model.generateContent(prompt);

    return result.response.text();

  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  generateInterviewQuestions,
  evaluateInterview,
};