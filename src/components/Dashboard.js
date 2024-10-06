import React, { useState } from "react";
import ChartComponent from "./ChartComponent";
import PieChartComponent from "./PieChartComponent";
import WavyChartComponent from "./WavyChartComponent";
import CardComponent from "./CardComponent";
import ModalComponent from "./ModalComponent";
import TestimonialsComponent from "./TestimonialsComponent";
import PricingComponent from "./PricingComponent";
import "./Dashboard.css";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleButtonClick = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="dashboard">
      {/* Floating Navbar */}
      <nav className="navbar">
        <img
          src="/img/logo12.png"
          alt="Health Monitoring Logo"
          style={{ height: "50px" }}
        />
        <ul className="navlinks">
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Home
            </a>
            <div className="dropdown-content">
              <a href="#">Our Mission</a>
              <a href="#">Team</a>
              <a href="#">Careers</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Spotlight
            </a>
            <div className="dropdown-content">
              <a href="#">Consultation</a>
              <a href="#">Monitoring</a>
              <a href="#">Reports</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Company
            </a>
            <div className="dropdown-content">
              <a href="#">Support</a>
              <a href="#">Email Us</a>
              <a href="#">FAQs</a>
            </div>
          </li>
          <li>
            <a href="#" className="nav-icon">
              Account
            </a>
          </li>
          <li>
            <button className="btn-doctor">Talk to a Doctor</button>
          </li>
        </ul>
      </nav>

      {/* Background Section with Image, Text, and Button */}
      <div className="hero-section">
        <div className="overlay">
          <h1>Stay Healthy, Stay Monitored</h1>
          <p>
            Get real-time health updates, track your heart, blood sugar, and
            more.
          </p>
          <button className="hero-btn">Start Monitoring</button>
        </div>
      </div>

      <div className="content">
        <div className="left-section">
          <div className="heart-card">
            <CardComponent heading="Heart Monitor" icon="heartbeat" />
          </div>
          <div className="small-cards">
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter User ID or Name"
                value={inputValue}
                onChange={handleInputChange}
                className="health-input"
              />
              <button className="health-btn" onClick={handleButtonClick}>
                Check Health Status
              </button>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="chart-container">
            <div className="health-chart-card">
              <ChartComponent />
            </div>
            <div className="pie-chart-card">
              <PieChartComponent />
            </div>
          </div>
          <WavyChartComponent />
        </div>
      </div>
      <div className="date-time-card">{/* Current date and time card */}</div>

      <div className="cards-section">
        <CardComponent heading="ABOUT US" icon="heartbeat" />
        <CardComponent heading="HEALTH" icon="ecg" />
        <CardComponent heading="NEWS" icon="news" />
        <TestimonialsComponent />
      </div>

      <PricingComponent />

      {showModal && (
        <ModalComponent closeModal={closeModal} user={inputValue} />
      )}
    </div>
  );
};

export default Dashboard;
