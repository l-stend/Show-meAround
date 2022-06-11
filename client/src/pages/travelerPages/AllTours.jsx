import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import { getAllTours } from '../../features/tours/toursSlice';

const MyTours = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [showTours, setShowTours] = useState([]);
  const { toursArr, isLoading } = useSelector((store) => store.tours);

  useEffect(() => {
    dispatch(getAllTours());
    setShowTours(toursArr);
  }, []);

  return (
    <section>
      <h2>AllTours</h2>
      {showTours?.map((tour) => {
        return <Card key={tour._id} tour={{ ...tour }} />;
      })}
      <button onClick={() => dispatch(getAllTours())}>test</button>
    </section>
  );
};

export default MyTours;
