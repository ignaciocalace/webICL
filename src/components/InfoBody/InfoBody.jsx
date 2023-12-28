import React from "react";
import InfoList from "./InfoList/InfoList.jsx";
import Skills from "./Skills/Skills.jsx";
import CardsRepo from "./CardsRepo/CardsRepo.jsx";
import "./InfoBody.style.css";

const InfoBody = () => {
  const academicList = [
    {
      title: "Technician in networks and optical communications",
      place: "UTU (Universidad del trabajo del uruguay)",
      year: "March 2014 to March 2015",
    },
    {
      title: "Computer Engineering",
      place: "UDELAR (Univerisidad de la Republica)",
      year: "February 2016 to December 2019 (not finished)",
    },
  ];

  const supplementaryList = [
    {
      title: "Mobile Development",
      place: "CoderHouse",
      year: "August to November 2023",
    },
    {
      title: "Backend Development",
      place: "CoderHouse",
      year: "January to July 2023",
    },
    {
      title: "React JS",
      place: "CoderHouse",
      year: "November to December 2022",
    },
    {
      title: "JavaScript",
      place: "CoderHouse",
      year: "September to November 2022",
    },
    {
      title: "Web Development",
      place: "CoderHouse",
      year: "June to August 2022",
    },
  ];

  const workList = [
    {
      title: "Frontend Developer",
      place: "Freelancer",
      year: "January 2022 - Present",
    },
    {
      title: "Frontend Developer",
      place: "Internship at Coderhouse",
      year: "March 2023 - May 2023",
    },
    {
      title: "Professor of Calculus and Fiber Optics",
      place: "UTU (Universidad del trabajo del uruguay)",
      year: "August 2021 to February 2023",
    },
  ];

  return (
    <section className="container-infoBody">
      <Skills />
      <div className="container-infoList">
        <div id="education" className="container-education">
          <InfoList title={"Academic Education"} list={academicList} />
          <InfoList
            title={"Supplementary Education"}
            list={supplementaryList}
          />
        </div>
        <div id="experience" className="container-experience">
          <InfoList title={"Work Experience"} list={workList} />
        </div>
      </div>
      <CardsRepo />
    </section>
  );
};

export default InfoBody;
