/*import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 w-40">
      <img src={movie.image} alt={movie.title} className="rounded" />
      <h3 className="text-white mt-2">{movie.title}</h3>
      <p className="text-gray-400">{movie.genre}</p>
    </div>
  );
};

export default MovieCard;
*/
import React from 'react';
import './MovieCard.css';

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={`https://source.unsplash.com/random/200x300?movie&sig=${movie.id}`}
        alt={movie.title}
      />
      <p>{movie.title}</p>
    </div>
  );
}
 