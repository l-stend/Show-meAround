import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllTours, updateTour } from '../features/tours/toursSlice';
import { createChat } from '../features/chat/ChatUtils';
import { TourInfo, Participants, Reviews, HostDashboard } from '../components';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import uniqid from 'uniqid';
import { toast } from 'react-toastify';
import './pages-style/TourDetailsStyle.css';

const TourDetails = () => {
  const { toursArr, isLoading } = useSelector((store) => store.tours);
  const { user } = useSelector((store) => store.user);
  const [tour, setTour] = useState(null);
  const [content, setContent] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let selected = params.tourId;

  useEffect(() => {
    dispatch(getAllTours());
  }, []);

  useEffect(() => {
    let selectedTour = toursArr.filter((item) => item._id === selected)[0];
    setTour(selectedTour);
    const imageRef = ref(storage, `tourImages/${tour?.title}`);

    // tour img
    listAll(imageRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          let prevState = imageUrls;
          setImageUrls([...prevState, url]);
        });
      });
    });
    console.log('selected', selectedTour);
  }, [toursArr]);

  const messageLocal = (tour) => {
    const chat = {
      id: uniqid(),
      userOne: {
        name: user.name,
        email: user.email,
        // msgs: [],
      },
      userTwo: {
        name: tour.author.name,
        email: tour.author.email,
        // msgs: [],
      },
      messages: [],
      time: Date.now(),
    };
    console.log(chat);
    createChat(chat);
    navigate(`/chats/${chat.id}`);
  };

  ///// ACTUAL THING

  return (
    <section>
      <img
        src={
          imageUrls[0] ||
          'https://cdn0.scrvt.com/86f1f1e2d836ca377960c1753403d83d/57b9727cf8e31196/98c78701d823/v/b7dd3f28a5ee/bologna_shutterstock_419143885.jpg'
        }
        style={{
          height: '50vh',
          width: '50vw',
          margin: '5vh 25vw 5vh 25vw',
          border: 'solid 4px #ff8500',
          objectFit: 'cover',
        }}
      />
      {tour && <TourInfo tour={tour} />}
      {/* participation */}
      <div className='below-the-line'>
        <div className='rev-dash'>
          {/* reviews */}
          {tour && <Reviews tour={tour} />}

          {/* dashboard msgs */}
          {tour && <HostDashboard tour={tour} />}
        </div>
        <div className='participants'>
          <div>
            <button
              className='msg-the-local'
              onClick={() => messageLocal(tour)}
            >
              Message the local
            </button>
          </div>
          {tour && <Participants tour={tour} />}
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
