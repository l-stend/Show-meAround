import React from 'react';
import { Link } from 'react-router-dom';
import { LandingSlideShow, Description } from '../components';

const Landing = () => {
  return (
    <>
      <LandingSlideShow />
      <Description />
      <Link to='/sign-up'>Sign up</Link>
    </>
  );
};

export default Landing;
