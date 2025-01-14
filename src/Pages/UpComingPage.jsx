import React, { useState,useEffect } from 'react'
import MovieCart from '../components/MovieCart';


const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const UpComingPage = () => {

  const[upmovies,setupMovies] = useState([])
  
     useEffect(() => {
       
      const fetchtopratedmovie = async () => {
        const respon = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language-US&page-1`)
        const data = await respon.json();
        setupMovies(data.results)
      }
      fetchtopratedmovie()
     }, [])
  return (
    <div>
        <h2>Up Coming Movies</h2>
        <div>
        {upmovies.map((movie) => (      
              <MovieCart key={movie.id} movie={movie}/>
        ))}
        </div>
     </div>
  )
}

export default UpComingPage
