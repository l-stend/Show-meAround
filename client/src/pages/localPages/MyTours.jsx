import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyTours } from '../../features/tours/toursSlice';

const MyTours = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  return (
    <section>
      <h2>MyTours</h2>
      <button onClick={() => dispatch(getMyTours(user.email))}>test</button>
    </section>
  );
};

export default MyTours;
