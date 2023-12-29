import React from "react";
import "./FullName.style.css";
const FullName = () => {
  return (
    <div
      className="containerFullName"
      data-aos="fade-left"
      data-aos-duration="600"
    >
      <img
        src="./img/static/profile.png"
        alt="profile picture"
        loading="lazy"
      />
      <h3> Ignacio Calace</h3>
    </div>
  );
};

export default FullName;
