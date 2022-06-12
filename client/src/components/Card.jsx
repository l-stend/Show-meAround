import './components-style/CardStyle.css';
import { Link } from 'react-router-dom';
import { Card, Button, Badge } from 'react-bootstrap';

const TourCard = ({ tour }) => {
  return (
    <Card style={{ width: '22rem' }} className='tour-card'>
      <Card.Img
        variant='top'
        src='https://cdn0.scrvt.com/86f1f1e2d836ca377960c1753403d83d/57b9727cf8e31196/98c78701d823/v/b7dd3f28a5ee/bologna_shutterstock_419143885.jpg'
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
