import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importing motion for animations
import LottieAnimationComponent from "../LottieAnimationComponent"; // Import the Lottie component
import "./TestimonialsComponent.css"; // Custom styles

const TestimonialsComponent = () => {
  return (
    <div className="new-section-container">
      <div className="contents">
        {/* Main Heading Animation */}
        <motion.h2
          className="main-heading text-[#7ab2d3]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Health, Your Priority
        </motion.h2>

        {/* Description Animation */}
        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Our health monitoring platform empowers you to stay on top of your
          well-being with easy appointment scheduling, medication reminders,
          access to health records, and more. Take control of your health
          journey from the comfort of your home.
        </motion.p>

        {/* Features List Animation */}
        <motion.ul
          className="features-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Track your vital signs
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Get timely medication reminders
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            24/7 access to health records
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Safely pay bills online
          </motion.li>
        </motion.ul>

        {/* Get Started Button Animation */}
        <Link to="/signup">
          {" "}
          {/* Replace with your route */}
          <motion.button
            className="get-started-btn bg-[#7ab2d3]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Get Started
          </motion.button>
        </Link>
      </div>

      <div className="animation">
        {/* Lottie Animation Fade In */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <LottieAnimationComponent /> {/* Add the Lottie animation here */}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
