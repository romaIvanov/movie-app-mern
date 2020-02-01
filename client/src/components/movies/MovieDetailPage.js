import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import MainImage from './MainImage';
import { getMovie, getActors } from '../../actions/movies';
import { IMAGE_BASE_URL } from '../Config';
import GridCards from './GridCards';

const MovieDetailPage = ({
  match,
  movies: { movie, actors },
  getMovie,
  getActors
}) => {
  const movieId = match.params.movieId;

  const [toggleActors, setToggleActors] = useState(false);

  useEffect(() => {
    getMovie(movieId);
    getActors(movieId);
  }, []);
  return (
    <div>
      {movie && (
        <MainImage
          image={`${IMAGE_BASE_URL}/w1280${movie.backdrop_path}`}
          title={movie.original_title}
          text={movie.overview}
        />
      )}
      <table className='table  table-striped my-3'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Revenue</th>
            <th>Runtime</th>
            <th>Vote Average</th>
            <th>Vote Count</th>
            <th>Status</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {movie && (
            <tr>
              <th>{movie.original_title}</th>
              <th>{movie.release_date}</th>
              <th>{movie.revenue}</th>
              <th>{movie.runtime} min</th>
              <th>{movie.vote_average}</th>
              <th>{movie.vote_count}</th>
              <th>{movie.status}</th>
              <th>{movie.popularity}</th>
            </tr>
          )}
        </tbody>
      </table>
      <div className='row justify-content-center my-2'>
        <button
          onClick={() => setToggleActors(!toggleActors)}
          className='btn btn-light btn-lg'
        >
          Toggle Actors View
        </button>
      </div>
      {toggleActors && (
        <div className='container'>
          <div className='row'>
            {actors.cast &&
              actors.cast.map(actor => (
                <Fragment key={actor.cast_id}>
                  {actor.profile_path && (
                    <GridCards
                      actor
                      image={`${IMAGE_BASE_URL}/w154${actor.profile_path}`}
                    />
                  )}
                </Fragment>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps, { getMovie, getActors })(
  MovieDetailPage
);
