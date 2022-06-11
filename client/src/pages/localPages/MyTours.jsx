import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTours, getMyTours } from '../../features/tours/toursSlice';
import Card from '../../components/Card';

const MyTours = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [showTours, setShowTours] = useState([]);
  const { toursArr, isLoading } = useSelector((store) => store.tours);

  useEffect(() => {
    dispatch(getAllTours());
    let arr = toursArr.filter((item) => item.author === user.email);
    setShowTours(arr);
  }, []);

  return (
    <section>
      <h2>AllTours</h2>
      {showTours?.map((tour) => {
        return <Card key={tour._id} tour={{ ...tour }} />;
      })}
      <button onClick={() => dispatch(getAllTours())}>test</button>
    </section>
  );
};

export default MyTours;
