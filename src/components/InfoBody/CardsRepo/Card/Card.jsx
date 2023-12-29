import React from "react";
import "./Card.style.css";

const Card = ({ image, gif, title, description, linkWeb, linkGit }) => {
  return (
    <div className="container-card" data-aos="fade-up" data-aos-duration="600">
      <div className="container-image">
        <img
          src={image}
          alt={`${title}.jpg`}
          className="static-image"
          loading="lazy"
          title={`Repository image of ${title}`}
        />
        {gif && (
          <img
            src={gif}
            alt={`${title} gif`}
            className="hover-image"
            loading="lazy"
            title={`Repository gif of ${title}`}
          />
        )}
        <div className="shadow"></div>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="container-links">
        <a
          href={linkWeb}
          target="_blank"
          rel="noopener noreferrer"
          title={`Visit ${title}`}
        >
          Visit Website
        </a>
        <a
          href={linkGit}
          target="_blank"
          rel="noopener noreferrer"
          title={`View ${title} on GitHub`}
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Card;
