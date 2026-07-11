const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
     user: {
      type: mongoose.Schema.Types.ObjectId,
       ref: "User",
      required: false,
      },

    fullName: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    education: {
      type: String,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    language: {
      type: String,
      default: "English",
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);