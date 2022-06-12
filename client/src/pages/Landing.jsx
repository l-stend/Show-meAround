import React from 'react';
import { Link } from 'react-router-dom';
import { LandingSlideShow } from '../components';

const Landing = () => {
  return (
    <>
      <LandingSlideShow />
      <Link to='/sign-up'>Sign up</Link>
    </>
  );
};

export default Landing;
