import React from 'react';
import './header.css';

const Header = ({ title, subtitle }) => {
  return (
    <div className="header">

      <h1>Practice</h1>

       
        <h5>Home</h5>
        <h5>Review</h5>
        <h5>Contact Us</h5>
        <h5>Login</h5>
      

    </div>
  );
};

export default Header;
