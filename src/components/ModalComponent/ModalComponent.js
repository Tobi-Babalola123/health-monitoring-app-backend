import React from "react";
import "./ModalComponent.css";

const ModalComponent = ({ closeModal, user }) => {
  // Placeholder health information
  const healthInfo = {
    sugarLevel: "90 mg/dL",
    bloodPressure: "120/80 mmHg",
    heartRate: "72 bpm",
    nutritionalStatus: "Good balance of proteins, carbs, and fats",
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>{user}'s Health Status</h2>
        <p>Sugar Level: {healthInfo.sugarLevel}</p>
        <p>Blood Pressure: {healthInfo.bloodPressure}</p>
        <p>Heart Rate: {healthInfo.heartRate}</p>
        <p>Nutritional Status: {healthInfo.nutritionalStatus}</p>
        <button className="close-btn" onClick={onclose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
