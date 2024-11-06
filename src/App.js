import React, { useState, useEffect, useRef } from "react"; // <-- Ensure useRef is imported

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import CustomFooter from "./components/CustomFooter/CustomFooter";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Spotlight from "./pages/SpotlightPage/SpotlightPage";
import PersonalUserSignup from "./pages/PersonalUserSignup";
import PersonalUserDetails from "./pages/PersonalUserDetails";
import UserDashboard from "./pages/UserDashboard";
import { Buffer } from "buffer";
window.Buffer = Buffer;

const App = () => {
  const location = useLocation();
  const footerRef = useRef(null); // Create ref for the footer

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard footerRef={footerRef} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/personal" element={<PersonalUserSignup />} />
        <Route path="/personaluserdetails" element={<PersonalUserDetails />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/spotlight" element={<Spotlight />} />
      </Routes>

      {/* Conditionally render the footer based on the current path */}
      {location.pathname !== "/signup" &&
        location.pathname !== "/signup/personal" &&
        location.pathname !== "/personaluserdetails" && // Exclude footer on PersonalUserDetails
        location.pathname !== "/userdashboard" && ( // Exclude footer on UserDashboard
          <CustomFooter ref={footerRef} />
        )}
    </div>
  );
};

export default App;
