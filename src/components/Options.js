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
          <label htmlFor="reps-select">Reps:</label>
          <select id="reps-select">
            <option value="reps1">Reps 1</option>
            <option value="reps2">Reps 2</option>
            <option value="reps3">Reps 3</option>
          </select>
        </div>
        <div className="Sets">
          <label htmlFor="sets-select">Sets:</label>
          <select id="sets-select">
            <option value="sets1">Sets 1</option>
            <option value="sets2">Sets 2</option>
            <option value="sets3">Sets 3</option>
          </select>
        </div>
        <div className="Rir">
          <label htmlFor="rir-select">RIR:</label>
          <select id="rir-select">
            <option value="rir1">RIR 1</option>
            <option value="rir2">RIR 2</option>
            <option value="rir3">RIR 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Options;
