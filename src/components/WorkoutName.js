import React, { useState } from "react";
import "./WorkoutName.css";

const WorkoutName = () => {
  const [name, setName] = useState("");

  // Handle the input change event
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
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
