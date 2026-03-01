"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChartBar,
  FaFlask,
  FaFileAlt,
  FaBook,
  FaBell,
  FaUser,
  FaSun,
  FaMoon,
  FaSignOutAlt,
  FaEdit,
  FaLightbulb,
  FaCog,
} from "react-icons/fa";
import { MdDashboard, MdAccountCircle } from "react-icons/md";

// Modal Component
const Modal = ({ show, onClose, title, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// HealthCard Component
const HealthCard = ({
  id,
  title,
  date,
  icon,
  value,
  notes,
  link,
  onAdd,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-medium text-gray-900 text-lg">{title}</h3>
          <p className="text-gray-500 text-sm mt-1">{date}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onAdd(id)}
            className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-50"
          >
            <span className="text-lg font-light">+</span>
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center py-8">
        <div className="text-4xl mb-4">{icon}</div>
        <p className="text-gray-600 text-lg">{value}</p>
        {notes && <p className="text-gray-500 text-sm mt-2">{notes}</p>}
      </div>

      {link && (
        <Link
          to={link}
          className="text-blue-500 hover:underline text-sm block text-center"
        >
          View More
        </Link>
      )}
    </div>
  );
};

// Mock data
const initialHealthData = [
  {
    id: 1,
    title: "Body Fat (Manual)",
    date: "07/22/25, 11:11 PM",
    icon: (
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">%</span>
        </div>
      </div>
    ),
    value: "%",
    link: "/summary/body-fat",
    notes: "Manual entry",
  },
  {
    id: 2,
    title: "Fasting (Manual)",
    date: "07/22/25 11:11 PM",
    icon: (
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">⏱</span>
        </div>
      </div>
    ),
    value: "00:00:00",
    link: "/summary/fasting",
    notes: "Manual entry",
  },
];

const dashboardItems = [
  {
    title: "Heart Rate",
    date: "Last updated 3 mins ago",
    icon: (
      <div className="flex justify-center items-center">
        <img
          src="/img/blood-pressure.png"
          alt="Heart Rate"
          className="w-16 h-16 object-contain"
        />
      </div>
    ),
    value: "72 bpm",
    link: "/heart-rate",
  },
  {
    title: "Steps",
    date: "Last updated 10 mins ago",
    icon: (
      <div className="flex justify-center items-center">
        <img
          src="/img/trainers.png"
          alt="Steps"
          className="w-16 h-16 object-contain"
        />
      </div>
    ),
    value: "5,432 steps",
    link: "/steps",
  },
  {
    title: "Fasting (Manual)",
    date: "11/03/24, 07:09 AM",
    icon: (
      <div className="flex justify-center items-center">
        <img
          src="/img/iftar.png"
          alt="Fasting"
          className="w-16 h-16 object-contain"
        />
      </div>
    ),
    value: "Elapsed",
    link: "/summary/fasting",
  },
  {
    title: "Blood Pressure (Manual)",
    date: "11/03/24, 07:09 AM",
    icon: (
      <div className="flex justify-center items-center">
        <img
          src="/img/vitals2.png"
          alt="Blood Pressure"
          className="w-16 h-16 object-contain"
        />
      </div>
    ),
    value: "mmHg",
    link: "/summary/blood-pressure",
  },
  {
    title: "Ketones - Blood (Manual)",
    date: "11/03/24, 07:09 AM",
    icon: (
      <div className="flex justify-center items-center">
        <img
          src="/img/blood-test.png"
          alt="Ketones - Blood"
          className="w-16 h-16 object-contain"
        />
      </div>
    ),
    value: "mmol/L",
    link: "/summary/ketones",
  },
  {
    title: "Glucose (Manual)",
    date: "11/03/24, 07:09 AM",
    icon: (
      <div className="flex justify-center items-center">
        <img
          src="/img/glucose.png"
          alt="Glucose"
          className="w-16 h-16 object-contain"
        />
      </div>
    ),
    value: "mg/dL",
    link: "/summary/glucose",
  },
  {
    title: "Time Asleep (Manual)",
    date: "11/03/24, 07:09 AM",
    icon: (
      <div className="flex justify-center items-center">
        <img
          src="/img/sleeping.png"
          alt="Time Asleep"
          className="w-16 h-16 object-contain"
        />
      </div>
    ),
    value: "8 hours",
    link: "/summary/sleep",
  },
];

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [healthData, setHealthData] = useState(initialHealthData);
  const [cards, setCards] = useState([]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleAddCard = () => {
    const newCard = {
      id: cards.length + 1,
      title: "New Health Card",
      date: "2024-11-11",
      value: "0",
      link: "#",
    };
    setCards([...cards, newCard]);
  };

  const handleDeleteCard = (cardId) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  const handleEditCard = (cardId) => {
    console.log("Edit card", cardId);
  };

  return (
    <div
      className={`flex h-screen font-sans ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className="flex-1 flex flex-col overflow-y-auto"
        style={{
          marginLeft:
            typeof window !== "undefined" && window.innerWidth >= 768
              ? "16rem"
              : "0",
        }}
      >
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          healthData={healthData}
          setHealthData={setHealthData}
          cards={cards}
          handleAddCard={handleAddCard}
        />
        <DashboardContent
          healthData={healthData}
          handleAddCard={handleAddCard}
          handleDeleteCard={handleDeleteCard}
          handleEditCard={handleEditCard}
        />
      </div>
    </div>
  );
};

const Sidebar = ({ darkMode, toggleDarkMode }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <>
      {/* Hamburger Menu (Mobile Only) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-3xl text-gray-800 focus:outline-none"
        >
          {isMobileSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-gray-100 p-6 flex-col space-y-6 fixed h-screen">
        <SidebarContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Mobile Sidebar - Full Screen Overlay */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white p-6 z-40 transition-transform duration-300 ease-in-out transform md:hidden ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
        >
          <FaTimes />
        </button>

        <SidebarContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Mobile overlay background */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

const SidebarContent = ({ darkMode, toggleDarkMode }) => (
  <>
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">
        TB
      </div>
      <p className="text-gray-600 mt-3 text-lg">Hi, Tobi</p>
      <button className="text-gray-400 mt-1">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <DropdownMenu
        username="Tobi Babalola"
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
    <nav className="space-y-6">
      <SidebarLinks />
    </nav>
  </>
);

const SidebarLinks = () => (
  <>
    <Link
      to="/dashboard"
      className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 transition py-3"
    >
      <MdDashboard className="text-xl" />
      <span className="text-lg">Dashboard</span>
    </Link>
    <Link
      to="/reports"
      className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 transition py-3"
    >
      <FaChartBar className="text-xl" />
      <span className="text-lg">Reports</span>
    </Link>
    <Link
      to="/lab-results"
      className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 transition py-3"
    >
      <FaFlask className="text-xl" />
      <span className="text-lg">Lab Results</span>
    </Link>
    <Link
      to="/files"
      className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 transition py-3"
    >
      <FaFileAlt className="text-xl" />
      <span className="text-lg">Files</span>
    </Link>
    <Link
      to="/knowledge-base"
      className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 transition py-3"
    >
      <FaBook className="text-xl" />
      <span className="text-lg">Knowledge Base</span>
    </Link>
  </>
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
      <div className="relative inline-block text-left z-20 mt-4">
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

const Header = ({
  darkMode,
  toggleDarkMode,
  healthData,
  setHealthData,
  cards,
  handleAddCard,
}) => {
  const [addDataDropdownOpen, setAddDataDropdownOpen] = useState(false);
  const [nestedDropdown, setNestedDropdown] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [steps, setSteps] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState({ month: "Nov", day: 10, year: 2024 });
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [dataValue, setDataValue] = useState("");
  const [editingCard, setEditingCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const handleEditCard = (cardId) => {
    const cardToEdit = cards.find((card) => card.id === cardId);
    if (cardToEdit) {
      setEditingCard(cardToEdit);
      setModalOpen(true);
    }
  };

  const handleSave = () => {
    const newData = {
      id: healthData.length + 1,
      title: selectedItem,
      date: `Last updated ${new Date().toLocaleTimeString()} ago`,
      icon: "❤️",
      value: `${dataValue} ${selectedItem === "Heart Rate" ? "bpm" : ""}`,
      link: `/${selectedItem.toLowerCase().replace(" ", "-")}`,
      notes: notes,
    };
    setHealthData([...healthData, newData]);
    setModalOpen(false);
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getDaysInMonth = (month, year) => {
    const daysInMonth = new Date(year, months.indexOf(month) + 1, 0).getDate();
    return [...Array(daysInMonth).keys()].map((i) => i + 1);
  };

  useEffect(() => {
    const updatedDays = getDaysInMonth(date.month, date.year);
    setDaysInMonth(updatedDays);
  }, [date.month, date.year]);

  const dataCategories = [
    {
      title: "Cardiovascular",
      icon: (
        <img
          src="/img/blood-pressure.png"
          alt="Cardiovascular"
          className="w-6 h-6 mr-2"
        />
      ),
      items: ["Blood Pressure", "VO2 Max"],
    },
    {
      title: "Lifestyle",
      icon: (
        <img
          src="/img/quit-smoking.png"
          alt="Lifestyle"
          className="w-6 h-6 mr-2"
        />
      ),
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
      icon: (
        <img
          src="/img/siringe.png"
          alt="Medications"
          className="w-6 h-6 mr-2"
        />
      ),
      items: ["GLP-1 Peptide"],
    },
    {
      title: "Metabolism",
      icon: (
        <img src="/img/glucose.png" alt="Metabolism" className="w-6 h-6 mr-2" />
      ),
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
      icon: (
        <img
          src="/img/nutrition-plan.png"
          alt="Nutrition"
          className="w-6 h-6 mr-2"
        />
      ),
      items: ["Bristol Score", "Macronutrient"],
    },
    {
      title: "Rest & Recovery",
      icon: (
        <img
          src="/img/sleeping.png"
          alt="Rest & Recovery"
          className="w-6 h-6 mr-2"
        />
      ),
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
      icon: (
        <img src="/img/thermometer.png" alt="Vitals" className="w-6 h-6 mr-2" />
      ),
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
      icon: (
        <img
          src="/img/customization.png"
          alt="Custom"
          className="w-6 h-6 mr-2"
        />
      ),
      items: ["Create New"],
    },
  ];

  const handleCategorySelect = (categoryTitle) => {
    const category = dataCategories.find(
      (category) => category.title === categoryTitle
    );
    setSelectedCategory(category);
  };

  return (
    <header className="flex items-center justify-between p-4 border-b bg-white">
      {/* Left side - Hamburger menu (mobile) and Logo */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-2xl text-gray-600 hover:text-gray-800"
        >
          <FaBars />
        </button>
        <img
          src="/img/logo12.png"
          alt="Heads Up Logo"
          className="h-10 hidden md:block"
        />
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center space-x-3">
        <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
          Upgrade
        </button>

        {/* Add Data Dropdown - Hidden on mobile */}
        <div className="relative hidden md:block">
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
                    onClick={() => {
                      setSelectedItem(category.title);
                      setModalOpen(true);
                    }}
                  >
                    {category.title}
                  </button>
                  {nestedDropdown === index && (
                    <div className="absolute left-0 top-0 transform -translate-x-full mt-0 w-48 bg-white shadow-lg rounded-lg z-20">
                      {category.items.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedItem(item);
                            setModalOpen(true);
                          }}
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

        {/* Connect Data Button - Hidden on mobile */}
        <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg hidden md:block">
          Connect Data
        </button>

        {/* Notification Bell */}
        <button className="text-gray-600 hover:text-gray-800">
          <FaBell className="text-xl" />
        </button>
      </div>

      {/* Modal */}
      <Modal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add Data"
      >
        <div className="flex flex-col space-y-4 w-full">
          {/* Data type */}
          <div>
            <label className="text-gray-600 font-semibold">Data type</label>
            <select
              value={selectedItem || ""}
              onChange={(e) => setSelectedItem(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="" disabled>
                Select data type
              </option>
              {dataCategories.map((category) => (
                <optgroup key={category.title} label={category.title}>
                  {category.items.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          {/* Date */}
          <div>
            <label className="text-gray-600 font-semibold">Date</label>
            <div className="flex gap-2">
              <select
                value={date.month}
                onChange={(e) => setDate({ ...date, month: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 flex-1"
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                value={date.day}
                onChange={(e) =>
                  setDate({ ...date, day: Number.parseInt(e.target.value) })
                }
                className="border border-gray-300 rounded-lg p-2 flex-1"
              >
                {daysInMonth.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                value={date.year}
                onChange={(e) =>
                  setDate({ ...date, year: Number.parseInt(e.target.value) })
                }
                className="border border-gray-300 rounded-lg p-2 flex-1"
              >
                {[...Array(36).keys()].map((i) => (
                  <option key={1990 + i} value={1990 + i}>
                    {1990 + i}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Data Input */}
          <div>
            <label className="text-gray-600 font-semibold">
              {selectedItem || "Select a data category"}
            </label>
            <input
              type="number"
              value={dataValue}
              onChange={(e) => setDataValue(e.target.value)}
              placeholder={`Enter ${
                selectedItem ? selectedItem.toLowerCase() : "value"
              }`}
              className="border border-gray-300 rounded-lg p-2 w-full"
              disabled={!selectedItem}
            />
          </div>
          {/* Notes */}
          <div>
            <label className="text-gray-600 font-semibold">
              Notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes here"
              className="border border-gray-300 rounded-lg p-2 w-full"
              rows={3}
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => {
                handleSave();
                alert(`${selectedItem} added!`);
                setModalOpen(false);
              }}
              className="bg-gray-300 text-black px-4 py-2 rounded-lg"
            >
              Save
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </header>
  );
};

const DashboardContent = ({
  healthData,
  handleAddCard,
  handleDeleteCard,
  handleEditCard,
}) => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="p-4 space-y-4">
        {[...healthData, ...dashboardItems].map((item, index) => {
          const isHealthCard = item.hasOwnProperty("notes");
          return isHealthCard ? (
            <div key={item.id} className="w-full">
              <HealthCard
                id={item.id}
                title={item.title}
                date={item.date}
                icon={item.icon}
                value={item.value}
                notes={item.notes}
                link={item.link}
                onAdd={handleAddCard}
                onDelete={handleDeleteCard}
                onEdit={handleEditCard}
              />
            </div>
          ) : (
            <div
              key={index}
              className="relative bg-white rounded-lg p-4 shadow-sm border"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-medium text-gray-900 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{item.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-50">
                    <span className="text-lg font-light">+</span>
                  </button>
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => toggleDropdown(index)}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col items-center py-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-gray-600 text-lg">{item.value}</p>
              </div>

              <Link
                to={item.link}
                className="text-blue-500 hover:underline text-sm block text-center"
              >
                View More
              </Link>

              {/* Dropdown Content */}
              {dropdownIndex === index && (
                <div className="absolute right-4 top-16 w-48 bg-white shadow-lg rounded-lg py-2 z-30 border">
                  <button
                    onClick={() => alert("Graph Data selected")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                  >
                    Graph Data
                  </button>
                  <button
                    onClick={() => alert("Edit/Delete selected")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                  >
                    Edit/Delete
                  </button>
                  <button
                    onClick={() => alert("Configuration selected")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                  >
                    Configuration
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
