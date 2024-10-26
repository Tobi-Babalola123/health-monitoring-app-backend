import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import ChartComponent from "../ChartComponent/ChartComponent";
import CardComponent from "../CardComponent/CardComponent";
import HeartCardComponent from "../HeartCardComponent/HeartCardComponent";
import ModalComponent from "../ModalComponent/ModalComponent";
import TestimonialsComponent from "../TestimonialsComponent/TestimonialsComponent";
import PricingComponent from "../PricingComponent/PricingComponent";
import { getHealthData } from "../../services/healthDataService";
import axios from "axios";
import AICardComponent from "../AiCardComponent.js/AICardComponent";
import "./Dashboard.css";

// Add the fetchHealthData function
const fetchHealthData = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/health-data`
    );
    // Process the response data here
    console.log("Health data:", response.data);
  } catch (error) {
    console.error("Error fetching health data:", error);
  }
};

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [healthData, setHealthData] = useState([]);
  const [aiResponse, setAIResponse] = useState("");

  useEffect(() => {
    const getHealthData = async () => {
      const data = await fetchHealthData();
      setHealthData(data); // Store the fetched data in state
    };
    getHealthData(); // Call the function
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAIResponse = (response) => {
    setAIResponse(response);
  };

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
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <img
          src="/img/logo12.png"
          alt="Health Monitoring Logo"
          style={{ height: "50px" }}
        />
        <ul className="navlinks">
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Home
            </a>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Spotlight
            </a>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Company
            </a>
          </li>
          <li className="account-icon">
            <a href="#" className="nav-icon">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li>
            <button className="btn-doctor">Talk to a Doctor</button>
          </li>
        </ul>
      </nav>

      {/* Background Section with Image, Text, and Button */}
      <div className="hero-section">
        <div className="overlay">
          <div className="row icons-section text-center">
            <div className="col-md-4">
              <div className="icon-circle">
                <img src="/img/trials.png" alt="Population Health" />
              </div>
              <h3>Population Health</h3>
              <p>
                Insight about regional and demographic
                <br /> variations in health conditions
              </p>
            </div>
            <div className="col-md-4">
              <div className="icon-circle">
                <img src="/img/auction.png" alt="Public Policy" />
              </div>
              <h3>Public Policy</h3>
              <p>
                Better data and sharper analysis for
                <br /> intelligent planning and decision making
              </p>
            </div>
            <div className="col-md-4">
              <div className="icon-circle">
                <img src="/img/cctv.png" alt="Health Surveillance" />
              </div>
              <h3>Health Surveillance</h3>
              <p>
                Real-time monitoring of changes in health conditions
                <br /> within the state, country, or zip code
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why We Stand Out Section */}
      <div
        className="why-we-stand-out-section"
        style={{ backgroundColor: "white" }}
      >
        <div className="text-center">
          <h2 className="section-header">WHY WE STAND OUT</h2>
          <p className="section-description">
            Health Monitoring provides software services that collect and
            analyze healthcare data to <br /> illuminate complex, large-scale
            health issues. The growing cost and complexity of <br /> healthcare
            demand greater insight into regional and national health issues.
          </p>
        </div>

        <div className="row services-row">
          <div className="col-md-4 service-item">
            <div className="service-icon-text">
              <div className="service-icon">
                <img
                  src="/img/cloud-computing.png"
                  alt="Software as a Service"
                />
              </div>
              <div className="service-text">
                <h3 className="service-header">SOFTWARE AS A SERVICE</h3>
                <p className="service-description">
                  Delivering our software as a service means ongoing
                  improvements and fast implementation. Every updated version
                  features our combination of healthcare knowledge, statistical
                  precision, and state-of-the-art technology.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 service-item">
            <div className="service-icon-text">
              <div className="service-icon">
                <img
                  src="/img/heartbeat.png"
                  alt="Healthcare Facility Network"
                />
              </div>
              <div className="service-text">
                <h3 className="service-header">HEALTHCARE FACILITY NETWORK</h3>
                <p className="service-description">
                  We have one of the largest healthcare data networks in the
                  U.S. That matters because collecting data from so many sources
                  makes it faster and cheaper for you to analyze, investigate,
                  and take action.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 service-item">
            <div className="service-icon-text">
              <div className="service-icon">
                <img src="/img/monitor.png" alt="Big Data" />
              </div>
              <div className="service-text">
                <h3 className="service-header">BIG DATA</h3>
                <p className="service-description">
                  In operation since 2008, the EpiCenter system now collects and
                  processes more than 2 GB of data each day. Health Monitoring
                  has the experience and expertise to help you do big things
                  with your big data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="left-section">
          <HeartCardComponent
            image={`${process.env.PUBLIC_URL}/img/heart3dd.png`}
          />
        </div>

        <div className="right-section ai-card">
          <AICardComponent
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onAskAI={handleAskAI}
            aiResponse={aiResponse}
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-section specific-section">
        <CardComponent
          className="flippable-card"
          image={`${process.env.PUBLIC_URL}/img/team.jpg`}
          heading="ABOUT US"
          text="Learn more about our mission to improve health and well-being worldwide."
          buttonText="Read More"
          backText="At our core, we strive to enhance health outcomes globally. Our dedicated team works tirelessly to innovate and provide the best health monitoring solutions tailored for everyone."
        />

        <CardComponent
          className="flippable-card"
          image={`${process.env.PUBLIC_URL}/img/healthcaretech.jpg`}
          heading="HEALTH"
          text="Stay informed on the latest in healthcare technology and innovations."
          buttonText="Explore Health"
          backText="Embrace the future of healthcare with cutting-edge technology. Stay updated with trends and innovations that are revolutionizing patient care and health management."
        />

        <CardComponent
          className="flippable-card"
          image={`${process.env.PUBLIC_URL}/img/youngman.jpg`}
          heading="LATEST NEWS"
          text="Get updates on the latest news in health monitoring."
          buttonText="Read News"
          backText="Stay informed about the latest trends and breakthroughs in health monitoring and technology. Our news section is updated regularly to keep you in the loop."
        />

        <CardComponent
          className="flippable-card"
          image={`${process.env.PUBLIC_URL}/img/patientcare.jpg`} // Placeholder for services-related image
          heading="OUR SERVICES"
          text="Discover our range of health monitoring services designed to keep you safe."
          buttonText="Learn More"
          backText="We offer a variety of health monitoring services to cater to your needs. From regular check-ups to advanced diagnostics, our services ensure you stay healthy and informed."
        />

        <CardComponent
          className="flippable-card"
          image={`${process.env.PUBLIC_URL}/img/customer support.jpg`} // Placeholder for support-related image
          heading="SUPPORT"
          text="Need help? Reach out to our customer support team anytime."
          buttonText="Contact Us"
          backText="Our dedicated support team is here to assist you 24/7. Whether you have questions about our services or need technical assistance, we’re just a message away!"
        />
      </div>

      {/* Button for AI Functionality */}
      {/* <div className="small-cards">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter User ID or Name"
            value={inputValue}
            onChange={handleInputChange}
            className="health-input"
          />
          <button className="health-btn" onClick={handleButtonClick}>
            Check Health Status
          </button>
          <button className="ai-btn" onClick={handleAIFunctionality}>
            Show AI Functionality
          </button>
        </div>
      </div> */}

      {/* Modal Component for Health Status */}
      {showModal && (
        <ModalComponent onClose={closeModal}>
          <h2>Health Status for {inputValue}</h2>
          {healthData.length > 0 ? (
            <ul>
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
