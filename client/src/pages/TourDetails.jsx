import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllTours } from '../features/tours/toursSlice';

const TourDetails = () => {
  const { toursArr, isLoading } = useSelector((store) => store.tours);
  const { user } = useSelector((store) => store.user);
  const params = useParams();
  const dispatch = useDispatch;
  let selected = params.tourId;
  let tour = toursArr.filter((item) => item._id === selected)[0];

  // useEffect(() => {
  //   dispatch(getAllTours());
  // }, []);

  return (
    <div>
      <h3>TourDetails</h3>
      <h2>{tour.title}</h2>
      {/* <h2>{tour.title}</h2> */}
    </div>
  );
};

export default TourDetails;
