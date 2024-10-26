// healthDataController.js
const pool = require("../config/db"); // Ensure this path is correct based on your project structure

const getHealthData = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM health_data");
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getHealthData };
