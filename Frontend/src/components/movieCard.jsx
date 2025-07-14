
import React from 'react';
import './MovieCard.css';
import movieImage from '../assets/fallback.jpg';

// MovieCard component to display a movie poster and title

export default function MovieCard({ movie }) {
  return (
    
    <div className="movie-card" onClick={() => onClick(movie)}>
        
     <img
        
        src={movie.posterUrl || movieImage}
        alt={movie.title}
      />
      

      <p>{movie.title}</p>
    </div>
  );
}
 

