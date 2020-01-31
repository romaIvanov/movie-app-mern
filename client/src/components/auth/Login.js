import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';

const Login = ({ isAuthenticated, loginUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    loginUser(formData);
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <>
      <h1 className='display-4 text-primary'>Sign in</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Login Into Your account
      </p>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={email}
            placeholder='test@gmail.com'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            value={password}
            placeholder='123abc'
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' value='Login' className='btn btn-primary' />
      </form>
      <p className='my-5'>
        Already have an account? <Link to='/register'>Sing up</Link>
      </p>
    </>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginUser })(Login);
