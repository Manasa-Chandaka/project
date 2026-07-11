const express = require("express");

const router = express.Router();

const {
  saveProfile,
  getProfile,
  updateProfile,
} = require("../controllers/profileController");

router.post("/save", saveProfile);

router.get("/:id", getProfile);

router.put("/:id", updateProfile);

module.exports = router;