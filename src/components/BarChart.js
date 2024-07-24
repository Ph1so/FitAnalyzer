import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
import PropTypes from "prop-types";

const BarChart = ({ workouts }) => {
  console.log(workouts);
  return (
    <div className="bar-chart-container">
      <pre>{JSON.stringify(workouts, null, 2)}</pre>
      <Bar
        data={{
          labels: ["Back", "Bicep", "Tricep", "Chest", "Legs"],
          datasets: [
            {
              label: "User",
              data: [7, 18, 7, 12, 16],
              backgroundColor: ["#FFFFFF"],
              borderColor: "#ffffff",
              tension: 0.4,
              type: "scatter",
            },
            {
              label: "Sub-Optimal",
              data: [12, 10, 8, 10, 10],
              backgroundColor: ["rgba(231,188,64)"],
              borderWidth: 1,
              barPercentage: 0.7,
              categoryPercentage: 0.5,
            },
            {
              label: "Optimal",
              data: [6, 5, 5, 6, 8],
              backgroundColor: ["#00ab41"],
              borderWidth: 1,
              barPercentage: 0.7,
              categoryPercentage: 0.5,
            },
            {
              label: "Junk",
              data: [2, 5, 7, 4, 2],
              backgroundColor: ["#D7504D"],
              borderWidth: 1,
              barPercentage: 0.7,
              categoryPercentage: 0.5,
            },
          ],
        }}
        options={{
          indexAxis: "y",
          scales: {
            x: {
              beginAtZero: true,
              stacked: true,
              grid: {
                color: "#808080",
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: "#808080",
              },
              stacked: true,
            },
          },
        }}
      />
    </div>
  );
};

BarChart.propTypes = {
  workouts: PropTypes.array.isRequired,
};

export default BarChart;
