import React from "react";
// import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import CustomFooter from "./components/CustomFooter/CustomFooter";

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
