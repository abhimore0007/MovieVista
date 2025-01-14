import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCart from '../components/MovieCart';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchMoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useQuery().get('query');

  useEffect(() => {
    const fetchMovie = async () => {
      if (query) {
        setLoading(true);
        try {
          const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
          );
          const data = await response.json();
          setMovies(data.results || []);
          console.log(data.results);
        } catch (error) {
          console.log('Failed to fetch', error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchMovie();
  }, [query]);

  return (
    <div>
      <h2>Search Results</h2>
      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCart key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No movies found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchMoviePage;
