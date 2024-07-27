// WorkoutContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for workout data
const WorkoutContext = createContext();

// Create a provider component
export const WorkoutProvider = ({ children }) => {
  // State to hold workout data
  const [workouts, setWorkouts] = useState({
    Mon: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
    Tue: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
    Wed: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
    Thu: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
    Fri: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
    Sat: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
    Sun: { name: "", exercises: [{ workout: "", reps: 0, sets: 0, rir: 0 }] },
  });

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </WorkoutContext.Provider>
  );
};

// Custom hook to use the workout context
export const useWorkoutContext = () => useContext(WorkoutContext);