// TODO: chnage name of this file - wokroutname is not a good name - maybe smth like `WorkoutPlanner.js`
import React, { useState } from "react";
import "./WorkoutName.css";

// WorkoutName component creates 'Option' components dynamically
import Options from "./Options";

// TODO: everytime there is a chnage in data we need to save user progress into their json file and send it to database
// TODO: set default input values to 0 - this ensures all json files are not missing values
// TODO: integrate `names` and `workouts` into one object - unnessary to have two objects
const WorkoutName = () => {
  // save the name of the workout
  const [names, setNames] = useState({
    Mon: "",
    Tue: "",
    Wed: "",
    Thu: "",
    Fri: "",
    Sat: "",
    Sun: "",
  });

  // save the workout details
  const [workouts, setWorkouts] = useState({
    Mon: [{ workout: "", reps: "", sets: "", rir: "" }],
    Tue: [{ workout: "", reps: "", sets: "", rir: "" }],
    Wed: [{ workout: "", reps: "", sets: "", rir: "" }],
    Thu: [{ workout: "", reps: "", sets: "", rir: "" }],
    Fri: [{ workout: "", reps: "", sets: "", rir: "" }],
    Sat: [{ workout: "", reps: "", sets: "", rir: "" }],
    Sun: [{ workout: "", reps: "", sets: "", rir: "" }],
  });

  // here we would implement a function that goes into the user's json file and retrieves the data and fills in the table with the user's data

  // choose selected day
  const [selectedDay, setSelectedDay] = useState("Mon");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Handle the input change for name
  const handleInputChange = (event) => {
    const updatedNames = { ...names, [selectedDay]: event.target.value };
    setNames(updatedNames);
  };

  // Handle the workout change - when we implement user auth we will save the data to the user's json file
  const handleWorkoutChange = (day, updatedWorkouts) => {
    setWorkouts({ ...workouts, [day]: updatedWorkouts });
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
          className="WorkoutName-input"
          type="text"
          placeholder="Name"
          value={names[selectedDay]}
          onChange={handleInputChange}
        />
      )}
      {selectedDay && (
        // renders the options component
        <Options
          exercises={workouts[selectedDay]}
          onExercisesChange={(updatedWorkouts) =>
            handleWorkoutChange(selectedDay, updatedWorkouts)
          }
        />
      )}
    </div>
  );
};

export default WorkoutName;
