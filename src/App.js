import "./index.css";
import Title from "./components/Title";
import WorkoutName from "./components/WorkoutName";

function App() {
  return (
    <div className="App">
      <div className="version">v.1.0</div>
      <div className="Components-Container">
        <Title />
        <WorkoutName />
      </div>
    </div>
  );
}

export default App;
