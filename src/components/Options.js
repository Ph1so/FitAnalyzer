import React from "react";
import "./Options.css";

const Options = () => {
  return (
    <div className="Option-container">
      <div className="Workout-choice">
        <label htmlFor="workout-select">Workout Choice:</label>
        <select id="workout-select">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="Reps-container">
        <div className="Reps">
          <label htmlFor="reps-select">Reps: </label>
          <input type="text" placeholder="Reps" id="reps-select" />
        </div>
        <div className="Sets">
          <label htmlFor="sets-select">Sets: </label>
          <input type="text" placeholder="Sets" id="sets-select" />
        </div>
        <div className="Rir">
          <label htmlFor="rir-select">RIR: </label>
          <input type="text" placeholder="RIR" id="rir-select" />
        </div>
      </div>
    </div>
  );
};

export default Options;
