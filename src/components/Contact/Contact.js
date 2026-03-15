import "./Contact.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div>

      <PageHeader title={"Contact & Enrollment"} />

      <div className="contact-wrapper">

        <div className="contact-card">
          <p className="intro-text">Thank you for your interest in training or consulting engagements.<br/>
             Contact email: <p className="email">encourageat@gmail.com</p>
             For <strong>training requirements
              </strong> please go through below</p>

          <h2>Enroll in IAM Training Programs</h2>

          <p className="intro-text">
            Thank you for your interest in EncourageAt training programs.
            Offer structured, hands-on IAM courses designed for students,
            working professionals, and enterprise teams.
            <br/>IAM Beginner alumni get ₹2500 ($25) off Auth0 Intermediate or Keycloak Advanced. This additional discount applies when enrolling in any second course.
          </p>

          <div className="highlight-box">
            <h3>Email for Enrollment</h3>
            <p className="email">encourageat@gmail.com</p>
          </div>

          <h3>📌 Please Include the Following Details</h3>

          <ul className="details-list">
            <li>✔ Full Name</li>
            <li>✔ Country of Residence</li>
            <li>✔ Course Name</li>
            <li>✔ Preferred Timing (Weekday / Saturday)</li>
          </ul>

          <h3>🎓 Available Courses</h3>

          <div className="course-list">
            <div className="course-item">
              <h4>IAM – Beginner</h4>
              <p>Foundations of Identity and Access Management including SSO, OAuth2, OIDC, SAML, MFA etc.</p>
            </div>

            <div className="course-item">
              <h4>Auth0 – Intermediate</h4>
              <p>Hands-on CIAM implementation, application integration, flows, rules, and customization.</p>
            </div>

            <div className="course-item">
              <h4>Keycloak – Advanced</h4>
              <p>Enterprise IAM deployment, federation, SPI development, observability, and production setup.</p>
            </div>
          </div>

          <h3>🕒 Training Timings (IST)</h3>

          <div className="timing-box">
            <p><strong>Weekdays:</strong> 9:00 AM – 11:30 PM (Flexible 1- to 2-hour sessions)</p>
            <p><strong>Saturday:</strong> 7:00 AM – 5:00 PM  (Saturday only 2-hour sessions)</p>
          </div>

          <p className="closing-text">Minor discounts will be available on a need basis and for group enrollments.<br/>
          <br/>For more details on the instructor selecct <a href="/#/about" style={{ color: 'blue' }}>here</a><br/>
            Will typically respond within 24 hours with batch availability and payment instructions.<br/>
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Contact;