import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">FitAnalyzer</h1>
      <div className="icon-container">
        <Link to="/home" className="navbar-links">
          Home
        </Link>
        <Link to="/workout" className="navbar-links">
          Workout
        </Link>
        <Link to="/analysis" className="navbar-links">
          Analysis
        </Link>
        <Link to="/waitlist" className="navbar-links">
          Waitlist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
