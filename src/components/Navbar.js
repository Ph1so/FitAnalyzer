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
            <div className="container">
                <div className="icon-container">
                    <FaHome className="icon-home" />
                    <GiMuscleUp className="icon-workout"/>
                    <SiSimpleanalytics className="icon-stats"/>
                </div>
            </div>
        </nav>
    );

};

export default Navbar