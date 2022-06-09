import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <main>
      {user.type === 'traveler' ? (
        <h2>🦆 Dashboard for Travelers 🦆</h2>
      ) : (
        <h2>🐫 Dashboard for locals🐫</h2>
      )}
      <Link to='/dumb'>dumb</Link>
      <Outlet />
    </main>
  );
};

export default Dashboard;
