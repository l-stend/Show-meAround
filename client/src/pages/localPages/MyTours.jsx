import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTours, getMyTours } from '../../features/tours/toursSlice';

const MyTours = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [showTours, setShowTours] = useState([]);
  const { toursArr, isLoading } = useSelector((store) => store.tours);

  // dispatch(getMyTours());

  // useEffect(() => {
  //   (async () => {
  //     setIsLoading(true);
  //     setTours(dispatch(await getMyTours(user.email)));
  //     setIsLoading(false);
  //     console.log(tours, 'tours');
  //   })();
  // }, []);
  // useEffect(() => {
  //   console.log(user.email);
  //   let arr = dispatch(getMyTours(user.email));
  //   console.log('arr   ', arr);
  //   setTours(arr);
  // }, []);
  useEffect(() => {
    dispatch(getAllTours());
    let arr = toursArr.filter((item) => item.author === user.email);
    setShowTours(arr);
  }, []);

  return (
    <section>
      <h2>MyTours</h2>
      <button onClick={() => dispatch(getMyTours(user.email))}>test</button>
      {/* {showTours.map((item) => console.log(item))} */}
      {showTours?.map((item) => {
        return (
          <div>
            <h3>{item.title}</h3>
            <h3>{item.author}</h3>
            <div>
              {item.days.map((day) => (
                <h3>{day}</h3>
              ))}
            </div>
            <p>{item.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default MyTours;
