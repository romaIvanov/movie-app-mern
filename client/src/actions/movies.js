import axios from 'axios';
import {
  GET_MOVIES,
  GET_MOVIES_ERROR,
  GET_MOVIE_ERROR,
  GET_MOVIE,
  GET_ACTORS_ERROR,
  GET_ACTORS
} from './types';
import { API_URL, API_KEY } from '../components/Config';

export const getMovies = () => async dispatch => {
  try {
    const res = await axios.get(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({
      type: GET_MOVIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: GET_MOVIES_ERROR });
  }
};

export const getMoviesPage = page => async dispatch => {
  try {
    const res = await axios.get(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page +
        1}`
    );
    dispatch({
      type: GET_MOVIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: GET_MOVIES });
  }
};

export const getMovie = movieId => async dispatch => {
  try {
    const res = await axios.get(
      `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    dispatch({
      type: GET_MOVIE,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: GET_MOVIE_ERROR });
  }
};

export const getActors = movieId => async dispatch => {
  try {
    const res = await axios.get(
      `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    dispatch({
      type: GET_ACTORS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: GET_ACTORS_ERROR });
  }
};
