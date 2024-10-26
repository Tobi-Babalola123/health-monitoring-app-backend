import axios from "axios";

const API_URL = "http://localhost:5001/api";

export const getHealthData = async () => {
  try {
    const response = await axios.get(`${API_URL}/health-data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching health data", error);
    throw error;
  }
};
