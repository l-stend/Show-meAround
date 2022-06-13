import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTours } from '../features/tours/toursSlice';

const TourInfo = ({ tour }) => {
  return (
    <section>
      <h2>{tour?.title}</h2>
      <div className='time info'>
        <p>
          {tour?.days.map((day) => (
            <Badge key={day}>{day}</Badge>
          ))}
        </p>
        <p>Starts at: {tour?.startAt}</p>
        <p>Duration: {tour?.duration} hours</p>
      </div>
      <div className='description'>
        <p>{tour?.description}</p>
      </div>
    </section>
  );
};

export default TourInfo;

// const { toursArr, isLoading } = useSelector((store) => store.tours);
// const { user } = useSelector((store) => store.user);
// const [tour, setTour] = useState(null);
// const dispatch = useDispatch();
// const params = useParams();

// useEffect(() => {
//   dispatch(getAllTours());
//   let selectedTour = toursArr.filter((item) => item._id === selected)[0];
//   setTour(selectedTour);
//   console.log('from info component   ', tour);
// }, []);
