// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../css_files/Navbar.css"; // Import the integrated CSS file

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, // State to track if the menu is open
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen })); // Toggle the menu state
  };

  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Helios
        </Link>
        <button className="navbar-toggle" onClick={this.toggleMenu}>
          ☰ {/* Hamburger icon */}
        </button>
        <ul className={`navbar-ul ${this.state.isOpen ? "open" : ""}`}>
          <li className="navbar-li">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/contact" className="navbar-link">
              Contact Us
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/todolist" className="navbar-link">
              To Do List
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/timer" className="navbar-link">
              Timer
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/counter" className="navbar-link">
              Counter
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/demo4" className="navbar-link">
              Demo 4
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/demo5" className="navbar-link">
              Demo 5
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
