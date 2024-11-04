import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalUserDetails.css";

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
    navigate("/userdashboard"); // Redirect to dashboard after successful signup
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
    // ...add more time zones here
  ];

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img src="/img/logo.png" alt="Heads Up Logo" className="logo" />
        <h2>Let's personalize your experience.</h2>
        <form onSubmit={handleSubmit}>
          {/* Date of Birth Section */}
          <label>Date of Birth</label>
          <div className="dob-selectors">
            <select
              name="month"
              value={form.dateOfBirth.month}
              onChange={handleChange}
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
            >
              {renderDays()}
            </select>
            <select
              name="year"
              value={form.dateOfBirth.year}
              onChange={handleChange}
            >
              {renderYears()}
            </select>
          </div>

          {/* Sex at Birth Section */}
          <label>Sex at Birth</label>
          <div className="sex-selectors">
            <button
              type="button"
              className={form.sex === "Male" ? "selected" : ""}
              onClick={() => setForm({ ...form, sex: "Male" })}
            >
              Male
            </button>
            <button
              type="button"
              className={form.sex === "Female" ? "selected" : ""}
              onClick={() => setForm({ ...form, sex: "Female" })}
            >
              Female
            </button>
          </div>

          {/* Display Units Section */}
          <label>Display Units</label>
          <div className="unit-selectors">
            <button
              type="button"
              className={form.units === "Imperial" ? "selected" : ""}
              onClick={() => setForm({ ...form, units: "Imperial" })}
            >
              Imperial
            </button>
            <button
              type="button"
              className={form.units === "Metric" ? "selected" : ""}
              onClick={() => setForm({ ...form, units: "Metric" })}
            >
              Metric
            </button>
          </div>

          {/* Height Section */}
          <label>Height</label>
          <div className="height-inputs">
            <input
              type="number"
              name="feet"
              placeholder="feet"
              value={form.height.feet}
              onChange={handleChange}
            />
            <input
              type="number"
              name="inches"
              placeholder="inches"
              value={form.height.inches}
              onChange={handleChange}
            />
          </div>

          {/* Time Zone Section */}
          <label>Time Zone</label>
          <select
            name="timeZone"
            value={form.timeZone}
            onChange={handleChange}
            className="timezone-select"
          >
            {timeZones.map((zone, index) => (
              <option key={index} value={zone}>
                {zone}
              </option>
            ))}
          </select>

          {/* reCAPTCHA */}
          <div className="recaptcha-checkbox">
            <input
              type="checkbox"
              name="recaptcha"
              checked={form.recaptcha}
              onChange={handleChange}
            />
            <label>I'm not a robot</label>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button
              type="button"
              className="back-button"
              onClick={() => navigate("/signup")}
            >
              Back
            </button>
            <button type="submit" className="create-account-button">
              Sign Up
            </button>
          </div>
        </form>
      </div>

      {/* Background Image Section */}
      <div className="signup-background">
        <img src="/img/helth.jpg" alt="Health monitoring" />
      </div>
    </div>
  );
};

export default PersonalUserDetails;
