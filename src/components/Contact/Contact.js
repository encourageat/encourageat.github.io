import "./Contact.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div>

      <PageHeader title={"Contact & Enrollment"} />

      <div className="contact-wrapper">

        <div className="contact-card">

          <h2>Contact Details</h2>

          <p className="intro-text">
            Thank you for your interest in my services.
            <br />
            For consulting, custom development, or training inquiries, feel free to reach out.
          </p>

          <div className="contact-section">
            <p className="label">Email</p>
            <p className="email">encourageat@gmail.com</p>
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