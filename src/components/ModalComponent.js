import React, { useState } from "react";

const ModalComponent = ({ metric, onClose, onSave }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSave = () => {
    if (inputValue) {
      onSave({ metricName: metric, value: inputValue });
      setInputValue("");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Enter {metric.replace("_", " ")}</h3>
        <input
          type="text"
          placeholder={`Enter ${metric}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
