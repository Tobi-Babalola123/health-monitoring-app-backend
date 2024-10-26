const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Health Data Routes (assuming you have these set up correctly)
const healthDataRoutes = require("./routes/healthDataRoutes");
const healthRoutes = require("./routes/healthRoutes");
app.use("/api", healthDataRoutes);
app.use("/api", healthRoutes);

// AI route
app.post("/api/ask-ai", async (req, res) => {
  console.log("Received request:", req.body);
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: query }],
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Ensure this is in your root .env
        },
      }
    );

    res.json({ response: response.data.choices[0].message.content });
  } catch (error) {
    console.error(
      "Error fetching AI response:",
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ error: "Failed to fetch AI response", details: error.message });
  }
});

// Example route to test the server
app.get("/", (req, res) => {
  res.send("Health Monitoring Backend API");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
