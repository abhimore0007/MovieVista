import React from 'react';
import {Link} from 'react-router-dom';



const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieCart = React.memo(({movie}) => {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
      <img src={`${IMG_PATH}/${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Rating : {movie.vote_average}</p>  
      </Link>
      <hr />
    </div>
  )
})

export default MovieCart

/*
a components determine whether to re-render itself based on state or props it Purecomponets
*/