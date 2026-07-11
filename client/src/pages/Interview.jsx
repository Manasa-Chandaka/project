import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Interview() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));

    if (profile) {
      getQuestions(profile);
    } else {
      alert("Profile not found. Please complete your profile first.");
      navigate("/profile");
    }
  }, []);

  const getQuestions = async (profile) => {
    try {
      console.log("Sending Profile:", profile);

      const response = await api.post("/interview/generate", profile);

      console.log("Questions:", response.data);

      if (response.data.success) {
        setQuestions(response.data.questions);
        setAnswers(new Array(response.data.questions.length).fill(""));
      } else {
        alert("Unable to generate questions.");
      }

      setLoading(false);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Unable to load interview questions.");
      setLoading(false);
    }
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const submitInterview = async () => {
    // Check all questions answered
    const unanswered = answers.some(
      (answer) => answer.trim() === ""
    );

    if (unanswered) {
      alert("Please answer all questions.");
      return;
    }

    try {
      const response = await api.post("/interview/submit", {
        questions,
        answers,
      });

      console.log("Evaluation:", response.data);

      if (response.data.success) {
        localStorage.setItem(
          "report",
          JSON.stringify(response.data.report)
        );

        alert("Interview Submitted Successfully!");

        navigate("/report");
      } else {
        alert("Evaluation failed.");
      }

    } catch (error) {
      console.error(error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Unable to evaluate interview.");
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Loading Interview Questions...</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        AI Interview
      </h1>

      {questions.map((question, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Question {index + 1}</h3>

          <p>{question}</p>

          <textarea
            rows="5"
            placeholder="Enter your answer..."
            value={answers[index]}
            onChange={(e) =>
              handleAnswerChange(index, e.target.value)
            }
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              resize: "vertical",
            }}
          />
        </div>
      ))}

      <button
        onClick={submitInterview}
        style={{
          width: "100%",
          padding: "15px",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Submit Interview
      </button>
    </div>
  );
}

export default Interview;