import React, { useState } from "react";
import "./IsTriangle.css";

const IsTriangle = () => {
  const [firstAngle, setFirstAngle] = useState(0);
  const [secondAngle, setSecondAngle] = useState(0);
  const [thirdAngle, setThirdAngle] = useState(0);
  const [message, setMessage] = useState("");

  const checkHandler = () => {
    let sum = Number(firstAngle) + Number(secondAngle) + Number(thirdAngle);
    console.log(sum);
    if (firstAngle > 0 && secondAngle > 0 && thirdAngle > 0) {
      if (sum === 180) {
        setMessage("Yes the Angles make Triangle");
      } else {
        setMessage(
          "No The angles didnt make a triangle. Try with another values"
        );
      }
    } else {
      setMessage("Please ReCheck Your Values");
    }
  };

  return (
    <div className="App">
      <h3>Enter Any Three angle to find that It makes Triangle or not? </h3>
      <div className="angles">
        <label>First Angle:</label>
        <input
          value={firstAngle}
          type="number"
          onChange={(e) => setFirstAngle(e.target.value)}
        />
        <label>Second Angle:</label>
        <input
          value={secondAngle}
          type="number"
          onChange={(e) => setSecondAngle(e.target.value)}
        />
        <label>Third Angle: </label>
        <input
          value={thirdAngle}
          type="number"
          onChange={(e) => setThirdAngle(e.target.value)}
        />
      </div>
      <button onClick={checkHandler}>Check</button>
      <div>{message}</div>
    </div>
  );
};
export default IsTriangle;
