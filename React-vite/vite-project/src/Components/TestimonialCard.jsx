// src/components/TestimonialCard.jsx
import React from 'react';

class TestimonialCard extends React.Component {
  render() {
    const cardStyle = {
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      margin: '10px',
      textAlign: 'center'
    };

    const nameStyle = {
      fontWeight: 'bold',
      marginBottom: '10px'
    };

    return (
      <div style={cardStyle}>
        <h3 style={nameStyle}>{this.props.name}</h3>
        <p>{this.props.testimonial}</p>
      </div>
    );
  }
}

export default TestimonialCard;
