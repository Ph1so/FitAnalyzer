import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Options.css";

const Options = ({ exercises, onExercisesChange }) => {
  const [optionsList, setOptionsList] = useState([]);
  const [exerciseDict, setExerciseDict] = useState({});
  let abSets = 0;
  let abdSets= 0;
  let addSets = 0;
  let bicSets = 0;
  let calSets = 0;
  let cheSets = 0;
  let forSets = 0;
  let gluSets = 0;
  let hamSets = 0;
  let latSets = 0;
  let lowBackSets = 0;
  let midBackSets = 0;
  let neckSets = 0;
  let quadSets = 0;
  let trapSets = 0;
  let triSets = 0;

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/names");
        setOptionsList(response.data);
      } catch (error) {
        console.error("Error fetching the names:", error);
      }
    };

    fetchNames();
  }, []);

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

    const updatedDict = { ...exerciseDict };
    updatedDict[updatedExercises[index].workout] = {
      reps: updatedExercises[index].reps,
      sets: updatedExercises[index].sets,
    };
    setExerciseDict(updatedDict);
    console.log("Exercise Dictionary Updated: ", updatedDict);
  };

  return (
    <div>
      {exercises.map((exercise, index) => (
        <div className="Option-container" key={index}>
          <div className="Workout-choice">
            <label htmlFor={`workout-select-${index}`}>
              Exercise #{index + 1}:
            </label>
            <select
              id={`workout-select-${index}`}
              value={exercise.workout}
              onChange={(e) => handleChange(index, "workout", e.target.value)}
            >
              <option value="">Select an option</option>
              {optionsList.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {index === exercises.length - 1 ? (
              <button className="Add-Workout" onClick={addExercise}>
                Add
              </button>
            ) : (
              <button
                style={{ display: "inline-block" }}
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
