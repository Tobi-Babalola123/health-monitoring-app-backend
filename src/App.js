import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import CustomFooter from "./components/CustomFooter/CustomFooter";
// import Spotlight from "./components/Spotlight/Spotlight";
import Spotlight from "./pages/SpotlightPage/SpotlightPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/spotlight" element={<Spotlight />} />
          {/* Add other routes as needed */}
        </Routes>
        <CustomFooter />
      </div>
    </Router>
  );
};

export default App;
