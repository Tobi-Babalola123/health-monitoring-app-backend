import React from "react";
import "./HealthMonitoringComponent.css"; // Add appropriate styling
import medicalAppImage from `${process.env.PUBLIC_URL}/img/medical-app.jpg`; // Replace with your image path

const HealthMonitoringComponent = () => {
  return (
    <div className="health-monitoring-container">
      <div className="text-section">
        <h2>Your Health Monitoring Companion</h2>
        <p>
          With our health monitoring app, managing your health has never been easier.
          Access your health records, schedule appointments, and receive personalized insights
          right from the comfort of your home. Experience the convenience of tracking
          your health and well-being with our intuitive platform.
        </p>
        <ul>
          <li>24/7 Health Monitoring</li>
          <li>Easy Appointment Scheduling</li>
          <li>Instant Access to Health Records</li>
          <li>Secure Online Payments</li>
        </ul>
        <p>
          Make time for what matters most: your health. Sign up today and embark on a journey
          towards better health and peace of mind.
        </p>
        <button className="get-started-button">Get Started</button>
      </div>

      <div className="image-section">
        <img src={medicalAppImage} alt="Health Monitoring App" className="medical-app-image" />
      </div>
    </div>
  );
};

export default HealthMonitoringComponent;
