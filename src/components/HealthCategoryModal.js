import React, { useState, useEffect } from "react";

const HealthCategoryModal = ({ isOpen, onClose, onSave, currentData }) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    if (currentData) {
      setTitle(currentData.title);
      setValue(currentData.value);
      setDate(currentData.date);
      setIcon(currentData.icon);
    }
  }, [currentData]);

  const handleSave = () => {
    const updatedData = { title, value, date, icon };
    onSave(updatedData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{currentData ? "Edit Health Category" : "Add Health Category"}</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Icon"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default HealthCategoryModal;
