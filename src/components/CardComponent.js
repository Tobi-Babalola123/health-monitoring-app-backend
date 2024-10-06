// src/components/CardComponent.js
import React from "react";
import "./CardComponent.css"; // Create and import the CSS for styling

const CardComponent = ({ heading, icon }) => {
  return (
    <div className="card-component">
      {icon === "heartbeat" && (
        <div className="heart-container">
          <img
            src={`${process.env.PUBLIC_URL}/img/heart3dd.png`}
            alt="Human Heart"
            // alt="Beating Heart"
            className="beating-heart"
          />
        </div>
      )}
      {heading && <h3>{heading}</h3>}
      {/* Add additional content as needed */}
    </div>
  );
};

export default CardComponent;
