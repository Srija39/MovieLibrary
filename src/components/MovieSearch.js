// src/components/MovieSearch.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieSearch.css';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=5fc1f466`);
        if (response.data.Response === 'True') {
          setMovies(response.data.Search || []);
          setError('');
        } else {
          setMovies([]);
          setError(response.data.Error || 'No movies found.');
        }
      } catch (error) {
        setMovies([]);
        setError('Failed to fetch movie data. Please try again later.');
      }
    };

    fetchData();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.search.value.trim());
  };

  return (
    <div className="app">
      <h1>Search For Your Favorite Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search for a movie..."
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
      {error && <div className="error">{error}</div>}
      <div className="movies">
        {movies.map(movie => (
          <div className="movie" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-info">
              <h2>{movie.Title}</h2>
              <p>Year: {movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieSearch;