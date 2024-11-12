import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email: form.email,
        password: form.password,
      });

      if (response.data.status === "success") {
        setMessage("Signed in successfully!");
        navigate("/userdashboard");
      } else {
        setMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setMessage("Error during login. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side: Form */}
      <div className="flex-1 flex flex-col justify-start items-center bg-white p-8 shadow-md overflow-auto scrollbar-hidden">
        <img
          src="/img/logo12.png"
          alt="Health-monitoring-logo"
          className="w-24 h-auto"
        />
        <h2 className="text-2xl font-bold mb-2 mt-4">Welcome Back</h2>
        <p className="mb-4">Sign in to continue.</p>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
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

          <div className="flex justify-between items-center mb-4">
            <Link to="/forgot-password" className="text-sm text-blue-600">
              Forgot password?
            </Link>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Sign In
            </button>
          </div>

          {message && (
            <p
              className={`text-center mb-4 ${
                message.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-center mb-4">- or sign in with -</p>

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
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Right Side: Fixed Image */}
      <div className="flex-1 hidden md:flex items-center justify-center bg-gray-100 h-full">
        <img
          src="/img/helth.jpg"
          alt="Sign In Background"
          className="max-w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signin;
