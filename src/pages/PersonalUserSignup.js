import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PersonalUserSignup.css";

const PersonalUserSignup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    termsAccepted: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
    if (form.password !== form.passwordConfirmation) {
      alert("Passwords do not match.");
      return;
    }
    // If validation passes, navigate to PersonalUserDetails page
    alert("Account created successfully!");
    navigate("/personaluserdetails");
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img src="/img/logo.png" alt="Heads Up Logo" className="logo" />
        <h2>Get started for free</h2>
        <p>1 month free trial, no commitments.</p>
        <form onSubmit={handleSubmit}>
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Password *</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <label>Password Confirmation *</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={form.passwordConfirmation}
            onChange={handleChange}
            required
          />
          <div className="terms-checkbox">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={form.termsAccepted}
              onChange={handleChange}
            />
            <label>
              I agree to the <a href="/terms">Terms of Service</a> and{" "}
              <a href="/privacy">Privacy Policy</a>
            </label>
          </div>

          <div className="button-group">
            <button
              type="button"
              className="back-button"
              onClick={() => navigate("/signup")}
            >
              Back
            </button>
            <button type="submit" className="create-account-button">
              Create Account
            </button>
          </div>

          <p className="signup-with">- or sign up with -</p>
          <button type="button" className="google-button">
            <img
              src="/img/google.png"
              alt="Google icon"
              className="google-icon"
            />
            Google
          </button>

          <div className="login-link">
            <p>
              Already have an account? <Link to="/signin">Login</Link>
            </p>
          </div>
        </form>
      </div>
      <div className="signup-background">
        <img src="/img/helth.jpg" alt="Health monitoring" />
      </div>
    </div>
  );
};

export default PersonalUserSignup;
