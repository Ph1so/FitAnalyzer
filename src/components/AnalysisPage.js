import React from 'react';
import './AnalysisPage.css';
import { Chart as ChartJs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import BarChart from "./BarChart";
import { useNavigate } from "react-router-dom";

const AnalysisPage = () => {

  const navigate = useNavigate();

  const handlePlannerClick = () => {
    navigate("/workout"); // Navigate to planner page
  };

  return (
    <div className="analysis-page">
      <div className="content">
        <BarChart />
      </div>
      <div className="Planner-Button-Container">
        <button 
          className="Planner-Button" 
          onClick={handlePlannerClick}
        >
          Return to Planner
        </button>
      </div>
    </div>
  );
};

export default AnalysisPage;