import React from "react";
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
import PersonalUserSignup from "./pages/PersonalUserSignup"; // Import the new PersonalUserSignup page
import PersonalUserDetails from "./pages/PersonalUserDetails";
import UserDashboard from "./pages/UserDashboard";
import { Buffer } from "buffer";
window.Buffer = Buffer;

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/personal" element={<PersonalUserSignup />} />{" "}
        <Route path="/personaluserdetails" element={<PersonalUserDetails />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        {/* New route for PersonalUserSignup */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/spotlight" element={<Spotlight />} />
      </Routes>

      {/* Conditionally render the footer based on the current path */}
      {location.pathname !== "/signup" &&
        location.pathname !== "/signup/personal" && <CustomFooter />}
    </div>
  );
};

export default App;
