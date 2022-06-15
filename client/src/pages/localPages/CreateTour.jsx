import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTour } from '../../features/tours/toursSlice';
import { storage } from '../../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import '../pages-style/CreateTourStyle.css';

const CreateTour = () => {
  const { user } = useSelector((state) => state.user);
  const [utilArr, setUtilArr] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);

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
      author: user,
      description: e.target.description.value,
      startAt: e.target.startAt.value,
      duration: e.target.duration.value,
      days: utilArr,
      createdAt: Date.now(),
    };
    console.log('created tour', tour);
    dispatch(createTour(tour));
    uploadImage(tour.title);
  };

  const uploadImage = (pathVal) => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `tourImages/${pathVal}/card.png`);
    uploadBytes(imageRef, imageUpload)
      .then(() => console.log('img uploaded'))
      .catch((e) => console.log(e));
  };

  return (
    <section>
      <h2
        className='text-center create-tour-title'
        style={{ marginTop: '3vh' }}
      >
        Create Tour
      </h2>
      <form className='create-tour-form' onSubmit={handleSubmit}>
        <label htmlFor='name' className='create-tour-input'>
          Title
        </label>
        <input type='title' name='title' className='create-tour-input' />
        <label htmlFor='aboutMe' className='create-tour-input'>
          Description
        </label>
        <textarea
          id='textarea'
          name='description'
          rows='4'
          cols='50'
          className='create-tour-input'
        />
        <label htmlFor='startAt' className='create-tour-input'>
          Starts at
        </label>
        <input type='time' name='startAt' className='create-tour-input' />
        {/* days checkbox thing */}
        <div>
          <input
            name='days'
            type='checkbox'
            id='mon'
            value='mon'
            onChange={handleChange}
            className='create-tour-input'
          />
          <label htmlFor='Mon' className='create-tour-input'>
            Mon
          </label>
          <input
            name='days'
            type='checkbox'
            id='tue'
            value='tue'
            onChange={handleChange}
          />
          <label htmlFor='tue' className='create-tour-input'>
            Tue
          </label>
          <input
            name='days'
            type='checkbox'
            id='wed'
            value='wed'
            onChange={handleChange}
            className='create-tour-input'
          />
          <label htmlFor='wed' className='create-tour-input'>
            Wed
          </label>
          <input
            name='days'
            type='checkbox'
            id='thu'
            value='thu'
            onChange={handleChange}
            className='create-tour-input'
          />
          <label htmlFor='thu'>Thu</label>
          <input
            name='days'
            type='checkbox'
            id='fri'
            value='fri'
            onChange={handleChange}
            className='create-tour-input'
          />
          <label htmlFor='fri' className='create-tour-input'>
            Fri
          </label>
          <input
            name='days'
            type='checkbox'
            id='sat'
            value='sat'
            onChange={handleChange}
            className='create-tour-input'
          />
          <label htmlFor='sat' className='create-tour-input'>
            Sat
          </label>
          <input
            name='days'
            type='checkbox'
            id='sun'
            value='sun'
            onChange={handleChange}
          />
          <label htmlFor='sun' className='create-tour-input'>
            Sun
          </label>
        </div>
        {/* duration select thing */}
        <div>
          <label htmlFor='duration' className='create-tour-input'>
            Duration
          </label>
          <select name='duration' id='duration' className='create-tour-input'>
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
        <button type='submit' className='create-tour-btn'>
          Submit
        </button>
        <div className='tour-img-upload'>
          <label htmlFor='img' className='tour-img-input'>
            Tour Image
          </label>
          <input
            type='file'
            name='img'
            onChange={(e) => setImageUpload(e.target.files[0])}
            className='tour-img-btn'
          />
          {/* <button onClick={uploadImage}>Upload image</button> */}
        </div>
      </form>
    </section>
  );
};

export default CreateTour;
