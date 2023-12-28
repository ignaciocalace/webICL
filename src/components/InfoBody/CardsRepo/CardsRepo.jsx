import React from "react";
import Card from "./Card/Card.jsx";
import "./CardsRepo.style.css";

const CardsRepo = () => {
  const repositoryList = [
    {
      image: "./img/repoImg/AF.jpg",
      title: "Aberturas Ferrero",
      description: "ReactJS + Sass + Firebase",
      linkWeb: "https://aberturasferrero.com/",
      linkGit: "https://github.com/ignaciocalace/AberturasFerrero",
    },
    {
      image: "./img/repoImg/consumption.jpg",
      title: "Device Consumption",
      description: "HTML + CSS + JavaScript",
      linkWeb: "https://ignaciocalace.github.io/DeviceConsumption/",
      linkGit: "https://github.com/ignaciocalace/DeviceConsumption",
    },
    {
      image: "./img/repoImg/blackbox.jpg",
      title: "BlackBoX Watches",
      description: "ReactJS + CSS + Firebase",
      linkWeb: "https://blackbox-react.netlify.app/",
      linkGit: "https://github.com/ignaciocalace/BlackBoX-Watches",
    },
    {
      image: "./img/repoImg/iclProd.jpg",
      title: "ICL Producciones",
      description: "HTML + CSS + Bootstrap",
      linkWeb: "https://ignaciocalace.github.io/icl-producciones-Calace/",
      linkGit: "https://github.com/ignaciocalace/icl-producciones-Calace",
    },
    {
      image: "./img/repoImg/haz.jpg",
      title: "Haz&Envés",
      description: "ReactJS + Sass (colavorative project)",
      linkWeb: "https://hazenves.com.ar/",
      linkGit: "https://github.com/AlvezMatiass/HazEnves",
    },
  ];

  return (
    <div id="portfolio" className="container-cardsRepo">
      <h3>Portfolio</h3>
      <div className="container-cardsRepo-list">
        {repositoryList.map((repositoryListItem) => (
          <Card
            image={repositoryListItem.image}
            gif={repositoryListItem.gif}
            title={repositoryListItem.title}
            description={repositoryListItem.description}
            linkWeb={repositoryListItem.linkWeb}
            linkGit={repositoryListItem.linkGit}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsRepo;
