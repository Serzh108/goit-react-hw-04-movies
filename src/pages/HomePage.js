import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomePage = ({ moviesList }) => {
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: '/' },
              }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;

HomePage.propType = {
  moviesList: PropTypes.array.isRequired,
};
