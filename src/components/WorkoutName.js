// WorkoutName.js
import React, { useState } from 'react';
import { useWorkoutContext } from './WorkoutContext';
import './WorkoutName.css';
import Options from './Options';
import BarChart from './BarChart';

const WorkoutName = () => {
  const { workouts, setWorkouts } = useWorkoutContext();
  const [selectedDay, setSelectedDay] = useState('Mon');
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleInputChange = (event) => {
    const updatedWorkouts = {
      ...workouts,
      [selectedDay]: { ...workouts[selectedDay], name: event.target.value },
    };
    setWorkouts(updatedWorkouts);
  };

  const handleWorkoutChange = (day, updatedExercises) => {
    setWorkouts({
      ...workouts,
      [day]: { ...workouts[day], exercises: updatedExercises },
    });
  };

  const handleButtonClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="parent-container">
      <div className="days-container">
        {days.map((day) => (
          <button
            key={day}
            className={`day-button ${selectedDay === day ? 'selected' : ''}`}
            onClick={() => handleButtonClick(day)}
          >
            {day}
          </button>
        ))}
      </div>
      {selectedDay && (
        <input
          className="WorkoutPlanner-input"
          type="text"
          placeholder="Name"
          value={workouts[selectedDay].name}
          onChange={handleInputChange}
        />
      )}
      {selectedDay && (
        <Options
          exercises={workouts[selectedDay].exercises}
          onExercisesChange={(updatedExercises) =>
            handleWorkoutChange(selectedDay, updatedExercises)
          }
        />
      )}
      {/* <BarChart /> */}
    </div>
  );
};

export default WorkoutName;