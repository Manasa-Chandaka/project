import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    fullName: "",
    role: "",
    experience: "",
    education: "",
    skills: "",
    language: "",
    difficulty: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (
      !profile.fullName ||
      !profile.role ||
      !profile.experience ||
      !profile.education ||
      !profile.skills ||
      !profile.language ||
      !profile.difficulty
    ) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/profile/save",
        profile
      );

      console.log("Server Response:", response.data);

      localStorage.setItem("profile", JSON.stringify(profile));

      alert("Profile Saved Successfully!");

      navigate("/interview");

    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
        "Unable to save profile."
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f7fc",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "600px",
          margin: "auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px lightgray",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "25px",
          }}
        >
          Candidate Profile
        </h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            style={inputStyle}
          />

          <label>Target Job Role</label>
          <input
            type="text"
            name="role"
            value={profile.role}
            onChange={handleChange}
            placeholder="Frontend Developer"
            style={inputStyle}
          />

          <label>Experience Level</label>
          <select
            name="experience"
            value={profile.experience}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="0-1 Years">0-1 Years</option>
            <option value="2-5 Years">2-5 Years</option>
            <option value="5+ Years">5+ Years</option>
          </select>

          <label>Education</label>
          <input
            type="text"
            name="education"
            value={profile.education}
            onChange={handleChange}
            placeholder="B.Tech Computer Science"
            style={inputStyle}
          />

          <label>Skills</label>
          <input
            type="text"
            name="skills"
            value={profile.skills}
            onChange={handleChange}
            placeholder="React, JavaScript, Node.js"
            style={inputStyle}
          />

          <label>Preferred Language</label>
          <select
            name="language"
            value={profile.language}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Telugu">Telugu</option>
            <option value="Hindi">Hindi</option>
          </select>

          <label>Difficulty Level</label>
          <select
            name="difficulty"
            value={profile.difficulty}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "8px",
  marginBottom: "18px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "15px",
  boxSizing: "border-box",
};

export default Profile;