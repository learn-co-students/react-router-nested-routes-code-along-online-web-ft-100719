
import React from 'react';
import { Link } from 'react-router-dom';
 //pass in movies prop from App
const MoviesList = ({ movies }) => {
    //iterate over each movies object using Object.keys(movies) to get array of keys, then map over that array
  const renderMovies = Object.keys(movies).map(movieID =>
    //use interpolation to creat dynamic path in to
    <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}<br></br></Link>
  );
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesList;