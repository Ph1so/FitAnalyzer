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
                data: [5, 5, 7, 10, 6],
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
                ]
              },
              {
                label: "Optimal",
                data: [4, 5, 4, 6, 6],
                backgroundColor: [
                  '#00ab41'
                ]
              },
              {
                label: "Junk",
                data: [4, 5, 8, 4, 4],
                backgroundColor: [
                  "#D7504D"
                ]
              },
              
            ],
          }}
          options={{
            scales: {
              x: {
                stacked: true,
                
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
