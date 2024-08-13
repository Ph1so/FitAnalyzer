import React from 'react';
import './AnalysisPage.css';
import { Chart as ChartJs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import BarChart from "./BarChart";

const AnalysisPage = () => {
  return (
    <div className="analysis-page">
      <div className="content">
        <BarChart />
      </div>
      <footer className="source">
        <p>Source: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5684266/" target="_blank" rel="noopener noreferrer">Research on Exercise and Muscle Groups</a></p>
      </footer>
    </div>
  );
};

export default AnalysisPage;