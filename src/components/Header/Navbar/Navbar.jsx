import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="#whoAmI" className="navbar-link">
          about me
        </a>
        <a href="#skills" className="navbar-link">
          skills
        </a>
        <a href="#education" className="navbar-link">
          education
        </a>
        <a href="#experience" className="navbar-link">
          experience
        </a>
        <a href="#portfolio" className="navbar-link">
          portfolio
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
