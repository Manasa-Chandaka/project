import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div
      style={{
        backgroundColor: "#f4f7fc",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      >
        <h1>AI Interview Preparation Platform</h1>
        <p>Welcome, Candidate 👋</p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {/* Profile */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px lightgray",
          }}
        >
          <h2>👤 Profile</h2>
          <p>Update your role, skills and experience.</p>

          <Link to="/profile">
            <button
              style={{
                padding: "10px 20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Open
            </button>
          </Link>
        </div>

        {/* Start Interview */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px lightgray",
          }}
        >
          <h2>🎤 Start Interview</h2>
          <p>Practice HR and Technical interviews.</p>

          <Link to="/interview">
            <button
              style={{
                padding: "10px 20px",
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Start
            </button>
          </Link>
        </div>

        {/* Report */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px lightgray",
          }}
        >
          <h2>📊 Reports</h2>
          <p>Check your interview scores and AI feedback.</p>

          <Link to="/report">
            <button
              style={{
                padding: "10px 20px",
                background: "orange",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              View Report
            </button>
          </Link>
        </div>

        {/* History */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px lightgray",
          }}
        >
          <h2>📜 History</h2>
          <p>View your previous interview sessions.</p>

          <Link to="/history">
            <button
              style={{
                padding: "10px 20px",
                background: "purple",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              History
            </button>
          </Link>
        </div>
      </div>

      {/* Statistics
      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px lightgray",
        }}
      > */}
        {/* <h2>📈 Performance Summary</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }} */}
        
          {/* <thead>
            <tr>
              <th style={{ border: "1px solid gray", padding: "10px" }}>
                Interview
              </th>
              <th style={{ border: "1px solid gray", padding: "10px" }}>
                Score
              </th>
              <th style={{ border: "1px solid gray", padding: "10px" }}>
                Status
              </th>
            </tr>
          </thead> */}

          {/* <tbody>
            <tr>
              <td style={{ border: "1px solid gray", padding: "10px" }}>
                React Developer
              </td>

              <td style={{ border: "1px solid gray", padding: "10px" }}>
                85%
              </td>

              <td style={{ border: "1px solid gray", padding: "10px" }}>
                Passed
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid gray", padding: "10px" }}>
                HR Interview
              </td>

              <td style={{ border: "1px solid gray", padding: "10px" }}>
                78%
              </td>

              <td style={{ border: "1px solid gray", padding: "10px" }}>
                Good
              </td>
            </tr>
          </tbody> */}
        
      
    </div>
  );
}

export default Dashboard;