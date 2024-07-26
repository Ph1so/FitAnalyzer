// TODO: chnage name of this file - wokroutname is not a good name - maybe smth like `WorkoutPlanner.js`
import React, { useState } from "react";
import "./WorkoutName.css";

// WorkoutName component creates 'Option' components dynamically
import Options from "./Options";
import BarChart from "./BarChart";

// TODO: everytime there is a chnage in data we need to save user progress into their json file and send it to database
// TODO: set default input values to 0 - this ensures all json files are not missing values
// TODO: integrate `names` and `workouts` into one object - unnessary to have two objects
const WorkoutName = () => {
 
  const [workouts, setWorkouts] = useState({
    Mon: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
    Tue: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
    Wed: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
    Thu: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
    Fri: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
    Sat: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
    Sun: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
  });

  
  const [selectedDay, setSelectedDay] = useState("Mon");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Handle the input change for name
  const handleInputChange = (event) => {
    const updatedWorkouts = {
      ...workouts,
      [selectedDay]: { ...workouts[selectedDay], name: event.target.value },
    };
    setWorkouts(updatedWorkouts);
  };

  // Handle the workout change - when we implement user auth we will save the data to the user's json file
  const handleWorkoutChange = (day, updatedExercises) => {
    setWorkouts({
      ...workouts,
      [day]: { ...workouts[day], exercises: updatedExercises },
    });
  };

  // Handle the button click for the day
  const handleButtonClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="parent-container">
      <div className="days-container">
        {days.map((day) => (
          <button
            key={day}
            className={`day-button ${selectedDay === day ? "selected" : ""}`}
            onClick={() => handleButtonClick(day)}
          >
            {day}
          </button>
        ))}
      </div>
      {selectedDay && (
        // renders an input field for the user to input their workout name
        <input
           className="WorkoutPlanner-input"
          type="text"
          placeholder="Name"
          value={workouts[selectedDay].name}
          onChange={handleInputChange}
        />
      )}
      {selectedDay && (
        // renders the options component
        <Options
        exercises={workouts[selectedDay].exercises}
        onExercisesChange={(updatedExercises) =>
          handleWorkoutChange(selectedDay, updatedExercises)
          }
        />
      )}
        {/* Pass workouts state as a prop to BarChart */}
        <BarChart workouts={workouts} />
    </div>
  );
};

export default WorkoutName;
