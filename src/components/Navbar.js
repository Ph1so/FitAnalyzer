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
      <Link to="/" className="navbar-title" onClick={closeMenu}>
        Enduure
      </Link>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`icon-container ${isOpen ? "open" : ""}`}>
        <Link to="/planner" className="navbar-links" onClick={closeMenu}>
          Planner
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
