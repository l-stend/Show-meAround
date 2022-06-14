import React from 'react';
import { Link } from 'react-router-dom';
import { LandingSlideShow, Description, SignUp } from '../components';

const Landing = () => {
  return (
    <>
      <LandingSlideShow />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Description />
        <SignUp />
      </div>
    </>
  );
};

export default Landing;
