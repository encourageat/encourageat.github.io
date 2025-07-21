import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-content">
        <div class="contact-info">
            <p>Email: encouarageat@gmail.com</p>
            <p>Location: Tiruvalla, Kerala, India</p>
        </div>

    </div>
    <div className="copyright">
        <h3>&copy; {new Date().getFullYear()} - EncourageAt</h3>
      </div>
    </footer>
  );
};

export default Footer;
