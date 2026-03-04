import React, { useRef } from "react"; // Correctly import useRef here
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Dashboard/Home";
import CustomFooter from "./components/CustomFooter/CustomFooter";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Spotlight from "./pages/SpotlightPage/SpotlightPage";
import CompanyPage from "./pages/CompanyPage";
import PersonalUserSignup from "./pages/PersonalUserSignup";
import PersonalUserDetails from "./pages/PersonalUserDetails";
import UserDashboard from "./pages/UserDashboard";
import Dashboard from "./pages/Dasboard";
import { Buffer } from "buffer";
// import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
window.Buffer = Buffer;

const App = () => {
  console.log(
    Home,
    CustomFooter,
    SignUp,
    SignIn,
    Spotlight,
    PersonalUserSignup,
    PersonalUserDetails,
    UserDashboard,
  );

  const location = useLocation();
  const footerRef = useRef(null); // Create ref for the footer

  // List of paths that should not show the footer
  const pathsWithoutFooter = [
    "/signup",
    "/signin",
    "/signup/personal",
    "/personaluserdetails",
    "/userdashboard",
    "/dashboard",
  ];

  // Conditionally render the footer based on the current path
  const shouldRenderFooter = !pathsWithoutFooter.includes(location.pathname);

  return (
    <div className="app">
      {/* <ReactNotification /> */}
      <Routes>
        <Route path="/" element={<Home footerRef={footerRef} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/personal" element={<PersonalUserSignup />} />
        <Route path="/personaluserdetails" element={<PersonalUserDetails />} />
        <Route path="/personalusersignup" element={<PersonalUserSignup />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/spotlight" element={<Spotlight />} />
        <Route path="/companyPage" element={<CompanyPage />} />
      </Routes>

      {/* Conditionally render the footer based on the current path */}
      {shouldRenderFooter && <CustomFooter ref={footerRef} />}
    </div>
  );
};

export default App;
