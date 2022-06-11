import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllTours, updateTour } from '../features/tours/toursSlice';
import uniqid from 'uniqid';
import { toast } from 'react-toastify';

const TourDetails = () => {
  const { toursArr, isLoading } = useSelector((store) => store.tours);
  const { user } = useSelector((store) => store.user);
  const [tour, setTour] = useState(null);
  const [content, setContent] = useState('');
  const [participating, setParticipating] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  let selected = params.tourId;

  useEffect(() => {
    let selectedTour = toursArr.filter((item) => item._id === selected)[0];
    setTour(selectedTour);
  }, []);

  const submitReview = (id) => {
    const newReview = {
      id: uniqid(),
      name: user.name,
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

  const signForTour = (id) => {
    const participant = {
      name: user.name,
      email: user.email,
    };

    const existingParticipants = tour.participants;
    const updates = {
      _id: id,
      participants: [...existingParticipants, participant],
    };

    if (!existingParticipants.some((item) => item.email === user.email)) {
      dispatch(updateTour(updates));
      setParticipating(!participating);
      return;
    } else {
      alert('already participating');
    }
  };

  return (
    <section>
      <h3>TourDetails</h3>
      <h2>{tour?.title}</h2>
      <h2>{tour?._id}</h2>
      <div>
        <div>
          {user.type === 'traveler' && !participating && (
            <button onClick={() => signForTour(selected)}>Participate</button>
          )}
          {user.type === 'traveler' && participating && (
            <button onClick={() => setParticipating(!participating)}>
              cancel
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
