import React, { useState, useEffect } from "react";
import HealthCard from "../components/HealthCard";
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

// Modal Component
const Modal = ({ show, onClose, title, children }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
      <div className="bg-white rounded-lg p-4 w-80 shadow-lg relative">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <div>{children}</div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const UserDashboard = () => {
  // State to store the list of health cards
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Health Card 1",
      date: "2024-11-01",
      icon: "❤️",
      value: "100",
      link: "#",
    },
    {
      id: 2,
      title: "Health Card 2",
      date: "2024-11-02",
      icon: "💪",
      value: "200",
      link: "#",
    },
  ]);

  // Handle adding a new card (you can implement this as needed)
  const handleAddCard = () => {
    const newCard = {
      id: cards.length + 1, // Generate a new ID
      title: "New Health Card",
      date: "2024-11-11",
      icon: "🏃‍♂️",
      value: "0",
      link: "#",
    };
    setCards([...cards, newCard]);
  };

  // Handle editing a card (open a modal or update the card directly)
  const handleEditCard = (cardId) => {
    const cardToEdit = cards.find((card) => card.id === cardId);
    if (cardToEdit) {
      // Logic to show modal or open a form to edit the card
      console.log("Editing card:", cardToEdit);
      // For demonstration, we'll just update the title
      const updatedCards = cards.map((card) =>
        card.id === cardId
          ? { ...card, title: "Updated Health Card" } // Example update
          : card
      );
      setCards(updatedCards);
    }
  };

  // Handle deleting a card
  const handleDeleteCard = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  const [darkMode, setDarkMode] = useState(false);
  const [healthData, setHealthData] = useState([]);

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
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          healthData={healthData}
          setHealthData={setHealthData}
          cards={cards}
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

const Header = ({
  darkMode,
  toggleDarkMode,
  healthData,
  setHealthData,
  cards,
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

  const handleEditCard = (cardId) => {
    const cardToEdit = cards.find((card) => card.id === cardId);
    if (cardToEdit) {
      setEditingCard(cardToEdit); // Set the card data for editing
      setModalOpen(true); // Open the modal
    }
  };

  const handleSave = () => {
    // Prepare data to be added
    const newData = {
      title: selectedItem,
      date: `Last updated ${new Date().toLocaleTimeString()} ago`,
      icon: "❤️",
      value: `${dataValue} ${selectedItem === "Heart Rate" ? "bpm" : ""}`,
      link: `/${selectedItem.toLowerCase().replace(" ", "-")}`,
    };

    setHealthData([...healthData, newData]); // Update healthData here
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

  // Function to calculate days in a given month/year (accounting for leap years in February)
  const getDaysInMonth = (month, year) => {
    const daysInMonth = new Date(year, months.indexOf(month) + 1, 0).getDate();
    return [...Array(daysInMonth).keys()].map((i) => i + 1);
  };

  // Update days whenever month or year changes
  useEffect(() => {
    const updatedDays = getDaysInMonth(date.month, date.year);
    setDaysInMonth(updatedDays);
  }, [date.month, date.year]);

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
        <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg">
          Connect Data
        </button>
      </div>

      <Modal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add Data"
      >
        <div className="flex flex-col space-y-4 p-6">
          {/* Data type */}
          <div>
            <label className="text-gray-600 font-semibold">Data type</label>
            <select
              value={selectedItem}
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
            <div className="flex space-x-2">
              {/* Month dropdown */}
              <select
                value={date.month}
                onChange={(e) => setDate({ ...date, month: e.target.value })}
                className="border border-gray-300 rounded-lg p-2"
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>

              {/* Day dropdown */}
              <select
                value={date.day}
                onChange={(e) =>
                  setDate({ ...date, day: parseInt(e.target.value) })
                }
                className="border border-gray-300 rounded-lg p-2"
              >
                {daysInMonth.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>

              {/* Year dropdown */}
              <select
                value={date.year}
                onChange={(e) =>
                  setDate({ ...date, year: parseInt(e.target.value) })
                }
                className="border border-gray-300 rounded-lg p-2"
              >
                {[...Array(36).keys()].map((i) => (
                  <option key={1990 + i} value={1990 + i}>
                    {1990 + i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Steps */}
          {/* Dynamic Data Input */}
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
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => {
                handleSave(); // Call the function to save the data
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
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
      {healthData.map((card) => (
        <HealthCard
          key={card.id}
          id={card.id}
          title={card.title}
          date={card.date}
          icon={card.icon}
          value={card.value}
          notes={card.notes}
          link={card.link}
          onAdd={handleAddCard}
          onDelete={handleDeleteCard}
          onEdit={handleEditCard}
        />
      ))}
      {/* </div> */}
      {/* ); */}
      {/* // }; */}

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
