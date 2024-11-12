import React from "react";
import "./CompanyPage.css";
import CompanyCarousel from "./CompanyCarousel";
import Navbar from "../components/Navbar/Navbar";
import "../components/Navbar/Navbar.css";

const CompanyPage = () => {
  return (
    <div className="spotlight-page">
      {/* Header Section */}
      <Navbar />
      {/* <header className="spotlight-header"> */}
      <CompanyCarousel />
      {/* </header> */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 py-12 px-4">
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left space-y-4">
          <img
            src="/img/vitals.png"
            alt="Icon"
            className="w-50 h-48 mb-4" // Adjust size of the image as needed
          />
          <h2 className="text-teal-600 text-2xl font-semibold">
            Real-Time Health Insights
          </h2>
          <p className="text-gray-500">
            Empowering individuals to stay informed and proactive.
          </p>
          <p className="text-gray-700">
            Our health monitoring app leverages cutting-edge technology to
            provide instant health insights. Track vital signs, monitor daily
            wellness, and receive personalized alerts to help you stay on top of
            your health, anywhere, anytime.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-teal-600 text-2xl font-semibold">
            Trusted Health Solutions
          </h2>
          <p className="text-gray-500">
            Designed to support both individuals and healthcare teams.
          </p>

          <div className="space-y-3">
            {/* Easy Tracking */}
            <div>
              <div className="text-gray-700 font-semibold">
                Continuous Vital Sign Tracking
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-teal-600 h-2 rounded"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>

            {/* Customizable Alerts */}
            <div>
              <div className="text-gray-700 font-semibold">
                Customizable Health Alerts
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-teal-600 h-2 rounded"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <div className="text-gray-700 font-semibold">
                Secure Data Handling
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-teal-600 h-2 rounded"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            {/* User-Friendly Design */}
            <div>
              <div className="text-gray-700 font-semibold">
                User-Friendly Interface
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-teal-600 h-2 rounded"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            {/* Community Feedback */}
            <div>
              <div className="text-gray-700 font-semibold">
                Positive Community Feedback
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-teal-600 h-2 rounded"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-4">
          Our Development Team
        </h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Our dedicated team of developers is focused on creating a seamless
          health monitoring app experience through top-notch frontend design,
          robust backend integration, and efficient data processing.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Frontend Developer */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <div className="bg-[#508c9b] rounded-full h-24 w-24 flex items-center justify-center mb-4">
              {/* Frontend Developer Icon */}
              <img
                src="/img/ux.png"
                alt="Frontend Developer Icon"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-teal-600">
              Frontend Developer
            </h3>
            <p className="text-gray-700 text-center mt-2">
              Specializes in creating intuitive, user-friendly interfaces for
              seamless user experiences.
            </p>
          </div>

          {/* Full Stack Developer */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <div className="bg-[#508c9b] rounded-full h-24 w-24 flex items-center justify-center mb-4">
              {/* Full Stack Developer Icon */}
              <img
                src="/img/backend.png"
                alt="Full Stack Developer Icon"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-teal-600">
              Full-Stack Developer
            </h3>
            <p className="text-gray-700 text-center mt-2">
              Ensures smooth data flow and manages both front and back-end
              development.
            </p>
          </div>

          {/* Python Developer */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <div className="bg-[#508c9b] rounded-full h-24 w-24 flex items-center justify-center mb-4">
              {/* Python Developer Icon */}
              <img
                src="/img/python.png"
                alt="Python Developer Icon"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-teal-600">
              Python Developer
            </h3>
            <p className="text-gray-700 text-center mt-2">
              Handles data processing and brings the logic to life with Python.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center p-6 bg-white text-gray-700">
        <h2 className="text-teal-600 text-2xl font-bold mb-2">CONTACT US</h2>
        <p className="text-center text-gray-600 max-w-2xl mb-6">
          Health Monitoring is always interested in discussing possible
          partnerships with healthcare and public health organizations.
        </p>

        <form className="w-4/5 max-w-4xl space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-700 mb-1"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700 mb-1"
            >
              E-Mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-gray-700 mb-1"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-teal-500 h-32 resize-none"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/3 bg-[#007b9c] text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
            >
              Send
            </button>
          </div>
        </form>
      </section>

      {/* Footer Section */}
      {/* <CustomFooter /> */}
    </div>
  );
};

export default CompanyPage;
