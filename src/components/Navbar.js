// src/components/Navbar.js
import React from "react";
import "./Navbar.css"; // Create this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="#about">Home</a>
        </li>
        <li>
          <a href="#services">Spotlight</a>
        </li>
        <li>
          <a href="#contact">Company</a>
        </li>
        <li>
          <a href="#contact">Blog</a>
        </li>
      </ul>
      <button className="talk-to-doctor">Talk to a Doctor</button>
    </nav>
  );
};

export default Navbar;
