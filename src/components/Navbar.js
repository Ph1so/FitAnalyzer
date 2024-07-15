import React from "react";
import "./Navbar.css";
import logo from "../images/logo.webp";
// import { FaHome } from "react-icons/fa";
// import { GiMuscleUp } from "react-icons/gi";
// import { SiSimpleanalytics } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="FitAnalyzer Logo" className="navbar-logo" />
      <h1 className="navbar-title">FitAnalyzer</h1>
      <div className="icon-container">
        {/* <FaHome className="icon" />
        <GiMuscleUp className="icon" />
        <SiSimpleanalytics className="icon" /> */}
        <a href="/" className="navbar-links">
          Home
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
