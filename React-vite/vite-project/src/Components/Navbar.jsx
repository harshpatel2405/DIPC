// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the separate CSS file

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-logo">MyApp</Link>
        <ul className="navbar-ul">
          <li className="navbar-li">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-li">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-li">
            <Link to="/contact" className="navbar-link">Contact Us</Link>
          </li>
          <li className="navbar-li">
            <Link to="/todolist" className="navbar-link">To Do List</Link>
          </li>
          <li className="navbar-li">
            <Link to="/demo2" className="navbar-link">Demo 2</Link>
          </li>
          <li className="navbar-li">
            <Link to="/demo3" className="navbar-link">Demo 3</Link>
          </li>
          <li className="navbar-li">
            <Link to="/demo4" className="navbar-link">Demo 4</Link>
          </li>
          <li className="navbar-li">
            <Link to="/demo5" className="navbar-link">Demo 5</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
