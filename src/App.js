import React from "react";
import "./index.css";
import Title from "./components/Title";
import WorkoutName from "./components/WorkoutName";
import {Chart as ChartJs } from 'chart.js/auto'; //dont delete this otherwise it breaks 
import { Bar } from 'react-chartjs-2';
import BarChart from "./components/BarChart";

// TODO: consider putting the array of day names + workouts here instead of in WorkoutName.js and then passing it down as props
function App() {
  return (
    <div className="App">
      <div className="version">v.1.0</div>
      <div className="Components-Container">
        <Title />
        <WorkoutName />
      </div>
      <div>
        <BarChart/>
      </div>
    </div>
  );
}

export default App;
