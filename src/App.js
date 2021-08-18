import React, { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import IsTriangle from "./components/IsTriangle";
import AreaOfTriangle from "./components/AreaOfTriangle";

function App() {
  const [quiz, setQuiz] = useState(true);
  const [isTriangle, setIsTriangle] = useState(false);
  const [area, setArea] = useState(false);
  const [thirdSide, setThirdSide] = useState(false);

  const quizHandler = () => {
    setQuiz(true);
    setIsTriangle(false);
    setArea(false);
    setThirdSide(false);
  };

  const isTriangleHandler = () => {
    setQuiz(false);
    setIsTriangle(true);
    setArea(false);
    setThirdSide(false);
  };

  const thirdSideHandler = () => {
    setQuiz(false);
    setIsTriangle(false);
    setArea(false);
    setThirdSide(true);
  };

  const areaHandler = () => {
    setQuiz(false);
    setIsTriangle(false);
    setArea(true);
    setThirdSide(false);
  };

  return (
    <div className="App">
      <h1> Fun With Triangles </h1>
      <hr />
      <div className="row-buttons">
        <button onClick={quizHandler}>Quiz On Triangles</button>
        <button onClick={isTriangleHandler}>Is it triangle?</button>
        <button onClick={areaHandler}>Area Of a Triangle</button>
        <button onClick={thirdSideHandler}>Find Third side</button>
      </div>
      <div className="container">
        {quiz && <Quiz />}
        {isTriangle && <IsTriangle />}
        {area && <AreaOfTriangle />}
        {thirdSide && <h3>Third Side</h3>}
      </div>
    </div>
  );
}

export default App;
