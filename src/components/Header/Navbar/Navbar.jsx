import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a
          href="#whoAmI"
          className="navbar-link"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          about me
        </a>
        <a
          href="#skills"
          className="navbar-link"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          skills
        </a>
        <a
          href="#education"
          className="navbar-link"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          education
        </a>
        <a
          href="#experience"
          className="navbar-link"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          experience
        </a>
        <a
          href="#portfolio"
          className="navbar-link"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          portfolio
        </a>
        <a
          href="#contact"
          className="navbar-link"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
