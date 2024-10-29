import React from "react";
import "./CustomFooter.css";

const CustomFooter = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Health Monitoring</h3>
          <p className="health-details">
            Our mission: Provide services that focus healthcare resources on
            existing and emergent threats to community health.
          </p>
          <p className="health-details">
            Our customers: State and local public health departments and health
            systems. We currently serve Connecticut, New Jersey, Pennsylvania,
            Ohio, Wyoming, and several counties in California, covering a total
            of more than 40 million people.
          </p>
          <p className="health-details">
            What we do: Monitor real-time health-related data for community
            health indicators. We collect data from nearly 600 hospitals and
            3,600 ambulatory systems.
          </p>
        </div>

        {/* Support Section */}
        <div className="footer-section support">
          <h3>Support</h3>
          <p className="health-details">
            Support email:{" "}
            <a href="mailto:support@health-monitoring.com">
              support@health-monitoring.com
            </a>
          </p>
          <p className="health-details">Emergency support: 1 (844) 231-5776</p>
          <p className="health-details">
            Additional guidance: <a href="#">EpiCenter User Manual</a>
          </p>
          <h3>Site Maps</h3>
          <ul className="site-map-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Spotlight</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">EpiCenter</a>
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="footer-section address">
          <h3>Address</h3>
          <p className="health-details">700 River Ave., Suite 130</p>
          <p className="company-address health-details">Pittsburgh, PA 15212</p>
          <h3>News Categories</h3>
          <ul className="news-links">
            <li>
              <a href="#">News Categories</a>
            </li>
            <li>
              <a href="#">Bulletins</a>
            </li>
            <li>
              <a href="#">Health-Related Data Analysis</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Other</a>
            </li>
            <li>
              <a href="#">Publications</a>
            </li>
            <li>
              <a href="#">Syndromic Surveillance</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p className="health-details">Corporate office: 1 (412) 231-2020</p>
          <p className="health-details">General calls: 1 (844) 231-5774</p>
          <p className="health-details">Emergency support: 1 (844) 231-5776</p>
          <p className="health-details">
            Inquiries:{" "}
            <a href="mailto:inquiries@health-monitoring.com">
              inquiries@health-monitoring.com
            </a>
          </p>

          {/* Newsletter Section directly below Contact */}
          <div className="footer-section newsletter">
            <h3>Subscribe to our Newsletter</h3>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2006-2020 Health Monitoring Systems. All rights reserved.</p>
        <div className="social-media-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
