import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../../store';
import { useTypedSelector } from '../../../reducers';
import { login } from '../../../thunks/auth';
import { LoginData } from './Login.interface';

function Login() {
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const isAuthenticated: boolean = useTypedSelector((state) => state.auth.isAuthenticated);
  const dispatch: AppDispatch = useDispatch();

  const { email, password }: LoginData = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <section className='container'>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign into Your Account
      </p>
      <form className='form' onSubmit={onSubmit} noValidate>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </section>
  );
}

export default Login;
