import React, { useRef, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, registerUser } from '../features/user/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  const handleSubmit = (e) => {
    if (e.target.email.value && e.target.password.value) {
      e.preventDefault();
      const user = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      console.log(user);
      dispatch(registerUser(user));
    }

    // dispatch(registerUser({ ));
  };
  return (
    <section>
      {user && <h2>user is there</h2>}
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='email'>email</label>
        <input type='email' name='email' placeholder='insert a email' />
        <label htmlFor='password'>password</label>
        <input type='password' name='password' />

        <button type='submit'>login</button>
      </form>
      {user && <button onClick={() => dispatch(logoutUser())}>logout</button>}
    </section>
  );
};

export default SignUp;
