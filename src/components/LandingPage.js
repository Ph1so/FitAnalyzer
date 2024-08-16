import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import backgroundImage from "../images/workout.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/workout");
  };

  return (
    <div
      className="landing-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="landing-title">Enduure</h1>
      <button className="continue-button" onClick={handleContinue}>
        Continue as Guest
      </button>
    </div>
  );
};

export default LandingPage;
