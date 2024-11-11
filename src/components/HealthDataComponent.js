import React, { useState, useEffect } from "react";

const HealthDataComponent = () => {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch health data from the API
  const fetchHealthData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/healthdata");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setHealthData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading health data. Please try again later.</p>;
  }

  if (
    !healthData ||
    !healthData.heartRate ||
    !healthData.bloodPressure ||
    !healthData.steps
  ) {
    return <p>No health data available. Please input your health data.</p>;
  }

  return (
    <div className="card">
      <h2>Health Data</h2>
      <p>Heart Rate: {healthData.heartRate || "N/A"} bpm</p>
      <p>Blood Pressure: {healthData.bloodPressure || "N/A"} mmHg</p>
      <p>Steps Today: {healthData.steps || "N/A"}</p>
    </div>
  );
};

export default HealthDataComponent;
