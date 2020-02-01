import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMovies, getMoviesPage } from '../../actions/movies';
import MainImage from '../movies/MainImage';
import GridCards from '../movies/GridCards';
import { IMAGE_BASE_URL } from '../Config';

const Landing = ({
  movies: { moviesArray, page },
  getMovies,
  getMoviesPage
}) => {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {moviesArray[0] && (
        <MainImage
          image={`${IMAGE_BASE_URL}/w1280${moviesArray[0].backdrop_path}`}
          title={moviesArray[0].original_title}
          text={moviesArray[0].overview}
        />
      )}
      <div className='body-cards'>
        <h2 className='display-3'>Movies by latest</h2>
        <hr />
        <div className='container'>
          <div className='row'>
            {moviesArray &&
              moviesArray.map(movie => (
                <React.Fragment key={movie.id}>
                  <GridCards
                    image={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}/w500${movie.poster_path}`
                        : null
                    }
                    movieId={movie.id}
                  />
                </React.Fragment>
              ))}
          </div>
          <div className='row justify-content-center my-2'>
            <button
              onClick={() => getMoviesPage(page)}
              className='btn btn-light btn-lg'
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps, { getMovies, getMoviesPage })(Landing);
