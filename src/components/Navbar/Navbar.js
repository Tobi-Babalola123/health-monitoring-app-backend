import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ isScrolled }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("Toggling dropdown..."); // Debugging log
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside of the dropdown
      if (
        !event.target.closest(".dropdown-menu") &&
        !event.target.closest(".account-icon")
      ) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <img
        src="/img/logo12.png"
        alt="Health Monitoring Logo"
        style={{ height: "50px" }}
      />
      <ul className="navbar-links">
        <li>
          <Link to="/" className="dropbtn">
            Home
          </Link>
        </li>
        <li>
          <Link to="/spotlight" className="dropbtn">
            Spotlight
          </Link>
        </li>
        <li>
          <Link to="/company" className="dropbtn">
            Company
          </Link>
        </li>
        <li className="account-icon" onClick={toggleDropdown}>
          <Link to="#" className="nav-icon">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          {isDropdownOpen && (
            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <Link to="/signin">Sign In</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/settings">Settings</Link>
            </div>
          )}
        </li>
        <li>
          <button className="btn-doctor">Talk to a Doctor</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
