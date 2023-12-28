import React from "react";
import Contact from "./Contact/Contact.jsx";
import "./Footer.style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;
