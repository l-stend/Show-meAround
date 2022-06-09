import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <main>
      <h2>🐫 Dashboard 🐫</h2>
      <Link to='/dumb'>dumb</Link>
      <Outlet />
    </main>
  );
};

export default Dashboard;
