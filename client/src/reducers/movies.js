import { GET_MOVIES, GET_MOVIES_ERROR } from '../actions/types';

const initialState = {
  movies: [],
  loading: true,
  movie: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
        loading: false
      };
    case GET_MOVIES_ERROR:
      return {
        ...state,
        movies: null,
        loading: false
      };
    default:
      return state;
  }
}
