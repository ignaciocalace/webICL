import React from "react";
import "./Title.style.css";

const Title = () => {
  return (
    <div className="title-container">
      <h1 className="main-title" data-aos="fade-right" data-aos-duration="600">
        <span className="main-text">FullStack & Mobile</span>
        <span className="subtitle">Developer</span>
      </h1>
    </div>
  );
};

export default Title;
