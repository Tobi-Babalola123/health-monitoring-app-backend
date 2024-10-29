import React from "react";

const AICardComponent = ({
  inputValue,
  onInputChange,
  onAskAI,
  aiResponse,
}) => {
  return (
    <div className="ai-card">
      <h3>Ask AI About Your Health</h3>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Ask about your health"
      />
      <button onClick={onAskAI}>Ask AI</button>
      <p>{aiResponse ? `AI Insights: ${aiResponse}` : "No response yet."}</p>
    </div>
  );
};

export default AICardComponent;
