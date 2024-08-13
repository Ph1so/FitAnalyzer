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
    <div className="landing-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="landing-title">Endure AI</h1>
      <button className="continue-button" onClick={handleContinue}>
        Continue as Guest
      </button>
    </div>
  );
};

export default LandingPage;
