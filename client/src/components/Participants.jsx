import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTour } from '../features/tours/toursSlice';
import { Badge } from 'react-bootstrap';
import { useEffect } from 'react';

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
      <section>
        <h3>participants</h3>
        <div className='participants-list'>
          {componentArr.map((participant) => (
            <h3 key={participant.email}>
              <button onClick={() => cancelParticipation(tour?._id)}>
                <Badge>{participant.name} X</Badge>
              </button>
              {/* <Badge key={participant.email}>{participant.name}</Badge> */}
            </h3>
          ))}
        </div>

        <div className='paricipate-btn'>
          {!participating && ( /// con il tasto per cancellare la partecipazione incorporato nel badge non serve più il conditional rendering
            <button onClick={() => signForTour(tour?._id)}>Participate</button>
          )}
          {/* {participating && (
            <button onClick={() => cancelParticipation(tour?._id)}>
              cancel
            </button>
          )} */}
        </div>
      </section>
    </>
  );
};

export default Participants;
