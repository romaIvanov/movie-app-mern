import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/movies';
import MainImage from '../movies/MainImage';
import { IMAGE_BASE_URL } from '../Config';

const Landing = ({ allMovies: { movies }, getMovies }) => {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {/*Movie Main Image */}
      {movies[0] && (
        <MainImage
          image={`${IMAGE_BASE_URL}/w1280${movies[0].backdrop_path}`}
          title={movies[0].original_title}
          text={movies[0].overview}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  allMovies: state.movies
});

export default connect(mapStateToProps, { getMovies })(Landing);
