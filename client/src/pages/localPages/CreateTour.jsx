import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTour } from '../../features/tours/toursSlice';

const CreateTour = () => {
  const { user } = useSelector((state) => state.user);
  const [utilArr, setUtilArr] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let index;
    if (e.target.checked) {
      setUtilArr((prev) => [...prev, e.target.value]);
    } else {
      index = utilArr.indexOf(e.target.value);
      setUtilArr((prev) => [...prev].filter((item) => item !== e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting');
    let arr = e.target.days;
    console.log(arr, 'dslfjhsd');

    const tour = {
      title: e.target.title.value,
      author: user.email,
      description: e.target.description.value,
      startAt: e.target.startAt.value,
      duration: e.target.duration.value,
      days: utilArr,
      createdAt: Date.now(),
    };
    console.log('created tour', tour);
    dispatch(createTour(tour));
  };

  return (
    <section>
      <h2>Create Tour</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Title</label>
        <input type='title' name='title' />
        <label htmlFor='aboutMe'>Description</label>
        <textarea id='textarea' name='description' rows='4' cols='50' />
        <label htmlFor='startAt'>Starts at</label>
        <input type='time' name='startAt' />
        {/* days checkbox thing */}
        <div>
          <input
            name='days'
            type='checkbox'
            id='mon'
            value='mon'
            onChange={handleChange}
          />
          <label htmlFor='Mon'>Mon</label>
          <input
            name='days'
            type='checkbox'
            id='tue'
            value='tue'
            onChange={handleChange}
          />
          <label htmlFor='tue'>Tue</label>
          <input
            name='days'
            type='checkbox'
            id='wed'
            value='wed'
            onChange={handleChange}
          />
          <label htmlFor='wed'>Wed</label>
          <input
            name='days'
            type='checkbox'
            id='thu'
            value='thu'
            onChange={handleChange}
          />
          <label htmlFor='thu'>Thu</label>
          <input
            name='days'
            type='checkbox'
            id='fri'
            value='fri'
            onChange={handleChange}
          />
          <label htmlFor='fri'>Fri</label>
          <input
            name='days'
            type='checkbox'
            id='sat'
            value='sat'
            onChange={handleChange}
          />
          <label htmlFor='sat'>Sat</label>
          <input
            name='days'
            type='checkbox'
            id='sun'
            value='sun'
            onChange={handleChange}
          />
          <label htmlFor='sun'>Sun</label>
        </div>
        {/* duration select thing */}
        <div>
          <label htmlFor='duration'>Duration</label>
          <select name='duration' id='duration'>
            <option value={1}>1</option>
            <option value={1.5}>1.5</option>
            <option value={2}>2</option>
            <option value={2.5}>2.5</option>
            <option value={3}>3</option>
            <option value={3.5}>3.5</option>
            <option value={4}>4</option>
          </select>
          <label htmlFor='duration'>Hours</label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default CreateTour;
