// src/components/Footer.jsx
import React from 'react';

class Footer extends React.Component {
  render() {
    const footerStyle = {
      backgroundColor: '#2C3E50',  // Dark slate color for a professional look
      color: '#ECF0F1',  // Light text for contrast
      textAlign: 'center',
      padding: '20px',  // Adjusted padding
      position: 'fixed',
      width: '100%',  // Ensure it spans the entire width of the page
      bottom: 0,
      fontFamily: 'Arial, sans-serif',
      fontSize: '14px',
      boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.2)',  // Slight shadow for depth
      display: 'flex',
      flexDirection: 'column',  // Stack items vertically
      justifyContent: 'center',  // Center items vertically
      alignItems: 'center',  // Center items horizontally
    };

    const sectionStyle = {
      margin: '5px 0',  // Add spacing between the two lines
      fontSize: '16px',
    };

    return (
      <footer style={footerStyle}>
        <div style={sectionStyle}><strong>Powered by Demo Team</strong></div>
        <div style={sectionStyle}>&copy; {new Date().getFullYear()} | React Practice</div>
      </footer>
    );
  }
}

export default Footer;
