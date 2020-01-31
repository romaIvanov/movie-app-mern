import axios from 'axios';
import { GET_MOVIES, GET_MOVIES_ERROR } from './types';
import { API_URL, API_KEY } from '../components/Config';

export const getMovies = () => async dispatch => {
  try {
    const res = await axios.get(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({
      type: GET_MOVIES,
      payload: res.data.results
    });
  } catch (err) {
    dispatch({ type: GET_MOVIES_ERROR });
  }
};
