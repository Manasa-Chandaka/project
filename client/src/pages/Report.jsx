import { Link } from "react-router-dom";

function Report() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px lightgray",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
          }}
        >
          Interview Report
        </h1>

        <hr />

        <h2>Overall Score</h2>

        <div
          style={{
            fontSize: "45px",
            color: "green",
            fontWeight: "bold",
          }}
        >
          85%
        </div>

        <h2>Performance</h2>

        <ul>
          <li>✅ Communication : Excellent</li>
          <li>✅ Technical Knowledge : Good</li>
          <li>✅ Confidence : Excellent</li>
          <li>⚠ Problem Solving : Needs Improvement</li>
        </ul>

        <h2>AI Feedback</h2>

        <p>
          You answered most questions confidently. Improve your
          problem-solving explanation by describing your approach
          step-by-step before giving the final answer.
        </p>

        <h2>Suggestions</h2>

        <ul>
          <li>Practice Data Structures.</li>
          <li>Improve React interview preparation.</li>
          <li>Work on explaining real projects.</li>
          <li>Maintain eye contact during interviews.</li>
        </ul>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/history">
            <button
              style={{
                padding: "10px 25px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              View History
            </button>
          </Link>

          <Link to="/dashboard">
            <button
              style={{
                padding: "10px 25px",
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Report;