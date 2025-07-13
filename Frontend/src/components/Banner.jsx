import React from "react";
import "./Banner.css";
import { Bookmark, Play } from 'lucide-react'

export default function Banner() {
  return (
    <header className="banner">
      <div className="banner-contents">
        <h1 className="banner-title">Featured Nicolas Cage Movie</h1>
        <div className="banner-buttons">
           <button className='banner-button'>
                           <Play className='mr-2 w-4 h-5 md:2-5 md:h-5'/>Watch Now</button>
           <button className='banner-button'>
                <Bookmark className='mr-2 w-4 h-5 md:2-5 md:h-10'/>Watch Later</button>
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
