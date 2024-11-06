import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaSun,
  FaMoon,
  FaEdit,
  FaLightbulb,
  FaChartBar,
  FaFileAlt,
  FaFlask,
  FaBook,
} from "react-icons/fa";
import { MdAccountCircle, MdDashboard } from "react-icons/md";

const UserDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`flex h-screen font-sans ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className="flex-1 flex flex-col overflow-y-auto"
        style={{ marginLeft: "16rem" }} // Offset by sidebar's width
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <DashboardContent />
      </div>
    </div>
  );
};

const Sidebar = ({ darkMode, toggleDarkMode }) => (
  <div className="w-64 bg-gray-100 p-6 flex flex-col space-y-6 fixed h-screen">
    <div className="text-center mb-4">
      <img
        src="/img/avatar-placeholder.png"
        alt="User"
        className="w-16 h-16 rounded-full mx-auto"
      />
      <p className="text-gray-600 mt-2">Welcome</p>
      <DropdownMenu
        username="Tobi Babalola"
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
    <nav className="space-y-4">
      <Link
        to="/dashboard"
        className="nav-item flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition"
      >
        <MdDashboard />
        <span>Dashboard</span>
      </Link>
      <Link
        to="/reports"
        className="nav-item flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition"
      >
        <FaChartBar />
        <span>Reports</span>
      </Link>
      <Link
        to="/lab-results"
        className="nav-item flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition"
      >
        <FaFlask />
        <span>Lab Results</span>
      </Link>
      <Link
        to="/files"
        className="nav-item flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition"
      >
        <FaFileAlt />
        <span>Files</span>
      </Link>
      <Link
        to="/knowledge-base"
        className="nav-item flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition"
      >
        <FaBook />
        <span>Knowledge Base</span>
      </Link>
    </nav>
  </div>
);

const DropdownMenu = ({ username, darkMode, toggleDarkMode }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {dropdownOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setDropdownOpen(false)}
        />
      )}

      <div className="relative inline-block text-left z-20">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <FaUser className="text-gray-600" />
          <span>{username}</span>
        </button>
        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-20">
            <Link
              to="/account"
              className="dropdown-item flex items-center px-4 py-2 space-x-2"
            >
              <MdAccountCircle className="text-gray-600" />
              <span>Account</span>
            </Link>
            <Link
              to="/edit-data"
              className="dropdown-item flex items-center px-4 py-2 space-x-2"
            >
              <FaEdit className="text-gray-600" />
              <span>Edit Data</span>
            </Link>
            <Link
              to="/request-feature"
              className="dropdown-item flex items-center px-4 py-2 space-x-2"
            >
              <FaLightbulb className="text-gray-600" />
              <span>Request a Feature</span>
            </Link>
            <Link
              to="/settings"
              className="dropdown-item flex items-center px-4 py-2 space-x-2"
            >
              <FaCog className="text-gray-600" />
              <span>Settings</span>
            </Link>
            <div className="dropdown-item flex items-center justify-between px-4 py-2">
              <span className="flex items-center space-x-2">
                <FaSun className="text-gray-600" />
                <span>Dark Mode</span>
              </span>
              <button
                onClick={toggleDarkMode}
                className="ml-2 focus:outline-none"
              >
                {darkMode ? (
                  <FaSun className="text-yellow-500" />
                ) : (
                  <FaMoon className="text-gray-600" />
                )}
              </button>
            </div>
            <Link
              to="/logout"
              className="dropdown-item flex items-center px-4 py-2 space-x-2"
            >
              <FaSignOutAlt className="text-gray-600" />
              <span>Logout</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

const Header = () => {
  const [addDataDropdownOpen, setAddDataDropdownOpen] = useState(false);
  const [nestedDropdown, setNestedDropdown] = useState(null);

  const dataCategories = [
    {
      title: "Cardiovascular",
      items: ["Blood Pressure", "VO2 Max"],
    },
    {
      title: "Lifestyle",
      items: [
        "Alcohol Intake",
        "Caffeine Intake",
        "Hydration",
        "Journal Entry",
        "Quit Events",
      ],
    },
    {
      title: "Medications",
      items: ["GLP-1 Peptide"],
    },
    {
      title: "Metabolism",
      items: [
        "Carb Tolerance Test",
        "Fasting",
        "Glucose",
        "Glucose:Ketone Index",
        "Keto-Mojo",
        "Ketones:Blood",
        "Ketones:Breath",
        "Ketones:Urine",
      ],
    },
    {
      title: "Nutrition",
      items: ["Bristol Score", "Macronutrient"],
    },
    {
      title: "Rest & Recovery",
      items: [
        "AM Readiness",
        "Cryotherapy",
        "HRV",
        "HRV-Sleep",
        "Hyperbaric Oxygen",
        "Ice Bath",
        "Medication Time",
        "Photobiomodulation",
        "Sauna",
        "Time Asleep",
      ],
    },
    {
      title: "Vitals",
      items: [
        "Basal Temperature",
        "Blood Oxygen",
        "Body Temperature",
        "Heart Rate",
        "Resting Heart Rate",
      ],
    },
    {
      title: "Custom",
      items: ["Create New"],
    },
  ];

  return (
    <header className="flex items-center justify-between p-6 border-b">
      <img src="/img/logo.png" alt="Heads Up Logo" className="h-10" />
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Upgrade
        </button>
        <div className="relative">
          <button
            onClick={() => setAddDataDropdownOpen(!addDataDropdownOpen)}
            className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg"
          >
            + Add Data
          </button>
          {addDataDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
              {dataCategories.map((category, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setNestedDropdown(index)}
                  onMouseLeave={() => setNestedDropdown(null)}
                  className="relative"
                >
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => alert(`${category.title} selected`)}
                  >
                    {category.title}
                  </button>
                  {nestedDropdown === index && (
                    <div className="absolute left-0 top-0 transform -translate-x-full mt-0 w-48 bg-white shadow-lg rounded-lg z-20">
                      {category.items.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => alert(`${item} selected`)}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg">
          Connect Data
        </button>
      </div>
    </header>
  );
};

const DashboardContent = () => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
      {dashboardItems.map((item, index) => (
        <div
          key={index}
          className="relative bg-gray-100 p-6 rounded-lg shadow-lg text-center"
        >
          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="text-gray-400">+</button>
            <button
              className="text-gray-400"
              onClick={() => toggleDropdown(index)}
            >
              ⋮
            </button>
          </div>

          <h3 className="text-gray-800 font-medium text-lg mt-6">
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm">{item.date}</p>
          <div className="text-3xl text-blue-500 my-4">{item.icon}</div>
          <p className="text-gray-500">{item.value}</p>
          <Link
            to={item.link}
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            View More
          </Link>

          {dropdownIndex === index && (
            <div className="absolute right-2 top-10 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
              <button
                onClick={() => alert("Graph Data selected")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Graph Data
              </button>
              <button
                onClick={() => alert("Edit/Delete selected")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Edit/Delete
              </button>
              <button
                onClick={() => alert("Configuration selected")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Configuration
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const dashboardItems = [
  {
    title: "Heart Rate",
    date: "Last updated 3 mins ago",
    icon: "❤️",
    value: "72 bpm",
    link: "/heart-rate",
  },
  {
    title: "Steps",
    date: "Last updated 10 mins ago",
    icon: "👟",
    value: "5,432 steps",
    link: "/steps",
  },
  {
    title: "Fasting (Manual)",
    date: "11/03/24, 07:09 AM",
    icon: "⏳", // Replace with actual icon/image
    value: "Elapsed",
    link: "/summary/fasting",
  },
  {
    title: "Blood Pressure (Manual)",
    date: "11/03/24, 07:09 AM",
    icon: "💉", // Replace with actual icon/image
    value: "mmHg",
    link: "/summary/blood-pressure",
  },
  {
    title: "Ketones - Blood (Manual)",
    date: "11/03/24, 07:09 AM",
    icon: "🧬", // Replace with actual icon/image
    value: "mmol/L",
    link: "/summary/ketones",
  },
  {
    title: "Glucose (Manual)",
    date: "11/03/24, 07:09 AM",
    icon: "🍬", // Replace with actual icon/image
    value: "mg/dL",
    link: "/summary/glucose",
  },
  {
    title: "Time Asleep (Manual)",
    date: "11/03/24, 07:09 AM",
    icon: "💤", // Adjust as necessary
    value: "8 hours",
    link: "/summary/sleep",
  },
];

export default UserDashboard;
