import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">FitAnalyzer</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`icon-container ${isOpen ? 'open' : ''}`}>
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