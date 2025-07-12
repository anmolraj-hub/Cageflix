import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.poster} alt={item.title} />
      <div className="card-info">
        <h4 title={item.title}>{item.title}</h4>
        <p>{item.genres}</p>
        <small>{item.year} | {item.runtime} min</small>
      </div>
    </div>
  );
};

export default Card;
