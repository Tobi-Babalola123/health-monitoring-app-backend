import React, { useState } from "react";

const HealthDataForm = ({ onSubmit }) => {
  const [heartRate, setHeartRate] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [steps, setSteps] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation to check if fields are not empty
    if (!heartRate || !bloodPressure || !steps) {
      setError("All fields are required");
      return;
    }

    // Create data object
    const healthData = {
      heartRate,
      bloodPressure,
      steps,
    };

    setIsSubmitting(true); // Set loading state

    try {
      // Send POST request to save health data
      const response = await fetch("http://localhost:5000/healthdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(healthData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      // Call the onSubmit function to update the parent component
      onSubmit();

      // Optionally, reset the form values after submission
      setHeartRate("");
      setBloodPressure("");
      setSteps("");
      setError(""); // Clear error
    } catch (error) {
      setError("Error submitting data. Please try again.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto space-y-6"
    >
      <h3 className="text-2xl font-semibold text-gray-800">
        Submit Health Data
      </h3>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="heartRate"
            className="block text-sm font-medium text-gray-700"
          >
            Heart Rate (bpm):
          </label>
          <input
            type="number"
            id="heartRate"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
            placeholder="Enter Heart Rate"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="bloodPressure"
            className="block text-sm font-medium text-gray-700"
          >
            Blood Pressure (mmHg):
          </label>
          <input
            type="text"
            id="bloodPressure"
            value={bloodPressure}
            onChange={(e) => setBloodPressure(e.target.value)}
            placeholder="Enter Blood Pressure"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="steps"
            className="block text-sm font-medium text-gray-700"
          >
            Steps Today:
          </label>
          <input
            type="number"
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Enter Steps"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 mt-4 rounded-md font-semibold text-white ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Health Data"}
        </button>
      </div>
    </form>
  );
};

export default HealthDataForm;
