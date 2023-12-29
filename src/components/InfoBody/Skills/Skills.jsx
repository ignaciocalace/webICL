import React from "react";
import "./skills.style.css";

const Skills = () => {
  const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "SASS",
    "Bootstrap",
  ];
  const backEndSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "API Rest",
  ];
  const mobileSkills = ["React Native", "SQLite"];
  const DevOpsToolsSkills = ["Git", "Github", "Docker"];
  const othersSkills = [
    "Adobe Photoshop",
    "Adobe Lightroom",
    "Adobe Illustrator",
    "Adobe Premier Pro",
    "CorelDraw",
  ];

  const handleHover = (event) => {
    const name = event.target.alt;
    event.target.setAttribute("data-name", name);
  };

  const handleLeave = (event) => {
    event.target.removeAttribute("data-name");
  };

  return (
    <div id="skills" className="container-skills">
      <h3 data-aos="fade-in" data-aos-duration="600">
        Skills
      </h3>
      <div className="container-mern">
        <div
          className="skill-image"
          data-text="MongoDB"
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <img src="./img/static/mongodb.svg" alt="MongoDB Logo" />
        </div>
        <div
          className="skill-image"
          data-text="Express"
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <img src="./img/static/expressjs_dark.svg" alt="Express Logo" />
        </div>
        <div
          className="skill-image"
          data-text="React"
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src="./img/static/react.svg" alt="React Logo" />
        </div>
        <div
          className="skill-image"
          data-text="Node.js"
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <img src="./img/static/nodejs.svg" alt="Node.js Logo" />
        </div>
      </div>
      <div className="container-skills-list">
        <div
          className="skills-column"
          data-aos="flip-left"
          data-aos-duration="600"
        >
          <div className="box">
            <h4>Front End</h4>
            <ul>
              {frontEndSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="skills-column"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <div className="box">
            <h4>Back End</h4>
            <ul>
              {backEndSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="skills-column"
          data-aos="flip-left"
          data-aos-duration="1400"
        >
          <div className="box">
            <h4>Mobile</h4>
            <ul>
              {mobileSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="skills-column"
          data-aos="flip-left"
          data-aos-duration="1800"
        >
          <div className="box">
            <h4>DevOps Tools</h4>
            <ul>
              {DevOpsToolsSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="skills-column"
          data-aos="flip-left"
          data-aos-duration="2200"
        >
          <div className="box">
            <h4>Others</h4>
            <ul>
              {othersSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
