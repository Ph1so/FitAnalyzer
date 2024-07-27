// WorkoutContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for workout data
const WorkoutContext = createContext();

// Create a provider component
export const WorkoutProvider = ({ children }) => {
  // State to hold workout data
  const [workouts, setWorkouts] = useState({
    Mon: { name: "", exercises: [{ workout: "", reps: "", sets: "", rir: "" }] },
    Tue: { name: "", exercises: [{ workout: "", reps: "", sets: "", rir: "" }] },
    Wed: { name: "", exercises: [{ workout: "", reps: "", sets: "", rir: "" }] },
    Thu: { name: "", exercises: [{ workout: "", reps: "", sets: "", rir: "" }] },
    Fri: { name: "", exercises: [{ workout: "", reps: "", sets: "", rir: "" }] },
    Sat: { name: "", exercises: [{ workout: "", reps: "", sets: "", rir: "" }] },
    Sun: { name: "", exercises: [{ workout: "", reps: "", sets: "", rir: "" }] },
  });

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </WorkoutContext.Provider>
  );
};

// Custom hook to use the workout context
export const useWorkoutContext = () => useContext(WorkoutContext);