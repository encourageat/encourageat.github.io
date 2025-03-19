import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto text-center">
        <h3>&copy; {new Date().getFullYear()} - EncourageAt</h3>
      </div>
    </footer>
  );
};

export default Footer;
