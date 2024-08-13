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
      <div className={`icon-container ${isOpen ? "open" : ""}`}>
        <Link to="/workout" className="navbar-links" onClick={closeMenu}>
          Workout
        </Link>
        <Link to="/analysis" className="navbar-links" onClick={closeMenu}>
          Analysis
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
