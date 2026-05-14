import "./Contact.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div>

      <PageHeader title={"Contact Details.."} />

      <div className="contact-wrapper">

        <div className="contact-card">

          <p className="intro-text">
            Thank you for your interest in my services.
            <br />
          </p>

          <h2>Contact Details</h2>
          <div className="contact-section">
            <p className="label">Email</p>
            <a className="email" href="mailto:encourageat@gmail.com">encourageat@gmail.com</a>
          </div>

          <div className="or-divider">OR</div>

          <div className="contact-section">
            <p className="label">Connect with me</p>

            <div className="linkedin-section">
              <a
                href="https://www.linkedin.com/in/george-v-thomas-79487887/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>

          <p className="closing-text">
            I typically respond within 24 hours.
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Contact;