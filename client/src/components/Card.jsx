import './components-style/CardStyle.css';
import { Link } from 'react-router-dom';
import { Card, Button, Badge } from 'react-bootstrap';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import { useEffect } from 'react';
import { useState } from 'react';

const TourCard = ({ tour }) => {
  const imageRef = ref(storage, `tourImages/${tour.title}`);
  const [imageUrls, setImageUrls] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     let referenceArr = await listAll(imageRef).then((response) => {
  //       referenceArr = response.items;
  //     });
  //     console.log(referenceArr);
  //   })();
  // }, []);

  // let referenceArr = listAll(imageRef).then((response) => {
  //   referenceArr = response.items;
  // });
  // console.log(referenceArr);
  // useEffect(() => {
  //   listAll(imageRef).then((response) => console.log(response));
  // }, []);

  useEffect(() => {
    listAll(imageRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          let prevState = imageUrls;
          setImageUrls([...prevState, url]);
        });
      });
    });
  }, []);

  return (
    <Card style={{ width: '22rem' }} className='tour-card'>
      <Card.Img
        variant='top'
        // src='https://cdn0.scrvt.com/86f1f1e2d836ca377960c1753403d83d/57b9727cf8e31196/98c78701d823/v/b7dd3f28a5ee/bologna_shutterstock_419143885.jpg'
        src={imageUrls[0]}
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>{tour.title}</Card.Title>
        <div className='time-info'>
          <Card.Text>{tour.startAt}</Card.Text>
          <Card.Text>{tour.duration} Hours</Card.Text>
          <article>
            {tour.days.map((item) => (
              <Badge className='day' bg='day' key={item}>
                {item}
              </Badge>
            ))}
          </article>
        </div>
        <Card.Text>{tour.description.slice(0, 60)}...</Card.Text>
        <Card.Text>
          Hosted by:
          <span style={{ color: '#ff8500' }}> {tour.author.name}</span>
        </Card.Text>
        <div className='text-end'>
          <Link
            className='details-btn text-center'
            to={`/tourDetails/${tour._id}`}
          >
            Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TourCard;

{
  /* <div>
      <h2>{tour.title}</h2>
      <Link to={`/tourDetails/${tour._id}`}>Details</Link>
    </div> */
}
