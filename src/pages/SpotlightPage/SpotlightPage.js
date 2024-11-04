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
            <h2>RECOMMENDATION: NAS SURVEILLANCE</h2>
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
                <h3>MANDATORY PUBLIC HEALTH REPORTING</h3>
                <p>
                  Instances of NAS can and should be reported to public health
                  through existing state and local channels. To get the full
                  benefit from such channels, state lawmakers must enact
                  legislation to designate NAS a reportable condition. Adding
                  children with NAS to states’ birth defects registries may also
                  facilitate tracking of treatment outcomes.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">🤝</div>
              <div>
                <h3>CORDINATED ASSISTANCE FROM SOCIAL SERVICES</h3>
                <p>
                  Social service supports are extremely important to
                  NAS-affected infants and their mothers, especially programs
                  that give women access to early prenatal care. Experts urge
                  that these supports be made available to all pregnant women
                  dealing with substance use disorders. Health Monitoring
                  recommends the establishment of centralized data storage and
                  management for agencies working to coordinate outreach and
                  assistance.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">🔬</div>
              <div>
                <h3>CLINICAL TRIALS FOR ADDED INSIGHT</h3>
                <p>
                  NAS treatment programs guided by the latest research findings
                  are seeing considerable success. Moving forward, randomized
                  clinical trials are essential to fill the gaps in knowledge
                  about NAS and improve care by shortening hospital stays,
                  reducing treatment costs, and improving infant outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Population Health Section */}
      <section className="population-health">
        <h2>POPULATION HEALTH</h2>
        <div className="health-grid">
          <div className="health-item">
            <img src="/img/global.jpg" alt="Syndromic Surveillance" />
            <h3>Influenza</h3>
            <p>
              Every year, millions of people fall ill from the flu. The 1918
              influenza epidemic is a cautionary tale of how devastating the flu
              can become if left unchecked. Estimates vary, but some say up to
              500 million people were infected by the 1918 Spanish flu, causing
              as many as 50 million deaths. Health Monitoring is working to
              bring better flu benchmarking to healthcare systems and public
              health so that the impact on facility operations and public health
              intervention is better understood.
            </p>
          </div>
          <div className="health-item">
            <img src="/img/engineer.jpg" alt="Opioid Surveillance" />
            <h3>Chronic Disease</h3>
            <p>
              It is estimated that about 85% of healthcare costs are associated
              with chronic disease. Health Monitoring has done work to better
              understand the impact on the healthcare system of chronic
              conditions such as asthma, diabetes, and coronary artery disease.
            </p>
          </div>
          <div className="health-item">
            <img src="/img/medic.jpg" alt="Event Surveillance" />
            <h3>Blood Lead Levels</h3>
            <p>
              Flint, Michigan has become a watchword for tainted water supply.
              But beyond Flint, more than 5,300 water systems have had a
              violation of the EPA’s lead and copper rule. Health Monitoring is
              working with health departments and water suppliers to better
              detect when the water supply might be causing elevated blood lead
              levels in children and adults.
            </p>
          </div>
        </div>
      </section>

      {/* Antimicrobial Benchmarking Recommendation Section */}
      <section className="nas-surveillance">
        <div className="nas-content-container">
          {/* Left Column: NAS Surveillance Text */}
          <div className="nas-text-container">
            <h2>RECOMMENDATION: ANTIMICROBIAL BENCHMARKING</h2>
            <p className="nas-text">
              By 2050, the World Health Organization expects
              antibiotic-resistant disease to be the foremost cause of death
              worldwide. This harrowing news points to the need to better
              understand how antibiotics are being used. In fact, health systems
              are already engaged in antibiotic stewardship programs to ensure
              proper usage of antibiotics. Health Monitoring recommends that
              hospitals and health systems share information and compare the
              work that their stewardship programs are doing. This will allow
              administrators and clinicians to have a better understanding of
              current practices and to determine where improvements can be made.
            </p>
          </div>

          {/* Vertical Line */}
          <div className="vertical-line"></div>

          {/* Right Column: Recommendations with Icons */}
          <div className="recommendation-container">
            <div className="recommendation">
              <div className="icon">📍</div>
              <div>
                <h3>PEER FACILITY COMPARISONS</h3>
                <p>
                  According to the National Institute on Drug Abuse, relapse
                  rates for addiction resemble those of other chronic diseases
                  such as diabetes, hypertension, and asthma. Roughly half
                  (40-60%) of patients are expected to relapse.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">🤝</div>
              <div>
                <h3>PER-DIAGNOSIS COMPARISONS</h3>
                <p>
                  Health Monitoring has recommended ongoing monitoring of drug
                  rehabilitation centers. Anonymized data would be collected
                  regarding program completion, treatment, and outcomes.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">🔬</div>
              <div>
                <h3>DOSAGE BASED COMPARISONS</h3>
                <p>
                  Therapy-day calculations treat one dose and five doses as
                  equivalent if all doses are administered on the same day. But
                  dose amounts can matter to the development of antimicrobial
                  resistance. We can provide feedback on the total quantity of
                  antimicrobials administered. To be meaningful, such
                  comparisons will likely need to consider patient age and
                  possibly patient weight.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">🔬</div>
              <div>
                <h3>HEALTH SYSTEM-AWARE COMPARISONS</h3>
                <p>
                  Facilities may wish to compare antimicrobial usage within
                  their health system. Is there a single hospital that is
                  consistently an outlier across many usage categories? Do newly
                  acquired facilities have noticeably different usage patterns?
                  In addition, facilities may wish to exclude other members of
                  their health system from comparisons and focus on benchmarking
                  only with respect to independent facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Policy Section */}
      <section className="population-health">
        <h2>PUBLIC POLICY</h2>
        <div className="health-grid">
          <div className="health-item">
            <img src="/img/global.jpg" alt="Syndromic Surveillance" />
            <h3>Data-Driven Descision Making</h3>
            <p>
              Population health issues pose high-stakes challenges to policy
              makers. Ineffective measures can compound the harm and the risk to
              the community. Elected officials and agency staffers need to use
              current, reliable health data when making plans. Health Monitoring
              believes they must be able to access and analyze this data in
              near-real time as a basis for appropriate action.
            </p>
          </div>
          <div className="health-item">
            <img src="/img/engineer.jpg" alt="Opioid Surveillance" />
            <h3>Healthcare Utilization</h3>
            <p>
              Emergency department visit data reveals a community’s healthcare
              needs. Details about patients’ chief complaints and their hospital
              usage patterns can point the way toward more efficient use of
              facilities and resources. Health Monitoring is implementing new
              types of analysis to assess how demographics correlate with
              chronic conditions and thus with healthcare utilization.
            </p>
          </div>
          <div className="health-item">
            <img src="/img/medic.jpg" alt="Event Surveillance" />
            <h3>Readmissions</h3>
            <p>
              The ACA’s Hospital Readmissions Reduction Program aims to bring
              Medicare and Medicaid costs down by tying reimbursement to
              hospital readmission rates. Ideally hospitals could avoid
              readmission by providing better care at the outset. But other
              factors also come into play. Refining programs like HRRP calls for
              detailed, current data. Health Monitoring is working to make such
              data available to interested policy makers.
            </p>
          </div>
        </div>
      </section>

      {/* Opioid Rehabilitation Efficacy Recommendation Section */}
      <section className="nas-surveillance">
        <div className="nas-content-container">
          {/* Left Column: NAS Surveillance Text */}
          <div className="nas-text-container">
            <h2>RECOMMENDATION: OPIOID REHABILITATION EFFICACY</h2>
            <p className="nas-text">
              The opioid overdose crisis has been prominent in the news since
              before the president declared it a national public health
              emergency in 2017. Much of the work has centered on tracking fatal
              and non-fatal overdoses. One important component is missing,
              however. That is tracking the efficacy of rehabilitation programs.
              Once addicted to opioids, a person with a substance use disorder
              has three potential outcomes: they go through rehab successfully,
              they overdose, or they get off drugs on their own. Health
              Monitoring recommends tracking the progress of patients through
              rehab facilities and the various treatments they complete.
            </p>
          </div>

          {/* Vertical Line */}
          <div className="vertical-line"></div>

          {/* Right Column: Recommendations with Icons */}
          <div className="recommendation-container">
            <div className="recommendation">
              <div className="icon">📍</div>
              <div>
                <h3>RELAPSE IS A REAL CONCERN</h3>
                <p>
                  According to the National Institute on Drug Abuse, relapse
                  rates for addiction resemble those of other chronic diseases
                  such as diabetes, hypertension, and asthma. Roughly half
                  (40-60%) of patients are expected to relapse.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">🤝</div>
              <div>
                <h3>INFORMATION ON PROGRAMS AND OUTCOMES</h3>
                <p>
                  Health Monitoring has recommended ongoing monitoring of drug
                  rehabilitation centers. Anonymized data would be collected
                  regarding program completion, treatment, and outcomes.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">🔬</div>
              <div>
                <h3>MORE EFFECTIVE DECISIONS</h3>
                <p>
                  Currently policymakers and families are making decisions with
                  little information on how to get effective treatment for those
                  with substance use disorders. Health Monitoring’s approach
                  would provide information to better equip people who are
                  facing expensive, significant decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* <CustomFooter /> */}
    </div>
  );
};

export default SpotlightPage;
