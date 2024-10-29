import React from "react";
import { Link } from "react-router-dom"; // If you're using react-router for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ isScrolled }) => {
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
        <li className="account-icon">
          <Link to="#" className="nav-icon">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
        <li>
          <button className="btn-doctor">Talk to a Doctor</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
