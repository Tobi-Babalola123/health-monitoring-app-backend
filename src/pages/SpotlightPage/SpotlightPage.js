import React from "react";
import "./SpotlightPage.css";
// import "../../components/CustomFooter/CustomFooter.css";
import HealthCarousel from "./HealthCarousel";
import Navbar from "../../components/Navbar/Navbar";
import "../../components/Navbar/Navbar.css";

const SpotlightPage = () => {
  return (
    <div className="spotlight-page">
      {/* Header Section */}
      <Navbar />
      {/* <header className="spotlight-header"> */}
      <HealthCarousel />
      {/* </header> */}
      <div className="text-center">
        <h2 className="section-header">HEALTH MONITORING'S WORK</h2>
        <p className="section-description">
          Our work involves providing solutions to public health, healthcare,
          and policy makers.
          <br /> This takes many different forms and addresses many topics. We
          combine the accurate,
          <br /> ongoing transmission of healthcare data with world-class data
          analysis and actionable <br /> information presentation.
        </p>
      </div>
      {/* Health Surveillance Section */}
      <section className="health-surveillance">
        <h2>HEALTH SURVEILLANCE</h2>
        <div className="grid">
          <div className="surveillance-item">
            <img src="/img/adult.jpg" alt="Emergency Department" />
            <h3>Syndromic Surveillance</h3>
            <p>
              Syndromic surveillance is used for the detection, tracking, and
              weekly reporting of a range of diseases and conditions. It offers
              early detection of disease outbreaks, seasonal patterns, and
              geographical variations. The service allows health officials to
              anticipate problems and manage resources effectively.
            </p>
          </div>
          <div className="surveillance-item">
            <img src="/img/global.jpg" alt="Opioid Surveillance" />
            <h3>Opioid Surveillance</h3>
            <p>
              In 2019, a record level of opioid-related deaths was noted
              nationally. This surveillance includes monitoring trends in opioid
              overdoses, identifying affected areas, and providing data to
              public health officials to guide resource allocation.
            </p>
          </div>
          <div className="surveillance-item">
            <img src="/img/patientcare.jpg" alt="Event Surveillance" />
            <h3>Event Surveillance</h3>
            <p>
              In 2017, NAS in infants was commented about in media and public
              health circles. The surveillance focuses on early detection,
              ensuring timely response by health officials and enhancing public
              safety. It provides real-time information to aid in intervention
              efforts.
            </p>
          </div>
        </div>
      </section>

      {/* NAS Surveillance Recommendation Section */}
      <section className="nas-surveillance">
        <div className="nas-content-container">
          {/* Left Column: NAS Surveillance Text */}
          <div className="nas-text-container">
            <h2>Recommendation: NAS Surveillance</h2>
            <p className="nas-text">
              The ongoing opioid crisis has produced a surge in neonatal
              abstinence syndrome (NAS). NAS often occurs when a child who was
              exposed to opioids in utero undergoes withdrawal upon delivery;
              afflicted newborns exhibit an array of symptoms, including low
              birth weight, seizures, and difficulties with breathing and
              feeding. From 2000 to 2012, the incidence of NAS quintupled. In
              some hospitals, NAS now accounts for 50% of NICU hospital days.
              Public health officials need up-to-date, comprehensive information
              to work toward limiting the extent, cost, and severity of NAS. But
              they often lack even basic metrics; in many states, NAS has not
              yet been designated a reportable condition. Health Monitoring
              recommends implementing data-gathering systems in maternity wards
              to provide relevant, consistent real-time data about the
              occurrence of substance use disorder among new mothers and NAS
              among newborns.
            </p>
          </div>

          {/* Vertical Line */}
          <div className="vertical-line"></div>

          {/* Right Column: Recommendations with Icons */}
          <div className="recommendation-container">
            <div className="recommendation">
              <div className="icon">📍</div>
              <div>
                <h3>Mandatory Public Health Reporting</h3>
                <p>
                  Instances of NAS should be reported through public health
                  channels, allowing for improved tracking and outcomes for
                  affected infants.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">🤝</div>
              <div>
                <h3>Coordinated Assistance from Social Services</h3>
                <p>
                  Collaborative support for families impacted by NAS is critical
                  for ensuring access to resources and positive health outcomes.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">🔬</div>
              <div>
                <h3>Clinical Trials for Added Insight</h3>
                <p>
                  Additional clinical trials provide insight into effective NAS
                  treatments and management strategies for newborns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Population Health Section */}
      <section className="population-health">
        <h2>HEALTH SURVEILLANCE</h2>
        <div className="health-grid">
          <div className="health-item">
            <img src="/img/global.jpg" alt="Syndromic Surveillance" />
            <h3>Syndromic Surveillance</h3>
            <p>
              Syndromic surveillance collects real-time data from electronic
              health records to detect outbreaks and public health events
              quickly.
            </p>
          </div>
          <div className="health-item">
            <img src="/img/engineer.jpg" alt="Opioid Surveillance" />
            <h3>Opioid Surveillance</h3>
            <p>
              Health Monitoring tracks opioid use in real-time to address the
              ongoing crisis and improve public health outcomes.
            </p>
          </div>
          <div className="health-item">
            <img src="/img/medic.jpg" alt="Event Surveillance" />
            <h3>Event Surveillance</h3>
            <p>
              Event surveillance ensures public safety during large-scale events
              by monitoring for potential disease outbreaks.
            </p>
          </div>
        </div>
      </section>

      {/* Antimicrobial Benchmarking Recommendation Section */}
      <section className="antimicrobial-benchmarking">
        <h2>Recommendation: Antimicrobial Benchmarking</h2>
        <div className="comparison">
          <h3>Per-Facility Comparisons</h3>
          <p>
            Comparisons between facilities help identify best practices and
            areas for improvement.
          </p>
        </div>
        <div className="comparison">
          <h3>Per-Diagnosis Comparisons</h3>
          <p>
            Benchmarking treatments for specific diagnoses aids in standardizing
            care.
          </p>
        </div>
        <div className="comparison">
          <h3>Dosage-Based Comparisons</h3>
          <p>
            Dosage comparisons help optimize treatments and ensure appropriate
            care.
          </p>
        </div>
        <div className="comparison">
          <h3>Health System-Wide Comparisons</h3>
          <p>
            System-wide comparisons drive effective change by identifying best
            practices across the board.
          </p>
        </div>
      </section>

      {/* Public Policy Section */}
      <section className="public-policy">
        <h2>Public Policy</h2>
        <div className="policy-item">
          <h3>Data Driven Decision Making</h3>
          <p>
            Data supports policy-making by offering insights into healthcare
            trends and outcomes.
          </p>
        </div>
        <div className="policy-item">
          <h3>Healthcare Utilization</h3>
          <p>
            Understanding healthcare utilization is essential to improve access
            and reduce costs.
          </p>
        </div>
        <div className="policy-item">
          <h3>Readmissions</h3>
          <p>
            Reducing readmissions is a priority, and data analysis helps in
            achieving this goal.
          </p>
        </div>
      </section>

      {/* Opioid Rehabilitation Efficacy Recommendation Section */}
      <section className="opioid-rehabilitation">
        <h2>Recommendation: Opioid Rehabilitation Efficacy</h2>
        <div className="recommendation">
          <h3>Relapse is a Real Concern</h3>
          <p>
            Monitoring relapse rates provides critical insights to improve
            rehabilitation programs.
          </p>
        </div>
        <div className="recommendation">
          <h3>Information on Programs and Outcomes</h3>
          <p>
            Data on program outcomes helps refine rehabilitation strategies.
          </p>
        </div>
        <div className="recommendation">
          <h3>More Effective Decisions</h3>
          <p>
            Data-driven decisions ensure better planning and success in opioid
            rehabilitation.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      {/* <CustomFooter /> */}
    </div>
  );
};

export default SpotlightPage;
