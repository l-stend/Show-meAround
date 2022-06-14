import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTour } from '../features/tours/toursSlice';
import uniqid from 'uniqid';
import { useEffect } from 'react';

const Reviews = ({ tour }) => {
  const { user } = useSelector((store) => store.user);
  const [content, setContent] = useState('');
  const [reviewsArr, setReviewsArr] = useState(tour.reviews);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setReviewsArr(tour.reviews);asd
  // });

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
      {user.type === 'traveler' && (
        <div>
          <input
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={() => submitReview(tour._id)}>Review</button>
        </div>
      )}

      <div>
        {reviewsArr.map((item) => (
          <article>
            {item.name} : {item.content}
          </article>
        ))}
      </div>
    </>
  );
};

export default Reviews;
