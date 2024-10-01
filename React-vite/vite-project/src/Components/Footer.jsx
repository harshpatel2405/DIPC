// src/components/Footer.jsx
import React from 'react';

class Footer extends React.Component {
  render() {
    const footerStyle = {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      // padding: '10px',
      position: 'fixed',
      width: '98.5%',
      bottom: 0
    };

    return (
      <footer style={footerStyle}>
        <strong>Centralized by Demo Team....</strong>
        <p>&copy; {new Date().getFullYear()} | React Practice</p>
      </footer>
    );
  }
}

export default Footer;
