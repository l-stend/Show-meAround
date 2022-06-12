import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import TourCard from '../../components/Card';
import { getAllTours } from '../../features/tours/toursSlice';

const MyTours = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [showTours, setShowTours] = useState([]);
  const { toursArr, isLoading } = useSelector((store) => store.tours);

  // useEffect(() => {
  //   dispatch(getAllTours());
  //   setShowTours(toursArr);
  // }, []);

  useEffect(() => {
    (async () => {
      const toursArr = await dispatch(getAllTours());
      console.log('toursArr     ', toursArr.payload);
      setShowTours(toursArr.payload);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const thing = await getAllChats();
  //     setChat(thing.find((item) => item.id === params.chatId));
  //     console.log(thing.find((item) => item.id === params.chatId));
  //   })();
  // }, []);

  return (
    <section>
      <h2>AllTours</h2>

      {/* <CardGroup></CardGroup> */}
      {showTours.map((tour) => {
        return <TourCard key={tour._id} tour={{ ...tour }} />;
      })}

      <button onClick={() => dispatch(getAllTours())}>test</button>
    </section>
  );
};

export default MyTours;
