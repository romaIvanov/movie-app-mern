import {
  GET_MOVIES,
  GET_MOVIES_ERROR,
  GET_MOVIE,
  GET_MOVIE_ERROR,
  GET_ACTORS,
  GET_ACTORS_ERROR
} from '../actions/types';

const initialState = {
  moviesArray: [],
  page: null,
  loading: true,
  movie: null,
  actors: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesArray: [...state.moviesArray, ...payload.results],
        page: payload.page,
        loading: false
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: payload,
        loading: false
      };
    case GET_ACTORS:
      return {
        ...state,
        actors: payload,
        loading: false
      };
    case GET_MOVIES_ERROR:
      return {
        ...state,
        moviesArray: null,
        page: null,
        loading: false
      };
    case GET_MOVIE_ERROR:
      return {
        ...state,
        movie: null,
        loading: false
      };
    case GET_ACTORS_ERROR:
      return {
        ...state,
        actors: null,
        loading: false
      };
    default:
      return state;
  }
}
