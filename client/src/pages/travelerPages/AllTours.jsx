import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
      {showTours?.map((item) => {
        return (
          <div>
            <h3>{item.title}</h3>
            <h3>{item.author}</h3>
            <div>
              {item.days.map((day) => (
                <h3>{day}</h3>
              ))}
            </div>
            <p>{item.description}</p>
          </div>
        );
      })}
      <button onClick={() => dispatch(getAllTours())}>test</button>
    </section>
  );
};

export default MyTours;
