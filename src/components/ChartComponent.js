import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./ChartComponent.css"; // Import your CSS file for styling

const ChartComponent = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Simulating fetching data
    const fetchData = async () => {
      // Replace this with your actual API call if available
      const simulatedResponse = {
        labels: ["January", "February", "March", "April", "May"],
        data: [65, 59, 80, 81, 56],
      };

      setData({
        labels: simulatedResponse.labels,
        datasets: [
          {
            label: "Health Data",
            fill: false,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            data: simulatedResponse.data,
            tension: 0.4, // Adjust tension for wavy effect
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      <h2 className="chart-header">Your Health Data</h2>
      <Line data={data} />
    </div>
  );
};

export default ChartComponent;
