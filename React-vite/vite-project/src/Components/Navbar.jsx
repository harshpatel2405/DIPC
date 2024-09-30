// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    const navStyle = {
      backgroundColor: '#004080',  // Dark blue background
      padding: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    const logoStyle = {
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold',
      textDecoration: 'none',
    };

    const ulStyle = {
      listStyleType: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
    };

    const liStyle = {
      marginLeft: '20px',
    };

    const linkStyle = {
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
      padding: '10px 15px',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    };

    const linkHoverStyle = {
      backgroundColor: '#0056b3', // Lighter blue on hover
    };

    return (
      <nav style={navStyle}>
        <Link to="/" style={logoStyle}>MyApp</Link>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link 
              to="/" 
              style={linkStyle} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Home
            </Link>
          </li>
          <li style={liStyle}>
            <Link 
              to="/about" 
              style={linkStyle} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              About
            </Link>
          </li>
          <li style={liStyle}>
            <Link 
              to="/contact" 
              style={linkStyle} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
