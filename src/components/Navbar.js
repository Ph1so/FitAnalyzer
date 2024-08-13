import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
     <Link to="/home" className="navbar-title" onClick={closeMenu}>
        Endure AI
      </Link>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
<<<<<<< HEAD
      <div className={`icon-container ${isOpen ? 'open' : ''}`}>
=======
      <div className={`icon-container ${isOpen ? "open" : ""}`}>
>>>>>>> 81638d0 (remove home from navbar - endure ai is now the hyper link)
        <Link to="/workout" className="navbar-links" onClick={closeMenu}>
          Workout
        </Link>
        <Link to="/analysis" className="navbar-links" onClick={closeMenu}>
          Analysis
        </Link>
        <Link to="/waitlist" className="navbar-links" onClick={closeMenu}>
          Waitlist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
