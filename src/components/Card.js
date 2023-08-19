import React from 'react';
import '../styles/Card.css';
import { Link } from 'react-router-dom';
const Card = ({ heading, description, onAddToDeals, onCheckDetails }) => {
  return (
    <div className="card">
      <h3>{heading}</h3>
      <p>{description}</p>
      <div>
        <button onClick={onAddToDeals}>Add to Deals</button>
        <Link to={'/details'}>
          {' '}
          <button onClick={onCheckDetails}>Check Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
