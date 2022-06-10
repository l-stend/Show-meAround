import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllTours } from '../../features/tours/toursSlice';

const MyTours = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <h2>AllTours</h2>
      <button onClick={() => dispatch(getAllTours())}>test</button>
    </section>
  );
};

export default MyTours;
