import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTour } from '../features/tours/toursSlice';
import uniqid from 'uniqid';
import { useEffect } from 'react';
import './components-style/ReviewsStyle.css';
import { Badge } from 'react-bootstrap';

const Reviews = ({ tour }) => {
  const { user } = useSelector((store) => store.user);
  const [content, setContent] = useState('');
  const [reviewsArr, setReviewsArr] = useState(tour.reviews);
  const dispatch = useDispatch();

  console.log('revs arr  ', reviewsArr);

  const submitReview = (id) => {
    const newReview = {
      id: uniqid(),
      name: user.name,
      content: content,
      vote: 1,
    };

    const existingReviews = reviewsArr;
    const updates = {
      _id: id,
      reviews: [...existingReviews, newReview],
    };
    setReviewsArr([...existingReviews, newReview]);
    dispatch(updateTour(updates));
    setContent('');
  };

  return (
    <>
      <h2 className='tex-center'>Reviews</h2>

      <div>
        {reviewsArr.map((item) => (
          <article className='single-rev'>
            <Badge className='reviewer' bg='reviewer'>
              {item.name}
            </Badge>{' '}
            : <p>{item.content}</p>
          </article>
        ))}
      </div>

      {user.type === 'traveler' && (
        <div className='rev-console'>
          <textarea
            className='rev-textarea'
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className='rev-btn' onClick={() => submitReview(tour._id)}>
            Review
          </button>
        </div>
      )}
    </>
  );
};

export default Reviews;
