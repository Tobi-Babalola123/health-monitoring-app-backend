import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import ChartComponent from "../ChartComponent/ChartComponent";
import CardComponent from "../CardComponent/CardComponent";
import HeartCardComponent from "../HeartCardComponent/HeartCardComponent";
import ModalComponent from "../ModalComponent/ModalComponent";
import TestimonialsComponent from "../TestimonialsComponent/TestimonialsComponent";
import PricingComponent from "../PricingComponent/PricingComponent";
// import { getHealthData } from "../../services/healthDataService";
import axios from "axios";
import AICardComponent from "../AiCardComponent.js/AICardComponent";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";

// Add the fetchHealthData function
const fetchHealthData = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/health-data`
    );
    console.log("Health data:", response.data);
    return response.data; // Ensure data is returned
  } catch (error) {
    console.error("Error fetching health data:", error);
    return []; // Return empty array on error
  }
};

const Dashboard = ({ footerRef }) => {
  const items = [
    {
      icon: "/img/medical-team.png",
      title: "Care Teams",
      description:
        "Easily enable caregivers to view your treatment progress remotely.",
    },
    {
      icon: "/img/time.png",
      title: "Reminders",
      description:
        "Manage reminders for medication, symptoms & measurement checks.",
    },
    {
      icon: "/img/nutrition.png",
      title: "Care Plans",
      description:
        "Keep your treatment details in one place. See interactions & effects.",
    },
    {
      icon: "/img/calendar.png",
      title: "Appointments",
      description:
        "Save dates for yourself or a dependent or share with your team.",
    },
    {
      icon: "/img/insurance.png",
      title: "Check-Ins",
      description:
        "Record symptoms, measurements, medicine, nutrition, activity, therapies, and notes periodically.",
    },
    {
      icon: "/img/cloud.png",
      title: "Integrations",
      description:
        "Automatically sync your data from wearables, Apple Health, or Google.",
    },
    {
      icon: "/img/medics.png",
      title: "Reports",
      description:
        "AI-powered charts, logs, and correlations to make sense of your check-ins.",
    },
    {
      icon: "/img/goal-setting.png",
      title: "Goals",
      description:
        "Set health goals for yourself and view your progress over time.",
    },
  ];

  // const handleContactClick = () => {
  //   if (footerRef.current) {
  //     // Scroll to the footer
  //     footerRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const HealthFeaturesSection = () => {
    const features = [
      {
        icon: "/img/notes.png",
        title: "Track up to 84 nutrients and other compounds",
        description:
          "Log your meals and track all your macro and micronutrients.",
      },
      {
        icon: "/img/fried-rice.png",
        title: "Log meals, exercise and health metrics",
        description:
          "Plus, you can create custom foods, recipes, exercises and metrics.",
      },
      {
        icon: "/img/health-check.png",
        title: "Get valuable health reports and charts",
        description: "Learn how nutrients and metrics correlate over time.",
      },
      {
        icon: "/img/settings.png",
        title: "Custom diet settings",
        description:
          "Set weight, macro and nutrient targets to meet your goals.",
      },
      {
        icon: "/img/alarm.png",
        title: "Fasting timer",
        description:
          "Track your intermittent fasts and see their effect over time.",
      },
      {
        icon: "/img/diet.png",
        title: "Diet support",
        description:
          "Whether you’re Keto, Vegan, or on one recommended by your doctor.",
      },
    ];

    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Health Features
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Explore all the tools to track and manage your health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
              >
                {/* Replace the emoji display with an <img> tag */}
                <div className="mb-4">
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="w-16 h-16" // adjust size to fit the design
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [healthData, setHealthData] = useState([]);
  const [aiResponse, setAIResponse] = useState("");
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState(
    Array(6).fill(false) // Adjusted to match the number of features
  );

  useEffect(() => {
    const getHealthData = async () => {
      const data = await fetchHealthData();
      setHealthData(data);
    };
    getHealthData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newVisibleCards = [...prev];
              newVisibleCards[index] = true;
              return newVisibleCards;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAskAI = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/ask-ai",
        { query: inputValue },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAIResponse(response.data.response);
    } catch (error) {
      console.error(
        "Error fetching AI response:",
        error.response ? error.response.data : error.message
      );
      setAIResponse(
        "Sorry, I was unable to generate a response. Please try again later."
      );
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="dashboard">
      <Navbar />

      {/* Background Section with Image, Text, and Button */}
      {/* <div className="relative hero-section bg-cover bg-center h-[400px] flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div> */}

      <div className="relative hero-section bg-cover bg-center h-[400px] flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <div className="flex justify-center space-x-10">
            {" "}
            {/* Adjusted space between cards */}
            <div className="flex flex-col items-center">
              <div
                className="icon-circle mb-2 w-16 h-16 rounded-full shadow-lg shadow-gray-300/50"
                style={{ marginLeft: "-10px" }}
              >
                {" "}
                {/* Shifted left with negative margin */}
                <img
                  src="/img/heart-rate-monitor.png"
                  alt="Population Health"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                Personalized Health Tracking
              </h3>
              <p className="text-center text-gray-200 text-sm">
                Personalized insights to track your health
                <br /> journey and key wellness milestones.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="icon-circle mb-2 w-16 h-16 rounded-full shadow-lg shadow-gray-300/50"
                style={{ marginLeft: "-10px" }}
              >
                {" "}
                {/* Shifted left with negative margin */}
                <img
                  src="/img/tracking.png"
                  alt="Public Policy"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                Real-Time Monitoring
              </h3>
              <p className="text-center text-gray-200 text-sm">
                Stay on top of your health with real-time data, from
                <br /> heart rate to sleep quality, for a better well-being.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="icon-circle mb-2 w-16 h-16 rounded-full shadow-lg shadow-gray-300/50"
                style={{ marginLeft: "-10px" }}
              >
                {" "}
                {/* Shifted left with negative margin */}
                <img
                  src="/img/medical-history.png"
                  alt="Health Surveillance"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                Insightful Health Reports
              </h3>
              <p className="text-center text-gray-200 text-sm">
                Receive detailed health reports with insights into your habits,
                <br /> empowering you to make data-driven health decisions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="why-we-stand-out-section bg-white py-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">WHY WE STAND OUT</h2>
          <p className="mt-4 text-lg">
            Our health monitoring app leverages advanced technology to track and
            analyze
            <br /> your personal health data, providing insights into your
            well-being. As <br />
            healthcare complexities rise, our app empowers users to understand
            their health journey <br />
            better and make informed decisions for a healthier life
          </p>
        </div>
        {/* Rest of the "Why We Stand Out" section */}
        <div className="flex items-center justify-center py-4">
          <span className="line"></span> {/* Left line */}
          <img
            src="/img/earth22.png" // Replace with your world icon source
            alt="World Icon"
            className="w-6 h-6 mx-2" // Adjust size as needed
          />
          <span className="line"></span> {/* Right line */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mt-12">
          <div className="service-item mr-10">
            <div className="flex items-start">
              <div className="service-icon ml-16">
                {" "}
                {/* Added margin-left of 4rem */}
                <img
                  src="/img/assistance.png"
                  alt="Software as a Service"
                  className="w-12 h-12"
                />
              </div>
              <div className="ml-2">
                {" "}
                {/* Adjusted margin-left for text container */}
                <h3 className="text-xl font-bold">
                  HEALTH MONITORING AS A SERVICE
                </h3>
                <p className="text-sm">
                  Our health monitoring app provides continuous updates,
                  blending advanced technology, health insights, and precise
                  data analysis to empower you with the latest tools for
                  effective wellness tracking.
                </p>
              </div>
            </div>
          </div>

          <div className="service-item mr-10">
            <div className="flex items-start">
              <div className="service-icon ml-16">
                {" "}
                {/* Added margin-left of 4rem */}
                <img
                  src="/img/heet.png"
                  alt="Healthcare Facility Network"
                  className="w-12 h-12"
                />
              </div>
              <div className="ml-2">
                {" "}
                {/* Adjusted margin-left for text container */}
                <h3 className="text-xl font-bold">
                  EXPANSIVE HEALTHCARE NETWORK
                </h3>
                <p className="text-sm">
                  Our extensive healthcare data network offers comprehensive
                  insights, drawing from diverse sources to empower faster,
                  cost-effective analysis and actionable insights for your
                  health journey
                </p>
              </div>
            </div>
          </div>

          <div className="service-item mr-10">
            <div className="flex items-start">
              <div className="service-icon ml-16">
                {" "}
                {/* Added margin-left of 4rem */}
                <img
                  src="/img/medical.png"
                  alt="Big Data"
                  className="w-12 h-12"
                />
              </div>
              <div className="ml-2">
                {" "}
                {/* Adjusted margin-left for text container */}
                <h3 className="text-xl font-bold">
                  BIG DATA FOR BETTER HEALTH
                </h3>
                <p className="text-sm">
                  With robust data processing capabilities, our app collects and
                  analyzes extensive health data daily, equipping you with
                  powerful insights. Leverage our experience to make impactful
                  decisions that enhance your health journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content flex flex-col md:flex-row">
        <div className="left-section w-full md:w-1/2">
          <HeartCardComponent
            image={`${process.env.PUBLIC_URL}/img/heart3dd.png`}
          />
        </div>
        <div className="right-section ai-card w-full md:w-1/2">
          <AICardComponent
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onAskAI={handleAskAI}
            aiResponse={aiResponse}
          />
        </div>
      </div>

      {/* Render Health Features Section */}
      <HealthFeaturesSection />

      {showModal && (
        <ModalComponent onClose={closeModal}>
          <h2 className="text-2xl font-bold">Health Status for {inputValue}</h2>
          {healthData.length > 0 ? (
            <ul className="mt-4 list-disc pl-5">
              {healthData.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          ) : (
            <p>No health data available.</p>
          )}
        </ModalComponent>
      )}

      <TestimonialsComponent />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Functionality Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="mb-4">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-12 h-12 bg-gray-100 p-2 rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
