import React, { useState } from "react";
import "./CardComponent.css"; // Ensure you have appropriate styling

const CardComponent = ({
  heading,
  icon,
  text,
  buttonText,
  image,
  backText,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle the flip state on click
  };

  const handleButtonClick = (event) => {
    event.stopPropagation(); // Prevent the card flip when clicking the button
    // Add your button click logic here, e.g., alert or navigate
  };

  return (
    <div
      className={`card-component ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="card-inner">
        {/* Front side of the card */}
        <div className="card-front">
          {icon === "heartbeat" && (
            <div className="heart-container">
              <img
                src={image || "/img/heart-icon.png"}
                alt="Heart Icon"
                className="beating-heart"
              />
            </div>
          )}
          {icon !== "heartbeat" && image && (
            <img
              src={image}
              alt={heading || "Card Image"}
              className="card-image"
            />
          )}
          {heading && <h3>{heading}</h3>}
          <div className="text-button-container">
            {" "}
            {/* New div */}
            {text && <p className="card-text">{text}</p>}
            {buttonText && (
              <button className="card-button" onClick={handleButtonClick}>
                {buttonText}
              </button>
            )}
          </div>
        </div>

        {/* Back side of the card */}
        <div className="card-back">
          <p className="back-text">{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
