/*
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import MovieCard from './movieCard';
import './Row.css';

export default function Row({ title, genre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`/search?genre=${genre}`);
      setMovies(res.data);
    };
    fetch();
  }, [genre]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
  */

import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import MovieCard from './movieCard';
import './Row.css';

export default function Row({ title, genre, type = 'home' }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`/${type}`, {
          params: { genre: genre }
        });
        setMovies(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [genre, type]);

  return (
    <div className="row">
      <h2>{title || genre}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

