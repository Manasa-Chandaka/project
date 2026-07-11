const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    interview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Interview",
      required: true,
    },

    overallScore: {
      type: Number,
      required: true,
    },

    technicalScore: {
      type: Number,
      default: 0,
    },

    hrScore: {
      type: Number,
      default: 0,
    },

    communicationScore: {
      type: Number,
      default: 0,
    },

    strengths: [
      {
        type: String,
      },
    ],

    improvements: [
      {
        type: String,
      },
    ],

    feedback: {
      type: String,
      required: true,
    },

    recommendation: {
      type: String,
      enum: [
        "Excellent",
        "Good",
        "Average",
        "Needs Improvement",
      ],
      default: "Average",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", reportSchema);