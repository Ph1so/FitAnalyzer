import React from "react";
import "./Title.css";

const Title = () => {
  return (
    <div className="Title-container">
      <div className="Title">Planner</div>
      <p>Plan your full weekly workout schedule then click Analyze!</p>
      {/* <p>+ to add an exercise  - to delete an exercise</p> */}
    </div>
  );
};

export default Title;
