import "./index.css";
import Options from "./components/Options";
import Title from "./components/Title";
import WorkoutName from "./components/WorkoutName";

function App() {
  return (
    <div className="App">
      <div className="version">v.1.0</div>
      <div className="Compoents-Container">
        <Title />
        <WorkoutName />
        <Options />
        <Options />
        <Options />
        <Options />
        <Options />
        <Options />
        <Options />
      </div>
    </div>
  );
}

export default App;
