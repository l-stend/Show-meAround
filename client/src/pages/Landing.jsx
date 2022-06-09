import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <h2>🐦 Landing 🐦</h2>
      <Link to='/sign-up'>Sign up</Link>
    </>
  );
};

export default Landing;
