import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Email: encourageat@gmail.com</p>
          <p>Location: Tiruvalla, Kerala, India</p>
          
          <p>
            <div className="linkedin-section-white">
  <span>Connect with me: </span>
  <a 
    href="https://www.linkedin.com/in/george-v-thomas-79487887/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/images/linkedin-white.png" alt="LinkedIn"/>
  </a>
</div>
    
          </p>
        </div>
      </div>

      <div className="copyright">
        <h3>&copy; {new Date().getFullYear()} - EncourageAt</h3>
      </div>
    </footer>
  );
};

export default Footer;