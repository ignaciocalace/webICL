import React from "react";
import Contact from "./Contact/Contact.jsx";
import "./Footer.style.css";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <Contact />
      </div>
      <button
        onClick={handleScrollToTop}
        data-aos="fade-in"
        data-aos-duration="3000"
        data-aos-anchor=".footer"
      >
        <div className="text">
          <span>Back</span>
          <span>to</span>
          <span>top</span>
        </div>
        <div className="clone">
          <span>Back</span>
          <span>to</span>
          <span>top</span>
        </div>
        <svg
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
