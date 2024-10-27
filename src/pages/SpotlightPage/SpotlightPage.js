import React from "react";
import "./SpotlightPage.css"; // Add styling in a CSS file to match the look

const SpotlightPage = () => {
  return (
    <div className="spotlight-page">
      {/* Header Section */}
      <header className="spotlight-header">
        <h1>Health Surveillance</h1>
        <h2>Health Monitoring's Work</h2>
        <p>
          Our work involves providing solutions to public health, healthcare,
          and policy makers. This takes many different forms and addresses many
          topics. We combine the accurate, ongoing transmission of healthcare
          data to the world’s database with data analytics and actionable
          information presentation.
        </p>
      </header>

      {/* Health Surveillance Section */}
      <section className="health-surveillance">
        <h2>Health Surveillance</h2>
        <div className="surveillance-item">
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
          <h3>Opioid Surveillance</h3>
          <p>
            In 2019, a record level of opioid-related deaths was noted
            nationally. This surveillance includes monitoring trends in opioid
            overdoses, identifying affected areas, and providing data to public
            health officials to guide resource allocation.
          </p>
        </div>
        <div className="surveillance-item">
          <h3>Event Surveillance</h3>
          <p>
            In 2017, NAS in infants was commented about in media and public
            health circles. The surveillance focuses on early detection,
            ensuring timely response by health officials and enhancing public
            safety. It provides real-time information to aid in intervention
            efforts.
          </p>
        </div>
      </section>

      {/* NAS Surveillance Recommendation Section */}
      <section className="nas-surveillance">
        <h2>Recommendation: NAS Surveillance</h2>
        <div className="recommendation">
          <h3>Mandatory Public Health Reporting</h3>
          <p>
            Mandatory NAS reporting is essential for tracking health through
            early identification of affected infants.
          </p>
        </div>
        <div className="recommendation">
          <h3>Coordinated Assistance from Social Services</h3>
          <p>
            A collaborative approach with social services is important to assist
            affected families in ensuring positive health outcomes.
          </p>
        </div>
        <div className="recommendation">
          <h3>Clinical Trials for Added Insight</h3>
          <p>
            Clinical trials for NAS treatment can provide additional insights,
            helping in the management and treatment of affected infants.
          </p>
        </div>
      </section>

      {/* Population Health Section */}
      <section className="population-health">
        <h2>Population Health</h2>
        <div className="health-item">
          <h3>Influenza</h3>
          <p>
            Every year, flu affects millions. This surveillance helps track flu
            trends, enabling timely response from health officials.
          </p>
        </div>
        <div className="health-item">
          <h3>Chronic Disease</h3>
          <p>
            Chronic diseases are major health concerns, requiring regular
            monitoring and data analysis.
          </p>
        </div>
        <div className="health-item">
          <h3>Blood Lead Levels</h3>
          <p>
            Lead exposure remains a risk, especially for children. Monitoring
            ensures prompt response and minimizes risk.
          </p>
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
      <footer className="spotlight-footer">
        <div className="footer-section">
          <h4>About Health Monitoring</h4>
          <p>
            Our mission is to provide timely, reliable healthcare data. Health
            Monitoring offers a range of services tailored to public health
            needs.
          </p>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <p>Contact us for support at support@healthmonitoring.com.</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            Health Monitoring Systems, Pittsburgh, PA 15219. Phone: (123)
            456-7890.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SpotlightPage;
