import React from 'react';
import './AnalysisPage.css';
import { Chart as ChartJs } from "chart.js/auto"; //dont delete this otherwise it breaks
import { Bar } from "react-chartjs-2";
import BarChart from "./BarChart";

const AnalysisPage = () => {
  return (
    <div className="blank-page">
      {
        <div>
          <BarChart />
        </div>
      }
    </div>
  );
};

export default AnalysisPage;
