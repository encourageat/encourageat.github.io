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
             Contact Details:<p className="email">encourageat@gmail.com</p> <p><strong>OR</strong></p>
             
<div className="linkedin-section">
  <span>Connect with me on </span>
  <a 
    href="https://www.linkedin.com/in/george-v-thomas-79487887/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/images/linkedin.png" alt="LinkedIn"/>
  </a>
</div>
             For <strong>training requirements
              </strong> please go through below</p>

          

          <p className="intro-text">
            IAM Beginner alumni get ₹2500 ($25) off for Auth0 Intermediate or Keycloak Advanced training programs. This additional discount applies when enrolling in any second course.
          </p>

          <h3>📌 Please Include the Following Details while contacting</h3>

          <ul className="details-list">
            <li>✔ Name</li>
            <li>✔ Country of Residence</li>
            <li>✔ Course Name</li>
            <li>✔ Preferred Timing (Weekday / Saturday)</li>
          </ul>

          <h3>🎓 Available Courses</h3>

          <div className="course-list">
            <div className="course-item">
              <h4>IAM – Beginner</h4>
            </div>

            <div className="course-item">
              <h4>Auth0 – Intermediate</h4>
            </div>

            <div className="course-item">
              <h4>Keycloak – Advanced</h4>
            </div>
          </div>

          <h3>🕒 Training Timings (IST)</h3>

          <div className="timing-box">
            <p><strong>Weekdays:</strong> 9:00 AM – 11:30 PM (Flexible 1- to 2-hour sessions)</p>
            <p><strong>Saturday:</strong> 7:00 AM – 5:00 PM  (Saturday only 2-hour sessions)</p>
          </div>

          <p className="closing-text">Minor discounts will be available on a need basis and for group enrollments.<br/>
            Will typically respond within 24 hours with details.<br/>
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Contact;