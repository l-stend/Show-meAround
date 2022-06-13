import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllTours, updateTour } from '../features/tours/toursSlice';
import { createChat } from '../features/chat/ChatUtils';
import { TourInfo, Participants, Reviews, HostDashboard } from '../components';
import uniqid from 'uniqid';
import { toast } from 'react-toastify';

const TourDetails = () => {
  const { toursArr, isLoading } = useSelector((store) => store.tours);
  const { user } = useSelector((store) => store.user);
  const [tour, setTour] = useState(null);
  const [content, setContent] = useState('');
  // const [participating, setParticipating] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let selected = params.tourId;

  useEffect(() => {
    dispatch(getAllTours());
  }, []);

  useEffect(() => {
    let selectedTour = toursArr.filter((item) => item._id === selected)[0];
    setTour(selectedTour);
    console.log('selected', selectedTour);
  }, [toursArr]);

  const messageLocal = (tour) => {
    const chat = {
      id: uniqid(),
      userOne: {
        name: user.name,
        email: user.email,
        msgs: [],
      },
      userTwo: {
        name: tour.author.name,
        email: tour.author.email,
        msgs: [],
      },
      time: Date.now(),
    };
    console.log(chat);
    createChat(chat);
    navigate(`/chats/${chat.id}`);
  };

  ///// ACTUAL THING

  return (
    <section>
      <h3>TourDetails</h3>
      {tour && <TourInfo tour={tour} />}
      {/* participation */}
      {tour && <Participants tour={tour} />}
      <div>
        <div>
          <button onClick={() => messageLocal(tour)}>Message the local</button>
        </div>
        {/* reviews */}
        {user.type === 'traveler' && tour && <Reviews tour={tour} />}
        {/* dashboard msgs */}
        {user.type === 'local' && tour && <HostDashboard tour={tour} />}
      </div>
    </section>
  );
};

export default TourDetails;
