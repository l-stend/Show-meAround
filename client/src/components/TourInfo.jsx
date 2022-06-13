import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTours } from '../features/tours/toursSlice';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

const TourInfo = ({ tour }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const imageRef = ref(storage, `userImages/${tour?.author.email}`);

  useEffect(() => {
    listAll(imageRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          let prevState = imageUrls;
          setImageUrls([...prevState, url]);
          console.log('suca ', imageUrls);
        });
      });
    });
  }, []);

  useEffect(() => {
    console.log('mannaggia cristo');
  }, []);

  return (
    <section>
      <h2>{tour?.title}</h2>
      {/* TIME INFO */}
      <div className='time info'>
        <p>
          {tour?.days.map((day) => (
            <Badge key={day}>{day}</Badge>
          ))}
        </p>
        <p>Starts at: {tour?.startAt}</p>
        <p>Duration: {tour?.duration} hours</p>
      </div>
      {/* DESCRIPTION */}
      <div className='description'>
        <p>{tour?.description}</p>
      </div>
      {/* AUTHOR INFO */}
      <img src={imageUrls[0]} style={{ height: '20vh', width: '20vw' }} />
      <div className='author-info'>
        <p>
          Hosted by: {tour?.author.name} {tour?.author.lastName}
        </p>
        <p>
          About {tour?.author.name}: {tour?.author.aboutMe}
        </p>
      </div>
    </section>
  );
};

export default TourInfo;
