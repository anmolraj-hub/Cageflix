import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import './NavBar.css';

export default function NavBar({user , onLogout}) {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  // For getting the search result

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!keyword) return;
    try {
      const movie_res = await axios.get(`/search?keyword=${keyword}`);
      const genre_res = await axios.get(`/search?genre=${keyword}`);
      const res = [...movie_res.data, ...genre_res.data];
      setResults(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Cageflix</h2>
      <ul className="navbar-links">
        <li ><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/shows">Shows</Link></li>
      </ul>
        
      <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Cageflix..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

         {results.length > 0 && (
        <div className="search-results">
          {results.map((movie) => (
            <div key={movie.id} className="search-item">
              <strong>{movie.title}</strong> ({movie.year}) - {movie.genres}
            </div>
          ))}
        </div>
      )}
    </div>
      {user ? (
  <div className="user-info">
    <span className="username">Welcome, {user}!</span>
    <button className="logout-button" onClick={onLogout}>Logout</button>
  </div>
) : (
  <Link to="/signin" className="signin-button">Sign In</Link>
)}



   
    </nav>
  );
}
