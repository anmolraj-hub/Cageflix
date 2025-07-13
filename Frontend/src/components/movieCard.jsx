
import React from 'react';
import './MovieCard.css';
import movieImage from '../assets/hero.jpg';

export default function MovieCard({ movie }) {
    console.log('--- MovieCard Debugging ---');
  console.log('Received movie prop:', movie);
  console.log('Value of movie.posterUrl:', movie.posterUrl);
  console.log('Type of movie.posterUrl:', typeof movie.posterUrl);
  console.log('Is movie.posterUrl an empty string?', movie.posterUrl === '');
  console.log('Is movie.posterUrl null or undefined?', movie.posterUrl == null); 
  console.log('---------------------------');
  return (
    
    <div className="movie-card">
        
     <img
        
        src={movie.posterUrl || movieImage}
        alt={movie.title}
      />
      

      <p>{movie.title}</p>
    </div>
  );
}
 

