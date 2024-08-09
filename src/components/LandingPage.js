import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/workout");
  };

  const handleWaitlist = () => {
    navigate("/waitlist");
  };

  return (
    <div className="landing-page">
      <div className="section1">
        <h1 className="landing-title">Welcome to Endure AI</h1>
        <p className="landing-description">Your personal workout planner.</p>
        <button className="continue-button" onClick={handleContinue}>
          Continue as Guest
        </button>
      </div>
      <div className="section2">
        <p className="landing-waitlist">
          Interested in staying up to date with our newest features?
        </p>
        <p className="landing-description">
          Join our waitlist to stay updated.
        </p>
        <button className="continue-button" onClick={handleWaitlist}>
          Join our Waitlist
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
