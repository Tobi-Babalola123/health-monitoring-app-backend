import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./SignUp.css";

const SignUp = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleSelection = (type) => {
    setUserType(type);
    console.log(`Selected user type: ${type}`);
  };

  const handleSubmit = () => {
    if (userType === "Personal User") {
      navigate("/signup/personal");
    } else if (userType === "Health Professional") {
      navigate("/signup/health-professional");
    } else {
      alert("Please select a user type.");
    }
  };

  return (
    <div className="signup-page">
      <header className="header">
        <img src="logo.png" alt="Heads Up Logo" className="logo" />
        <h2>Next Step: Sign up as ...</h2>
      </header>
      <div className="options-container">
        <div
          className={`card ${userType === "Personal User" ? "selected" : ""}`}
          onClick={() => handleSelection("Personal User")}
        >
          <div className="icon">
            <img
              src="/img/user.png"
              alt="Personal User Icon"
              className="icon-img"
            />
          </div>
          <h3>Personal User</h3>
          <p>
            Choose this option if you would like to register as an individual.
          </p>
          <button className="start-button" onClick={handleSubmit}>
            START NOW
          </button>
        </div>
        <div
          className={`card ${
            userType === "Health Professional" ? "selected" : ""
          }`}
          onClick={() => handleSelection("Health Professional")}
        >
          <div className="icon">
            <img
              src="/img/doctor.png"
              alt="Health Professional Icon"
              className="icon-img"
            />
          </div>
          <h3>Health Professional</h3>
          <p>
            Choose this option if you would like to manage multiple clients.
          </p>
          <button className="start-button" onClick={handleSubmit}>
            START NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
