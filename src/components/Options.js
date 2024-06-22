import React from "react";
import "./Options.css";

const Options = ({ exercises, onExercisesChange }) => {
  const addExercise = () => {
    const updatedExercises = [
      ...exercises,
      { workout: "", reps: "", sets: "", rir: "" },
    ];
    onExercisesChange(updatedExercises);
  };

  const removeExercise = (index) => {
    const updatedExercises = exercises.filter((_, i) => i !== index);
    onExercisesChange(updatedExercises);
  };

  const handleChange = (index, field, value) => {
    const updatedExercises = exercises.map((exercise, i) => {
      if (i === index) {
        return { ...exercise, [field]: value };
      }
      return exercise;
    });
    onExercisesChange(updatedExercises);
  };

  return (
    <div>
      {exercises.map((exercise, index) => (
        <div className="Option-container" key={index}>
          <div className="Workout-choice">
            <label htmlFor={`workout-select-${index}`}>Workout Choice:</label>
            <select
              id={`workout-select-${index}`}
              value={exercise.workout}
              onChange={(e) => handleChange(index, "workout", e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            {index === exercises.length - 1 ? (
              <button className="Add-Workout" onClick={addExercise}>
                Add
              </button>
            ) : (
              <button
                className="Remove-Workout"
                onClick={() => removeExercise(index)}
              >
                Remove
              </button>
            )}
          </div>
          <div className="Reps-container">
            <div className="Reps">
              <label htmlFor={`reps-select-${index}`}>Reps: </label>
              <input
                type="text"
                placeholder="Reps"
                id={`reps-select-${index}`}
                value={exercise.reps}
                onChange={(e) => handleChange(index, "reps", e.target.value)}
              />
            </div>
            <div className="Sets">
              <label htmlFor={`sets-select-${index}`}>Sets: </label>
              <input
                type="text"
                placeholder="Sets"
                id={`sets-select-${index}`}
                value={exercise.sets}
                onChange={(e) => handleChange(index, "sets", e.target.value)}
              />
            </div>
            <div className="Rir">
              <label htmlFor={`rir-select-${index}`}>RIR: </label>
              <input
                type="text"
                placeholder="RIR"
                id={`rir-select-${index}`}
                value={exercise.rir}
                onChange={(e) => handleChange(index, "rir", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;
