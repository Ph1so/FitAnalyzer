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
    quadExercises: [],
    backExercises: [],
    hamstringExercises: [], // Added for hamstrings
    calfExercises: [], // Added for calves
  });

  // State for warnings
  const [warnings, setWarnings] = useState({
    considerMore: [],
    considerLess: []
  });
  
  const [loaded, setLoaded] = useState(false); // New state for animation

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
        
        // Combine results for back muscles
        const allBackExercises = [...results[0], ...results[1], ...results[2]]; // Lats, lower_back, middle_back

        // Add manually "Lat-pulldown" exercise
        const latPulldown = { name: 'Lat Pulldown', muscle: 'lats' };
        allBackExercises.push(latPulldown);

        // Add manually "preacher-curl" exercise
        const preacherCurl = { name: 'Preacher Curl', muscle: 'biceps' };
        results[5].push(preacherCurl);

        const tricepPushdown = { name: 'Tricep Pushdown', muscle: 'triceps' };
        results[6].push(tricepPushdown);

        // Set state with results
        setExerciseData({
          bicepExercises: results[5],
          tricepExercises: results[6],
          chestExercises: results[7],
          quadExercises: results[3], // Include quadriceps exercises
          backExercises: allBackExercises,
          hamstringExercises: results[4], // Include hamstrings exercises
          calfExercises: results[8], // Include calves exercises
        });

        // Set loaded state to true after 1 second
        setTimeout(() => {
          setLoaded(true);
        }, 1000);

      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises([
      'lats', 'lower_back', 'middle_back', 'quadriceps', 'hamstrings', 'biceps', 'triceps', 'chest', 'calves'
    ]);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Initialize sets count for each muscle group
  const setsPerMuscleGroup = {
    biceps: 0,
    triceps: 0,
    chest: 0,
    quads: 0, // Include quadriceps
    back: 0,
    hamstrings: 0, // Include hamstrings
    calves: 0, // Include calves
  };

  // Initialize sets count for each day
  const setsPerDay = {
    Mon: { biceps: 0, triceps: 0, chest: 0, quads: 0, back: 0, hamstrings: 0, calves: 0 },
    Tue: { biceps: 0, triceps: 0, chest: 0, quads: 0, back: 0, hamstrings: 0, calves: 0 },
    Wed: { biceps: 0, triceps: 0, chest: 0, quads: 0, back: 0, hamstrings: 0, calves: 0 },
    Thu: { biceps: 0, triceps: 0, chest: 0, quads: 0, back: 0, hamstrings: 0, calves: 0 },
    Fri: { biceps: 0, triceps: 0, chest: 0, quads: 0, back: 0, hamstrings: 0, calves: 0 },
    Sat: { biceps: 0, triceps: 0, chest: 0, quads: 0, back: 0, hamstrings: 0, calves: 0 },
    Sun: { biceps: 0, triceps: 0, chest: 0, quads: 0, back: 0, hamstrings: 0, calves: 0 },
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
        if (exerciseData.quadExercises.some((ex) => ex.name === name)) {
          setsPerDay[day].quads += sets;
        }
        if (exerciseData.backExercises.some((ex) => ex.name === name)) {
          setsPerDay[day].back += sets;
        }
        if (exerciseData.hamstringExercises.some((ex) => ex.name === name)) {
          setsPerDay[day].hamstrings += sets;
        }
        if (exerciseData.calfExercises.some((ex) => ex.name === name)) {
          setsPerDay[day].calves += sets;
        }
      }
    });
  });

  // Aggregate sets from all days
  Object.keys(setsPerDay).forEach((day) => {
    setsPerMuscleGroup.biceps += setsPerDay[day].biceps;
    setsPerMuscleGroup.triceps += setsPerDay[day].triceps;
    setsPerMuscleGroup.chest += setsPerDay[day].chest;
    setsPerMuscleGroup.quads += setsPerDay[day].quads;
    setsPerMuscleGroup.back += setsPerDay[day].back;
    setsPerMuscleGroup.hamstrings += setsPerDay[day].hamstrings;
    setsPerMuscleGroup.calves += setsPerDay[day].calves;
  });

  // Update the warnings based on the set counts
  useEffect(() => {
    setWarnings({
      considerMore: [
        setsPerMuscleGroup.chest > 16 ? 'Chest' : '',
        setsPerMuscleGroup.back < 12 ? 'Back' : '',
        setsPerMuscleGroup.biceps < 5 ? 'Biceps' : '',
        setsPerMuscleGroup.triceps < 5 ? 'Triceps' : '',
        setsPerMuscleGroup.hamstrings < 12 ? 'Hamstrings' : '',
        setsPerMuscleGroup.quads < 12 ? 'Quads' : '',
        setsPerMuscleGroup.calves < 5 ? 'Calves' : '',
      ].filter(Boolean).join(', '),
      considerLess: [
        setsPerMuscleGroup.chest > 16 ? 'Chest' : '',
        setsPerMuscleGroup.back > 16 ? 'Back' : '',
        setsPerMuscleGroup.biceps > 9 ? 'Biceps' : '',
        setsPerMuscleGroup.triceps > 9 ? 'Triceps' : '',
        setsPerMuscleGroup.hamstrings > 16 ? 'Hamstrings' : '',
        setsPerMuscleGroup.quads > 16 ? 'Quads' : '',
        setsPerMuscleGroup.calves > 9 ? 'Calves' : '',
      ].filter(Boolean).join(', '),
    });
  }, [
    setsPerMuscleGroup.back,
    setsPerMuscleGroup.chest,
    setsPerMuscleGroup.biceps,
    setsPerMuscleGroup.triceps,
    setsPerMuscleGroup.hamstrings,
    setsPerMuscleGroup.quads,
    setsPerMuscleGroup.calves,
  ]);

  // Format the fetched exercises data into a format suitable for the chart
  const formattedData = {
    labels: ['Back', 'Bicep', 'Tricep', 'Chest', 'Quads', 'Hams', 'Calves'],
    datasets: [
      {
        label: 'User',
        data: [
          setsPerMuscleGroup.back,
          setsPerMuscleGroup.biceps,
          setsPerMuscleGroup.triceps,
          setsPerMuscleGroup.chest,
          setsPerMuscleGroup.quads,
          setsPerMuscleGroup.hamstrings,
          setsPerMuscleGroup.calves,
        ],
        backgroundColor: ['#FFFFFF'],
        borderColor: '#ffffff',
        tension: 0.4,
        type: 'scatter',
      },
      {
        label: 'Sub-Optimal',
        data: [12, 5, 5, 12, 12, 10, 5], 
        backgroundColor: ['rgba(231,188,64)'],
        borderWidth: 1,
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
      {
        label: 'Optimal',
        data: [4, 4, 4, 4, 4, 4, 4], 
        backgroundColor: ['#00ab41'],
        borderWidth: 1,
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
      {
        label: 'Minimal',
        data: [2, 3, 3, 2, 2, 3, 3], 
        backgroundColor: ['#e07c4f'],
        borderWidth: 1,
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
      {
        label: 'Junk',
        data: [2, 8, 8, 2, 2, 3, 8], 
        backgroundColor: ['#D7504D'],
        borderWidth: 1,
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
    ],
  };

  return (
    <div className={`bar-chart-container ${loaded ? 'loaded' : ''}`}>
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
              ticks: {
                // Increase the padding to avoid overlapping
                padding: 10,
                // Show every label
                autoSkip: false,
              },
            },
          },
          elements: {
            bar: {
              // Decrease these values to increase spacing between bars
              barPercentage: 0.6, // Adjust width of the bars
              categoryPercentage: 0.8, // Adjust the spacing between groups of bars
            },
          },
        }}
      />
      <div className="warning-container">
        <p className="warning-message">
          {warnings.considerMore && `Consider more: ${warnings.considerMore}`}
        </p>
        <p className="warning-message">
          {warnings.considerLess && `Consider less: ${warnings.considerLess}`}
        </p>
      </div>
    </div>
  );
};

export default BarChart;