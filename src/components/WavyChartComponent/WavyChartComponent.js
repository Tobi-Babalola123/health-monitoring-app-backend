// src/components/WavyChartComponent.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js"; // Import the necessary components

// Register the necessary components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const WavyChartComponent = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Wavy Data",
        data: [65, 59, 80, 81, 56, 55],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4, // Adjust tension for wavy effect
      },
    ],
  };

  return (
    <div className="wavy-chart-container">
      <h2 className="chart-header">Wavy Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default WavyChartComponent;
