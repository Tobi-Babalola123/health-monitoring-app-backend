import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonalUserDetails = () => {
  const [form, setForm] = useState({
    dateOfBirth: { month: "Jan", day: "01", year: "1980" },
    sex: "Male",
    units: "Imperial",
    height: { feet: "", inches: "" },
    timeZone: "(GMT-08:00) Pacific Time (US & Canada)",
    recaptcha: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "month" || name === "day" || name === "year") {
      setForm((prevForm) => ({
        ...prevForm,
        dateOfBirth: { ...prevForm.dateOfBirth, [name]: value },
      }));
    } else if (name === "sex") {
      setForm((prevForm) => ({ ...prevForm, sex: value }));
    } else if (name === "units") {
      setForm((prevForm) => ({ ...prevForm, units: value }));
    } else if (name === "timeZone") {
      setForm((prevForm) => ({ ...prevForm, timeZone: value }));
    } else if (name === "recaptcha") {
      setForm((prevForm) => ({ ...prevForm, recaptcha: checked }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        height: { ...prevForm.height, [name]: value },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.recaptcha) {
      alert("Please verify that you're not a robot.");
      return;
    }
    alert("Account created successfully!");
    navigate("/userdashboard");
  };

  const renderYears = () => {
    const years = [];
    for (let year = 2024; year >= 1915; year--) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return years;
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

  const renderDays = () => {
    const days = [];
    for (let day = 1; day <= 31; day++) {
      const dayString = day < 10 ? `0${day}` : `${day}`;
      days.push(
        <option key={day} value={dayString}>
          {dayString}
        </option>
      );
    }
    return days;
  };

  const timeZones = [
    "(GMT-12:00) International Date Line West",
    "(GMT-11:00) Midway Island, Samoa",
    // Add more time zones as needed
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center w-[97%] max-w-lg p-6 bg-white rounded-lg shadow-lg overflow-y-auto scrollbar-hidden h-full">
        <img
          src="/img/logo.png"
          alt="Heads Up Logo"
          className="w-32 h-auto mb-4"
        />
        <h2 className="text-2xl font-semibold mb-4">
          Let's personalize your experience.
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          {/* Date of Birth Section */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <div className="flex space-x-2 mb-4">
            <select
              name="month"
              value={form.dateOfBirth.month}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-lg p-2"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              name="day"
              value={form.dateOfBirth.day}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-lg p-2"
            >
              {renderDays()}
            </select>
            <select
              name="year"
              value={form.dateOfBirth.year}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-lg p-2"
            >
              {renderYears()}
            </select>
          </div>

          {/* Sex at Birth Section */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Sex at Birth
          </label>
          <div className="flex space-x-4 mb-4">
            <button
              type="button"
              className={`flex-1 px-4 py-2 border rounded-lg ${
                form.sex === "Male"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setForm({ ...form, sex: "Male" })}
            >
              Male
            </button>
            <button
              type="button"
              className={`flex-1 px-4 py-2 border rounded-lg ${
                form.sex === "Female"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setForm({ ...form, sex: "Female" })}
            >
              Female
            </button>
          </div>

          {/* Display Units Section */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Display Units
          </label>
          <div className="flex space-x-4 mb-4">
            <button
              type="button"
              className={`flex-1 px-4 py-2 border rounded-lg ${
                form.units === "Imperial"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setForm({ ...form, units: "Imperial" })}
            >
              Imperial
            </button>
            <button
              type="button"
              className={`flex-1 px-4 py-2 border rounded-lg ${
                form.units === "Metric"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setForm({ ...form, units: "Metric" })}
            >
              Metric
            </button>
          </div>

          {/* Height Section */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Height
          </label>
          <div className="flex space-x-2 mb-4">
            <input
              type="number"
              name="feet"
              placeholder="feet"
              value={form.height.feet}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-lg p-2"
            />
            <input
              type="number"
              name="inches"
              placeholder="inches"
              value={form.height.inches}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Time Zone Section */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Time Zone
          </label>
          <select
            name="timeZone"
            value={form.timeZone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mb-4"
          >
            {timeZones.map((zone, index) => (
              <option key={index} value={zone}>
                {zone}
              </option>
            ))}
          </select>

          {/* reCAPTCHA */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="recaptcha"
              checked={form.recaptcha}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm">I'm not a robot</label>
          </div>

          {/* Buttons */}
          <div className="flex space-x-2 justify-center">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
              onClick={() => navigate("/signup")}
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

      {/* Background Image Section */}
      <div className="hidden md:flex md:w-[85%] h-full">
        <img
          src="/img/helth.jpg"
          alt="Health monitoring"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default PersonalUserDetails;
