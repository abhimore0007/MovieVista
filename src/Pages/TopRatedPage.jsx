import React, { useState, useEffect } from 'react';
import MovieCart from '../components/MovieCart'; 

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results || []); 
      } catch (err) {
        console.error('Failed to fetch top-rated movies:', err);
        setError('Failed to load movies. Please try again later.');
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div>
      <h2>Top Rated Movies</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCart key={movie.id} movie={movie} />)
          ) : (
            <p>Loading movies, please wait...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TopRatedPage;
