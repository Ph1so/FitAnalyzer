import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Options.css";
import { GrAddCircle } from "react-icons/gr";
import { GrSubtractCircle } from "react-icons/gr";

const Options = ({ exercises, onExercisesChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownIndex, setDropdownIndex] = useState(null);
  // dynamically fetch the names from the database - Flask + python is used to get data using api key -> axios is used to fetch data from python
  // TODO: use axios only - replace flask + python with axios

  // only occurs once when the component is mounted
  const optionsList = [
    "Lat Pulldown",
    "Preacher Curl",
    "Tricep Pushdown",
    "Barbell Bench Press - Medium Grip",
    "Hammer Curls",
    "EZ-Bar Curl",
    "Barbell Curl",
    "Concentration curl",
    "Landmine twist",
    "Elbow plank",
    "Bottoms Up",
    "Suspended ab fall-out",
    "Dumbbell V-Sit Cross Jab",
    "Standing cable low-to-high twist",
    "Dumbbell spell caster",
    "Decline reverse crunch",
    "Spider crawl",
    "Cocoons",
    "Hip Circles (Prone)",
    "Standing Hip Circles",
    "Clam",
    "Iliotibial band SMR",
    "Thigh abductor",
    "Fire Hydrant",
    "Windmills",
    "Monster Walk",
    "IT Band and Glute Stretch",
    "Single-leg lying cross-over stretch",
    "Thigh adductor",
    "Groiners",
    "Band Hip Adductions",
    "Side Leg Raises",
    "Lateral hop",
    "Groin and Back Stretch",
    "Adductor SMR",
    "Side Lying Groin Stretch",
    "Adductor/Groin",
    "Lying Bent Leg Groin",
    "Incline Hammer Curls",
    "Wide-grip barbell curl",
    "EZ-bar spider curl",
    "Zottman Curl",
    "Biceps curl to shoulder press",
    "Flexor Incline Dumbbell Curls",
    "Smith Machine Calf Raise",
    "Standing Calf Raises",
    "Seated Calf Raise",
    "Calf Press On The Leg Press Machine",
    "Rocking Standing Calf Raise",
    "Calf Press",
    "Standing barbell calf raise",
    "Barbell Seated Calf Raise",
    "Balance Board",
    "Weighted donkey calf raise",
    "Dumbbell Bench Press",
    "Pushups",
    "Close-grip bench press",
    "Dumbbell Flyes",
    "Incline dumbbell bench press",
    "Low-cable cross-over",
    "Chest dip",
    "Decline Dumbbell Flyes",
    "Bodyweight Flyes",
    "Rickshaw Carry",
    "Palms-down wrist curl over bench",
    "Straight-bar wrist roll-up",
    "Dumbbell farmer's walk",
    "Palms-up wrist curl over bench",
    "Standing behind-the-back wrist curl",
    "Seated finger curl",
    "Seated Two-Arm Palms-Up Low-Pulley Wrist Curl",
    "Wrist Roller",
    "Seated One-Arm Dumbbell Palms-Up Wrist Curl",
    "Barbell glute bridge",
    "Barbell Hip Thrust",
    "Single-leg cable hip extension",
    "Glute bridge",
    "Single-leg glute bridge",
    "Step-up with knee raise",
    "Kettlebell thruster",
    "Kneeling Squat",
    "Flutter Kicks",
    "Glute Kickback",
    "Barbell Deadlift",
    "Romanian Deadlift With Dumbbells",
    "Clean Deadlift",
    "Sumo deadlift",
    "Romanian Deadlift from Deficit",
    "Power Snatch",
    "Power Clean from Blocks",
    "Natural Glute Ham Raise",
    "Glute ham raise-",
    "Snatch Deadlift",
    "Weighted pull-up",
    "Pullups",
    "Rocky Pull-Ups/Pulldowns",
    "Close-grip pull-down",
    "Pull-up",
    "Muscle Up",
    "Shotgun row",
    "Close-Grip Front Lat Pulldown",
    "V-bar pull-up",
    "Rope climb",
    "Atlas Stones",
    "Barbell deficit deadlift",
    "Back extension",
    "Axle Deadlift",
    "Hyperextensions With No Hyperextension Bench",
    "Deadlift with Bands",
    "Deadlift with Bands",
    "Deadlift with Chains",
    "Rack Pull with Bands",
    "Superman",
    "T-Bar Row with Handle",
    "Reverse-grip bent-over row",
    "One-Arm Dumbbell Row",
    "One-Arm Long Bar Row",
    "T-Bar Row",
    "Bent Over Two-Arm Long Bar Row",
    "Alternating sit-through with crunch",
    "Rower",
    "Seated Cable Rows",
    "Incline dumbbell row",
    "Lying Face Down Plate Neck Resistance",
    "Lying Face Up Plate Neck Resistance",
    "Seated Head Harness Neck Resistance",
    "Isometric Neck Exercise - Sides",
    "Isometric Neck Exercise - Front And Back",
    "Neck Bridge Prone",
    "Side Neck Stretch",
    "Chin To Chest Stretch",
    "Neck-SMR",
    "Neck-SMR",
    "Single-Leg Press",
    "Clean from Blocks",
    "Barbell Full Squat",
    "Tire flip",
    "Barbell back squat to box",
    "Push-press",
    "Power snatch-",
    "Hang Clean",
    "Reverse Band Box Squat",
    "Jumping rope",
    "Smith machine shrug",
    "Leverage Shrug",
    "Standing dumbbell shrug",
    "Standing dumbbell upright row",
    "Kettlebell sumo deadlift high pull",
    "Calf-Machine Shoulder Shrug",
    "Kettlebell sumo deadlift high pull",
    "Calf-Machine Shoulder Shrug",
    "Barbell shrug",
    "Barbell behind-the-back shrug",
    "Triceps dip",
    "Decline EZ-bar skullcrusher",
    "Dumbbell floor press",
    "Cable V-bar push-down",
    "Weighted bench dip",
    "EZ-Bar Skullcrusher",
    "Reverse Grip Triceps Pushdown",
    "Push-Ups - Close Triceps Position",
    "Kneeling cable triceps extension",
    "Single-arm cable triceps extension",
  ];

  const filteredOptions = optionsList.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <label className="Exercise-Number" htmlFor={`workout-select-${index}`}>
              Exercise #{index + 1}:
            </label>
            <div className="Dropdown">
              <input
                type="text"
                placeholder="Search exercise"
                value={exercise.workout}
                onChange={(e) => {
                  handleChange(index, "workout", e.target.value);
                  setSearchTerm(e.target.value);
                }}
                onClick={() => setDropdownIndex(index)}
                onBlur={() => setTimeout(() => setDropdownIndex(null), 100)}
              />
              {dropdownIndex === index && (
                <ul className="Dropdown-menu">
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        onClick={() => {
                          handleChange(index, "workout", option);
                          setSearchTerm(option);
                          setDropdownIndex(null);
                        }}
                      >
                        {option}
                      </li>
                    ))
                  ) : (
                    <li>No results</li>
                  )}
                </ul>
              )}
            

            {index === exercises.length - 1 ? (
              <button className="Add-Workout" onClick={addExercise}>
                <GrAddCircle color="white" />
              </button>
            ) : (
              <button
                style={{ display: "inline-block" }}
                className="Remove-Workout"
                onClick={() => removeExercise(index)}
              >
                <GrSubtractCircle color="white" />
              </button>
            )}
            </div>
          </div>
          <div className="Reps-container">
            <div className="Reps">
              <label htmlFor={`reps-select-${index}`}></label>
              <input
                type="text"
                placeholder="Reps"
                id={`reps-select-${index}`}
                value={exercise.reps}
                onChange={(e) => handleChange(index, "reps", e.target.value)}
              />
            </div>
            <div className="Sets">
              <label htmlFor={`sets-select-${index}`}></label>
              <input
                type="text"
                placeholder="Sets"
                id={`sets-select-${index}`}
                value={exercise.sets}
                onChange={(e) => handleChange(index, "sets", e.target.value)}
              />
            </div>
            <div className="Rir">
              <label htmlFor={`rir-select-${index}`}></label>
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

Options.propTypes = {
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      workout: PropTypes.string,
      reps: PropTypes.string,
      sets: PropTypes.string,
      rir: PropTypes.string,
    })
  ).isRequired,
  onExercisesChange: PropTypes.func.isRequired,
};

export default Options;