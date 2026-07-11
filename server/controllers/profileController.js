const Profile = require("../models/Profile");

// Save Profile
const saveProfile = async (req, res) => {
  try {
    console.log("Received Profile:", req.body);

    const {
      fullName,
      role,
      experience,
      education,
      skills,
      language,
      difficulty,
    } = req.body;

    if (
      !fullName ||
      !role ||
      !experience ||
      !education ||
      !skills ||
      !language ||
      !difficulty
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields.",
      });
    }

    const existingProfile = await Profile.findOne({ fullName });

    if (existingProfile) {
      return res.status(400).json({
        success: false,
        message: "Profile already exists.",
      });
    }

    const profile = await Profile.create({
      fullName,
      role,
      experience,
      education,
      skills: skills.split(",").map((skill) => skill.trim()),
      language,
      difficulty,
    });

    res.status(201).json({
      success: true,
      message: "Profile Saved Successfully",
      profile,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Profile
const getProfile = async (req, res) => {
  try {

    const profile = await Profile.findById(req.params.id);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.json(profile);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Profile
const updateProfile = async (req, res) => {
  try {

    if (req.body.skills) {
      req.body.skills = req.body.skills
        .split(",")
        .map((skill) => skill.trim());
    }

    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.json({
      success: true,
      message: "Profile Updated",
      profile,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  saveProfile,
  getProfile,
  updateProfile,
};