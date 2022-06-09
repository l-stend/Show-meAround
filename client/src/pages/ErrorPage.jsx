import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <section>
      <h2>Error Page</h2>
      {user ? <Link to='dashboard'>Back</Link> : <Link to='/'>Back</Link>}
    </section>
  );
};

export default ErrorPage;
