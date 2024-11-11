import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/healthDataChart.css"; // Import your custom CSS

// Register the required chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HealthDataChart = ({ healthData }) => {
  if (!healthData || healthData.length === 0) {
    return <div>No health data available.</div>;
  }

  // Prepare chart data
  const chartData = {
    labels: healthData.map((item) => item.date),
    datasets: [
      {
        label: "Heart Rate (bpm)",
        data: healthData.map((item) => item.heartRate),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Blood Pressure",
        data: healthData.map((item) => item.bloodPressure),
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
      {
        label: "Steps",
        data: healthData.map((item) => item.steps),
        fill: false,
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Health Data Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default HealthDataChart;
