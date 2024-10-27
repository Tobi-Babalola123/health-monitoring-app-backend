import React, { useState } from "react";
import "./HeartCardComponent.css";

const HeartCardComponent = ({ image, handleAIResponse }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleAskAI = () => {
    if (query.trim()) {
      handleAIResponse(query);
      setQuery(""); // Clear the input after submitting
    } else {
      alert("Please enter a health query.");
    }
  };

  return (
    <div className="heart-card">
      <div className="heart-container">
        <img
          src={image || "/img/heart-icon.png"}
          alt="Heart Icon"
          className="beating-heart"
        />
      </div>

      {/* <div className="input-section">
        <input
          type="text"
          placeholder="Ask about your health"
          value={query}
          onChange={handleInputChange}
          className="health-input"
        />
        <button onClick={handleAskAI} className="ask-ai-button">
          Ask AI
        </button>
      </div> */}
    </div>
  );
};

export default HeartCardComponent;
