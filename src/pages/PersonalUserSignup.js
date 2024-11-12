import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PersonalUserSignup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    termsAccepted: false,
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.termsAccepted) {
      setMessage("Please accept the terms and conditions.");
      return;
    }

    if (form.password !== form.passwordConfirmation) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup/", {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        password: form.password,
        passwordConfirmation: form.passwordConfirmation, // Include passwordConfirmation here
      });

      if (response.data.status === "success") {
        setMessage("Account created successfully!");
        navigate("/personaluserdetails"); // Navigate to the next page after signup
      } else {
        setMessage("Signup failed. Please try again.");
      }
    } catch (error) {
      setMessage("Error during signup. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side: Form */}
      <div className="flex-1 flex flex-col justify-start items-center bg-white p-8 shadow-md overflow-auto scrollbar-hidden">
        <img
          src="/img/logo12.png"
          alt="Heads Up Logo"
          className="w-24 h-auto"
        />
        <h2 className="text-2xl font-bold mb-2 mt-4">Get started for free</h2>
        <p className="mb-4">1 month free trial, no commitments.</p>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <label className="block text-sm font-medium mb-1">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            className="block w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <label className="block text-sm font-medium mb-1">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            className="block w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="block w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <label className="block text-sm font-medium mb-1">Password *</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="block w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <label className="block text-sm font-medium mb-1">
            Password Confirmation *
          </label>
          <input
            type="password"
            name="passwordConfirmation"
            value={form.passwordConfirmation}
            onChange={handleChange}
            required
            className="block w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={form.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm">
              I agree to the{" "}
              <a href="/terms" className="text-blue-600">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-blue-600">
                Privacy Policy
              </a>
            </label>
          </div>

          <div className="flex justify-center space-x-4 mb-4">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
              onClick={() => navigate("/signup")}
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Create Account
            </button>
          </div>

          {message && (
            <p className="text-center text-red-600 mb-4">{message}</p>
          )}

          <p className="text-center mb-4">- or sign up with -</p>

          <button
            type="button"
            className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded mb-4 mx-auto"
          >
            <img
              src="/img/google.png"
              alt="Google icon"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>

          <div className="text-center">
            <p>
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-600">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Right Side: Fixed Image */}
      <div className="flex-1 hidden md:flex items-center justify-center bg-gray-100 h-full">
        <img
          src="/img/helth.jpg"
          alt="Health monitoring"
          className="max-w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PersonalUserSignup;
