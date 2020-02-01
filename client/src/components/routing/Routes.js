import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import NotFound from '../layout/NotFound';
import Alert from '../layout/Alert';
import MovieDetailPage from '../movies/MovieDetailPage';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/movie/:movieId' component={MovieDetailPage} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
