import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CompanyCarousel.css";

const CompanyCarousel = () => {
  return (
    <div className="spotlight-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showArrows={true}
      >
        <div className="carousel-slide">
          <img src="/img/innovation.jpg" alt="Innovation" />
          <div className="carousel-caption">
            <p className="carousel-caption-title">DEDICATION TO INNOVATION</p>
            <p className="carousel-subtext">
              Pioneering new solutions in healthcare technology.
            </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="/img/open-communication.jpg" alt="Open Communication" />
          <div className="carousel-caption">
            <p className="carousel-caption-title">COMMITMENT TO OPENNESS</p>
            <p className="carousel-subtext">
              Fostering transparency and open communication.
            </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="/img/public-safety.jpg" alt="Public Safety" />
          <div className="carousel-caption">
            <p className="carousel-caption-title">
              DEDICATION TO PUBLIC SAFETY
            </p>
            <p className="carousel-subtext">
              Ensuring the highest standards of public health and safety.
            </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="/img/quality-assurance.jpg" alt="Quality Assurance" />
          <div className="carousel-caption">
            <p className="carousel-caption-title">EMPHASIS ON QUALITY</p>
            <p className="carousel-subtext">
              Delivering premium quality in every service.
            </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="/img/customer-service.jpg" alt="Customer Service" />
          <div className="carousel-caption">
            <p className="carousel-caption-title">OUTSTANDING SERVICE</p>
            <p className="carousel-subtext">
              Exceptional support and care for all clients.
            </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="/img/mission-statement.jpg" alt="Mission Statement" />
          <div className="carousel-caption">
            <p className="carousel-caption-title">OUR MISSION</p>
            <p className="carousel-subtext">
              Guided by values and dedicated to our goals.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CompanyCarousel;
