import React from "react";
import Header from "./components/Header"; // Adjust the import path as necessary
import Dashboard from "./components/Dashboard"; // Assuming the dashboard is in the components folder
import CustomFooter from "./components/CustomFooter"; // Import the custom footer

const App = () => {
  return (
    <div className="app">
      {/* <Header /> */}
      <Dashboard />
      <CustomFooter />
    </div>
  );
};

export default App;
