import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const handleSelection = (type) => {
    setUserType(type);
    console.log(`Selected user type: ${type}`);
  };

  const handleSubmit = () => {
    if (userType === "Personal User") {
      navigate("/signup/personal");
    } else if (userType === "Health Professional") {
      navigate("/signup/health-professional");
    } else {
      alert("Please select a user type.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <header className="mb-8 text-center">
        <img
          src="/img/logo12.png"
          alt="Heads Up Logo"
          className="mx-auto mb-4 w-20 md:w-24"
        />
        <h2 className="text-xl md:text-2xl font-bold">
          Next Step: Sign up as ...
        </h2>
      </header>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 w-full max-w-4xl">
        {/* Personal User Card */}
        <div
          className={`flex flex-col items-center w-full md:w-96 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 transform ${
            userType === "Personal User"
              ? "border-2 border-blue-600"
              : "border border-transparent"
          } cursor-pointer hover:shadow-lg`}
          onClick={() => handleSelection("Personal User")}
        >
          <div className="mb-4">
            <img
              src="/img/user.png"
              alt="Personal User Icon"
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
          <h3 className="text-lg md:text-xl font-semibold">Personal User</h3>
          <p className="text-center text-gray-600 mb-2 text-sm md:text-base">
            Choose this option if you would like to register as an individual.
          </p>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 text-sm md:text-base"
            onClick={handleSubmit}
          >
            START NOW
          </button>
        </div>
        {/* Health Professional Card */}
        <div
          className={`flex flex-col items-center w-full md:w-96 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 transform ${
            userType === "Health Professional"
              ? "border-2 border-blue-600"
              : "border border-transparent"
          } cursor-pointer hover:shadow-lg`}
          onClick={() => handleSelection("Health Professional")}
        >
          <div className="mb-4">
            <img
              src="/img/doctor.png"
              alt="Health Professional Icon"
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
          <h3 className="text-lg md:text-xl font-semibold">
            Health Professional
          </h3>
          <p className="text-center text-gray-600 mb-2 text-sm md:text-base">
            Choose this option if you would like to manage multiple clients.
          </p>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 text-sm md:text-base"
            onClick={handleSubmit}
          >
            START NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
