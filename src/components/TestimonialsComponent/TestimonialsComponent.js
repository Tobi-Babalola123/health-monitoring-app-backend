import React from "react";
import LottieAnimationComponent from "../LottieAnimationComponent"; // Import the Lottie component
import "./TestimonialsComponent.css"; // Custom styles

const TestimonialsComponent = () => {
  return (
    <div className="new-section-container">
      <div className="contents">
        <h2 className="main-heading">Your Health, Your Priority</h2>
        <p className="description">
          Our health monitoring platform empowers you to stay on top of your
          well-being with easy appointment scheduling, medication reminders,
          access to health records, and more. Take control of your health
          journey from the comfort of your home.
        </p>
        <ul className="features-list">
          <li>Track your vital signs</li>
          <li>Get timely medication reminders</li>
          <li>24/7 access to health records</li>
          <li>Safely pay bills online</li>
        </ul>
        <button className="get-started-btn">Get Started</button>
      </div>

      <div className="animation">
        <LottieAnimationComponent /> {/* Add the Lottie animation here */}
      </div>
    </div>
  );
};

export default TestimonialsComponent;
