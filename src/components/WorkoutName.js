import React, { useState } from "react";
import "./WorkoutName.css";

const WorkoutName = () => {
  const [name, setName] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Handle the input change name
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = (day) => {
    setSelectedDay(day);
  };
  // TDOD: add days of week
  // TODO: user enters name and it saves to day
  return (
    <div>
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
      <input
        className="WorkoutName-input"
        type="text"
        placeholder="Enter workout name"
        value={name}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default WorkoutName;
