import React from 'react';
import MovieCard from './Card';

export default function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {movies.map(m => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}
