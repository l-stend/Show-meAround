import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar } from '../components';

const Dashboard = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Dashboard;
