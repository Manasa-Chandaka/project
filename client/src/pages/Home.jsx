import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #4f46e5, #06b6d4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>
          AI Interview Preparation Platform
        </h1>

        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "auto" }}>
          Practice HR, Technical, and Behavioral interviews with AI.
          Improve your communication skills, receive instant feedback,
          and boost your confidence before attending real interviews.
        </p>

        <div style={{ marginTop: "40px" }}>
          <Link to="/login">
            <button
              style={{
                padding: "15px 35px",
                fontSize: "18px",
                border: "none",
                borderRadius: "8px",
                background: "#ffffff",
                color: "#000000",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Get Started
            </button>
          </Link>
        </div>

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
            }}
          >
            <h3>🤖 AI Questions</h3>
            <p>
              Get personalized interview questions based on your skills and
              job role.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
            }}
          >
            <h3>📊 Instant Feedback</h3>
            <p>
              Receive AI-powered feedback with scores and improvement tips.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
            }}
          >
            <h3>🏆 Track Progress</h3>
            <p>
              View interview history and monitor your performance over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;