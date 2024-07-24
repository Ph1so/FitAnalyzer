import React, { useState } from "react";
import "./WorkoutName.css";
import Options from "./Options";
import BarChart from "./BarChart";

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
            className={`day-button ${selectedDay === day ? "selected" : ""}`}
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
      {/* Pass workouts state as a prop to BarChart */}
      <BarChart workouts={workouts} />
    </div>
  );
};

export default WorkoutName;
