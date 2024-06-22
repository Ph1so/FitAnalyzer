import React, { useState } from "react";
import "./WorkoutName.css";
import Options from "./Options";

const WorkoutName = () => {
  const [names, setNames] = useState({
    Mon: "",
    Tue: "",
    Wed: "",
    Thu: "",
    Fri: "",
    Sat: "",
    Sun: "",
  });

  const [workouts, setWorkouts] = useState({
    Mon: [{ workout: "", reps: "", sets: "", rir: "" }],
    Tue: [{ workout: "", reps: "", sets: "", rir: "" }],
    Wed: [{ workout: "", reps: "", sets: "", rir: "" }],
    Thu: [{ workout: "", reps: "", sets: "", rir: "" }],
    Fri: [{ workout: "", reps: "", sets: "", rir: "" }],
    Sat: [{ workout: "", reps: "", sets: "", rir: "" }],
    Sun: [{ workout: "", reps: "", sets: "", rir: "" }],
  });

  const [selectedDay, setSelectedDay] = useState("Mon");

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Handle the input change for name
  const handleInputChange = (event) => {
    const updatedNames = { ...names, [selectedDay]: event.target.value };
    setNames(updatedNames);
  };

  // Handle the workout change
  const handleWorkoutChange = (day, updatedWorkouts) => {
    setWorkouts({ ...workouts, [day]: updatedWorkouts });
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
            className={`day-button ${selectedDay === day ? "selected" : ""}`}
            onClick={() => handleButtonClick(day)}
          >
            {day}
          </button>
        ))}
      </div>
      {selectedDay && (
        <input
          className="WorkoutName-input"
          type="text"
          placeholder="Name"
          value={names[selectedDay]}
          onChange={handleInputChange}
        />
      )}
      {selectedDay && (
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
