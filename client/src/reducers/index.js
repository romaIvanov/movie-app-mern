import { combineReducers } from 'redux';
import alerts from './alerts';
import auth from './auth';
import movies from './movies';

export default combineReducers({
  alerts,
  auth,
  movies
});
