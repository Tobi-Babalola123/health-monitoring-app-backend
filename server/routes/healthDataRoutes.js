const express = require("express");
const { getHealthData } = require("../controllers/healthDataController");
const router = express.Router();

router.get("/health-data", getHealthData);

module.exports = router;
