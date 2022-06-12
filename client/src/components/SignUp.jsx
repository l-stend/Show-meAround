import React, { useRef, useState, useEffect } from 'react';
import './components-style/signUpStyle.css';
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

  ///   RENDERED STUFF
  return (
    <section
      className='sign-up-form'
      style={{
        width: '46vw',
        borderColor: 'black',
        border: 'solid 2px black',
        borderRadius: '0px',
        padding: '0vh 5vw 0vh 5vw',
        margin: '3vh 1vw 0vh 2vw',
      }}
    >
      {user && <h2>user is there</h2>}
      <form onSubmit={handleSubmit} className='actual-form'>
        {!isMember && (
          <div className='not-member-inputs text-center'>
            <div className='radio-buttons'>
              {/* radiobuttons */}
              <input
                type='radio'
                id='traveler'
                name='type'
                value='traveler'
                // checked='checked'
              />
              <label htmlFor='traveler' style={{ marginRight: '2vw' }}>
                Traveler
              </label>
              <input type='radio' id='local' name='type' value='local' />
              <label htmlFor='traveler'>Local</label>
            </div>
            <div className='input-group'>
              <label className='input-label' htmlFor='name'>
                Name
              </label>
              <input
                className='text-center'
                type='name'
                name='name'
                placeholder='insert your name'
              />
            </div>
          </div>
        )}

        {/* ALREADY MEMBER INPUTS */}
        <div className='already-member-inputs'>
          <div className='input-group text-center'>
            <label className='input-label' htmlFor='email'>
              Email
            </label>
            <input
              className='text-center'
              type='email'
              name='email'
              placeholder='insert a email'
            />
          </div>
          <div className='input-group text-center'>
            <label className='input-label' htmlFor='password'>
              Password
            </label>
            <input className='text-center' type='password' name='password' />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className='submit-button text-center'>
          {(isMember && (
            <button className='sign-up-btn' type='submit'>
              Login
            </button>
          )) ||
            (!isMember && (
              <button className='sign-up-btn' type='submit'>
                Register
              </button>
            ))}
        </div>
      </form>

      {/* ALREADY MEMBER? */}
      <div className='member-already text-center' style={{ marginTop: '3vh' }}>
        {!isMember ? (
          <p>
            Member already ?
            <span>
              <button
                className='member-switch'
                onClick={() => setIsMember(!isMember)}
              >
                Get Logged In
              </button>
            </span>
          </p>
        ) : (
          <p>
            Want to Join ?
            <span>
              <button
                className='member-switch'
                onClick={() => setIsMember(!isMember)}
              >
                Sign up
              </button>
            </span>
          </p>
        )}
      </div>
      {user && <button onClick={() => dispatch(logoutUser())}>logout</button>}
    </section>
  );
};

export default SignUp;
