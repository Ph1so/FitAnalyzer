import React from "react";
import "./index.css";
import Title from "./components/Title";
import WorkoutName from "./components/WorkoutName";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AnalysisPage from "./components/AnalysisPage";
import { Chart as ChartJs } from "chart.js/auto"; //dont delete this otherwise it breaks
import { Bar } from "react-chartjs-2";
import BarChart from "./components/BarChart";

// TODO: consider putting the array of day names + workouts here instead of in WorkoutName.js and then passing it down as props
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/workout" element={<WorkoutPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </div>
      <div>
        <BarChart />
      </div>
    </Router>
  );
}

const WorkoutPage = () => (
  <div className="Components-Container">
    <Title />
    <WorkoutName />
  </div>
);

export default App;
