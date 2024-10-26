const { Pool } = require("pg");
require("dotenv").config(); // Ensure that you load environment variables

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure you have DATABASE_URL in your .env file
  ssl: {
    rejectUnauthorized: false, // This is for deployment environments like Heroku, may not be necessary for local
  },
});

pool.on("connect", () => {
  console.log("Connected to the database");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = pool;
