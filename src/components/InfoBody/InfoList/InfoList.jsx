import React from "react";
import "./InfoList.style.css";
const InfoList = ({ title, list }) => {
  return (
    <div className="info-list">
      <h3>{title}</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <div>
              <h5>{item.title}</h5>
              <h6>{item.place}</h6>
              <p>
                <span>{item.year}</span>
              </p>
              {item.description ? <p>{item.description}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoList;
