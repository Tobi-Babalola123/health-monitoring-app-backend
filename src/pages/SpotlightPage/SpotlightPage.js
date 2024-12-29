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
        <h2 className="section-header">HEALTH MONITORING’S IMPACT</h2>
        <p className="section-description">
          We offer tailored solutions for individuals, healthcare providers, and
          organizations
          <br /> to monitor and improve health outcomes. Our approach combines
          <br /> real-time health data tracking with advanced analysis,
          delivering
          <br /> actionable insights to support better health decisions.
        </p>
      </div>
      {/* Health Surveillance Section */}
      <section className="health-surveillance">
        <h2>INSIGHTFUL HEALTH REPORTS</h2>
        <div className="grid">
          <div className="surveillance-item">
            <img src="/img/surv.jpg" alt="Emergency Department" />
            <h3>Health Monitoring</h3>
            <p>
              Our health monitoring system continuously tracks key health
              indicators, providing real-time surveillance to detect potential
              issues early. This proactive approach ensures timely interventions
              and supports overall well-being.
            </p>
          </div>
          <div className="surveillance-item">
            <img src="/img/opioid.jpg" alt="Opioid Surveillance" />
            <h3>Opioid Monitoring</h3>
            <p>
              In 2019, the U.S. saw a significant rise in opioid-related deaths.
              Our app tracks opioid overdose trends, identifies high-risk areas,
              and delivers real-time data to health officials, helping them
              allocate resources effectively for better public health outcomes.
            </p>
          </div>
          <div className="surveillance-item">
            <img src="/img/patientcare.jpg" alt="Event Surveillance" />
            <h3>Event Surveillance</h3>
            <p>
              In 2017, the rise of neonatal abstinence syndrome (NAS) in infants
              gained significant attention. Our app's surveillance feature
              focuses on the early detection of health events, enabling timely
              interventions by health professionals. By providing real-time
              data, it supports rapid response efforts, enhancing public health
              safety and ensuring the well-being of communities.
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
              The opioid crisis has led to a significant increase in Neonatal
              Abstinence Syndrome (NAS), a condition where newborns exposed to
              opioids in utero experience withdrawal symptoms. These symptoms
              can include low birth weight, seizures, and breathing or feeding
              difficulties. From 2000 to 2012, NAS cases increased fivefold, and
              in some hospitals, NAS now accounts for half of NICU hospital
              stays. Public health officials need real-time, accurate data to
              address the growing issue and mitigate its impact. However, many
              states still lack essential metrics, as NAS is not always a
              reportable condition. Our health monitoring app recommends
              implementing real-time data collection in maternity wards to track
              NAS and substance use disorder among new mothers, providing the
              information needed to reduce its prevalence and improve outcomes.
            </p>
          </div>

          {/* Vertical Line */}
          <div className="vertical-line"></div>

          {/* Right Column: Recommendations with Icons */}
          <div className="recommendation-container">
            <div className="recommendation">
              <div className="icon">
                <img
                  src="/img/medical-report.png"
                  alt="Location Icon"
                  className="icon-image"
                />
              </div>
              <div>
                <h3>MANDATORY PUBLIC HEALTH REPORTING</h3>
                <p>
                  Neonatal Abstinence Syndrome (NAS) should be reported to
                  public health authorities through existing state and local
                  channels. To maximize the effectiveness of these channels,
                  state lawmakers must pass legislation to designate NAS as a
                  reportable condition. Additionally, including NAS cases in
                  birth defects registries can help track treatment outcomes and
                  improve long-term care strategies.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">
                <img
                  src="/img/pub.png"
                  alt="Location Icon"
                  className="icon-image"
                />
              </div>
              <div>
                <h3>CORDINATED SUPPORT FOR NAS-AFFECTED FAMILIES</h3>
                <p>
                  Effective support from social services is vital for infants
                  affected by Neonatal Abstinence Syndrome (NAS) and their
                  mothers, especially through programs that provide access to
                  early prenatal care. Ensuring that all expectant mothers
                  facing substance use challenges have access to these resources
                  is essential. Our health monitoring platform advocates for a
                  centralized data system to streamline communication and
                  coordination among agencies, enhancing outreach and support
                  efforts.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">
                <img
                  src="/img/insight.png"
                  alt="Location Icon"
                  className="icon-image"
                />
              </div>
              <div>
                <h3>INFORMED HEALTH INSIGHTS</h3>
                <p>
                  With continuous updates and research-backed data, our platform
                  helps you stay informed about the latest health trends and
                  conditions. Whether you’re managing a health condition or
                  focusing on wellness, we provide valuable insights to help you
                  make informed decisions for better health outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Population Health Section */}
      <section className="population-health">
        <h2>PERSONALIZED HEALTH TRACKING</h2>
        <div className="health-grid">
          <div className="health-item">
            <img src="/img/flu.jpg" alt="Syndromic Surveillance" />
            <h3>Influenza</h3>
            <p>
              Influenza remains a major health challenge, with millions affected
              annually. Historically, epidemics like the 1918 Spanish flu
              highlight the devastating potential of unchecked outbreaks. Our
              health monitoring app focuses on improving flu surveillance by
              providing real-time tracking and analysis, helping healthcare
              systems and public health authorities better understand the impact
              on facilities and interventions. With this data, we aim to support
              timely decision-making and optimize responses to mitigate the
              flu's spread and impact.
            </p>
          </div>
          <div className="health-item">
            <img src="/img/chronic.jpg" alt="Opioid Surveillance" />
            <h3>Chronic Disease</h3>
            <p>
              Chronic diseases, such as asthma, diabetes, and coronary artery
              disease, account for a significant portion of healthcare costs.
              Our health monitoring app tracks key metrics to help healthcare
              systems better understand the long-term impacts of these
              conditions. By providing real-time data and insights, we aim to
              improve patient outcomes, optimize care, and reduce the financial
              burden of chronic diseases on the healthcare system
            </p>
          </div>
          <div className="health-item">
            <img src="/img/bloodd.jpg" alt="Event Surveillance" />
            <h3>Blood Lead Levels</h3>
            <p>
              Elevated blood lead levels, often due to contaminated water
              supplies, remain a significant public health concern. Beyond
              high-profile cases like Flint, many water systems have violated
              the EPA's lead and copper regulations. Our health monitoring app
              aids health departments and water suppliers by providing real-time
              data to detect when water may be contributing to increased lead
              exposure. By tracking these levels, we help mitigate the risks to
              children and adults, ensuring quicker responses and informed
              public health decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Antimicrobial Benchmarking Recommendation Section */}
      <section className="nas-surveillance">
        <div className="nas-content-container">
          {/* Left Column: NAS Surveillance Text */}
          <div className="nas-text-container">
            <h2>RECOMMENDATION: ANTIBIOTIC STEWARDSHIP MONITORING</h2>
            <p className="nas-text">
              With antibiotic resistance projected to be the leading cause of
              death by 2050, effective antibiotic stewardship is critical to the
              future of global health. Health Monitoring recommends using
              real-time data to track and benchmark antibiotic usage across
              hospitals and healthcare systems, enabling providers to monitor
              trends and respond proactively to emerging resistance patterns. By
              leveraging technology and sharing insights from successful
              stewardship programs, healthcare providers can assess current
              practices, identify areas for improvement, and implement targeted
              interventions to optimize antibiotic use. This comprehensive
              approach not only helps combat resistance but also improves
              patient outcomes by reducing the risk of treatment failures,
              limiting adverse drug reactions, and preventing the spread of
              resistant infections within communities. Enhanced data integration
              supports clinicians in adhering to evidence-based prescribing
              guidelines, reducing unnecessary antibiotic prescriptions, and
              ensuring appropriate treatment durations. Collaboration across
              healthcare facilities and regions enables the development of
              unified strategies to tackle resistance at a systemic level,
              fostering innovation in diagnostics, surveillance, and
              antimicrobial development. Furthermore, comprehensive training
              programs for healthcare professionals can strengthen their
              understanding of antimicrobial stewardship principles, enabling
              them to make informed decisions that align with global best
              practices. Efforts to combat antibiotic resistance must also
              extend beyond hospitals, integrating community-level interventions
              to address misuse in outpatient settings and agricultural sectors,
              where overuse often fuels resistance. Public awareness campaigns
              aimed at educating individuals about the dangers of antibiotic
              misuse and the importance of adherence to prescribed treatments
              can significantly influence behaviors, empowering patients to
              become active participants in the fight against resistance. On a
              global scale, data sharing between nations can enhance the ability
              to detect and contain resistance outbreaks, fostering
              international cooperation in research and development for new
              antibiotics and alternative therapies. Governments, regulatory
              bodies, and healthcare organizations must work together to
              prioritize investments in infrastructure that supports
              surveillance and stewardship efforts. Robust stewardship programs
              also reduce the economic burden on healthcare systems by
              minimizing costs associated with prolonged hospital stays,
              second-line treatments, and the management of complex resistant
              infections. By preventing resistance from escalating into a
              full-blown public health crisis, such programs safeguard not only
              the efficacy of antibiotics for future generations but also the
              resilience of healthcare systems in the face of an ever-changing
              landscape of infectious diseases. This multipronged approach
              ensures that antibiotics remain a cornerstone of modern medicine,
              preserving their life-saving potential for decades to come.
            </p>
          </div>

          {/* Vertical Line */}
          <div className="vertical-line"></div>

          {/* Right Column: Recommendations with Icons */}
          <div className="recommendation-container">
            <div className="recommendation">
              <div className="icon">
                <img
                  src="/img/canar.png"
                  alt="Location Icon"
                  className="icon-image"
                />
              </div>
              <div>
                <h3>PEER FACILITY COMPARISONS</h3>
                <p>
                  Relapse rates for addiction mirror those of chronic conditions
                  like diabetes and hypertension, with 40-60% of patients
                  expected to experience relapse. Health Monitoring suggests
                  utilizing real-time data to compare facility performance in
                  addiction treatment. By benchmarking recovery outcomes across
                  similar healthcare facilities, administrators can identify
                  successful strategies, improve treatment approaches, and
                  optimize care plans to support long-term recovery and reduce
                  relapse rates effectively.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">
                <img
                  src="/img/prohibition.png"
                  alt="Location Icon"
                  className="icon-image"
                />
              </div>
              <div>
                <h3>PER-DIAGNOSIS COMPARISONS</h3>
                <p>
                  Health Monitoring proposes continuous tracking of drug
                  rehabilitation centers, gathering anonymized data on treatment
                  completion rates, program efficacy, and patient outcomes. This
                  approach allows for insights into performance across centers,
                  helping to refine treatment methods and improve success rates.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">
                <img
                  src="/img/dropper.png"
                  alt="Location Icon"
                  className="icon-image"
                />
              </div>
              <div>
                <h3>DOSAGE BASED COMPARISONS</h3>
                <p>
                  Health Monitoring facilitates precise dosage tracking by
                  calculating therapy days while accounting for total
                  antimicrobial quantity administered per patient. This feature
                  considers dose variations, highlighting the impact of dosage
                  on antimicrobial resistance. For accurate insights, dosage
                  comparisons can be tailored to patient age and weight,
                  enabling providers to optimize treatment plans and support
                  resistance prevention efforts.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">
                <img
                  src="/img/world.png"
                  alt="Location Icon"
                  className="icon-image"
                />
              </div>
              <div>
                <h3>HEALTH SYSTEM-AWARE COMPARISONS</h3>
                <p>
                  Our app enables facilities to benchmark antimicrobial usage
                  across their health system, allowing administrators to
                  identify trends, spot outliers, and understand how newly
                  acquired facilities compare. By providing flexible comparison
                  options, facilities can choose to focus on system-wide
                  insights or benchmark against independent facilities,
                  empowering data-driven improvements and alignment with best
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Policy Section */}
      <section className="population-health">
        <h2>REAL-TIME MONITORING</h2>
        <div className="health-grid">
          <div className="health-item">
            <img src="/img/data.jpg" alt="Syndromic Surveillance" />
            <h3>Data-Driven Descision Making</h3>
            <p>
              Our Health Monitoring app empowers policymakers and healthcare
              administrators with near-real-time data to tackle pressing
              population health challenges. By providing immediate, accurate
              health insights, the app supports informed, data-driven
              decision-making. This timely access enables leaders to respond
              effectively, implement proactive measures, and reduce risks to
              community health.
            </p>
          </div>
          <div className="health-item">
            <img src="/img/ilera.jpg" alt="Opioid Surveillance" />
            <h3>Healthcare Utilization</h3>
            <p>
              Emergency department data provides valuable insights into a
              community's healthcare needs, highlighting patterns in patient
              complaints and hospital usage. Health Monitoring enhances this
              analysis by examining how demographics correlate with chronic
              conditions, enabling better understanding of healthcare
              utilization. This approach helps optimize facility resource
              allocation and improve care efficiency across the community.
            </p>
          </div>
          <div className="health-item">
            <img src="/img/read.jpg" alt="Event Surveillance" />
            <h3>Readmissions</h3>
            <p>
              Tracking hospital readmission rates is essential for improving
              patient outcomes and reducing healthcare costs. Health Monitoring
              helps identify patterns in patient care that may lead to
              readmissions, providing healthcare providers with real-time data
              to enhance treatment plans and prevent unnecessary hospital
              visits. By offering actionable insights, the app supports more
              efficient care delivery and better long-term patient health
              management.
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
              The opioid epidemic has been a significant public health crisis,
              and while efforts have focused on tracking overdose rates, there
              is a critical gap in monitoring the success of opioid
              rehabilitation programs. Health Monitoring aims to bridge this gap
              by providing a comprehensive approach to tracking the progress of
              individuals in rehab, from initial treatment to recovery. By
              collecting real-time data on treatment milestones, success rates,
              and patient outcomes, the app allows healthcare providers to
              evaluate the effectiveness of rehabilitation interventions and
              adjust care plans accordingly. This data-driven approach not only
              tracks recovery but also identifies which treatment strategies are
              most effective, offering insights into patient progress, relapse
              risks, and long-term recovery trends. By continuously monitoring
              key indicators such as completion of therapy, withdrawal symptoms,
              and post-rehabilitation support, the app ensures that patients
              receive personalized care tailored to their specific needs. With
              real-time access to this data, healthcare professionals can make
              informed decisions to enhance treatment plans, improve patient
              outcomes, and ultimately contribute to reducing opioid dependency
              and overdose rates in the community. Additionally, the platform
              enables collaboration among care teams, counselors, and family
              members, fostering a holistic approach to recovery by addressing
              both the medical and psychosocial aspects of treatment. The app’s
              predictive analytics feature can help identify patterns associated
              with higher risks of relapse, allowing providers to proactively
              implement preventative measures. For example, triggers such as
              missed therapy sessions or increased stress levels can alert
              clinicians to intervene early, providing timely support to
              patients before setbacks occur. This proactive strategy minimizes
              relapse incidents and strengthens patients' chances of sustained
              recovery. Furthermore, Health Monitoring emphasizes the importance
              of post-rehabilitation care, offering tools to track ongoing
              therapy attendance, medication adherence, and participation in
              support groups. These long-term metrics ensure that patients
              remain engaged in their recovery journey, reducing the likelihood
              of returning to substance use.
            </p>
          </div>

          {/* Vertical Line */}
          <div className="vertical-line"></div>

          {/* Right Column: Recommendations with Icons */}
          <div className="recommendation-container">
            <div className="recommendation">
              <div className="icon">
                <img
                  src="/img/hadiit.png"
                  alt="Location Icon"
                  className="icon-image"
                />
              </div>
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
              <div className="icon">
                <img
                  src="/img/health-report.png"
                  alt="Location Icon"
                  className="icon-image"
                />
              </div>
              <div>
                <h3>INFORMATION ON PROGRAMS AND OUTCOMES</h3>
                <p>
                  Health Monitoring advocates for continuous tracking of drug
                  rehabilitation centers to better understand program
                  effectiveness. By collecting anonymized data on key factors
                  such as treatment completion rates, patient progress, and
                  overall outcomes, the app provides valuable insights into the
                  success of various rehabilitation programs. This real-time
                  data enables healthcare providers and policymakers to assess
                  the impact of treatment strategies, identify areas for
                  improvement, and optimize care to support long-term recovery.
                </p>
              </div>
            </div>

            <div className="recommendation">
              <div className="icon">
                <img
                  src="/img/decision-making.png"
                  alt="Location Icon"
                  className="icon-image"
                />
              </div>
              <div>
                <h3>MORE EFFECTIVE DECISIONS</h3>
                <p>
                  Policymakers and families often face challenging decisions
                  regarding treatment options for individuals with substance use
                  disorders, yet they lack comprehensive data to guide their
                  choices. Health Monitoring addresses this gap by providing
                  actionable insights and real-time data to support more
                  informed, effective decision-making. This approach equips both
                  decision-makers and families with the information needed to
                  navigate treatment options, ensuring that individuals receive
                  the most appropriate and cost-effective care for long-term
                  recovery.
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
