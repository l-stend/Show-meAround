import React, { useRef, useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  logoutUser,
  registerUser,
  loginUser,
} from '../features/user/userSlice';
import { localsLinks, travelersLinks } from '../utils/navLInksObjs';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const [isMember, setIsMember] = useState(false);

  const handleSubmit = (e) => {
    if (e.target.email.value && e.target.password.value) {
      e.preventDefault();
      let user = {};

      if (isMember) {
        user = {
          email: e.target.email.value,
          password: e.target.password.value,
        };
      } else {
        user = {
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          type: e.target.type.value,
        };
        e.target.type.value === 'local'
          ? (user.navLinks = localsLinks)
          : (user.navLinks = travelersLinks);
      }
      console.log(user);
      isMember ? dispatch(loginUser(user)) : dispatch(registerUser(user));
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  }, [user]);
  return (
    <section>
      {user && <h2>user is there</h2>}
      <form onSubmit={handleSubmit} className='form'>
        {!isMember && (
          <>
            {/* radiobuttons */}
            <input
              type='radio'
              id='traveler'
              name='type'
              value='traveler'
              // checked='checked'
            />
            <label htmlFor='traveler'>Traveler</label>
            <input type='radio' id='local' name='type' value='local' />
            <label htmlFor='traveler'>Local</label>
            <label htmlFor='name'>Name</label>
            <input type='name' name='name' placeholder='insert your name' />
          </>
        )}
        <label htmlFor='email'>email</label>
        <input type='email' name='email' placeholder='insert a email' />
        <label htmlFor='password'>password</label>
        <input type='password' name='password' />

        {(isMember && <button type='submit'>login</button>) ||
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
