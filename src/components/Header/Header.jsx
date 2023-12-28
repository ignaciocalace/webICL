import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Title from "./Title/Title.jsx";
import FullName from "./FullName/FullName.jsx";
import MainDescription from "./MainDescription/MainDescription.jsx";
import "./Header.style.css";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <section className="header-content">
        <div className="header-text">
          <Title />
          <FullName />
        </div>
      </section>
      <MainDescription />
    </header>
  );
};

export default Header;
