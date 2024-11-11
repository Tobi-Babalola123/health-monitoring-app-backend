import React from "react";
import "./CustomFooter.css";

const CustomFooter = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="custom-footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Health Monitoring</h3>
          <p className="health-details">
            <span>Our mission:</span> Provide services that focus healthcare
            resources on existing and emergent threats to community health.
          </p>
          <p className="health-details">
            <span>Our Clients:</span> We serve individuals, healthcare
            providers, and organizations, empowering them with data-driven
            insights to track and improve health outcomes. Currently, we cover
            multiple regions, impacting millions of lives with personalized
            health monitoring solutions.
          </p>
          <p className="health-details">
            <span>What We Do:</span> We track real-time health data to monitor
            key health indicators. Our platform collects information from
            numerous healthcare facilities, providing valuable insights for
            better health management.
          </p>
        </div>

        {/* Support Section */}
        <div className="footer-section support">
          <h3>Support</h3>
          <p className="health-details">
            Support email:{" "}
            <a href="mailto:support@health-monitorings.com">
              support@health-monitorings.com
            </a>
          </p>
          <p className="health-details">Emergency support: 1 (814) 230-5071</p>
          <p className="health-details">
            Additional guidance: <a href="#">User Manual</a>
          </p>
          <h3>Site Maps</h3>
          <ul className="site-map-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="footer-section address">
          <h3>Address</h3>
          <p className="health-details">123 Wellness St., Suite 130</p>
          <p className="company-address health-details">City, State, ZIP</p>
          <h3>Health Insights & Updates</h3>
          <ul className="news-links">
            <li>
              <a href="#">Health News</a>
            </li>
            <li>
              <a href="#">Health Data Reports</a>
            </li>
            <li>
              <a href="#">Wellness Tips</a>
            </li>
            <li>
              <a href="#">Latest Updates</a>
            </li>
            <li>
              <a href="#">Job Opportunities</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Research Publications</a>
            </li>
            <li>
              <a href="#">Health Trends</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p className="health-details">Corporate office: 1 (400) 201-2000</p>
          <p className="health-details">General calls: 1 (800) 000-0000</p>
          <p className="health-details">Emergency support: 1 (811) 111-0000</p>
          <p className="health-details">
            Inquiries:{" "}
            <a href="mailto:inquiries@health-monitorings.com">
              inquiries@health-monitorings.com
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
});

export default CustomFooter;
