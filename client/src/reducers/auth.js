import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_ERROR,
  USER_LOADED,
  LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  userId: localStorage.getItem('userId'),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      localStorage.setItem('userId', payload.userId);
      return {
        ...state,
        token: payload.token,
        userId: payload.userId,
        isAuthenticated: true,
        loading: false
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case USER_ERROR:
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      return {
        ...state,
        token: null,
        userId: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
