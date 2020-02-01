import { GET_MOVIES, GET_MOVIES_ERROR } from '../actions/types';

const initialState = {
  moviesArray: [],
  page: null,
  loading: true,
  movie: null
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
    case GET_MOVIES_ERROR:
      return {
        ...state,
        moviesArray: null,
        loading: false
      };
    default:
      return state;
  }
}
