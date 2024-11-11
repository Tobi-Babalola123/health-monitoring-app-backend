import React, { useState } from "react";
import HealthCategoryModal from "./HealthCategoryModal"; // Import your modal component

const HealthCard = ({
  id,
  title,
  date,
  icon,
  value,
  notes, // Add notes prop to handle notes
  link,
  onAdd,
  onDelete,
  onEdit,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null); // Track current record for editing

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleEditClick = () => {
    setCurrentRecord({ id, title, date, icon, value, notes }); // Include notes for editing
    setIsModalOpen(true); // Open the modal
  };

  const handleDeleteClick = () => {
    onDelete(id); // Trigger delete if needed
  };

  const handleSave = (updatedData) => {
    onEdit(id, updatedData); // Pass updated data back to the parent component (to handle actual edit)
    setIsModalOpen(false); // Close modal after saving
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-[19rem] relative flex flex-col items-center">
      {/* Buttons in the top right corner */}
      <div className="absolute top-2 right-2 flex space-x-2">
        <button
          className="text-gray-400"
          onClick={onAdd} // Trigger the Add function when "+" is clicked
        >
          +
        </button>
        <button
          className="text-gray-400"
          onClick={handleDropdownToggle} // Toggle dropdown when ⋮ is clicked
        >
          ⋮
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg">
            <ul>
              <li
                onClick={handleEditClick} // Handle the Edit action
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Edit
              </li>
              <li
                onClick={handleDeleteClick} // Handle the Delete action
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Title and Date */}
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      {/* Icon */}
      <div className="flex justify-center my-4">
        <span className="text-4xl">{icon}</span>
      </div>

      {/* Value */}
      <div className="mt-2 text-center">
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>

      {/* Notes */}
      {notes && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Notes: {notes}</p>
        </div>
      )}

      {/* View Details Link */}
      <a href={link} className="text-blue-500 mt-4 block text-center">
        View Details
      </a>

      {/* Modal for Add/Edit */}
      <HealthCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal
        onSave={handleSave} // Pass the save handler
        currentData={currentRecord} // Pass current record data
      />
    </div>
  );
};

export default HealthCard;
