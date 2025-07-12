import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <header className="banner">
      <div className="banner-contents">
        <h1 className="banner-title">Featured Nicolas Cage Movie</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">Watch Later</button>
        </div>
        <p className="banner-description">
          Enjoy a thrilling journey with Nicolas Cage in one of his classic hits.
          Action, drama, crime and more.
        </p>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}
