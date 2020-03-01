// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';

const MoviesPage = ({ match, movies }) => (
  //added nested route to display movie show container
  <div>
    <MoviesList movies={movies} />
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies= {movies} /> }/>
  </div>
)
//use match because we want Route inside MoviesPage to match exact URL that caused Movies Page to render + movieId

export default MoviesPage
