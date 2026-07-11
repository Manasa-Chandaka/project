import { Link } from "react-router-dom";

function History() {
  const interviews = [
    {
      id: 1,
      role: "React Developer",
      score: "85%",
      date: "01-Jul-2026",
    },
    {
      id: 2,
      role: "Frontend Developer",
      score: "80%",
      date: "25-Jun-2026",
    },
    {
      id: 3,
      role: "HR Interview",
      score: "90%",
      date: "20-Jun-2026",
    },
  ];

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
          maxWidth: "900px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px lightgray",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "25px",
          }}
        >
          Interview History
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={tableStyle}>S.No</th>
              <th style={tableStyle}>Role</th>
              <th style={tableStyle}>Score</th>
              <th style={tableStyle}>Date</th>
            </tr>
          </thead>

          <tbody>
            {interviews.map((item) => (
              <tr key={item.id}>
                <td style={tableStyle}>{item.id}</td>
                <td style={tableStyle}>{item.role}</td>
                <td style={tableStyle}>{item.score}</td>
                <td style={tableStyle}>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <Link to="/dashboard">
            <button
              style={{
                padding: "10px 25px",
                background: "#2563eb",
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

const tableStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "center",
};

export default History;