import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllTours, updateTour } from '../features/tours/toursSlice';
import { createChat } from '../features/chat/ChatUtils';
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
  const navigate = useNavigate();
  let selected = params.tourId;

  useEffect(() => {
    let selectedTour = toursArr.filter((item) => item._id === selected)[0];
    setTour(selectedTour);
  }, []);

  //// REVIEW

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

  //// PARTICIPATION

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

  const cancelParticipation = (id) => {
    const existingParticipants = tour.participants;
    const updates = {
      _id: id,
      participants: existingParticipants.filter(
        (item) => item.email !== user.email
      ),
    };
    dispatch(updateTour(updates));
    setParticipating(!participating);
  };

  //// DASHBOARD MSGS

  const postOnDashboard = (id) => {
    const newMessage = {
      id: uniqid(),
      content: content,
      time: Date.now(),
    };

    const existingDashboard = tour.dashboard;
    const updates = {
      _id: id,
      dashboard: [newMessage, ...existingDashboard],
    };

    dispatch(updateTour(updates));
  };

  ////// CHAT

  const messageLocal = (tour) => {
    const chat = {
      id: uniqid(),
      userOne: {
        name: user.name,
        msgs: [],
      },
      userTwo: {
        name: tour.author.name,
        msgs: [],
      },
      time: Date.now(),
    };
    console.log(chat);
    createChat(chat);
  };

  ///// ACTUAL THING

  return (
    <section>
      <h3>TourDetails</h3>
      <h2>{tour?.title}</h2>
      <h2>{tour?._id}</h2>
      {/* participation */}
      <div>
        <div>
          {user.type === 'traveler' && !participating && (
            <button onClick={() => signForTour(selected)}>Participate</button>
          )}
          {user.type === 'traveler' && participating && (
            <button onClick={() => cancelParticipation(selected)}>
              cancel
            </button>
          )}
        </div>
        {/* reviews */}
        {user.type === 'traveler' && (
          <div>
            <input
              type='text'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={() => submitReview(selected)}>Review</button>
          </div>
        )}
        {/* dashboard msgs */}
        {user.type === 'local' && (
          <div>
            <input
              type='text'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={() => postOnDashboard(selected)}>Post</button>
          </div>
        )}
      </div>
      <div>
        <button onClick={() => messageLocal(tour)}>Message the local</button>
      </div>
    </section>
  );
};

export default TourDetails;
