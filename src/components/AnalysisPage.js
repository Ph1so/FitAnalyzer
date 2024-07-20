import React, { useEffect, useState } from 'react';
import './AnalysisPage.css';
import { Chart as ChartJs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import BarChart from "./BarChart";
import $ from 'jquery';

const AnalysisPage = () => {
  const [bicepExercises, setBicepExercises] = useState([]);
  const [tricepExercises, setTricepExercises] = useState([]);
  const [chestExercises, setChestExercises] = useState([]);
  const [legExercises, setLegExercises] = useState([]);
  const [backExercises, setBackExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = (muscle, callback) => {
      $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
        headers: { 'X-Api-Key': 'VLZrd4JluETX99Ojr4h06w==AmFEACNadX8JYxQK' },
        contentType: 'application/json',
        success: function(result) {
          console.log(`${muscle} exercises:`, result);
          callback(result); // Call the callback with fetched data
        },
        error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
        }
      });
    };

    // Fetch bicep exercises
    fetchExercises('biceps', setBicepExercises);
    // Fetch tricep exercises
    fetchExercises('triceps', setTricepExercises);
    // Fetch chest exercises
    fetchExercises('chest', setChestExercises);

    // Fetch leg exercises for quadriceps and hamstrings
    let allLegExercises = [];
    const fetchLegExercises = () => {
      fetchExercises('quadriceps', (result) => {
        allLegExercises = [...allLegExercises, ...result];
        fetchExercises('hamstrings', (result) => {
          allLegExercises = [...allLegExercises, ...result];
          setLegExercises(allLegExercises); // Set combined leg exercises
        });
      });
    };

    fetchLegExercises();

  // Fetch back exercises for lats, lower_back, and middle_back
  let allBackExercises = [];
  const fetchBackExercises = () => {
    fetchExercises('lats', (result) => {
      allBackExercises = [...allBackExercises, ...result];
      fetchExercises('lower_back', (result) => {
        allBackExercises = [...allBackExercises, ...result];
        fetchExercises('middle_back', (result) => {
          allBackExercises = [...allBackExercises, ...result];
          // Manually add "Lat-pulldown" exercise
          const latPulldown = {
            name: 'Lat Pulldown',
            muscle: 'lats',
            // Add other properties as needed
          };
          allBackExercises.push(latPulldown);
          setBackExercises(allBackExercises); // Set combined back exercises
        });
      });
    });
  };

  fetchBackExercises();

  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Print the current state of exercises every render
  console.log('Bicep Exercises:', bicepExercises);
  console.log('Tricep Exercises:', tricepExercises);
  console.log('Chest Exercises:', chestExercises);
  console.log('Leg Exercises:', legExercises);
  console.log('Back Exercises:', backExercises);
  
  return (
    <div className="analysis-page">
      <div>
        <BarChart />
      </div>
    </div>
  );
};

export default AnalysisPage;