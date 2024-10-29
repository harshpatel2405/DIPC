// src/components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ name, testimonial, age, img }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    margin: '10px',
    textAlign: 'center',
  };

  const nameStyle = {
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const imgStyle = {
    width: '100px', // Adjust width as needed
    height: '100px',
    borderRadius: '50%', // Make it circular (if it's a profile picture)
    marginBottom: '10px',
  };

  return (
    <div style={cardStyle}>
      <img src={img} alt={name} style={imgStyle} /> {/* Proper image tag */}
      <h3 style={nameStyle}>{name}</h3>
      <p>{testimonial}</p>
      <strong>Age : {age}</strong>
    </div>
  );
};

export default TestimonialCard;
