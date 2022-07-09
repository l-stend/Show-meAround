import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import TourCard from '../../components/Card';
import { getAllTours } from '../../features/tours/toursSlice';
import '../pages-style/AllTours.css';

const MyTours = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [showTours, setShowTours] = useState([]);
  const { toursArr, isLoading } = useSelector((store) => store.tours);

  useEffect(() => {
    (async () => {
      const toursArr = await dispatch(getAllTours());
      setShowTours(toursArr.payload);
    })();
  }, []);

  return (
    <section>
      <div className='head-text'>
        <h2 className='text-center'>All the Tours</h2>
      </div>

      {/* <CardGroup></CardGroup> */}
      {(user.type === 'traveler' && (
        <div className='show-cards'>
          {showTours.map((tour) => {
            return <TourCard key={tour._id} tour={{ ...tour }} />;
          })}
        </div>
      )) ||
        (user.type === 'local' && (
          <div className='show-cards'>
            {showTours
              .filter((tour) => tour.author.email === user.email)
              .map((tour) => {
                return <TourCard key={tour._id} tour={{ ...tour }} />;
              })}
          </div>
        ))}

      <button onClick={() => dispatch(getAllTours())}>test</button>
    </section>
  );
};

export default MyTours;
