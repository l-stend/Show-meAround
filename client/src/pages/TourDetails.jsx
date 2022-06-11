import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllTours } from '../features/tours/toursSlice';

const TourDetails = () => {
  const { toursArr, isLoading } = useSelector((store) => store.tours);
  const { user } = useSelector((store) => store.user);
  const [tour, setTour] = useState(null);
  const params = useParams();
  const dispatch = useDispatch;
  let selected = params.tourId;

  useEffect(() => {
    let selectedTour = toursArr.filter((item) => item._id === selected)[0];
    setTour(selectedTour);
  }, []);

  const submitReview = (id) => {
    console.log('id after button', id);
  };

  return (
    <section>
      <h3>TourDetails</h3>
      <h2>{tour?.title}</h2>
      <h2>{tour?._id}</h2>
      <div>
        <input type='text' name='content' />
        {user.type === 'local' ? (
          <button>Avviso</button>
        ) : (
          <button onClick={() => submitReview(tour._id)}>Review</button>
        )}
      </div>
    </section>
  );
};

export default TourDetails;
