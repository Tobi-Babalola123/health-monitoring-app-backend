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
          <img src="/img/engineer.jpg" alt="Health Image 1" />
          <p className="carousel-caption">HEALTH SURVEILLANCE</p>
        </div>
        <div className="carousel-slide">
          <img src="/img/global.jpg" alt="Health Image 2" />
          <p className="carousel-caption">PUBLIC POLICY</p>
        </div>
        <div className="carousel-slide">
          <img src="/img/medic.jpg" alt="Health Image 3" />
          <p className="carousel-caption">POPULATION HEALTH</p>
        </div>
      </Carousel>
    </div>
  );
};

export default HealthCarousel;
