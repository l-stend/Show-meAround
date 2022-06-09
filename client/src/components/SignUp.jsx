import React, { useRef, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  logoutUser,
  registerUser,
  loginUser,
} from '../features/user/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [isMember, setIsMember] = useState(false);

  const handleSubmit = (e) => {
    if (e.target.email.value && e.target.password.value) {
      e.preventDefault();
      const user = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };
      isMember ? dispatch(loginUser(user)) : dispatch(registerUser(user));
    }
  };
  return (
    <section>
      {user && <h2>user is there</h2>}
      <form onSubmit={handleSubmit} className='form'>
        {!isMember && (
          <>
            <label htmlFor='name'>Name</label>
            <input type='name' name='name' placeholder='insert your name' />
          </>
        )}
        <label htmlFor='email'>email</label>
        <input type='email' name='email' placeholder='insert a email' />
        <label htmlFor='password'>password</label>
        <input type='password' name='password' />

        {(isMember && <button type='submit'>register</button>) ||
          (!isMember && <button type='submit'>register</button>)}
      </form>
      {!isMember ? (
        <p>
          Member already ?
          <span>
            <button onClick={() => setIsMember(!isMember)}>
              Get Logged In
            </button>
          </span>
        </p>
      ) : (
        <p>
          Want to Join ?
          <span>
            <button onClick={() => setIsMember(!isMember)}>Sign up</button>
          </span>
        </p>
      )}
      {user && <button onClick={() => dispatch(logoutUser())}>logout</button>}
    </section>
  );
};

export default SignUp;
