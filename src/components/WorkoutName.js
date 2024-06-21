import React, { useState } from "react";
import "./WorkoutName.css";

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
  const [selectedDay, setSelectedDay] = useState("");

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Handle the input change name
  const handleInputChange = (event) => {
    const updatedNames = { ...names, [selectedDay]: event.target.value };
    setNames(updatedNames);
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
    </div>
  );
};

export default WorkoutName;
