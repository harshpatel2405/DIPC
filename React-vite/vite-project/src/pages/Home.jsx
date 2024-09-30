// src/pages/Home.jsx
import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

class Home extends React.Component {
  render() {
    const testimonials = [
      { name: 'John Doe', testimonial: 'Great service!' },
      { name: 'Jane Smith', testimonial: 'Loved the experience.' },
      { name: 'Bob Johnson', testimonial: 'Would highly recommend!' }
    ];

    const homeStyle = {
      textAlign: 'center',
      padding: '20px'
    };

    const testimonialContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '20px'
    };

    return (
      <div style={homeStyle}>
        
        <div style={testimonialContainerStyle}>
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} name={item.name} testimonial={item.testimonial} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
