import React from "react";
import "./MainDescription.style.css";
const MainDescription = () => {
  return (
    <div id="whoAmI" className="containerMainDescription">
      <h2
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-anchor=".header"
      >
        Who am I?
      </h2>
      <h4 data-aos="fade-up" data-aos-duration="600" data-aos-anchor=".header">
        Hey! I'm Ignacio, a FullStack and Mobile Developer based in Uruguay. I
        began my studies in 2021 on my own, and later in 2022, I started my
        career at Coderhouse. I am fluent in Spanish, and I've also studied
        English (B1). I excel at adapting to teamwork environments, and while I
        may not be the best in the field, I always strive to give my best with
        dedication. I'm opened to learn new technologies.
      </h4>
    </div>
  );
};

export default MainDescription;
