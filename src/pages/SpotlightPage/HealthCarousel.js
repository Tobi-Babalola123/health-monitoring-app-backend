import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HealthCarousel.css";

const HealthCarousel = () => {
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
          <img src="/img/womi.jpg" alt="" />
          <p className="carousel-caption">PERSONALIZED HEALTH TRACKING</p>
        </div>
        <div className="carousel-slide">
          <img src="/img/real2.jpg" alt="" />
          <p className="carousel-caption">REAL-TIME MONITORING</p>
        </div>
        <div className="carousel-slide">
          <img src="/img/wom3.jpg" alt="" />
          <p className="carousel-caption">INSIGHTFUL HEALTH REPORTS</p>
        </div>
      </Carousel>
    </div>
  );
};

export default HealthCarousel;
