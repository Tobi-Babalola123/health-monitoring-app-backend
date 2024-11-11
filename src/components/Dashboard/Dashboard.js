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
  const handleContactClick = () => {
    if (footerRef.current) {
      // Scroll to the footer
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }; // <-- Add this closing brace

  const cards = [
    {
      image: "/img/team.jpg",
      heading: "ABOUT US",
      text: "Learn more about our mission to improve health and well-being worldwide.",
      buttonText: "Read More",
      backText:
        "At our core, we strive to enhance health outcomes globally. Our dedicated team works tirelessly to innovate and provide the best health monitoring solutions tailored for everyone.",
    },
    {
      image: "/img/healthcaretech.jpg",
      heading: "HEALTH",
      text: "Stay informed on the latest in healthcare technology and innovations.",
      buttonText: "Explore Health",
      backText:
        "Embrace the future of healthcare with cutting-edge technology. Stay updated with trends and innovations that are revolutionizing patient care and health management.",
    },
    {
      image: "/img/youngman.jpg",
      heading: "LATEST NEWS",
      text: "Get updates on the latest news in health monitoring.",
      buttonText: "Read News",
      backText:
        "Stay informed about the latest trends and breakthroughs in health monitoring and technology. Our news section is updated regularly to keep you in the loop.",
    },
    {
      image: "/img/patientcare.jpg",
      heading: "OUR SERVICES",
      text: "Discover our range of health monitoring services designed to keep you safe.",
      buttonText: "Learn More",
      backText:
        "We offer a variety of health monitoring services to cater to your needs. From regular check-ups to advanced diagnostics, our services ensure you stay healthy and informed.",
    },
    {
      image: "/img/customer support.jpg",
      heading: "SUPPORT",
      text: "Need help? Reach out to our customer support team anytime.",
      buttonText: "Contact Us",
      backText:
        "Our dedicated support team is here to assist you 24/7. Whether you have questions about our services or need technical assistance, we’re just a message away!",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // const [isScrolled, setIsScrolled] = useState(false);
  const [healthData, setHealthData] = useState([]);
  const [aiResponse, setAIResponse] = useState("");
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState(
    Array(cards.length).fill(false)
  );

  useEffect(() => {
    const getHealthData = async () => {
      const data = await fetchHealthData();
      setHealthData(data); // Store the fetched data in state
    };
    getHealthData(); // Call the function
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newVisibleCards = [...prev];
              newVisibleCards[index] = true; // Set to true when in view
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
  }, [cards.length]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // const handleAIResponse = (response) => {
  //   setAIResponse(response);
  // };

  const handleAskAI = async () => {
    try {
      // Send only the user's input to the backend
      const response = await axios.post(
        "http://localhost:5001/api/ask-ai",
        { query: inputValue }, // Pass the inputValue as 'query'
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Set the AI response from the backend response data
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
      {/* Floating Navbar */}
      <Navbar />

      {/* Background Section with Image, Text, and Button */}
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

      {/* Why We Stand Out Section */}
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

      {/* Cards Section */}
      <div className="cards-section specific-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {cards.map((card, index) => (
          <CardComponent
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            heading={card.heading}
            icon={card.icon}
            text={card.text}
            buttonText={card.buttonText}
            image={`${process.env.PUBLIC_URL}${card.image}`}
            backText={card.backText}
            visible={visibleCards[index]} // Pass visibility state
            onButtonClick={
              card.heading === "SUPPORT" ? handleContactClick : null
            } // Trigger the scroll to footer
          />
        ))}
      </div>

      {/* Modal Component for Health Status */}
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

      {/* Testimonials and Pricing Sections */}
      <TestimonialsComponent />
      <PricingComponent />
    </div>
  );
};

export default Dashboard;
