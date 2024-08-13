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
        <p className = "chartDesc">
        Colored bars the dot lies in indicates if this amount is optimal for growth for this muscle group 
      </p>
        <div className="Planner-Button-Container">
        <button 
          className="Planner-Button" 
          onClick={handlePlannerClick}
        >
          Return to Planner
        </button>
      </div>
      </div>
      <footer className="source">
        <p>
          Source:{" "}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5684266/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Research on Exercise and Muscle Groups
          </a>
        </p>
        </footer>
    </div>
  );
};

export default AnalysisPage;