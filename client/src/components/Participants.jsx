import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTour } from '../features/tours/toursSlice';
import { Badge } from 'react-bootstrap';
import { useEffect } from 'react';
import './components-style/ParticipantsStyle.css';

const Participants = ({ tour }) => {
  const [participating, setParticipating] = useState(false);
  const { user } = useSelector((store) => store.user);
  const { tours } = useSelector((store) => store.tours);
  const [componentArr, setComponentArr] = useState(tour.participants);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tour.participants.some((item) => item.email === user.email)) {
      setParticipating(true);
    }
    console.log('comp Arr', componentArr);
  }, []);

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
      setComponentArr([...existingParticipants, participant]);
      dispatch(updateTour(updates));
      setParticipating(true);
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
    setComponentArr(
      existingParticipants.filter((item) => item.email !== user.email)
    );
    dispatch(updateTour(updates));
    setParticipating(false);
  };

  return (
    <>
      <section className='participants-section'>
        <h3 style={{ marginBottom: '3vh' }}>Participants</h3>
        <div className='participants-list'>
          {componentArr.map((participant) => (
            <h3 key={participant.email}>
              <button
                className='participant-btn'
                onClick={() => cancelParticipation(tour?._id)}
              >
                <Badge className='participant-badge' bg='participant-badge'>
                  {participant.name}{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-x-square'
                    viewBox='0 0 16 16'
                  >
                    <path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                  </svg>
                </Badge>
              </button>
              {/* <Badge key={participant.email}>{participant.name}</Badge> */}
            </h3>
          ))}
        </div>

        <div>
          {!participating &&
            user.type === 'traveler' && ( /// con il tasto per cancellare la partecipazione incorporato nel badge non serve più il conditional rendering
              <button
                className='participate-btn'
                onClick={() => signForTour(tour?._id)}
              >
                Participate
              </button>
            )}
        </div>
      </section>
    </>
  );
};

export default Participants;
