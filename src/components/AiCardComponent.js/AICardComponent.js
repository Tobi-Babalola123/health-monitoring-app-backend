import React, { useState } from "react";
import {
  connectGoogleFit,
  getFitnessDataDirect,
} from "../../Api/GoogleFitIntegration";

// Uncomment this if you want to use email notifications
// import { sendEmailNotification } from "../../utils/emailNotifications"; // Adjust this path as necessary

const Home = () => {
  const [fitnessData, setFitnessData] = useState(null);

  const handleLogin = async () => {
    try {
      await connectGoogleFit();
      console.log("User signed in and client initialized.");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleGetData = async () => {
    const data = await getFitnessDataDirect();
    if (data) {
      setFitnessData(data);
      notifyUser(); // Call notifyUser after fetching the data
    }
  };

  // Define notifyUser if you want to use it for notifications
  const notifyUser = () => {
    alert("Data fetched successfully!"); // Simple alert as an example
    // Uncomment and adjust below if using email notifications
    // sendEmailNotification(
    //   "Medication Reminder",
    //   "Don’t forget to take your medication at 10 AM!",
    //   "recipient@example.com" // Replace with the recipient's email
    // );
  };

  return (
    <div className="ai-card">
      <h2>Connect to Google Fit</h2>
      <button onClick={handleLogin}>Log in to Google Fit</button>
      <button onClick={handleGetData}>Get Fitness Data</button>
      {fitnessData && <div>{JSON.stringify(fitnessData)}</div>}{" "}
      {/* Display fitness data */}
    </div>
  );
};

export default Home;
