import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ tour }) => {
  return (
    <div>
      <h2>{tour.title}</h2>
      <Link to={`/tourDetails/${tour._id}`}>Details</Link>
    </div>
  );
};

export default Card;
