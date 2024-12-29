import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 shadow-md transition-colors duration-300 ${
        isScrolled ? "bg-white bg-opacity-90" : "bg-transparent"
      } py-2`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <img
          src="/img/logo12.png"
          alt="Health Monitoring Logo"
          className="h-10"
        />

        {/* Desktop Navlinks */}
        <ul className="hidden md:flex space-x-6 items-center text-sm font-semibold">
          <li>
            <Link
              to="/"
              className="text-[#7ab2d3] hover:text-gray-800 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/spotlight"
              className="text-[#7ab2d3] hover:text-gray-800 transition"
            >
              Spotlight
            </Link>
          </li>
          <li>
            <Link
              to="/companyPage"
              className="text-[#7ab2d3] hover:text-gray-800 transition"
            >
              Company
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 text-[#7ab2d3] hover:text-gray-800 transition"
            >
              <FontAwesomeIcon icon={faUser} className="text-lg" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
                <Link
                  to="/signin"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Sign Up
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/signup">
              <button className="px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-[#7ab2d3] hover:text-gray-800 transition">
                Get Started
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-2xl text-white"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-[#2E5077] transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <ul className="flex flex-col items-start mt-20 space-y-6 px-6">
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className=" text-lg font-bold text-white  hover:text-[#7ab2d3] transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/spotlight"
              onClick={closeMenu}
              className=" text-lg font-bold text-white  hover:text-[#7ab2d3] transition"
            >
              Spotlight
            </Link>
          </li>
          <li>
            <Link
              to="/companyPage"
              onClick={closeMenu}
              className="text-lg font-bold text-white  hover:text-[#7ab2d3] transition"
            >
              Company
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 text-white text-lg font-bold hover:text-blue-300 transition"
            >
              <FontAwesomeIcon icon={faUser} />
              <span className="ml-2">Account</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white text-black shadow-lg rounded-md py-2">
                <Link
                  to="/signin"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Settings
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/signup" onClick={closeMenu}>
              <button className="px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-[#7ab2d3] hover:text-gray-800 transition">
                Get Started
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
