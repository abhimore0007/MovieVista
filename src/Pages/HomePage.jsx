import React,{useState, useEffect} from 'react'
import MovieCart from '../components/MovieCart'


const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {

    const fetchmovie = async () =>{
      const res =  await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      const data = await res.json();
  
      setMovies(data.results)
      console.log(data.results)
    };
    fetchmovie();
  }, [])

  if (error) {
    throw new Error('Simulated Error: Something went wrong fetching movies');
  }
  

  return (
    <div>
      <h2>Popular Movie</h2>
      <button onClick={() => setError(true)}>hello</button>
      <div>
        {movies.map((movie) => (      
              <MovieCart key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  )
};

export default Homepage