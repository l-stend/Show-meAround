import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import TourCard from '../../components/Card';
import { getAllTours } from '../../features/tours/toursSlice';
import '../pages-style/AllTours.css';

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
      <div className='head-text'>
        <h2 className='text-center'>All the Tours</h2>
      </div>

      {/* <CardGroup></CardGroup> */}
      <div className='show-cards'>
        {showTours.map((tour) => {
          return <TourCard key={tour._id} tour={{ ...tour }} />;
        })}
      </div>

      <button onClick={() => dispatch(getAllTours())}>test</button>
    </section>
  );
};

export default MyTours;
