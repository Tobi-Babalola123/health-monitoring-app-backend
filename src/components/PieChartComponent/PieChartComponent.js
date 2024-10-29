// src/components/PieChartComponent.js
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js"; // Import the necessary components

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale); // Add CategoryScale if necessary

const PieChartComponent = () => {
  const data = {
    labels: ["Data 1", "Data 2", "Data 3"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="pie-chart-container">
      <h2 className="chart-header">Health Statistics</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChartComponent;
