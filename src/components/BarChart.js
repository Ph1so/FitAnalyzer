import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useWorkoutContext } from './WorkoutContext';
import './BarChart.css';
import $ from 'jquery'; // Ensure jQuery is installed if not using Fetch API

const BarChart = () => {
  const { workouts } = useWorkoutContext();
  const [exerciseData, setExerciseData] = useState({
    bicepExercises: [],
    tricepExercises: [],
    chestExercises: [],
    legExercises: [],
    backExercises: [],
  });

  useEffect(() => {
    const fetchExercises = async (muscles) => {
      try {
        const musclePromises = muscles.map((muscle) =>
          $.ajax({
            method: 'GET',
            url: `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
            headers: { 'X-Api-Key': 'VLZrd4JluETX99Ojr4h06w==AmFEACNadX8JYxQK' },
            contentType: 'application/json',
          })
        );

        const results = await Promise.all(musclePromises);
        
        // Combine all results for legs and back muscles
        const allLegExercises = [...results[2], ...results[3]]; // Quadriceps and hamstrings
        const allBackExercises = [...results[0], ...results[1], ...results[4]]; // Lats, lower_back, middle_back

        // Add manually "Lat-pulldown" exercise
        const latPulldown = { name: 'Lat Pulldown', muscle: 'lats' };
        allBackExercises.push(latPulldown);

        // Set state with combined results
        setExerciseData({
          bicepExercises: results[5],
          tricepExercises: results[6],
          chestExercises: results[7],
          legExercises: allLegExercises,
          backExercises: allBackExercises,
        });
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises([
      'lats', 'lower_back', 'middle_back', 'quadriceps', 'hamstrings', 'biceps', 'triceps', 'chest'
    ]);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Initialize sets count for each muscle group
  const setsPerMuscleGroup = {
    biceps: 0,
    triceps: 0,
    chest: 0,
    legs: 0,
    back: 0,
  };

  // Initialize sets count for each day
  const setsPerDay = {
    Mon: { biceps: 0, triceps: 0, chest: 0, legs: 0, back: 0 },
    Tue: { biceps: 0, triceps: 0, chest: 0, legs: 0, back: 0 },
    Wed: { biceps: 0, triceps: 0, chest: 0, legs: 0, back: 0 },
    Thu: { biceps: 0, triceps: 0, chest: 0, legs: 0, back: 0 },
    Fri: { biceps: 0, triceps: 0, chest: 0, legs: 0, back: 0 },
    Sat: { biceps: 0, triceps: 0, chest: 0, legs: 0, back: 0 },
    Sun: { biceps: 0, triceps: 0, chest: 0, legs: 0, back: 0 },
  };

  // Process workouts for each day of the week
  Object.keys(setsPerDay).forEach((day) => {
    const dailyWorkouts = workouts?.[day]?.exercises || [];
    dailyWorkouts.forEach((workout) => {
      const name = workout?.workout || '';
      const sets = parseInt(workout?.sets, 10) || 0;

      if (name && sets > 0) {
        if (exerciseData.bicepExercises.some((ex) => ex.name === name)) {
          setsPerDay[day].biceps += sets;
        }
        if (exerciseData.tricepExercises.some((ex) => ex.name === name)) {
          setsPerDay[day].triceps += sets;
        }
        if (exerciseData.chestExercises.some((ex) => ex.name === name)) {
          setsPerDay[day].chest += sets;
        }
        if (exerciseData.legExercises.some((ex) => ex.name === name)) {
          setsPerDay[day].legs += sets;
        }
        if (exerciseData.backExercises.some((ex) => ex.name === name)) {
          setsPerDay[day].back += sets;
        }
      }
    });
  });

  // Aggregate sets from all days
  Object.keys(setsPerDay).forEach((day) => {
    setsPerMuscleGroup.biceps += setsPerDay[day].biceps;
    setsPerMuscleGroup.triceps += setsPerDay[day].triceps;
    setsPerMuscleGroup.chest += setsPerDay[day].chest;
    setsPerMuscleGroup.legs += setsPerDay[day].legs;
    setsPerMuscleGroup.back += setsPerDay[day].back;
  });

  // Format the fetched exercises data into a format suitable for the chart
  const formattedData = {
    labels: ['Back', 'Bicep', 'Tricep', 'Chest', 'Legs'],
    datasets: [
      {
        label: 'User',
        data: [
          setsPerMuscleGroup.back,
          setsPerMuscleGroup.biceps,
          setsPerMuscleGroup.triceps,
          setsPerMuscleGroup.chest,
          setsPerMuscleGroup.legs,
        ],
        backgroundColor: ['#FFFFFF'],
        borderColor: '#ffffff',
        tension: 0.4,
        type: 'scatter',
      },
      {
        label: 'Sub-Optimal',
        data: [12, 10, 8, 10, 10],
        backgroundColor: ['rgba(231,188,64)'],
        borderWidth: 1,
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
      {
        label: 'Optimal',
        data: [6, 5, 5, 6, 8],
        backgroundColor: ['#00ab41'],
        borderWidth: 1,
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
      {
        label: 'Junk',
        data: [2, 5, 7, 4, 2],
        backgroundColor: ['#D7504D'],
        borderWidth: 1,
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
    ],
  };

  return (
    <div className="bar-chart-container">
      <pre>{JSON.stringify(workouts, null, 2)}</pre>
      <Bar
        data={formattedData}
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
          },
        }}
      />
    </div>
  );
};

export default BarChart;