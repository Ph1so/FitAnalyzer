import React from 'react';
import './Navbar.css';
import logo from './logo.webp';
import { FaHome } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { SiSimpleanalytics } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="FitAnalyzer Logo" className="navbar-logo" />
            <h1 className="navbar-title">FitAnalyzer</h1>
            <div className="icon-container">
                <FaHome className="icon" />
                <GiMuscleUp className="icon" />
                <SiSimpleanalytics className="icon" />
            </div>
        </nav>
    );
};

export default Navbar