import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllTours, updateTour } from '../features/tours/toursSlice';

const TourDetails = () => {
  const { toursArr, isLoading } = useSelector((store) => store.tours);
  const { user } = useSelector((store) => store.user);
  const [tour, setTour] = useState(null);
  const [content, setContent] = useState('');
  const params = useParams();
  const dispatch = useDispatch();
  let selected = params.tourId;

  const submitReview = (id) => {
    const newReview = {
      content: content,
      vote: 1,
    };

    const existingReviews = tour.reviews;
    const updates = {
      _id: id,
      reviews: [...existingReviews, newReview],
    };

    dispatch(updateTour(updates));
  };

  useEffect(() => {
    let selectedTour = toursArr.filter((item) => item._id === selected)[0];
    setTour(selectedTour);
  }, []);

  return (
    <section>
      <h3>TourDetails</h3>
      <h2>{tour?.title}</h2>
      <h2>{tour?._id}</h2>
      <div>
        <div>
          {user.type === 'traveler' && (
            <button onClick={() => console.log('participate')}>
              Participate
            </button>
          )}
        </div>
        <input
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {user.type === 'local' ? (
          <button>Avviso</button>
        ) : (
          <button onClick={() => submitReview(selected)}>Review</button>
        )}
      </div>
    </section>
  );
};

export default TourDetails;
