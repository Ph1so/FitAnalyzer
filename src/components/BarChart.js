import React from "react";
import { Bar } from 'react-chartjs-2';


const BarChart = () => {
  return (
    <div>
        <Bar 
          data={{
            labels: ["Back", "Bicep", "Tricep", "Chest", "Legs"],
            datasets: [
              {
                label: "User",
                data: [7, 18, 7, 12, 16],
                backgroundColor: [
                    '#FFFFFF'
                ],
                borderColor: "#ffffff",
                tension: 0.4,
                type:'scatter'
              },
              {
                // later add variable so that user data is the sets they input 
                label: "Sub-Optimal",
                data: [12, 10, 8, 10, 10],
                backgroundColor: [
                  'rgba(231,188,64)'
                ],
                borderWidth: 1,
                barPercentage: 0.7,
                categoryPercentage: 0.5
              },
              {
                label: "Optimal",
                data: [6, 5, 5, 6, 8],
                backgroundColor: [
                  '#00ab41'
                ],
                borderWidth: 1,
                barPercentage: 0.7,
                categoryPercentage: 0.5
              },
              {
                label: "Junk",
                data: [2, 5, 7, 4, 2],
                backgroundColor: [
                  "#D7504D"
                ],
                borderWidth: 1,
                barPercentage: 0.7,
                categoryPercentage: 0.5
              },
              
            ],
          }}
          options={{
            indexAxis: 'y',
            scales: {
              x: {
                beginAtZero: true,
                stacked: true,
                grid: {
                  color: '#808080',
              },
              },
              y: {
                beginAtZero: true,
                grid: {
                    color: '#808080',
                },
                stacked: true,
              },
              
            }
          }
          }
        />
        </div>
   
  );
};

export default BarChart;
