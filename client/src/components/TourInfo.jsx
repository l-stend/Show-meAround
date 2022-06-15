import React, { useEffect, useState } from 'react';
import { Badge, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTours } from '../features/tours/toursSlice';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import './components-style/TourInfoStyle.css';

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
      <h2 className='text-center'>{tour?.title}</h2>
      {/* TIME INFO */}
      <div className='tour-details-time-info'>
        <p>
          <div className='days'>
            {tour?.days.map((day) => (
              <h3>
                <Badge className='day' bg='day' key={day}>
                  {day}
                </Badge>
              </h3>
            ))}
          </div>
        </p>
        <p>
          Starts at: <span> {tour?.startAt}</span>
        </p>
        <p>Duration: {tour?.duration} hours</p>
      </div>
      {/* DESCRIPTION */}
      <div className='big-info'>
        <div className='description'>
          <p>{tour?.description}</p>
        </div>
        {/* AUTHOR INFO */}
        <div className='author-info'>
          <Image
            src={imageUrls[0]}
            roundedCircle='true'
            style={{
              height: '20vh',
              width: '7vw',
              border: '4px solid #ff8500',
              marginBottom: '3vh',
              marginTop: '1vh',
            }}
          />
          {/* <img src={imageUrls[0]} style={{ height: '20vh', width: '20vw' }} /> */}
          <p>
            Hosted by:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {' '}
              {tour?.author.name} {tour?.author.lastName}{' '}
            </span>
          </p>
          <p>
            About {tour?.author.name}: {tour?.author.aboutMe}
          </p>
        </div>
      </div>
      <div className='line'> </div>
    </section>
  );
};

export default TourInfo;
