// routes/healthRoutes.js
const express = require("express");
const { getHealthData } = require("../models/healthModel");
const router = express.Router();

router.get("/healthdata", getHealthData);

module.exports = router;
